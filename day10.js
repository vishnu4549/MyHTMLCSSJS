var products=[];
function getdata(){
    event.preventDefault();
    var ID=getvaluebyId("productid");
    var name=getvaluebyId("productname");
    var price=getvaluebyId("price");
    var description=getvaluebyId("description");
    var url=getvaluebyId("url");
    console.log(ID);

    var product={
        ProductID:Idgenerator(),
        Id:ID,
        name: name,
        price:price,
        desc:description,
        url:url
    }
    products.push(product);
    console.log(products);
    displayproducts();
}
function getvaluebyId(id){
    var value=document.getElementById(id).value;
    return value;
}
function displayproducts(){
   var index=0;
   var onscreen="";
   for(index=0;index<products.length;index++){
         var vishnu=products[index];
         onscreen=onscreen +"ID: " + vishnu.Id +"<br>"
                           +"Name: " + vishnu.name +"<br>"
                           +"Price: " + vishnu.price +"<br>"
                           +"Description: "+ vishnu.desc +"<br>"
                           +"<img  id='img' src=" + vishnu.url + ">"+"<br>"
                           +"<button onclick='Update(" + vishnu.ProductID +  ")'>Update</button>"+"&nbsp&nbsp&nbsp&nbsp"
                           +"<button onclick='Delete( " + vishnu.ProductID + ")'>Delete</button>"+"<br>"+"<hr>";
   }
   console.log(vishnu.ProductID);
   var display=document.getElementById("display");
   display.innerHTML=onscreen;
}
var startingid=0;
function Idgenerator(){
    startingid++;
    return startingid;

}
function Update(pid,indexx){
    var id=pid;
    for(var index=0;index<products.length;index++){
        var updat=products[index];
        if (updat.ProductID == pid)
        {
            document.getElementById("productid").value=updat.Id;
            document.getElementById("productname").value=updat.name;
            document.getElementById("price").value=updat.price;
            document.getElementById("description").value=updat.desc;
            document.getElementById("url").value=vishnu.url;
            break;
        }
    }
    displayproducts2(index);
}
function save(){

}
function Delete(pid){
    console.log(pid);
    for(var index=0;index<products.length;index++){
        var del=products[index];
        if (del.ProductID == pid)
        {
            products.splice(index,1);
            break;
        }
    }
    displayproducts();
}
// It was about enabling the button
function checkif(){
    var productid=document.getElementById("productid").value;
    var productname=document.getElementById("productname").value;
    var price=document.getElementById("price").value;
    var description=document.getElementById("description").value;
    var url=document.getElementById("url").value;
    var button=document.getElementById("Sumbit");
    console.log(productid);
    console.log(productname);
    console.log(price);
    console.log(description);
    console.log(url);

    if( productid !=="" &&  productname !=="" && price !=="" && description !=="" && url !==""){
        button.disabled=false;
    }
    else{
        button.disabled=true;
    }
}
// To display the updated products
function  displayproducts2(gotindex){
    index=gotindex;
    products[index]=Update();
    displayproducts();
}
//To clear total all data 
function clear(){
    products=[];
}