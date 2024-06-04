

let map=new Map();
map.set("name","sujin");
map.set("age",23);
map.set("city","wyd");
try{

map.forEach((val,k)=>{
    console.log(k+'='+val)
});
}
catch(error)
{
    console.log("not declared");
}


