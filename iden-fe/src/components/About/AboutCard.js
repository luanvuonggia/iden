import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <b className="purple" style={{fontSize: '1.5rem'}}>Security</b>: IDENs (SBT) are built on <b className="icon-color">ICON blockchain</b> technology, which ensures that they are tamper-proof and cannot be easily forged. This ensures that the certificate of achievement is genuine and cannot be duplicated.
          <br/>
          <b className="purple" style={{fontSize: '1.5rem'}}>Ownership</b>: An IDEN is tied to a specific individual, meaning that it cannot be transferred to anyone else. This ensures that only the individual who earned the certificate of achievement has access to it, and it cannot be claimed by someone else.
          <br/>
          <b className="purple" style={{fontSize: '1.5rem'}}>Verification</b>: IDEN provide a decentralized way to verify the authenticity of a certificate of achievement. It can be easily checked by anyone who has access to the blockchain to confirm that the certificate is genuine.
          <br/>
          <b className="purple" style={{fontSize: '1.5rem'}}>Access</b>: IDEN tokens can be used to grant access to certain services or privileges that are only available to individuals who hold the certificate of achievement.
          <br/>
          <b className="purple" style={{fontSize: '1.5rem'}}>Traceability</b>: IDEN tokens provide a permanent record of the certificate of achievement, which can be tracked and traced throughout its lifetime. This ensures that the certificate can be used to verify the authenticity of the achievement at any point in the future.
        </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
