import { Tabs, useNavigation } from "expo-router";
import { View, Platform } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BookMarkIcon } from "@/components/icons/BookMark";
import { CategoryIcon } from "@/components/icons/Category";
import { COLORS } from "@/constants";
import { HomeIcon } from "@/components/icons/Home";
import { AnimatePressable } from "@/components/commons/AnimatePressable";
import { Header } from "@/components/commons/Header";

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View
      style={{
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingBottom: Platform.OS === "android" ? 0 : 30,
        backgroundColor: COLORS.gray[50],
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.gray[800],
          padding: 10,
          borderRadius: 20,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          //if (!options.tabBarIcon) return null;
          const label = (options.tabBarLabel as string) || route.name;
          const Icon = options.tabBarIcon;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <AnimatePressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              {Icon && <Icon size={30} focused={isFocused} color="" />}
            </AnimatePressable>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  const navigate = useNavigation();

  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ header: () => <Header /> }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <HomeIcon
              height={size}
              width={size}
              stroke={focused ? "none" : COLORS.gray[500]}
              fill={focused ? COLORS.gray[50] : "none"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="randomQuotes"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <CategoryIcon
              height={size}
              width={size}
              fill={focused ? COLORS.gray[50] : COLORS.gray[500]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarkQuotes"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <BookMarkIcon
              height={size}
              width={size}
              stroke={focused ? COLORS.gray[50] : COLORS.gray[500]}
              fill={focused ? COLORS.gray[50] : "none"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
