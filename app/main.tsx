import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput, // NEW
  TouchableOpacity,
  View,
} from "react-native";

type TabKey = "feed" | "search" | "list" | "profile";

const COLORS = {
  maroon: "#3B0A21",
  beige: "#FDE1C8",
  yellow: "#FACC15",
  cardDark: "#4B1026",
  cardMid: "#651233",
};

type RecommendedKey = "lrWilson" | "hamiltonHall"; // NEW

export default function Main() {
  const [activeTab, setActiveTab] = useState<TabKey>("feed");

  // --- NEW: heart states --- //
  const [headerLiked, setHeaderLiked] = useState(false);

  const [popularSpots, setPopularSpots] = useState<
    { name: string; liked: boolean }[]
  >([
    { name: "Mills Commons", liked: true },
    { name: "Thode 1st Floor", liked: false },
    { name: "Health Sci Library", liked: false },
  ]);

  const [recommendedLikes, setRecommendedLikes] = useState<
    Record<RecommendedKey, boolean>
  >({
    lrWilson: false,
    hamiltonHall: false,
  });

  const [searchQuery, setSearchQuery] = useState(""); // NEW: search typing state

  const togglePopularLike = (name: string) => {
    setPopularSpots((prev) =>
      prev.map((spot) =>
        spot.name === name ? { ...spot, liked: !spot.liked } : spot
      )
    );
  };

  const toggleRecommendedLike = (key: RecommendedKey) => {
    setRecommendedLikes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderTabLabel = (key: TabKey) => {
    switch (key) {
      case "feed":
        return "Feed";
      case "search":
        return "Search";
      case "list":
        return "Your List";
      case "profile":
        return "Profile";
    }
  };

  const renderTabIcon = (key: TabKey) => {
    // simple emoji icons – good enough for mid-fi
    switch (key) {
      case "feed":
        return "📚";
      case "search":
        return "🔍";
      case "list":
        return "⭐";
      case "profile":
        return "👤";
    }
  };

  const savedSpots = [
    {
      name: "Mills Commons",
      rating: 4,
      image: require("../assets/images/mills_commons.jpg"),
    },
    {
      name: "Thode 2nd Floor",
      rating: 3,
      image: require("../assets/images/thode_1stfloor.webp"),
    },
  ];

  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating;
      stars.push(
        <Text
          key={i}
          style={filled ? styles.ratingStarFilled : styles.ratingStarEmpty}
        >
          ★
        </Text>
      );
    }
    return <View style={styles.ratingRow}>{stars}</View>;
  };

  const renderContent = () => {
    if (activeTab === "feed") {
      // FEED layout
      return (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        >
          {/* POPULAR section */}
          <Text style={styles.sectionTitle}>Popular</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 8 }}
          >
            {popularSpots.map((spot) => (
              <View key={spot.name} style={styles.popularCard}>
                <Text style={styles.popularName}>{spot.name}</Text>

                {/* NEW: make heart clickable */}
                <TouchableOpacity
                  onPress={() => togglePopularLike(spot.name)}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <Text style={styles.heartIcon}>
                    {spot.liked ? "♥" : "♡"}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* RECOMMENDED section */}
          <Text style={[styles.sectionTitle, { marginTop: 16 }]}>
            Recommended spots
          </Text>

          <View style={{ gap: 12, marginTop: 8 }}>
            {/* LR Wilson 3rd Floor card */}
            <View style={styles.recommendedCard}>
              <View style={styles.recommendedTopRow}>
                <Text style={styles.recommendedName}>LR Wilson 3rd Floor</Text>
                <View style={styles.recommendedIcons}>
                  {/* NEW: clickable heart */}
                  <TouchableOpacity
                    onPress={() => toggleRecommendedLike("lrWilson")}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Text style={styles.heartIcon}>
                      {recommendedLikes.lrWilson ? "♥" : "♡"}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.starIcon}>★</Text>
                </View>
              </View>

              <View style={styles.imagePlaceholder}>
                <Image
                  source={require("../assets/images/LR_Wilson_3rdFloor.jpg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
            </View>

            {/* Hamilton Hall card */}
            <View style={styles.recommendedCard}>
              <View style={styles.recommendedTopRow}>
                <Text style={styles.recommendedName}>
                  Hamilton Hall 2nd Floor
                </Text>
                <View style={styles.recommendedIcons}>
                  {/* NEW: clickable heart */}
                  <TouchableOpacity
                    onPress={() => toggleRecommendedLike("hamiltonHall")}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Text style={styles.heartIcon}>
                      {recommendedLikes.hamiltonHall ? "♥" : "♡"}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.starIcon}>★</Text>
                </View>
              </View>

              <View style={styles.imagePlaceholder}>
                <Image
                  source={require("../assets/images/hamilton_hall.jpg")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }

    if (activeTab === "search") {
      // SEARCH layout – now with actual TextInput
      return (
        <View style={styles.searchContainer}>
          <View style={styles.searchCard}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search spots, rooms, etc."
              placeholderTextColor={COLORS.beige}
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          {/* You can later show filtered results under here using searchQuery */}
        </View>
      );
    }

    if (activeTab === "profile") {
      return (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.profileContainer}>
            {/* Avatar circle */}
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/mazen_pfp3.png")}
                style={styles.avatarImage}
                resizeMode="cover"
              />
            </View>

            {/* Username */}
            <Text style={styles.usernameText}>Mazen</Text>

            {/* Stats */}
            <Text style={styles.statsTitle}>Stats</Text>

            <View style={styles.statsRow}>
              <View className="stat" style={styles.statCard}>
                <Text style={styles.statIcon}>📍</Text>
                <Text style={styles.statLabel}>Studied in</Text>
                <Text style={styles.statValue}>20 seats</Text>
              </View>

              <View style={styles.statCard}>
                <Text style={styles.statIcon}>✨</Text>
                <Text style={styles.statLabel}>Created</Text>
                <Text style={styles.statValue}>5 new spots</Text>
              </View>

              <View style={styles.statCard}>
                <Text style={styles.statIcon}>⭐</Text>
                <Text style={styles.statLabel}>Rated</Text>
                <Text style={styles.statValue}>7 seats</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }

    if (activeTab === "list") {
      // YOUR LIST layout
      return (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>Your saved spots</Text>

          <View style={{ gap: 12, marginTop: 8 }}>
            {savedSpots.map((spot) => (
              <View key={spot.name} style={styles.listCard}>
                {/* spot name */}
                <Text style={styles.listSpotName}>{spot.name}</Text>

                {/* inner “preview” box */}
                <View style={styles.listPreviewBox}>
                  <Image
                    source={spot.image}
                    style={styles.avatarImage}
                    resizeMode="cover"
                  />
                </View>

                {/* rating row */}
                {renderRatingStars(spot.rating)}
              </View>
            ))}
          </View>
        </ScrollView>
      );
    }

    // fallback
    return (
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>
          {renderTabLabel(activeTab)} screen coming soon.
        </Text>
      </View>
    );
  };

  const tabOrder: TabKey[] = ["feed", "search", "list", "profile"];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.root}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={require("../assets/images/seat-seeker-logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.headerIconButton}
            onPress={() => setHeaderLiked((prev) => !prev)}
            activeOpacity={0.8}
          >
            <Text style={styles.headerIconText}>
              {headerLiked ? "♥" : "♡"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>{renderContent()}</View>

        {/* BOTTOM NAV */}
        <View style={styles.bottomNav}>
          {tabOrder.map((key) => {
            const active = activeTab === key;
            return (
              <TouchableOpacity
                key={key}
                style={styles.tabButton}
                onPress={() => setActiveTab(key)}
                activeOpacity={0.85}
              >
                <Text style={[styles.tabIcon, active && styles.tabIconActive]}>
                  {renderTabIcon(key)}
                </Text>
                <Text
                  style={[styles.tabLabel, active && styles.tabLabelActive]}
                >
                  {renderTabLabel(key)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.maroon,
  },
  root: {
    flex: 1,
    backgroundColor: COLORS.maroon,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "space-between",
  },
  logoImage: {
    width: 100,
    height: 78,
  },
  headerIconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.beige,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIconText: {
    color: COLORS.beige,
    fontSize: 16,
  },
  content: {
    flex: 1,
    backgroundColor: "#1F0714", // a bit darker than card
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  scroll: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.beige,
    marginBottom: 4,
  },
  // POPULAR cards
  popularCard: {
    width: 150,
    height: 110,
    backgroundColor: COLORS.cardMid,
    borderRadius: 14,
    marginRight: 12,
    padding: 10,
    justifyContent: "space-between",
  },
  popularName: {
    color: COLORS.beige,
    fontWeight: "500",
    fontSize: 14,
  },
  heartIcon: {
    alignSelf: "flex-end",
    color: COLORS.beige,
    fontSize: 18,
  },
  // RECOMMENDED cards
  recommendedCard: {
    backgroundColor: COLORS.cardDark,
    borderRadius: 16,
    padding: 12,
  },
  recommendedTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  recommendedName: {
    color: COLORS.beige,
    fontSize: 15,
    fontWeight: "600",
  },
  recommendedIcons: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  starIcon: {
    color: COLORS.yellow,
    fontSize: 18,
  },
  imagePlaceholder: {
    marginTop: 4,
    height: 120,
    borderRadius: 12,
    backgroundColor: "#3D0E22",
    overflow: "hidden",
  },
  // Placeholders for other tabs
  placeholderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: COLORS.beige,
    fontSize: 16,
  },
  // Bottom nav
  bottomNav: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#3D0E22",
    backgroundColor: COLORS.maroon,
    paddingVertical: 6,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  tabIcon: {
    fontSize: 18,
    color: "#A78BFA", // subtle non-active color
  },
  tabIconActive: {
    color: COLORS.beige,
  },
  tabLabel: {
    fontSize: 11,
    color: "#A78BFA",
    marginTop: 2,
  },
  tabLabelActive: {
    color: COLORS.beige,
    fontWeight: "600",
  },
  // --- SEARCH styles --- //
  searchContainer: {
    flex: 1,
    paddingTop: 16,
  },
  searchCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.beige,
    backgroundColor: "#3D0E22",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchIcon: {
    fontSize: 20,
    color: COLORS.beige,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.beige,
  },
  searchPlaceholder: {
    fontSize: 14,
    color: COLORS.beige,
  },
  // --- PROFILE styles --- //
  profileContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: COLORS.beige,
    backgroundColor: "#3D0E22",
    marginBottom: 16,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  usernameText: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.beige,
    marginBottom: 24,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.beige,
    alignSelf: "flex-start",
    marginLeft: 8,
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 8,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#3D0E22",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  statIcon: {
    fontSize: 22,
    marginBottom: 4,
    color: COLORS.beige,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.beige,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.yellow,
  },

  // --- YOUR LIST styles --- //
  listCard: {
    backgroundColor: COLORS.cardDark,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  listSpotName: {
    color: COLORS.beige,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
  },
  listPreviewBox: {
    height: 80,
    borderRadius: 10,
    backgroundColor: "#3D0E22",
    marginBottom: 8,
    overflow: "hidden",
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 4,
  },
  ratingStarFilled: {
    fontSize: 18,
    color: COLORS.yellow,
  },
  ratingStarEmpty: {
    fontSize: 18,
    color: "#6B7280", // muted grey-ish star
  },
});
