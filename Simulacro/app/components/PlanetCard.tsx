import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

interface Planet {
  name: string;
  description: string;
  image: string;
  moons: number;
  moon_names: string[];
}

export default function PlanetCard({ planet }: { planet: Planet }) {
  return (
    <Link
      href={{
        pathname: '../screens/DetailsScreen',
        params: {
          name: planet.name,
          description: planet.description,
          image: planet.image,
          moons: planet.moons,
          moon_names: planet.moon_names,
        },
      }}
    >
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: planet.image }} style={styles.image} />
        <Text style={styles.name}>{planet.name}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
