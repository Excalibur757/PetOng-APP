import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Tela: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const renderContent = () => {
    if (selectedOption === 'fale') {
      return (
        <Text style={styles.infoText}>
          Se houver qualquer problema relacionado ao aplicativo, envie um e-mail para:
          {'\n'}suporte@appong.org
        </Text>
      );
    } else if (selectedOption === 'info') {
      return (
        <Text style={styles.infoText}>
          Para assuntos específicos, entre em contato com:
          {'\n'}• adoções@ong.org
          {'\n'}• voluntarios@ong.org
          {'\n'}• eventos@ong.org
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Suporte</Text>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Image
          source={require('../../assets/Cachorro.png')}
          style={styles.dogImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>Como podemos ajudar você?</Text>
        <Text style={styles.subtitle}>Escolha uma das opções abaixo para continuar:</Text>

        <TouchableOpacity style={styles.button} onPress={() => setSelectedOption('fale')}>
          <Text style={styles.buttonText}>Fale conosco</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedOption('info')}>
          <Text style={styles.buttonText}>Informações</Text>
        </TouchableOpacity>

        {/* Conteúdo Condicional */}
        {renderContent()}
      </View>

      {/* Rodapé */}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D9CA9',
  },
  header: {
    backgroundColor: '#3B5A6F',
    paddingTop: 30,
    paddingBottom: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  dogImage: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3B5A6F',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#3B5A6F',
    padding: 15,
    borderRadius: 10,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#eee',
  },
});

export default Tela;
