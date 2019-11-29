import { createStore } from 'redux';
import update from 'immutability-helper';

const INITIAL_STATE = {
  tareas: [
    {
      nombre: 'Tarea Inicial',
      estado: false,
    },
    {
      nombre: 'Tare Realizada',
      estado: true,
    },
  ],
};
const reducer = (state = INITIAL_STATE, action) => {
  let texto;
  let index;
  switch (action.type) {
    default:
      return state;
    case 'AddRealizado':
      texto = action.target.closest('li').children[0].innerText;
      index = state.tareas.map((t) => t.nombre).indexOf(texto);
      return {
        ...state,
        tareas: update(state.tareas, {
          [index]: { $set: { estado: true, nombre: state.tareas[index].nombre } },
        }),
      };
    case 'AddTarea':
      return { ...state, tareas: state.tareas.concat({ nombre: action.value, estado: false }) };
    case 'DeleteTarea':
      texto = action.target.closest('li').children[0].innerText;
      index = state.tareas.map((t) => t.nombre).indexOf(texto);
      return { ...state, tareas: update(state.tareas, { $splice: [[index, 1]] }) };
  }
};

export default createStore(reducer);
