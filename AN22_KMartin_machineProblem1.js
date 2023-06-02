// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: 	  Computation of Grades using Function
	Programmer: Katryna Lei V. Martin
	Section: 	  AN22
	Start Date: June 02, 2023
	End Date: 	June 02, 2023
*/

function calculateStudentAverage(grades) {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function getLetterGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80 && grade < 90) {
    return 'B';
  } else if (grade >= 70 && grade < 80) {
    return 'C';
  } else if (grade >= 60 && grade < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

function calculateStudentGrades() {
  const studentResultsTable = document.getElementById('studentResultsTable');
  
  for (let i = 1; i <= 5; i++) {
    // student's name
    let name = prompt(`Enter the name of the student:`);

    // get Enabling Assessments
    const enablingGrades = [];
    for (let j = 1; j <= 5; j++) {
      let myEnablingGrade = parseFloat(prompt(`Enter Enabling Assessment ${j}:`));
      enablingGrades.push(myEnablingGrade);
    }
    const classParticipation = calculateStudentAverage(enablingGrades);

    // get Summative Assessments
    const summativeGrades = [];
    for (let k = 1; k <= 3; k++) {
      let mySummativeGrade = parseFloat(prompt(`Enter Summative Assessment ${k}:`));
      summativeGrades.push(mySummativeGrade);
    }
    const summativeGrade = calculateStudentAverage(summativeGrades);

    // get Final Grade
    let finalExamGrade = parseFloat(prompt(`Enter Final Examination grade:`));

    // overall && letter grade
    const overallGrade = Math.ceil((classParticipation * 0.3) + (summativeGrade * 0.3) + (finalExamGrade * 0.4));
    const letterGrade = getLetterGrade(overallGrade);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>${classParticipation.toFixed(0)}</td>
      <td>${summativeGrade.toFixed(0)}</td>
      <td>${finalExamGrade.toFixed(0)}</td>
      <td>${overallGrade.toFixed(0)}</td>
      <td>${letterGrade}</td>
    `;
    studentResultsTable.appendChild(row);
  }
}

calculateStudentGrades();