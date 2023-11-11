// change like btn color 
var likeButton = document.getElementsByClassName("like");

for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener("click", function () {
        if (likeButton[i].style.color == "red") {
            likeButton[i].style.color = "black";
        } else {
            likeButton[i].style.color = "red";
        }
    });
}

// incrument value
var plusButton = document.getElementsByClassName("plus-btn");
var value = document.getElementsByClassName("Quant");

for (let i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener("click", function () {
        value[i].value++;
        totalPrice();
    });
}
// decrument value
var minusButton = document.getElementsByClassName("minus-btn");
for (let i = 0; i < plusButton.length; i++){
    minusButton[i].addEventListener("click",function(){
        if(value[i].value>1){
            value[i].value--;
            totalPrice();
        }
    })
}
//delet element
var deletButton = document.querySelectorAll(".delete");
for (let i = 0; i < deletButton.length; i++){
    deletButton[i].addEventListener("click", function (){
        deletButton[i].parentElement.remove();
        totalPrice();
    })
}
//total price 
function totalPrice() {
    var quant = document.getElementsByClassName("Quant");
    var price = document.getElementsByClassName("price");
    var totalPrice = document.getElementById("finalPrice");
    var sum = 0;
    for(let i = 0;i<quant.length;i++){
        sum = sum + quant[i].value * price[i].innerHTML;
    }
    totalPrice.value = sum.toFixed(2);
}
