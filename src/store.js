import { createStore } from "vuex";


export default createStore({
    state: {
        role: '',
        user: ''
    },
    mutations: {
        setRole(state, role) {
            state.role = role;
          },
          
          setNombreCompleto(state, user) {
            state.user = user;
          },
    },

    
    
      
});