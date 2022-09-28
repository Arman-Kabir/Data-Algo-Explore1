
let counter = 0;
function inception() {
    console.log(counter);
    if (counter > 3) {
        return 'done';
    }
    counter++;
    return inception();
    console.log('hello');
}

inception();

// identify the base case
// Identify the recursive case
// get closer and closer and return when needed. Usually u have two returns.