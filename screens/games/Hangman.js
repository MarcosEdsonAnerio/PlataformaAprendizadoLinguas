import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

const Hangman = () => {
  const wordToGuess = 'apple'; // Palavra a ser adivinhada
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState(null); // 
  const [statusMessage, setStatusMessage] = useState('');

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || incorrectGuesses >= 6 || gameStatus) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!wordToGuess.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  const displayWord = () => {
    return wordToGuess.split('').map((letter, index) => (
      <Text key={index} style={styles.letter}>
        {guessedLetters.includes(letter) ? letter : '_'}
      </Text>
    ));
  };

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  useEffect(() => {
    if (incorrectGuesses === 6) {
      setGameStatus('lose');
      setStatusMessage('Você perdeu! A palavra correta era: ' + wordToGuess);
    }

    if (wordToGuess.split('').every(letter => guessedLetters.includes(letter))) {
      setGameStatus('win');
      setStatusMessage('Parabéns! Você acertou a palavra.');
    }
  }, [incorrectGuesses, guessedLetters]);

  const renderHangman = () => {
    const hangmanParts = [
      <Circle cx="100" cy="80" r="20" stroke="black" strokeWidth="2" fill="white" key="head" />,
      <Line x1="100" y1="100" x2="100" y2="180" stroke="black" strokeWidth="2" key="body" />,
      <Line x1="100" y1="120" x2="60" y2="140" stroke="black" strokeWidth="2" key="leftArm" />,
      <Line x1="100" y1="120" x2="140" y2="140" stroke="black" strokeWidth="2" key="rightArm" />,
      <Line x1="100" y1="180" x2="60" y2="220" stroke="black" strokeWidth="2" key="leftLeg" />,
      <Line x1="100" y1="180" x2="140" y2="220" stroke="black" strokeWidth="2" key="rightLeg" />,
    ];

    return (
      <Svg height="300" width="200">
        {hangmanParts.slice(0, incorrectGuesses)} 
      </Svg>
    );
  };

  const resetGame = () => {
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus(null); 
    setStatusMessage(''); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>
      <Text style={styles.subtitle}>Adivinhe a palavra antes de completar o boneco:</Text>
      {renderHangman()}
      <View style={styles.wordContainer}>
        {displayWord()}
      </View>
      <Text style={styles.subtitle}>Erros: {incorrectGuesses}/6</Text>

      {statusMessage && (
        <View style={[styles.statusMessageContainer, gameStatus === 'lose' ? styles.errorMessage : styles.successMessage]}>
          <Text style={styles.statusMessageText}>{statusMessage}</Text>
        </View>
      )}

      <View style={styles.alphabetContainer}>
        {alphabet.map((letter) => (
          <TouchableOpacity
            key={letter}
            style={styles.letterButton}
            onPress={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameStatus}
          >
            <Text style={styles.letterButtonText}>{letter.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {(gameStatus || incorrectGuesses === 6) && (
        <TouchableOpacity style={styles.restartButton} onPress={resetGame}>
          <Text style={styles.restartButtonText}>Reiniciar Jogo</Text>
        </TouchableOpacity>
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
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  wordContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  letter: {
    fontSize: 30,
    margin: 5,
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  letterButton: {
    width: 30,
    height: 30,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  letterButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restartButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusMessageContainer: {
    padding: 15,
    marginVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
  },
  successMessage: {
    backgroundColor: '#d3f9d8', 
  },
  errorMessage: {
    backgroundColor: '#fce3e1', 
  },
  statusMessageText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Hangman;
