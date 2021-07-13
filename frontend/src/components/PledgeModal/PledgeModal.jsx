import React, { Component } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import "./PledgeModal.css";
import SuccessModal from "../SuccessModal/SuccessModal";

const pledgeButton = {
  padding: "0.7em",
  backgroundColor: "darkcyan",
  color: "white",
};

export default class PledgeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selected: this.props.selected,
      pledge: 0,
      showSuccess: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitPledge = this.submitPledge.bind(this);
    this.setShow = this.setShow.bind(this);
  }

  handleChange = (e) => {
    this.setState({ selected: e.target.id });
  };

  submitPledge = () => {
    const selectedProduct = this.props.products.find(
      (el) => el.name === this.state.selected
    );
    console.log(this.state.selected);
    if (
      this.state.selected === "No reward" ||
      this.state.pledge >= selectedProduct?.minPledge
    ) {
      console.log("pledge amount", this.state.pledge);
      this.setShow(false);
      this.showSuccessModal();

      this.props.submitPledge(this.state.pledge, selectedProduct);
    } else {
      console.log("you cant pledge less than the min amount");
    }
  };
  changePledge = (e) => {
    this.setState({ pledge: e });
  };
  setShow = (val) => {
    if (val) {
      this.setState({ show: val });
    } else {
      this.setState({ show: val, selected: undefined, pledge: 0 });
    }
  };

  showSuccessModal = () => {
    this.setState({ showSuccess: !this.state.showSuccess });
  };
  render() {
    return (
      <>
        {this.state.showSuccess ? (
          <SuccessModal
            toggle={this.showSuccessModal}
            show={this.state.showSuccess}
          />
        ) : (
          <>
            <Button
              style={pledgeButton}
              disabled={this.props.BtnDisabled}
              onClick={() => this.setShow(true)}
            >
              {this.props.text}
            </Button>
            <Modal
              centered
              show={this.state.show}
              onHide={() => this.setShow(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Back this project
                </Modal.Title>
                <p>
                  Want to support us in bringing Mastercraft Bamboo Riser out in
                  the world?
                </p>
              </Modal.Header>
              <Modal.Body>
                <label htmlFor="No reward">
                  <div
                    style={
                      this.state.selected === "No reward"
                        ? { border: "2px solid darkcyan" }
                        : { border: "0.1rem solid lightgrey" }
                    }
                    className="modal-card"
                  >
                    <Row
                      style={{ margin: 0 }}
                      className="d-flex justify-content-between"
                    >
                      <span>
                        <input
                          type="radio"
                          name="selected-project"
                          id="No reward"
                          onChange={this.handleChange}
                          checked={this.state.selected === "No reward"}
                        />
                        {"  "}
                        <h5 style={{ display: "inline", marginRight: "1rem" }}>
                          Pledge with no reward
                        </h5>
                      </span>
                    </Row>
                    <p>
                      Choose to support us without a reward if you simply
                      believe in our project. As a backer, you will be signed up
                      to receive product updates via email.
                    </p>
                    <div
                      className="actions"
                      style={
                        this.state.selected === "No reward"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <hr />

                      <button class="pledge-button" onClick={this.submitPledge}>
                        Continue
                      </button>
                    </div>
                  </div>
                </label>
                {this.props?.products?.map((el) => (
                  <>
                    <label htmlFor={el.name}>
                      <div
                        style={
                          el.name === this.state.selected
                            ? { border: "2px solid darkcyan" }
                            : { border: "0.1rem solid lightgrey" }
                        }
                        className={
                          !el.leftStock
                            ? "modal-card-disabled modal-card"
                            : "modal-card"
                        }
                      >
                        <Row
                          style={{ margin: 0 }}
                          className="d-flex justify-content-between"
                        >
                          <span>
                            <input
                              type="radio"
                              name="selected-project"
                              disabled={!el.leftStock}
                              id={el.name}
                              onChange={this.handleChange}
                              checked={el.name === this.state.selected}
                            />{" "}
                            <h5
                              style={{ display: "inline", marginRight: "1rem" }}
                            >
                              {el.name}
                            </h5>
                          </span>
                          <span className="pledge-text">
                            Pledge ${el.minPledge} or more
                          </span>
                        </Row>
                        <br />
                        <p>{el.about}</p>
                        <div>
                          <h5 style={{ display: "inline" }}>{el.leftStock} </h5>
                          left
                        </div>

                        <div
                          style={
                            el.name === this.state.selected
                              ? { display: "block" }
                              : { display: "none" }
                          }
                        >
                          <hr />
                          <Row
                            style={{ margin: 0 }}
                            className="actions d-flex justify-content-between align-items-center"
                          >
                            <input
                              min={el.minPledge}
                              className="pledge-input"
                              placeholder="Enter your pledge"
                              value={
                                this.state.pledge === 0
                                  ? undefined
                                  : this.state.pledge
                              }
                              onChange={(e) =>
                                this.changePledge(e.target.value)
                              }
                              type="number"
                            />
                            <button
                              class="pledge-button"
                              disabled={this.state.pledge < el.minPledge}
                              onClick={this.submitPledge}
                            >
                              Continue
                            </button>
                          </Row>
                        </div>
                      </div>
                    </label>
                  </>
                ))}
              </Modal.Body>
            </Modal>
          </>
        )}
      </>
    );
  }
}
