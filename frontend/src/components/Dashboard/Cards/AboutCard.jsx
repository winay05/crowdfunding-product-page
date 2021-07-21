import { Row } from "react-bootstrap";
import PledgeModal from "../../PledgeModal/PledgeModal";

const AboutCard = (props) => (
  <div className="card" id="about">
    <h5 className="title">About this project</h5>
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
        </Row>
      </div>
    ))}
  </div>
);

export default AboutCard;
