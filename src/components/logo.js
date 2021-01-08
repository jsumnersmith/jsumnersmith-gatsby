/** @jsx jsx */
import { jsx, useColorMode, Box} from "theme-ui"
import lightLogo from '../images/light-mug.png'
import darkLogo from '../images/dark-mug.png'

const Image = () => {
  const [colorMode] = useColorMode();
  const image = colorMode === "default" ? lightLogo : darkLogo;

  return (
    <Box sx={{width: 100, margin: `0 auto`, mb: 3}}>
      <img src={lightLogo} alt="fancy mug logo" sx={{width: `100%`}}/>
    </Box>)
}

export default Image
