function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let studentsArr = [
  { name: "John" },
  { name: "Jack" },
  { name: "Mary" },
  { name: "Ginny" },
  { name: "Harry" },
];

function join(students) {
  students.forEach((el) => {
    el.academy = "Develhope";
  });
}

function exam(students) {
  students.forEach((el) => {
    let v = getRandomNumber(1, 10);
    el.grade = v;
  });
}

function year(students) {
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    student.year = getRandomNumber(1, 3);
  }
}

function graduate(students) {
  let result = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student.grade >= 6) {
      result.push(student);
    }
  }
  return result;
}

function graduate2(students) {
  return students.filter((student) => student.grade >= 6);
}

// should return ["Failed", "Average", "Above Average", "Great"]
function studentLevels(students) {
  let results = [];
  students.forEach((student) => {
    if (student.grade <= 5) {
      results.push("Failed");
    } else if (student.grade <= 6) {
      results.push("Average");
    } else if (student.grade <= 8) {
      results.push("Above Average");
    } else if (student.grade <= 9) {
      results.push("Great");
    } else if (student.grade <= 10) {
      results.push("Great");
    }
  });
  return results;
}

function studentLevels2(students) {
  let results = [];
  students.forEach((student) => {
    if (student.grade <= 5) {
      results.push("Failed");
    } else if (student.grade >= 6 && student.grade < 7) {
      results.push("Average");
    } else if (student.grade >= 7 && student.grade < 9) {
      results.push("Above Average");
    } else if (student.grade >= 9 && student.grade <= 10) {
      results.push("Great");
    }
  });
  return results;
}

function studentLevels3(students) {
  let results = [];
  students.forEach((student) => {
    switch (Math.floor(student.grade)) {
      case 6:
        results.push("Average");
        break;
      case 7:
        results.push("Above Average");
        break;
      case 8:
        results.push("Above Average");
        break;
      case 9:
        results.push("Great");
        break;
      case 10:
        results.push("Great");
        break;
      default:
        results.push("Failed");
        break;
    }
  });
  return results;
}

function failedStudents(students) {
  let result;
  result = students.filter((student) => student.grade <= 5);
  return result;
}

function failedStudents2(students) {
  let result = [];

  students.forEach((student) => {
    if (student.grade <= 5) {
      result.push(student);
    }
  });

  return result;
}

join(studentsArr);
exam(studentsArr);
year(studentsArr);
let graduatedStudentsArr = graduate2(studentsArr);
console.log(studentsArr);
console.log(graduatedStudentsArr);
console.log(studentLevels2(studentsArr));
console.log(failedStudents2(studentsArr));
