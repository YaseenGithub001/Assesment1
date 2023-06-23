import React from 'react'
import Header from './Units/Header';
import Home from "./Home";
import Form from "./Form";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
       <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>


    </div>
    )
  }