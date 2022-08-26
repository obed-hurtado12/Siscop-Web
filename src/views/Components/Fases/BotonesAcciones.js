import React, { useEffect, useState } from "react";
import { IoIosClipboard, IoIosTrash } from "react-icons/io";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import swal from "sweetalert";

const BotonesAcciones = ({ idProyect }) => {

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  const [modal2, setModal2] = React.useState(false);
  const toggle2 = () => setModal2(!modal2);

  const [newFase, setNewFase] = React.useState("");
  const [modifyFase, setModifyFase] = React.useState("");
  const [fase, setFase] = React.useState(true);
  const [formFase, setFormFase] = React.useState(defaultFormFases());


  const deleteFase = () => {
    let btn = window.confirm("¿Seguro que deseas eliminar?");
    if (!btn) {
      swal({
        title: "Se canceló la eliminación",
        icon: "warning",
        button: "Aceptar",
      });
    } else {
      swal({
        title: "Se eliminó la fase",
        icon: "success",
        button: "Aceptar",
      });
      setFase(false); //Se manda un status en false, para que se elimine de la tabla.
    }
  };
  const fases = [
    {
      id: 1,
      fases: {
        f1: {
          id: 1,
          name: "Inicio",
        },

        f2: {
          id: 2,
          name: "En progreso",
        },
        f3: {
          id: 3,
          name: "Terminada",
        },
        f4: {
          id: 4,
          name: "Finalizada",
        },
      },
    },
  ];

  const listItems = fases.map((fase) => (
    <>
      <tr>
        <th>{fase.fases.f1.id}</th>
        <th>{fase.fases.f1.name}</th>
        <th>
          <Button
            className="btn btn-outline"
            style={{ borderRadius: "100%", color: "#fcba03" }}
            onClick={toggle2}
          >
            <IoIosClipboard style={{ fontSize: "25" }} />
          </Button>
        </th>
        <th>
          <Button
            className="btn btn-outline"
            style={{ borderRadius: "100%", color: "#db0c09" }}
            onClick={deleteFase}
          >
            <IoIosTrash style={{ fontSize: "25" }} />
          </Button>
        </th>
      </tr>
      <tr>
        <th>{fase.fases.f2.id}</th>
        <th>{fase.fases.f2.name}</th>
        <th>
          <Button
            className="btn btn-outline"
            style={{ borderRadius: "100%", color: "#fcba03" }}
            onClick={toggle2}
          >
            <IoIosClipboard style={{ fontSize: "25" }} />
          </Button>
        </th>
        <th>
          <Button
            className="btn btn-outline"
            style={{ borderRadius: "100%", color: "#db0c09" }}
            onClick={deleteFase}
          >
            <IoIosTrash style={{ fontSize: "25" }} />
          </Button>
        </th>
      </tr>
      <tr>
        <th>{fase.fases.f3.id}</th>
        <th>{fase.fases.f3.name}</th>
        <th>
          <Button
            className="btn btn-outline"
            style={{ borderRadius: "100%", color: "#fcba03" }}
            onClick={toggle2}
          >
            <IoIosClipboard style={{ fontSize: "25" }} />
          </Button>
        </th>
        <th>
          <Button
            className="btn btn-outline"
            style={{ borderRadius: "100%", color: "#db0c09" }}
            onClick={deleteFase}
          >
            <IoIosTrash style={{ fontSize: "25" }} />
          </Button>
        </th>
      </tr>
      <tr>
        <th>{fase.fases.f4.id}</th>
        <th>{fase.fases.f4.name}</th>
        <th>
          <Button
            className="btn btn-outline"
            style={{ borderRadius: "100%", color: "#fcba03" }}
            onClick={toggle2}
          >
            <IoIosClipboard style={{ fontSize: "25" }} />
          </Button>
        </th>
        <th>
          <Button
            className="btn btn-outline"
            style={{ borderRadius: "100%", color: "#db0c09" }}
            onClick={deleteFase}
          >
            <IoIosTrash style={{ fontSize: "25" }} />
          </Button>
        </th>
      </tr>
    </>
  ));

  const registerFase = () => {
    const inFase = document.getElementById("inFase").value;

    if (inFase === "" || inFase === null || inFase === " ") {
      swal({
        title: "Verifique de nuevo",
        icon: "warning",
        button: "Aceptar",
      });
    } else {
      swal({
        title: "Registro Exitoso",
        icon: "success",
        button: "Aceptar",
      });
      setNewFase(inFase);
    }
  };
  const modificarFase = () => {
    const inFaseM = document.getElementById("inFaseM").value;

    if (inFaseM === "" || inFaseM === null || inFaseM === " ") {
      swal({
        title: "Verifique de nuevo",
        icon: "warning",
        button: "Aceptar",
      });
    } else {
      swal({
        title: "Modificación Exitosa",
        icon: "success",
        button: "Aceptar",
      });
      setModifyFase(inFaseM);
    }
  };
  /////////////////////////////////////////////

  const [dataFases, setDataFases] = useState([]);

  const [defaultIDFase, setDefaultIDFase] = useState("");
  const [defaultNameFase, setDefaultNameFase] = useState("");
  const [dataNewFase, setDataNewFase] = useState([]);

  useEffect(() => {
    getPhasesByProyect();
    // console.log("Arreglo Obtenido " + data);
  }, []);

  const updateFase = async () => {
    try {
      await fetch("http://localhost:8080/api/proyectos/" + idProyect + "/fases", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: defaultNameFase
        }),
      }).then(() => {
        swal({
          title: "Modificación de Fase Exitosa",
          icon: "success",
          button: "Aceptar",
        });
        window.location.reload();
      });
    } catch (e) {
      //  console.log("error mostrado -> " + e);
    }
  };

  ////////////////////////////////////////////

  const getPhasesByProyect = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/proyectos/" + idProyect + "/fases/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await response.json();
      setDataFases(json.phases);
      setDefaultNameFase(json.phases.name)
      console.log("FASES");
      console.log(json.phases);
    } catch (e) {
      // console.log("error mostrado -> " + e);
    }
  };

  const listado = dataFases.map((infoM) => (
    <tr>
      <td>{infoM.id}</td>
      <td>{infoM.name}</td>
      {/* <td>
        <Button
          className="btn btn-outline"
          style={{ borderRadius: "100%", color: "#fcba03" }}
          onClick={() => (toggle2(), setDefaultIDFase(infoM.id))}
        >
          <IoIosClipboard style={{ fontSize: "25" }} />
        </Button>
      </td>
      <td>
        <Button
          className="btn btn-outline"
          style={{ borderRadius: "100%", color: "#db0c09" }}
          onClick={deleteFase}
        >
          <IoIosTrash style={{ fontSize: "25" }} />
        </Button>
      </td> */}
    </tr>
  ));

  const createFase= async () => {
    try {
      await fetch("http://localhost:8080/api/proyectos/" + idProyect +"/fases/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formFase.name,
        }),
      }).then(() => {
        //setIsVisible(false);
        swal({
          title: "Registro de Fase Exitoso",
          icon: "success",
          button: "Aceptar",
        });
        //window.location.reload();
      });
    } catch (e) {
      console.log(e);
    }
  };
  
  function defaultFormFases() {
    return {
      name: ""
    };
  }
  const dataCathFase= (event, type) => {
    setFormFase({ ...formFase, [type]: event });
  };
  const onSubmitFase = () => {
    //console.log(formData);
    if (
      formFase.name 
    ) {
      createFase();
    } else {
      console.log("El nombre es obligatorio");
      swal({
        title: "Faltan campos por llenar",
        icon: "warning",
        button: "Aceptar",
      });
    }
  };

  const onSubmitUpdateFase = () => {
    //console.log(formData);
      updateFase();
  };

  return (
    <>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre de la fase</th>
            {/* <th scope="col">Modificar</th>
            <th scope="col">Eliminar</th> */}
          </tr>
        </thead>
        {/* <tbody>{listItems}</tbody> */}
        <tbody>{listado}</tbody>
      </Table>

      <br />
      <Button
        //type="submit"
        className="btn btn-success"
        onClick={toggle}
        //style={{ float: "right" }}
        style={{ marginLeft: "40%" }}
      >
        Registrar Fase
      </Button>

      {/* Modal Registrar Fase */}
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Registro de Fases</h3>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Nombre de la fase:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      placeholder="Nombre"
                      type="text"
                      required="required"
                      onChange={(event) =>
                        dataCathFase(event.target.value, "name")
                      }
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
              Cerrar
            </Button>
            <Button
              onClick={() => onSubmitFase()}
              className="btn btn-success"
              style={{ float: "right" }}
            >
              Registrar
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      {/* Modal Modificar Fase */}
      <Modal isOpen={modal2} toggle={toggle2} size="lg">
        <ModalHeader toggle={toggle2} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Modificar Fase</h3>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">
                      Nombre de la fase:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      type="text"
                      required="required"
                      value={defaultNameFase}
                      onChange={(event) => setDefaultNameFase(event.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <Button
              type="submit"
              color="primary"
              onClick={toggle2}
              style={{ float: "right" }}
            >
              Cerrar
            </Button>
            <Button
              onClick={onSubmitUpdateFase}
              className="btn btn-success"
              style={{ float: "right" }}
            >
              Modificar
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default BotonesAcciones;
