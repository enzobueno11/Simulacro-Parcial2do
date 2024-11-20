import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getPlanets } from '../services/api';
import PlanetCard from '../components/PlanetCard';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen() {
  const [planets, setPlanets] = useState<{ id: number; name: string; description: string; image: string; moons: number; moon_names: string[] }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPlanets();
      setPlanets(data.planets);
    }
    fetchData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Planetas</Text>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PlanetCard planet={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
});
