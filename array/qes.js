// let markss = [24, 53, 56, 77, 88, 97, 87, 98]
// let sum = 0;
// // Average marks
// for (let i = 0; i < markss.length; i++) {
//     const element = markss[i];
//     console.log(element);
//     // let element = console.log(markss[i]);
//     sum = sum + element;
// }
// console.log(sum);

// let avg = sum / markss.length;
// console.log(` the value of avg marks  = ${avg}`);

// markss.push(55, 77, 88);
// console.log(markss);
// // console.log(markss.toString);
// let del = markss.pop();
// console.log(markss);
// console.log(del);

// que 02

let items = [250, 655, 400, 200, 900, 50]

let idx = 0;
for (let val of items) {
    console.log(`value at index ${idx} = ${val}`);
    let offer = val / 10;
    items[idx] = val - offer;
    console.log(`Value after offer = ${items[idx]}`);
    idx++;
}


// for (let idx = 0; idx < items.length; idx++) {
//     console.log(`Value at index ${idx} = ${items[idx]}`);
//     let offer =items[idx]-items[idx]/10;
//     console.log(`Value after offer = ${offer}`);
// }

