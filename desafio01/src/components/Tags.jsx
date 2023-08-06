import React from "react";
import Badge from "react-bootstrap/Badge";

const Tags = ({ text, bg }) => {
  return <Badge bg={bg}>{text}</Badge>;
};

export default Tags;
