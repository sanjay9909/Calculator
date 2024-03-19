let add = document.querySelector('.addbtn').addEventListener('click',(event)=>{
    event.preventDefault();
    let val1= parseInt(document.querySelector('.box-1').value);
    let val2 = parseInt(document.querySelector('.box-2').value);
    document.querySelector('.add').style.display = 'block';
    document.querySelector('.mul').style.display = 'none';
    document.querySelector('.sub').style.display = 'none';
    document.querySelector('.div').style.display = 'none';
    let res = val1 + val2;
    document.querySelector('.box-3').value = res;
})
let sub = document.querySelector('.subbtn').addEventListener('click',(event)=>{
    event.preventDefault();
    let val1= parseInt(document.querySelector('.box-1').value);
    let val2 = parseInt(document.querySelector('.box-2').value);
    document.querySelector('.sub').style.display = 'block';
    document.querySelector('.mul').style.display = 'none';
    document.querySelector('.add').style.display = 'none';
    document.querySelector('.div').style.display = 'none';
    let res = val1 - val2;
    document.querySelector('.box-3').value = res;
})
let mul = document.querySelector('.mulbtn').addEventListener('click',(event)=>{
    event.preventDefault();
    let val1= parseInt(document.querySelector('.box-1').value);
    let val2 = parseInt(document.querySelector('.box-2').value);
    document.querySelector('.mul').style.display = 'block';
    document.querySelector('.add').style.display = 'none';
    document.querySelector('.sub').style.display = 'none';
    document.querySelector('.div').style.display = 'none';
    let res = val1 * val2;
    document.querySelector('.box-3').value = res;
})
let div = document.querySelector('.divbtn').addEventListener('click',(event)=>{
    event.preventDefault();
    let val1= parseInt(document.querySelector('.box-1').value);
    let val2 = parseInt(document.querySelector('.box-2').value);
    document.querySelector('.div').style.display = 'block';
    document.querySelector('.mul').style.display = 'none';
    document.querySelector('.add').style.display = 'none';
    document.querySelector('.sub').style.display = 'none';
    let res = val1 / val2;
    document.querySelector('.box-3').value = res;
})