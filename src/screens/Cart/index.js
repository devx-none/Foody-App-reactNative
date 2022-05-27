import React, { useEffect, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
var { width } = Dimensions.get("window");

import AsyncStorage from "@react-native-async-storage/async-storage";
// import icons
// import Icon from "react-native-vector-icons/Ionicons";

import { IL_Food_PNG } from "../../res";
import { Counter } from "../../components";
import CartContext from "../../context/cartContext";

export default function Cart({ navigation }) {
  const [dataCart, setDataCart] = React.useState([]);
  const [total, setTotalItem] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    console.log("cartItems");
    console.log(cartItems);
  }, []);
  const onCounterChange = (value) => {
    setTotalItem(value);
  };
  const ButtonAlert = () =>
    Alert.alert("Your Order has been successfully", "Succes", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ height: 20 }} />
      <Text style={{ fontSize: 32, fontWeight: "bold", color: "#33c37d" }}>
        Cart food
      </Text>
      <View style={{ height: 10 }} />

      <View style={{ flex: 1 }}>
        <ScrollView>
          {cartItems && cartItems.length > 0 && cartItems.map((item) => (
            <View key={item.id}
              style={{
                width: width - 20,
                margin: 10,
                backgroundColor: "transparent",
                flexDirection: "row",
                borderBottomWidth: 2,
                borderColor: "#cccccc",
                paddingBottom: 10,
              }}
            >
              <Image
                resizeMode={"contain"}
                style={{ width: width / 3, height: width / 3 }}
                source={IL_Food_PNG}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor: "trangraysparent",
                  padding: 10,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    {/* {item.food.name} */}
                    {item.name}
                  </Text>
                  {/* <Text>{item.desc}</Text> */}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#33c37d",
                      fontSize: 20,
                    }}
                  >
                    {/* ${item.price * item.quality} */}
                   {item.price} DH
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Counter onValueChange={onCounterChange} />
                  </View>
                </View>
              </View>
            </View>
          ))}

          <View style={{ height: 20 }} />

          <TouchableOpacity
            style={{
              backgroundColor: "#33c37d",
              width: width - 40,
              alignItems: "center",
              padding: 10,
              borderRadius: 5,
              margin: 20,
            }}
            onPress={() => ButtonAlert()}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
              }}
            >
              CHECKOUT
            </Text>
          </TouchableOpacity>

          <View style={{ height: 20 }} />
        </ScrollView>
      </View>
    </View>
  );
}
