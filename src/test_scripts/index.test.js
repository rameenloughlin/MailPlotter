const { SliceChallenge } = require('../src/index');

let slicePizzaBot;
let userInput;

describe('SliceChallenge Class Tests', () => {

    describe('SliceChallenge Class', () => {
        test('adds name', () => {
            let slicePizzaBot = new SliceChallenge('Slice Challenge');
            expect(slicePizzaBot.name).toBe('Slice Challenge');
        });
        test('creates name', () => {
            let slicePizzaBot = new SliceChallenge();
            expect(slicePizzaBot.name).toBe('Slice Code Challenge');
        });
        test('Dimensions', () => {
            let slicePizzaBot = new SliceChallenge();
            expect(slicePizzaBot.dimensions).toBe('');
        });
        test('Drop-off', () => {
            let slicePizzaBot = new SliceChallenge();
            expect(slicePizzaBot.drops).toBe('');
        });
        test('Direction', () => {
            let slicePizzaBot = new SliceChallenge();
            expect(slicePizzaBot.direction).toBe('');
        });
    });

    
    describe('Pizza Drop-Off', ()=>{
        test('sets dimensions of map', () =>{
            slicePizzaBot = new SliceChallenge();
            userInput = "5x5 (1, 3) (4, 4)";
            slicePizzaBot.initDrops(userInput);
            expect(slicePizzaBot.dimensions).toBe('5');
        });
        test('sets Co-ordinates for Drop-Off', () =>{
            slicePizzaBot = new SliceChallenge();
            userInput = "5x5 (1, 3) (4, 4)";
            slicePizzaBot.initDrops(userInput);
            expect(slicePizzaBot.drops).toEqual([ [ 1 , 3], [ 4 , 4] ]);
        });
        test('sets Co-ordinates for Drop-Off', () =>{
            slicePizzaBot = new SliceChallenge();
            userInput = "5x5 (1, 3) (4, 4)";
            slicePizzaBot.initDrops(userInput);
            expect(slicePizzaBot.parseDirectionsUserInput(userInput)).toEqual([ [ 1 , 3], [ 4 , 4] ]);
        });
        test('sets Co-ordinates for Drop-Off', () =>{
            slicePizzaBot = new SliceChallenge();
            userInput = "5x5 (1, 3) (4, 4)";
            slicePizzaBot.initDrops(userInput);
            expect(slicePizzaBot.getDrops()).toEqual([ [ 1 , 3], [ 4 , 4] ]);
        });


    });

    
    describe('Directions', ()=> {
        test('sets directions for pizza drop off', ()=> {
            slicePizzaBot = new SliceChallenge();
            userInput = "5x5 (1, 3) (4, 4)";
            slicePizzaBot.initDrops(userInput);
            slicePizzaBot.setDirection();
            expect(slicePizzaBot.direction).toBe('ENNNDEEEND');

        });
    });

    
    describe('Compass Bearings', () => {
            slicePizzaBot = new SliceChallenge();
            test('Compass Bearing for East', () => {
                expect(slicePizzaBot.getBearing('x', 0, 1)).toBe('E');
            });
            test('Compass Bearing for West', () => {
                    expect(slicePizzaBot.getBearing('x', 1, 0)).toBe('W'); 
            });   
            test('Compass Bearing for North', () => {
                expect(slicePizzaBot.getBearing('y', 0, 1)).toBe('N');
            });
            test('Compass Bearing for South', () => {
                expect(slicePizzaBot.getBearing('y', 1, 0)).toBe('S');
            });
    });

});

            
