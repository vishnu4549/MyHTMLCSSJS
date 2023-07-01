var courses=[
    AWS={
        name: "AWS Course Curriculum", 
        syllabus:["AWS Overview","Operatingsystem and Linux Basics","Application components",
         "Aws GLobal Infrastructure","Amazon Virtual Private Cloud-VPC","Amazon Elastic Compute Cloud"]
        },
    Full_Stack={
        name:"Full Stack",
        syllabus:["Fundamentals of Web Programming","Application Development using React JS",
        "Application Development using Angular","Application development with Java",
        "Backend Development with Nodejs, Express js and Mongo db","Cloud & DevOps"]
        },
    Python={
        name:"Python",
        syllabus:["Basics of python","Python collections and Sequences",
        "working with python collections","oops in pyhton","Advanced python"]
    }
];

let output = document.getElementById("output");

courses.forEach(function(obj, index) {
    let header = document.createElement("h2");
    header.innerHTML = obj.name;
    output.appendChild(header);

    let syllabus = document.createElement("p");
    syllabus.innerHTML = "syllabus: " + obj.syllabus;
    output.appendChild(syllabus);
});