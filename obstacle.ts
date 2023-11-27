import {Coordinates} from "./coordinates";

export class Obstacle {
    private readonly _x: number;
    private readonly _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    blocks(coordinates: Coordinates) {
        return this._x === coordinates.x && this._y === coordinates.y;
    }

}