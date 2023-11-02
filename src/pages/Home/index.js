import React, { useState } from 'react'
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBar from '../../components/SearchBar';
import Colors from "../../styles/colors"
import Notes from "../../components/RenderNotes"

export default function Home() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

  return (
    <SafeAreaView
      style={[styles.container]}
    >
        {/* Header */}
        <Text style={styles.txtTitle}>NOTE APP</Text>
        {/* Search Bar */}
        <SearchBar  data={data} onChange={setData} />
        {/* Notes */}
        <FlatList />
        {/* ADD TODO BUTTON */}
        <TouchableOpacity style={styles.addNoteButton}>
            <AntDesign name='pluscircle' size={60} color={Colors.addButton} />
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 20
  },
  newNoteButton: {
    zIndex: 9,
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  noteList: {
    margin: 5,
  },
  txtTitle: {
    margin: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
})
