import { createStore } from "vuex";


export default createStore({
    state: {
        role: '',
        user: '',
        id:''
    },
    actions: {
      actualizarNombreCompleto(context, nombreCompleto) {
        context.commit('setNombreCompleto', nombreCompleto);
      },
    },
    mutations: {
        setRole(state, role) {
            state.role = role;
          },
          
          setNombreCompleto(state, user) {
            state.user = user;
          },
          setId(state,id){
            state.id = id;
          }
    },

    
    
      
});