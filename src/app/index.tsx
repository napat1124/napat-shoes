import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
}

export default function HomeScreen() {

  const GITHUB_JSON_URL =
  "https://raw.githubusercontent.com/napat1124/Napats-Shoes/main/Json02";

const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetch(GITHUB_JSON_URL)
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.log(err));
}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shoe Store</Text>

     <FlatList
  data={products}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image_url }}
        style={styles.image}
      />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.price}>${item.price}</Text>
    </View>
  )}
/>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 20,
  backgroundColor: "#f5f5f5",
},
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
  width: 280,
  backgroundColor: "#f5f5f5",
  padding: 15,
  marginBottom: 20,
  borderRadius: 15,
  alignSelf: "center",
  alignItems: "center",

  elevation: 4,

  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
},
 image: {
  width: 220,
  height: 150,
  borderRadius: 10,
  resizeMode: "cover",
},
  name: {
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 10,
  marginBottom: 5,
},
  price: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#0a8f08",
},


});