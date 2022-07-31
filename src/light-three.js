import { THREE } from "./three-defs.js";

export default class Light {
  constructor(color) {
    this.color = color;
  }

  InitAmbientLight(intensity) {
    this.ambientLight = new THREE.AmbientLight(this.color, intensity);
  }

  InitPointLight(intensity) {
    this.pointLight = new THREE.PointLight(this.color, intensity);
    this.pointLight.position.set(50, 50, 50);
  }

  getAmbientLight() {
    return this.ambientLight;
  }
  getPointLight() {
    return this.pointLight;
  }
}
