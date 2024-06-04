//implicit type conv
console.log("10"+5);
console.log("10"-5);
console.log("10"*5);
console.log("10"/5);
console.log(10+false);

//Explicit type conv
console.log("\n\n")

a=Number("50");
console.log(a);

b=Number("Hello");
console.log(b);

c=String(1234);
console.log(typeof(c))

d=String(true)
console.log(typeof d)

e=Boolean("abc");
console.log(typeof e)
console.log(e)

f=Boolean("")
console.log(f)

n1=12.122;
n2=16;
console.log(parseInt(n1))
console.log(parseFloat(n1))