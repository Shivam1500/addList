import { BrowserRouter } from 'react-router-dom'
// import './App.css'
import Navbar from './components/Navbar/Navbar'
import AddCompanyForm from './components/AddCompany/AddCompanyForm'
import LandingPage from './components/LandingPage'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          {/* <AddCompanyForm /> */}
          <LandingPage />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
