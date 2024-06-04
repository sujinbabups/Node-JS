function Operation()
{
    let obj;
    return obj1;     //returning an invalid object
}
try{
    let res=Operation();
    console.log(res);

}catch(error)
{
    console.log("An error occured "+error.message);

}
finally{
    console.log("This always executes")
}
