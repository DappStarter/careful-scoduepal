require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth snow hospital good private foster second'; 
let testAccounts = [
"0x171164b9517193ef8501f1c9cb2f6a66a70b880bf0e965608061d933f63fa92d",
"0xdfef7d28f4685511ff56abc07573cef0fb3e93a7dc94a007fbd0ee470d833799",
"0xfb3ba8ae382bf747421d9432d875bca8f930ec63585ffb459728dbd4d8fca056",
"0x64293b093fa6482e80933b820f46106d517ccd8ccc909662ec4aca9dd617f9fd",
"0x94b9f8efad64cb8ad1ab36a08f9e21b39809faa1ccb0c2ea5d599f8aa7588c29",
"0x23118fd4e59d0361aaa4fa59752fdee849c6de1c9060b380beb3457c096e7b1a",
"0x265eb2f2c338a025b6b7c3243241ad87a8c0632bb1b0b389ad961607bc98dc82",
"0x3aeaa38caa54b2597b674fc9986cbef823a4bd93c0030c3fcb88ba21535b3612",
"0x239d8fc6c86531e8e2230270d74fbf54f2a45f695b15c33487641cc29d012004",
"0xed5fcd990682ca76cce31c30e752c52c6747c115d7eae96dcb2e22f3a9888454"
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
