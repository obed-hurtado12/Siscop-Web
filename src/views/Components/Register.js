import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import validator from "validator";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("S/C");
  const [estiloSpan, setEstiloSpan] = useState("");
  const [textSpan, setTextSpan] = useState("");

  const spanVer = (value) => {
    //const valInput = document.getElementById("inPassword").value;
    // if (
    //   validator.isStrongPassword(value, {
    //     minLength: 8,
    //     minLowercase: 1,
    //     minUppercase: 1,
    //     minNumbers: 1,
    //     minSymbols: 1,
    //   })
    // ) {
    //   setErrorMessage("Contraseña fuerte");
    // } else {
    //   setErrorMessage("La contraseña es débil");
    // }

    // switch (errorMessage) {
    //   case "Contraseña fuerte":
    //     setEstiloSpan("text-success font-weight-700");
    //     break;

    //   case "La contraseña es débil":
    //     setEstiloSpan("text-danger font-weight-700");
    //     break;

    //   default:
    //     setEstiloSpan("text-info font-weight-700");
    //     break;
    // }
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 2,
      minUppercase: 2, minNumbers: 2, minSymbols: 2
    })) {
      setErrorMessage('Contraseña fuerte')
    } else {
      setErrorMessage('La contraseña es débil')
    }
  };
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5" style={{ textAlign: "center" }}>
            <img
              alt="..."
              src={require("../../assets/img/logoAccionTI.png").default}
              style={{ maxWidth: "500px", maxHeight: "60px" }}
            />
            <br />
            <br />
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <pre>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      id="inPassword"
                      onChange={(e) => spanVer(e.target.value)}
                    />
                   
                  </pre>
                </InputGroup>
                <br/>
                {errorMessage === "S/C" ? null : (
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        {errorMessage}
                      </span>
                    )}
              </FormGroup>
              {/*<div className="text-muted font-italic">
                {valSpan}
                <strong>Password: </strong>
                <span className="text-info font-weight-700">S/C</span>;
              </div>*/}

              <div className="text-center">
                <Button className="mt-4" color="success">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
