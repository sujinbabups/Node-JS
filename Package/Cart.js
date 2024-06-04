const { forEach } = require("lodash");

let Cr=new Map()
Cr.set("book",10);
Cr.set("pen",15);
Cr.set("pencil",4);

let price={"book":40,"pen":10,"pencil":5}
let total=0;
dis=0;

console.log("Item\t\tquantity\tprice\t\ttotal")
console.log("------\t\t-------\t\t--------\t------")
Cr.forEach((v,k)=>
{
    // Cr.set("pen",8)
    // console.log(v,k);
    // console.log(Cr.has('pen'));
    // Cr.delete("pen")
    p=price[k];
    cost=p*v;
    total=total+cost;
    
    console.log(k+"\t\t"+v+"\t\t"+p+"\t\t"+cost)
    // console.log(cost)
    // if(Cr.has("pen")==true)
    //     {
    //         Cr.set("pen",5)
    //     }

});
if(total>500)
    {
        dis=total*5/100

        total=total-dis
    }

console.log("\nDiscount  ="+dis)
console.log("\nTotal ="+total)
