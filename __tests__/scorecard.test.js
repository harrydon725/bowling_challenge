Scorecard = require('../scorecard')

describe('Scorecard', () => {
    it('Checks the starting score of 0', () => {
        const test = new Scorecard();
        expect(test.calculateScore()).toBe(0);
    });
});


describe('Scorecard', () => {
    it('Checks the first frame score of 7', () => {
        const test = new Scorecard();
        test.addframe(4,3);
        expect(test.calculateScore()).toBe(7);
    });
});

describe('Scorecard', () => {
    it('Checks the second frame score of 16 after a spare', () => {
        const test = new Scorecard();
        test.addframe(4,6);
        test.addframe(3,0)
        expect(test.calculateScore()).toBe(16);
    });
});


describe('Scorecard', () => {
    it('Checks the second frame score of 19 after a spare', () => {
        const test = new Scorecard();
        test.addframe(4,6);
        test.addframe(3,3)
        expect(test.calculateScore()).toBe(19);
    });
});

describe('Scorecard', () => {
    it('Checks the second frame score of 14 after a strike', () => {
        const test = new Scorecard();
        test.addframe(10,0);
        test.addframe(1,1)
        expect(test.calculateScore()).toBe(14);
    });
});

describe('Scorecard', () => {
    it('Checks that the addframe errors after a non integer is put in', () => {
        const test = new Scorecard();
        expect(() => test.addframe('a', 3)).toThrow('Frames must be numbers');

    });
});
describe('Scorecard', () => {
    it('Checks that the addframe errors after a frame >10 is given', () => {
        const test = new Scorecard();
        expect(() => test.addframe(10, 3)).toThrow('Frames cannot be more than 10');

    });
});
describe('Scorecard', () => {
    it('Checks the third frame score of 20 after a strike and then returning to normal modifiers', () => {
        const test = new Scorecard();
        test.addframe(10,0);
        test.addframe(1,1)
        test.addframe(3,3)
        expect(test.calculateScore()).toBe(20);
    });
});
describe('Scorecard', () => {
    it('Checks the frames are being added properly', () => {
        const test = new Scorecard();
        test.addframe(10,0);
        test.addframe(1,9)
        test.addframe(3,3)
        expect(test.returnFrames()).toEqual(
            [['STRIKE'],['Spare',1,9],[3,3]]
        );
    });
});

describe('Scorecard', () => {
    it('Checks the scores are being added properly for final frame', () => {
        const test = new Scorecard();
        test.addfinalframe(3,3,3)
        expect(test.calculateScore()).toBe(9);
    });
});
describe('Scorecard', () => {
    it('Checks the scores are being added properly for final frame after strike', () => {
        const test = new Scorecard();
        test.addframe(10,0)
        test.addfinalframe(3,3,3)
        expect(test.calculateScore()).toBe(28);
    });
});

describe('Scorecard', () => {
    it('Checks the scores are being added properly for final frame after spare', () => {
        const test = new Scorecard();
        test.addframe(1,9)
        test.addfinalframe(3,3,3)
        expect(test.calculateScore()).toBe(22);
    });
});

describe('Scorecard', () => {
    it('Checks the frames are being added properly for final frame', () => {
        const test = new Scorecard();
        test.addfinalframe(3,3,3)
        expect(test.returnFrames()).toEqual([[3,3,3]]);
    });
});

describe('Scorecard', () => {
    it('Checks the frames are being added properly for final frame strike', () => {
        const test = new Scorecard();
        test.addfinalframe(10,3,3)
        expect(test.returnFrames()).toEqual([['STRIKE',3,3]]);
    });
});
describe('Scorecard', () => {
    it('Checks the frames are being added properly for final frame multiple strikes', () => {
        const test = new Scorecard();
        test.addfinalframe(10,10,10)
        expect(test.returnFrames()).toEqual([['STRIKE','STRIKE','STRIKE']]);
    });
});

describe('Scorecard', () => {
    it('Checks that the addfinalframe errors after a non number is give', () => {
        const test = new Scorecard();
        expect(() => test.addfinalframe(10,'four', 3)).toThrow('Frames must be numbers');

    });
});

describe('Scorecard', () => {
    it('Checks that the addfinalframe errors after a number greater than 10 is given', () => {
        const test = new Scorecard();
        expect(() => test.addfinalframe(10,11, 3)).toThrow('Each bowl has to be 10 or less');

    });
});






