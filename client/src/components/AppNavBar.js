import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import ProfileModal from './auth/ProfileModal';
import List from '../components/Articlee/Comment/ArticleVisiteurs/List'


import { logout } from '../js/actions/authActions';
import{profileUser} from "../js/actions/authActions";
//import { List } from '@material-ui/core';

const AppNavBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  

  const logoutUser = () => {
    dispatch(logout());
  };
  const profile=()=>{
    dispatch(profileUser());
  }
  const authLinks = (
    <Fragment>
      <NavItem>
        <Link to="/profile">
          <span className="navbar-text mr-3" >
            <strong>{user ? `Welcome ${user.name}` : null}</strong>
          </span>
        </Link>    
      </NavItem>
      <NavItem ><Link to="/admin"> <span className="navbar-text mr-4"><strong>   Admin </strong> </span></Link> </NavItem> 
      <NavLink href="#" onClick={profile}>
        {' '}
        <NavItem>
          
        <ProfileModal />
      </NavItem>
      <NavItem>
      <Link to="/listvisiteurs"> <span className="navbar-text mr-4"><strong> Service </strong> </span></Link>  

        </NavItem>
</NavLink>
      
      <NavLink href="/" onClick={logoutUser}>
        {' '}
        Logout
      </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      
          <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="#FBD062 " dark expand="sm" className="mb-5">
        <Container>
          {/*<NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />*/}
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuth ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default AppNavBar;