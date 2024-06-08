import { StyleSheet, Image } from "react-native";

export default function ImageViewer({dir}:{dir:any}){
    return(
        <Image source={dir} style={style.image}/>
    );
}

const style = StyleSheet.create({
    image:{
        width: 50,
        height: 50,
        borderRadius: 18
    }
});