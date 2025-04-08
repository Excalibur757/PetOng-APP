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

export default function Home() {
    const [valueApi, setValueApi] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const getApi = async () => {
        setLoading(true);

        try {
            setTimeout(async () => {
                const res = await fetch("http://localhost:3000/ping"); // 👈 use seu IP local aqui!
                if (!res.ok) {
                    throw new Error(`Erro HTTP: ${res.status}`);
                }

                const data: { message: string } = await res.json();
                setValueApi(data.message);
            }, 3000);
        } catch (error) {
            console.error("Erro ao conectar com o backend:", error);
            setValueApi("Erro ao conectar com o servidor 😿");
            Alert.alert("Erro", "Não foi possível se conectar ao backend.");
        } finally {
            setTimeout(() => setLoading(false), 3000);
        }
    };

    useEffect(() => {
        getApi();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.loginTitle}>Faça Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                />

                <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/(tabs)/home")}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerButton} onPress={() => router.push("/(tabs)/cadastro")}>
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
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#ADD8E6",
    },
    loginContainer: {
        alignItems: "center",
        width: "100%",
        maxWidth: 350,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    loginTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#ff9800",
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: "#ff9800",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        width: "100%",
        alignItems: "center",
    },
    registerButton: {
        marginTop: 10,
    },
    registerText: {
        color: "#ff9800",
        fontSize: 16,
    },
    loader: {
        marginTop: 20,
    },
    apiResponse: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },    
});
