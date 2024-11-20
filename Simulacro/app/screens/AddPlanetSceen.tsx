import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

const AddPlanetScreen = () => {
  const [planetName, setPlanetName] = useState('');
  const [description, setDescription] = useState('');
  const [moons, setMoons] = useState('');

  const handleAddPlanet = () => {
    if (!planetName || !description || !moons) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Aquí podrías enviar los datos a tu backend
    console.log({
      name: planetName,
      description,
      moons: Number(moons),
    });

    Alert.alert('Éxito', 'Planeta añadido correctamente');
    setPlanetName('');
    setDescription('');
    setMoons('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Planeta:</Text>
      <TextInput
        style={styles.input}
        value={planetName}
        onChangeText={setPlanetName}
        placeholder="Ejemplo: Neptuno"
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Escribe algo sobre este planeta"
      />

      <Text style={styles.label}>Número de Lunas:</Text>
      <TextInput
        style={styles.input}
        value={moons}
        onChangeText={setMoons}
        placeholder="Ejemplo: 14"
        keyboardType="numeric"
      />

      <Button title="Añadir Planeta" onPress={handleAddPlanet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default AddPlanetScreen;
