import * as B from "babylonjs";
import "regenerator-runtime/runtime";
import { scene, engine } from "./src/scene";
import Ammo from "ammojs-typed";

async function main(): Promise<void> {
    const ammo = await Ammo();
    const physics: B.AmmoJSPlugin = new B.AmmoJSPlugin(true, ammo);
    scene.enablePhysics(new B.Vector3(0,-9.81,0), physics);
    engine.runRenderLoop(() => scene.render());
}

main();