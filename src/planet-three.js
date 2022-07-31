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

    this.LoadTexturePlanet();

    this.sphereMaterial = new THREE.Mesh(this.geometry, this.material);
  }

  LoadTexturePlanet() {
    const textureMap = new THREE.TextureLoader().load(
      "./resources/planet/earth-map.jpg"
    );

    const textureBumpMap = new THREE.TextureLoader().load(
      "./resources/planet/earth-bump.jpg"
    );

    this.material = new THREE.MeshPhongMaterial({
      shininess: 30,
      map: textureMap,
      bumpMap: textureBumpMap,
      bumpScale: 0.5,
    });
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
