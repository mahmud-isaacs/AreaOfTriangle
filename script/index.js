let button = document.getElementById('convert')
let base = document.getElementById('base')



button.addEventListener('click',function(){
    let height = document.querySelector('#height')
    if (height === ""){
        alert('Please fill out input field!');
        return
    }

    let area = base.value/2 * height.value;

    document.querySelector('#result').innerHTML = area

})