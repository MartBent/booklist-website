import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
    <MantineProvider theme={createTheme({
      fontFamily: 'Montserrat, sans-serif',
      defaultRadius: 'md',
    })}>
    <App />
    </MantineProvider>
)
