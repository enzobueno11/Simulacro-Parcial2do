// index.tsx o donde sea que manejes la navegación
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const IndexScreen = () => {
  const router = useRouter();

  const navigateToDetails = () => {
    router.push({
      pathname: '/screens/DetailsScreen',
      params: { id: '1', name: 'Mercury' }, // Pasamos los parámetros de la URL
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la aplicación de Planetas</Text>
      <Button title="Ver detalles de Mercurio" onPress={navigateToDetails} />
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

export default IndexScreen;
