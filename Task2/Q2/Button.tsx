import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export default function Button({label, ...props}: ButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'red',
  },
});
