var keys=["Vishnu","shravan","Ravi","Ashwini"];
var arr=["20-08-2001","17-09-1995","19-06-1991","27-06-1991"];
for(var index=0;index<5;index++){
   console.log(localStorage.getItem("keys[index]",JSON.stringify(arr[index])));
}