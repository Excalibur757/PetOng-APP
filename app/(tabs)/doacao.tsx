import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native'; // importe aqui

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
            source={require('../../assets/qrcode.png')}
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
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Ajude a gente com qualquer valor</Text>
        </View>
        <Image
          source={require('../../assets/pets.png')}
          style={styles.dogImage}
          resizeMode="contain"
        />
        <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
          <Text style={styles.title}>Escolha uma forma de doação</Text>

          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconItem} onPress={() => setMetodoSelecionado('picpay')}>
              <FontAwesome name="money" size={42} color="white" />
              <Text style={styles.iconLabel}>PicPay</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconItem} onPress={() => setMetodoSelecionado('pix')}>
              <MaterialIcons name="qr-code" size={42} color="white" />
              <Text style={styles.iconLabel}>Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconItem} onPress={() => setMetodoSelecionado('banco')}>
              <FontAwesome5 name="university" size={42} color="white" />
              <Text style={styles.iconLabel}>Transferência{'\n'}Bancária</Text>
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
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/doacao')}>
          <Ionicons name="gift" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/usuario')}>
          <Ionicons name="person" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/help')}>
          <Ionicons name="help-circle" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/home')}>
          <Ionicons name="home" size={28} color="#333" />
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
  header: {
    backgroundColor: '#478996',
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    top: -20
  },
  title: {
    fontSize: 21,
    marginVertical: 20,
    color: '#F0F8FF',
    fontWeight: '500',
    textShadowColor: '#0009',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
  },
  iconItem: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  iconLabel: {
    marginTop: 6,
    color: '#F0F8FF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  grayBox: {
    backgroundColor: '#D9EAF0',
    width: '90%',
    padding: 20,
    alignItems: 'center',
    minHeight: 120,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 24,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1F2E35',
    fontWeight: '500',
  },
  qrcode: {
    width: 160,
    height: 160,
    borderRadius: 8,
  },
  locations: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  local: {
    fontWeight: 'bold',
    color: '#F0F8FF',
    fontSize: 17,
    marginBottom: 6,
    textShadowColor: '#0005',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  endereco: {
    color: '#F8F9FA',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#4F7986',
    borderTopWidth: 1,
    borderColor: '#2E4F57',
  },
  dogImage: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 10,
  }
  
});
