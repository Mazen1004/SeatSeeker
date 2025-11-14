import React, {useState} from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import TypewriterLines from "../components/TypewriterLines";
import BackgroundBeams from "../components/BackgroundBeams";

export default function Index() {
  const COLORS = {
    maroon: "#3B0A21",
    beige: "#fff2e8ff",  // tweak to match logo
    yellow: "#FACC15", // tweak to match logo yellow
  };

  // track if button is pressed (for color change)
  const [isButtonPressed, setIsButtonPressed] = useState(false); 

  const lines = [
    "No more walking in circles...",
    "No more looking for hours for the perfect spot...",
    "No more guessing if there's a free seat...",
    "Find your seat now.",
  ];

  const handleGetStarted = () => {
    console.log("Get Started pressed");
  };

  const handleSignIn = () => {
    console.log("Sign In pressed");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.root}>           {/* CHANGED: wrapper for beams + card */}
        <BackgroundBeams />                {/* CHANGED: beams behind everything */}

        <View style={styles.container}>    {/* existing card content */}
          {/* Top: logo image */}
          <View style={styles.header}>
            <Image
              source={require("../assets/images/seat-seeker-logo-with-name.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          {/* Middle: typewriter text */}
          <View style={styles.middle}>
            <TypewriterLines lines={lines} typingSpeed={40} lineDelay={600} />
          </View>

          {/* Bottom: buttons */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.primaryButton,
                 isButtonPressed && styles.primaryButtonPressed
              ]}
              onPressIn={() => setIsButtonPressed(true)}   // CHANGED
              onPressOut={() => setIsButtonPressed(false)} // CHANGED
              activeOpacity={0.55}
            >
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSignIn}>
              <Text style={styles.signInText}>Sign in</Text>
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
    backgroundColor: "#3B0A21", // CHANGED: base maroon under beams
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 20,
    //borderWidth: 1,
    //borderColor: "#d1d5db",
    borderRadius: 16,
    backgroundColor: "rgba(59, 10, 33, 0)", // CHANGED: slightly translucent maroon card
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
   logoImage: {              
    width: 480,
    height: 300,
  },
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
    gap: 8,
  },
  primaryButton: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#fff2e8ff",
    backgroundColor: "#fff2e8ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3B0A21",
  },
  signInText: {
    fontSize: 14,
    color: "#fff2e8ff",  
  },
});
