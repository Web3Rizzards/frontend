import { ExternalProvider, JsonRpcFetchFunc, JsonRpcProvider, Web3Provider } from '@ethersproject/providers'

export const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc): Web3Provider => {
  const library = new Web3Provider(provider)
  return library
}