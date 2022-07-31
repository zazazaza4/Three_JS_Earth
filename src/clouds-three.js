import { THREE } from "./three-defs.js";

export default class Clouds {
  constructor(radius, sizeSegments = 32) {
    this.radius = radius * 1.05;
    this.sizeSegments = sizeSegments;

    this.InitClouds();
  }

  InitClouds() {
    this.geometry = new THREE.SphereGeometry(
      this.radius,
      this.sizeSegments,
      this.sizeSegments
    );

    this.LoadCloads();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  LoadCloads() {
    const texture = new THREE.TextureLoader().load(
      "../resources/clouds/cloud.png"
    );
    this.material = new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
    });
  }

  onRotationY(rotateY) {
    this.mesh.rotation.y += rotateY;
  }

  getSphereMaterial() {
    return this.mesh;
  }
}
