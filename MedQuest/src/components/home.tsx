//Home page component

import React from 'react';
import Navbar from './navbar';
import "../styles/home.css";

const Home=()=>{
    return(

      <div className="home-container">
      <header className="home-header">
        <h1>Bienvenid@ a MedQuest</h1>
        <p> El lugar para quizzes medicos</p>
        <a href="/quizDashboard" className="home-button">Iniciar</a>
      </header>
    </div>
    );
};

export default Home;