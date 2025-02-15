import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const quizzes = [
  { id: '1', title: 'Vocabulário Básico', description: 'Teste seu conhecimento de palavras simples', icon: 'book' },
  { id: '2', title: 'Gramática Intermediária', description: 'Pratique regras gramaticais', icon: 'edit' },
  { id: '3', title: 'Expressões Comuns', description: 'Aprenda frases do dia a dia', icon: 'chat' },
];

const Quizzes = ({ navigation }) => {
  const handleStartQuiz = (quizId) => {
    // Lógica para iniciar o quiz (pode ser substituída por navegação ou função real)
    console.log(`Iniciar quiz: ${quizId}`);
    navigation.navigate('QuizScreen', { quizId }); // Exemplo de navegação
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.quizCard}>
            <View style={styles.quizHeader}>
              <MaterialIcons name={item.icon} size={30} color="#ff6f61" />
              <Text style={styles.quizTitle}>{item.title}</Text>
            </View>
            <Text style={styles.quizDescription}>{item.description}</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleStartQuiz(item.id)}
            >
              <Text style={styles.startButtonText}>Começar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  quizCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  quizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  quizDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  startButton: {
    backgroundColor: '#ff6f61',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Quizzes;