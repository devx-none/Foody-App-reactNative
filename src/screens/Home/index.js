import React ,{useState} from 'react';
import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Searchbar} from 'react-native-paper'
import {
  BoxItemCategories,
  BoxItemTopProduct,
  Gap,
  Header,
} from '../../components';
import {
  colors,
  fonts,
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IL_Food_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
  IC_Menu
} from "../../res";

const Home = ({ navigation }) => {
  
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);


  const isDarkMode = useColorScheme() === 'dark';
  const dataTopProducts = [
    {
      name: "Burger",
      icon: IL_Food_PNG,
      bgColor: "rgba(227,206,243,0.5)",
      price: 35,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }
  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.flex1}>
        {/* Header */}
        <Header drawer onPress={() => navigation.navigate("Cart")} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* search */}
          <View style={{ paddingHorizontal: 20 }}>
            <View>
              {/* <TextInput
                placeholder="Search"
                keyboardType="numeric"
                style={styles.textInputSearch}
              /> */}
              <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.wrapperSearch}
              />
            </View>
          </View>
          {/* categories */}
          <View>
            <Text style={styles.titleCategories}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}
            >
              <BoxItemCategories
                // icon={<IC_Fruits/>}
                color="rgba(233, 255, 210, 0.5)"
                text="Menu"
                onPress={() => navigation.navigate("Categories", "Menu")}
              />
              <BoxItemCategories
                icon={<IC_Fruits />}
                color="rgba(169, 178, 169, 0.5)"
                text="Fast food"
                onPress={() => navigation.navigate("Categories", "Fast Food")}
              />
              <BoxItemCategories
                icon={<IC_Drinks />}
                color="rgba(140, 175, 53, 0.5)"
                text="Drinks"
                onPress={() => navigation.navigate("Categories", "Drinks")}
              />
              <BoxItemCategories
                icon={<IC_Bakery />}
                color="rgba(214, 255, 218, 0.5)"
                text="Desserts"
                onPress={() => navigation.navigate("Categories", "Desserts")}
              />
              <BoxItemCategories
                icon={<IC_Bakery2 />}
                color="rgba(255, 250, 204, 0.5)"
                text="Bakery"
                onPress={() => navigation.navigate("Categories", "Bakery")}
              />
            </ScrollView>
          </View>
          <Gap height={24} />
          {/* top products */}
          <View>
            <View style={styles.wrapperHeadTopProducts}>
              <Text style={styles.tittleTopProducts}>Popular Near You</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionBoxTopProduct}>
              {dataTopProducts.map((item, index) => {
                return (
                  <BoxItemTopProduct
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    price={item.price}
                    onPress={() => navigation.navigate("Detail", item)}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  wrapperSearch: {
    height: 40,
    // backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
  },
  titleCategories: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
  scrollViewCategories: {
    paddingLeft: 20,
  },
  wrapperHeadTopProducts: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tittleTopProducts: {
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    fontSize: 20,
   
  },
  textSeeAll: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
  sectionBoxTopProduct: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 70,
  },
});
