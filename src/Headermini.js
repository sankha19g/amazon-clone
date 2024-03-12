import React from "react";
import "./Headermini.css";
import { Link } from "react-router-dom";


function Headermini() {
  return (
    
<div className="headermini">
     
 <div className="header__nav">

        <Link >
          <div className="header__option">
            <span className="header__optionLineOne">Fresh</span>
          </div>
        </Link>
        
        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Best Sellers</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Keep Shopping for</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Today's Deals</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Electronics</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Fashon</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Amazon Business</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Home & Kitchen</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Amazon miniTV</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Sell</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Books</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Buy Again</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Gift Cards</span>
        </div>
        </Link>

        <Link>
        <div className="header__option">
          <span className="header__optionLineOne">Gift Ideas</span>
        </div>
        </Link>

        


      </div>
    </div>





  )
}

export default Headermini
