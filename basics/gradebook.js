//Get the average score of each student
const getAverage = (scores) => {
  let sumResult = 0;
  for (let i = 0; i < scores.length; i++) {
    sumResult = sumResult + scores[i];
  }
  // for (const score of scores) {
  //   sumResult += score;
  // }
  return sumResult / scores.length;
};
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//Convert the student score to a letter grade
const getGrade = (score) => {
  if (score === 100) {
    return "A++";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
};
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

//Check whether a student has a passing grade(anything that is not F)
const hasPassingGrade = (score) => {
  if (getGrade(score) === "F") {
    return false;
  } else {
    return true;
  }
  //cleaner code;
  // return getGrade(score) !== "F";
};
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

//Now that the teacher has all of the information they need, they want to be able to message the student with the results.
const studentMsg = (totalScores, studentScore) => {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  if (grade === "F") {
    return (
      "Class average: " +
      average +
      ". Your grade: " +
      grade +
      ". You failed the course."
    );
  } else {
    return (
      "Class average: " +
      average +
      ". Your grade: " +
      grade +
      ". You passed the course."
    );
  }
};
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
