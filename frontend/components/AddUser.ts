import axios from "axios";

export default function AddUser({user}:{user:any}){

    axios
        .post('http://localhost:5000/api/', user)
        .then((res => {
            console.log("Usuario adicionado!")
        }))
        .catch((e) => {
            console.log("Erro na criacao")
        })
}