import {StyleSheet, Text, Pressable, View } from "react-native";

export default function Button({label, onClick}:{label: any, onClick:any}){
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onClick}>
                <Text style={styles.label}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 125,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
      marginTop: 15
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0571D3'
    },
    label: {
      fontSize: 13,
      color: '#fff'
    },
  });