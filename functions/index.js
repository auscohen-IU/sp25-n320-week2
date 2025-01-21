function calcTriArea(base, height){
    if (base == null){
        base = 1
    }

    if (height == null){
        base = 1
    }

    return 0.5 * base * height;
}

function calcSquareArea(length, width){
    return length * width;
}

module.exports = {
    calcTriArea, calcSquareArea
};