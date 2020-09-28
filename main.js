let button = document.querySelector('button');
// console.log(button)

button.onclick = function () {
    let par1 = document.getElementById('name');
    let par2 = document.getElementById('surname');
    let par3 = document.getElementById('phone');
    // console.log(par1)
    let input = document.querySelectorAll('input');
    // console.log(input[0].value)
    par1.textContent = input[0].value;
    par2.textContent = input[1].value;
    par3.textContent = input[2].value;
}