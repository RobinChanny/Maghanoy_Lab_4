import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const AccountPage = () => {
  const router = useRouter(); // Hook for routing

  const handleLogout = () => {
    // Navigate to the index route
    router.push('/');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Page</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Account Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="location-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Saved Places</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="lock-closed-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="document-text-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Terms and Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="shield-checkmark-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Delete Account Button */}
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B4182D', // Header background color
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    marginTop: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#000',
  },
  deleteButton: {
    padding: 16,
    alignItems: 'center',
  },
  deleteText: {
    fontSize: 16,
    color: 'red',
  },
});

export default AccountPage;
