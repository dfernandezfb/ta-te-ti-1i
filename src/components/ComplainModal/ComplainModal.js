import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import shortid from "shortid";

const ComplainceModal = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow1}>
        Modal 1
      </Button>
      <Button variant="primary" onClick={handleShow2}>
        Modal 2
      </Button>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <p>hola</p>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal {shortid.generate()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ComplainceModal;
