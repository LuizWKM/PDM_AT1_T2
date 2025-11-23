import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>🍕 Pizzaria Italia</Text>
      <Text style={styles.headerSubtitle}>Cardápio de Pizzas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#c92a2a',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ffe0e0',
    textAlign: 'center',
    marginTop: 5,
  },
});
