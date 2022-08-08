import { useState } from "react";
import { useHistory } from "react-router-dom";
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

const Login = () => {
  const history = useHistory();

  const [userOAHH, setUserOAHH] = useState("oahh12345678@gmail.com");
  const [userPass, setuserPass] = useState("obed123");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRoute = () => {
    const inEmail = document.getElementById("inEmail").value;
    const inPass = document.getElementById("inPass").value;

    if (inEmail === userOAHH && inPass === userPass) {
      history.push("/admin/index");
      setErrorMessage("");
    } else {
      alert("Usuario/Contraseña incorrectas");
    }
  };
  return (
    <>
      <Col lg="5" md="7" style={{ marginTop: "-5%" }}>
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5" style={{ textAlign: "center" }}>
            <img
              alt="..."
              src={require("../../assets/img/logoAccionTI.png").default}
              style={{ maxWidth: "500px", maxHeight: "60px" }}
            />
            <br />
            <br />
            <div className="text-center text-muted mb-4">
              <small>Ingresa los datos correspondientes</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Correo"
                    type="email"
                    autoComplete="new-email"
                    id="inEmail"
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
                  <Input
                    placeholder="Contraseña"
                    type="password"
                    autoComplete="new-password"
                    id="inPass"
                  />
                </InputGroup>
              </FormGroup>

              {/* <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Recuérdame</span>
                </label>
              </div> */}
              <div className="text-center">
                <Button className="my-4" color="primary" onClick={handleRoute}>
                  Entrar
                </Button>
              </div>
              <div>
                <span className="text-danger font-weight-700">
                  {errorMessage}
                </span>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3" style={{ textAlign: "center" }}>
          <Col xs="12">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>¿Olvidastes tu contraseña?</small>
            </a>
          </Col>
          {/* <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Crear cuenta</small>
            </a>
          </Col> */}
        </Row>
      </Col>
    </>
  );
};

export default Login;
