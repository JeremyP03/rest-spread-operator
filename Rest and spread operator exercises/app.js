const filterOutOdds = nums => (...arguments) => arguments.filter(num => num % 2 === 0);


const findMin = (...arguments) => Math.min(...arguments);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (array, ...val) => [...array, ...val.map(val => val * 2)];

const removeRandom = items => {
    const it = Math.floor(Math.random() * items.lenght);
    return [...items.slice(0, it), ...items.slice(it + 1 )];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];

}

const addKeyVal = (obj, key, val) => {
    const object = {...obj }
    object[key] = val;
    return object;
}

const removeKey = (obj, key) => {

}

const combine = (obj1, obj2) => {
    return  {...obj1, ...obj2};

}

const update = (obj, key, val) => {
    const object = {...obj }
    object[key] = val;
    return object;

}