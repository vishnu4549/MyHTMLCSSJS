var productid;
var productname;
var price;
function getdata() {
     productid=document.getElementById("productid").value;
     productname=document.getElementById("productname").value;
     price=document.getElementById("price").value;
     console.log(productid);
     console.log(productname);
     console.log(price);
     //var display=document.getElementById("display");
     //display.innerHTML=productid;
     //display.innerHTML=display.innerHTML+productname;
     //display.innerHTML=display.innerHTML+price;
     var array=[];
     index=0;
      while(index < 3)
      {
        if (index==0){
            array[0]=productid;
        }
        if (index==1){
            array[1]=productname;
        }
        if (index==2){
            array[2]=price;
        }
        index++;
      }
      console.log(array[index]);
}
     