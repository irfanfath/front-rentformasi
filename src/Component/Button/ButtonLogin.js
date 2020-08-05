import React from "react";
import { Button } from "reactstrap";

const ButtonLogin = (props) => {
  return (
    <div className="w-commerce-commercecartopenlink cart-button w-inline-block">
      <Button outline color="success" onClick={props.klik}>Masuk</Button>
    </div>
  );
}

export default ButtonLogin;