import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from 'react-native';

const Login: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const router = useRouter();

    const handleSubmit = () => {
        if (!agree) {
            Alert.alert("Aviso", "Você precisa concordar com os termos.");
            return;
        }

        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Senha:', password);
        console.log('Concorda com os termos:', agree);

        router.replace('/(tabs)/home');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Crie a sua{'\n'}conta</Text>

            <Text style={styles.subtitle}>
                Crie sua conta para acessar nosso aplicativo e{'\n'}busque seu melhor amigo!
            </Text>

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
                style={styles.input}
            />

            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setAgree(!agree)}
            >
                <View style={[styles.checkbox, agree && styles.checkedBox]} />
                <Text style={styles.checkboxText}>
                    Eu concordo com os <Text style={styles.link}>Termos de Serviço</Text> e{' '}
                    <Text style={styles.link}>Políticas de Privacidade</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.replace('../(tabs)/login')}>
                <Text style={styles.loginText}>
                    Já possui uma conta? <Text style={styles.link}>Login</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>

            <Image
                source={require('../../assets/pets.png')}
                style={styles.image}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 12,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#ddd',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        fontSize: 14,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        gap: 10,
        marginBottom: 16,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 2,
        borderRadius: 3,
    },
    checkedBox: {
        backgroundColor: '#f7941d',
    },
    checkboxText: {
        fontSize: 12,
        flex: 1,
        flexWrap: 'wrap',
    },
    link: {
        color: '#f7941d',
    },
    loginText: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#ddd',
        borderRadius: 20,
        padding: 14,
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default Login;
