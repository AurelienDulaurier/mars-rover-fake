import {Rover} from "./rover";
import {Coordinates} from "./coordinates";
import {Obstacle} from "./obstacle";

export class Mars {
    private readonly _rover: Rover;
    readonly coordinates: Coordinates;
    private readonly _obstacles: Obstacle[];

    constructor(rover: Rover, obstacles: Obstacle[]) {
        this._rover = rover;
        this._obstacles = obstacles;
        this.coordinates = this._rover.coordinates;
    }

    rotateRover(): Mars {
       return new Mars(this._rover.rotate(), this._obstacles)
    }

    advanceRover() {
        return new Mars(this.safeMove(rover => rover.advance()), this._obstacles)
    }

    backRover() {
        return new Mars(this.safeMove(rover => rover.back()), this._obstacles)
    }

    antiRotateRover(): Mars {
        return new Mars(this._rover.antiRotate(), this._obstacles)
    }

    private safeMove(move: (rover: Rover) => Rover): Rover {
        const movedRover = move(this._rover);
        if (this.checkObstacle(movedRover)) {
            return this._rover;
        }

        return movedRover;
    }

    private checkObstacle(advancedRover: Rover): boolean {
        return this._obstacles.some(obstacle => obstacle.blocks(advancedRover.coordinates));
    }

}