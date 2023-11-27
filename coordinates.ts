import {Direction} from "./direction";

export class Coordinates {
    public readonly x: number;
    public readonly y: number;
    public readonly direction: Direction;

    constructor(x: number, y: number, direction: Direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    YAntiTranslate(): Coordinates{
        return new Coordinates(this.x, this.antiTranslateAroundTheWorld(this.y), this.direction);
    }

    YTranslate(): Coordinates {
        return new Coordinates(this.x, this.translateAroundTheWorld(this.y), this.direction);
    }

    XTranslate(): Coordinates {
        return new Coordinates(this.translateAroundTheWorld(this.x), this.y, this.direction);
    }

    XAntiTranslate(): Coordinates {
        return new Coordinates(this.antiTranslateAroundTheWorld(this.x) , this.y, this.direction);
    }

    rotate(): Coordinates {
        return new Coordinates(this.x, this.y, this.direction.rotate());
    }

    antiRotate(): Coordinates {
        return new Coordinates(this.x, this.y, this.direction.antiRotate());
    }

    private translateAroundTheWorld(axis: number): number {
        if (axis == 0)
            return 20;

        if(axis === 20)
            return 0;

        return axis + 1;
    }

    private antiTranslateAroundTheWorld(axis: number): number {
        if (axis == 0)
            return 20;

        if(axis === 20)
            return 0;

        return axis - 1;
    }
}