/** @jsx jsx */
import { jsx, useColorMode, Box} from "theme-ui"
import lightImage from '../images/light-book.png';
import darkImage from '../images/dark-book.png';

const Image = ({width = 100}) => {
  const [colorMode] = useColorMode('default');
  const image = colorMode === 'default' ? lightImage : darkImage;

  return <Box sx={{width}}><img src={image} sx={{width: `100%`}} alt="A book icon"/></Box>
}

export default Image
