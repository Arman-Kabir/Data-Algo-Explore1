
// reverse a string
function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hm thats not good';
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('');
}

function reverse2(str) {
    return str.split('').reverse().join()
}

const reverse3 = str => str.split('').reverse().join('');


console.log(reverse3("arman Kabir"));