import {Coordinates} from "./coordinates";

export class DeepNetworkSpaceReportSender {
    static send(coordinates: Coordinates) {
//        This use expensive DeepNetworkSpace antennas, don't use it in unit test
        throw new Error("DeepNetworkSensor Is not responding")
    }
}