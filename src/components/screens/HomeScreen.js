import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Plataforma de Aprendizado de Línguas!</Text>
      <Button
        title="Iniciar Quiz"
        onPress={() => navigation.navigate('QuizScreen')}
      />
      <Button
        title="Iniciar Jogo"
        onPress={() => navigation.navigate('GameScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
