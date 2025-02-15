import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = () => {
  // Dados fictícios do usuário
  const user = {
    name: 'João Silva',
    level: 'Intermediário',
    photo: 'https://via.placeholder.com/150',
    activitiesCompleted: 45,
    totalActivities: 100,
    score: 1200,
    achievements: [
      { id: '1', name: 'Iniciante', icon: 'star' },
      { id: '2', name: 'Curioso', icon: 'lightbulb' },
      { id: '3', name: 'Viajante', icon: 'flight' },
    ],
    recentActivities: [
      { id: '1', name: 'Flashcards de Comida', date: '10/10/2023', score: 50 },
      { id: '2', name: 'Quiz de Gramática', date: '09/10/2023', score: 30 },
      { id: '3', name: 'Jogo de Pronúncia', date: '08/10/2023', score: 70 },
    ],
  };

  // Função para calcular o progresso
  const progress = (user.activitiesCompleted / user.totalActivities) * 100;

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={{ uri: user.photo }} style={styles.profilePhoto} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userLevel}>{user.level}</Text>
      </View>

      {/* Progresso */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressTitle}>Progresso Geral</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {user.activitiesCompleted} de {user.totalActivities} atividades concluídas
        </Text>
      </View>

      {/* Pontuação e Conquistas */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.score}</Text>
          <Text style={styles.statLabel}>Pontos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.achievements.length}</Text>
          <Text style={styles.statLabel}>Conquistas</Text>
        </View>
      </View>

      {/* Conquistas */}
      <Text style={styles.sectionTitle}>Conquistas</Text>
      <FlatList
        data={user.achievements}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.achievementCard}>
            <MaterialIcons name={item.icon} size={24} color="#FFD700" />
            <Text style={styles.achievementName}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.achievementsList}
      />

      {/* Atividades Recentes */}
      <Text style={styles.sectionTitle}>Atividades Recentes</Text>
      <FlatList
        data={user.recentActivities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.activityCard}>
            <Text style={styles.activityName}>{item.name}</Text>
            <Text style={styles.activityDate}>{item.date}</Text>
            <Text style={styles.activityScore}>+{item.score} pontos</Text>
          </View>
        )}
        contentContainerStyle={styles.activitiesList}
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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userLevel: {
    fontSize: 16,
    color: '#555',
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#28a745',
  },
  progressText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 16,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  achievementsList: {
    paddingBottom: 10,
  },
  achievementCard: {
    alignItems: 'center',
    marginRight: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  achievementName: {
    fontSize: 14,
    marginTop: 5,
    color: '#555',
  },
  activitiesList: {
    paddingBottom: 20,
  },
  activityCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  activityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activityDate: {
    fontSize: 14,
    color: '#555',
  },
  activityScore: {
    fontSize: 14,
    color: '#28a745',
  },
});

export default Profile;