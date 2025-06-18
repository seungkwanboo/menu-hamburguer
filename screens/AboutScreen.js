import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Aplicativo</Text>
      <Text style={styles.version}>Versão: 1.0.0</Text>
      <Text style={styles.author}>Desenvolvido por: Boo Seungkwan</Text>

      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Visite meu Site</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={sendEmail}>
        <Text style={styles.buttonText}>Entre em contato por email</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>2025 Boo Seungkwan. Todos os direitos reservados.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  version: {
    fontSize: 16,
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
});

export default AboutScreen;
