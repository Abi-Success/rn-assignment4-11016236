import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Separator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or continue with</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D3D3D3',
  },
  text: {
    marginHorizontal: 10,
    color: '#A9A9A9',
    fontSize: 14,
  },
});

export default Separator;
