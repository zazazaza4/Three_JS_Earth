import { THREE } from "./three-defs.js";

export default class Planet {
  constructor(radius, sizeSegments = 32) {
    this.radius = radius;
    this.sizeSegments = sizeSegments;

    this.InitPlanet();
  }

  InitPlanet() {
    this.geometry = new THREE.SphereGeometry(
      this.radius,
      this.sizeSegments,
      this.sizeSegments
    );
    this.material = new THREE.MeshPhongMaterial({
      shininess: 100,
      map: THREE.ImageUtils.loadTexture("../resources/planet/earth-map.jpg"),
      bumpMap: THREE.ImageUtils.loadTexture(
        "../resources/planet/earth-bump.jpg"
      ),
      bumpScale: 0.5,
    });

    this.sphereMaterial = new THREE.Mesh(this.geometry, this.material);
  }

  onRotationY(rotateY) {
    this.sphereMaterial.rotation.y += rotateY;
  }

  getRadius() {
    return this.radius;
  }

  getSizeSegments() {
    return this.sizeSegments;
  }

  getSphereMaterial() {
    return this.sphereMaterial;
  }
}
