import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import api from '../api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!agree) {
      Alert.alert("Aviso", "Você precisa concordar com os termos.");
      return;
    }

    try {
      const res = await api.post('/register', { name, email, password });
      Alert.alert('Sucesso', res.data.message);
      router.replace('/(tabs)/login');
    } catch (error: any) {
      const msg = error?.response?.data?.error || 'Erro ao cadastrar';
      Alert.alert('Erro', msg);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.registerContainer}>
        <Text style={styles.registerTitle}>Crie sua conta</Text>

        <TextInput
          placeholder="Nome completo"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgree(!agree)}>
          <View style={[styles.checkbox, agree && styles.checkedBox]} />
          <Text style={styles.checkboxText}>
            Eu concordo com os <Text style={styles.link}>Termos de Serviço</Text> e{' '}
            <Text style={styles.link}>Políticas de Privacidade</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/(tabs)/login')} style={styles.loginLink}>
          <Text style={styles.registerText}>
            Já possui uma conta? <Text style={styles.link}>Login</Text>
          </Text>
        </TouchableOpacity>

        <Image source={require('../../assets/pets.png')} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#478996',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  registerContainer: {
    padding: 24,
    backgroundColor: '#5D9CA9',
    marginHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  registerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#3B5A6F',
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#3B5A6F',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#3B5A6F',
  },
  checkboxText: {
    flex: 1,
    color: '#333',
    fontSize: 14,
  },
  link: {
    color: '#3B5A6F',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#3B5A6F',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginLink: {
    marginTop: 12,
    alignItems: 'center',
  },
  registerText: {
    color: '#3B5A6F',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
    marginTop: 24,
  },
});
