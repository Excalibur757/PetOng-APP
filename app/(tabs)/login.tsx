import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import api from "../api"; // ajuste se necessário
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { setUser } = useAuth(); // ✅ Agora dentro do componente
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valueApi, setValueApi] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const router = useRouter();
  /*
  const getApi = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://192.168.3.41:3000/ping");
      const data = await res.json();
      setValueApi(data.message);
    } catch (error) {
      console.error("Erro ao conectar com o backend:", error);
      setValueApi("Erro ao conectar com o servidor 😿");
      Alert.alert("Erro", "Não foi possível se conectar ao backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApi();
  }, []);
*/
  const handleLogin = async () => {
    try {
      const res = await api.post('/login', { email, password });
      console.log('🚀 Usuário retornado do backend:', res.data.user); // <== veja se tem cpf, endereco etc.
      setUser(res.data.user); // salva no contexto global
      Alert.alert('Bem-vindo', res.data.user.name);
      router.push('/(tabs)/home');
    } catch (error: any) {
      const msg = error?.response?.data?.error || 'Erro ao fazer login';
      setLoginError(msg);
      Alert.alert('Erro', msg);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Faça Login</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {loginError !== '' && (
          <Text style={styles.errorText}>{loginError}</Text>
        )}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => router.push("/(tabs)/cadastro")}
        >
          <Text style={styles.registerText}>Cadastre-se</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="small" color="#ff9800" style={styles.loader} />
        ) : (
          <Text style={styles.apiResponse}>{valueApi}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D9CA9', // mesmo fundo das outras telas
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loginContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B5A6F',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#EAEAEA',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#3B5A6F',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  registerText: {
    color: '#3B5A6F',
    fontWeight: '600',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: '#FF4444',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  apiResponse: {
    marginTop: 16,
    textAlign: 'center',
    color: '#333',
    fontSize: 14,
  },
  loader: {
    marginTop: 16,
  },
});
