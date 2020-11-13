buildChess();

function buildChess () {
    var row, column, i, j;
    for (i = 0; i < 8; i++) {
        row = document.createElement("div");
        row.className = "row";
        document.querySelector(".innerBox").append(row);
        for (j = 0; j < 8; j++) {
            column = document.createElement("div");
            column.className = "column";
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    column.classList.add("column_white");
                } else {
                    column.classList.add("column_black");
                }
            }
            else {
                if (j % 2 === 0) {
                    column.classList.add("column_black");
                } else {
                    column.classList.add("column_white");
                }
            }
            column.id = setId(j, i);
            if (i === 0 || i === 1 || i === 6 || i === 7) {
                column.innerHTML = getFigure(j, i);
            }
            row.append(column);
        }
    }
}

function setId (x, y) {
    var str = "";
    switch (y) {
        case 0:
            str += "8";
            break;
        case 1:
            str += "7";
            break;
        case 2:
            str += "6";
            break;
        case 3:
            str += "5";
            break;
        case 4:
            str += "4";
            break;
        case 5:
            str += "3";
            break;
        case 6:
            str += "2";
            break;
        case 7:
            str += "1";
            break;
    }
    switch (x) {
        case 0:
            str += "A";
            break;
        case 1:
            str += "B";
            break;
        case 2:
            str += "C";
            break;
        case 3:
            str += "D";
            break;
        case 4:
            str += "E";
            break;
        case 5:
            str += "F";
            break;
        case 6:
            str += "G";
            break;
        case 7:
            str += "H";
            break;
    }
    return str;
}

function getFigure(x, y) {
    if (y === 1) {
        return figures[1].pawn;
    }
    else if (y === 6) {
        return figures[0].pawn;
    }
    else if (y === 0) {
        switch (x) {
            case 0: return figures[1].rook;
            case 1: return figures[1].bishop;
            case 2: return figures[1].knight;
            case 3: return figures[1].queen;
            case 4: return figures[1].king;
            case 5: return figures[1].knight;
            case 6: return figures[1].bishop;
            case 7: return figures[1].rook;
        }
    }
    else if (y === 7) {
        switch (x) {
            case 0: return figures[0].rook;
            case 1: return figures[0].bishop;
            case 2: return figures[0].knight;
            case 3: return figures[0].queen;
            case 4: return figures[0].king;
            case 5: return figures[0].knight;
            case 6: return figures[0].bishop;
            case 7: return figures[0].rook;
        }
    }
}