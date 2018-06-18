import React, { Component } from 'react';
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';



const HomePage = (props) => (
  <div>
    <NavBar />
    <div className="text-center">
      <h2 className="text-center">Introducing GitHubFolio</h2>
      <h4 >Create a beautiful portfolio to showcase your best work with GitHubFolio</h4>
      <a href='/dashboard'><button type="button" class="btn btn-dark">Login with GitHub</button></a>
      <br /><br />
      <a
        href='https://github.com/login/oauth/authorize?client_id=d704cc5bc30e737c2c31&scope=read:user'
        className='bg-dark text-white py-2 px-3'
      >
        X | Actually login with GitHub
      </a>
      <button>MELISSA LOGIN</button>
    </div>
    <Footer />
  </div>
);

export default HomePage
