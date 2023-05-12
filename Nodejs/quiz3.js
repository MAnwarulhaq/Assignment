function sum(arr)
{
    const str=arr.sort((a,b) =>b-a);
    return str[0]+str[1];
}
const input=[1,2,3,4];
const result=sum(input);
console.log(result);