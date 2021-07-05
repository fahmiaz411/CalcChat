import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import { API, path } from "../config/api";

const Chatting = ({ navigation, route }) => {
  const [me, setMe] = useState();
  const [chats, setChats] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [form, setForm] = useState({
    message: "",
  });

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getChats = () => {
    setIsLoading(true);
    API.get(`/message/${route.params.Recipient.username}`)
      .then((res) => {
        setMe(res.data.data.me);
        setChats(res.data.data.Message);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSend = () => {
    console.log(route.params.Recipient.id);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({
      ...form,
    });
    API.post(`/message/${route.params.Recipient.id}`, body, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getChats();
  };

  useEffect(() => {
    setChatList(chats);
  }, [chats]);

  useEffect(() => {
    getChats();
  }, []);
  const _render = ({ item }) => {
    const date = new Date(item.createdAt);
    const dateNow = new Date().getMonth();

    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return (
      <View
        style={{ alignItems: item.Sender.id == me ? "flex-end" : "flex-start" }}
      >
        <Text style={{ color: "white", fontSize: 10, paddingVertical: 5 }}>{`${
          days[day]
        }, ${hour < 10 ? `0${hour}` : hour}.${
          minute < 10 ? `0${minute}` : minute
        }`}</Text>
        <Text
          style={{
            color: item.Sender.id == me ? "white" : "black",
            backgroundColor: item.Sender.id == me ? "red" : "white",
            padding: 10,
            minWidth: "10%",
            maxWidth: "80%",
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        >
          {item.message}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          //   backgroundColor: "red",
          padding: 10,
          paddingTop: 0,
          height: 90,
          borderColor: "red",
          borderBottomWidth: 1,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Chats")}
          style={{ alignSelf: "center" }}
        >
          <Ionicons name="md-arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            marginHorizontal: 10,
          }}
          source={{ uri: `${path}${route.params.Recipient.p_image}` }}
        />
        <Text style={{ color: "white", fontSize: 20 }}>
          {route.params.Recipient.fullname}
        </Text>
      </View>
      <SafeAreaView
        style={{
          width: "100%",
          //   minHeight: "100%",
          //   backgroundColor: "yellow",
        }}
      >
        <ScrollView
          style={{
            padding: 10,
            width: "100%",
            minHeight: "100%",
            // backgroundColor: "red",
            flexDirection: "column-reverse",
            paddingBottom: 180,
          }}
        >
          <FlatList
            // username={userData.username}
            data={chatList}
            renderItem={_render}
            keyExtractor={(item) => item.id.toString()}
            refreshing={isLoading}
            onRefresh={getChats}
          />
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: "black",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
        }}
      >
        <TextInput
          value={form}
          onChangeText={(text) => setForm({ message: text })}
          placeholderTextColor="white"
          style={{
            width: "100%",
            height: 50,
            borderRadius: 5,
            backgroundColor: "#303030",
            color: "white",
            padding: 10,
            paddingRight: 40,
          }}
          placeholder="Send Message"
        />
        <TouchableOpacity
          onPress={() => {
            // setForm({ message: "" });
            handleSend();
          }}
          style={{
            position: "absolute",
            right: 0,
            marginRight: 20,
            alignSelf: "center",
            rotation: -180,
          }}
        >
          <Ionicons name="send" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chatting;
