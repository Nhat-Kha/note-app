import React, { useState } from "react";
import { View, TextInput, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Style from "./style";

export default function SearchBar({ data, onChange, fullData }) {
  console.log("fulldata", fullData);
  const normalizeText = (text) => {
    // You can remove the unorm library and use a basic normalization
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .toLowerCase(); // Convert to lowercase
  };

  const search = (text) => {
    if (text) {
      const searchText = normalizeText(text);

      const newData = fullData.filter((item) => {
        const itemTitle = normalizeText(item.title);
        return itemTitle.startsWith(searchText);
      });

      onChange(newData);
      console.log("new data", newData);
    } else {
      onChange(fullData);
    }
  };
  console.log("data", data);
  return (
    <View
      style={[
        Style.searchArea,
        { padding: Platform.OS === "android" ? 12 : 20 },
      ]}
    >
      <TextInput
        placeholder="Search Tasks..."
        maxLength={50}
        onChangeText={(text) => search(text)}
      />
    </View>
  );
}
