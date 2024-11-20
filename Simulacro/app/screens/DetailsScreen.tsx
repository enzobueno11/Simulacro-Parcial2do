import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSearchParams } from 'expo-router';

const DetailsScreen = () => {
  const { id, name } = useSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Planeta</Text>
      <Text>ID: {id}</Text>
      <Text>Nombre: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default DetailsScreen;
