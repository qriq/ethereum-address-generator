import { randomBytes } from 'crypto';
import { keccak256 } from 'ethereumjs-util';

// Generate a random private key
const privateKey = randomBytes(32);

// Get the public key from the private key
const publicKey = keccak256(privateKey);

// Get the Ethereum address from the public key
const address = `0x${publicKey.slice(-20).toString('hex')}`;

console.log(`Ethereum address: ${address}`);
