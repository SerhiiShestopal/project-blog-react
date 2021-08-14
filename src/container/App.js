import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../container/Header/Header'
import './style.css'
import './grid.css'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
