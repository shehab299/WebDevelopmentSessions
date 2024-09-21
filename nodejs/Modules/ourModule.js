let x = {
    value: 10
};

console.log(__dirname);

function increaseX(){
    x.value++;
}


module.exports = {
    x,
    increaseX
}