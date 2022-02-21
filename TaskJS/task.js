//Basic
//Cau1

console.log("Basic");
function random(start , end){
    return Math.round(Math.random() * (end - start) + start);
}
console.log(random(6,10));

//Cau2
var init = [];
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
    if(newarr.hasOwnProperty(curr)){
        newarr[curr] += 1;
    } else {
        newarr[curr] = 1
    }
}, 0)
console.log(newarr);

//Advance
console.log("Advance");
//Cau1
function getRandomMark(start, end, step) {

    return (Math.round(Math.random() * ((end - start)/step) + (start)/step))*step;
}
console.log(getRandomMark(6,10,0.5));
//Cau 2
function generateStudentMark(name){
    var obj={
      name: name,
      marks:{
        literature:getRandomMark(6,10,0.5),
        math:getRandomMark(6,10,0.5),
        chemistry:getRandomMark(6,10,0.5),
        history:getRandomMark(6,10,0.5),
        biology:getRandomMark(6,10,0.5)
      }
    }
     return obj
}
 
const markList = [
    generateStudentMark("nang"),
    generateStudentMark("ngoc"),
    generateStudentMark("khanh"),
    generateStudentMark("hoa"),
    {
        name: "nhung",
        marks: {
            literature: 9,
            maths: 8,
            chemistry: 7,
            history: 9,
            biology: 9,
            english: 9,
            java: 10
        }
    }
]

function calculator(student){
    const countMarks = Object.keys(student.marks).length;
    let totalScore = 0;
    for(const key in student.marks){
        if(key == "literature" || key == "maths"){
            totalScore += student.marks[key] *2;
        }else {
            totalScore += student.marks[key]
        }
    }
    let averageScore = totalScore / (countMarks +2);
    return{
        name: student.name,
        averageScore: averageScore
    }
}

function bonus(student){
    let total= 0;
    for(const key in student.marks){
        if(student.marks[key] == 8) {
            total += 1000000; 
        } else if(student.marks[key] == 9) {
            total += 2000000; 
        } else if(student.marks[key] ==10) {
            total += 5000000; 
        }
    }
    return {
        name: student.name,
        bonus: total
    };
}

let result = [];
let listStudent = [];
let literatureMax = 0;
let mathsMax = 0;
let listBonus = [];
markList.map(student => {
    result.push(calculator(student))

    //1 điểm lớn nhất môn văn
    if(student.marks.literature > literatureMax){
        literatureMax = student.marks.literature
    }
    
    //2 điểm lớn nhất môn toán
    if(student.marks.maths > mathsMax){
        mathsMax = student.marks.maths
    }


    // caculator bonus
    listBonus.push(bonus(student))
    
})

// search list student have average score bigger 8
result.map(student => {
    if(student.averageScore > 8){
        return listStudent.push(student);
    }
})



// list student  (average score)
console.log("Cau 4")
console.log(result)
// tiền thưởng
console.log("Cau 6")
console.log(listBonus)

// student  literature has score max
console.log("Diem van cao nhat")
console.log(literatureMax)

// student math has score max
console.log("Diem toan cao nhat")
console.log(mathsMax)

// list student has average bigger 8
console.log("danh sach sinh vien trung binh tren 8")
console.log(listStudent)


//Cau7 
 const obj_1 = {name : "nam" , age : 20};
 const obj_2 = JSON.parse(JSON.stringify(obj_1));
 console.log(obj_2)

//Cau8
function isObject(obj) {
    return obj != null && typeof obj === "object";
}
function isDeepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1); 
    const keys2 = Object.keys(obj2); 
  
    // so sánh số lượng keys
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      const val1 = obj1[key];
      const val2 = obj2[key];
  
      // kiểm tra xem hai giá trị có cùng là object hay không
      const areObjects = isObject(val1) && isObject(val2);
  
      // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
      if (areObjects && !isDeepEqual(val1, val2)) {
        return false;
      }
  
      // nếu không cùng là object thì so sánh giá trị
      if (!areObjects && val1 !== val2) {
        return false;
      }
    }
  
    return true;
}
  
let point1 = { x: 1, y: 2, metadata: { type: "point" } };
let point2 = { x: 1, y: 2, metadata: { type: "point" } };
  
console.log(isDeepEqual(point1, point2)); 