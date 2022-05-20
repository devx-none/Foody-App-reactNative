import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../..';
import {fonts, IC_Love} from '../../../res';

const BoxItemTopProduct = ({bgColor, icon, text, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(bgColor)} onPress={onPress}>
      <View style={{ top: -40, width: 200, height: 220, alignItems: "center" }}>
        <View>
          <Image source={icon} style={styles.image} />
          <Gap height={20} />
          <Text style={styles.text}>{text}</Text>
        </View>
        <Gap height={20} />
        <View style={styles.price}>
          <Text style={styles.wrapperButtom}>${price}</Text>
        </View>
        <Gap height={20} />
        <View>
          <TouchableOpacity>
            <IC_Love />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BoxItemTopProduct;

const styles = StyleSheet.create({
  container: (bgColor) => ({
    height: 220,
    width: "100%",
    backgroundColor: bgColor,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 40,
    alignItems: "center",
  }),
  text: {
    paddingLeft: 45,
    fontSize: 16,
    fontFamily: fonts.Medium,
    // alignItems: "center"
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
   
  },
  wrapperButtom: {
    fontSize: 18,
    fontFamily: fonts.Medium,
  },
  image: {
    height: 110,
    width: 110,
    resizeMode: "contain",
    marginLeft: 20,
  },
 
});
