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
    return value
}
function displayproducts(){
   var index=0;
   var onscreen="";
   for(index=0;index<products.length;index++){
         var vishnu=products[index];
         //onscreen=onscreen + vishnu.Id +"<br>"+ vishnu.name +"<br>"+ vishnu.price +"<br>"+vishnu.desc +"<br>"+"<img  id='img' src=" + vishnu.url + ">"+"<br>";
         document.write("ID: " + vishnu.Id + "<br>");
         document.write("Name: " + vishnu.name + "<br>");
         document.write("Price: " + vishnu.price + "<br>");
         document.write("Description: " + vishnu.desc + "<br>"); 
         document.write("Name: " + "<img  id='img' src=" + vishnu.url + ">" + "<br>");
        }
   
}