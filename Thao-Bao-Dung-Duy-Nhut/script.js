var arrroom = [
    {
        id: 1,
        loai: "Hotel VIP",
        gio: "TC1025011BA",
        dem: "250.000",
        des: "Vip", // Wrap Vip in quotes
        image:" https://th.bing.com/th?id=OIP.-tR5Ra0qiYyG8GGor5eqxQHaEk&w=317&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
        id: 2,
        loai: "hotel VIP1",  
        gio: "3h",
        dem: "250.000",
        des: "Vip", // Wrap Vip in quotes
        image:"https://th.bing.com/th/id/OIP.JVxQxaLk9sqo-4r74p97MgAAAA?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    
    // Add other room objects here
];

function save() {
    var a = {
        id: document.getElementById('id').value,
        loai: document.getElementById('loai').value,
        gio: document.getElementById('gio').value,
        dem: document.getElementById('dem').value,
        des: document.getElementById('des').value,
        image: document.getElementById('image').value
    }

    arrroom.push(a);
    console.log(a);
}

function showroom() {
    var html = '';
    for (var i = 0; i < arrroom.length; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + arrroom[i].id + "</td>";
        html += "<td>" + arrroom[i].loai + "</td>";
        html += "<td>" + arrroom[i].gio + "</td>";
        html += "<td>" + arrroom[i].dem + "</td>";
        html += "<td>" + arrroom[i].des + "</td>";
        html += "<td><img src='" + arrroom[i].image + "' alt='Image' style='width: 60px; height: 60px;'></td>";
        html += "<td><button onclick='edit(" + i + ")'>Edit</button><button onclick='remove(" + i + ")'>Delete</button></td><button onclick='mota(" + i + ")'>mota</button>" ;
        html += "</tr>";
    }
    document.getElementById('room').innerHTML = html;
}

function reset() {
    document.getElementById('id').value = '';
    document.getElementById('loai').value = '';
    document.getElementById('gio').value = '';
    document.getElementById('dem').value = '';
    document.getElementById('des').value = '';
    document.getElementById('image').value = '';
}

function edit(index) {
    var room = arrroom[index];
    var row = document.getElementById('room').rows[index]; // +1 to adjust for header row

    row.cells[1].innerHTML = "<input type='text' id='edit-id' value='" + room.id + "'>";
    row.cells[2].innerHTML = "<input type='text' id='edit-loai' value='" + room.loai + "'>";
    row.cells[3].innerHTML = "<input type='text' id='edit-gio' value='" + room.gio + "'>";
    row.cells[4].innerHTML = "<input type='text' id='edit-dem' value='" + room.dem + "'>";
    row.cells[5].innerHTML = "<input type='text' id='edit-des' value='" + room.des + "'>";
    row.cells[6].innerHTML = "<input type='text' id='edit-image' value='" + room.image + "'>";
    row.cells[7].innerHTML = "<button onclick='saveEdit(" + index + ")'>Save</button>";
}

function saveEdit(index) {
    arrroom[index].id = document.getElementById('edit-id').value;
    arrroom[index].loai = document.getElementById('edit-loai').value;
    arrroom[index].gio = document.getElementById('edit-gio').value;
    arrroom[index].dem = document.getElementById('edit-dem').value;
    arrroom[index].des = document.getElementById('edit-des').value;
    arrroom[index].image = document.getElementById('edit-image').value;
    showroom();
}

function remove(index) {
    arrroom.splice(index, 1);
    showroom();
}

function showroom() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var filteredRooms = arrroom.filter(function(room) {
        return room.loai.toLowerCase().includes(searchTerm) || room.des.toLowerCase().includes(searchTerm);
    });

    var html = '';
    for (var i = 0; i < filteredRooms.length; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + filteredRooms[i].id + "</td>";
        html += "<td>" + filteredRooms[i].loai + "</td>";
        html += "<td>" + filteredRooms[i].gio + "</td>";
        html += "<td>" + filteredRooms[i].dem + "</td>";
        
        html += "<td><img src='" + filteredRooms[i].image + "' alt='Image' style='width: 60px; height: 60px;'></td>";
        html += "<td><button onclick='edit(" + i + ")'>Edit</button><button onclick='remove(" + i + ")'>Delete</button><button onclick='mota(" + i + ")'>Mo ta</button></td>";
        html += "</tr>";
    }

    // Display room details for the first room in the filtered list, if any
    var detailsHtml = '';
    if (filteredRooms.length > 0) {
        detailsHtml += "<tr>";
        detailsHtml += "<td colspan='8'>";
        detailsHtml += "<h3>Thông tin chi tiết</h3>";
        detailsHtml += "<p><strong>Số Phòng:</strong> " + filteredRooms[0].id + "</p>";
        detailsHtml += "<p><strong>Loại Phòng:</strong> " + filteredRooms[0].loai + "</p>";
        detailsHtml += "<p><strong>Giá Phòng Thuê Theo Giờ:</strong> " + filteredRooms[0].gio + "</p>";
        detailsHtml += "<p><strong>Giá Phòng Thuê Qua Đêm:</strong> " + filteredRooms[0].dem + "</p>";
        detailsHtml += "<p><strong>Mô Tả:</strong> " + filteredRooms[0].des + "</p>";
        detailsHtml += "<p><strong>Hình Ảnh:</strong> <img src='" + filteredRooms[0].image + "' alt='Image' style='width: 100px; height: 100px;'></p>";
        detailsHtml += "</td>";
        detailsHtml += "</tr>";
    }

    document.getElementById('room').innerHTML = html + detailsHtml;
}

