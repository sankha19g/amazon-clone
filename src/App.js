import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Headermini from "./Headermini";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Footer from "./Footer";
import Payment from "./Payment";
import Orders from "./Orders";



function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };


  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <div className="app__body">
              <Checkout />
            </div>
            <Footer />
          </Route>

          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/orders" >
            <Header />
            <div className="app__body">
              <Orders />
            </div>
            <Footer />
          </Route>

          <Route path="/payment" >
            <Header />
            <div className="app__body">
              <Payment />
            </div>
            <Footer />
          </Route>

          {/* default route */}
          <Route exact path="/">
            <Header />
            <Headermini />
            <div className="app__body">
              <Home />
            </div>
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
