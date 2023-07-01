var connections =[
    {
     Name:"Sai Shankar",
     Location:"Hyderabad",
     Designation:"Student at JBIET"
    },
    {
     Name:"Madhu Palakaveeti ",
     Location:"Hyderabad",
     Designation:"Student at JBIET"
    },
    {
     Name:"Bhargav Reddy Yannam",
     Location:"Hyderabad",
     Designation:"Student at JBIET"
    },
    {
     Name:"Harshitha Reddy",
     Location:"Shadnagar",
     Designation:"Student at JBIET"
    },
    {
     Name:"Sai tharun dusa",
     Location:"Karimnagar",
     Designation:"Student at JBIET"
    },
    {
        Name:"Gayathri Priya",
        Location:"United States",
        Designation:"Graduate student at UMBC, MPS Data Science"
    }
];
var size=connections.length;
console.log(size);
var outside=document.getElementById("from");
var index = 0;
var news=" ";
while(index < size){
    var temp=connections[index];
    news=news+"<li id='vishnu'>"+temp.Name+"</li>"+"<br>"+"<li id='marg'>"+temp.Location+"</li>"+"<br>"+"<li id='marg2'>"+temp.Designation+"</li>"+"<br>";
    outside.innerHTML=news;
    index++;
}

console.log(news);