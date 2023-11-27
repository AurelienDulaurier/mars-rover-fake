import {Direction} from "./direction";
import {Rover} from "./rover";
import {Coordinates} from "./coordinates";

describe('rover', function () {

    it('init rover', function () {
        const rover = new Rover(new Coordinates(3, 4, Direction.SOUTH));
        expect(rover.coordinates).toStrictEqual(new Coordinates(3, 4, Direction.SOUTH));
    });

    it('should advance south', () => {
        const rover = new Rover(new Coordinates(3, 4, Direction.SOUTH));
        expect(rover.advance().coordinates).toStrictEqual(new Coordinates(3, 3, Direction.SOUTH))
    });

    it('should advance north', () => {
        const rover = new Rover(new Coordinates(3, 4, Direction.NORTH));
        expect(rover.advance().coordinates).toStrictEqual(new Coordinates(3, 5, Direction.NORTH))
    });


    it('should advance east', () => {
        const rover = new Rover(new Coordinates(3, 4, Direction.EAST));
        expect(rover.advance().coordinates).toStrictEqual(new Coordinates(2, 4, Direction.EAST))
    });

    it('should advance west', () => {
        const rover = new Rover(new Coordinates(3, 4, Direction.WEST));
        expect(rover.advance().coordinates).toStrictEqual(new Coordinates(4, 4, Direction.WEST))
    });

    it('should back south', () => {
        const rover = new Rover(new Coordinates(3, 4, Direction.SOUTH));
        expect(rover.back().coordinates).toStrictEqual(new Coordinates(3, 5, Direction.SOUTH))
    });

    it('should back north', () => {
        const rover = new Rover(new Coordinates(3, 4, Direction.NORTH));
        expect(rover.back().coordinates).toStrictEqual(new Coordinates(3, 3, Direction.NORTH))
    });


    it('should back east', () => {
        const rover = new Rover(new Coordinates(3, 4, Direction.EAST));
        expect(rover.back().coordinates).toStrictEqual(new Coordinates(4, 4, Direction.EAST))
    });

    it('should back west', () => {
        const rover = new Rover(new Coordinates(3, 4, Direction.WEST));
        expect(rover.back().coordinates).toStrictEqual(new Coordinates(2, 4, Direction.WEST))
    });

    it.each`
    init | expected
    ${Direction.SOUTH} | ${Direction.EAST}
    ${Direction.NORTH} | ${Direction.WEST}
    ${Direction.EAST} | ${Direction.NORTH}
    ${Direction.WEST} | ${Direction.SOUTH}
    `('rotate from $init to "$expected"', ({init, expected}) => {
        const rover = new Rover(new Coordinates(3, 4, init));
        expect(rover.rotate().coordinates).toStrictEqual(new Coordinates(3, 4, expected))
    });


    it.each`
    init | expected
    ${Direction.SOUTH} | ${Direction.NORTH}
    ${Direction.NORTH} | ${Direction.SOUTH}
    ${Direction.EAST} | ${Direction.WEST}
    ${Direction.WEST} | ${Direction.EAST}
    `('rotate twice from $init to "$expected"', ({init, expected}) => {
        const rover = new Rover(new Coordinates(3, 4, init));
        expect(rover.rotate().rotate().coordinates).toStrictEqual(new Coordinates(3, 4, expected))
    });

    it.each`
    init | expected
    ${Direction.SOUTH} | ${Direction.WEST}
    ${Direction.NORTH} | ${Direction.EAST}
    ${Direction.EAST} | ${Direction.SOUTH}
    ${Direction.WEST} | ${Direction.NORTH}
    `('anti rotate from $init to "$expected"', ({init, expected}) => {
        const rover = new Rover(new Coordinates(3, 4, init));
        expect(rover.antiRotate().coordinates).toStrictEqual(new Coordinates(3, 4, expected))
    });


    it.each`
    init | expected
    ${Direction.SOUTH} | ${Direction.NORTH}
    ${Direction.NORTH} | ${Direction.SOUTH}
    ${Direction.EAST} | ${Direction.WEST}
    ${Direction.WEST} | ${Direction.EAST}
    `('anti rotate twice from $init to "$expected"', ({init, expected}) => {
        const rover = new Rover(new Coordinates(3, 4, init));
        expect(rover.antiRotate().antiRotate().coordinates).toStrictEqual(new Coordinates(3, 4, expected))
    });
    it.each`
    init | expected
    ${new Coordinates(20, 4, Direction.WEST)} | ${new Coordinates(0, 4, Direction.WEST)}
    ${new Coordinates(0, 4, Direction.EAST)} | ${new Coordinates(20, 4, Direction.EAST)}
    ${new Coordinates(4, 20, Direction.NORTH)} | ${new Coordinates(4, 0, Direction.NORTH)}
    ${new Coordinates(4, 0, Direction.SOUTH)} | ${new Coordinates(4, 20, Direction.SOUTH)}
    `('could turn around mars', ({init, expected}) => {
        const rover = new Rover(init);
        expect(rover.advance().coordinates).toStrictEqual(expected)
    });
});
