import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./ContactCard.css";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-start align-items-center"
    >
      <img
        className="avatar"
        src={"https://i.pravatar.cc/150?u=julian_cantera"}
        alt="avatar"
      />
      <div className="ms-4 me-auto">
        <Link
          to={`/contact/${id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="fw-bold">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faTrash}
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.clickHandler(id)}
        />
      </div>
    </ListGroup.Item>
  );
};

export default ContactCard;
