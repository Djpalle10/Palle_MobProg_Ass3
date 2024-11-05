

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const PasswordRecovery = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.recoveryText}>Password Recovery</Text>
    </View>

    <TextInput label="Email" mode="outlined" style={styles.input} />

    <Button mode="contained" style={styles.button} onPress={() => {}}textColor="#fff"> Send instructions </Button>
    <Button mode="text" onPress={onSwitch}textColor="#000000"> Back to Login </Button>
    
  </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 260,
        backgroundColor: '#fff',
      },
    header: {
        alignItems: 'center',
    },
    recoveryText: {
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
    },
   
    input: {
        marginBottom: 20,
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

export default PasswordRecovery;