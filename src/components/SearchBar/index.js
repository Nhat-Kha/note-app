import React, { useState } from "react";
import { View, TextInput, Platform } from "react-native";
import Style from "./style";
import unorm from "unorm";

export default function SearchBar({ data, onChange }) {
  const [masterData, setMasterData] = useState(data);

  const normalizeText = (text) => {
    return unorm
      .nfkd(text)
      .replace(/[^\x00-\x7F]/g, "")
      .toUpperCase();
  };

  const search = (text) => {
    if (text) {
      const searchText = normalizeText(text);

      const newData = data.filter((item) => {
        const itemTitle = normalizeText(item.title);
        return itemTitle.indexOf(searchText) > -1;
      });

      onChange(newData);
    } else {
      onChange(masterData);
    }
  };

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
