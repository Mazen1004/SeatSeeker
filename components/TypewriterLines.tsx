import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type TypewriterLinesProps = {
  lines: string[];
  typingSpeed?: number; // ms per character
  lineDelay?: number;   // pause between lines
};

export default function TypewriterLines({
  lines,
  typingSpeed = 40,
  lineDelay = 600,
}: TypewriterLinesProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>(
    lines.map(() => "")
  );
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex <= currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLineIndex] = currentLine.slice(0, currentCharIndex);
          return next;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }

    const afterLineTimeout = setTimeout(() => {
      setCurrentLineIndex((prev) => prev + 1);
      setCurrentCharIndex(0);
    }, lineDelay);

    return () => clearTimeout(afterLineTimeout);
  }, [currentCharIndex, currentLineIndex, lines, typingSpeed, lineDelay]);

  return (
    <View style={styles.container}>
      {displayedLines.map((line, idx) => (
        <Text key={idx} style={styles.lineText}>
          {line}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12, // CHANGED: a bit more vertical spacing between lines
    alignItems: "center",
  },
  lineText: {
    fontSize: 20,        // CHANGED: larger text for more impact
    lineHeight: 28,      // CHANGED: adjust line height to match new size
    fontWeight: "600",   // CHANGED: semi-bold to stand out
    color: "#fff2e8ff",    // CHANGED: very light white/gray for dark background
    textAlign: "center",
  },
});
