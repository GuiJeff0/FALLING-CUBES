import * as B from 'babylonjs';
import { canvas } from './domItems';


export const engine = new  B.Engine(canvas, true);
export const scene =  makeScene();

function makeScene(): B.Scene{
    const scene = new B.Scene(engine);
    createCamera(scene);
    createLight(scene);
    setBackground(scene);

    return scene;
}

function createCamera(scene: B.Scene): void {
    const alpha: number = Math.PI / 4;
    const beta: number = Math.PI / 3;
    const radius: number = 8;
    const target: B.Vector3 = new B.Vector3(0,0,0);

    new B.ArcRotateCamera(
        "Camera",
        alpha,
        beta,
        radius,
        target,
        scene
    ).attachControl(canvas, true);
}

function createLight(scene: B.Scene): void{
     new B.HemisphericLight(
        "light",
        new B.Vector3(1,1,0),
        scene
    );
}

function setBackground(scene: B.Scene): void {
    scene.clearColor = new B.Color4(0,0,0,1);
}
