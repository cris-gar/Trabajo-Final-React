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
      texto = action.target.closest('div.item').children[1].innerText;
      index = state.tareas.map((t) => t.nombre).indexOf(texto);
      return {
        ...state,
        tareas: update(state.tareas, {
          [index]: { $set: { estado: true, nombre: state.tareas[index].nombre } },
        }),
      };
  }
};

export default createStore(reducer);
