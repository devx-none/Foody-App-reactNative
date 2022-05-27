import React, { useContext, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import {
  BoxRelatedItems,
  Button,
  Counter,
  Gap,
  Header,
} from "../../components";
import {
  colors,
  fonts,
  IL_Cauliflawer_PNG,
  IL_Grapes_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
  IL_Food_PNG,
} from "../../res";


import AsyncStorage from "@react-native-async-storage/async-storage";
import CartContext from "../../context/cartContext";

const Detail = ({ route, navigation }) => {
  const { handleAddToCart } = useContext(CartContext);
  const dataParams = route.params;
  const bgColor = route.params.bgColor;
  const isDarkMode = useColorScheme() === "dark";
  const [totalItem, setTotalItem] = useState(1);

  const dataRelatedItems = [
    {
      name: "Burger King",
      icon: IL_Food_PNG,
      bgColor: "rgba(227,206,243,0.5)",
      price: 44,
      desc: "",
    },
    {
      name: "Burger ",
      icon: IL_Food_PNG,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 53,
      desc: "",
    },
    {
      name: "Burger cheese",
      icon: IL_Food_PNG,
      bgColor: "rgba(187, 208, 136, 0.5)",
      price: 60,
      desc: "",
    },
  ];

  const onClickAddCart = (data) => {
    const itemcart = {
      food: data,
      quantity: 1,
      price: data.price,
    };

    AsyncStorage.getItem("@cart")
      .then((datacart) => {
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart);
          cart.push(itemcart);
          AsyncStorage.setItem("@cart", JSON.stringify(cart));
        } else {
          const cart = [];
          cart.push(itemcart);
          AsyncStorage.setItem("@cart", JSON.stringify(cart));
        }
        alert("Add Cart");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const onCounterChange = (value) => {
    setTotalItem(value);
  };

  return (
    <SafeAreaView style={styles.flex1(bgColor)}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View>
        {/* header */}
        <Header onPress={() => navigation.goBack()} />
        {/* image */}
        <View style={styles.wrapperImg}>
          <Image source={dataParams.icon} style={styles.image} />
        </View>
        {/* content */}
        <View style={styles.content}>
          {/* top content */}
          <View style={styles.wrapperTopContent}>
            <View style={styles.rowTopContent}>
              <Text style={styles.name}>{dataParams.name}</Text>
              <Counter onValueChange={onCounterChange} />
            </View>
            <Text style={styles.price}>{dataParams.price} DH</Text>
          </View>
          {/* description */}
          <Text style={styles.desc}>{dataParams.desc}</Text>
          {/* related items */}
          <View style={styles.wrapperRelatedItems}>
            <Text style={styles.titleRelatedItems}>Related Items</Text>
            {/* scrollview */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.wrapperBoxRelatedItems}>
                {/* boxrelateditems */}
                {dataRelatedItems.map((item, index) => {
                  return (
                    <BoxRelatedItems
                      key={index}
                      image={item.icon}
                      name={item.name}
                      price={item.price}
                      bgColor={item.bgColor}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
          {/* button add to cart */}
          <Gap height={20} />
          <Button
            text="Add to cart"
            onPress={() => handleAddToCart(dataParams)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  flex1: (bgColor) => ({
    flex: 1,
    backgroundColor: bgColor,
  }),
  wrapperImg: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 34,
  },
  wrapperTopContent: {
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  rowTopContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  price: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.black,
  },
  desc: {
    paddingHorizontal: 20,
  },
  wrapperRelatedItems: {
    marginTop: 25,
  },
  titleRelatedItems: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.primary,
    paddingHorizontal: 20,
  },
  wrapperBoxRelatedItems: {
    flexDirection: "row",
    marginTop: 0,
    paddingLeft: 20,
  },
});
