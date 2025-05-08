import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function App() {
  const [metodoSelecionado, setMetodoSelecionado] = useState<'pix' | 'picpay' | 'banco' | null>(null);
  const router = useRouter();

  const renderConteudo = (): JSX.Element => {
    switch (metodoSelecionado) {
      case 'pix':
        return <Text style={styles.info}>Chave Pix: caosemdono@ong.org</Text>;
      case 'picpay':
        return (
          <Image
            source={require('../../assets/qrcode.png')} // Caminho para sua imagem
            style={styles.qrcode}
            resizeMode="contain"
          />
        );
      case 'banco':
        return (
          <Text style={styles.info}>
            Banco: 001 - Agência: 1234-5 {'\n'}Conta: 12345-6 - ONG Cão Sem Dono
          </Text>
        );
      default:
        return <Text style={styles.info}>Selecione um meio de doação</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forma de Doação</Text>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconItem} onPress={() => setMetodoSelecionado('picpay')}>
          <FontAwesome name="money" size={48} color="green" />
          <Text>Pic Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconItem} onPress={() => setMetodoSelecionado('pix')}>
          <MaterialIcons name="qr-code" size={48} color="black" />
          <Text>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconItem} onPress={() => setMetodoSelecionado('banco')}>
          <FontAwesome5 name="university" size={48} color="black" />
          <Text style={{ textAlign: 'center' }}>Transferência{'\n'}bancária</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grayBox}>
        {renderConteudo()}
      </View>

      <View style={styles.locations}>
        <Text style={styles.local}>LOCALIZAÇÃO</Text>
        <Text style={styles.endereco}>
          Clínica Veterinária Popular Cão Sem Dono{'\n'}
          Rua Honório Serpa, 259, Jardim Vergueiro, SP{'\n\n'}
          Bazar Permanente da ONG Cão Sem Dono{'\n'}
          Rua Vitor Emanuel, 200, Sacomã, SP
        </Text>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6BA1AE',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    color: 'white',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  iconItem: {
    alignItems: 'center',
  },
  grayBox: {
    backgroundColor: '#ccc',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    minHeight: 120,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
  },
  qrcode: {
    width: 150,
    height: 150,
  },
  locations: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  local: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  endereco: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
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
