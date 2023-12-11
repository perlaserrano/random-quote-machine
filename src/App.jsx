import React from 'react'
import QuoteMachine from './components/QuoteMachine ';
import ThemeProvider from './context/ThemeProvider';

const App = () => {
  return (
    <>
   <ThemeProvider>
    <QuoteMachine/>
    </ThemeProvider>
      
    </>
  )
}

export default App
