// app/signin.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import BackgroundBeams from "../components/BackgroundBeams";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Sign in pressed", { email, password });
    router.replace("/main");
    // later: real sign-in logic
  };

  const goToSignUp = () => {
    router.push("/signup");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.root}>
        <BackgroundBeams />

        <View style={styles.container}>
          {/* Welcome heading */}
          <View style={styles.header}>
            <Text style={styles.welcomeTitle}>Welcome back!</Text>
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
              placeholder="Password"
              placeholderTextColor="#FDE1C8"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleSignIn}
              activeOpacity={0.9}
            >
              <Text style={styles.primaryButtonText}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToSignUp}>
              <Text style={styles.secondaryText}>
                Don&apos;t have an account? Get started
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
  welcomeTitle: {
    marginTop: 20,
    fontSize: 34,
    fontWeight: "700",
    color: "#FDE1C8",
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
    backgroundColor: "rgba(17, 24, 39, 0.25)",
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
