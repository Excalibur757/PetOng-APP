import React, { useState } from 'react';
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
import { useAuth } from '../../contexts/AuthContext';

interface Category {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

interface Pet {
  id: string;
  name: string;
  image: ImageSourcePropType;
  categoryId: string;
}

const router = useRouter();

export default function HomeScreen(): JSX.Element {
  const { user } = useAuth(); // <- Aqui pegamos o usuário logado
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    { id: '1', name: 'Cachorro', image: require('../../assets/icon.png') },
    { id: '2', name: 'Gato', image: require('../../assets/icon2.png') },
    { id: '3', name: 'Coelho', image: require('../../assets/icon4.png') },
  ];

  const pets: Pet[] = [
    { id: '1', name: 'Bolt', image: require('../../assets/dog.png'), categoryId: '1' },
    { id: '2', name: 'Max', image: require('../../assets/dog2.png'), categoryId: '1' },
    { id: '3', name: 'Luna', image: require('../../assets/cat.jpg'), categoryId: '2' },
    { id: '4', name: 'Mimi', image: require('../../assets/cat2.jpg'), categoryId: '2' },
    { id: '5', name: 'Nina', image: require('../../assets/cat.jpeg'), categoryId: '2' },
    { id: '6', name: 'Thor', image: require('../../assets/dog.jpg'), categoryId: '1' },
    { id: '7', name: 'Rocky', image: require('../../assets/dog4.png'), categoryId: '1' },
    { id: '8', name: 'Toby', image: require('../../assets/dog3.png'), categoryId: '1' },
    { id: '9', name: 'Mel', image: require('../../assets/cat3.jpg'), categoryId: '2' },
    { id: '10', name: 'Pipoca', image: require('../../assets/coelho.png'), categoryId: '3' },
  ];

  const filteredPets = selectedCategory
    ? pets.filter((pet) => pet.categoryId === selectedCategory)
    : pets;

  return (
    <View style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.header}>
            <Text style={styles.headerTitle}>
        {user?.name ? `Olá, ${user.name}` : 'Carregando...'}
      </Text>
      </View>

      {/* SCROLLVIEW PRINCIPAL */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Selecione um animal</Text>

        {/* CATEGORIAS */}
        <View style={styles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.categoryItem,
                  selectedCategory === item.id && { backgroundColor: '#cce5ff' },
                ]}
                activeOpacity={0.7}
                onPress={() =>
                  setSelectedCategory(selectedCategory === item.id ? null : item.id)
                }>
                <Image source={item.image} style={styles.categoryIcon} />
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* PETS FILTRADOS */}
        <View style={styles.petContainer}>
          {filteredPets.map((pet) => (
            <TouchableOpacity
              key={pet.id}
              style={styles.petCard}
              onPress={() => router.push({ pathname: '/animal', params: { id: pet.id } })}>
              <Image source={pet.image} style={styles.petImage} />
              <View style={styles.petInfo}>
                <Text style={styles.petName}>{pet.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

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
    </View>
  );
}


// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6BA1AE',
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
    backgroundColor: '#4b8694',
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
