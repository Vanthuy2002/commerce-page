let liked = document.querySelector(".liked");

liked.onclick = function(){
    if(liked.classList.contains("liked")){
        liked.classList.remove("liked")
        //nếu có class liked thì bỏ nó đi
    }else{
        liked.classList.add("liked");
        //không có thì add class đó vào
    }
};