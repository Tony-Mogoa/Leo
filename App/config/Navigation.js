import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";
import Recent from "../screens/Recent";
import colors from "../constants/colors";

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Recent"
      component={Recent}
      options={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons
              name="bookmark"
              size={30}
              color={colors.white}
              style={{ paddingHorizontal: 10 }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
