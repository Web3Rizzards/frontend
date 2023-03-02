import { Token } from '@pancakeswap/sdk'
import { CHAIN_ID } from './networks'

const MAINNET = 1
const TESTNET = 1

interface TokenList {
  [symbol: string]: Token
}

export const defineTokens = <T extends TokenList>(t: T) => t

export const mainnetTokens:{[key: string]: Token} = defineTokens({
  'wbnb': new Token(
    MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  )
} as const)

export const testnetTokens:{[key: string]: Token} = defineTokens({
  'wbnb': new Token(
    TESTNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  )
} as const)

const tokens = () => {
  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (CHAIN_ID && parseInt(CHAIN_ID, 10) === 338) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {} as typeof testnetTokens & typeof mainnetTokens)
  }

  return mainnetTokens
}

const unserializedTokens = tokens()

export default unserializedTokens
