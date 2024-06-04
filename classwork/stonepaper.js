const { log } = require("console");
const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.std
});

console.log("Stone Paper new");
// var choice;

    cc=Math.random()>=0.5;
    console.log("1-Rock\n2-Paper\n3-Scissors\n4-Snake\n5-Water");
    console.log("Enter Choice :");
    rl.question("Enter Your Choice :",function(choice){
        Game(choice,cc);
        rl.close()
        // console.log(cc);

    });
    function Game(choice,cc)
    {
        do
        {
            
                if((choice==1)&&(cc==true))
                    {
                    console.log("Rock crushed sissors");
                    break;
                    
                    }
                    else if(cc==false)
                    {
                    console.log("Paper Covered rock");
                    break;
                    }
                    else if((choice==2)&&(cc==true))
                    {
                        console.log("Paper cuts rock");
                        break
                    }
                    else if(cc==false)
                    {
                        console.log("Sissor cuts paper");
                        break;
                    }
                    else if((choice==3)&&(cc==true))
                    {
                        console.log("Sissor cuts Sanke");
                        break;

                    }
                    else if(cc==false)
                    {
                        console.log("Water rusts snake");
                        break;
                    }
                    else if((choice==4)&&(cc==true))
                    {
                        console.log("Snake drinks water");
                        break;
                    }
                    else if(cc==true)
                    {
                        console.log("Rock crushes snake");
                        break;
                    }
                    else if((choice==5)&&(cc==true))
                    {
                        console.log("Water downs paper");
                        break;
                    }
                    else if(cc==false)
                    {
                        console.log("Snake drinks water");
                        break;
                    }
                

                       

         
                 
        }while(choice<=5);

    }
    // Just finished an amazing workshop at Kerala Blockchain Academy and earned my participation certificate!

