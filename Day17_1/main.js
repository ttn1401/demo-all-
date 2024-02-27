function add(name_phone,img,price){
    var images = img.slice(11)
    var cart_show = document.getElementById("show_cart")
    if(price > 0){
        var cart =`
        <div class="card ms-3 mt-3" style="width: 18rem;">
                    <img src="./images${images}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${name_phone}</h5>
                      <p class="text">${price}đ</p>
                      <button class="btn btn-primary">Đặt mua</button>
                    </div>
                  </div>`
        cart_show.innerHTML += cart;
    }else{
        alert("Vui lòng nhập số tiền lớn hơn 0"); 
    }
   
}