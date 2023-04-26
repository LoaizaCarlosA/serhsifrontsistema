import { createStore } from "vuex";


export default createStore({
    state: {
        role: ''
    },
    mutations: {
        setRole(state, role) {
            state.role = role;
          }
    },
    
      
});