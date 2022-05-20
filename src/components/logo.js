/** @jsx jsx */
import { jsx, Box} from "theme-ui"
import lightLogo from '../images/light-mug.png'

const Image = () => {

  return (
    <div style={{width: 100, margin: `0 auto 20px`}}>
      <img src={lightLogo} alt="fancy mug logo" style={{width: `100%`}}/>
    </div>
  )
}

export default Image
