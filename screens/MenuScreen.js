import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>

      {/* Example navigation options */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Help')}
      >
        <Text style={styles.menuText}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    backgroundColor: '#29293d',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  menuText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default MenuScreen;
