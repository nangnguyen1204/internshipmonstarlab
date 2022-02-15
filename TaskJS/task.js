//Basic
//Cau1
function random(start , end){
    return Math.round(Math.random() * (end - start) + start);
}
console.log(random(6,10));

//Cau2
var init = {};
for(i=0; i<10 ; i++){
    init[i] = random(5,20);
}
console.log(init);

//Cau3
const arr = [1,2,3,4,5];
const oddNumber = arr.filter(getOddNumber);
function getOddNumber(arr){
    return arr %2==1;
}
console.log(oddNumber);

//Cau4
const duplicated = arr.map(double);
function double(arr){
    return arr*2;
}
console.log(duplicated);

//Cau5
const arr1 = [1 , 3, 4, 5, 1, 3, 1];
let newarr= {};
arr1.reduce((pre, curr) => {
if(Object.keys(newarr).length == 0) {
    newarr[curr] = 1;
} else {
    for(let i = 0; i < Object.keys(newarr).length; i++) {
                  
        if(Object.keys(newarr)[i] == curr){
            newarr[Object.keys(newarr)[i]] += 1;
                break;
        } else if(i == Object.keys(newarr).length - 1) {
            newarr[curr] = 1;
            break;
            }
        }
    }
}, 0)
console.log(newarr);

//Advance
//Cau1
function getRandomMark(start, end, step) {

    return (Math.round(Math.random() * ((end - start)/step) + (start)/step))*step;
}
console.log(getRandomMark(6,10,0.5));

var markStudent0 = {
    name: "Nguyễn Văn A",
    marks:{
        literature: getRandomMark(6,10,0.5),
        maths: getRandomMark(6,10,0.5),
        chemistry: getRandomMark(6,10,0.5),
        history: getRandomMark(6,10,0.5),
        biology: getRandomMark(6,10,0.5)
    }
}
var markStudent1 = {
    name: "Nguyễn Văn B",
    marks:{
        literature: getRandomMark(6,10,0.5),
        maths: getRandomMark(6,10,0.5),
        chemistry: getRandomMark(6,10,0.5),
        history: getRandomMark(6,10,0.5),
        biology: getRandomMark(6,10,0.5)
    }
}
var markStudent2 = {
    name: "Nguyễn Văn C",
    marks:{
        literature: getRandomMark(6,10,0.5),
        maths: getRandomMark(6,10,0.5),
        chemistry: getRandomMark(6,10,0.5),
        history: getRandomMark(6,10,0.5),
        biology: getRandomMark(6,10,0.5)
    }
}
var markStudent3 = {
    name: "Nguyễn Văn D",
    marks:{
        literature: getRandomMark(6,10,0.5),
        maths: getRandomMark(6,10,0.5),
        chemistry: getRandomMark(6,10,0.5),
        history: getRandomMark(6,10,0.5),
        biology: getRandomMark(6,10,0.5)
    }
}
var markStudent4 = {
    name: "Nguyễn Văn E",
    marks:{
        literature: getRandomMark(6,10,0.5),
        maths: getRandomMark(6,10,0.5),
        chemistry: getRandomMark(6,10,0.5),
        history: getRandomMark(6,10,0.5),
        biology: getRandomMark(6,10,0.5)
    }
}

console.log(markStudent0);

var markList = [];
markList[0] = markStudent0;
markList[1] = markStudent1;
markList[2] = markStudent2;
markList[3] = markStudent3;
markList[4] = markStudent4;

console.log(markList);