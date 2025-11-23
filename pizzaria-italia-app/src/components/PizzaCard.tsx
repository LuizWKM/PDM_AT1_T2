import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Pizza } from '../types/Pizza';

interface PizzaCardProps {
  pizza: Pizza;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const handleAdicionarItem = () => {
    Alert.alert(
      'Item Adicionado!',
      `${pizza.nome} foi adicionado ao carrinho!`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.pizzaCard}>
      {/* Imagem do produto */}
      <Image 
        source={{ uri: pizza.imagem }} 
        style={styles.pizzaImage}
        resizeMode="cover"
      />
      
      <View style={styles.pizzaInfo}>
        {/* Bloco 1: Nome do produto */}
        <Text style={styles.pizzaNome}>{pizza.nome}</Text>
        
        {/* Bloco 2: Descrição */}
        <Text style={styles.pizzaDescricao}>{pizza.descricao}</Text>
        
        {/* Bloco 3: Valor */}
        <Text style={styles.pizzaValor}>
          R$ {pizza.valor.toFixed(2).replace('.', ',')}
        </Text>
        
        {/* Botão Adicionar Item */}
        <TouchableOpacity 
          style={styles.botaoAdicionar}
          onPress={handleAdicionarItem}
        >
          <Text style={styles.botaoTexto}>Adicionar Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pizzaCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  pizzaImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
  },
  pizzaInfo: {
    padding: 15,
  },
  pizzaNome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 8,
  },
  pizzaDescricao: {
    fontSize: 14,
    color: '#636e72',
    lineHeight: 20,
    marginBottom: 12,
  },
  pizzaValor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 15,
  },
  botaoAdicionar: {
    backgroundColor: '#c92a2a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#c92a2a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
