import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

// We'll render a few beams
const BEAM_COUNT = 7;

export default function BackgroundBeams() {
  const animations = useRef(
    Array.from({ length: BEAM_COUNT }, () => new Animated.Value(0))
  ).current;

  useEffect(() => {
    animations.forEach((value, index) => {
      const duration = 12000 + index * 1500; // CHANGED: different speeds for each beam

      Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: 1,
            duration,
            useNativeDriver: true,
          }),
          Animated.timing(value, {
            toValue: 0,
            duration,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, [animations]);

  return (
    <View style={styles.container} pointerEvents="none">
      {animations.map((anim, index) => {
        const translateX = anim.interpolate({
          inputRange: [0, 1],
          outputRange: [-width, width], // CHANGED: beams sweep across the screen
        });

        const top = height * (0.1 + index * 0.2); // CHANGED: vertically stagger beams

        return (
          <Animated.View
            key={index}
            style={[
              styles.beamWrapper,
              {
                top,
                transform: [
                  { translateX },
                  { rotate: `${-20 + index * 8}deg` }, // CHANGED: slight angle difference
                ],
              },
            ]}
          >
            <LinearGradient
              colors={[
                "rgba(249, 250, 251, 0)",     // transparent
                "rgba(249, 250, 251, 0.3)",   // soft white center
                "rgba(249, 250, 251, 0)",     // transparent
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.beam}
            />
          </Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // CHANGED: fill entire screen behind content
  },
  beamWrapper: {
    position: "absolute",
    width: width * 1.5,
    height: 70,
  },
  beam: {
    flex: 1,
  },
});
