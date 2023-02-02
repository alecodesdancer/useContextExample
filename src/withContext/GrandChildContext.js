import React, { useContext } from 'react';
import {Text, Center, Button} from 'native-base';
import { UserContext } from "./UserContext";

/**
 * Componente  GrandChildContext normal
 */

const GrandChildContext = () => {
  const {data, setData}   = useContext(UserContext);

  function changeUser() {
    setData({...data, user: {name: 'Daniela', age: 23, email: 'otroemail@mail.com'}});
  }
  return (
    <Center m={1} p={8} rounded={'md'} bg={'secondary.200'}>
      <Text fontSize={'lg'} bold={true}>Nieto</Text>
      <Text>Nombre: {data?.user?.name}</Text>
      <Text>Edad: {data?.user.age}</Text>
      <Button my={1} onPress={changeUser} >Cambiar user</Button>
    </Center>
  );
};


export default GrandChildContext;
