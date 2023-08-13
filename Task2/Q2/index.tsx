import React, {useState, useCallback} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Button from './Button';
import Container from './Container';
import Input from './Input';

type Props = NativeStackScreenProps<
  {
    Home: undefined;
    AnotherScreen: {name: string};
  },
  'Home'
>;

const Screen: React.FC<Props> = ({navigation}) => {
  const [name, setName] = useState('');

  const onPress = useCallback(() => {
    navigation.navigate('AnotherScreen', {name});
  }, [navigation, name]);

  return (
    <Container>
      <Input value={name} onChangeText={setName} />
      <Button label="DONE" onPress={onPress} />
    </Container>
  );
};

export default Screen;
