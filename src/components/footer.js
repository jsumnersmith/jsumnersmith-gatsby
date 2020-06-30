/** @jsx jsx */
import { jsx, useColorMode, Box, Button, Flex } from "theme-ui"
import { ToggleLeft, ToggleRight, Sun, Moon } from "react-feather"

export default () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <footer sx={{fontFamily: `body`, fontSize: 14, fontWeight: 700}}>
        <Flex sx={{justifyContent: `center`, alignItems: `center`}}>
          <Sun />
          <Button
            aria-label="Dark Mode Toggle"
            variant="toggle"
            onClick={e => {
              setColorMode(colorMode === "default" ? `dark` : `default`)
            }}
            sx={{display: `flex`, background: `none`, color: colorMode === 'default' ? `text` : `white`}}  
          >
            {colorMode === "default" ? <ToggleLeft /> : <ToggleRight />}
          </Button>
          <Moon />
          
        </Flex>
        <Box sx={{textAlign: `center`}}>
          &copy; {new Date().getFullYear()}, Joel Sumner Smith
        </Box>
    </footer>
  )

}