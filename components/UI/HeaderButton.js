import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
//import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-ionicons';
import Colors from "../../constants/Colors";

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={"white"}
    />
  );
};

export default CustomHeaderButton;
