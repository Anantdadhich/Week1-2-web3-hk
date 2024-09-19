const crypto = require('crypto');

const input = "adtech123";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)

//What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
 //You will have to brute force until you find a value that starts with 00000

 const crypto=require("crypto");
 
 function findhashwithprefix(prefix){
    let input=0;

    while(true){
        //if someone say it start with adtech
        //const inptstriin="adtceh"+ input.tostring()

        //const inputString=`adtech=>random|100rs  ` toString();
        const inputstring=input.toString();

        let hash=crypto.createHash('sha256').update(inputstring).digest("hex");
        if(hash.startsWith(prefix)){
            return {input:inputstring,hash:hash};
        }
         input++;
    }
   
 }

 //print the input string 
 const result=findhashwithprefix('00000');
 console.log(`input:${result.input}`);
 console.log(`input: ${result.hash}`)