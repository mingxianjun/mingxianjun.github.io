/**
 * Created by MingXianJun on 2019/9/2
 * 3d 云组件
 */

class CloudUtil {
  constructor(eleName) {
    this.eleName = eleName;
    this.container = document.querySelector(this.eleName);

    this.camera = new THREE.Camera(30, window.innerWidth / window.innerHeight, 1, 3000);
    this.scene = new THREE.Scene();
    this.renderer = null;
    this.mesh = null;
    this.geometry = new THREE.Geometry();
    this.material = null;

    this.mouseX = 0;
    this.mouseY = 0;

    this.startTime = +new Date();
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

  }

  init() {
    this.camera.position.z = 6000;
    let texture = THREE.ImageUtils.loadTexture('src/assets/images/cloud.png');
    texture.magFilter = THREE.LinearMipMapLinearFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    let fog = new THREE.Fog(0x4584b4, -100, 3000);
    this.material = new THREE.MeshShaderMaterial({
      uniforms: {
        "map": {type: "t", value: 2, texture: texture},
        "fogColor": {type: "c", value: fog.color},
        "fogNear": {type: "f", value: fog.near},
        "fogFar": {type: "f", value: fog.far}
      },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,
      fragmentShader: fsContent,
      depthTest: false
    });
    let plane = new THREE.Mesh(new THREE.Plane(64, 64));
    for (let i = 0; i < 8000; i++) {
      plane.position.x = Math.random() * 1000 - 500;
      plane.position.y = -Math.random() * Math.random() * 200 - 15;
      plane.position.z = i;
      plane.rotation.z = Math.random() * Math.PI;
      plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;
      GeometryUtils.merge(this.geometry, plane);
    }
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.addObject(this.mesh);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.z = -8000;
    this.scene.addObject(this.mesh);

    this.renderer = new THREE.WebGLRenderer({
      'antialias': false
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    //绑定事件
    this.bindEvent();
  }

  render() {
    let position = ((new Date().getTime() - this.startTime) * 0.03) % 8000;
    this.camera.position.x += (this.mouseX - this.camera.target.position.x) * 0.01;
    this.camera.position.y += (-this.mouseY - this.camera.target.position.y) * 0.01;
    this.camera.position.z = -position + 8000;
    this.camera.target.position.x = this.camera.position.x;
    this.camera.target.position.y = this.camera.position.y;
    this.camera.target.position.z = this.camera.position.z - 1000;
    this.renderer.render(this.scene, this.camera);
  }

  bindEvent() {
    document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false);
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  }

  onDocumentMouseMove() {
    this.mouseX = (event.clientX - this.windowHalfX) * 0.25;
    this.mouseY = (event.clientY - this.windowHalfY) * 0.15;
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  drawBackground() {
    let canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    let gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#1e4877");
    gradient.addColorStop(0.5, "#4584b4");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // this.container.style.background = 'url(' + canvas.toDataURL('image/png') + ')';
  }
}

export default {
  name: 'cloud',
  options: {
    controller() {
      let cloudUtil = new CloudUtil('cloud');
      //绘制背景
      cloudUtil.drawBackground();
      //绘制云
      cloudUtil.init();

      //动画
      function animate() {
        requestAnimationFrame(animate);
        cloudUtil.render();
      }

      animate();

    }
  }
}

const fsContent = `uniform sampler2D map;
    uniform vec3 fogColor;
    uniform float fogNear;
    uniform float fogFar;
    varying vec2 vUv;
    void main() {
        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep( fogNear, fogFar, depth );
        gl_FragColor = texture2D( map, vUv );
        gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
        gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
    }`;