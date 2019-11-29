import React from 'react';
import { connect } from 'react-redux';
import {
  shape, arrayOf, bool, string, func,
} from 'prop-types';
import {
  ListGroup, Container, Button, Row, Col,
} from 'react-bootstrap';

const Todos = ({ tareas, Realizado, Eliminar }) => (
  <Container className="py-5">
    <Row>
      <Col>
        <ListGroup as="ul" className="border">
          {tareas.map((t) => (
            <ListGroup.Item as="li" variant={t.estado ? 'primary' : 'light'} key={t.nombre}>
              <span>{t.nombre}</span>
              <div className="float-right">
                {t.estado ? (
                  ''
                ) : (
                  <Button variant="outline-primary mr-2" className="" onClick={Realizado}>
                    Realizar?
                  </Button>
                )}
                <Button variant="outline-danger" className="" onClick={Eliminar}>
                  Eliminar?
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

Todos.propTypes = {
  tareas: arrayOf(
    shape({
      estado: bool,
      nombre: string,
    }),
  ).isRequired,
  Realizado: func.isRequired,
  Eliminar: func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Todos);
