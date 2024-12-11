// app/dashboard/(tabs)/Orders.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useCart } from './CartContext'; // Assuming you have a CartContext for managing cart
import { useRouter } from 'expo-router';

const Orders = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart(); // Access cart and actions from context
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      {/* Display product image */}
      <Image source={{ uri: item.image || 'https://via.placeholder.com/80' }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>₱{item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity === 1}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.emptyMessage}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Ensure keys are unique and string
        />
      )}
      <TouchableOpacity onPress={clearCart} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
    alignItems: 'center', // Center align content
  },
  cartItemImage: {
    width: 80,  // Adjusted image width
    height: 80, // Adjusted image height
    borderRadius: 8,
    marginRight: 15,
  },
  cartItemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#B4182D',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    backgroundColor: '#115D33',
    padding: 8,
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 12,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  removeButton: {
    backgroundColor: '#115D33',
    paddingVertical: 10, // Reduced padding for compactness
    paddingHorizontal: 10, // Adjusted horizontal padding
    borderRadius: 5,
    marginTop: 10,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  clearButton: {
    backgroundColor: '#115D33',
    paddingVertical: 8, // Reduced padding for compactness
    paddingHorizontal: 20, // Adjusted horizontal padding
    borderRadius: 5,
    marginTop: 20,
  },
  clearButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Orders;
