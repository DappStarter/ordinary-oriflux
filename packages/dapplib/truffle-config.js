require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember unusual harvest cricket bubble van'; 
let testAccounts = [
"0x06d41b290860cba3b0c9daf06b82306d7b28c53be444b7e2859e5cad561e23a2",
"0xe84c993ffa67f95e0b290572216fe2dcef837acb2cdd042d2c7a24d4371a58f4",
"0xfc0383bccea035dfc5510f1dedd504d3f8e0fd9039da866238d7e31d4ffb2bb5",
"0x3ba1f3fe28ba87498b93e24a82a3fdb23d4ea538f988b2f4578390ba480c971d",
"0x58eab8f4ddec2d8cc4f7abdff4abdecc2d401ffd3c12f236d90055c4bc8945c0",
"0xd732bd037b1ef70fe085a775cdca092acf131517b14f24d78bd4ef07d2b16caa",
"0xe842ac665c90c6aa35ba0dd97cc0e7328e3e9df4df9cca3987fadcf299786915",
"0xe055a74021fea532affc615edf9e633118f24830035b3b5ea09bc0e41da02097",
"0xbd4e16bbe73fd226a065038e5d84438a6d28303b5ce7c294e5e7eb5ee3313e9c",
"0xd7d0bb0e2fb38c8c660ec20d89d9dfd4a93599fd91aff347820738c5a7400ed0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
