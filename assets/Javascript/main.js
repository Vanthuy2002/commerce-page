let liked = document.querySelector(".liked");

liked.onclick = function () {
  if (liked.classList.contains("liked")) {
    liked.classList.remove("liked");
    //nếu có class liked thì bỏ nó đi
  } else {
    liked.classList.add("liked");
    //không có thì add class đó vào
  }
};

let cart = document.querySelector(".cart__wrap");
let cartList = document.querySelector(".cart__list");
let cartItem = document.querySelectorAll(".cart__item-add");
let cartNum = document.querySelector(".cart__noti");
cartNum.textContent = cartItem.length;
cart.onclick = () => {
  cartList.classList.toggle("show");
};
