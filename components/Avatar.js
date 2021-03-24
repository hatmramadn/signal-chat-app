import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Avatar = ({ width, height, url }) => {
  return (
    <View>
      <Image
        style={{
          width: width,
          height: height,
          borderRadius: 50,
          marginRight: 10,
        }}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
