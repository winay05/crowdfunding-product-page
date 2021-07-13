import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Dashboard.css";
import PledgeModal from "../PledgeModal/PledgeModal";

function Dashboard(props) {
  return (
    <Container className="dashboard-container">
      <div className="card-container">
        <div className="card" id="top-card">
          <img
            className="product-logo"
            src="logo-mastercraft.svg"
            alt="product logo"
          />
          <h3>{props?.data?.title}</h3>
          <p>{props?.data?.subtitle}</p>
          <div className="actions mt-3">
            <PledgeModal
              products={props.products}
              text="Back this project"
              submitPledge={props.submitPledge}
              raisedMoney={props.raisedMoney}
              backers={props.backers}
            />

            {/* <button className="pledge-button">Back this project</button> */}
            <button
              id="bookmark"
              style={
                props.bookmarked
                  ? { backgroundColor: "#f2f3f4", color: "darkcyan" }
                  : {}
              }
              onClick={props.bookmark}
            >
              <img
                style={
                  props.bookmarked
                    ? { backgroundColor: "darkcyan" }
                    : { backgroundColor: "inherit" }
                }
                src="bookmark.png"
                alt=""
              />
              <span id="bookmark-text">
                {props?.bookmarked === true ? "Bookmarked" : "Bookmark"}
              </span>
            </button>
          </div>
        </div>
        <div className="card" id="stats">
          <div className="row">
            <div className="col-12 col-sm-4">
              <h4>${props.raisedMoney}</h4>
              <p>of ${props.data.targetMoney} backed</p>
            </div>
            <div className="divider"></div>
            <div className="col-12 col-sm-4">
              <h4>{props.backers}</h4>
              <p>total backers</p>
            </div>
            <div className="divider"></div>
            <div className="col-12 col-sm-3">
              <h4>{props.data.daysLeft}</h4>
              <p>days left</p>
            </div>
          </div>
          <div className="progress-bar mt-2">
            <div
              style={{
                width: `${(props.raisedMoney * 100) / props.data.targetMoney}%`,
              }}
              className="progress-bar progress-bar-inner"
            ></div>
          </div>
        </div>
        <div className="card" id="about">
          <h5>About this project</h5>
          <br />
          {props.data.about.split("\n").map((el) => (
            <p>{el}</p>
          ))}

          <br />
          {props?.products?.map((el) => (
            <div className={!el.leftStock ? "card card-disabled" : "card"}>
              <Row className="d-flex justify-content-between">
                <h5>{el.name}</h5>
                <p className="pledge-text">Pledge ${el.minPledge} or more</p>
              </Row>

              <p>{el.about}</p>
              <Row className="actions d-flex justify-content-between align-items-center">
                <div>
                  <h5 style={{ display: "inline" }}>{el.leftStock} </h5>left
                </div>
                <PledgeModal
                  products={props.products}
                  selected={el.name}
                  text="Select reward"
                  BtnDisabled={!el.leftStock}
                  submitPledge={props.submitPledge}
                  raisedMoney={props.raisedMoney}
                  backers={props.backers}
                />
                {/* <button class="pledge-button" disabled={!el.leftStock}>
                    Select reward
                  </button> */}
              </Row>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
