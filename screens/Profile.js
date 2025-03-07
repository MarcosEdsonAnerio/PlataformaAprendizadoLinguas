import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Profile = ({ route, navigation }) => {
  const { user: userParam, onSave } = route.params;
  const [name, setName] = useState(userParam.name);
  const [photo, setPhoto] = useState(userParam.photo);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    const updatedUser = { ...userParam, name, photo };
    onSave(updatedUser);
    setIsEditing(false);
    navigation.goBack();
  };

  const handleCancel = () => {
    setName(userParam.name);
    setPhoto(userParam.photo);
    setIsEditing(false);
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permissão negada', 'Precisamos de permissão para acessar suas fotos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: photo }} style={styles.profilePhoto} />
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        ) : (
          <>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userLevel}>{userParam.level}</Text>
          </>
        )}
      </View>

      {isEditing && (
        <>
          <View style={styles.urlContainer}>
            <TextInput
              style={styles.urlInput}
              value={photo}
              onChangeText={setPhoto}
              placeholder="URL da foto"
            />
            <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
              <Text style={styles.imagePickerButtonText}>Escolher Imagem</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <View style={styles.buttonContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.sectionTitle}>Conquistas</Text>
      <FlatList
        data={userParam.achievements}
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

      <Text style={styles.sectionTitle}>Atividades Recentes</Text>
      <FlatList
        data={userParam.recentActivities}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: '80%',
    marginVertical: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  urlContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  urlInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: '80%',
    marginVertical: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  imagePickerButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  imagePickerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
