import { createStore } from "vuex";


export default createStore({
    state: {
        role: '',
        user: '',
        id:''
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