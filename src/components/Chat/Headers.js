import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { API, setAuthToken, path } from "../../config/api";

const Headers = ({ username }) => {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getProfile = () => {
    setIsLoading(true);
    API.get(`/user/${username}`).then((res) => {
      setProfile(res.data.user);
    });
  };

  useEffect(() => {
    setIsLoading(false);
  }, [profile]);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {isLoading == false && (
        <View
          style={{
            height: 90,
            paddingTop: 0,
            borderWidth: 1,
            borderBottomColor: "red",
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 150,
              // backgroundColor: "red",
              height: 50,
              marginBottom: 10,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
              source={require("../../../assets/DumbGram.png")}
            />
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                // backgroundColor: "red",
              }}
            >
              {profile && (
                <Image
                  resizeMode="cover"
                  style={{
                    borderRadius: 50,
                    width: "100%",
                    height: "100%",
                  }}
                  source={{ uri: `${path}${profile.p_image}` }}
                />
              )}
            </View>
            <Text style={{ color: "white", fontSize: 10 }}>
              {profile.fullname}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Headers;
