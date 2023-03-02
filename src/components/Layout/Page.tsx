import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from './Container'

const StyledPage = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 16px;
`

export const PageMeta: React.FC<{ symbol?: string }> = ({ symbol }) => {
  return (
    <Head>
      <title>ETHDENVER</title>
    </Head>
  )
}

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: string
}

const Page: React.FC<PageProps> = ({ children, symbol, ...props }) => {
  return (
    <>
      <PageMeta symbol={symbol} />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  )
}

export default Page
