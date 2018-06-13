import React, { Component } from 'react';
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';



const HomePage = () => (
  <div>
    <NavBar />
    <div className="text-center">
      <h2 className="text-center">Introducing GitHubFolio</h2>
      <h4 >Create a beautiful portfolio to showcase your best work with GitHubFolio</h4>
      <button type="button" class="btn btn-dark" href='#'>Login with GitHub</button>
    </div>
    <Footer />
  </div>
);

export default HomePage
