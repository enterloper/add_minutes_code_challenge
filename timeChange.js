const testFunction = (value) => {
    //make sure formatting is valid.
    console.log(`HERE is the value: ${value}`);
    console.log(`HERE is the value type: ${typeof value}`);
    storage[value] = value;
}
let storage = {}
