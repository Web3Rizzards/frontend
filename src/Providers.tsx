import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'
// import { ToastsProvider } from 'contexts/ToastsContext'
// import { fetchStatusMiddleware } from 'hooks/useSWRContract'
import { Store } from '@reduxjs/toolkit'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import ThemeProvider from './theme'
import { PropsWithChildren, useEffect, useState } from 'react'
import { ToastsProvider } from './contexts/ToastsContext'

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet,polygon } from "wagmi/chains";

const chains = [mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "e83a061989116d32873819d49af1e902" }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "e83a061989116d32873819d49af1e902",
    version: "2",
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, [polygon]);

const Providers: React.FC<PropsWithChildren<{ store: Store }>> = ({ children, store }) => {
  return (
    <>
      <Provider store={store}>
          <WagmiConfig client={wagmiClient}>
            <ToastsProvider>
              <NextThemeProvider>
                <ThemeProvider>
                    <SWRConfig>
                      {children}
                      {/* <ModalProvider>{children}</ModalProvider> */}
                    </SWRConfig>
                </ThemeProvider>
              </NextThemeProvider>
            </ToastsProvider>
          </WagmiConfig>
      </Provider>
      <Web3Modal
        projectId="e83a061989116d32873819d49af1e902"
        ethereumClient={ethereumClient}
      />
      </>
  )
}

export default Providers
