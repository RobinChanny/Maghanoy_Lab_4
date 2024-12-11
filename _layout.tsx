import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icon library
import { CartProvider } from './CartContext'; // Import the CartProvider

const DashboardLayout = () => {
  return (
    <CartProvider>
      <Tabs screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#B4182D',
        }
      }}>
        
        <Tabs.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        {/* Orders Screen */}
        <Tabs.Screen
          name="Orders"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
            tabBarLabel: 'Orders',
            
          }}
        />
        {/* Account Screen */}
        <Tabs.Screen
          name="account"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            tabBarLabel: 'Account',
            headerShown: false
          }}
        />
      </Tabs>
    </CartProvider>
  );
};

export default DashboardLayout; 