import { Link, Text } from '@pancakeswap/uikit'
import { PropsWithChildren } from 'react'

interface DescriptionWithTxProps {
  description?: string
  txHash?: string
}

const DescriptionWithTx: React.FC<PropsWithChildren<DescriptionWithTxProps>> = ({ txHash, children }) => {

  return (
    <>
      {typeof children === 'string' ? <Text as="p">{children}</Text> : children}
      {txHash && (
        <Link external 
        // href={getBscScanLink(txHash, 'transaction', chainId)}
        >
          {'View on Cronoscan'}: {txHash}
        </Link>
      )}
    </>
  )
}

export default DescriptionWithTx
