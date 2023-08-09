import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Animated,
} from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { ArrowBackIcon } from "@/components/icons/ArrowBack";
import { AnimatePressable } from "@/components/commons/AnimatePressable";
import { COLORS, SIZES } from "@/constants";
import { NavigationState, SceneRendererProps } from "react-native-tab-view";

export const Header = ({ navigation, options }: NativeStackHeaderProps) => {
  const isBack = navigation.canGoBack();
  const goBack = () => {
    if (isBack) {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.gray[700],
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <StatusBar backgroundColor={COLORS.gray[700]} barStyle="light-content" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        {isBack && (
          <AnimatePressable
            onPress={goBack}
            style={{
              position: "absolute",
              zIndex: 10,
              left: 5,
            }}
          >
            <ArrowBackIcon width={30} height={30} color={COLORS.gray[50]} />
          </AnimatePressable>
        )}
        <View style={{ flex: 1, paddingVertical: 5 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.lg,
              color: COLORS.gray[50],
              fontWeight: "bold",
            }}
          >
            {options.headerTitle?.toString()}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

type RenderTabBarProps = SceneRendererProps & {
  navigationState: NavigationState<{
    key: string;
    title: string;
  }>;
  setIndex: any;
};

export const TopTabBar = (props: RenderTabBarProps) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        backgroundColor: COLORS.gray[700],
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {props.navigationState.routes.map((route, i) => {
        return (
          <AnimatePressable
            onPress={() => props.setIndex(i)}
            style={{
              flex: 1,
              borderBottomColor: COLORS.gray[300],
              borderBottomWidth: props.navigationState.index === i ? 3 : 0,
            }}
            key={i}
          >
            <Animated.Text
              style={{
                textAlign: "center",
                paddingVertical: 5,
                color:
                  props.navigationState.index === i
                    ? COLORS.gray[300]
                    : COLORS.gray[500],
              }}
            >
              {route.title}
            </Animated.Text>
          </AnimatePressable>
        );
      })}
    </SafeAreaView>
  );
};
