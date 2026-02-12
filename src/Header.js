import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="" />
      </Link>

      <Link to="/">
        <div className="header__optionlocation">
          <LocationOnIcon />
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">India</span>
          </div>
        </div>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search Amazon.in" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user ? '/login' : '/'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>


        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="cart">
            <div className="header__optionBasket">
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
              <ShoppingCartIcon />
            </div>
            <span className="cart__text">Cart</span>
          </div>

        </Link>
      </div>
    </div>
  );
}

export default Header;