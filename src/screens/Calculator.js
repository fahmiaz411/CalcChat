import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const [size, setSize] = useState(50);
  const [show, setShow] = useState(false);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (value.length > 12) {
      setSize(30);
    } else {
      setSize(50);
    }
    if (show == true) {
      setShow(false);
    }
    setResult(value);
    getResult();
  }, [value]);

  const getResult = () => {
    switch (operation) {
      case "":
        return;
      case "+":
        setResult(parseFloat(valueTo) + parseFloat(value ? value : 0));
        return setOperation("+");
      case "-":
        setResult(parseFloat(valueTo) - parseFloat(value ? value : 0));
        return setOperation("-");
      case "x":
        setResult(parseFloat(valueTo) * parseFloat(value ? value : 0));
        return setOperation("x");
      case "/":
        setResult(parseFloat(valueTo) / parseFloat(value ? value : 0));
        return setOperation("/");
      case "%":
        setResult(parseFloat(valueTo) % parseFloat(value ? value : 0));
        return setOperation("%");
      default:
        throw new Error();
    }
  };

  console.log();

  return (
    <View style={{ width: "100%", backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" backgroundColor="#C40000" />
      <View
        style={{
          alignSelf: "flex-end",
          //   backgroundColor: "red",
          width: "100%",
          height: "50%",
          borderRadius: 5,
          alignItems: "flex-end",
          flexDirection: "column-reverse",
          padding: 10,
        }}
      >
        {/* <TextInput
          value={`${value ? value : "0"}`}
          color="white"
          keyboardType="numeric"
          style={{
            backgroundColor: "red",
            // paddingVertical: 10,
            fontSize: 50,
            textAlignVertical: "top",
            textAlign: "center",
            borderRadius: 5,
            // borderWidth: 1,
            borderColor: "lime",
          }}
          editable={false}
        /> */}
        <Text
          style={{
            color: show ? "white" : "grey",
            fontSize: show ? size : size / 2,
            display: result != "" ? "flex" : result == "0" ? "flex" : "none",
            width: "100%",
            textAlign: "right",
          }}
        >
          {result ? "= " + result : result == 0 ? "= 0" : "0"}
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: size,
            display: show ? "none" : "flex",
            width: "100%",
            textAlign: "right",
          }}
        >
          {value ? value : "0"}
        </Text>
        <Text
          style={{
            right: 0,
            textAlign: "right",
            color: "yellow",
            fontSize: 20,
          }}
        >
          {valueTo} {operation} {value}
        </Text>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "lime",
          padding: 40,
          paddingBottom: 10,
          height: "50%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setValue(value + 7)}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 50,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue(value + 8)}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 50,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue(value + 9)}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 50,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValueTo(
                result
                  ? result
                  : result == 0
                  ? "0"
                  : valueTo
                  ? valueTo
                  : value
                  ? value
                  : 0
              );
              setValue("");
              setOperation("/");
            }}
            style={{
              borderColor: "blue",
              borderWidth: 1,
              borderRadius: 5,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>/</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setValue(value + 4)}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 50,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue(value + 5)}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 50,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue(value + 6)}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 50,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValueTo(
                result
                  ? result
                  : result == 0
                  ? "0"
                  : valueTo
                  ? valueTo
                  : value
                  ? value
                  : 0
              );
              setValue("");
              setOperation("x");
            }}
            style={{
              borderColor: "blue",
              borderWidth: 1,
              borderRadius: 5,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>x</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setValue(value + 1)}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 50,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue(value + 2)}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 50,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue(value + 3)}
            style={[
              {
                borderColor: "lime",
                borderWidth: 1,
                borderRadius: 50,
                width: 50,
                height: 50,
                margin: 2,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Text style={{ fontSize: 30, color: "white" }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValueTo(
                result
                  ? result
                  : result == 0
                  ? "0"
                  : valueTo
                  ? valueTo
                  : value
                  ? value
                  : 0
              );
              setValue("");
              setOperation("-");
            }}
            style={{
              borderColor: "blue",
              borderWidth: 1,
              borderRadius: 5,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>-</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setValue("");
              setOperation("");
              setValueTo("");
            }}
            style={{
              borderColor: "orange",
              borderWidth: 1,
              borderRadius: 5,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (value.slice(0, 1) === "0") {
                return;
              }
              setValue(value ? value + 0 : "0");
            }}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 50,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValueTo(
                result ? result : valueTo ? valueTo : value ? value : 0
              );
              setValue("");
              setOperation("%");
            }}
            style={{
              borderColor: "blue",
              borderWidth: 1,
              borderRadius: 5,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValueTo(
                result
                  ? result
                  : result == 0
                  ? "0"
                  : valueTo
                  ? valueTo
                  : value
                  ? value
                  : 0
              );
              setValue("");
              setOperation("+");
            }}
            style={{
              borderColor: "blue",
              borderWidth: 1,
              borderRadius: 5,
              width: 50,
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>+</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setValue(value.slice(0, value.length - 1))}
            style={{
              borderColor: "orange",
              borderWidth: 1,
              borderRadius: 5,
              width: "20%",
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/Back.png")}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log(value.slice(value.length - 1, 15));
              if (value.slice(value.length - 1, 99) === ".") {
                return;
              }
              setValue(value ? value + "." : "0.");
            }}
            style={{
              borderColor: "lime",
              borderWidth: 1,
              borderRadius: 5,
              width: "14%",
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              //   setValue("");
              getResult();
              setShow(true);
            }}
            style={{
              borderRadius: 5,
              borderColor: "red",
              borderWidth: 1,
              width: "50%",
              height: 50,
              margin: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Calculator;
