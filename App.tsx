/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import ParentProps from "./src/withProps/ParentProps";
import { NativeBaseProvider, Box } from "native-base";
import ParentContext from "./src/withContext/ParentContext";



function App(): JSX.Element {
  return (
      <NativeBaseProvider>
        {/* With Props  */}
        {/*<ParentProps/>*/}
        {/* With Context  */}
        <ParentContext/>
      </NativeBaseProvider>
  );
}



export default App;
