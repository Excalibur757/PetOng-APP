import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';
import api from '../api';

export default function UsuarioScreen(): JSX.Element {
  const { user, setUser } = useAuth();

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    cpf: user?.cpf || '',
    endereco: user?.endereco || '',
    celular: user?.celular || '',
    nascimento: user?.nascimento || '',
  });

  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSalvar = async () => {
    try {
      const res = await api.put(`/users/${user.id}`, form);
      setUser(res.data);
      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      setEditMode(false);
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível salvar as alterações');
    }
  };

  const handleLogout = () => {
    setUser(null);
    router.replace('/login');
  };

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return Alert.alert('Erro', 'As senhas não coincidem');
    }

    try {
      await api.put(`/change-password/${user.id}`, {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });
      Alert.alert('Sucesso', 'Senha atualizada com sucesso!');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setShowPasswordChange(false);
    } catch (err) {
      Alert.alert('Erro', err.response?.data?.error || 'Erro ao atualizar senha');
    }
  };

  const renderInfoItem = (icon: any, label: string, field: keyof typeof form) => (
    <View style={styles.infoItem}>
      <Ionicons name={icon} size={20} color="#555" />
      {editMode ? (
        <TextInput
          style={styles.infoInput}
          value={form[field]}
          onChangeText={text => handleChange(field, text)}
          placeholder={label}
        />
      ) : (
        <Text style={styles.infoText}>{label}: {form[field]}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Meu Perfil</Text>
          </View>

          <View style={styles.profileContainer}>
            <Text style={styles.username}>{form.name}</Text>
            <Text style={styles.userEmail}>{form.email}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Informações</Text>
            {renderInfoItem('person-outline', 'Nome', 'name')}
            {renderInfoItem('mail-outline', 'Email', 'email')}
            {renderInfoItem('key-outline', 'CPF', 'cpf')}
            {renderInfoItem('location-outline', 'Endereço', 'endereco')}
            {renderInfoItem('call-outline', 'Celular', 'celular')}
            {renderInfoItem('calendar-outline', 'Nascimento', 'nascimento')}
          </View>

          {editMode ? (
            <TouchableOpacity style={styles.button} onPress={handleSalvar}>
              <Ionicons name="save-outline" size={20} color="#fff" />
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={() => setEditMode(true)}>
              <Ionicons name="create-outline" size={20} color="#fff" />
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>

          {/* Botão para alterar senha */}
          {showPasswordChange ? (
            <>
              <TextInput
                style={styles.infoInput}
                placeholder="Senha atual"
                secureTextEntry
                value={passwordData.currentPassword}
                onChangeText={text => setPasswordData({ ...passwordData, currentPassword: text })}
              />
              <TextInput
                style={styles.infoInput}
                placeholder="Nova senha"
                secureTextEntry
                value={passwordData.newPassword}
                onChangeText={text => setPasswordData({ ...passwordData, newPassword: text })}
              />
              <TextInput
                style={styles.infoInput}
                placeholder="Confirmar nova senha"
                secureTextEntry
                value={passwordData.confirmPassword}
                onChangeText={text => setPasswordData({ ...passwordData, confirmPassword: text })}
              />
              <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
                <Text style={styles.buttonText}>Salvar nova senha</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setShowPasswordChange(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity style={styles.button} onPress={() => setShowPasswordChange(true)}>
              <Text style={styles.buttonText}>Alterar senha</Text>
            </TouchableOpacity>
          )}

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
        <TouchableOpacity onPress={() => router.replace('../(tabs)/home')}>
          <Ionicons name="home" size={28} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#5D9CA9',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  container: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#478996',
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
    marginTop: 20,
    paddingHorizontal: 16,
  },
  username: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  infoInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 4,
    fontSize: 16,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginHorizontal: 50,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: '#E74C3C',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
});
