const students = [
  { name: 'Aarav', marks: 78, passed: true, subject: 'Math' },
  { name: 'Diya', marks: 42, passed: false, subject: 'Science' },
  { name: 'Kabir', marks: 88, passed: true, subject: 'Math' },
  { name: 'Meera', marks: 65, passed: true, subject: 'English' },
  { name: 'Rohan', marks: 38, passed: false, subject: 'Science' },
  { name: 'Isha', marks: 92, passed: true, subject: 'Math' },
  { name: 'Vivaan', marks: 75, passed: true, subject: 'English' },
  { name: 'Anaya', marks: 70, passed: true, subject: 'Science' }
];

let first=document.querySelector("#first");
 let p=document.createElement("p");
for (std of students){
    if(std.passed=="true" || std.marks>=70){
        // console.log(std.name);
        p.textContent=`name:${std.name} marks:${std.marks} passed:${std.passed} subject:${std.subject}`;
     first.append(p);
    }
}