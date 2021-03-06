import { createStore } from "vuex"
import router from './router/routes'
import axios from "axios";

const store = createStore({
    state:{
        token: localStorage.getItem('token') || ''
    },

    actions: {
        login: async ( { commit}, model) => {
            const instance = axios.create({
                baseURL: 'http://localhost:3000/',
                headers: {'Authorization': "Basic " + btoa(model.email+":"+model.password)}
            });

            instance.get('/auth/login')
                .then(response => {
                    commit("setToken", response.data.token);
                    router.push("/");
                }).catch((error) => {
                    return error;
                });
        },
        logout: ( { commit}) => {
            commit("removeToken");
            router.push("/");
        },
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token;
            localStorage.setItem('token', token)
        },
        removeToken: (state) => {
            state.token = "";
            localStorage.removeItem('token')
        }
    },
    getters: {
        isAuthenticated: (state) => {
            state.token = localStorage.getItem('token') || state.token
            return state.token.length > 0;
        }
    },
})

export default store
