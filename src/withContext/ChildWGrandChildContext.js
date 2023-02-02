import React, {useContext} from 'react';
import {Text, Center} from 'native-base';
import { UserContext } from "./UserContext";
import GrandChildContext from "./GrandChildContext";
/**
 * Componente  ChildWGrandChildContext normal
 */

const ChildWGrandChildContext = () => {
  const {data, setData}   = useContext(UserContext);

  return (
    <Center m={1} p={8} rounded={'md'} bg={'secondary.500'}>
      <Text fontSize={'lg'} bold={true}>Hijo Con Nietos</Text>
      <Text>Nombre: {data?.user?.name}</Text>
      <GrandChildContext />
    </Center>
  );
};


export default ChildWGrandChildContext;
