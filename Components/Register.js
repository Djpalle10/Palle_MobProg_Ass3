
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Register = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.registerText}>Register Account</Text>
    </View>

    <TextInput label="Name" mode="outlined" style={styles.input} />
    <TextInput label="Email" mode="outlined" style={styles.input} />
    <TextInput label="Password" mode="outlined" secureTextEntry style={styles.input} />

    <Button mode="contained" style={styles.button} onPress={() => {}}textColor="#FFF"> Sign Up </Button>
    <Button mode="text" onPress={onSwitch}textColor="#000000"> Already have an account?  Login </Button>

  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 200,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center', 
    marginBottom: 20,
  },
  registerText: {
    fontWeight: 'bold', 
    color: '#000000',
  },
  input: {
    marginBottom: 16,
    width: '90%', 
    alignSelf: 'center', 
  },
  button: {
    marginBottom: 16,
    width: 200, 
    alignSelf: 'center',
    backgroundColor: '#000000',
  },
});

export default Register;
