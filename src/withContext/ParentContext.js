import React, { useState } from "react";
import {  Center, ScrollView, Heading, Button, Text } from "native-base";
import { login } from "../core/login";
import { UserContext, defaultUser } from "./UserContext";
import ChildContext from "./ChildContext";
import ChildWGrandChildContext from "./ChildWGrandChildContext";


/**
 * Componente  ParentContext normal
 */

const ParentContext = () => {
  const [data, setData] = useState(defaultUser);

  function onLogin() {
    setData(login());
  }

  return (
    <ScrollView safeAreaTop={true} my={20} px={5} flex={1}>
      <UserContext.Provider value={{data, setData}}>
        <Heading>Componente Padre usando Context  </Heading>
        <Center>
          <Button onPress={onLogin} >Iniciar sesión</Button>
        </Center>
        {
          data?.user && (
          <>
            <ChildContext />
            <ChildContext />
            <ChildContext />
            <ChildContext />
            <ChildWGrandChildContext/>
          </>

          )
        }
      </UserContext.Provider>

    </ScrollView>
  );
};

;
export default ParentContext;
