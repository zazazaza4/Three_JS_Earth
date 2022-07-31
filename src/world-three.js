import { THREE, OrbitControls } from "./three-defs.js";

export default class WorldThreeJS {
  constructor() {
    this.InitScene();
  }

  InitScene() {
    this.threejs = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.threejs.setPixelRatio(window.devicePixelRatio);
    this.threejs.setSize(window.innerWidth, window.innerHeight);
    this.threejs.domElement.id = "threejs";

    document.getElementById("container").appendChild(this.threejs.domElement);

    //camera
    const fov = 60;
    const aspect = 1920 / 1080;
    const near = 0.1;
    const far = 1000.0;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.controls = new OrbitControls(this.camera, this.threejs.domElement);

    this.camera.position.set(5, 1, 3);
    this.controls.update();

    this.scene = new THREE.Scene();

    this.LoadBackground();
  }

  LoadBackground() {
    //Class for loading a CubeTexture.
    const loader = new THREE.CubeTextureLoader();
    const texture = loader
      .setPath("./resources/terrain/")
      .load([
        "space-posx.jpg",
        "space-negx.jpg",
        "space-posy.jpg",
        "space-negy.jpg",
        "space-posz.jpg",
        "space-negz.jpg",
      ]);
    //you tell the renderer to convert the final color value in the fragment shader from linear to sRGB color space.
    texture.encoding = THREE.sRGBEncoding;
    this.scene.background = texture;
  }

  OnResize() {
    const canvas = this.threejs.domElement;
    this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
    this.camera.updateProjectionMatrix();

    if (this.ResizeRendererToDisplaySize()) {
      const canvas = this.threejs.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }
  }

  ResizeRendererToDisplaySize() {
    const canvas = this.threejs.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      this.threejs.setSize(width, height, false);
    }
    return needResize;
  }

  OnUpdateControls() {
    this.controls.update();
  }

  OnSceneAdd(sphere) {
    this.scene.add(sphere);
  }

  Render() {
    this.threejs.render(this.scene, this.camera);
  }
}
