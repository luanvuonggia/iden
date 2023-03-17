import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { ImageUpload } from "./ImageUpload.js";
import btpImg from "../../Assets/btp.png"
import Button from "react-bootstrap/Button";
import { AiOutlineSend } from "react-icons/ai";
import { transfer } from "../../sdk/iconSDK.js";

function Request() {
  const handleSendRequest = () => {
    transfer({
      to: "hxd2a3d25b71df7c58c9289606eb590baa91efb590", //TicketPal
      value: 10,
    });
  }
  return (
    <Container fluid className="request-section">
      <Particle />
      <Container>
      <img className="btp-image" src={btpImg} alt="btp"></img>
        <h1 className="project-heading">
          Request <strong className="purple">IDEN</strong>
        </h1>
        <p>
          You are requesting us to mint an SBT calls IDEN as known as your ID Card.
        </p>
        <br/>
        
        <div className="form__group field">
          <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
          <label for="name" className="form__label">Name</label>
        </div>
        <div className="form__group field">
        <input type="input" className="form__field" placeholder="Email" name="email" id='email' required />
          <label for="email" className="form__label">Email</label>
        </div>
        <ImageUpload></ImageUpload>
        <Button
          type="submit"
          className="send-btn"
          onClick={() => {handleSendRequest()}}
        >
          <AiOutlineSend style={{ fontSize: "1em" }} />
          {" Send Request"}
        </Button>
      </Container>
      
    </Container>
  );
}

export default Request;
