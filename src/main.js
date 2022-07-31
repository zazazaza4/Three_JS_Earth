import WorldThreeJS from "./world-three.js";
import Planet from "./planet-three.js";
import Ligth from "./light-three.js";
import Clouds from "./clouds-three.js";

function main() {
  const world = new WorldThreeJS();
  const planet = new Planet(1);
  const clouds = new Clouds(planet.getRadius(), planet.getSizeSegments());

  const light = new Ligth("white");

  light.InitAmbientLight(0.2);
  light.InitPointLight(0.7);

  world.OnSceneAdd(planet.getSphereMaterial());
  world.OnSceneAdd(light.getPointLight());
  world.OnSceneAdd(light.getPointLight());
  world.OnSceneAdd(clouds.getSphereMaterial());

  //============== loop =================
  requestAnimationFrame(animate);

  function animate(timeElapsedS) {
    timeElapsedS *= 0.001;

    planet.onRotationY(0.0015);
    clouds.onRotationY(0.001);

    world.OnUpdateControls();
    world.OnResize();
    world.Render();

    requestAnimationFrame(animate);
  }
}

main();
