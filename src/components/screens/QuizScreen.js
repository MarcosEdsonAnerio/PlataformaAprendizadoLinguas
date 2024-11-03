import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizScreen = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    // Simulando a obtenção de perguntas
    const fetchQuiz = async () => {
      setQuestion('Qual é a tradução de "cat" em português?');
      setAnswer('Gato');
    };
    fetchQuiz();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <Button title="Mostrar Resposta" onPress={() => alert(`Resposta: ${answer}`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default QuizScreen;
