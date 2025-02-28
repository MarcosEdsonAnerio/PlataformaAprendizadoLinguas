import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const FastTranslation = () => {
  // Lista de palavras ou frases em inglês e suas traduções
  const words = [
    { english: 'Apple', portuguese: 'maçã' },
    { english: 'Dog', portuguese: 'cachorro' },
    { english: 'House', portuguese: 'casa' },
    { english: 'Friend', portuguese: 'amigo' },
    { english: 'Computer', portuguese: 'computador' },
    { english: 'Hello', portuguese: 'olá' },
    { english: 'Goodbye', portuguese: 'adeus' },
  ];

  const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(30); 
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [messageType, setMessageType] = useState(''); 

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer); 
    } else if (timeLeft === 0) {
      setIsGameOver(true);
      setMessage(`Fim de jogo! Sua pontuação é: ${score}`);
      setMessageType('gameOver'); 
    }
  }, [timeLeft]);

  const handleSubmit = () => {
    if (input.toLowerCase() === currentWord.portuguese.toLowerCase()) {
      setScore(score + 1);
      setMessage('Correta!');
      setMessageType('success'); 
    } else {
      setMessage('Incorreta, tente novamente!');
      setMessageType('error'); 
    }
    // Seleciona uma nova palavra ou frase
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    setInput('');
  };

  const handleRestart = () => {
    setIsGameOver(false);
    setScore(0);
    setTimeLeft(30);
    setMessage('');
    setMessageType(''); 
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tradução Rápida</Text>
      {!isGameOver ? (
        <>
          <Text style={styles.word}>Traduza esta palavra: {currentWord.english}</Text>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Digite aqui a sua tradução..."
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
          <Text style={styles.time}>Tempo Restante: {timeLeft}s</Text>
          {message && (
            <View
              style={[
                styles.messageContainer,
                messageType === 'success' && styles.successMessage,
                messageType === 'error' && styles.errorMessage,
                messageType === 'gameOver' && styles.gameOverMessage,
              ]}
            >
              <Text style={styles.messageText}>{message}</Text>
            </View>
          )}
        </>
      ) : (
        <>
          <View style={[styles.messageContainer, styles.gameOverMessage]}>
            <Text style={styles.messageText}>{message}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRestart}>
            <Text style={styles.buttonText}>Reiniciar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  word: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  time: {
    fontSize: 18,
    marginBottom: 20,
  },
  messageContainer: {
    padding: 15,
    marginVertical: 20,
    borderRadius: 10,
    width: '50%',
    alignItems: 'center',
  },
  successMessage: {
    backgroundColor: '#d3f9d8', 
  },
  errorMessage: {
    backgroundColor: '#fce3e1',
  },
  gameOverMessage: {
    backgroundColor: '#fef2b6', 
  },
  messageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default FastTranslation;
