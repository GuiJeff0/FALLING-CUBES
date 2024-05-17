import * as B from "babylonjs";
import "regenerator-runtime/runtime";
import { scene, engine } from "./src/scene";
import { makeGround } from "./src/ground";
import Ammo from "ammojs-typed";
import { makeCube } from "./src/cube";

async function main(): Promise<void> {
    const ammo = await Ammo();
    const physics: B.AmmoJSPlugin = new B.AmmoJSPlugin(true, ammo);
    scene.enablePhysics(new B.Vector3(0,-9.81,0), physics);

    makeCube();
    makeGround();

    engine.runRenderLoop(() => scene.render());
}

main();