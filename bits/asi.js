//bytes to ascii

//each byte iof the aaray of the number of the byte represent the  ascii  value to consvert the value to a string 
function bytestoarray(bytesarray){
    return  bytesarray.map(byte=>String.fromCharCode(byte)).join('')  //charcode convett the unicorn value where the byte convert into ascii 
}
// we use join to convert the array into a string 
const bytesarray=[72, 101, 108, 108, 111];
const asciistring=bytestoarray(bytesarray);
console.log(asciistring);


//ascii to bytes 

function asciibytes(asciistring){
    const bytesarray=[];

    for(let i=0;i<asciistring.length;i++){
        bytesarray.push(asciistring.charCodeAt(i))
    }
    return bytesarray;
}

const ascii="hello";
const bytesaary=asciibytes(ascii);
console.log(bytesaary);



// we convert there from unit8arrat to ascii

function unittoaaray(unitarr){
    return new TextDecoder().decode(unitarr);
}

const bytes=new Uint8Array([71,65,78,68]);
const conversion=unittoaaray(bytes);
console.log(conversion);


