import React,{useState} from 'react'
import Colors from "../../styles/colors"
import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar() {
    const [masterData, setMasterData] = useState("");
    const search = () => {
        // if (text) {
        //     const newData = data.filter((item) => {
        //         const itemTitle   = item.title ? item.title.toUpperCase() : "" .toUpperCase();
        //         const titleSearch = text.toUpperCase();
        //         return itemTitle.indexOf(titleSearch) > -1
        //     });
        //     onChange(newData)
        // } else {
        //     onChange(masterData)
        // }
    }

  return (
        <View style={[styles.searchArea]}>
            <TextInput 
                placeholder="Search tasks..." 
                maxLength={50}
                onChangeText={(text) => search(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchArea: {
        backgroundColor: Colors.searchBar,
        borderRadius: 10,
        marginBottom: 10,
    },  
})