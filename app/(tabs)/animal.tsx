import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

interface Pet {
  id: string;
  name: string;
  image: any; // Substitua por ImageSourcePropType se necessário
  sexo?: string;
  peso?: string;
  pelagem?: string;
  nascimento?: string;
  raca?: string;
}

const pets: Pet[] = [
  {
    id: '1',
    name: 'Bolt',
    image: require('../../assets/dog.png'),
    sexo: 'Macho',
    peso: '10kg',
    pelagem: 'Curta',
    nascimento: '2020',
    raca: 'Labrador',
  },
  {
    id: '2',
    name: 'Max',
    image: require('../../assets/dog2.png'),
    sexo: 'Macho',
    peso: '8kg',
    pelagem: 'Média',
    nascimento: '2021',
    raca: 'Beagle',
  },
  {
    id: '3',
    name: 'Luna',
    image: require('../../assets/cat.jpg'),
    sexo: 'Fêmea',
    peso: '4kg',
    pelagem: 'Longa',
    nascimento: '2019',
    raca: 'Persa',
  },
  {
    id: '4',
    name: 'Mimi',
    image: require('../../assets/cat2.jpg'),
    sexo: 'Fêmea',
    peso: '3.5kg',
    pelagem: 'Curta',
    nascimento: '2020',
    raca: 'Siamês',
  },
  {
    id: '5',
    name: 'Nina',
    image: require('../../assets/cat.jpeg'),
    sexo: 'Fêmea',
    peso: '4.2kg',
    pelagem: 'Média',
    nascimento: '2018',
    raca: 'Maine Coon',
  },
  {
    id: '6',
    name: 'Thor',
    image: require('../../assets/dog.jpg'),
    sexo: 'Macho',
    peso: '12kg',
    pelagem: 'Curta',
    nascimento: '2017',
    raca: 'Golden Retriever',
  },
  {
    id: '7',
    name: 'Rocky',
    image: require('../../assets/dog4.png'),
    sexo: 'Macho',
    peso: '11kg',
    pelagem: 'Curta',
    nascimento: '2022',
    raca: 'Bulldog',
  },
  {
    id: '8',
    name: 'Toby',
    image: require('../../assets/dog3.png'),
    sexo: 'Macho',
    peso: '9kg',
    pelagem: 'Média',
    nascimento: '2021',
    raca: 'Cocker Spaniel',
  },
  {
    id: '9',
    name: 'Mel',
    image: require('../../assets/cat3.jpg'),
    sexo: 'Fêmea',
    peso: '3.8kg',
    pelagem: 'Longa',
    nascimento: '2020',
    raca: 'Angorá',
  },
  {
    id: '10',
    name: 'Pipoca',
    image: require('../../assets/coelho.png'),
    sexo: 'Fêmea',
    peso: '2kg',
    pelagem: 'Macia',
    nascimento: '2023',
    raca: 'Mini Lop',
  },
];

const Animal = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const pet = pets.find((p) => p.id === id);

  if (!pet) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Animal não encontrado</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Detalhes Adicionais</Text>

      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={pet.image} style={styles.image} />
          <Text style={styles.name}>{pet.name}</Text>
        </View>

        <Text style={styles.infoText}>Sexo: {pet.sexo}</Text>
        <Text style={styles.infoText}>Peso: {pet.peso}</Text>
        <Text style={styles.infoText}>Pelagem: {pet.pelagem}</Text>
        <Text style={styles.infoText}>Ano de nascimento: {pet.nascimento}</Text>
        <Text style={styles.infoText}>Raça: {pet.raca}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => router.replace('../(tabs)/formulario')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Adotar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace('../(tabs)/home')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      {/* RODAPÉ */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/doacao')}>
          <Ionicons name="gift" size={28} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/usuario')}>
          <Ionicons name="person" size={28} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/help')}>
          <Ionicons name="help-circle" size={28} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/home')}>
          <Ionicons name="home" size={28} color="#555" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Animal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64a7b8',
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 50,
    color: '#fff',
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: '#fff',
  },
  card: {
    backgroundColor: '#2c5a6e',
    padding: 15,
    borderRadius: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#2c5a6e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#eee',
    marginTop: 20,
  },
});
