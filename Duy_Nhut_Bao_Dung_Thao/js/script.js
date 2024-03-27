var arrroom = [
    {
        id: 1,
        kind: "Hotel",
        time: "3h",
        rate: "250.000",
        des: "Normal",
        image:" https://th.bing.com/th?id=OIP.-tR5Ra0qiYyG8GGor5eqxQHaEk&w=317&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
        id: 2,
        kind: "Hotel VIP1",  
        time: "5h",
        rate: "500.000",
        des: "Vip",
        image:"https://th.bing.com/th/id/OIP.JVxQxaLk9sqo-4r74p97MgAAAA?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    // Add other room objects here
];

function save() {
    var a = {
        id: document.getElementById('id').value,
        kind: document.getElementById('kind').value,
        time: document.getElementById('time').value,
        rate: document.getElementById('rate').value,
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
        html += "<td>" + arrroom[i].kind + "</td>";
        html += "<td>" + arrroom[i].time + "</td>";
        html += "<td>" + arrroom[i].rate + "</td>";
        html += "<td>" + arrroom[i].des + "</td>";
        html += "<td><img src='" + arrroom[i].image + "' alt='Image' style='width: 60px; height: 60px;'></td>";
        html += "<td><button onclick='edit(" + i + ")'>Edit</button><button onclick='remove(" + i + ")'>Delete</button></td>";
        html += "</tr>";
    }
    document.getElementById('room').innerHTML = html;
}

function reset() {
    document.getElementById('id').value = '';
    document.getElementById('kind').value = '';
    document.getElementById('time').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('des').value = '';
    document.getElementById('image').value = '';
}

function edit(index) {
    var room = arrroom[index];
    var row = document.getElementById('room').rows[index]; // +1 to adjust for header row

    row.cells[1].innerHTML = "<input type='text' id='edit-id' value='" + room.id + "'>";
    row.cells[2].innerHTML = "<input type='text' id='edit-kind' value='" + room.kind + "'>";
    row.cells[3].innerHTML = "<input type='text' id='edit-time' value='" + room.time + "'>";
    row.cells[4].innerHTML = "<input type='text' id='edit-rate' value='" + room.rate + "'>";
    row.cells[5].innerHTML = "<input type='text' id='edit-des' value='" + room.des + "'>";
    row.cells[6].innerHTML = "<input type='text' id='edit-image' value='" + room.image + "'>";
    row.cells[7].innerHTML = "<button onclick='saveEdit(" + index + ")'>Save</button>";
}

function saveEdit(index) {
    arrroom[index].id = document.getElementById('edit-id').value;
    arrroom[index].kind = document.getElementById('edit-kind').value;
    arrroom[index].time = document.getElementById('edit-time').value;
    arrroom[index].rate = document.getElementById('edit-rate').value;
    arrroom[index].des = document.getElementById('edit-des').value;
    arrroom[index].image = document.getElementById('edit-image').value;
    showroom();
}

function remove(index) {
    arrroom.splice(index, 1);
    showroom();
}

function searchRoom() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var searchResult = arrroom.filter(function(room) {
        return room.kind.toLowerCase().includes(searchTerm) || 
               room.des.toLowerCase().includes(searchTerm);
    });
    var html = '';
    for (var i = 0; i < searchResult.length; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + searchResult[i].id + "</td>";
        html += "<td>" + searchResult[i].kind + "</td>";
        html += "<td>" + searchResult[i].time + "</td>";
        html += "<td>" + searchResult[i].rate + "</td>";
        html += "<td>" + searchResult[i].des + "</td>";
        html += "<td><img src='" + searchResult[i].image + "' alt='Image' style='width: 60px; height: 60px;'></td>";
        html += "<td><button onclick='edit(" + i + ")'>Edit</button><button onclick='remove(" + i + ")'>Delete</button></td>";
        html += "</tr>";
    }
    document.getElementById('room').innerHTML = html;
}
