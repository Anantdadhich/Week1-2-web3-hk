import {Keypair} from "@solana/web3.js"
import nacl from "tweetnacl";
//first we will generate the keypair 
// Keypair is a private key with a matching public key, used to sign transactions.
const keypair=Keypair.generate();

const publicKey=keypair.publicKey.toString();
const privatekey=keypair.secretKey;


console.log("public",publicKey);
console.log("privatekey",privatekey);
//we assign message 
const message=new TextEncoder().encode('anant');

//now we define the signature with the message of public key

const signature=nacl.sign.detached(message,privatekey);

const result=nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes()
)

console.log(result);


