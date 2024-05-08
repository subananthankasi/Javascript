var overlay=document.querySelector('.overlay')
var popupbox=document.querySelector('.popup-box')
var Addbutton=document.getElementById('add-popup-button');

Addbutton.addEventListener('click',function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})
var cancelbook=document.getElementById('cancel-book')
cancelbook.addEventListener('click',function(event){
event.preventDefault()
overlay.style.display="none"
popupbox.style.display="none"
})

var container=document.querySelector(".container")
var Addbook=document.getElementById('Add-book')
var booktitle=document.getElementById('book-title')
var bookAuthor=document.getElementById('book-Author')
var bookdes=document.getElementById('book-des')

Addbook.addEventListener('click',function(event){
    event.preventDefault()
  

    var div=document.createElement('div')
    div.setAttribute('class','book-container')
    div.innerHTML=`<h2>${booktitle.value}</h2>
                   <h4>${bookAuthor.value}</h4>
                   <p>${bookdes.value}</p>
                   <button onclick="deleted(event)" style="cursor:pointer">Delete</button>`

    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
    booktitle.value=""
    bookAuthor.value=""
    bookdes.value=""

   
})
function deleted(event){
    event.target.parentElement.remove()

}

//....................................................
var list = []
list.push(formValue)

// var localset=JSON.stringify(list);
// localStorage.setItem("keys",localset)
//  function add(){

//     var localget=localStorage.getItem("keys")
//     JSON.parse(localget)

var list = JSON.parse(localStorage.getItem("keys"));
if (null == list) {
    list = [];
}
list.push(formValue);
localStorage.setItem("keys", (JSON.stringify(list)))