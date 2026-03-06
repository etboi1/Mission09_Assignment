import Header from './Header'
import Teams from './Teams'
import Footer from './Footer'
import './App.css'

function App() {

  return (
    /* Three components called directly from App.tsx, as required. Another component is called from within
    Teams component */
    <>
      <Header />
      <Teams />
      <Footer />
    </>
  )
}

export default App
