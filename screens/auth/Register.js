import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";

const Register = ({ navigation }) => {
  const loginImage =
    "data:image/jpeg;base64,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";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  //Login Function
  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert(
        "Add Email or Password or Name or Address or City or Contact"
      );
    }
    alert("Register Successfully");
    navigation.navigate("login");
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />

      <InputBox
        placeholder="Enter Name"
        value={name}
        setValue={setName}
        autoComplete={"name"}
      />
      <InputBox
        placeholder="Enter Email"
        value={email}
        setValue={setEmail}
        autoComplete={"email"}
      />
      <InputBox
        value={password}
        setValue={setPassword}
        placeholder="Enter Password"
        secureTextEntry={true}
      />
      <InputBox
        placeholder="Enter Address"
        value={address}
        setValue={setAddress}
        autoComplete={"address-line1"}
      />
      <InputBox
        placeholder="Enter City"
        value={city}
        setValue={setCity}
        autoComplete={"country"}
      />
      <InputBox
        placeholder="Enter Contact"
        value={contact}
        setValue={setContact}
        autoComplete={"tel"}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Already a User?
          <Text
            onPress={() => navigation.navigate("login")}
            style={styles.link}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 20,
  },
  link: {
    color: "red",
  },
});

export default Register;
