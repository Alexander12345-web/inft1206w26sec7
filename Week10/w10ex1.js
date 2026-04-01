console.log("Test 1")

document.querySelector('#id1').addEventListener('mouseover',function(){
    this.style.color="green";
})

document.querySelector('#id1').addEventListener('mouseout',function(){
    this.style.color="black";
})

document.querySelector('#id1').onclick=function(){
    this.textContent = "Hello"
}