import React from 'react';
import { Container, Row, Col, Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <header>
        <Navbar
          expand="lg"
          style={{
            backgroundColor: '#003366',
            padding: '10px 20px',
            color: '#fff',
          }}
        >
          <Container className="d-flex align-items-center justify-content-between">
            {/* Dropdown para móviles */}
            <div className="d-lg-none">
              <NavDropdown
                title={<i className="bi bi-list" style={{ fontSize: '1.5rem', color: '#fff' }}></i>}
                id="mobile-nav-dropdown"
              >
                <NavDropdown.Item href="#register">Registrarse</NavDropdown.Item>
                <NavDropdown.Item href="#login">Iniciar Sesión</NavDropdown.Item>
              </NavDropdown>
            </div>

            {/* Dropdown y botones en escritorio */}
            <div className="d-none d-lg-flex align-items-center">
              <NavDropdown
                title={
                  <span className="dropdown-icon">
                    <i className="bi bi-list"></i>
                  </span>
                }
                id="desktop-nav-dropdown"
                className="dropdown-hover"
              >
                <NavDropdown.Item href="#mission">Misión y Visión</NavDropdown.Item>
                <NavDropdown.Item href="#value">Propuesta de Valor</NavDropdown.Item>
                <NavDropdown.Item href="#audience">Público Objetivo</NavDropdown.Item>
                <NavDropdown.Item href="#discounts">Descuentos Iniciales</NavDropdown.Item>
                <NavDropdown.Item href="#contact">Contáctanos</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="#register"
                className="nav-link-registrar ms-3"
                style={{ marginRight: '10px', fontWeight: 'bold', color: '#fff' }}
              >
                Registrarse
              </Nav.Link>
              <Nav.Link
                href="#login"
                className="nav-link-iniciar"
                style={{ fontWeight: 'bold', color: '#fff' }}
              >
                Iniciar Sesión
              </Nav.Link>
            </div>
          </Container>
        </Navbar>

        <div
          style={{
            textAlign: 'center',
            padding: '40px 20px',
            backgroundColor: '#003366',
            color: '#fff',
            position: 'relative',
          }}
        >
          {/* Logos a la izquierda y derecha */}
          <img
            src="https://surtidoreslatam.com/wp-content/uploads/2023/01/IMG-20230118-WA0006.jpg" 
            alt="Logo Izquierdo"
            className="header-logo-left d-none d-lg-block"
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '500px',
              height: '145px',
              objectFit: 'cover',
              borderRadius:'8px',
            }}
          />
          <img
            src="https://st2.depositphotos.com/2060347/11006/i/450/depositphotos_110063988-stock-photo-man-refuel-his-car.jpg"
            alt="Logo Derecho"
            className="header-logo-right d-none d-lg-block"
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '500px',
              height: '155px',
              objectFit:'cover',
              borderRadius:'8px',
            }}
          />
          <h1>GasCola</h1>
          <p>Simplifica tu experiencia en estaciones de servicio</p>
        </div>
      </header>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={{ color: '#003366' }}>¡Tu gasolina, sin complicaciones!</h2>
            <p>
              Con GasCola, puedes consultar estaciones disponibles, unirte a una cola en línea
              y pagar de manera segura, todo desde la comodidad de tu dispositivo.
            </p>
            <Button variant="warning" size="lg" href="#features">
              Descubre más
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="src/assets/logo.jpg"
              alt="GasCola en acción"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>

      <section
        id="features"
        style={{
          backgroundColor: '#f8f9fa',
          padding: '40px 0',
          textAlign: 'center',
        }}
      >
        <Container>
          <h2 style={{ color: '#003366' }}>Características principales</h2>
          <Row className="mt-4">
            <Col md={4}>
              <h4>Consulta en tiempo real</h4>
              <p>Revisa qué estaciones están disponibles y funcionando al instante.</p>
            </Col>
            <Col md={4}>
              <h4>Cola en línea</h4>
              <p>Un sistema de fila virtual para ahorrar tiempo y evitar aglomeraciones.</p>
            </Col>
            <Col md={4}>
              <h4>Pago seguro</h4>
              <p>Paga online y recibe un código de verificación único para mayor seguridad.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer
        style={{
          backgroundColor: '#003366',
          color: '#fff',
          textAlign: 'center',
          padding: '20px 0',
        }}
      >
        <p>&copy; {new Date().getFullYear()} GasCola. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;