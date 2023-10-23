var elForm = document.querySelector('.form')
var elMeva = document.querySelector('.meva')
var elUerl = document.querySelector('.uerl')
var elList = document.querySelector('.list')

var arr = []

elForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    arr.push(elMeva.value,elUerl.value)
    fn(arr)
  
})
function fn(arr) {
    elList.innerHTML = ''
   for (let i = 0; i < arr.length; i= i+2) {

    newB = document.createElement('b')
    newImg = document.createElement('img')
    newButton = document.createElement('button')
    newButon = document.createElement('button')
    newLi = document.createElement('li')
    newImg.setAttribute('src',arr[i+1])
    newImg.setAttribute('class','imgg')
    newB.setAttribute('class','bb')
    newButton.setAttribute('class','btn')
    newButon.setAttribute('class','btnn')
    newLi.setAttribute('class','itemm')
    newB.textContent = arr[i]
    newButton.textContent = 'del'
    newButon.textContent = 'add'
    newLi.appendChild(newImg)
    newLi.appendChild(newB)
    newLi.appendChild(newButton)
    newLi.appendChild(newButon)
    elList.appendChild(newLi)
    
   } 
}


b = [7,10,5,3,2]


    for (let i = 0; i < b.length; i++) {
        if  (i % 2 == 0 ) {
            console.log(b[i]);
        }
        
    }  
    for (let i = 0; i < b.length; i++) {
        if  (i % 2 == 1 ) {
            console.log(b[i]);
        }
        
    }  












