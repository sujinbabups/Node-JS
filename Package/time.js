let time=1350;
if(time>0&&time<=600)
    {
        console.log("Early Morning");
    }
    else if(time>600&&time<=780)
        {
            console.log("Morning");
        }
    else if(time>780&&time<=960)
        {
            console.log("Afternoon");
        }
    else if(time>=1321&&time<=1439)
        {
            console.log("Night");
        }
    else
    {
        console.log("Invalid time");
    }