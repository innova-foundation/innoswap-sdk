import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 79377087078960,
  MOONBASE = 1287,
  AVALANCHE = 43114,
  FUJI = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const INIT_CODE_HASH: string = '0x37b7c0e1209e0716fc342839df06746d57b7c4e7a3cfa385d2313cb4f04a6e4c'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc778417e063141139fce010982780140aa0cd5ab',
  [ChainId.ROPSTEN]: '0xc778417e063141139fce010982780140aa0cd5ab',
  [ChainId.RINKEBY]: '0xaF981E818745Aa3d3745fD12c283Ab4eb61E1557',
  [ChainId.GÖRLI]: '0x449442adD8aFe5C299f075B6F1338801985CfA74',
  [ChainId.KOVAN]: '0x85D1D164750d85F50fC4D8b66bF028227E7bD07a',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xa48636fdFE7Fbc8444Ea648F4b9A69155e9f0900',
  [ChainId.ROPSTEN]: '0xa48636fdFE7Fbc8444Ea648F4b9A69155e9f0900',
  [ChainId.RINKEBY]: '0x2992acE928e77b785961B63A862748097a679E5e',
  [ChainId.GÖRLI]: '0x1cE6751792aD8e129f4DEdfA37407619aD244D39',
  [ChainId.KOVAN]: '0xF96455Cb9Da956dEd162372464a17e7BA00AF78C',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const WINN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1410AE86f204720af016712680C101840deFBe37',
  [ChainId.ROPSTEN]: '0x1410AE86f204720af016712680C101840deFBe37',
  [ChainId.RINKEBY]: '0x1410AE86f204720af016712680C101840deFBe37',
  [ChainId.GÖRLI]: '0x1410AE86f204720af016712680C101840deFBe37',
  [ChainId.KOVAN]: '0x1410AE86f204720af016712680C101840deFBe37',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const INNAI_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xAF306f355d7d376C063069b25Ab70e75b0419aAb',
  [ChainId.ROPSTEN]: '0xAF306f355d7d376C063069b25Ab70e75b0419aAb',
  [ChainId.RINKEBY]: '0xCEa2e01249449d3793732BF48Dc4283d88A0533c',
  [ChainId.GÖRLI]: '0x4f7CcE9FCd71BcEa9bB0C51A9FEF34c15Cf8e924',
  [ChainId.KOVAN]: '0x817b0ea2E3A2D13023Beeee3aA91Ab5cA30bfdE3',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MASTERDEVELOPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x3577B9694002AAF48f264B16F4b914BD0656e3B7',
  [ChainId.ROPSTEN]: '0x3577B9694002AAF48f264B16F4b914BD0656e3B7',
  [ChainId.RINKEBY]: '0x14Aa5A079FfBceE0171c20fBBcd282A829E20B7F',
  [ChainId.GÖRLI]: '0xd91A6E4167BD6eFF0fec71831a4034D053a0Fcd4',
  [ChainId.KOVAN]: '0x91B996856d4af8b3f75aA3DFe9078021309a5652',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const GENERATOR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x00fBA875832baAA4fCD36C46300dD07ac83211B5',
  [ChainId.ROPSTEN]: '0x00fBA875832baAA4fCD36C46300dD07ac83211B5',
  [ChainId.RINKEBY]: '0xB156bAF3e6f9a36116010E518f902087eAcDcc2b',
  [ChainId.GÖRLI]: '0xA11E0aA61b1C33A170C68908E89fe32c3Df697FE',
  [ChainId.KOVAN]: '0x0E31d99741cC0574a9D8d7e91E25DB354dD2dC1D',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const INNOVAISPAWNER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xf463fe89324Ec3FC115c696121c9bbEE851Ab226',
  [ChainId.ROPSTEN]: '0xf463fe89324Ec3FC115c696121c9bbEE851Ab226',
  [ChainId.RINKEBY]: '0x3DA3F44b56dC2f3B10C8D9a539dd85c8A5c560C0',
  [ChainId.GÖRLI]: '0xAa47984dee88A1E36c9Ad6CB000c5d29462Fee5F',
  [ChainId.KOVAN]: '0x329Ab883211b05ACDEaaD93479b2DBB2B800b747',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const INNOSWAPMIGRATOR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x85123aa459F24f106935d7646B4960c643a5F4F6',
  [ChainId.ROPSTEN]: '0x85123aa459F24f106935d7646B4960c643a5F4F6',
  [ChainId.RINKEBY]: '0xEE8a5831973E891b9828412163Ec9f9a75953149',
  [ChainId.GÖRLI]: '0x54903Bd015F5d5727E888205D567f84D9879ea2D',
  [ChainId.KOVAN]: '0xD59522156a6d97243FF900C1430543E2bAB53E27',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0D17Da36dF068F314C181cD2f54288d68059Bc9a',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
