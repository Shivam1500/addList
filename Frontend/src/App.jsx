// import { BrowserRouter } from 'react-router-dom'
// // import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import AddCompanyForm from './components/AddCompany/AddCompanyForm'
// import LandingPage from './components/LandingPage'

// function App() {


//   return (
//     <>
//       <div>
//         <BrowserRouter>
//           <Navbar />
//           {/* <AddCompanyForm /> */}
//           <LandingPage />
//         </BrowserRouter>
//       </div>
//     </>
//   )
// }

// export default App


import Header from "./components/Header";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { LuMapPin } from "react-icons/lu";
import Card from "./components/Card";
import AddReviewModal from "./components/AddReviewModal";
import { useState } from "react";
import DetailedView from "./components/DetailedView";
import SearchSection from "./components/SearchSection";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const companyData = {
    image: "https://via.placeholder.com/150",
    title: "Graffersid Web and App Development",
    subtitle: "Founded on 01-01-2016",
    text: "816, Shekhar Central, Manorama Ganj AB road, New Palasia, Indore (M.P.)",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <Header />
      <SearchSection handleShow={handleShow} />
      <Card data={companyData} />


      <AddReviewModal show={show} handleClose={handleClose} />

      <BrowserRouter>
        <Routes>
          <Route path="/detailview" element={<DetailedView data={companyData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

