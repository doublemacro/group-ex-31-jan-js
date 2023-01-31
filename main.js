function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let students = [
  {name: "john"},
  {name: "jack"},
  {name: "walter"},
  {name: "white"},
  {name: "jesse"},
];

function join(students){
  students.forEach((el) =>{
    el.academy = "Develhope";
  })
};

join(students);

function exam(students){
  students.forEach((el) => {
    el.grade = getRandomNumber(0,10);
  })
}
exam(students);

function year(students){
  for(let i = 0; i < students.length; i++){
    students[i].year = getRandomNumber(1,3);
  }
}

year(students);

function graduate(students){
  let array = [];
  for(let i = 0; i < students.length; i++){
    if(students[i].grade >= 6){
      array.push(students[i]);
    }
  }
  return array;
}

let succesfull = graduate(students);
console.log(succesfull);

// let isGraduate = graduate(students);

function studentLevels(students){
  for(let i = 0; i < students.length; i++){
    if(students[i].grade <= 5){
      students[i].level = "Failed";
    }
    else if(students[i].grade <= 6){
      students[i].level = "Average";
    }
    else if(students[i].grade <= 8){
      students[i].level = "Above Average";
    }
    else if(students[i].grade <= 10){
      students[i].level = "Great";
    }
  }
}

function failedStudents(students){
  let array = [];
  for(let i = 0; i < students.length; i++){
    if(students[i].grade <= 5){
      array.push(students[i]);
    }
  }
  return array;
}

let failed = failedStudents(students);
console.log(students);
console.log(failed);