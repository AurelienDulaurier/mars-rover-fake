import {Direction, Directions} from "./direction";
import {WaterDetector} from "./waterDetector";
import {DeepNetworkSpaceReportSender} from "./deepNetworkSpaceReportSender";
import {Coordinates} from "./coordinates";

export class Rover {
    public readonly coordinates: Coordinates;
    private readonly _waterDetector: WaterDetector;
    private readonly _reportSender: DeepNetworkSpaceReportSender;

    constructor(coordinate: Coordinates, waterDetector: WaterDetector, reportSender: DeepNetworkSpaceReportSender) {
        this._waterDetector = waterDetector;
        this._reportSender = reportSender;
        this.coordinates = coordinate;
    }

    advance(): Rover {
        this.checkWater();

        switch (this.coordinates.direction._direction) {
            case Directions.NORTH:
                return new Rover(this.coordinates.YTranslate(), this._waterDetector, this._reportSender)
            case Directions.SOUTH:
                return new Rover(this.coordinates.YAntiTranslate(), this._waterDetector, this._reportSender)
            case Directions.WEST:
                return new Rover(this.coordinates.XTranslate(), this._waterDetector, this._reportSender)
            case Directions.EAST:
                return new Rover(this.coordinates.XAntiTranslate(), this._waterDetector, this._reportSender)
        }
    }

    private checkWater() {
        if (this._waterDetector.findWater())
            this._reportSender.send(this.coordinates);
    }

    back() {
        this.checkWater()

        switch (this.coordinates.direction._direction) {
            case Directions.NORTH:
                return new Rover(this.coordinates.YAntiTranslate(), this._waterDetector, this._reportSender)
            case Directions.SOUTH:
                return new Rover(this.coordinates.YTranslate(), this._waterDetector, this._reportSender)
            case Directions.WEST:
                return new Rover(this.coordinates.XAntiTranslate(), this._waterDetector, this._reportSender)
            case Directions.EAST:
                return new Rover(this.coordinates.XTranslate(), this._waterDetector, this._reportSender)
        }
    }

    rotate() {
        return new Rover(this.coordinates.rotate(), this._waterDetector, this._reportSender);
    }

    antiRotate() {
        return new Rover(this.coordinates.antiRotate(), this._waterDetector, this._reportSender);
    }
}