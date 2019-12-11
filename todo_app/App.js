import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import TodoState from "./src/context/todo/TodoState";
import ScreenState from "./src/context/screen/ScreenState";
import MainLayout from "./src/MainLayout";

const loadingApplication = async () => {
  await Font.loadAsync({
    "tomorrow-Italic": require("./assets/fonts/Tomorrow-Italic.ttf"),
    "tomorrow-Bold": require("./assets/fonts/Tomorrow-Bold.ttf")
  });
};

export default function App() {
  const [isLoad, setIsLoad] = useState(false);

  if (!isLoad) {
    return (
      <AppLoading
        startAsync={loadingApplication}
        onError={error => console.warn(error)}
        onFinish={() => setIsLoad(true)}
      />
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}
