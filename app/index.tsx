import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Importa o hook para navegação

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter(); // Cria instância da navegação

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seu Melhor amigo{'\n'}está aqui</Text>
      
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={require('../assets/Cachorro.png')}
        />
      </View>

      <Text style={styles.subtitle}>
        "Seu novo melhor amigo pode estar te esperando! 🐶🐱{'\n'}
        Cadastre-se no nosso app e adote!"
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/cadastro')} // Aqui é a mágica da navegação!
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  imageContainer: {
    backgroundColor: '#eee',
    borderRadius: 100,
    padding: 20,
    marginVertical: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    fontSize: 14,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#999',
  },
  bottomBar: {
    width: width * 0.2,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A0DAD', // Roxo escuro (ou escolha outra cor que destaque no fundo #eee)
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 65, // Ajuste conforme necessário
    alignSelf: 'center',
    zIndex: 10, // Fica por cima de outros elementos
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});