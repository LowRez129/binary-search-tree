export default function rngArray (random, length) {
    const array = [];
    let count = 0;

    while (count < length) {
        const rng = Math.floor(Math.random() * random);
        array.push(rng);
        count += 1;
    }
    
    console.log(array);
    return array;
}