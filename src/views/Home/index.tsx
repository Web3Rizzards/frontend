import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import Hero from './components/Hero'
import Container from '@/components/Layout/Container'
import PageSection from '@/components/PageSection'
import { PageMeta } from '@/components/Layout/Page'
import useTheme from '@/hooks/useTheme'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;
`

const Home: React.FC = () => {
  const { theme, isDark } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px', height: '100%' }

  return (
    <>
      <PageMeta />
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background='white'
        index={2}
        hasCurvedDivider={false}
      >
      </PageSection>
    </>
  )
}

export default Home
