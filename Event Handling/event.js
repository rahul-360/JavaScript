let btn1 = document.querySelector("#btn-1");

// btn1.onclick = (event_objects) => {
//     console.log('Btn1 was clicked');
//     console.log(event_objects);
// }
// btn1.onmousemove = () => {
//     console.log('Btn1 was mouse move');
// }
// btn1.onmouseout = () => {
//     console.log('Btn1 was mouse out');
// }
// btn1.onmouseup = () => {
//     console.log('Btn1 was mouse up');
// }
// btn1.onmousedown = () => {
//     console.log('Btn1 was mouse down');
// }
// btn1.onmouseover = () => {
//     console.log('Btn1 was mouse over');
// }


btn1.addEventListener("mousemove", () => {
    console.log("Clicked");
})

btn1.addEventListener("click", () => {
    console.log('Clicked here --- 1');
})
btn1.addEventListener("click", () => {
    console.log('Clicked here --- 2');
})
btn1.addEventListener("mouseup",() => {
    console.log('press mouse');
})
