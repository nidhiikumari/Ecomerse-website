import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { facartshopping} from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
// library.add(fab, faCheckSquare, faCoffee);


const Header = ({cartItems}) => {
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to='/' className='logo'>
                    Food Delivery
                    </Link>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to="/" className=''>
                        Home
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/signup" className=''>
                       Signup
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/cart" className=''>
                      Cart
                    
                      <span className='cart-length'>{cartItems.length === 0 ? "" : cartItems.length}</span>
                    </Link>
                </li>
            </ul>
            {/* <ul>
                <li>
                    <Link to="/cart" className='cart'>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{color:'black'}}/>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
                    <i className="fas fa-shopping-cart"/>

                      
                    </Link>
                </li>
            </ul> */}

        </div>
        </header>
  );
}

export default Header;