import {Rover} from "./rover";
import {Coordinates} from "./coordinates";
import {Direction} from "./direction";
import {WaterDetector} from "./waterDetector";
import {DeepNetworkSpaceReportSender} from "./deepNetworkSpaceReportSender";
import {Mars} from "./mars";
import {Obstacle} from "./obstacle";

describe('mars', () => {
    it('should init mars', () => {
        const mars = new Mars(new Rover(new Coordinates(3, 4, Direction.NORTH), new WaterDetector(), new DeepNetworkSpaceReportSender()), []);
        expect(mars.coordinates).toStrictEqual(new Coordinates(3, 4, Direction.NORTH))
    });

    it('should stop before hitting obstacle advancing', () => {
        const mars = new Mars(new Rover(new Coordinates(3, 4, Direction.NORTH), new WaterDetector(), new DeepNetworkSpaceReportSender()), [new Obstacle(4, 4)]);
        expect(mars.rotateRover().advanceRover().coordinates).toStrictEqual(new Coordinates(3, 4, Direction.WEST))
    });

    it('should stop before hitting obstacle backing', () => {
        const mars = new Mars(new Rover(new Coordinates(3, 4, Direction.NORTH), new WaterDetector(), new DeepNetworkSpaceReportSender()), [new Obstacle(1, 3)]);
        expect(mars.backRover()
            .antiRotateRover()
            .antiRotateRover()
            .antiRotateRover()
            .backRover()
            .backRover().coordinates).toStrictEqual(new Coordinates(2, 3, Direction.WEST))
    });
});