import React from "react";

import { Modal, Button } from "react-bootstrap";
const modalBody = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
};
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={modalBody}>
        <img
          src="icon-check.svg"
          alt=""
          style={{ marginBottom: "1rem", height: 60, width: 60 }}
        />
        <h4>Thanks for your support!</h4>
        <p style={{ textAlign: "center" }}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>

        <Button
          style={{ paddingLeft: 20, paddingRight: 20 }}
          className="actions pledge-button"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default function SuccessModal(props) {
  const [modalShow, setModalShow] = React.useState(props.show);

  const handleClose = () => {
    setModalShow(false);
    props.toggle();
  };
  return (
    <>
      {/* <Button onClick={() => {setModalShow(true); props.showSuccessModal();}}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => handleClose()}
      />
    </>
  );
}
