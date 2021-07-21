import React from "react";

import { Modal, Button } from "react-bootstrap";
import styles from "./styles.js";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={styles.modalBody}>
        <img src="icon-check.svg" alt="" style={styles.checkIcon} />
        <h4>Thanks for your support!</h4>
        <p style={styles.text}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>

        <Button
          style={styles.buttonStyles}
          className="actions pledge-button show-hover"
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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => handleClose()}
      />
    </>
  );
}
