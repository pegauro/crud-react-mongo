import axios from 'axios';
import {user} from '../types/user';

export default function DeleteUser(user:any){
    axios
    .delete(`http://localhost:5000/api/${user?._id}`)
    .then((res) => {
        console.log("Usuario excluido!");
    })
    .catch((err) => {
        console.log("Nao foi possivel excluir o usuario!");   
    })
}