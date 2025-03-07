import React, { useState, useLayoutEffect, useContext } from 'react'; 
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../contexts/ThemeContext'; 

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { toggleTheme, theme } = useContext(ThemeContext); // Obtém a função para alternar tema

  // Botão na navegação para alterar o tema
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
          <MaterialIcons name="wb-sunny" size={24} color={theme.isDark ? 'white' : 'black'} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, toggleTheme, theme]);

  const handleLogin = () => {
    if (!username.trim()) {
      setError('Por favor, preencha seu nome!');
      return;
    }
    setError('');
    navigation.navigate('Home', { username });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Bem-vindo à Plataforma de Aprendizado de Línguas!</Text>
      <TextInput
        style={[styles.input, { color: theme.colors.text, borderColor: theme.colors.text }]}
        placeholder="Digite seu nome"
        placeholderTextColor={theme.isDark ? '#bbb' : '#666'}
        value={username}
        onChangeText={(text) => {
          setUsername(text);
          if (error) setError('');
        }}
      />
      {error ? <Text style={[styles.errorText, { color: 'red' }]}>{error}</Text> : null}
      <Button title="Entrar" onPress={handleLogin} color={theme.colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    marginBottom: 20,
  },
});

export default LoginScreen;
