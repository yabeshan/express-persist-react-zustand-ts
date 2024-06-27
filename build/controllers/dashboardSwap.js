export const getSwapConfig = async (req, res) => {
    try {
        return res.status(200).json({
            "dictionaryReplica": {
                "bitcoin-legacy": { "id": "bitcoin", "symbol": "BTC", "network": "bitcoin", "type": "coin" }
            },
            "dictionaryTokens": {
                "btc": {
                    "app": { "id": "bitcoin", "symbol": "BTC", "network": "bitcoin", "type": "coin" },
                    "changenow": { "network": "btc", "name": "Bitcoin", "ticker": "btc", "legacyTicker": "btc" },
                    "other": {}
                },
                "b0": {
                    "app": { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    "changenow": { "network": "bsc", "name": "BNB Smart Chain", "ticker": "bnb", "legacyTicker": "bnbbsc" },
                    "other": {}
                },
                "b1": {
                    "app": { "id": "tether", "symbol": "USDT", "network": "binancecoin", "type": "BEP20", "address": "0x55d398326f99059ff775485246999027b3197955" },
                    "changenow": { "network": "bsc", "name": "Tether (Binance Smart Chain)", "ticker": "usdt", "legacyTicker": "usdtbsc", "tokenContract": "0x55d398326f99059fF775485246999027B3197955" },
                    "other": {}
                },
                "b2": {
                    "app": { "id": "bsceth", "symbol": "ETH", "network": "binancecoin", "type": "BEP20", "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8" },
                    "changenow": { "network": "bsc", "name": "Ethereum (Binance Smart Chain)", "ticker": "eth", "legacyTicker": "ethbsc", "tokenContract": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8" },
                    "other": {}
                },
                "b3": {
                    "app": { "id": "binance-usd", "symbol": "BSC-USD", "network": "binancecoin", "type": "BEP20", "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56" },
                    "changenow": { "network": "bsc", "name": "Binance USD", "ticker": "busd", "legacyTicker": "busdbsc", "tokenContract": "0xe9e7cea3dedca5984780bafc599bd69add087d56" },
                    "other": {}
                },
                "b4": {
                    "app": { "id": "usdc-bsc", "symbol": "USDC-BEP20", "network": "binancecoin", "type": "BEP20", "address": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" },
                    "changenow": { "network": "bsc", "name": "USD Coin", "ticker": "usdc", "legacyTicker": "usdcbsc", "tokenContract": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" },
                    "other": {}
                },
                "b5": {
                    "app": { "id": "dai", "symbol": "DAI", "network": "binancecoin", "type": "BEP20", "address": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3" },
                    "changenow": { "network": "bsc", "name": "Dai (Binance Smart Chain)", "ticker": "dai", "legacyTicker": "daibsc", "tokenContract": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3" },
                    "other": {}
                },
                "b6": {
                    "app": { "id": "matic", "symbol": "MATIC", "network": "binancecoin", "type": "BEP20", "address": "0xcc42724c6683b7e57334c4e856f4c9965ed682bd" },
                    "changenow": { "network": "bsc", "name": "Polygon (Binance Smart Chain)", "ticker": "matic", "legacyTicker": "maticbsc", "tokenContract": "0xcc42724c6683b7e57334c4e856f4c9965ed682bd" },
                    "other": {}
                },
                "b7": {
                    "app": { "id": "chainlink", "symbol": "LINK", "network": "binancecoin", "type": "BEP20", "address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd" },
                    "changenow": { "network": "bsc", "name": "Chainlink", "ticker": "link", "legacyTicker": "linkbsc", "tokenContract": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd" },
                    "other": {}
                },
                "b8": {
                    "app": { "id": "atom", "symbol": "ATOM", "network": "binancecoin", "type": "BEP20", "address": "0x0eb3a705fc54725037cc9e008bdede697f62f335" },
                    "changenow": { "network": "bsc", "name": "Cosmos (Binance Smart Chain)", "ticker": "atom", "legacyTicker": "atombsc", "tokenContract": "0x0eb3a705fc54725037cc9e008bdede697f62f335" },
                    "other": {}
                },
                "b9": {
                    "app": { "id": "uni", "symbol": "UNI", "network": "binancecoin", "type": "BEP20", "address": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1" },
                    "changenow": { "network": "bsc", "name": "Uniswap (Binance Smart Chain)", "ticker": "uni", "legacyTicker": "unibsc", "tokenContract": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1" },
                    "other": {}
                },
                "b10": {
                    "app": { "id": "twt", "symbol": "TWT", "network": "binancecoin", "type": "BEP20", "address": "0x4b0f1812e5df2a09796481ff14017e6005508003" },
                    "changenow": { "network": "bsc", "name": "TWT", "ticker": "twt", "legacyTicker": "twt", "tokenContract": "0x4b0f1812e5df2a09796481ff14017e6005508003" },
                    "other": {}
                },
                "e0": {
                    "app": { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    "changenow": { "network": "eth", "name": "Ethereum", "ticker": "eth", "legacyTicker": "eth" },
                    "other": {}
                },
                "e1": {
                    "app": { "id": "dai-erc20", "symbol": "DAI", "network": "ethereum", "type": "ERC20", "address": "0x6b175474e89094c44da98b954eedeac495271d0f" },
                    "changenow": { "network": "eth", "name": "Dai", "ticker": "dai", "legacyTicker": "dai", "tokenContract": "0x6b175474e89094c44da98b954eedeac495271d0f" },
                    "other": {}
                },
                "e2": {
                    "app": { "id": "usdt", "symbol": "USDT", "network": "ethereum", "type": "ERC20", "address": "0xdac17f958d2ee523a2206206994597c13d831ec7" },
                    "changenow": { "network": "eth", "name": "Tether (ERC20)", "ticker": "usdt", "legacyTicker": "usdterc20", "tokenContract": "0xdac17f958d2ee523a2206206994597c13d831ec7" },
                    "other": {}
                },
                "e3": {
                    "app": { "id": "usdc", "symbol": "USDC", "network": "ethereum", "type": "ERC20", "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
                    "changenow": { "network": "eth", "name": "USD Coin", "ticker": "usdc", "legacyTicker": "usdc", "tokenContract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
                    "other": {}
                },
                "e4": {
                    "app": { "id": "busd", "symbol": "BUSD", "network": "ethereum", "type": "ERC20", "address": "0x4fabb145d64652a948d72533023f6e7a623c7c53" },
                    "changenow": { "network": "eth", "name": "Binance USD (ERC20)", "ticker": "busd", "legacyTicker": "busd", "tokenContract": "0x4fabb145d64652a948d72533023f6e7a623c7c53" },
                    "other": {}
                },
                "e5": {
                    "app": { "id": "wbtc", "symbol": "WBTC", "network": "ethereum", "type": "ERC20", "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599" },
                    "changenow": { "network": "eth", "name": "Wrapped Bitcoin", "ticker": "wbtc", "legacyTicker": "wbtc", "tokenContract": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599" },
                    "other": {}
                },
                "e6": {
                    "app": { "id": "steth", "symbol": "stETH", "network": "ethereum", "type": "ERC20", "address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84" },
                    "changenow": { "network": "eth", "name": "stETH", "ticker": "steth", "legacyTicker": "steth", "tokenContract": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84" },
                    "other": {}
                },
                "e7": {
                    "app": { "id": "shiba", "symbol": "SHIB", "network": "ethereum", "type": "ERC20", "address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce" },
                    "changenow": { "network": "eth", "name": "SHIBA INU", "ticker": "shib", "legacyTicker": "shib", "tokenContract": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce" },
                    "other": {}
                },
                "e8": {
                    "app": { "id": "cro", "symbol": "CRO", "network": "ethereum", "type": "ERC20", "address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b" },
                    "changenow": { "network": "eth", "name": "Cronos (ERC20)", "ticker": "cro", "legacyTicker": "cro", "tokenContract": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b" },
                    "other": {}
                },
                "e9": {
                    "app": { "id": "leo-token", "symbol": "LEO", "network": "ethereum", "type": "ERC20", "address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3" },
                    "changenow": { "network": "eth", "name": "UNUS SED LEO", "ticker": "leo", "legacyTicker": "leo", "tokenContract": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3" },
                    "other": {}
                },
                "e10": {
                    "app": { "id": "matic-erc20", "symbol": "MATIC", "network": "ethereum", "type": "ERC20", "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0" },
                    "changenow": { "network": "eth", "name": "Polygon (Matic)", "ticker": "matic", "legacyTicker": "matic", "tokenContract": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0" },
                    "other": {}
                },
                "t0": {
                    "app": { "id": "tron", "symbol": "TRX", "network": "tron", "type": "coin" },
                    "changenow": { "network": "trx", "name": "TRON", "ticker": "trx", "legacyTicker": "trx" },
                    "other": {}
                },
                "t1": {
                    "app": { "id": "tether-trc20", "symbol": "USDT-TRC20", "network": "tron", "type": "TRC20", "address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" },
                    "changenow": { "network": "trx", "name": "Tether (TRC20)", "ticker": "usdt", "legacyTicker": "usdttrc20", "tokenContract": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" },
                    "other": {}
                },
                "t2": {
                    "app": { "id": "sun-token", "symbol": "SUN", "network": "tron", "type": "TRC20", "address": "TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S" },
                    "changenow": { "network": "trx", "name": "Sun", "ticker": "sun", "legacyTicker": "sun", "tokenContract": "TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S" },
                    "other": {}
                }
            },
            "availablePairs": [[
                    { "id": "bitcoin", "symbol": "BTC", "network": "bitcoin", "type": "coin" },
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" }
                ], [
                    { "id": "bitcoin", "symbol": "BTC", "network": "bitcoin", "type": "coin" },
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" }
                ], [
                    { "id": "bitcoin", "symbol": "BTC", "network": "bitcoin", "type": "coin" },
                    { "id": "tron", "symbol": "TRX", "network": "tron", "type": "coin" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "tether", "symbol": "USDT", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "bsceth", "symbol": "ETH", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "binance-usd", "symbol": "BSC-USD", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "usdc-bsc", "symbol": "USDC-BEP20", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "dai", "symbol": "DAI", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "matic", "symbol": "MATIC", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "chainlink", "symbol": "LINK", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "atom", "symbol": "ATOM", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "uni", "symbol": "UNI", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "twt", "symbol": "TWT", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "dai-erc20", "symbol": "DAI", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "usdt", "symbol": "USDT", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "usdc", "symbol": "USDC", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "busd", "symbol": "BUSD", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "wbtc", "symbol": "WBTC", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "steth", "symbol": "stETH", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "shiba", "symbol": "SHIB", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "cro", "symbol": "CRO", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "leo-token", "symbol": "LEO", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "matic-erc20", "symbol": "MATIC", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "tron", "symbol": "TRX", "network": "tron", "type": "coin" },
                    { "id": "tether-trc20", "symbol": "USDT-TRC20", "network": "tron", "type": "TRC20" }
                ], [
                    { "id": "tron", "symbol": "TRX", "network": "tron", "type": "coin" },
                    { "id": "sun-token", "symbol": "SUN", "network": "tron", "type": "TRC20" }
                ]]
        });
    }
    catch (err) {
        res.status(500).json({
            message: "controllers-api-getConfig error message :: " + err.message
        });
    }
};
//# sourceMappingURL=dashboardSwap.js.map