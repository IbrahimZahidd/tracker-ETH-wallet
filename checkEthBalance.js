const fetch = require('node-fetch');

const checkEthBalance = async (address) => {
    const apiKey = 'YourEtherscanAPIKey'; // Replace with your Etherscan API key
    const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === '1') {
            const balance = data.result / Math.pow(10, 18); // Convert Wei to ETH
            console.log(`ETH Balance for ${address}: ${balance} ETH`);
        } else {
            console.log(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
};

// Example usage: checkEthBalance('0xYourWalletAddress'); // Replace with a wallet address
