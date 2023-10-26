// ? 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.
// function indextap(...params) {
//     let index = 0
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] === 45) {
//             index = i
//         }
//     }
//     return index
// }
// console.log(indextap(12, 32, 44, 56, 45));

// ? 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.
// function tekrarinsayintap(...params) {
//     let tekrarcount = 0
//     let num=3
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]===num) {
//            tekrarcount++
//         }
//     }
//     return tekrarcount
// }
// console.log(tekrarinsayintap(3,2,1,4,3,1,5,6,9,3,2,52,3,2));

// ? 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function.
// function sumtap(...params) {
//     let sum = 0
//     let max = params[0]
//     let min = params[0]
//     for (let i = 0; i < params.length; i++) {
//         if (max < params[i]) {
//             max = params[i]
//         }
//         if (min > params[i]) {
//             min = params[i]
//         }
//         sum += params[i]
//     }
//     return sum - max - min
// }
// console.log(sumtap(2, 1, 3, 4, 6));

// ? 4. Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function. 
// ?(misalcun daxil edilen eded 475 olarsa, geriye 547 qaytarsin) 