import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AdoptionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Processo de Adoção</Text>

        <Text style={styles.sectionTitle}>PRÉ REQUISITOS NECESSÁRIOS PARA ADOÇÃO:</Text>
        <Text style={styles.text}>
          1. Ser maior de idade 24 anos{'\n'}
          2. Possuir endereço fixo.{'\n'}
          3. Apresentar comprovante de residência e cópia CPF e RG.{'\n'}
          4. Assinar Termo de Compromisso Adoção.{'\n'}
          5. Permitir monitoramento da adoção por telefone ou pessoalmente por um período mínimo de 6 meses.
        </Text>

        <Text style={styles.sectionTitle}>OBSERVAÇÕES IMPORTANTES:</Text>
        <Text style={styles.text}>
          Não doamos animais para exercer função de cão de guarda de estabelecimento comercial, chácaras ou sítios.{'\n'}
          Não doamos animais para locais onde o tutor não resida ou o animal fique sob responsabilidade de terceiros.{'\n'}
          Não permitimos que venham buscar o animal no abrigo sem ter passado por entrevista.
        </Text>

        {/* Formulário */}
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Data de Nascimento" />
        <TextInput style={styles.input} placeholder="Profissão" />
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Telefone/WhatsApp" />
        <TextInput style={styles.input} placeholder="Endereço de onde o animal irá morar" />
        <TextInput style={styles.input} placeholder="Nome do cãozinho que se interessa em adotar" />


        {/* Botões */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonGreen}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRed}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    backgroundColor: '#A0DAEB',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginVertical: 20,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  buttonGreen: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonRed: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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