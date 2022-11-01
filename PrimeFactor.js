let arr = new Array();
let primeFactors=function(n)
{
    for(i=2;i<n;i++)
    {
        while(n%i==0)
        {
            //console.log(i+" ");
            arr.push(i);
            n=n/i;
        }
    }
    if(n>2)
    {
        arr.push(n);
    }
    console.log(arr);
}

primeFactors(22);