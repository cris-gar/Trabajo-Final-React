import React from 'react';
import {
  Form, Button, Container, Alert, Row, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  shape, arrayOf, bool, string, func,
} from 'prop-types';

class Agregar extends React.Component {
  state = { value: '', showA: false };

  static propTypes = {
    AddTarea: func.isRequired,
    tareas: arrayOf(
      shape({
        estado: bool,
        nombre: string,
      }),
    ).isRequired,
  };

  componentDidUpdate(prevProps) {
    const { tareas } = this.props;
    if (prevProps.tareas.length !== tareas.length) {
      this.toggleShowA();
    }
  }

  toggleShowA = () => {
    this.setState((state) => ({ showA: !state.showA }));
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  Enviar = (event) => {
    const { value } = this.state;
    const { AddTarea } = this.props;
    event.preventDefault();
    AddTarea(value);
  };

  render() {
    const { value, showA } = this.state;
    return (
      <Container className="py-5">
        <Alert show={showA} variant="success">
          <Alert.Heading>Tarea Agregada</Alert.Heading>
          <p>Su tarea a sido agregada exitosamente.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={this.toggleShowA} variant="outline-success">
              Cerrar
            </Button>
          </div>
        </Alert>
        <Row>
          <Col>
            <Form onSubmit={this.Enviar}>
              <Form.Group controlId="nombre">
                <Form.Label>Tarea</Form.Label>
                <Form.Control
                  type="text"
                  values={value}
                  placeholder="Agrega aqui tu tarea"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Agregar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchProps = (dispatch) => ({
  AddTarea: (value) => dispatch({ type: 'AddTarea', value }),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Agregar);
