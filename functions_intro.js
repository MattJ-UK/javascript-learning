var pos = 0;

function move(pos, byAmount) {
    const newPos = pos + byAmount;
    return newPos;
}

var finalPos = move(pos, 3);

console.log(finalPos);