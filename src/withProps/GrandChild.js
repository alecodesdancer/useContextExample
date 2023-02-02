import React from 'react';
import {Text, Center} from 'native-base';
import PropTypes from 'prop-types';

/**
 * Componente  GrandChild normal
 */

const GrandChild = ({user}) => {
  return (
    <Center m={1} p={8} rounded={'md'} bg={'secondary.200'}>
      <Text fontSize={'lg'} bold={true}>Nieto</Text>
      <Text>Nombre: {user.name}</Text>
      <Text>Edad: {user.age}</Text>
    </Center>
  );
};

GrandChild.propTypes = {
  user: PropTypes.object,
};
export default GrandChild;
