import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
export interface IData {
  label: string;
  value: string;
}

interface DropDownProp {
  setValue: any;
  value: any;
  data: IData[];
}

const DropDown = ({ setValue, value, data }: DropDownProp) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemText}
        itemContainerStyle={styles.itemContainerStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "choose" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    color: "black",
    padding: 0,
    margin: 0,
  },
  dropdown: {
    height: 30,
    borderColor: "#ffffff",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#f5f5f5",
    color: "black",
  },
  icon: {
    marginRight: 5,
    color: "black",
  },

  placeholderStyle: {
    fontSize: 14,
    color: "black",
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "black",
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: "black",
  },

  itemContainerStyle: {
    backgroundColor: "#ffffff",
    padding: -3,
    margin: -2,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },

  itemText: {
    color: "black",
    fontSize: 13,
    padding: 0,
    margin: -5,
  },
});

export default DropDown;
