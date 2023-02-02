import React, {useContext} from 'react';
import {Text, Center} from 'native-base';
import { UserContext } from "./UserContext";


/**
 * Componente  ChildContext normal
 */

const ChildContext = () => {
  const {data, setData}  = useContext(UserContext);
  return (
    <Center m={1} p={5} rounded={'md'} bg={'primary.100'}>
      <Text fontSize={'lg'} bold={true}>Hijo con datos de Context </Text>
      <Text>Nombre: {data.user?.name}  </Text>
      <Text>Edad: {data.user?.email}</Text>
    </Center>
  );
};


export default ChildContext;
