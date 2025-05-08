// app/(tabs)/usuario.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';

export default function UsuarioScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
      </View>
      <TouchableOpacity onPress={() => router.replace('../(tabs)/doacao')}>
        <Ionicons name="home" size={28} color="#555" />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=10' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Fulano da Silva</Text>
        <Text style={styles.userEmail}>fulano@email.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações</Text>

        <View style={styles.infoItem}>
          <Ionicons name="person-outline" size={20} color="#555" />
          <Text style={styles.infoText}>Nome: Fulano da Silva</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="mail-outline" size={20} color="#555" />
          <Text style={styles.infoText}>Email: fulano@email.com</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="key" size={20} color="#555" />
          <Text style={styles.infoText}>Senha: ********</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/doacao')}>
          <Ionicons name="gift" size={28} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/usuario')}>
          <Ionicons name="person-outline" size={28} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('../(tabs)/help')}>
          <Ionicons name="help-circle" size={28} color="#555" />
        </TouchableOpacity>
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    backgroundColor: '#4A90E2',
    paddingVertical: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -40,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
    marginBottom: 8,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#777',
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  infoText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#444',
  },
  logoutButton: {
    marginTop: 40,
    marginHorizontal: 50,
    backgroundColor: '#E74C3C',
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 16,
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
