import * as  ed  from "@noble/ed25519"

//first we will generate our private key 
//then we define the message 
//we convert the message into the unintarray
//then we sign the message as using the private key 
//then we get the public key
//then from the public key we will verify the message

async function main(){
   const privatekey=ed.utils.randomPrivateKey();

   console.log(privatekey);
   const message=new TextEncoder().encode('hello');

   //generate the public
   const publickey=await ed.getPublicKeyAsync(privatekey);
    console.log(publickey);
   const signature=await ed.signAsync(message,privatekey);

   //we will verify the signature with public key 

   const verify=await ed.verifyAsync(signature,message,publickey);

   console.log('true',verify);

}

main();