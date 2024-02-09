// get their public key
var userPubKey = prompt("Please enter or paste your public key: ");

// create a variable for the public key
var newVarPubKey = userPubKey;

// display the public key
console.log("Your public key is :", newVarPubKey);

const fromAirDropSignature = await connection.requestAirdrop(
    new PublicKey(newVarPubKey),
    2 * LAMPORTS_PER_SOL
);
