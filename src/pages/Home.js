import React from 'react';
import { connect } from 'react-redux';
// import { func, shape } from 'prop-types';
import { Button, List } from 'semantic-ui-react';

class Home extends React.Component {
  Realizado = ({ target }) => {
    this.props.AddRealizado(target);
  };

  render() {
    const { tareas } = this.props;
    console.log(tareas);
    return (
      <List divided verticalAlign="middle">
        {tareas.map((tarea) => {
          if (!tarea.estado) {
            return (
              <List.Item key={tarea.nombre}>
                <List.Content floated="right">
                  <Button onClick={this.Realizado}>Marcar como realizada</Button>
                </List.Content>
                <List.Content>{tarea.nombre}</List.Content>
              </List.Item>
            );
          }
        })}
      </List>
    );
  }
}

const mapStateToProps = (state) => ({
  tareas: state.tareas,
});

const mapDispatchProps = (dispatch) => ({
  AddRealizado: (target) => dispatch({ type: 'AddRealizado', target }),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Home);
