/** @jsx jsx */
import { jsx, Box} from "theme-ui"
import lightImage from '../images/light-notes.png';

const Image = ({width = 100}) => {

  return <Box sx={{width}}><img src={lightImage} sx={{width: `100%`}} alt="A notes icon"/></Box>
}

export default Image
