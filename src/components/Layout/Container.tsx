import { Box, BoxProps } from '@pancakeswap/uikit'

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box mx="auto" maxWidth="800px" {...props}>
    {children}
  </Box>
)

export default Container
