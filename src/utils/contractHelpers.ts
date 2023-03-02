import type { Signer } from '@ethersproject/abstract-signer'
import type { Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import tokens from '@/config/constants/tokens'

// Addresses
import {
  getAddress,
  getMulticallAddress,
} from '@/utils/addressHelpers'

// ABI
import bep20Abi from '@/config/abi/erc20.json'
import erc721Abi from '@/config/abi/erc721.json'
import erc721CollectionAbi from '@/config/abi/erc721Collection.json'
import MultiCallAbi from '@/config/abi/Multicall.json'

// Types
import type {
  Erc20,
  Erc721,
  Multicall,
  Erc721collection,
} from '@/config/abi/types'

export const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new Contract(address, abi, signerOrProvider)
}

export const getErc20Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(bep20Abi, address, signer) as Erc20
}
export const getErc721Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(erc721Abi, address, signer) as Erc721
}

export const getMulticallContract = () => {
  return getContract(MultiCallAbi, getMulticallAddress(), simpleRpcProvider) as Multicall
}
export const getErc721CollectionContract = (address: string, signer?: Signer | Provider) => {
  return getContract(erc721CollectionAbi, address, signer) as Erc721collection
}