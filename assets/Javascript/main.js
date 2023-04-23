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
  addClass(cartList, "toggle", "show");
};

function addClass(selector, type, value) {
  selector.classList[type](value);
}

let paginations = document.querySelectorAll(".pagination-link");
paginations.forEach((page) => {
  page.onclick = () => {
    paginations.forEach((num) => {
      addClass(num, "remove", "active");
    });
    addClass(page, "add", "active");
  };
});

let search = document.querySelector(".mobile-search");
let headerSearch = document.querySelector(".header__search");

search.onclick = () => {
  addClass(headerSearch, "toggle", "showSearch");
};
