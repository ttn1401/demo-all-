function listProducts(){
    for (let i=0;i<=man.length-1;i++){
      var demo= '<div class="col-3">';
      demo += '<div class="card" style="width: 18rem">';
      demo += '<img src="'+man[i].image+'"class="card-img-top" style="height:300px;">';
      demo += '<div class="card-body">';
      demo += '<h5 class="card-title">'+man[i].name+'</h5>';
      demo += '<p class="card-text"><span style="text-decoration: line-through;">' + man[i].price + ' vnđ</span> ' + man[i].oldprice + ' vnđ</p>';
      demo += '<a href="#" class="btn btn-danger" onclick="oder()">Đặt mua</a>'
      demo += '</div>';
      demo += '</div>';
      demo += '</div>';
      console.log(demo);
      document.getElementById("man").innerHTML +=demo;
    }
    for (let i=0;i<=woman.length-1;i++){
      var demo= '<div class="col-3">';
      demo += '<div class="card" style="width: 18rem">';
      demo += '<img src="'+woman[i].image+'"class="card-img-top" style="height:300px;">';
      demo += '<div class="card-body">';
      demo += '<h5 class="card-title">'+woman[i].name+'</h5>';
      demo += '<p class="card-text"><span style="text-decoration: line-through;">' + woman[i].price + ' vnđ</span> ' + woman[i].oldprice + ' vnđ</p>';

      demo += '<a href="#" class="btn btn-danger" onclick="oder()">Đặt mua</a>'
      demo += '</div>';
      demo += '</div>';
      demo += '</div>';
      console.log(demo);
      document.getElementById("woman").innerHTML +=demo;
    }
  }


var man = [
    {
      id:1,
      name: "Áo thun Mando unisex",
      code: "TN001",
      oldprice: "180.000",
      price: "200.000",
      image: "../image/ao1.webp"
    },
    {
      id:2,
      name: "Áo sơ mi giấu cúc",
      code: "TN002",
      oldprice: "190.000",
      price: "200.000",
      image: "../image/ao2.webp"
    },
    {
      id:3,
      name: "Jacket dạ",
      code: "TN003",
      oldprice: "450.000",
      price: "550.000",
      image: "../image/ao3.webp"
    },
    {
      id:4,
      name: "Hoodie nỉ bông",
      code: "TN004",
      oldprice:"250.000",
      price: "275.000",
      image: "../image/ao4.webp"
    },
  ];
  var woman = [
    {
      id:1,
      name: "Chân váy chữ A",
      code: "TN011",
      oldprice:"150.000",
      price: "175.000",
      image: "../image/quan1.png"
    },
    {
      id:2,
      name: "Quần giả váy KMG",
      code: "TN012",
      oldprice: "200.000",
      price: "220.000",
      image: "../image/quan2.jpg"
    },
    {
      id:3,
      name: "Áo Blazer",
      code: "TN013",
      oldprice: "350.000",
      price: "400.000",
      image: "../image/Ao03.webp"
    },
   
  ];
