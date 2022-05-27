import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {BoxItemTopProduct, Gap, Header} from '../../components';
import {
  colors,
  fonts,
 
  orange_PNG,
} from "../../res";

const Categories = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataCategories = [
    {
      name: "juice orange",
      icon: orange_PNG,
      bgColor: "rgba(140, 250, 145,0.5)",
      price: 13,
      desc: "",
    },
   
  ];

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        {/* header */}
        <Header back cart onPress={() => navigation.goBack()} />
        <View style={styles.wrapperTittle}>
          <Text style={styles.tittle}>{route.params}</Text>
        </View>
        <Gap height={10} />
        {/* Content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionBoxTopProduct}>
            {dataCategories.map((item, index) => {
              return (
                <BoxItemTopProduct
                  key={index}
                  bgColor={item.bgColor}
                  icon={item.icon}
                  text={item.name}
                  price={item.price}
                  onPress={() => navigation.navigate('Detail', item)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  wrapperTittle: {
    paddingHorizontal: 20,
  },
  tittle: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
  },
  sectionBoxTopProduct: {
    flex1: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
