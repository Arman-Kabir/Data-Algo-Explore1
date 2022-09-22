function printFirstItem(items) {
    console.log(items[0]);
    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }
    for (i = 0; i < 100; i++) {
        console.log('hi');
    }
}

printFirstItem('hellobro');

// O(1+ n/2 +100) = (n/2+101) = (n/2+1) = O(n+1) = O(n)
// We drop the constants
// u're never going to see numbers in Big O notation