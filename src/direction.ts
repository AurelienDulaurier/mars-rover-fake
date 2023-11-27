export enum Directions {
    SOUTH = "SOUTH",
    NORTH = "NORTH",
    WEST = "WEST",
    EAST = "EAST",
}

export class Direction {
    static SOUTH: Direction = new Direction(Directions.SOUTH);
    static NORTH: Direction = new Direction(Directions.NORTH);
    static WEST: Direction = new Direction(Directions.WEST);
    static EAST: Direction = new Direction(Directions.EAST);

    public readonly _direction: Directions;

    constructor(direction: Directions) {
        this._direction = direction;
    }

    rotate(): Direction {
        switch (this._direction) {
            case Directions.SOUTH:
                return Direction.EAST;
            case Directions.NORTH:
                return Direction.WEST;
            case Directions.WEST:
                return Direction.SOUTH;
            case Directions.EAST:
                return Direction.NORTH;
        }
    }

    antiRotate() {
        switch (this._direction) {
            case Directions.SOUTH:
                return Direction.WEST;
            case Directions.NORTH:
                return Direction.EAST;
            case Directions.WEST:
                return Direction.NORTH;
            case Directions.EAST:
                return Direction.SOUTH;
        }
    }
}