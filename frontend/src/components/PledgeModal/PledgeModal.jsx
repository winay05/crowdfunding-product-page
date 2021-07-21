import React, { Component } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import SuccessModal from "../SuccessModal/SuccessModal";
import PledgeCard from "./PledgeCard";

import "./PledgeModal.css";

const DEFAULT_SELECTED = "No reward";

export default class PledgeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selected: this.props.selected,
      pledge: 0,
      showSuccess: false,
    };
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
              disabled={this.props.BtnDisabled}
              onClick={() => this.setShow(true)}
              className="pledge-button show-hover"
            >
              {this.props.text}
            </Button>
            <Modal
              centered
              show={this.state.show}
              onHide={() => this.setShow(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Back this project</Modal.Title>
                <p>
                  Want to support us in bringing Mastercraft Bamboo Riser out in
                  the world?
                </p>
              </Modal.Header>
              <Modal.Body>
                {/* pledge with no reward */}
                <label htmlFor="No reward">
                  <div
                    className={`modal-card ${
                      this.state.selected === DEFAULT_SELECTED
                        ? "modal-card--selected"
                        : ""
                    }`}
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
                        <h5 className="title">Pledge with no reward</h5>
                      </span>
                    </Row>
                    <p>
                      Choose to support us without a reward if you simply
                      believe in our project. As a backer, you will be signed up
                      to receive product updates via email.
                    </p>
                    <div
                      className={`actions ${
                        this.state.selected !== DEFAULT_SELECTED ? "hide" : ""
                      }`}
                    >
                      <hr />

                      <button
                        class="pledge-button show-hover"
                        onClick={this.submitPledge}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </label>

                {this.props?.products?.map((el) => (
                  <>
                    <PledgeCard
                      el={el}
                      selected={this.state.selected}
                      handleChange={this.handleChange}
                      pledge={this.state.pledge}
                      changePledge={this.changePledge}
                      submitPledge={this.submitPledge}
                    />
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
