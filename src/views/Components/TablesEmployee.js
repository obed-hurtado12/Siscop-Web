import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
  ModalFooter,
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
import Carrusel from "components/Carusell/Carrusel";
import React, { useEffect, useState } from "react";
import { IoIosClipboard, IoIosTrash } from "react-icons/io";
import BtnModificar from "views/Tools/BtnModificar";
import BtnEliminar from "views/Tools/BtnEliminar";
import { useHistory } from "react-router-dom";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import Select from "react-select";

const TablesEmployee = () => {
  const history = useHistory();

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [modal2, setModal2] = React.useState(false);
  const toggle2 = () => setModal2(!modal2);
  
  const [data, setData] = React.useState([]);
  const [formData, setFormData] = React.useState(defaultFormValues());
  const [isVisible, setIsVisible] = React.useState(false);
  const [fechaSeleccionada, setFechaSeleccionada] = React.useState(new Date());
  var fecha = new Date();

  const [dataHour, setDataHour] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const [defaultName, setDefaultName] = useState("")
  const [defaultLastname, setDefaultLastname] = useState("")
  const [defaultSurname, setDefaultSurname] = useState("")
  const [defaultPhone, setDefaultPhone] = useState("")
  const [defaultCellPhone, setDefaultCellPhone] = useState("")
  const [defaultEmail, setDefaultEmail] = useState("")

  const getHorarios = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/horarios-trabajo/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await response.json();
      setDataHour(json.workSchedules);
      // console.log("HORARIOS:")
      // console.log(json.workSchedules);
    } catch (e) {
      // console.log("error mostrado -> " + e);
    }
  };
  const getEmpleados = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/usuarios/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      setData(json.user);
      //console.log(json.user);
    } catch (e) {
      //console.log("error mostrado -> " + e);
    }
  };
  useEffect(() => {
    getEmpleados();
    getEmpleado();
    getHorarios();
    // console.log("Arreglo Obtenido " + data);
  }, []);

  const getEmpleado = async (id) => {
    try {
      const response = await fetch("http://localhost:8080/api/usuarios/" + id, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      setData2(json);
      setDefaultName(json.Person.name)
      setDefaultLastname(json.Person.lastname)
      setDefaultSurname(json.Person.surname)
      setDefaultPhone(json.Person.phone)
      setDefaultCellPhone(json.Person.cellphone)
      setDefaultEmail(json.email)
      console.log("BIENVENIDO PARSERO")
      console.log(json);
    } catch (e) {
      //console.log("error mostrado -> " + e);
    }
  };

  const listado = data.map((infoM) => (
    <tr>
      <th>{infoM.Person.name}</th>
      <th>
        {infoM.Person.lastname} {infoM.Person.surname}
      </th>
      <th>{infoM.email}</th>
      <th>{infoM.Person.phone}</th>
      <th>{infoM.Person.cellphone}</th>
      <th className="text-center">
        {/* {infoM.Work_Schedule.hourStart} {infoM.Work_Schedule.hourEnd} */}
      </th>
      <th className="text-center">
        {/* {infoM.Work_Schedule.hourStartSaturday}{" "}
        {infoM.Work_Schedule.hourEndSaturday} */}
      </th>
      <th>
      <Button
        className="btn btn-outline"
        style={{ borderRadius: "100%", color: "#e09b1b" }}
        // onClick={deleteEmp}
        onClick={() => (toggle2(), getEmpleado(infoM.Person.id))}
      >
        <IoIosClipboard style={{ fontSize: "25" }} />
      </Button>
      </th>
      <th>
        <BtnEliminar id={infoM.Person.id} />
      </th>
    </tr>
  ));

  const createEmployee = async () => {
    try {
      await fetch("http://localhost:8080/api/usuarios/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          lastname: formData.lastname,
          surname: formData.surname,
          phone: formData.phone,
          cellphone: formData.cellphone,
          email: formData.email,
          password: formData.password,
          roleId: 2,
        }),
      }).then(() => {
        setIsVisible(false);
        //history.push("/admin/empleados");
        // window.location.reload()
        swal({
          title: "Registro Exitoso",
          icon: "success",
          button: "Aceptar",
        });
        window.location.reload();
      });
    } catch (e) {
      // console.log(e);
    }
  };

  function defaultFormValues() {
    return {
      id: 6,
      name: "",
      lastname: "",
      surname: "",
      phone: "",
      cellphone: "",
      email: "",
      password: "",
      roleId: "2",
    };
  }

  const dataCath = (event, type) => {
    setFormData({ ...formData, [type]: event });
    //console.log({ formData });
  };

  const onSubmit = () => {
    //console.log(formData);
    if (
      formData.name &&
      formData.lastname &&
      formData.surname &&
      formData.phone &&
      formData.cellphone &&
      formData.email &&
      formData.password
    ) {
      setIsVisible(true);
      createEmployee();
    } else {
      console.log("Te Faltan Campos por llenar");
      swal({
        title: "Faltan campos por llenar",
        icon: "warning",
        button: "Aceptar",
      });
    }
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid style={{ marginTop: "20%" }}>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Empleados</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombre(s)</th>
                    <th scope="col">Apellido(s)</th>
                    <th scope="col">Correo Electrónico</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Teléfono Celular</th>
                    <th scope="col">Horario Entrada y Salida</th>
                    <th scope="col">Horario Entrada y Salida Sábado</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Eliminar</th>
                  </tr>
                </thead>
                <tbody>{listado}</tbody>
              </Table>

              <CardFooter className="py-4">
                <Button
                  className="button btn-success"
                  style={{ color: "black", marginLeft: "80%" }}
                  onClick={toggle}
                >
                  Registrar Empleado
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>

      {/* Modal Registro */}
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Nuevo Empleado</h3>
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
                      //id="inName"
                      placeholder="Nombre"
                      type="text"
                      onChange={(event) => dataCath(event.target.value, "name")}
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
                      //id="inApellidoP"
                      placeholder="Apellido Paterno"
                      type="text"
                      onChange={(event) =>
                        dataCath(event.target.value, "lastname")
                      }
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
                      //id="inApellidoM"
                      placeholder="Apellido Materno"
                      type="text"
                      onChange={(event) =>
                        dataCath(event.target.value, "surname")
                      }
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Teléfono:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      //id="inPhone"
                      placeholder="Teléfono"
                      type="text"
                      onChange={(event) =>
                        dataCath(event.target.value, "phone")
                      }
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
                      //id="inCellPhone"
                      placeholder="Celular"
                      type="text"
                      onChange={(event) =>
                        dataCath(event.target.value, "cellphone")
                      }
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
                      //id="inEmail"
                      placeholder="Email"
                      type="email"
                      onChange={(event) =>
                        dataCath(event.target.value, "email")
                      }
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Contraseña:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      //id="inPass"
                      placeholder="Contraseña"
                      type="password"
                      onChange={(event) =>
                        dataCath(event.target.value, "password")
                      }
                    ></Input>
                  </FormGroup>
                </Col>
                {/* <Col lg="4" style={{ marginTop: "-25px" }}>
                  <br />
                  <FormGroup>
                    <label className="form-control-label">Horario:</label>
                    <Select>

                    </Select>
                    
                  </FormGroup>
                </Col> */}
                {/* INPUT HORAS */}

                {/* <Col lg="6">
                  <FormGroup>
                    <MuiPickersUtilsProvider
                      utils={DateFnsUtils}
                      locale={esLocale}
                    >
                      <label className="form-control-label">Hora:</label>
                      <br />
                      <TimePicker
                        onChange={setFechaSeleccionada}
                        required="required"
                      />
                    </MuiPickersUtilsProvider>
                  </FormGroup>
                </Col> */}
                {/* {console.log(dataHour[0])} */}
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
              onClick={() => onSubmit()}
              className="btn btn-success"
              style={{ float: "right" }}
            >
              Registrar
            </Button>
            <br />
            <br />
          </Form>
        </ModalBody>
      </Modal>

      {/* Modal Modificar */}
      <Modal isOpen={modal2} toggle={toggle2} size="lg">
        <ModalHeader toggle={toggle2} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Modificar al empleado: {defaultName}</h3>
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
                      //id="inName"
                      placeholder="Nombre"
                      type="text"
                      value={defaultName}
                      // onChange={(event) => dataCath(event.target.value, "name")}
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
                      //id="inApellidoP"
                      placeholder="Apellido Paterno"
                      type="text"
                      // onChange={(event) =>
                      //   dataCath(event.target.value, "lastname")
                      // }
                      value={defaultLastname}
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
                      //id="inApellidoM"
                      placeholder="Apellido Materno"
                      value={defaultSurname}
                      type="text"
                      // onChange={(event) =>
                      //   dataCath(event.target.value, "surname")
                      // }
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Teléfono:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      //id="inPhone"
                      placeholder="Teléfono"
                      value={defaultPhone}
                      type="text"
                      // onChange={(event) =>
                      //   dataCath(event.target.value, "phone")
                      // }
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
                      //id="inCellPhone"
                      placeholder="Celular"
                      value={defaultCellPhone}
                      type="text"
                      // onChange={(event) =>
                      //   dataCath(event.target.value, "cellphone")
                      // }
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
                      //id="inEmail"
                      placeholder="Email"
                      type="email"
                      value={defaultEmail}
                      // onChange={(event) =>
                      //   dataCath(event.target.value, "email")
                      // }
                    />
                  </FormGroup>
                </Col>
                {/* <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Contraseña:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      //id="inPass"
                      placeholder="Contraseña"
                      type="password"
                      onChange={(event) =>
                        dataCath(event.target.value, "password")
                      }
                    ></Input>
                  </FormGroup>
                </Col>
                */}
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
              onClick={() => onSubmit()}
              className="btn btn-success"
              style={{ float: "right" }}
            >
              Registrar
            </Button>
            <br />
            <br />
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TablesEmployee;
