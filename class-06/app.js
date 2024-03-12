// console.log('hello world');




var chemMarks = document.querySelector('#chem-marks');
var phyMarks = document.querySelector('#phy-marks');
var urduMarks = document.querySelector('#urdu-marks');
var mathMArks = document.querySelector('#math-marks');
var studentMarks = document.querySelector('#student-marks')
var percentage = document.querySelector('#percentage')
var grade = document.querySelector ("#grade")

function percentageCal(){
    console.log(chemMarks.value);
    console.log(phyMarks.value);
    console.log(urduMarks.value);
    console.log(mathMArks.value);

    var totalMarks = 400 ;
    var obatinedmarks = +chemMarks.value + +phyMarks.value + +urduMarks.value + +mathMArks.value ;
    
    studentMarks.innerHTML = obatinedmarks

    var studentPercentage = obatinedmarks / totalMarks * 100 ;
    percentage.innerHTML = studentPercentage ;

    if(studentPercentage > 80){
        grade.innerHTML = 'A+'
    }else if(studentPercentage > 70){
        grade.innerHTML = 'A'
    } else if(studentPercentage > 60){
        grade.innerHTML = 'B'
    }else{
        grade.innerHTML = 'FAIL'
    }
}





































































