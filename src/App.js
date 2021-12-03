import Container from '@mui/material/Container'
import * as React from 'react'

import Grid from '@mui/material/Grid'
import Logo from './components/Logo'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import VSeparator from './components/VSeparator'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth='md'
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Grid
            container
            space={2}
            columns={2}
            boxShadow={3}
            borderRadius={2}
            bgcolor='#FFF'
            overflow='hidden'
            sx={{ minHeight: '70%' }}
          >
            <Grid
              item
              xs={2}
              md={1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Grid sx={{ textAlign: 'center' }}>
                <Logo />
              </Grid>
              <VSeparator />
            </Grid>

            <Grid item xs={2} md={1}>
              <LoginForm />
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
