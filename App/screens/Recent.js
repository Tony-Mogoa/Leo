import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import colors from "../constants/colors";

export default () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
    </SafeAreaView>
  );
};
