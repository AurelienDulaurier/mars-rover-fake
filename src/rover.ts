import {Direction, Directions} from "./direction";
import {WaterDetector} from "./waterDetector";
import {DeepNetworkSpaceReportSender} from "./deepNetworkSpaceReportSender";
import {Coordinates} from "./coordinates";

export class Rover {
    public readonly coordinates: Coordinates;

    constructor(coordinate: Coordinates) {
        this.coordinates = coordinate;
    }

    advance(): Rover {
        this.checkWater();

        switch (this.coordinates.direction._direction) {
            case Directions.NORTH:
                return new Rover(this.coordinates.YTranslate())
            case Directions.SOUTH:
                return new Rover(this.coordinates.YAntiTranslate())
            case Directions.WEST:
                return new Rover(this.coordinates.XTranslate())
            case Directions.EAST:
                return new Rover(this.coordinates.XAntiTranslate())
        }
    }

    private checkWater(): void {
        if (WaterDetector.findWater())
            DeepNetworkSpaceReportSender.send(this.coordinates);
    }

    back() {
        this.checkWater()

        switch (this.coordinates.direction._direction) {
            case Directions.NORTH:
                return new Rover(this.coordinates.YAntiTranslate())
            case Directions.SOUTH:
                return new Rover(this.coordinates.YTranslate())
            case Directions.WEST:
                return new Rover(this.coordinates.XAntiTranslate())
            case Directions.EAST:
                return new Rover(this.coordinates.XTranslate())
        }
    }

    rotate() {
        return new Rover(this.coordinates.rotate());
    }

    antiRotate() {
        return new Rover(this.coordinates.antiRotate());
    }
}