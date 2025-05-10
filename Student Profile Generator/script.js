const students = [
    {firstName: "Abiola",
    lastName: "Abimbola",
    age:20,
    score: 60,
    courses: ["cse232","mee212",]
},
    {firstName: "Oyindamola",
        lastName: "Odunayo",
        age:21,
        score: 61,
        courses: ["mth204","cse212"]
        },
        {firstName: "Oluwafemi",
            lastName: "Adegoke",
            age:22,
            score: 62,
            courses: ["cse232","cse212"]
            },
            {firstName: "Abayomi",
                lastName: "Gabriel",
                age:23,
                score: 63,
                courses: ["mee212","mth204",],
                },
]

//destructuring to extract
const [, , thirdStudent] = students;
const {firstName, lastName, age , score , courses}= thirdStudent;
alert(firstName);
alert(lastName);
alert(age);
alert(score);
alert(courses);

//for each
students.forEach(function(student){
    const { firstName , lastName , age , score, courses} = student;

   alert(`Student's Profile: 
        Name : ${firstName} ${lastName} 
        Age :${age} 
        Score: ${score} 
        Courses: ${courses} `)
});

//mapping
const Newstudent = students.map(({firstName , lastName , age , score , courses}) => {
   return(`${firstName} ${lastName} is ${age} years old and scored ${score}. She is taking : ${courses}`) 
});
Newstudent.forEach(Student_profile => alert(Student_profile));