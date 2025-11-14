// app/signup.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import BackgroundBeams from "../components/BackgroundBeams";

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const COLORS = {
    maroon: "#3B0A21",
    beige: "#FDE1C8",
    yellow: "#FACC15",
  };

  const handleSignUp = () => {
    console.log("Sign up pressed", { email, username, password });
    router.replace("/main");
    // later: real sign-up logic
  };

  const goToSignIn = () => {
    router.push("/signin");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.root}>
        <BackgroundBeams />

        <View style={styles.container}>
          {/* Logo at top, like landing */}
          <View style={styles.header}>
            <Image
              source={require("../assets/images/seat-seeker-logo-with-name.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          {/* Form */}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#FDE1C8"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#FDE1C8"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#FDE1C8"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleSignUp}
              activeOpacity={0.9}
            >
              <Text style={styles.primaryButtonText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToSignIn}>
              <Text style={styles.secondaryText}>
                Already have an account? Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#3B0A21",
  },
  root: {
    flex: 1,
    backgroundColor: "#3B0A21",
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 16,
    backgroundColor: "rgba(59, 10, 33, 0)",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoImage: {              
    width: 480,
    height: 300,
  },
  form: {
    flex: 1,
    gap: 16,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FDE1C8",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: "#FDE1C8",
    fontSize: 14,
    backgroundColor: "rgba(17, 24, 39, 0.25)", // subtle dark overlay
  },
  primaryButton: {
    marginTop: 8,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: "#FDE1C8",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "#3B0A21",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryText: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 13,
    color: "#E5E7EB",
  },
});
