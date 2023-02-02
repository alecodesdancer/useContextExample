import React from 'react';
import {Text, Center} from 'native-base';
import PropTypes from 'prop-types';
import GrandChild from "./GrandChild";

/**
 * Componente  ChildWithGrandChild normal
 */

const ChildWithGrandChild = ({user}) => {
  return (
    <Center m={1} p={8} rounded={'md'} bg={'secondary.500'}>
      <Text fontSize={'lg'} bold={true}>Hijo</Text>
      <Text>Nombre: {user.name}</Text>
      <GrandChild user={user} />
    </Center>
  );
};

ChildWithGrandChild.propTypes = {
  user: PropTypes.object,
};
export default ChildWithGrandChild;
