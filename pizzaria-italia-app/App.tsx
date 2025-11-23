import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { Header, PizzaCard } from './src/components';
import { pizzasData } from './src/data/pizzas';
import { Pizza } from './src/types/Pizza';

export default function App() {
  // Constante renderItem
  const renderItem = ({ item }: { item: Pizza }) => (
    <PizzaCard pizza={item} />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Componente Header */}
      <Header />

      {/* FlatList com dados das pizzas */}
      <FlatList
        data={pizzasData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 15,
    paddingBottom: 20,
  },
});
