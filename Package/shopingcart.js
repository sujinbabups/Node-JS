let Cart =new Map()

Cart.set("Apple",5);
Cart.set("Banana",2);
Cart.set("Milk",1);
const price={"Apple":0.80,"Banana":0.50,"Milk":2.50};
let unitcost=0
let total=0;

console.log("Item\tQuantity\tPrice\tTotal")
Cart.forEach((itm1,c)=>{
    pr=price[c];
    unitcost=itm1*pr;
    total=total+unitcost
    // console.log(unitcost);
    console.log(`${c}\t${itm1}\t\t${price[c]}\t${unitcost}`)
    

});

console.log("\n\nTotal Amount ="+total);

