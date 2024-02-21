console.log("Array");

let marks=[32,3,43,423,'array','name'];
console.log(marks);
marks[4]=66;
marks[1]=66;
marks[2]=6*8;

// console.log(marks);
// console.log(marks.length);


for (let idx = 0; idx < marks.length; idx++) {
    // const element = marks[idx];
    // console.log(element);
    console.log(marks[idx]);
}

let mark=['cusd','fdver', 'erf'];

for(let mar of mark){
    console.log(mar);
    console.log(mar.toUpperCase());
}