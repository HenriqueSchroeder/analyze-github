import { parseCookies, setCookie } from 'nookies'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { ReactNode, useContext, createContext } from 'react'

/**
 * Style theme.
 */
import { darkTheme, lightTheme } from '../../styles/theme'

/**
 * Type.
 */
type ThemeContextType = {
  toggle: () => void
  isDarkMode: boolean
}

/**
 * Context.
 */
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

/**
 * Component.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  /**
   * Hook.
   */
  const { themeMode } = parseCookies()

  /**
   * Checks the theme.
   */
  const isDarkMode = themeMode === 'dark'

  /**
   * Control the theme.
   */
  const toggle = () => {
    /**
     * Defines the theme in cookies.
     */
    setCookie(null, 'themeMode', themeMode === 'light' ? 'dark' : 'light', {
      maxAge: 50 * 30 * 24 * 60 * 60,
      path: '/',
    })
  }

  /**
   * JSX.
   */
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggle }}>
      <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

/**
 * Hook.
 */
export const useThemeContext = () => useContext(ThemeContext)
