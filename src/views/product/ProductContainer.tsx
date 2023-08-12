import React, {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

export default function ProductContainer({children}: PropsWithChildren) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    gap: 16,
  },
});
