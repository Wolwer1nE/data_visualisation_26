import {Room} from "./src/room"

var room = new Room(5, 8, [[3,4],[3,5]]);
var selectedData = {
    seats: []
}


function setup(){
    
    var mainContainer = document.getElementById("mainContainer");

    replaceRows(room, mainContainer);
}

document.addEventListener("DOMContentLoaded", setup);

function replaceRows(room, container){
    container.innerHTML = ""   
    for (const row of room.rows){
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("rowContainer");

        for (const seat of row){ 
            rowContainer.appendChild(makeSeatElement(seat));
        }
        container.appendChild(rowContainer);
    }
}

function tickSeatInRoom(seat){
    const record =  room.rows[seat.row-1][seat.number-1];
    record.selected = !record.selected;
}

function makeSeatElement(seat){
    const seatElement = document.createElement("div");
    seatElement.classList.add("seat");
    seatElement.innerHTML = seat.number;
    if (seat.taken) {
        seatElement.classList.add("taken")
    } else {
        if (seat.selected) {
                seatElement.classList.add("selected");
            seatElement.onclick = () => {
                tickSeatInRoom(seat);
                removeSelectedSeat(seat);
                replaceRows(room, mainContainer);

        }
        } else {
            seatElement.classList.add("available")
            seatElement.classList.add(seat.price > 4 ? "tier1" : "tier2");
            seatElement.onclick = () => {
                tickSeatInRoom(seat);
                addSelectedSeat(seat);
                replaceRows(room, mainContainer);

        }

        }
    } 

    return seatElement;
}

function addSelectedSeat(seat){
    selectedData.seats.push(seat);

    updatedSelectedUI();
}

function removeSelectedSeat(seatToRemove){
    const newSeats = []
    for (const seat of  selectedData.seats){
        if (seat != seatToRemove){
            newSeats.push(seat);
        }
    }
    selectedData.seats = newSeats;
    updatedSelectedUI();
    
}

function updatedSelectedUI(){
    let text = "";
    let totalPrice  = 0;
    for (const seat of selectedData.seats){
        text += `${seat.row}-${seat.number};`
        totalPrice += seat.price
    }
    selectedSeatsElement.innerHTML =  text;
    totalElement.innerHTML = `$${totalPrice}`; 
}