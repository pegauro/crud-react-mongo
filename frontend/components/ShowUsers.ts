import axios from "axios";
import { user } from "../types/user";

export default function ShowUsers() {
    return axios
        .get("http://localhost:5000/api/")
        .then((res) => {
            return res.data;
        })
        .catch((e) => {
            console.log("Erro ao mostrar");
            return [];
        })
}