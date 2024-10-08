import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState<any[]>([]);

  const handleAddItem = () => {
    const newItem = { name: dishName, description, course, price };
    setMenuItems([...menuItems, newItem]);

    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
    Alert.alert('Item has been added successfully');
  };

  const handleSelectItem = (item: any) => {
    Alert.alert(
      `Selected Item`,
      `${item.name} - ${item.description} (${item.course}) - R${item.price}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.page}>Home</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Chef's Menu</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.inputContainer}>
          <Text>Dish Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter dish name"
            onChangeText={(text) => setDishName(text)}
            value={dishName}
          />

          <Text>Description:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter description"
            onChangeText={(text) => setDescription(text)}
            value={description}
          />

          <Text>Course:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter course (e.g. Starters, Mains, Desserts)"
            onChangeText={(text) => setCourse(text)}
            value={course}
          />

          <Text>Price:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter price"
            keyboardType="numeric"
            onChangeText={(text) => setPrice(text)}
            value={price}
          />
        </View>

        <Button
          title="Add Menu Item"
          color="blue"
          onPress={handleAddItem}
        />

        <View style={styles.menuContainer}>
          <Text>Total Items: {menuItems.length}</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelectItem(item)}>
              <Text style={styles.menuItem}>
                {index + 1}. {item.name} - {item.description} ({item.course}) - R{item.price}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6fa287',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  scrollView: {
    width: '100%',
  },

  page: {
    marginBottom: 55,
    fontSize: 28,
    fontWeight: 'bold',
    color: "blue",
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },

  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },

  menuContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
  },

  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
});
