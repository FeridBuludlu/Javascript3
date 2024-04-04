// 1. Prompt vasitesile daxil olunmush ededin faktorialini tapin.


// let num = parseInt(prompt("ededi daxil edin"))

// let result = 1;
// for (let i = 1; i <= num; i++) {
//     result *= i;
// }

// console.log(result);


// 2.Verilmish arrayde en boyuk ededle,en kicik ededin yerini deyishen alqoritm yazin.

// let arr = [2, 4, 6, 7, 10, 12, 58, 9];

// let maxIndex = 0;
// let minIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[maxIndex]) {
//         maxIndex = i;
//     }
//     if (arr[i] < arr[minIndex]) {
//         minIndex = i;
//     }
// }

// let temp = arr[maxIndex];
// arr[maxIndex] = arr[minIndex];
// arr[minIndex] = temp;

// console.log(arr);


// 3.Verilmiş Arraydə tək elementlerden ən böyüyünü tapan alqoritm yazin.

// let arr = [2, 5, 3, 9, 8, 11, 4, 7, 13];

// let maxOdd = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1 && arr[i] > maxOdd){ 
//         maxOdd = arr[i];
//     }
// }

// console.log("Ən böyük tək ədəd:", maxOdd);


// 4. Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını
// tapan proqram tərtib edin.

// let arr = [3, 7, 1, 9, 5];
// let min = arr[0];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     else if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// let orta = (min + max) / 2;
// console.log("Orta:", orta);

// 5. arrayin elementləri arasında minimum və maksimum elementi nəzərə almadan
// yerdə qalan elementlərin cəmini tapan 

// let arr = [3, 7, 1, 9, 5]; 
// let min = arr[0];
// let max = arr[0]; 
// let cem = 0; 

// for (let i = 0; i < arr.length; i++) { 
//     if (arr[i] < min) {
//         min = arr[i]; 
//     }
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     cem += arr[i];
// }

// cem -= (min + max);

// console.log("Array'də qalan elementlərin cəmi:", cem);


