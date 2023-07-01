var mobiles=[
        Samsung={
            name:"Samsung Galaxy S23 Plus 5G (Cream, 8GB, 256GB Storage)",
            price:"94999",
            specifications : {
                Networkservice :"unlocked for all carriers",
                OS: "Android 13.0",
                CellularTechnology:"5G"
            }
        },
        Redmi={
            name:"Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
            price:"6499",
            specifications : {
                Networkservice :"LTE",
                OS: "MIUI 12",
                CellularTechnology:"5G"
            }
        },
        Oneplus={
            name:"OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
            price:"18999",
            specifications : {
                Networkservice :"5G, 4G LTE",
                OS: "OxygenOS",
                CellularTechnology:"5G"
            }
        }
];
let mobileshop = document.getElementById("mobile");
console.log(mobileshop);
mobileshop.innerHTML ="<ul><li>" + mobiles[0].name + "&nbsp&nbsp" + mobiles[0].price +"&nbsp&nbsp"+ mobiles[0].specifications.Networkservice;
mobileshop.innerHTML = mobileshop.innerHTML + "</li>";
mobileshop.innerHTML = mobileshop.innerHTML + "</ul>";

