import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
function Header(props) {
    return (
      <div className="header__component">
          
          <FontAwesomeIcon  className="fa-icons" icon={faAnchor} />
              
         
        <ul className="ul__element">
          <li className="li__element"> Home </li>
          <li className="li__element">News</li>
          <li className="li__element">Contact</li>
          <li className="li__element">About</li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  