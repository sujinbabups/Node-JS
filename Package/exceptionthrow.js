function AgeCheck(age)
{
    if(age<=18)
        {
           throw new Error(" Ineligible to vote");
        }
        else{
            console.log("Eligible to vote");
        }
}

try{
    AgeCheck(14);
}
catch(error)
{
    console.log("Error"+error.message);

}
finally{
    console.log("Age checking");
}