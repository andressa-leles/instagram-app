
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './style/theme'


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Screen>
        <Flex>
          <h1>Hello world</h1>
          <h2>Hello world</h2>
        </Flex>
      </Screen>
    </ThemeProvider>
  )
}

export default App
