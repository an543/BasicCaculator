const randListInt = require('../src/Ran_Num_Generator/RandListInt');
const randomList = require('../src/Ran_Num_Generator/RandomList');
const rand_Seed = require('../src/Ran_Num_Generator/Rand_Seed');
const RandItemFromList = require('../src/Ran_Num_Generator/RandItemFromList');

test('Test randomListInt Function', () => {
    expect(randListInt(1,10,5,"hello world")).toStrictEqual([5,2,1,8,7]);
});
test('Test randomListDec Function', () => {
    expect(randomList(1,10,5,"hello world")).toStrictEqual([14.866952746323387,
        11.519860609856169,
        10.22052494676454,
        17.068305836405575,
        16.589502464281402
    ]);
});
test('Test SelectRandomItem function to select a random item from array', () => {
    let arr = randListInt(1,10,50,"hello world");
    expect(RandItemFromList(arr)).toBe(4);
});
