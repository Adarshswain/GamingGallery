import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';
import { MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import Navbar from "./Navbar";
import Body from "./Body";


function App() {


  return (

    <div className="App">
      <Navbar />
      <Body />



    </div >
  );
}

export default App;
