import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css";

function Home() {
  return (
    <div className="home">
      <img className="home__image "
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/WA/July/PD/XGL/header/comb/eng-mob.gif" alt="" />

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
          image="https://m.media-amazon.com/images/I/81fxjeu8fdL._SX679_.jpg" />

        <Product id="00000002"
          title="American Tourister Valex 28 Ltrs Large Laptop Backpack "
          brand="American Tourister"
          price={1499}
          discount={40}
          price__original={2500}
          rating={4}
          reviews={246}
          image="https://m.media-amazon.com/images/I/913C9PlkyfL._SX679_.jpg" />

        <Product id="00000007"
          title="boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes"
          brand="boAt"
          price={999}
          discount={89}
          price__original={6990}
          rating={4}
          reviews={788}
          image="https://m.media-amazon.com/images/I/712reiBu5PL._SX569_.jpg" />

        <Product id="00000008"
          title="MuscleBlaze Biozyme Performance Whey Protein"
          brand="MuscleBlaze"
          price={2399}
          discount={19}
          price__original={2949}
          rating={4}
          reviews={1000}
          image="https://m.media-amazon.com/images/I/61f-weAUGPL._SX679_.jpg" />

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
          image="https://m.media-amazon.com/images/I/71GtA7ifUIL._SX679_.jpg" />

        <Product id="00000004"
          title="Xbox Series X"
          brand="Xbox"
          price={47890}
          discount={14}
          price__original={55990}
          rating={5}
          reviews={604}
          image="https://m.media-amazon.com/images/I/61-jjE67uqL._SX679_.jpg" />

        <Product id="00000005"
          title="NIKE Mens Revolution 7Running Shoe"
          brand="NIKE"
          price={3399}
          discount={8}
          price__original={3695}
          rating={4}
          reviews={2000}
          image="https://m.media-amazon.com/images/I/31CpLh0uzZL.jpg" />

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
          image="https://m.media-amazon.com/images/I/61+dveAdZZS._SX679_.jpg" />

        <Product id="00000010"
          title="Samsung Galaxy S24 Ultra 5G (Titanium Black, 12GB, 256GB Storage) "
          brand="Samsung"
          price={108350}
          discount={20}
          price__original={134999}
          rating={5}
          reviews={2468}
          image="https://m.media-amazon.com/images/I/71CXhVhpM0L._SX569_.jpg" />

        <Product id="00000011"
          title="Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display"
          brand="Apple"
          price={77990}
          discount={16}
          price__original={92900}
          rating={3}
          reviews={6400}
          image="https://m.media-amazon.com/images/I/316ArzLeJ2L._MCnd_AC_.jpg" />

        <Product id="00000012"
          title="Allen Solly Men's Regular Fit Polo"
          brand="Allen Solly"
          price={699}
          discount={36}
          price__original={1099}
          rating={3}
          reviews={67}
          image="https://m.media-amazon.com/images/I/71eUwDk8z+L._SY550_.jpg" />

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
          image="https://m.media-amazon.com/images/I/51nr7OlGN0L._SY300_SX300_QL70_FMwebp_.jpg" />

        <Product id="00000013"
          title="Sony WH-1000XM5 Wireless Industry Leading Noise Cancelling Headphones"
          brand="Sony"
          price={29990}
          discount={14}
          price__original={34990}
          rating={5}
          reviews={5200}
          image="https://m.media-amazon.com/images/I/51SKmu2G9FL._SX679_.jpg" />

        <Product id="00000014"
          title="Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker"
          brand="Instant Pot"
          price={8490}
          discount={35}
          price__original={12990}
          rating={4}
          reviews={15400}
          image="https://m.media-amazon.com/images/I/61S3+xH7SBL._SX679_.jpg" />
      </div>

      <div className="home__row">
        <Product id="00000015"
          title="Dell G15-5530 Gaming Laptop (Intel i7-13650HX/16GB/512GB SSD/RTX 4060)"
          brand="Dell"
          price={102490}
          discount={18}
          price__original={124990}
          rating={4}
          reviews={890}
          image="https://m.media-amazon.com/images/I/51Gv4-IOnEL._SX679_.jpg" />

        <Product id="00000016"
          title="Philips Hue Play White & Color Ambiance Smart Light Bar (Base Kit)"
          brand="Philips"
          price={12990}
          discount={24}
          price__original={16990}
          rating={5}
          reviews={3200}
          image="https://m.media-amazon.com/images/I/61N7Y+0g8JL._SX679_.jpg" />
      </div>

      <div className="home__row">
        <Product id="00000017"
          title="Fitbit Charge 6 Fitness Tracker with Google apps, Heart Rate on Exercise Bike"
          brand="Fitbit"
          price={14999}
          discount={12}
          price__original={16999}
          rating={4}
          reviews={1240}
          image="https://m.media-amazon.com/images/I/618m4Ym+XOL._SX679_.jpg" />

        <Product id="00000018"
          title="Logitech G502 HERO High Performance Wired Gaming Mouse"
          brand="Logitech"
          price={4495}
          discount={44}
          price__original={7995}
          rating={5}
          reviews={48000}
          image="https://m.media-amazon.com/images/I/51IOp99A8pL._SX679_.jpg" />

        <Product id="00000019"
          title="Kindle Paperwhite (16 GB) – Now with a 6.8 inch display and adjustable warm light"
          brand="Amazon"
          price={13999}
          discount={10}
          price__original={15499}
          rating={5}
          reviews={8600}
          image="https://m.media-amazon.com/images/I/51P6An99Y3L._SX679_.jpg" />

        <Product id="00000020"
          title="Prestige IRIS Plus 750 Watt Mixer Grinder with 3 Stainless Steel Jar"
          brand="Prestige"
          price={3499}
          discount={44}
          price__original={6295}
          rating={4}
          reviews={12000}
          image="https://m.media-amazon.com/images/I/610tSc1eJGL._SX679_.jpg" />
      </div>

      <div className="home__row">
        <Product id="00000021"
          title="2022 Apple iPad Air with M1 Chip (10.9-inch, Wi-Fi, 64GB) - Space Grey"
          brand="Apple"
          price={54900}
          discount={10}
          price__original={59900}
          rating={5}
          reviews={3200}
          image="https://m.media-amazon.com/images/I/61XZQXFQEVL._SX679_.jpg" />

        <Product id="00000022"
          title="Sony PlayStation 5 Console (Disc Version)"
          brand="Sony"
          price={54990}
          discount={5}
          price__original={54990}
          rating={5}
          reviews={15000}
          image="https://m.media-amazon.com/images/I/5105T6jmS-L._SX522_.jpg" />

        <Product id="00000023"
          title="Dyson V15 Detect Cordless Vacuum Cleaner (Yellow/Nickel)"
          brand="Dyson"
          price={62900}
          discount={15}
          price__original={74900}
          rating={5}
          reviews={4500}
          image="https://m.media-amazon.com/images/I/41-lS-I8D1L._SX300_SY300_QL70_FMwebp_.jpg" />
      </div>

    </div>
  );
}

export default Home;
