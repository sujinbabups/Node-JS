let str=("JavaScript is a high-level programming language is that follows the ECMAScript standard");
// console.log(str)

txt="is"
strarray=str.split(" ");
l=strarray.length;
var c=0;
for(i=0;i<l;i++)
    {
        if(strarray[i]==txt)
            {
                c++;
            }

    }
    console.log(txt+` is ${c} times in the text`);

