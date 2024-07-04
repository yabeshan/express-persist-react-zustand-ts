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
                "b11": {
                    "app": { "id": "axs", "symbol": "AXS", "network": "binancecoin", "type": "BEP20", "address": "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0" },
                    "changenow": { "network": "bsc", "name": "Axie Infinity (Binance Smart Chain)", "ticker": "axs", "legacyTicker": "axsbsc", "tokenContract": "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0" },
                    "other": {}
                },
                "b12": {
                    "app": { "id": "aave", "symbol": "AAVE", "network": "binancecoin", "type": "BEP20", "address": "0xfb6115445bff7b52feb98650c87f44907e58f802" },
                    "changenow": { "network": "bsc", "name": "Aave (Binance Smart Chain)", "ticker": "aave", "legacyTicker": "aavebsc", "tokenContract": "0xfb6115445bff7b52feb98650c87f44907e58f802" },
                    "other": {}
                },
                "b13": {
                    "app": { "id": "dfi", "symbol": "DFI", "network": "binancecoin", "type": "BEP20", "address": "0x361c60b7c2828fcab80988d00d1d542c83387b50" },
                    "changenow": { "network": "bsc", "name": "DeFiChain (Binance Smart Chain)", "ticker": "dfi", "legacyTicker": "dfibsc", "tokenContract": "0x361c60b7c2828fcab80988d00d1d542c83387b50" },
                    "other": {}
                },
                "b14": {
                    "app": { "id": "ftm", "symbol": "FTM", "network": "binancecoin", "type": "BEP20", "address": "0xad29abb318791d579433d831ed122afeaf29dcfe" },
                    "changenow": { "network": "bsc", "name": "Fantom (Binance Smart Chain)", "ticker": "ftm", "legacyTicker": "ftmbsc", "tokenContract": "0xad29abb318791d579433d831ed122afeaf29dcfe" },
                    "other": {}
                },
                "b15": {
                    "app": { "id": "zil", "symbol": "ZIL", "network": "binancecoin", "type": "BEP20", "address": "0xb86abcb37c3a4b64f74f59301aff131a1becc787" },
                    "changenow": { "network": "bsc", "name": "Zilliqa (Binance Smart Chain)", "ticker": "zil", "legacyTicker": "zilbsc", "tokenContract": "0xb86abcb37c3a4b64f74f59301aff131a1becc787" },
                    "other": {}
                },
                "b16": {
                    "app": { "id": "pancakeswap-token", "symbol": "CAKE", "network": "binancecoin", "type": "BEP20", "address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" },
                    "changenow": { "network": "bsc", "name": "PancakeSwap (BSC)", "ticker": "cake", "legacyTicker": "cake", "tokenContract": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" },
                    "other": {}
                },
                "b17": {
                    "app": { "id": "usdd", "symbol": "USDD", "network": "binancecoin", "type": "BEP20", "address": "0xd17479997f34dd9156deef8f95a52d81d265be9c" },
                    "changenow": { "network": "bsc", "name": "USDD (Binance Smart Chain)", "ticker": "usdd", "legacyTicker": "usddbsc", "tokenContract": "0xd17479997f34dd9156deef8f95a52d81d265be9c" },
                    "other": {}
                },
                "b18": {
                    "app": { "id": "gmt", "symbol": "GMT", "network": "binancecoin", "type": "BEP20", "address": "0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1" },
                    "changenow": { "network": "bsc", "name": "stepn", "ticker": "gmt", "legacyTicker": "gmt", "tokenContract": "0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1" },
                    "other": {}
                },
                "b19": {
                    "app": { "id": "comp", "symbol": "COMP", "network": "binancecoin", "type": "BEP20", "address": "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8" },
                    "changenow": { "network": "bsc", "name": "Compound (Binance Smart Chain)", "ticker": "comp", "legacyTicker": "compbsc", "tokenContract": "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8" },
                    "other": {}
                },
                "b20": {
                    "app": { "id": "1inch", "symbol": "1INCH", "network": "binancecoin", "type": "BEP20", "address": "0x111111111117dc0aa78b770fa6a738034120c302" },
                    "changenow": { "network": "bsc", "name": "1inch Network", "ticker": "1inch", "legacyTicker": "1inchbsc", "tokenContract": "0x111111111117dc0aa78b770fa6a738034120c302" },
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
                "e11": {
                    "app": { "id": "ftt", "symbol": "FTT", "network": "ethereum", "type": "ERC20", "address": "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9" },
                    "changenow": { "network": "eth", "name": "FTX Token", "ticker": "ftt", "legacyTicker": "ftt", "tokenContract": "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9" },
                    "other": {}
                },
                "e12": {
                    "app": { "id": "chainlink-erc20", "symbol": "LINK", "network": "ethereum", "type": "ERC20", "address": "0x514910771af9ca656af840dff83e8264ecf986ca" },
                    "changenow": { "network": "eth", "name": "Chainlink", "ticker": "link", "legacyTicker": "link", "tokenContract": "0x514910771af9ca656af840dff83e8264ecf986ca" },
                    "other": {}
                },
                "e13": {
                    "app": { "id": "xcn", "symbol": "XCN", "network": "ethereum", "type": "ERC20", "address": "0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18" },
                    "changenow": { "network": "eth", "name": "Onyxcoin (ERC20)", "ticker": "xcn", "legacyTicker": "xcnerc20", "tokenContract": "0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18" },
                    "other": {}
                },
                "e14": {
                    "app": { "id": "okb", "symbol": "OKB", "network": "ethereum", "type": "ERC20", "address": "0x75231f58b43240c9718dd58b4967c5114342a86c" },
                    "changenow": { "network": "eth", "name": "OKB", "ticker": "okb", "legacyTicker": "okb", "tokenContract": "0x75231f58b43240c9718dd58b4967c5114342a86c" },
                    "other": {}
                },
                "e15": {
                    "app": { "id": "ape", "symbol": "APE", "network": "ethereum", "type": "ERC20", "address": "0x4d224452801aced8b2f0aebe155379bb5d594381" },
                    "changenow": { "network": "eth", "name": "ApeCoin", "ticker": "ape", "legacyTicker": "ape", "tokenContract": "0x4d224452801aced8b2f0aebe155379bb5d594381" },
                    "other": {}
                },
                "e16": {
                    "app": { "id": "sand", "symbol": "SAND", "network": "ethereum", "type": "ERC20", "address": "0x3845badade8e6dff049820680d1f14bd3903a5d0" },
                    "changenow": { "network": "eth", "name": "The Sandbox", "ticker": "sand", "legacyTicker": "sand", "tokenContract": "0x3845badade8e6dff049820680d1f14bd3903a5d0" },
                    "other": {}
                },
                "e17": {
                    "app": { "id": "uni-erc20", "symbol": "UNI", "network": "ethereum", "type": "ERC20", "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984" },
                    "changenow": { "network": "eth", "name": "Uniswap", "ticker": "uni", "legacyTicker": "uni", "tokenContract": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984" },
                    "other": {}
                },
                "e18": {
                    "app": { "id": "axs-erc20", "symbol": "AXS", "network": "ethereum", "type": "ERC20", "address": "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b" },
                    "changenow": { "network": "eth", "name": "Axie Infinity", "ticker": "axs", "legacyTicker": "axs", "tokenContract": "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b" },
                    "other": {}
                },
                "e19": {
                    "app": { "id": "mana", "symbol": "MANA", "network": "ethereum", "type": "ERC20", "address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942" },
                    "changenow": { "network": "eth", "name": "Decentraland", "ticker": "mana", "legacyTicker": "mana", "tokenContract": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942" },
                    "other": {}
                },
                "e20": {
                    "app": { "id": "aave-erc20", "symbol": "AAVE", "network": "ethereum", "type": "ERC20", "address": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9" },
                    "changenow": { "network": "eth", "name": "Aave", "ticker": "aave", "legacyTicker": "aave", "tokenContract": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9" },
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
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "axs", "symbol": "AXS", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "aave", "symbol": "AAVE", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "dfi", "symbol": "DFI", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "ftm", "symbol": "FTM", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "zil", "symbol": "ZIL", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "pancakeswap-token", "symbol": "CAKE", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "usdd", "symbol": "USDD", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "gmt", "symbol": "GMT", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "comp", "symbol": "COMP", "network": "binancecoin", "type": "BEP20" }
                ], [
                    { "id": "binancecoin", "symbol": "BNB", "network": "binancecoin", "type": "coin" },
                    { "id": "1inch", "symbol": "1INCH", "network": "binancecoin", "type": "BEP20" }
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
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "ftt", "symbol": "FTT", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "chainlink-erc20", "symbol": "LINK", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "xcn", "symbol": "XCN", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "okb", "symbol": "OKB", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "ape", "symbol": "APE", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "sand", "symbol": "SAND", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "uni-erc20", "symbol": "UNI", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "axs-erc20", "symbol": "AXS", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "mana", "symbol": "MANA", "network": "ethereum", "type": "ERC20" }
                ], [
                    { "id": "ethereum", "symbol": "ETH", "network": "ethereum", "type": "coin" },
                    { "id": "aave-erc20", "symbol": "AAVE", "network": "ethereum", "type": "ERC20" }
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