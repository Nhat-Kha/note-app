import React from "react";
import { View,TouchableOpacity, Text } from "react-native-web";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Dimensions } from "react-native";
import Colors from '../../styles/colors'

export default function renderNote() {
    return (
        <TouchableOpacity
            style={styles.noteArea}
            onPress={() => navigation.navigate("Notes", {note: item, search: true})}
        >
            <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}
            >
                <Text style={styles.txtNoteTitle} numberOfLines={3}>Item1</Text>
                <Feather name="bell" size={15} color="green"/>
                <Text style={styles.txtNote} numberOfLines={6}>Description</Text>
            </View>
        </TouchableOpacity>
    )
}

const width  = (Dimensions.get("window").width - 60);
const height = (Dimensions.get("window").height - 400) / 2;
const styles = StyleSheet.create({
    noteArea: {
        backgroundColor: Colors.notes,
        width: "100%",
        height: "auto",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 4,
      },
      txtNoteTitle: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
      },
      txtNote: {
        color: "#000",
      },
})