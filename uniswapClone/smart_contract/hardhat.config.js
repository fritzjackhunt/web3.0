require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/xwbvTntRIWlELD-07UQVUj5xGRmeOrk5',
      accounts: [
        '9d2fefa4c480dcd97686a9f7edb745471b9eeb0f13c9a104f402d085e340ee64',
      ],
    },
  },
}