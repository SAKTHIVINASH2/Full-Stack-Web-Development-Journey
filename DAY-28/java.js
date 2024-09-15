function sum(a)
{
    return function(b)
    { 
        return function(c)
        {
            return a+b+c;
        };
    };
};
var output=sum(10)(20)(30);
console.log(output);