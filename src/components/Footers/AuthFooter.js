import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://conectatumarketing.net/?fbclid=IwAR2oFp_9W4s8t5wx4JnhWUCX07_kgzi8B3uia7J_a2eIEU9v-hyIi5YfhA4"
                  target="_blank"
                  style={{color:"white", fontSize:"110%"}}
                >
                  Acción TI
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/AccionTI"
                    target="_blank"
                    style={{color:"white", fontSize:"110%"}}
                  >
                    Facebook
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/accionti/"
                    target="_blank"
                    style={{color:"white", fontSize:"110%"}}
                  >
                    Instagram
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adr-auth-footer"
                    target="_blank"
                  >
                    YouTube
                  </NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-auth-footer"
                    target="_blank"
                  >
                    MIT License
                  </NavLink>
                </NavItem> */}
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
