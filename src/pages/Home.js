import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { func } from 'prop-types';
import Index from '../components/Index';
import Todos from '../components/Todos';
import Agregar from '../components/Agregar';

function Home({ AddRealizado, DeleteTarea }) {
  function Realizado({ target }) {
    AddRealizado(target);
  }

  function Eliminar({ target }) {
    DeleteTarea(target);
  }

  return (
    <Router>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand className="font-weight-bold text-uppercase">
            <Link to="/" className="text-decoration-none">
              <h3 className="text-white">Lista Tareas</h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto py-3">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/" className="text-white">
                    Tareas Pendientes
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/todas" className="text-white">
                    Todas las Tareas
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/agregar" className="text-white">
                    Agregar Tarea
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Index Realizado={Realizado} Eliminar={Eliminar} />
        </Route>
        <Route path="/todas">
          <Todos Realizado={Realizado} Eliminar={Eliminar} />
        </Route>
        <Route path="/agregar">
          <Agregar />
        </Route>
      </Switch>
    </Router>
  );
}

Home.propTypes = {
  AddRealizado: func.isRequired,
  DeleteTarea: func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchProps = (dispatch) => ({
  AddRealizado: (target) => dispatch({ type: 'AddRealizado', target }),
  DeleteTarea: (target) => dispatch({ type: 'DeleteTarea', target }),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Home);
