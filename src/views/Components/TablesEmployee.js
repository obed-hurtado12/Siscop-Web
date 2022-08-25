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
import "./style.css";

const TablesEmployee = () => {
  const history = useHistory();

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [modal2, setModal2] = React.useState(false);
  const toggle2 = () => setModal2(!modal2);
  const [modal3, setModal3] = React.useState(false);
  const toggle3 = () => setModal3(!modal3);

  const [data, setData] = React.useState([]);
  const [formData, setFormData] = React.useState(defaultFormValues());
  const [formModificar, setFormModificar] = React.useState(
    defaultFormValues2()
  );

  const [formHorarios, setFormHorarios] = React.useState(defaultFormHorarios());
  const [isVisible, setIsVisible] = React.useState(false);
  const [fechaSeleccionada, setFechaSeleccionada] = React.useState(new Date());
  var fecha = new Date();

  const [dataHour, setDataHour] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const [dataArea, setdataArea] = useState([]);
  const [dataDepa, setDataDepa] = useState([]);
  const [dataRoles, setDataRoles] = useState([])

  const [defaultID, setDefaultID] = useState("");
  const [defaultName, setDefaultName] = useState("");
  const [defaultLastname, setDefaultLastname] = useState("");
  const [defaultSurname, setDefaultSurname] = useState("");
  const [defaultPhone, setDefaultPhone] = useState("");
  const [defaultCellPhone, setDefaultCellPhone] = useState("");
  const [defaultEmail, setDefaultEmail] = useState("");
  const [defaultPassword, setdefaultPassword] = useState("");
  const [defaultRoleID, setDefaultRoleID] = useState("");
  const [defaultRoleName, setDefaultRoleName] = useState("");
  const [defaultWorkAreaID, setDefaultWorkAreaID] = useState("");
  const [defaultWorkAreName, setDefaultWorkAreaName] = useState("");
  const [defaultDepaID, setDefaultDepaID] = useState("");
  const [defaultDepaName, setDefaultDepaName] = useState("");
  const [defaultDepaDesc, setDefaultDepaDesc] = useState("");
  const [defaultWorkHScheduleID, setDefaultWorkHScheduleID] = useState("");
  const [defaultWorkHScheduleName, setDefaultWorkHScheduleName] = useState("");

  const [newAreaID, setNewAreaID] = useState("");
  const [newDepaID, setNewDepaID] = useState("");
  const [newHorarioID, setNewHorarioID] = useState("");

  const [newArea, setNewArea] = useState(1);
  const [newDepa, setNewDepa] = useState(1);
  const [newHorario, setNewHorario] = useState(2);
  const [newRole, setNewRole] = useState(2)

  const getAreas = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/areas-trabajo/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      setdataArea(json.workAreas);
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
      setDataDepa(json.departaments);
      // console.log("DEPARTAMENTOS:");
      // console.log(json.departaments);
    } catch (e) {
      //console.log("error mostrado -> " + e);
    }
  };
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
      // console.log("MUESTRA DE DATOS:");
      // console.log(json.user);
    } catch (e) {
      //console.log("error mostrado -> " + e);
    }
  };
  const getRoles = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/roles/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await response.json();
      setDataRoles(json.roles);
      console.log("ROLES:")
      console.log(json.roles);
    } catch (e) {
      // console.log("error mostrado -> " + e);
    }
  };

  useEffect(() => {
    getEmpleados();
    getEmpleado();
    getHorarios();
    getAreas();
    getDepas();
    getRoles();
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
      setDefaultID(json.Person.id);
      setDefaultName(json.Person.name);
      setDefaultLastname(json.Person.lastname);
      setDefaultSurname(json.Person.surname);
      setDefaultPhone(json.Person.phone);
      setDefaultCellPhone(json.Person.cellphone);
      setDefaultEmail(json.email);
      setdefaultPassword(json.password);
      setDefaultRoleID(json.Role.id);
      setDefaultRoleName(json.Role.name);
      setDefaultWorkAreaID(json.Work_Area.id);
      setDefaultWorkAreaName(json.Work_Area.name);
      setDefaultDepaID(json.Departament.id);
      setDefaultDepaName(json.Departament.name);
      setDefaultDepaDesc(json.Departament.description);
      setDefaultWorkHScheduleID(json.Work_Schedule.id);
      setDefaultWorkHScheduleName(json.Work_Schedule.name);
      // console.log("BIENVENIDO PARSERO");
      // console.log(json);
    } catch (e) {
      // console.log("error mostrado -> " + e);
    }
  };
  const listado = data.map((infoM) => (
    <tr>
      <th>{infoM.Role.name}</th>
      <th>{infoM.Person.name}</th>
      <th>
        {infoM.Person.lastname} {infoM.Person.surname}
      </th>
      <th>{infoM.email}</th>
      <th>{infoM.Person.phone}</th>
      <th>{infoM.Person.cellphone}</th>
      <th>{infoM.Work_Schedule.name}</th>
      <th className="text-center">
        {infoM.Work_Schedule.hourStart} {infoM.Work_Schedule.hourEnd}
      </th>
      <th className="text-center">
        {infoM.Work_Schedule.hourStartSaturday}{" "}
        {infoM.Work_Schedule.hourEndSaturday}
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
          roleId: newRole,
          work_area_id: newArea,
          departamentId: newDepa,
          work_schedule_id: newHorario,
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
      //  console.log("error mostrado -> " + e);
    }
  };
  function defaultFormValues() {
    return {
      id: "",
      name: "",
      lastname: "",
      surname: "",
      phone: "",
      cellphone: "",
      email: "",
      password: "",
      roleId: "",
      work_area_id: "",
      departamentId: "",
      work_schedule_id: "",
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

  const handleAreaRegister = function (e) {
    const opcion = e.target.value;
    setNewArea(dataArea[opcion].id);
    // console.log("ID CAPTURADO AREA: ");
    // console.log(dataArea[opcion].id);
  };

  const handleDepaRegister = function (e) {
    const opcion = e.target.value;
    setNewDepa(dataDepa[opcion].id);
    // console.log("ID CAPTURADO DEPA: ");
    // console.log(opcion);
  };

  const handleHorarioRegister = function (e) {
    const opcion = e.target.value;
    setNewHorario(dataHour[opcion].id);
    // console.log("ID CAPTURADO HORARIO: ");
    // console.log(opcion);
  };

  const handleRolRegister = function (e) {
    const opcion = e.target.value;
    setNewRole(dataRoles[opcion].id);
    // console.log("ID CAPTURADO HORARIO: ");
    // console.log(opcion);
  };


  //MODIFICAR USUARIO
  const updateEmployee = async () => {
    try {
      await fetch("http://localhost:8080/api/usuarios/" + defaultID, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: defaultName,
          lastname: defaultLastname,
          surname: defaultSurname,
          phone: defaultPhone,
          cellphone: defaultCellPhone,
          email: defaultEmail,
          password: defaultPassword,
          roleId: defaultRoleID,
          work_area_id: newAreaID,
          departamentId: newDepaID,
          work_schedule_id: newHorarioID,
        }),
      }).then(() => {
        setIsVisible(false);
        swal({
          title: "Modificación Exitosa",
          icon: "success",
          button: "Aceptar",
        });
        window.location.reload();
      });
    } catch (e) {
      //  console.log("error mostrado -> " + e);
    }
  };

  function defaultFormValues2() {
    return {
      id: defaultID,
      name: defaultName,
      lastname: defaultLastname,
      surname: defaultSurname,
      phone: defaultPhone,
      cellphone: defaultCellPhone,
      email: defaultEmail,
      roleId: defaultRoleID,
      work_area_id: defaultWorkAreaID,
      departamentId: defaultDepaID,
      work_schedule_id: defaultWorkHScheduleID,
    };
  }

  const dataCathModify = (event, type) => {
    setFormModificar({ ...formModificar, [type]: event });
    //console.log({ formData });
  };

  const onSubmitModify = () => {
    // if (
    //   formModificar.name &&
    //   formModificar.lastname &&
    //   formModificar.surname &&
    //   formModificar.phone &&
    //   formModificar.cellphone &&
    //   formModificar.email
    // ) {
    updateEmployee();
    // } else {
    //   console.log("Error en la modificación");
    //   swal({
    //     title: "Error / Faltan campos por llenar ",
    //     icon: "warning",
    //     button: "Aceptar",
    //   });
    // }
  };

  const handleArea = function (e) {
    const opcion = e.target.value;
    setNewAreaID(dataArea[opcion].id);
    // console.log("ID CAPTURADO AREA: ");
    // console.log(dataArea[opcion].id);
  };

  const handleDepa = function (e) {
    const opcion = e.target.value;
    setNewDepaID(dataDepa[opcion].id);
    // console.log("ID CAPTURADO DEPA: ");
    // console.log(opcion);
  };

  const handleHorario = function (e) {
    const opcion = e.target.value;
    setNewHorarioID(dataHour[opcion].id);
    // console.log("ID CAPTURADO HORARIO: ");
    // console.log(opcion);
  };

  //REGISTRO DE HORARIOS
  const createHorario = async () => {
    try {
      await fetch("http://localhost:8080/api/horarios-trabajo/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formHorarios.name,
          hourStart: formHorarios.hourStart,
          hourEnd: formHorarios.hourEnd,
          hourStartSaturday: formHorarios.hourStartSaturday,
          hourEndSaturday: formHorarios.hourEndSaturday,
        }),
      }).then(() => {
        //setIsVisible(false);
        swal({
          title: "Registro Exitoso",
          icon: "success",
          button: "Aceptar",
        });
        window.location.reload();
      });
    } catch (e) {
      console.log(e);
    }
  };
  function defaultFormHorarios() {
    return {
      name: "",
      hourStart: "",
      hourEnd: "",
      hourStartSaturday: "",
      hourEndSaturday: "",
    };
  }
  const dataCath2 = (event, type) => {
    setFormHorarios({ ...formHorarios, [type]: event });
  };
  const onSubmitHour = () => {
    //console.log(formData);
    if (
      formHorarios.name &&
      formHorarios.hourStart &&
      formHorarios.hourEnd &&
      formHorarios.hourStartSaturday &&
      formHorarios.hourStartSaturday
    ) {
      setIsVisible(true);
      createHorario();
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
                    <th scope="col">Rol</th>
                    <th scope="col">Nombre(s)</th>
                    <th scope="col">Apellido(s)</th>
                    <th scope="col">Correo Electrónico</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Teléfono Celular</th>
                    <th scope="col">Tipo de Horario</th>
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
                <Button
                  className="button btn-success"
                  style={{ color: "black", float: "left" }}
                  onClick={toggle3}
                >
                  Registrar Horario
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
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Seleccione el Rol del empleado:
                    </label>
                    <select onChange={handleRolRegister}>
                      <option value={-1}>Seleccione una opción:</option>
                      {dataRoles.map((item, i) => (
                        <option key={"area" + i} value={i}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Seleccione la nueva Area de Trabajo:
                    </label>
                    <select onChange={handleAreaRegister}>
                      <option value={-1}>Seleccione una opción:</option>
                      {dataArea.map((item, i) => (
                        <option key={"area" + i} value={i}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Seleccione el nuevo Departamento:
                    </label>
                    <select onChange={handleDepaRegister}>
                      <option value={-1}>Seleccione una opción:</option>
                      {dataDepa.map((item, i) => (
                        <option key={"departamento" + i} value={i}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Seleccione el Horario:
                    </label>
                    <select
                     onChange={handleHorarioRegister}
                    >
                      <option value={-1}>Seleccione una opción:</option>
                      {dataHour.map((item, i) => (
                        <option key={"horario" + i} value={i}>
                          {item.name}
                        </option>
                      ))}
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
          <h3 className="mb-0">
            Modificar al empleado:{" "}
            <strong>
              {defaultName} {defaultLastname} {defaultSurname}
            </strong>
          </h3>
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
                      //  onChange={(event) => dataCathModify(event.target.value, "name")}
                      onChange={(event) => setDefaultName(event.target.value)}
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
                      //   dataCathModify(event.target.value, "lastname")
                      // }
                      value={defaultLastname}
                      onChange={(event) =>
                        setDefaultLastname(event.target.value)
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
                      value={defaultSurname}
                      type="text"
                      // onChange={(event) =>
                      //   dataCathModify(event.target.value, "surname")
                      // }
                      onChange={(event) =>
                        setDefaultSurname(event.target.value)
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
                      value={defaultPhone}
                      type="text"
                      // onChange={(event) =>
                      //   dataCathModify(event.target.value, "phone")
                      // }
                      onChange={(event) => setDefaultPhone(event.target.value)}
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
                      //   dataCathModify(event.target.value, "cellphone")
                      // }
                      onChange={(event) =>
                        setDefaultCellPhone(event.target.value)
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
                      value={defaultEmail}
                      // onChange={(event) =>
                      //   dataCathModify(event.target.value, "email")
                      // }
                      onChange={(event) => setDefaultEmail(event.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Area de Trabajo Actual:
                    </label>
                    <Table
                      className="align-items-center table-flush tableStyle"
                      responsive
                    >
                      <tbody>
                        <td>{defaultWorkAreName}</td>
                      </tbody>
                    </Table>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Seleccione la nueva Area de Trabajo:
                    </label>
                    <select onChange={handleArea}>
                      <option value={-1}>Seleccione una opción:</option>
                      {dataArea.map((item, i) => (
                        <option key={"area" + i} value={i}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Departamento Actual:
                    </label>
                    <Table
                      className="align-items-center table-flush tableStyle"
                      responsive
                    >
                      <tbody>
                        <td>{defaultDepaName}</td>
                      </tbody>
                    </Table>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Seleccione el nuevo Departamento:
                    </label>
                    <select onChange={handleDepa}>
                      <option value={-1}>Seleccione una opción:</option>
                      {dataDepa.map((item, i) => (
                        <option key={"departamento" + i} value={i}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Horario Actual:
                    </label>
                    <Table
                      className="align-items-center table-flush tableStyle"
                      responsive
                    >
                      <tbody>
                        <td>{defaultWorkHScheduleName}</td>
                      </tbody>
                    </Table>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">
                      Seleccione el nuevo Horario:
                    </label>
                    <select
                      /*onClick={handleHorario}*/ onChange={handleHorario}
                    >
                      <option value={-1}>Seleccione una opción:</option>
                      {dataHour.map((item, i) => (
                        <option key={"horario" + i} value={i}>
                          {item.name}
                        </option>
                      ))}
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
              onClick={() => onSubmitModify()}
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

      {/* Modal Registrar HORARIOS*/}
      <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <ModalHeader toggle={toggle3} style={{ backgroundColor: "#8ADFE2" }}>
          <h3 className="mb-0">Registro de Horarios</h3>
        </ModalHeader>
        <ModalBody>
          <Card className="shadow">
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <br />
                      <label className="form-control-label">
                        Nombre del Horario:
                      </label>
                      <Input
                        className="form-control-alternative descripcion"
                        type="text"
                        required="required"
                        placeholder="Nombre"
                        onChange={(event) =>
                          dataCath2(event.target.value, "name")
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label">
                        Hora Entrada (LUN/VIE):
                      </label>
                      <Input
                        className="form-control-alternative descripcion"
                        //id="inAreaDesc"
                        //value={respon}
                        type="time"
                        required="required"
                        onChange={(event) =>
                          dataCath2(event.target.value, "hourStart")
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label">
                        Hora Salida (LUN/VIE):
                      </label>
                      <Input
                        className="form-control-alternative descripcion"
                        type="time"
                        required="required"
                        onChange={(event) =>
                          dataCath2(event.target.value, "hourEnd")
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label">
                        Hora Entrada (SAB):
                      </label>
                      <Input
                        className="form-control-alternative descripcion"
                        //id="inAreaDesc"
                        //value={respon}
                        type="time"
                        required="required"
                        onChange={(event) =>
                          dataCath2(event.target.value, "hourStartSaturday")
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label">
                        Hora Salida (SAB):
                      </label>
                      <Input
                        className="form-control-alternative descripcion"
                        //id="inAreaDesc"
                        //value={respon}
                        type="time"
                        required="required"
                        onChange={(event) =>
                          dataCath2(event.target.value, "hourEndSaturday")
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
                onClick={() => onSubmitHour()}
                className="btn btn-success"
                style={{ float: "right" }}
              >
                Registrar
              </Button>
            </Form>
          </Card>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TablesEmployee;