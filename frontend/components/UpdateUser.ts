import axios from 'axios';
import {user} from '../types/user';

export default function UpdateUser(user:any){
    console.log(user)
    axios
    .put(`http://localhost:5000/api/${user?._id}`, user)
    .then((res) => {
        console.log("Usuario editado!");
    })
    .catch((err) => {
        console.log("Nao foi possivel editar o usuario!");   
    })
}