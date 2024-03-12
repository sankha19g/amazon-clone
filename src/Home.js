import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css";

function Home() {
  return (
    <div className="home">
      <img className="home__image "
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/WA/July/PD/XGL/header/comb/eng-mob.gif" alt=""/>
 
 {/* product id, title , price, rating , image  */}

 <div className="home__row">
 <Product id="00000001"
 title="Apple iPhone 15 Pro Max (256 GB) - Blue Titanium"
 brand="Apple"
 price={148900}
 discount={7}
 price__original={159900}
 rating={5}
 reviews={1400}
 image="https://m.media-amazon.com/images/I/81fxjeu8fdL._SX679_.jpg"/>

<Product id="00000002"
 title="American Tourister Valex 28 Ltrs Large Laptop Backpack "
 brand="American Tourister"
 price={1499}
 discount={40}
 price__original={2500}
 rating={4}
 reviews={246}
 image="https://m.media-amazon.com/images/I/913C9PlkyfL._SX679_.jpg"/>

<Product id="00000007"
 title="boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes"
 brand="boAt"
 price={999}
 discount={89}
 price__original={6990}
 rating={4}
 reviews={788}
 image="https://m.media-amazon.com/images/I/712reiBu5PL._SX569_.jpg"/>

<Product id="00000008"
 title="MuscleBlaze Biozyme Performance Whey Protein"
 brand="MuscleBlaze"
 price={2399}
 discount={19}
 price__original={2949}
 rating={4}
 reviews={1000}
 image="https://m.media-amazon.com/images/I/61f-weAUGPL._SX679_.jpg"/>

 </div>

 <div className="home__row">
 <Product id="00000003"
 title="Godox SB-GUE80 80cm / 32 Inch Portable Octagon Honeycomb Grid Umbrella Speedlite Softbox "
 brand="Godox"
 price={1507}
 discount={16}
 price__original={1790}
 rating={4}
 reviews={59}
 image="https://m.media-amazon.com/images/I/71GtA7ifUIL._SX679_.jpg"/>

<Product id="00000004"
 title="Xbox Series X"
 brand="Xbox"
 price={47890}
 discount={14}
 price__original={55990}
 rating={5}
 reviews={604}
 image="https://m.media-amazon.com/images/I/61-jjE67uqL._SX679_.jpg"/>

<Product id="00000005"
 title="NIKE Mens Revolution 7Running Shoe"
 brand="NIKE"
 price={3399}
 discount={8}
 price__original={3695}
 rating={4}
 reviews={2000}
 image="https://m.media-amazon.com/images/I/31CpLh0uzZL.jpg"/>
 
 </div>

 <div className="home__row">
 <Product id="00000009"
 title="JBL Flip 5 Wireless Portable Bluetooth Speaker"
 brand="JBL"
 price={8999}
 discount={18}
 price__original={10999}
 rating={4}
 reviews={3400}
 image="https://m.media-amazon.com/images/I/61+dveAdZZS._SX679_.jpg"/>

<Product id="00000010"
 title="Samsung Galaxy S24 Ultra 5G (Titanium Black, 12GB, 256GB Storage) "
 brand="Samsung"
 price={108350}
 discount={20}
 price__original={134999}
 rating={5}
 reviews={2468}
 image="https://m.media-amazon.com/images/I/71CXhVhpM0L._SX569_.jpg"/>

<Product id="00000011"
 title="Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display"
 brand="Apple"
 price={77990}
 discount={16}
 price__original={92900}
 rating={3}
 reviews={6400}
 image="https://m.media-amazon.com/images/I/316ArzLeJ2L._MCnd_AC_.jpg"/>

<Product id="00000012"
 title="Allen Solly Men's Regular Fit Polo"
 brand="Allen Solly"
 price={699}
 discount={36}
 price__original={1099}
 rating={3}
 reviews={67}
 image="https://m.media-amazon.com/images/I/71eUwDk8z+L._SY550_.jpg"/>

 </div>
 <div className="home__row">
 <Product id="00000006"
 title="Samsung 163 cm (65 inches) 4K Ultra HD Smart Neo QLED TV QA65QN90CAKLXL (Carbon Silver)"
 brand="Samsung"
 price={149990}
 discount={40}
 price__original={249990}
 rating={5}
 reviews={400}
 image="https://m.media-amazon.com/images/I/51nr7OlGN0L._SY300_SX300_QL70_FMwebp_.jpg"/>


 </div>

    </div>
  );
}

export default Home
