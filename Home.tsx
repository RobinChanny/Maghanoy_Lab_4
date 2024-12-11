import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Switch, ScrollView} from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter
import {Ionicons,} from 'react-native-vector-icons';
import { useCart } from './CartContext'; // Correct import of the hook

const Home = () => {
  const { addToCart } = useCart();
  const router = useRouter();
  const products = [
    { id: '1', name: 'Maris Racal', price: 145.0, discount: 4, category:'ABS-CBN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNtiSPQ9EGnKivtoQvvUpHOEuRxedjpAQFw&s' },
    { id: '2', name: 'Sofia Fyang Smith', price: 140.0, discount: 17, category:'ABS-CBN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPg2-vw8w9185HLuk7RmWcwLxAnEXvYWQLw&s' },
    { id: '3', name: 'Kathryn Bernardo', price: 125.0, discount: 43, category:'ABS-CBN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwrZCgC7QLLdepRJU3iVlrMrZ15rQnQIQMw&s' },
    { id: '4', name: 'Liza Soberano', price: 1249.0, discount: 43, category:'ABS-CBN', image: 'https://filipinojournal.com/wp-content/uploads/2018/01/liza-2-1229.jpg' },
    { id: '5', name: 'Jane De Leon', price: 1399.0, discount: 43, category:'ABS-CBN', image: 'https://i.mydramalist.com/enLpQf.jpg' },
    { id: '6', name: 'Bini Aiah', price: 125.0, discount: 43, category:'Bini', image: 'https://entertainment.inquirer.net/files/2024/07/dotnet-banner-2024-07-07T185625.914.png' },
    { id: '7', name: 'Bini Maloi', price: 125.0, discount: 43, category:'Bini', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgBUdpW__0MZdLqxRbc__RiZVzbMX0oNggw&s' },
    { id: '8', name: 'Bini Mikha', price: 65.0, discount: 43, category:'Bini', image: 'https://raketcontent.com/bini_mikha_4001de6723.png' },
    { id: '9', name: 'Bini Colet', price: 85.0, discount: 43, category:'Bini', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5n-X3onEADqlyBxXuR9BYkbSGG1nngAFTA&s' },
    { id: '10', name: 'Bini Sheena', price: 105.0, discount: 43, category:'Bini', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREndF0SdvpSEx992gr4uE_yEju2VxQzLO9rw&s' },
    { id: '11', name: 'Bini Jhoanna', price: 65.0, discount: 43, category:'Bini', image: 'https://static.wikia.nocookie.net/bini/images/1/1d/Kpopcon_Jhoanna.jpg/revision/latest?cb=20210424102002' },
    { id: '12', name: 'Bini Gwen', price: 89.0, discount: 43, category:'Bini', image: 'https://static.wikia.nocookie.net/bini/images/7/7a/Kpopcon_Gwen.jpg/revision/latest/scale-to-width-down/299?cb=20210424101954' },
    { id: '13', name: 'Bini Stacey', price: 125.0, discount: 43, category:'Bini', image: 'https://static.wikia.nocookie.net/bini/images/c/cc/Kpopcon_Stacey.jpg/revision/latest/scale-to-width-down/299?cb=20210424102048' },
    { id: '14', name: 'Jessica Soho', price: 89.0, discount: 43, category:'GMA', image: 'https://media.philstar.com/photos/2021/08/09/jessica-soho_2021-08-09_19-42-11.jpg' },
    { id: '15', name: 'Jillian Ward', price: 125.0, discount: 43, category:'GMA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgR4cgWCqVU6quGHUFR0mykwHVPCvFUvqJPg&s' },
    { id: '16', name: 'Kyline Alcantara', price: 130.0, discount: 43,category:'GMA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFsQstGAQg2jjs0gyivdHBxxsLUfRPxZut7A&s' },
    { id: '17', name: 'Lisa', price: 562.0, category:'Black Pink', image: 'https://media.allure.com/photos/5f8dac2d2689023f4ca7091a/4:3/w_3108,h_2331,c_limit/lisa%20blackpink%20mac%20campaign.jpg' },
    { id: '18', name: 'Rose', price: 345.0, category:'Black Pink', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Blackpink_Ros%C3%A9_Rimowa_1.jpg' },
    { id: '19', name: 'Jennie', price: 1460.0, category:'Black Pink', image: 'https://rukminim2.flixcart.com/image/850/1000/kvfkivk0/poster/r/p/x/medium-jennie-blackpink-korean-singer-model-matte-finish-poster-original-imag8c36guuv3nb5.jpeg?q=90&crop=false' },
    { id: '20', name: 'Jisoo', price: 1640.0, category:'Black Pink', image: 'https://i.pinimg.com/736x/00/14/c0/0014c08afb0d2efb908e39a7f30284c2.jpg' },
    { id: '21', name: 'Hanni', price: 656.0, category:'New Jeans', image: 'https://www.nme.com/wp-content/uploads/2024/10/newjeans-hanni-audit-101024.jpg' },
    { id: '22', name: 'Haerin', price: 456.0, category:'New Jeans', image: 'https://www.nme.com/wp-content/uploads/2023/09/haerin-newjeans-akmu-love-lee-getty.jpg' },
    { id: '23', name: 'Minji', price: 725.0, category:'New Jeans', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/20230905_Minji_%28NewJeans%29.jpg/1200px-20230905_Minji_%28NewJeans%29.jpg' },
    { id: '24', name: 'Hyein', price: 251.0, category:'New Jeans', image: 'https://6.soompi.io/wp-content/uploads/image/20240410125346_Hyein.jpg?s=900x600&e=t' },
    { id: '25', name: 'Daniele', price: 125.0, category:'New Jeans', image: 'https://image.koreaboo.com/2024/09/20230905_Danielle_NewJeans-486x640.jpg' },
    { id: '26', name: 'Diwata', price: 25.0, category:'Gays', image: 'https://scontent.fcgy3-1.fna.fbcdn.net/v/t39.30808-6/469892685_901607932109946_5380976418337174053_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEIaNlmDDkyThnN4ZITFBdIONSOLeM6L7E41I4t4zovsdPcVWoMv-Iu7AQqoaB_PO3M5M6U3msyypzyMY-2uHEb&_nc_ohc=Ddm6i5Z1-3YQ7kNvgGRcgis&_nc_zt=23&_nc_ht=scontent.fcgy3-1.fna&_nc_gid=AeNy9tBcts4tUqp_xpCxGtR&oh=00_AYCy3YazK8svRDe_7g4n2iLz3WxQNMMeoKtOmsqRqRa9dA&oe=675F04C3' },
    { id: '27', name: 'Rosmar', price: 200.0, category:'Kupals', image: 'https://milyonaryo.com.ph/wp-content/uploads/2024/06/rosmar2.jpg' },
    { id: '28', name: 'Tyang', price: 125.0, category:'Kupals', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWypgm9FN3tgPhaPgs4iU2TCowqCaMXgu8zw&s' },
    { id: '29', name: 'Tekla', price: 115.0, category:'Gays', image: 'https://scontent.fcgy3-2.fna.fbcdn.net/v/t1.6435-9/122912893_1297153117289877_1027967737742343009_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeF41NqbxkiNmCo8vmZcW4H6f7P0wqn1Yp1_s_TCqfVinaD5SMRrYx85U6xugbQi7DRMrmzTZOCEmVDhtrIKZizN&_nc_ohc=33qflBgDhZUQ7kNvgGByCis&_nc_zt=23&_nc_ht=scontent.fcgy3-2.fna&_nc_gid=Aw6D6aBlk6JOkdrPLz3ahKa&oh=00_AYBxURhI-vYDpiUSv77wIU8QYnaj-LLyruGozeix1198aA&oe=6780B9F7' },
    { id: '30', name: 'Awra', price: 186.0, category:'Gays', image: 'https://media.philstar.com/photos/2023/07/02/12023-07-0121-05-09_2023-07-02_22-41-34.jpg' },
    { id: '31', name: 'Jaybee Sucal', price: 83.0, category:'Kupals', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdhVBkVtwq0gpeg6uHiWloUAy5kzgBWT9fw&s' },
    { id: '32', name: 'Wally Bayola', price: 110.0, category:'Kupals', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRC__6zyt355s-zcr8xQBc49j_wcZg6TBF2w&s' },
    { id: '33', name: 'Manny Pacquio', price: 18.0, category:'Kupals', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs0mcn1ICrTDgk0FHhECUWHhay7g1igh0mQ&s' },
    { id: '34', name: 'Leila Delima', price: 18.0, category:'Politicians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdRJzyS4piWKvFipHElFDqoLYsqPjvaNk-LCkBbISc48FghsoNRBcR7-M3REOQuB69lA&usqp=CAU' },
    { id: '35', name: 'Sarah Duterte', price: 99999999.0, category:'Politicians', image: 'https://images.gmanews.tv/webpics/2024/11/sara_duterte_thanks_2024_11_29_18_39_16.jpg' },
  ];

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'ABS-CBN', 'GMA', 'Bini', 'Black Pink', 'New Jeans', 'Politicians', 'Gays', 'Kupals'];
  
  
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>
        ${item.price.toFixed(2)} {item.discount && <Text style={styles.discount}>({item.discount}% off)</Text>}
      </Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
        <Ionicons name="cart" size={24} color="white" style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );

  const filteredProducts = products.filter(
    (product) => (selectedCategory === 'All' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor='#666'
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal style={styles.categoryList}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.selectedCategoryButton]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[styles.categoryButtonText, selectedCategory === category && styles.selectedCategoryButtonText]}
            >
              {category}
            </Text>
            {selectedCategory === category && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Vertical Grid Layout with 2 Products per Row */}
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.productListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4', // Soft light color for the background
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#B4182D', // Rich Red
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: 'white', // Light background
  },
  categoryList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCategoryButton: {},
  categoryButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black', // Default text color
    textAlign: 'center',
  },
  selectedCategoryButtonText: {
    color: 'black', // Light color for selected
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: 'red', // Light underline for selected category
    marginTop: 4,
  },
  productListContainer: {
    flexGrow: 1,
    marginTop: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%',
    backgroundColor: 'white', // White background for product cards
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    height: 300, // Fixed height for consistent product card size
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#B4182D', // Red for price
    marginBottom: 10,
  },
  discount: {
    fontSize: 12,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#B4182D',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 'auto', // Push the button to the bottom of the card
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8, // Space between text and icon
  },
  cartIcon: {
    marginLeft: 8, // Space between icon and text
  },
});

export default Home; 