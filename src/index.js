import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className=' flex flex-col justify-start items-center h-screen overflow-y-scroll'>
    <div className=' text-white w-80 rounded-md my-20'>
        <div className=' overflow-hidden rounded-md'>
        <Navigation/>
        <Main/>
        <Footer/>
        </div>
    </div>
  </div>
);
