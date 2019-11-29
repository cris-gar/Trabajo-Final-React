import React from 'react';
import { connect } from 'react-redux';
import {
  func, shape, arrayOf, string, bool,
} from 'prop-types';
import {
  ListGroup, Container, Button, Row, Col,
} from 'react-bootstrap';

const Index = ({ tareas, Realizado, Eliminar }) => (
  <Container className="py-5">
    <Row>
      <Col>
        <ListGroup as="ul">
          {tareas.map((t) => (
            <ListGroup.Item as="li" variant="light" key={t.nombre}>
              <span>{t.nombre}</span>
              <div className="float-right">
                <Button variant="outline-primary mr-2" className="" onClick={Realizado}>
                  Realizar?
                </Button>
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

const mapStateToProps = (state) => ({
  tareas: state.tareas.filter((t) => t.estado === false),
});

Index.propTypes = {
  Realizado: func.isRequired,
  Eliminar: func.isRequired,
  tareas: arrayOf(
    shape({
      nombre: string,
      estado: bool,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Index);
