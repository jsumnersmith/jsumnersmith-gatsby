/** @jsx jsx */
import { jsx, Box} from "theme-ui"
import lightLogo from '../images/light-mug.png'

const Image = () => {

  return (
    <Box sx={{width: 100, margin: `0 auto`, mb: 3}}>
      <img src={lightLogo} alt="fancy mug logo" sx={{width: `100%`}}/>
    </Box>)
}

export default Image
