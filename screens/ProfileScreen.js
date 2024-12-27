import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use react-native-vector-icons or Expo icons

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture with Camera Icon */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
          style={styles.profilePicture}
        />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Ionicons name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Full Name and Phone Number */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Full Name: Tejasvi Garg</Text>
        <Text style={styles.infoText}>Phone Number: +123 456 7890</Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e2f',
  },
  profileContainer: {
    
    position: 'relative',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'grey',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007bff',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  infoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  infoText: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: '#29293d',
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  logoutButton: {
    
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
