/** @jsx jsx */
import { jsx, useColorMode, Box} from "theme-ui"
import lightImage from '../images/light-notes.png';
import darkImage from '../images/dark-notes.png';

const Image = ({width = 100}) => {
  
  const [colorMode] = useColorMode('default');
  const image = colorMode === 'default' ? lightImage : darkImage;

  return <Box sx={{width}}><img src={image} sx={{width: `100%`}} alt="A notes icon"/></Box>
}

export default Image
