
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Login = ({ onSwitch, onRegister }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.loginText}>Log In Page</Text>
    </View>

    <TextInput  label="Email" mode="outlined" style={styles.input}/>
    <TextInput label="Password" mode="outlined" secureTextEntry style={styles.input} />
        
    <Button mode="contained" style={styles.button} onPress={() => {}}> Login </Button>
    <Button mode="text" onPress={onSwitch}textColor="#000000">  Forgot Password? </Button>
    <Button mode="text" onPress={onRegister}textColor="#000000"> Sign Up </Button>

  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 210,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center', 
    marginBottom: 20,
    color: '#fff',
  },
  loginText: {
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
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

export default Login;
