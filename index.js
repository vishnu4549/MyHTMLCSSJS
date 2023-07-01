//var products=[];
if(localStorage.getItem('products')==null){
    localStorage.setItem('products',JSON.stringify([]));
}
displayproducts();
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
    var products=JSON.parse(localStorage.getItem("products"));
    products.push(product);
    localStorage.setItem("products",JSON.stringify(products));
    //console.log(products);
    displayproducts();
    myfunc(products);
}
function myfunc(pp){
    console.log(pp);
}
function getvaluebyId(id){
    var value=document.getElementById(id).value;
    return value;
}
function displayproducts(){
   var products=JSON.parse(localStorage.getItem("products"));
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

function Idgenerator(){
    if(localStorage.getItem("uniqueid") ==null){
        localStorage.setItem("uniqueid",0);
    }
    var startingid=parseInt(localStorage.getItem("uniqueid"));
    startingid++;
    localStorage.setItem("uniqueid",startingid);
    return startingid;

}
function Update(pid,indexx){
    var id=pid;
    var products=JSON.parse(localStorage.getItem("products"));
    for(var index=0;index<products.length;index++){
        var updat=products[index];
        if (updat.ProductID == pid)
        {
            document.getElementById("productid").value=updat.Id;
            document.getElementById("productname").value=updat.name;
            document.getElementById("price").value=updat.price;
            document.getElementById("description").value=updat.desc;
            document.getElementById("url").value=vishnu.url;
            localStorage.setItem('products', JSON.stringify(products));
            break;
        }
    }
    displayproducts2(index);
}
function Delete(pid){
    console.log(pid);
    var products=JSON.parse(localStorage.getItem("products"));
    for(var index=0;index<products.length;index++){
        var del=products[index];
        if (del.ProductID == pid)
        {
            //JSON.parse(localStorage.removeItem("products[index]"));
            products.splice(index,1);
            localStorage.setItem('products', JSON.stringify(products));
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
function clearLocalStorage() {
    localStorage.clear();
    location.reload();
  }
  