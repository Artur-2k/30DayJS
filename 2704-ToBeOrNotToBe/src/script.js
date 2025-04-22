var expect = function(val1)
{
    return {
        toBe: (val2)=>
        {
            if (val1 === val2)
                return true;
            throw new Error("Not Equal");
        },
        notToBe: (val2) =>
        {
            if (val1 !== val2)
                return true;
            throw new Error ("Equal");
        }
    };
}

console.log("Test to be:")
try{

    var test1 = expect(5).toBe(5);
    console.log("test1 " + test1);
    var test2 = expect(5).toBe('5'); // error
}
catch (err)
{
    console.log({error: err.message});
}

console.log("Test not to be:")
try{

    var test1 = expect('Hello world').notToBe(42);
    console.log("test1 " + test1);
    var test2 = expect(5).notToBe(5); // error
}
catch (err)
{
    console.log({error: err.message});
}
