// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// function containsCommonItem(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(containsCommonItem(array1, array2));

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// array1 ==>obj{
// a:true
// b:true
// c:true
// d:true
// }
// array2[index]===obj.properties

function containsCommonItem2(arr1,arr2){
    // loop through first array and create object
    // where properties === items in the array 
    let map = {};
    for(let i =0; i<arr1.length;i++){
        
    }
    // loop through second array and check if item in second array exists on created object
}