import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface Category {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

interface Pet {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

const router = useRouter();

export default function HomeScreen(): JSX.Element {
  const categories: Category[] = [
    { id: '1', name: 'Cachorro', image: require('../../assets/icon.png') },
    { id: '2', name: 'Gato', image: require('../../assets/icon2.png') },
    { id: '3', name: 'Pássaros', image: require('../../assets/icon3.png') },
    { id: '4', name: 'Coelho', image: require('../../assets/icon4.png') },
  ];

  const pets: Pet[] = [
    { id: '1', name: 'Zoro', image: require('../../assets/dog.png') },
    { id: '2', name: 'Luffy', image: require('../../assets/dog2.png') },
    { id: '3', name: 'Jinwooo', image: require('../../assets/dog3.png') },
  ];

  return (
    <View style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fulano</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* SCROLLVIEW PRINCIPAL */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Selecione um animal</Text>

        {/* CATEGORIAS */}
        <View style={styles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((item) => (
              <TouchableOpacity key={item.id} style={styles.categoryItem} activeOpacity={0.7}>
                <Image source={item.image} style={styles.categoryIcon} />
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* PETS */}
        <View style={styles.petContainer}>
          {pets.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <Image source={pet.image} style={styles.petImage} />
              <View style={styles.petInfo}>
                <Text style={styles.petName}>{pet.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* RODAPÉ */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={28} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={28} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbox" size={28} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    right: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 8,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    width: 80,
  },
  categoryIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#555',
  },

  petContainer: {
    paddingHorizontal: 16,
    alignItems: 'center', // Centraliza os cards
  },
  petCard: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    width: '90%', // Menos largo
  },
  petImage: {
    width: '100%',
    height: 220, // Mais alto
    resizeMode: 'contain', // Mostra a imagem inteira sem esticar
  },
  petInfo: {
    padding: 12,
  },
  petName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign:'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
