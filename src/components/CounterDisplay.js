import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const CounterDisplay = ({ counter, arttir, azalt, reset }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="counter-container">
      <div className="counter">{counter}</div>
      <div>
        <Button onClick={arttir} color="primary">
          +
        </Button>
        <Button onClick={toggleModal} color="danger">
          Reset
        </Button>
        <Button onClick={azalt} color="primary">
          -
        </Button>
      </div>

      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Sayaç Sıfırla</ModalHeader>
        <ModalBody>
          Sayaç değerini sıfırlamak istediğinizden emin misiniz?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            İptal
          </Button>
          <Button
            color="danger"
            onClick={() => {
              reset();
              toggleModal();
            }}
          >
            Resetle
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};
