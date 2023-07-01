var employee={
    eid:101,
    empname:"vishnu",
    designation:"Webdeveloper",
    getdetails: function (salary,hike){
        return this.eid + "\t" + this.empname + "\t" + this.designation +"\t" 
                        + salary +"\t" + hike ;
    }
}
var employee2={
    eid:102,
    empname:"Srikanth",
    designation:"Webdeveloper at TCS",
    }

var arr=[350000,600000]
console.log(employee.getdetails.call(employee,arr));
console.log(employee.getdetails.apply(employee2,arr));