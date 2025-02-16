import React, { useState } from 'react';
import { Container, Row, Col, Button, Navbar, NavDropdown, Nav, Modal, Form } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <header>
        <Navbar
          expand="lg"
          style={{ backgroundColor: '#003366', padding: '10px 20px', color: '#fff' }}
        >
          <Container className="d-flex align-items-center justify-content-between">
            <div className="d-lg-none">
              <NavDropdown
                title={<i className="bi bi-list" style={{ fontSize: '1.5rem', color: '#fff' }}></i>}
                id="mobile-nav-dropdown"
              >
                <NavDropdown.Item onClick={handleShowRegister}>Registrarse</NavDropdown.Item>
                <NavDropdown.Item onClick={handleShowLogin}>Iniciar Sesión</NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className="d-none d-lg-flex align-items-center">
              <NavDropdown
                title={<span className="dropdown-icon"><i className="bi bi-list"></i></span>}
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
                onClick={handleShowRegister}
                className="nav-link-registrar ms-3"
                style={{ marginRight: '10px', fontWeight: 'bold', color: '#fff', cursor: 'pointer' }}
              >
                Registrarse
              </Nav.Link>
              <Nav.Link
                onClick={handleShowLogin}
                className="nav-link-iniciar"
                style={{ fontWeight: 'bold', color: '#fff', cursor: 'pointer' }}
              >
                Iniciar Sesión
              </Nav.Link>
            </div>
            <div className="d-flex align-items-center">
  <a href="#" className="social-icon"><FaFacebook /></a>
  <a href="https://www.instagram.com/luchivaf/e" className="social-icon"><FaInstagram /></a>
  <a href="https://wa.me/584121999080" className="social-icon" target='_blank' rel="noopener noreferrer"><FaWhatsapp /></a>
  <style>
  {`
    .social-icon {
      color: black;
      font-size: 1.8rem;
      margin-left: 12px;
      transition: color 0.7s;
    }

    .social-icon:hover:nth-child(1) { color: #1877f2; } /* Facebook */
    .social-icon:hover:nth-child(2) { color: #c13584; } /* Instagram */
    .social-icon:hover:nth-child(3) { color: #25d366; } /* WhatsApp */
  `}
</style>
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
              height: '155px',
              objectFit: 'cover',
              borderRadius: '10px',
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
              objectFit: 'cover',
              borderRadius: '10px',
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
              style={{
                borderRadius: '5px',
              }}
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
        {/* seccion de caracteristicas */}
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

      {/* MODAL PARA REGISTRO */}
      <Modal show={showRegister} onHide={handleCloseRegister} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Registrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFullName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre y apellido" />
            </Form.Group>

            <Form.Group controlId="formAge" className="mt-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" placeholder="Ingrese su edad" />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Número de Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="Ingrese su número de teléfono" />
            </Form.Group>

            <Form.Group controlId="formVehicle" className="mt-3">
              <Form.Label>Placa y Modelo del Vehículo</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo: ABC123 - Toyota Corolla" />
            </Form.Group>

            <Form.Group controlId="formId" className="mt-3">
              <Form.Label>Cédula de Identidad o Pasaporte</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingrese su cédula o pasaporte" 
                onChange={(e) => {
                  if (!e.target.value.startsWith('V')) {
                    e.target.value = 'V' + e.target.value;
                  }
                }}
              />
            </Form.Group>

            <Button variant="primary" className="mt-3 w-100" onClick={handleCloseRegister}>
              Registrarse
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* MODAL PARA INICIAR SESIÓN */}
      <Modal show={showLogin} onHide={handleCloseLogin} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formLoginEmail">
              <Form.Label>Usuario o Correo Electrónico</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su usuario o correo" />
            </Form.Group>

            <Form.Group controlId="formLoginPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>

            <div className="text-end mt-2">
              <a href="#forgot-password" style={{ color: '#003366', textDecoration: 'none' }}>
                ¿Olvidó su contraseña?
              </a>
            </div>

            <Button variant="primary" className="mt-3 w-100" onClick={handleCloseLogin}>
              Iniciar Sesión
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;