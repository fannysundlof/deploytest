import Modal from "react-modal";
import React from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BookModal = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.openModal}
        style={customStyles}
        contentLabel="Booking"
        addBooking={props.addBooking}
      >
      <h2 className={"title"}>Boka din tid med oss</h2>
        <form onSubmit={props.submitForm} className={"form"}>
          <input
            type={"text"}
            className={"input"}
            placeholder={"Namn"}
            name="username"
          ></input>
          <input
            type={"text"}
            className={"input"}
            placeholder={"Tid"}
            name="time"
          ></input>
          <input
            type={"number"}
            className={"input"}
            placeholder={"Tel"}
            name="tel"
          ></input>
          <textarea
            type={"text"}
            className={"input"}
            placeholder={"Meddelande"}
            name="message"
          ></textarea>

          <button>Boka</button>
          <button onClick={props.closeModal}>Stäng</button>
        </form>
        <h2 className={"product__card-name"} id="title" name={"title"} hidden>
          Interior 1
        </h2>
        <p className={"product__card-price"} id="price" hidden>
          10 000 kr
        </p>
        <span id="id" hidden>
          1
        </span>
      </Modal>
    </div>
  );
};

export default BookModal;
