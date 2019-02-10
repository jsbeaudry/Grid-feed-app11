import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#f6f6f6"
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              marginBottom: 20,
              marginTop: 30,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <View
              style={{
                flex: 70
              }}
            >
              <Text
                style={{
                  color: "#42436a",
                  fontSize: 31,
                  fontWeight: "800"
                }}
              >
                {"Ilona  "}
              </Text>
              <Text
                style={{
                  opacity: 0.71,
                  color: "#8d91a2",
                  fontSize: 15,
                  fontWeight: "600"
                }}
              >
                {"Summer time, let’s book a flight for vacation"}
              </Text>
            </View>
            <Image
              source={require("./user1.png")}
              style={{
                width: 55,
                height: 55,

                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowOffset: { width: 10, height: 0 },
                shadowRadius: 20,
                margin: 0
              }}
              borderRadius={22}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              margin: 24
            }}
          >
            <View
              style={{
                width: 156,
                height: 49,
                shadowColor: "rgba(58, 76, 130, 0.07)",
                shadowOffset: { width: 19, height: 0 },
                shadowRadius: 38,
                borderRadius: 4,
                backgroundColor: "#ffffff",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Ionicons
                  name="ios-basket"
                  type="ionicon"
                  color={"#a54c10"}
                  size={20}
                  iconStyle={{}}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    color: "#42436a",
                    fontSize: 15,
                    fontWeight: "700"
                  }}
                >
                  {"1130 pts"}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 156,
                height: 49,
                shadowColor: "rgba(58, 76, 130, 0.07)",
                shadowOffset: { width: 19, height: 0 },
                shadowRadius: 38,
                borderRadius: 4,
                backgroundColor: "#ffffff",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Ionicons
                  name="ios-boat"
                  type="ionicon"
                  color={"#4a319e"}
                  size={20}
                  iconStyle={{}}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    color: "#42436a",
                    fontSize: 15,
                    fontWeight: "700"
                  }}
                >
                  {"1130 pts"}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ height: 200 }}>
            <FlatList
              style={{ height: 10, alignSelf: "center" }}
              numColumns={4}
              data={[
                { key: "b", username: "Flight", color: "#21965d" },
                { key: "b", username: "Hotel", color: "#192f5b" },
                { key: "b", username: "Train", color: "#604107" },
                { key: "b", username: "Bus", color: "#471929" },
                { key: "b", username: "Movies", color: "#306666" },
                { key: "b", username: "Attractions", color: "#604107" },
                { key: "b", username: "Taxi", color: "#471929" },
                { key: "b", username: "Eats", color: "#306666" }
              ]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    margin: 15
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: item.color,
                      shadowColor: "rgba(0, 0, 0, 0.9)",
                      shadowOffset: { width: 0, height: 2 },
                      shadowRadius: 20,
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    borderRadius={8}
                  >
                    <Ionicons
                      name="ios-basket"
                      type="ionicon"
                      color={"#fff"}
                      size={20}
                      iconStyle={{}}
                    />
                  </View>
                  <Text
                    style={{
                      color: "#535d7e",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 16
                    }}
                  >
                    {item.username}
                  </Text>
                </View>
              )}
            />
          </View>

          <FlatList
            style={{ height: 300, marginTop: 20, alignSelf: "center" }}
            numColumns={2}
            data={[
              {
                key: "b",
                image: require("./design3.png"),
                username: "Flight",
                color: "#21965d"
              },
              {
                key: "b",
                image: require("./design5.png"),
                username: "Hotel",
                color: "#192f5b"
              },
              {
                key: "b",
                image: require("./design4.png"),
                username: "Train",
                color: "#604107"
              },
              {
                key: "b",
                image: require("./design9.png"),
                username: "Bus",
                color: "#471929"
              },
              {
                key: "b",
                image: require("./design10.png"),
                username: "Hotel",
                color: "#192f5b"
              },
              {
                key: "b",
                image: require("./design11.png"),
                username: "Train",
                color: "#604107"
              },
              {
                key: "b",
                image: require("./design12.png"),
                username: "Hotel",
                color: "#192f5b"
              },
              {
                key: "b",
                image: require("./design4.png"),
                username: "Train",
                color: "#604107"
              }
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ImageBackground
                source={item.image}
                style={{
                  width: (screenWidth - 20) / 2,
                  height: 100,
                  shadowColor: "rgba(0, 0, 0, 0.9)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 20,
                  margin: 5
                }}
                borderRadius={0}
              >
                <View
                  style={{
                    width: (screenWidth - 20) / 2,
                    height: 100,
                    backgroundColor: "rgba(0,0,0,.4)"
                  }}
                >
                  <Text
                    style={{
                      margin: 10,
                      width: 112,
                      height: 31,
                      color: "#ffffff",
                      fontSize: 11,
                      fontWeight: "700",
                      lineHeight: 16
                    }}
                  >
                    Cheap Holiday Promo To Australia
                  </Text>

                  <TouchableOpacity
                    style={{
                      width: 53,
                      height: 24,
                      marginTop: 15,
                      marginRight: 10,
                      borderRadius: 3,
                      backgroundColor: "#fa6db4",

                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "flex-end"
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: "400",
                        lineHeight: 16
                      }}
                    >
                      {"Buttom"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {}
});
