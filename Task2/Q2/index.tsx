import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Text,
} from 'react-native';

type Props = TextInputProps;

const Input: React.FC<Props> = ({style, ...props}) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

const Button: React.FC<{label: string; onPress: () => void}> = ({
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

const Screen: React.FC<{navigation: any}> = ({navigation}) => {
  const [name, setName] = useState('');

  // the signature of this function will not change every time the component re-renders
  const onChangeText = (text: string) => {
    setName(text);
  };

  // the signature of this function will change every time the name changes
  const onPress = useCallback(() => {
    navigation.navigate('AnotherScreen', {name});
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Input style={styles.input} value={name} onChangeText={onChangeText} />
      <Button label="DONE" onPress={onPress} />
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
});
