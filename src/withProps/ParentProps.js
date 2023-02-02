import React, { useState } from "react";
import {Text, Center, ScrollView, Box, Heading, Button} from 'native-base';
import { login } from "../core/login";
import ChildProps from "./ChildProps";
import ChildWithGrandChild from "./ChildWithGrandChild";

/**
 * Componente  ParentProps normal
 */

const ParentProps = () => {
  const [data, setData] = useState(null);

  function onLogin() {
    setData(login());
  }

  return (
      <ScrollView safeAreaTop={true} my={20} px={5} flex={1}>
        <Heading>Componente Padre usando Props  </Heading>
        <Center>
          <Button onPress={onLogin} >Iniciar sesión</Button>
        </Center>
        {
          data && (
            <Center flex={1} mt={5} >
              <ChildProps user={data.user} />
              <ChildProps user={data.user} />
              <ChildProps user={data.user} />
              <ChildProps user={data.user} />
              <ChildWithGrandChild user={data.user} />
            </Center>
          )
        }
      </ScrollView>
  );
};





export default ParentProps;
