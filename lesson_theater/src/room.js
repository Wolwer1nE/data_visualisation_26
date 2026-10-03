class Room {
    constructor(nRows, nSeats, taken = []){
        this.rows = []
        for (let i = 0; i < nRows; i++){
            const row = [];
            for (let j = 0; j < nSeats; j++){
                const seat = {
                    row: i+1,
                    number: j+1,
                    price: i < 2 ? 5 : 3,
                    taken: this.checkAvailability(taken,  i+1,j+1),
                    selected: false
                }
                row.push(seat);
            }
            this.rows.push(row);
        }
    }

    checkAvailability = (taken, rowNumber, seatNumber) => {

        for (const record of taken){
            if (record[0] == rowNumber && record[1]  == seatNumber){
                return true
            }
        }

        return false;
    }
}

export {Room};