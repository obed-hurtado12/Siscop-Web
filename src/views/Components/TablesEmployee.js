
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
import React, { useEffect } from "react";
import { IoIosClipboard, IoIosTrash } from "react-icons/io";
import BtnModificar from "views/Tools/BtnModificar";
import BtnEliminar from "views/Tools/BtnEliminar";
import { useHistory } from "react-router-dom";

const Tables = () => {
  const history = useHistory();
  const [mId, setMId] = React.useState(6);
  const [mName, setMName] = React.useState("");
  const [mSurname, setMSurname] = React.useState("");
  const [mLastName, setMLastName] = React.useState("");
  const [mPhone, setMPhone] = React.useState("");
  const [mCellPhone, setMCellPhone] = React.useState("");
  const [mEmail, setMEmail] = React.useState("");
  const [mPass, setMPass] = React.useState("");
  const [mRol, setMRol] = React.useState(2);

  const [empleado, setEmpleado] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [modal2, setModal2] = React.useState(false);
  const toggle2 = () => setModal2(!modal2);

  // const empleados = [
  //   {
  //     id: 1,
  //     name: "Obed Ariel",
  //     surname: "Hurtado",
  //     lastname: "Hernández",
  //     workArea: "Sistemas",
  //     email: "oahh12345678@gmail.com",
  //     phone: "7773851862",
  //     cellPhone: "7771305580",
  //   },
  //   {
  //     id: 2,
  //     name: "Noé",
  //     surname: "Martínez",
  //     lastname: "Flores",
  //     workArea: "Servidores",
  //     email: "noemtz@gmail.com",
  //     phone: "7771234567",
  //     cellPhone: "7771234567",
  //   },
  //   {
  //     id: 3,
  //     name: "Mario",
  //     surname: "Rodríguez",
  //     lastname: "González",
  //     workArea: "Plataformas",
  //     email: "mariordz@gmail.com",
  //     phone: "7777654321",
  //     cellPhone: "7777654321",
  //   },
  //   {
  //     id: 4,
  //     name: "Aldahir",
  //     surname: "Gómez",
  //     lastname: "García",
  //     workArea: "Mercadotecnia",
  //     email: "aldahirgmz@gmail.com",
  //     phone: "7774242077",
  //     cellPhone: "7774242077",
  //   },
  // ];

  const deleteEmp = () => {
    let btn = window.confirm("¿Seguro que deseas eliminar?");
    if (!btn) {
      swal({
        title: "Se canceló la eliminación",
        icon: "warning",
        button: "Aceptar",
      });
    } else {
      swal({
        title: "Se eliminó el empleado",
        icon: "success",
        button: "Aceptar",
      });
      setEmpleado(false);
    }
  };

  // const listItems = empleados.map((infoM) => (
  //   <tr>
  //     <th>{infoM.id}</th>
  //     <th>{infoM.name}</th>
  //     <th>
  //       {infoM.surname}
  //       {""}
  //       {infoM.lastname}
  //     </th>
  //     <th>{infoM.workArea}</th>
  //     <th>{infoM.email}</th>
  //     <th>{infoM.phone}</th>
  //     <th>{infoM.cellPhone}</th>
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

  const validarCampos = () => {
    const inName = document.getElementById("inName").value;
    const inApellidoP = document.getElementById("inApellidoP").value;
    const inApellidoM = document.getElementById("inApellidoM").value;
    const inEmail = document.getElementById("inEmail").value;
    const inPass = document.getElementById("inPass").value;
    const inPhone = document.getElementById("inPhone").value;
    const inCellPhone = document.getElementById("inCellPhone").value;
    const inMonitor = document.getElementById("inMonitor").value;
    const inRespons = document.getElementById("inRespons").value;
    const idAreaW = document.getElementById("idAreaW").value;
    const idDepa = document.getElementById("idDepa").value;
    if (
      inName == "" ||
      inName == null ||
      inApellidoP == "" ||
      inApellidoP == null ||
      inEmail == "" ||
      inEmail == null ||
      inPass == "" ||
      inPass == null ||
      inPhone == "" ||
      inPhone == null ||
      inCellPhone == "" ||
      inCellPhone == null ||
      inMonitor == "" ||
      inMonitor == null ||
      inRespons == "" ||
      inRespons == null
    ) {
      swal({
        title: "Faltan Campos por llenar",
        icon: "warning",
        button: "Aceptar",
      });
    } else {
      swal({
        title: "Registro Exitoso",
        icon: "success",
        button: "Aceptar",
      });
    }
  };

  const validarCamposModificar = () => {
    const inName = document.getElementById("inNameM").value;
    const inApellidoP = document.getElementById("inApeP").value;
    const inApellidoM = document.getElementById("inApeM").value;
    const inEmail = document.getElementById("inEmailM").value;
    const inPass = document.getElementById("inPassM").value;
    const inPhone = document.getElementById("inPhoneM").value;
    const inCellPhone = document.getElementById("inCellPhoneM").value;
    const inMonitor = document.getElementById("inMonitorM").value;
    const inRespons = document.getElementById("inResponsM").value;
    const idAreaW = document.getElementById("idAreaWM").value;
    const idDepa = document.getElementById("idDepaM").value;

    if (
      inName == "" ||
      inName == null ||
      inApellidoP == "" ||
      inApellidoP == null ||
      inApellidoM == "" ||
      inApellidoM == null ||
      inEmail == "" ||
      inEmail == null ||
      inPass == "" ||
      inPass == null ||
      inPhone == "" ||
      inPhone == null ||
      inCellPhone == "" ||
      inCellPhone == null ||
      inMonitor == "" ||
      inMonitor == null ||
      inRespons == "" ||
      inRespons == null
    ) {
      swal({
        title: "Error al modificar",
        icon: "warning",
        button: "Aceptar",
      });
    } else {
      swal({
        title: "Modificación Exitosa",
        icon: "success",
        button: "Aceptar",
      });
    }
  };

  // const [shown, setShown] = React.useState(false);
  // const switchShown = () => setShown(!shown);
  const [data, setData] = React.useState([]);
  const [formData, setFormData] = React.useState(defaultFormValues());
  const [isVisible, setIsVisible] = React.useState(false);

  const getEmpleado = async () => {
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
    getEmpleado();
    //console.log("Arreglo Obtenido " + data);
  }, []);

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
        {infoM.Work_Schedule.hourStart} {infoM.Work_Schedule.hourEnd}
      </th>
      <th className="text-center">
        {infoM.Work_Schedule.hourStartSaturday}{" "}
        {infoM.Work_Schedule.hourEndSaturday}
      </th>
      <th>
        <BtnModificar id={infoM.Person.id} />
      </th>
      <th>
        <BtnEliminar id={infoM.Person.id} />
      </th>
    </tr>
  ));

  const handleRoute = () => {
    history.push("/admin/empleados");
  };

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
          roleId: 2
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
      });
    } catch (e) {
      console.log(e);
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
      roleId: "2"
    };
  }

  const dataCath = (event, type) => {
    setFormData({ ...formData, [type]: event });
    console.log({ formData });
  };

  const onSubmit = () => {
    console.log(formData);
    if (
      (formData.name) &&
      (formData.lastname) &&
      (formData.surname) &&
      (formData.phone) &&
      (formData.cellphone) &&
      (formData.email) &&
      (formData.password)
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
                {/* <tbody>{listItems}</tbody> */}
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

        {/* <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Card tables</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/bootstrap.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Argon Design System
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,500 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip731399078"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-1-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731399078"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip491083084"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-2-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip491083084"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip528540780"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-3-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip528540780"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip237898869"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip237898869"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-warning"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/angular.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Angular Now UI Kit PRO
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$1,800 USD</td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-success" />
                        completed
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip188614932"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-1-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip188614932"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip66535734"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-2-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip66535734">
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip427561578"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-3-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip427561578"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip904098289"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip904098289"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/sketch.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Black Dashboard</span>
                        </Media>
                      </Media>
                    </th>
                    <td>$3,150 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        delayed
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip707904950"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-1-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip707904950"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip353988222"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-2-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip353988222"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip467171202"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-3-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip467171202"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip362118155"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip362118155"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">72%</span>
                        <div>
                          <Progress
                            max="100"
                            value="72"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/react.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            React Material Dashboard
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$4,400 USD</td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-info" />
                        on schedule
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip226319315"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-1-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip226319315"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip711961370"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-2-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip711961370"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip216246707"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-3-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip216246707"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip638048561"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip638048561"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90%</span>
                        <div>
                          <Progress
                            max="100"
                            value="90"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/vue.jpg").default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Vue Paper UI Kit PRO
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,200 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        completed
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip781594051"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-1-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip781594051"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip840372212"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-2-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip840372212"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip497647175"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-3-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip497647175"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip951447946"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip951447946"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row> */}
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
                      onChange={(event) =>
                        dataCath(event.target.value, "name")
                      }
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
                {/* <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Responsable:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inRespons"
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
                      id="inMonitor"
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
                    <label className="form-control-label">Departamento:</label>
                    <select id="idDepa">
                      <option>Marketing</option>
                      <option>Recursos Humanos</option>
                      <option>Comercial</option>
                      <option>Sistemas</option>
                      <option>Mercadotecnia</option>
                    </select>
                  </FormGroup>
                </Col> */}
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
              // onClick={() => alertInfo()}
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
                      value={mName}
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
                      value={mSurname}
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
                      value={mLastName}
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
                      value={mEmail}
                      type="email"
                      required="required"
                    />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label className="form-control-label">Contraseña:</label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="inPassM"
                      type="password"
                      value={"obed123"}
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
                      value={mPhone}
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
                      value={mCellPhone}
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
              onClick={toggle2}
              style={{ float: "right" }}
            >
              Cerrar
            </Button>
            <Button
              onClick={validarCamposModificar}
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

export default Tables;
