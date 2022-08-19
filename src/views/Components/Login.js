import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  ModalBody,
  ModalHeader,
  Modal,
} from "reactstrap";
import swal from "sweetalert";

const Login = () => {

  const history = useHistory();
  const [userEmail, setEmail] = useState("oahh12345678@gmail.com");
  const [userPass, setuserPass] = useState("obed123");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRoute = () => {
    const inEmail = document.getElementById("inEmail").value;
    const inPass = document.getElementById("inPass").value;

    if (inEmail === userEmail && inPass === userPass) {
      history.push("/admin/empleados");
      setErrorMessage("");
    } else {
      swal({
        title: "Error",
        text: "Usuario/Contraseña incorrectas",
        icon: "warning",
        button: "Aceptar"
      });
    }
  };

  const [data, setData] = useState([]);
  //const [formData, setFormData] = useState(defaultFormValues());
  const [isVisible, setIsVisible] = useState(false);
  //const { setRefrescar2 } = route.params;

  // const defaultFormValues = () => {
  //   return {
  //     email: "",
  //     password: "",
  //   };
  // }

  // const logIn = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/auth", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email: formData.email,
  //         password: formData.password,
  //       }),
  //     }).then((response) => {
  //       setIsVisible(false);
  //       setRefrescar2(true);
  //     });
  //   } catch (e) {
  //     console.log("No se inició sesión...");
  //   }
  // };

  // const onSubmit = () => {
  //   if (
  //     (formData.email).length === 0 || (formData.password).length === 0
      
  //   ) {
  //     console.log("Los campos no deben estar vacíos");
  //   } else {
  //     setIsVisible(true);
  //     logIn();
  //   }
  // };

  // const dataCath = (event, type) => {
  //   setFormData({ ...formData, [type]: event });
  //   console.log({ formData });
  // };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const sendEmail = () => {
    swal({
      title: "Se envió la contraseña al correo",
      icon: "success",
      button: "Aceptar",
    });
  }

  return (
    <>
      <Col lg="5" md="7" style={{ marginTop: "-5%" }}>
        <Card className="bg-white shadow border-0">
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
              onClick={toggle}
            >
              <small>¿Olvidaste tu contraseña?</small>
            </a>
          </Col>
        </Row>
      </Col>

      {/* Modal Envío de Correo */}
      <Modal isOpen={modal} toggle={toggle} style={{marginTop:"20%"}}>
        <ModalHeader toggle={toggle} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Recuperar Contraseña:</h3>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Correo Electrónico:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inEmail"
                      placeholder="Email"
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <Button
              type="submit"
              color="primary"
              onClick={toggle}
              style={{ float: "right" }}
            >
              Cancelar
            </Button>
            <Button
              onClick={sendEmail}
              className="btn btn-success"
              style={{ float: "right" }}
            >
              Enviar
            </Button>
          </Form>
        </ModalBody>
      </Modal>

    </>
  );
};

export default Login;
