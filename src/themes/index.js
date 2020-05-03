import { Theme } from '@material-ui/core'
import { lightTheme } from './light'
import { darkTheme } from './dark'



const themes = {
  light: lightTheme,
  dark: darkTheme,
}

const getTheme = (theme) => (
  themes[theme]
)
export default getTheme