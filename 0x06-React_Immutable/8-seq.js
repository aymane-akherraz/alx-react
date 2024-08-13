import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const BestStudents = Seq(grades)
  .filter(student => student.score >= 70)
  .map(student => ({
    score: student.score,
    firstName: 
        student.firstName[0].toUpperCase() + student.firstName.slice(1),
    lastName:
        student.lastName[0].toUpperCase() + student.lastName.slice(1)
  }));
  console.log(BestStudents.toJS());
}
