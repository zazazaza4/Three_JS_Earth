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

    this.material = new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture("../resources/clouds/cloud.png"),
      transparent: true,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  onRotationY(rotateY) {
    this.mesh.rotation.y += rotateY;
  }

  getSphereMaterial() {
    return this.mesh;
  }
}
