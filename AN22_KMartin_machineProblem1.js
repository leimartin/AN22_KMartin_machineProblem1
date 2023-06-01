// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: 	Computation of Grades using Function
	Programmer: Katryna Lei V. Martin
	Section: 	BCS22
	Start Date: June 02, 2023
	End Date: 	June 02, 2023
*/

function calculateAverage(grades) {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function computeLetterGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80 && grade < 90) {
    return 'B';
  } else if (grade >= 70 && grade < 80) {
    return 'C';
  } else if (grade >= 60 grade < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

function calculateStudentGrades() {
  const resultsTable = document.getElementById('resultsTable');
  
  for (let i = 1; i <= 5; i++) {
    const name = prompt(`Enter student ${i} name:`);

    const enablingGrades = [];
    for (let j = 1; j <= 5; j++) {
      const enablingGrade = parseFloat(prompt(`Enter Enabling Assessment ${j} for ${name}:`));
      enablingGrades.push(enablingGrade);
    }
    const classParticipation = calculateAverage(enablingGrades);

    const summativeGrades = [];
    for (let k = 1; k <= 3; k++) {
      const summativeGrade = parseFloat(prompt(`Enter Summative Assessment ${k} for ${name}:`));
      summativeGrades.push(summativeGrade);
    }
    const summativeGrade = calculateAverage(summativeGrades);

    const overallGrade = (classParticipation + summativeGrade) / 2;
    const letterGrade = computeLetterGrade(overallGrade);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>${classParticipation.toFixed(2)}</td>
      <td>${summativeGrade.toFixed(2)}</td>
      <td>${overallGrade.toFixed(2)}</td>
      <td>${letterGrade}</td>
    `;
    resultsTable.appendChild(row);
  }
}

calculateStudentGrades();
