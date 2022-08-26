import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Table,
  Container,
  Row,
  Button,
  ModalBody,
  ModalHeader,
  Modal,
  Form,
  Col,
  FormGroup,
  Input,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";
import { IoIosClipboard, IoIosTrash } from "react-icons/io";
import BotonesAcciones from "./Fases/BotonesAcciones";

const TableProjects = () => {
  const fecha = new Date();
  //ACTIVAR MODALS
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [modal2, setModal2] = React.useState(false);
  const toggle2 = () => setModal2(!modal2);
  const [modal3, setModal3] = React.useState(false);
  const toggle3 = () => setModal3(!modal3);
  const [modal4, setModal4] = React.useState(false);
  const toggle4 = () => setModal4(!modal4);
  const [modal5, setModal5] = React.useState(false);
  const toggle5 = () => setModal5(!modal5);
  const [modal6, setModal6] = React.useState(false);
  const toggle6 = () => setModal6(!modal6);
  const [modal7, setModal7] = React.useState(false);
  const toggle7 = () => setModal7(!modal7);

  // const deleteEmp = () => {
  //   let btn = window.confirm("¿Seguro que deseas eliminar?");
  //   if (!btn) {
  //     swal({
  //       title: "Se canceló la eliminación",
  //       icon: "warning",
  //       button: "Aceptar",
  //     });
  //   } else {
  //     swal({
  //       title: "Se eliminó el proyecto",
  //       icon: "success",
  //       button: "Aceptar",
  //     });
  //     setProyecto(false);
  //   }
  // };
  // const proyectos = [
  //   {
  //     id: 1,
  //     nameResp: "Luis Trujillo",
  //     projectName: "SISCOP",
  //     fechaInicio: "10/08/2022",
  //     fechaFinal: "19/08/2022",
  //     participantes: {
  //       p1: "Mario Rodríguez",
  //       p2: "Obed Hurtado",
  //       p3: "Noé Martínez",
  //       p4: "Aldahir Gómez García",
  //     },
  //     fases: {
  //       f1: "Inicio",
  //       f2: "En progreso",
  //       f3: "Terminada",
  //       f4: "Finalizada",
  //     },
  //   },
  //   {
  //     id: 2,
  //     nameResp: "Kenia Reyes",
  //     projectName: "SAAP",
  //     fechaInicio: "10/08/2022",
  //     fechaFinal: "19/08/2022",
  //     participantes: {
  //       p1: "Mario Rodríguez",
  //       p2: "Obed Hurtado",
  //       p3: "Noé Martínez",
  //       p4: "Aldahir Gómez García",
  //     },
  //     fases: {
  //       f1: "Inicio",
  //       f2: "En progreso",
  //       f3: "Terminada",
  //       f4: "Finalizada",
  //     },
  //   },
  //   {
  //     id: 3,
  //     nameResp: "Jeraldhy Bonilla",
  //     projectName: "Diseño de Blogs",
  //     fechaInicio: "10/08/2022",
  //     fechaFinal: "19/08/2022",
  //     participantes: {
  //       p1: "Mario Rodríguez",
  //       p2: "Obed Hurtado",
  //       p3: "Noé Martínez",
  //       p4: "Aldahir Gómez García",
  //     },
  //     fases: {
  //       f1: "Inicio",
  //       f2: "En progreso",
  //       f3: "Terminada",
  //       f4: "Finalizada",
  //     },
  //   },
  //   {
  //     id: 4,
  //     nameResp: "Juan Benitez",
  //     projectName: "Mapas Fractales",
  //     fechaInicio: "10/08/2022",
  //     fechaFinal: "19/08/2022",
  //     participantes: {
  //       p1: "Mario Rodríguez",
  //       p2: "Obed Hurtado",
  //       p3: "Noé Martínez",
  //       p4: "Aldahir Gómez García",
  //     },
  //     fases: {
  //       f1: "Inicio",
  //       f2: "En progreso",
  //       f3: "Terminada",
  //       f4: "Finalizada",
  //     },
  //   },
  // ];

  // const listItems = proyectos.map((infoM) => (
  //   <tr>
  //     <th>{infoM.id}</th>
  //     <th>{infoM.nameResp}</th>
  //     <th>
  //       {infoM.projectName} {infoM.lastname}
  //     </th>
  //     <th>{infoM.fechaInicio}</th>
  //     <th>{infoM.fechaFinal}</th>
  //     <th>
  //       {infoM.participantes.p1}
  //       <br />
  //       {infoM.participantes.p2}
  //       <br />
  //       {infoM.participantes.p3}
  //     </th>
  //     <th>
  //       <Button
  //         className="btn btn-outline-success"
  //         style={{ borderRadius: "100%" }}
  //         onClick={toggle5}
  //       >
  //         {/* <IoIosClipboard style={{ fontSize: "25" }} /> */}
  //         <strong>Gestión de Fases</strong>
  //       </Button>
  //     </th>
  //     <th>
  //       <Button
  //         className="btn btn-outline"
  //         style={{ borderRadius: "100%", color: "#fcba03" }}
  //         onClick={toggle2}
  //       >
  //         <IoIosClipboard style={{ fontSize: "25" }} />
  //       </Button>
  //     </th>
  //     <th>
  //       <Button
  //         className="btn btn-outline"
  //         style={{ borderRadius: "100%", color: "#db0c09" }}
  //         onClick={deleteEmp}
  //       >
  //         <IoIosTrash style={{ fontSize: "25" }} />
  //       </Button>
  //     </th>
  //   </tr>
  // ));

  // const alertInfo = () => {
  //   swal({
  //     title: "Registro Exitoso",
  //     icon: "success",
  //     button: "Aceptar",
  //     //buttons: ["No", "Si"],
  //   });
  // };

  // const validarCamposModificar = () => {
  //   const inRespName = document.getElementById("inRespName").value;
  //   const inProName = document.getElementById("inProName").value;

  //   if (
  //     inRespName == "" ||
  //     inRespName == null ||
  //     inProName == "" ||
  //     inProName == null
  //   ) {
  //     swal({
  //       title: "Error al modificar",
  //       icon: "warning",
  //       button: "Aceptar",
  //     });
  //   } else {
  //     swal({
  //       title: "Modificación Exitosa",
  //       icon: "success",
  //       button: "Aceptar",
  //     });
  //     // setData(dato);
  //   }
  // };

  // const validarRegistroDepa = () => {
  //   const ininDepa = document.getElementById("inDepa").value;
  //   const inDepaDesc = document.getElementById("inDepaDesc").value;
  //   if (
  //     ininDepa == "" ||
  //     ininDepa == null ||
  //     inDepaDesc == "" ||
  //     inDepaDesc == null
  //   ) {
  //     swal({
  //       title: "Error al registrar",
  //       icon: "warning",
  //       button: "Aceptar",
  //     });
  //   } else {
  //     swal({
  //       title: "Registro Exitoso",
  //       icon: "success",
  //       button: "Aceptar",
  //     });
  //     setNewDepa(ininDepa);
  //     setNewDescDepa(inDepaDesc);
  //   }
  // };

  // const validarRegistroArea = () => {
  //   const inArea = document.getElementById("inArea").value;
  //   const inAreaDesc = document.getElementById("inAreaDesc").value;

  //   if (
  //     inArea == "" ||
  //     inArea == null ||
  //     inAreaDesc == "" ||
  //     inAreaDesc == null
  //   ) {
  //     swal({
  //       title: "Error al registrar",
  //       icon: "warning",
  //       button: "Aceptar",
  //     });
  //   } else {
  //     swal({
  //       title: "Registro Exitoso",
  //       icon: "success",
  //       button: "Aceptar",
  //     });
  //     setNewAreaT(inArea);
  //     setNewDescAreaT(inAreaDesc);
  //   }
  // };

  // CONSUMO DE API

  // STATE para Almacenado del Array de Proyectos
  const [dataProyects, setDataProyects] = useState([]);

  const getProyects = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/proyectos/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      setDataProyects(json.proyects);
      // setDataParticipantesID(json.proyect.Users)
      // console.log("PROYECTOS");
      // console.log(json.proyects);
    } catch (e) {
      console.log("error mostrado -> " + e);
    }
  };

  //ÁREAS DE TRABAJO
  const [formDataArea, setFormDataArea] = React.useState(defaultFormValues2());
  const [dataArea2, setdataArea2] = React.useState([]);
  const [dataDepa2, setDataDepa2] = React.useState([]);
  const [dataEmpleados, setDataEmpleados] = useState([]);
  const [posEmp, setPosEmp] = useState("");

  const getEmpleados = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/usuarios/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      setDataEmpleados(json.user);
      // console.log("MUESTRA DE DATOS:");
      // console.log(json.user);
    } catch (e) {
      //console.log("error mostrado -> " + e);
    }
  };

  const createArea = async () => {
    try {
      await fetch("http://localhost:8080/api/areas-trabajo/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formDataArea.name,
          description: formDataArea.description,
        }),
      }).then(() => {
        //history.push("/admin/empleados");
        swal({
          title: "Registro Exitoso",
          icon: "success",
          button: "Aceptar",
        });
        window.location.reload();
      });
    } catch (e) {
      // console.log("Error mostrado: " + e);
    }
  };

  const createDepa = async () => {
    try {
      await fetch("http://localhost:8080/api/departamentos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formDataArea.name,
          description: formDataArea.description,
        }),
      }).then(() => {
        //history.push("/admin/empleados");
        swal({
          title: "Registro Exitoso",
          icon: "success",
          button: "Aceptar",
        });
        window.location.reload();
      });
    } catch (e) {
      // console.log("Error mostrado: " + e);
    }
  };

  const getAreas = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/areas-trabajo/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      setdataArea2(json.workAreas);
      // console.log("AREAS DE TRABAJO");
      // console.log(json.workAreas);
    } catch (e) {
      //console.log("error mostrado -> " + e);
    }
  };

  const getDepas = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/departamentos/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      setDataDepa2(json.departaments);
      // console.log("DEPARTAMENTOS:");
      // console.log(json.departaments);
    } catch (e) {
      //console.log("error mostrado -> " + e);
    }
  };

  useEffect(() => {
    getAreas();
    getDepas();
    getProyects();
    getEmpleados();
    getPhasesByProyect();
    // console.log("Arreglo Obtenido " + data);
  }, []);

  function defaultFormValues2() {
    return {
      name: "",
      description: "",
    };
  }

  const dataCath = (event, type) => {
    setFormDataArea({ ...formDataArea, [type]: event });
    // console.log({ formDataArea });
  };

  const onSubmit = () => {
    // console.log(formDataArea);
    if (formDataArea.name && formDataArea.description) {
      createArea();
    } else {
      // console.log("Te Faltan Campos por llenar");
      swal({
        title: "Faltan campos por llenar",
        icon: "warning",
        button: "Aceptar",
      });
    }
  };

  const onSubmit2 = () => {
    // console.log(formDataArea);
    if (formDataArea.name && formDataArea.description) {
      createDepa();
    } else {
      // console.log("Te Faltan Campos por llenar");
      swal({
        title: "Faltan campos por llenar",
        icon: "warning",
        button: "Aceptar",
      });
    }
  };

  //////////////////////////////////////////////
  // REGISTRO DE PROYECTO
  const [formProyect, setFormProyect] = React.useState(defaultFormProyect());

  const [emp, setEmp] = useState(1);
  const [participante, setParticipante] = useState(1);
  const [idProyect, setIdProyect] = useState(1);
  const [dataFases, setDataFases] = useState([]);
  const [disable, setDisable] = React.useState(false);

  const createProyect = async () => {
    try {
      await fetch("http://localhost:8080/api/proyectos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formProyect.name,
          dateStart: formProyect.dateStart,
          dateEnd: formProyect.dateEnd,
          UserId: emp,
        }),
      }).then(() => {
        swal({
          title: "Registro del proyecto exitoso",
          icon: "success",
          button: "Aceptar",
        });
        window.location.reload();
      });
    } catch (e) {
      console.log(e);
    }
  };
  function defaultFormProyect() {
    return {
      name: "",
      dateStart: "",
      dateEnd: "",
    };
  }
  const dataCathProyect = (event, type) => {
    setFormProyect({ ...formProyect, [type]: event });
  };
  const onSubmitProyect = () => {
    //console.log(formData);
    if (
      formProyect.name &&
      formProyect.dateStart &&
      formProyect.dateEnd
      // &&formProyect.UserId
    ) {
      createProyect();
    } else {
      console.log("Te Faltan Campos por llenar");
      swal({
        title: "Faltan campos por llenar",
        icon: "warning",
        button: "Aceptar",
      });
    }
  };
  const handlePos = function (e) {
    const opcion = e.target.value;
    setEmp(dataEmpleados[opcion].id);
    console.log("ID CAPTURADO REGISTRO: ");
    //console.log(dataEmpleados[opcion].id);
  };

  const addUser = async () => {
    try {
      await fetch(
        "http://localhost:8080/api/proyectos/" +
          idProyect +
          "/agregar-usuarios",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            UserId: participante,
          }),
        }
      ).then(() => {
        swal({
          title: "Se agregó al participante",
          icon: "success",
          button: "Aceptar",
        });
        window.location.reload();
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handlePos2 = function (e) {
    const opcion = e.target.value;
    setParticipante(dataEmpleados[opcion].id);
    console.log("ID CAPTURADO REGISTRO: ");
    console.log(dataEmpleados[opcion].id);
  };

  const onSubmitAddUser = () => {
    //console.log(formData);
    addUser();
  };

  const getPhasesByProyect = async (id) => {
    try {
      const response = await fetch("http://localhost:8080/api/proyectos/"+ id +"/fases/" , {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      setDataFases(json.phases)
      // console.log("FASES");
      // console.log(json.phases);
    } catch (e) {
      // console.log("error mostrado -> " + e);
    }
  };

  const [data2, setData2] = useState([])

  return (
    <>
      <Header />
      <Container className="mt--7" fluid style={{ marginTop: "20%" }}>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Proyectos</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    {/* <th scope="col">#</th>
                    <th scope="col">Responsable</th> */}
                    <th scope="col">ID Proyecto</th>
                    <th scope="col">Nombre Proyecto</th>
                    <th scope="col">Fecha Inicio</th>
                    <th scope="col">Fecha Fin</th>
                    <th scope="col">Participantes</th>
                    <th scope="col">Fases</th>
                    {/* <th scope="col">Modificar</th>
                    <th scope="col">Eliminar</th> */}
                    {/*<th scope="col" />*/}
                  </tr>
                </thead>
                {/* <tbody>{listItems}</tbody> */}
                <>
                  {dataProyects.map((item, i) => (
                    <tr>
                      <th>{item.id}</th>
                      <th>{item.name}</th>
                      <th>{item.dateStart}</th>
                      <th>{item.dateEnd}</th>
                      <th>
                        <Button
                          key={"proyecto" + i}
                          className="btn btn-outline-success"
                          style={{ borderRadius: "100%" }}
                          onClick={() => (
                            toggle6(),
                            setIdProyect(item.id)
                          )}
                        >
                          <strong>Mostrar</strong>
                        </Button>
                        {/* {
                        (dataProyects).map((it) => (
                          <>
                          <h6>{it.Users.id}</h6>
                          <h6>{it.Users.name}</h6>
                          </>
                        ))
                        } */}
                        {/* <h6>HOLA</h6>
                        <h6>HOLA</h6> */}
                      </th>
                       <th>
                        <Button
                          className="btn btn-outline-success"
                          style={{ borderRadius: "100%" }}
                          onClick={() => (toggle5(), getPhasesByProyect(item.id))}
                        >
                          <strong>Gestión de Fases</strong>
                        </Button>
                      </th>
                     {/* <th>
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
                          //onClick={deleteEmp}
                        >
                          <IoIosTrash style={{ fontSize: "25" }} />
                        </Button>
                      </th>*/}
                    </tr>
                  ))}
                </>
              </Table>
              <CardFooter className="py-4">
                <Button
                  className="button btn-success"
                  style={{ color: "black", float: "right" }}
                  onClick={toggle}
                >
                  Registrar Proyecto
                </Button>
                <Button
                  className="button btn-success"
                  style={{ color: "black", float: "left" }}
                  onClick={toggle4}
                >
                  Registrar Área de Trabajo
                </Button>
                <Button
                  className="button btn-success"
                  style={{ color: "black", float: "left" }}
                  onClick={toggle3}
                >
                  Registrar Departamento
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>

      {/* Modal Registrar */}
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Registro de Proyecto</h3>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Nombre del proyecto:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      placeholder="Proyecto"
                      type="text"
                      required="required"
                      onChange={(event) =>
                        dataCathProyect(event.target.value, "name")
                      }
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Seleccione al Responsable:
                    </label>
                    <select onChange={handlePos}>
                      <option value={-1}>Seleccione una opción:</option>
                      {dataEmpleados.map((item, i) => (
                        <option key={"empleado" + i} value={i}>
                          {item.Person.name} {item.Person.lastname}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Fecha de Inicio:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      placeholder="Inicio"
                      type="date"
                      required="required"
                      onChange={(event) =>
                        dataCathProyect(event.target.value, "dateStart")
                      }
                      min={fecha}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">Fecha de Fin:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      placeholder="Inicio"
                      type="date"
                      required="required"
                      onChange={(event) =>
                        dataCathProyect(event.target.value, "dateEnd")
                      }
                      min={fecha}
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
              onClick={() => onSubmitProyect()}
              className="btn btn-success"
              style={{ float: "right" }}
            >
              Registrar
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      {/* Modal Modificar */}
      {/* <Modal isOpen={modal2} toggle={toggle2} size="lg">
        <ModalHeader toggle={toggle2} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Modificar Proyecto</h3>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Nombre del responsable:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inRespName"
                      //value={respon}
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Nombre del proyecto:
                    </label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inProName"
                      //value={proyName}
                      type="text"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <MuiPickersUtilsProvider
                      utils={DateFnsUtils}
                      locale={esLocale}
                    >
                      <label className="form-control-label">
                        Fecha de Inicio
                      </label>
                      <br />
                      <DatePicker
                        // value={fechaSeleccionada}
                        // onChange={setFechaSeleccionada}
                        // minDate={fecha}
                        required="required"
                      />
                    </MuiPickersUtilsProvider>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <MuiPickersUtilsProvider
                      utils={DateFnsUtils}
                      locale={esLocale}
                    >
                      <label className="form-control-label">
                        Fecha de Finalización
                      </label>
                      <br />
                      <DatePicker
                        // value={fechaSeleccionada2}
                        // onChange={setFechaSeleccionada2}
                        // minDate={fecha2}
                        required="required"
                      />
                    </MuiPickersUtilsProvider>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">
                      Área de trabajo:
                    </label>
                    <select id="idAreaW">
                      <option>Plataformas</option>
                      <option>Diseño</option>
                      <option>Servidores</option>
                      <option>Sistemas</option>
                      <option>Mercadotecnia</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Fases:</label>
                    <br />
                    <select id="idFases">
                      <option>Inicio</option>
                      <option>Planeación</option>
                      <option>En proceso</option>
                      <option>Terminado</option>
                      <option>Finalizado</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Participantes:</label>
                    <br />
                    <select id="idFases">
                      <option>Obed Hurtado</option>
                      <option>Noé Martínez</option>
                      <option>Aldahir Gómez</option>
                      <option>Luis Trujillo</option>
                      <option>Kenia Reyes</option>
                    </select>
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
              //onClick={validarCamposModificar}
              className="btn btn-success"
              style={{ float: "right" }}
            >
              Modificar
            </Button>
          </Form>
        </ModalBody>
      </Modal> */}

      {/* Modal Registrar Departamento*/}
      <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <ModalHeader toggle={toggle3} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Registro de Departamentos</h3>
        </ModalHeader>
        <ModalBody>
          <Card className="shadow">
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label className="form-control-label">
                        Nombre del Departamento:
                      </label>
                      <Input
                        className="form-control-alternative descripcion"
                        // id="inArea"
                        //value={respon}
                        type="text"
                        required="required"
                        placeholder="Nombre"
                        onChange={(event) =>
                          dataCath(event.target.value, "name")
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12">
                    <FormGroup>
                      <label className="form-control-label">Descripción:</label>
                      <Input
                        className="form-control-alternative descripcion"
                        //id="inAreaDesc"
                        //value={respon}
                        type="text"
                        required="required"
                        placeholder="Descripción"
                        onChange={(event) =>
                          dataCath(event.target.value, "description")
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <Button
                type="submit"
                color="primary"
                onClick={toggle3}
                style={{ float: "right" }}
              >
                Cerrar
              </Button>
              <Button
                onClick={() => onSubmit2()}
                className="btn btn-success"
                style={{ float: "right" }}
              >
                Registrar
              </Button>
            </Form>
          </Card>
        </ModalBody>
      </Modal>

      {/* Modal Registrar Área de Trabajo*/}
      <Modal isOpen={modal4} toggle={toggle4} size="lg">
        <ModalHeader toggle={toggle4} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Registro de Área de Trabajo</h3>
        </ModalHeader>
        <ModalBody>
          <Card className="shadow">
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <label className="form-control-label">
                        Nombre del Área de Trabajo:
                      </label>
                      <Input
                        className="form-control-alternative descripcion"
                        // id="inArea"
                        //value={respon}
                        type="text"
                        required="required"
                        placeholder="Area"
                        onChange={(event) =>
                          dataCath(event.target.value, "name")
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12">
                    <FormGroup>
                      <label className="form-control-label">
                        Descripción del Área de Trabajo:
                      </label>
                      <Input
                        className="form-control-alternative descripcion"
                        //id="inAreaDesc"
                        //value={respon}
                        type="text"
                        required="required"
                        placeholder="Descripción"
                        onChange={(event) =>
                          dataCath(event.target.value, "description")
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <Button
                type="submit"
                color="primary"
                onClick={toggle4}
                style={{ float: "right" }}
              >
                Cerrar
              </Button>
              <Button
                onClick={() => onSubmit()}
                className="btn btn-success"
                style={{ float: "right" }}
              >
                Registrar
              </Button>
            </Form>
          </Card>
        </ModalBody>
      </Modal>

      {/*FASES*/}
      <Modal isOpen={modal5} toggle={toggle5}>
        <ModalHeader toggle={toggle5} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Fases</h3>
        </ModalHeader>
        <ModalBody>
          <Card className="shadow">
            <div className="pl-lg-4">
              <BotonesAcciones idProyect={idProyect}/>
            </div>
            <Button
              // type="submit"
              className="btn btn-danger"
              onClick={toggle5}
              style={{ maxWidth: "100px", marginLeft: "10%" }}
            >
              Cerrar
            </Button>
            <br />
          </Card>
        </ModalBody>
      </Modal>

      {/* PARTICIPANTES DE PROYECTO */}
      <Modal isOpen={modal6} toggle={toggle6} size="lg">
        <ModalHeader toggle={toggle6} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Participantes:</h3>
        </ModalHeader>
        <ModalBody>
          <Card className="shadow">
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>

                        {/*<th scope="col" />*/}
                      </tr>
                    </thead>
                    <tbody>
                      {
                      (dataProyects).map((item2, i) => (
                       <>
                          {
                            (item2.Users).map((it,i) => (
                              <tr>
                              <td><h2>{it.id}</h2></td>
                              <td><h2>{it.email}</h2></td>
                              </tr>
                            ))
                          }
                        </>
                      ))
                      }

                      {/* <tr>
                        <td>1</td>
                        <td>DEFAULT</td>
                      </tr> */}
                      {/* {validarContenido} */}

                      {/* {(dataParticipantesID.length === undefined) ? (
                        <tr>
                          <td>1</td>
                          <td>DEFAULT</td>
                        </tr>
                      ) : (
                        listado
                      )} */}
                    </tbody>
                  </Table>
                </Row>
              </div>
            </Form>
            <CardFooter>
              <Button
                type="submit"
                color="primary"
                onClick={toggle6}
                style={{ float: "right", margin: "20px" }}
              >
                Cerrar
              </Button>
              {/* <Button
                onClick={() => onSubmit()}
                className="btn btn-success"
                style={{ float: "right" }}
              >
                Registrar
              </Button> */}
              <Button
                className="button btn-info"
                style={{ margin: "20px", float: "right" }}
                onClick={toggle7}
              >
                Agregar Participante
              </Button>
            </CardFooter>
          </Card>
        </ModalBody>

        {/* SELCCIÓN DE NUEVO PARTICIPANTE */}
      </Modal>
      
      {/* AGREGAR PARTICIPANTES */}
      <Modal isOpen={modal7} toggle={toggle7} >
        <ModalHeader toggle={toggle7} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Agregar Participante:</h3>
        </ModalHeader>
        <ModalBody>
          <Card className="shadow">
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <label className="form-control-label">
                        Seleccione al participante nuevo:
                      </label>
                      <select onChange={handlePos2}>
                        <option value={-1}>Seleccione una opción:</option>
                        {dataEmpleados.map((item, i) => (
                          <option key={"empleado" + i} value={i}>
                            {item.Person.name} {item.Person.lastname}
                          </option>
                        ))}
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Form>
            <CardFooter>
              <Button
                color="danger"
                onClick={toggle7}
                style={{ float: "right", margin: "20px" }}
              >
                Cerrar
              </Button>
              <Button
                className="btn btn-success"
                onClick={() => onSubmitAddUser()}
                style={{ float: "right", margin: "20px" }}
              >
                Agregar
              </Button>
            </CardFooter>
          </Card>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TableProjects;
