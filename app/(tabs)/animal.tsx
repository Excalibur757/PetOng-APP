import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Animal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Descrição Detalhada</Text>
      <Ionicons name="menu" size={24} style={styles.menuIcon} />

      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/dog2.png')}
            style={styles.image}
          />
          <Text style={styles.name}>Zoro</Text>
        </View>

        <Text style={styles.infoText}>Sexo:</Text>
        <Text style={styles.infoText}>Peso:</Text>
        <Text style={styles.infoText}>Pelagem:</Text>
        <Text style={styles.infoText}>Ano de nascimento:</Text>
        <Text style={styles.infoText}>Raça:</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adotar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

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
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
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
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
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