// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <div style={{ textAlign: "center" }}>
      <h1 className="textred">Food App </h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  </>,
);

function Menu() {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <Pizza
              name="cheese Pizza"
              ingredients="cheese, bread"
              img="https://png.pngtree.com/png-clipart/20230421/original/pngtree-delicious-pizza-creative-photography-png-image_9071905.png"
              price={10}
            ></Pizza>
          </div>
          <div className="col">
            <Pizza
              name="Pepperoni Pizza"
              ingredients="Mozzarella cheese, salami, Tomato sauce, pepper, Spices "
              img="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg"
              price={20}
            ></Pizza>
          </div>
          <div className="col">
            <Pizza
              name="Garlic cheese Pizza"
              ingredients=" cheese, salami, Tomato sauce, pepper, Spices "
              img="https://static.vecteezy.com/system/resources/previews/021/311/744/original/pizza-transparent-background-png.png"
              price={30}
            ></Pizza>
          </div>
        </div>
      </div>
    </>
  );
}
function Header() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "yellow", fontsize: "40px" }}>
        Pizza-Menu
      </h1>
    </>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const openhour = 12;
  const closehour = 10;
  var mssg = "Open";
  if (hour >= openhour && hour <= closehour) {
    mssg = " we are currently open";
  } else {
    mssg = `It is ${hour}:${minute} and we are not open!`;
  }
  return (
    <>
      <h3 style={{ color: "white", fontSize: "60px" }}>{mssg}</h3>
    </>
  );
}

function Pizza(props) {
  return (
    <>
      <div className="card" style={{ width: "20rem", height: "500px" }}>
        <img src={props.img} class="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-Text"> {props.ingredients}</p>
          <a href="#" class="btn btn-primary">
            {props.price}$ Order now{" "}
          </a>
        </div>
      </div>
    </>
  );
}
