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
const [, , thirdStudent] = students;
const {firstName, lastName, age , score , courses}= thirdStudent;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(score);
console.log(courses);

students.forEach(function(student){
    const { firstName , lastName , age , score, courses} = student;

   console.log(`Student's Profile: 
        Name : ${firstName} ${lastName} 
        Age :${age} 
        Score: ${score} 
        Courses: ${courses} `)
});