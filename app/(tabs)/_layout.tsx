import { Tabs } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BookMarkIcon } from "@/components/icons/BookMark";
import { CategoryIcon } from "@/components/icons/Cateory";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "home",
};

const tabs = [
  {
    name: "saves",
    icon: BookMarkIcon,
    label: "Save",
  },

  {
    name: "(categories)/index",
    icon: CategoryIcon,
    label: "Category",
  },

  {
    name: "authors/index",
    icon: CategoryIcon,
    label: "Authors",
  },
];

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View
      style={{
        height: 100,
        justifyContent: "center",

        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "yellow",
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
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center" }}
            >
              {Icon && <Icon size={10} focused={isFocused} color="" />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <MyTabBar {...props} />}>
      {tabs.map(({ label, name, icon: Icon }) => (
        <Tabs.Screen
          name={name}
          key={name}
          options={{
            headerShown: false,
            tabBarLabel: label,
            tabBarIcon: ({ focused }) => (
              <Icon height={30} width={30} fill="pink" color="red" />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
