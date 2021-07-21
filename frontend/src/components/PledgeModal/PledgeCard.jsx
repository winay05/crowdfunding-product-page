import { Row } from "react-bootstrap";
import "./PledgeModal.css";
const PledgeCard = ({
  el,
  selected,
  handleChange,
  pledge,
  changePledge,
  submitPledge,
}) => (
  <label htmlFor={el.name}>
    <div
      className={`modal-card ${
        selected === el.name ? "modal-card--selected" : ""
      } ${!el.leftStock ? "modal-card--disabled" : ""}`}
    >
      <Row style={{ margin: 0 }} className="d-flex justify-content-between">
        <span>
          <input
            type="radio"
            name="selected-project"
            disabled={!el.leftStock}
            id={el.name}
            onChange={handleChange}
            checked={el.name === selected}
          />
          <h5 className="title"> {el.name}</h5>
        </span>
        <span className="pledge-text">Pledge ${el.minPledge} or more</span>
      </Row>
      <br />
      <p>{el.about}</p>
      <div>
        <h5 style={{ display: "inline" }}>{el.leftStock} </h5>
        left
      </div>

      <div className={`${selected !== el.name ? "hide" : ""}`}>
        <hr />
        <Row
          style={{ margin: 0 }}
          className="actions d-flex justify-content-between align-items-center"
        >
          <input
            min={el.minPledge}
            className="pledge-input"
            placeholder="Enter your pledge"
            value={pledge === 0 ? undefined : pledge}
            onChange={(e) => changePledge(e.target.value)}
            type="number"
          />
          <button
            class="pledge-button show-hover"
            disabled={pledge < el.minPledge}
            onClick={submitPledge}
          >
            Continue
          </button>
        </Row>
      </div>
    </div>
  </label>
);

export default PledgeCard;
