import React, { useEffect } from "react";
import { IoIosClipboard, IoIosTrash } from "react-icons/io";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

const BtnEliminar = ({ id }) => {
  const [data, setData] = React.useState([]);

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  // const getEmpleado = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/usuarios/" + id, {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     const json = await response.json();
  //     setData(json);
  //     console.log("HOLA PAPU: ");
  //     console.log(json);
  //   } catch (e) {
  //     console.log("error mostrado -> " + e);
  //   }
  // };

  // useEffect(() => {
  //   getEmpleado();
  //   console.log("Arreglo Obtenido: " + data);
  // }, []);


  // const deleteEmp = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/usuarios/" + id, {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     const json = await response.json();
  //     setData(json);
  //     console.log("HOLA PAPU: ");
  //     console.log(json);
  //   } catch (e) {
  //     console.log("error mostrado -> " + e);
  //   }
  // };

  return (
    <>
      <Button
        className="btn btn-outline"
        style={{ borderRadius: "100%", color: "#db0c09" }}
        // onClick={deleteEmp}
      >
        <IoIosTrash style={{ fontSize: "25" }} />
      </Button>

      {/* {console.log("Hola tienes el ID: " + id)} */}
      {/* {console.log("BIENVENIDO CRACK: ")}
      {console.log(data.Person.name)} */}

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Modificar Empleado</h3>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Nombre(s):</label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inNameM"
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">
                      Apellido Paterno:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inApeP"
                      //value={mSurname}
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">
                      Apellido Materno:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inApeM"
                      //value={mLastName}
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">
                      Correo Electrónico:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inEmailM"
                      //value={mEmail}
                      type="email"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Teléfono:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inPhoneM"
                      //value={mPhone}
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">
                      Teléfono Celular:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inCellPhoneM"
                      //value={mCellPhone}
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Responsable:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inResponsM"
                      placeholder="Responsable"
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Monitor:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inMonitorM"
                      placeholder="Monitor"
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">
                      Área de trabajo:
                    </label>
                    {/* <Input
                    className="form-control-alternative descripcion"
                    id="input-description"
                    placeholder="descripción"
                    type="select"
                    required="required"
                  /> */}
                    <select id="idAreaWM">
                      <option>Plataformas</option>
                      <option>Diseño</option>
                      <option>Servidores</option>
                      <option>Sistemas</option>
                      <option>Mercadotecnia</option>
                    </select>
                  </FormGroup>
                </Col>
                {/* 
                ● Nombre(s). 
                ● Apellido(s).
                ● Área de trabajo.
                ● Correo electrónico.
                ● Teléfono.
                ● Teléfono celular.
                ● Monitor.
                ● Responsable.
                ● Departamento.
                */}
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Departamentos:</label>
                    <select id="idDepaM">
                      <option>Marketing</option>
                      <option>Recursos Humanos</option>
                      <option>Comercial</option>
                      <option>Sistemas</option>
                      <option>Mercadotecnia</option>
                    </select>
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
              Cerrar
            </Button>
            <Button
              //onClick={validarCamposModificar}
              // onClick={() => alertInfo()}
              className="btn btn-success"
              style={{ float: "right" }}
            >
              Modificar
            </Button>
            <br />
            <br />
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default BtnEliminar;
