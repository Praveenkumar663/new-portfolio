import Foooter from './components/Foooter'
import Navbar from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import AllRoutes from './Routes/AllRoutes'

function App() {

  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <AllRoutes/>
      <Foooter/>
      
    </>
  )
}

export default App
