import React from 'react';
import {Text, Center} from 'native-base';
import PropTypes from 'prop-types';

/**
 * Componente  ChildProps normal
 */

const ChildProps = ({user = {}}) => {
  return (
    <Center m={1} p={5} rounded={'md'} bg={'primary.100'}>
      <Text fontSize={'lg'} bold={true}>Hijo</Text>
      <Text>Nombre: {user.name}</Text>
      <Text>Edad: {user.email}</Text>
    </Center>
  );
};

ChildProps.propTypes = {
  user: PropTypes.object,
};
export default ChildProps;
