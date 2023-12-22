export class WaterDetector {
    static findWater(): boolean {
//        This use real sensor, not available in unit test
        throw new Error("water sensor is not responding")
    }
}