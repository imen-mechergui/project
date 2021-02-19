import React from 'react';
import AppNavBar from '../AppNavBar';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer'

import './Home.css'
import Topbar from '../Topbar/Topbar';



class Home extends React.Component {
  render() {
    return (
      <div className="aboutPage">
        <Topbar/>
       <Header/>
       <Footer/>
    
      
       
       
    
      </div>
    );
  }
}

export default Home;