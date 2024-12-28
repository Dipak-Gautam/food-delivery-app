import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
interface IData {
  label: string;
  value: string;
}
const data: IData[] = [
  { label: "Hello", value: "Hello" },
  { label: "Hello2", value: "Hello2" },
];

interface DropDownProp {
  setValue: any;
  value: any;
}

const DropDown = ({ setValue, value }: DropDownProp) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemText}
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

  itemText: {
    color: "black",
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
});

export default DropDown;
