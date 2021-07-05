import React, { useState, useEffect, Profiler } from "react";
import { View, Text, Image, FlatList } from "react-native";
import axios from "axios";
import { API, path, setAuthToken } from "../config/api";
import { ListItem, Avatar } from "react-native-elements";

import Headers from "../components/Chat/Headers";

const ChatList = ({ navigation }) => {
  const [chatList, setChatList] = useState([]);
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  let lastMessage = [];

  const getChats = () => {
    setIsLoading(true);
    API.get("/messages")
      .then((res) => {
        console.log(res);
        setChatList(res.data.data.chat);
        setUserData(res.data.data.user);
      })
      .catch((err) => {
        console.log(err.data);
        alert("Error Fetch Data");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(false);
  }, [chatList]);

  useEffect(() => {
    getChats();
  }, []);

  const List = ({ item }) => {
    return (
      <ListItem
        containerStyle={{ backgroundColor: "black" }}
        onPress={() => navigation.navigate("Chatting", item)}
      >
        <Avatar
          size="medium"
          rounded
          source={{ uri: `${path}${item.Recipient.p_image}` }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ color: "white" }} h5 numberOfLines={1}>
            {item.Recipient.fullname}
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: "gray" }} numberOfLines={2}>
            {item.message}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <>
      {isLoading == false && (
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          }}
        >
          <Headers username={userData.username} />
          <View>
            <FlatList
              // username={userData.username}
              data={chatList}
              renderItem={List}
              keyExtractor={(item) => item.id.toString()}
              refreshing={isLoading}
              onRefresh={getChats}
            />
          </View>
          <View></View>
        </View>
      )}
    </>
  );
};

export default ChatList;
