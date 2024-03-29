import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { ArrowBackIcon } from "@/components/icons/ArrowBack";
import { AnimatePressable } from "@/components/commons/AnimatePressable";
import { COLORS } from "@/constants";
import { NavigationState, SceneRendererProps } from "react-native-tab-view";
import { Logo } from "../icons/Logo";
import Animated, { FadeIn } from "react-native-reanimated";

type HeaderProps = {
  goBack?: () => void;
  canGoBack?: boolean;
};

export const Header = ({ canGoBack, goBack }: HeaderProps) => {
  const Animate = FadeIn.duration(100);
  return (
    <Animated.View entering={Animate} exiting={Animate}>
      <SafeAreaView
        style={{
          backgroundColor: COLORS.gray[50],
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            paddingBottom: 10,
          }}
        >
          {canGoBack && (
            <AnimatePressable
              onPress={goBack}
              style={{
                position: "absolute",
                zIndex: 10,
                left: 15,
              }}
            >
              <ArrowBackIcon width={30} height={30} color={COLORS.gray[600]} />
            </AnimatePressable>
          )}
          <View
            style={{
              flex: 1,
              paddingVertical: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo width={30} height={30} color={COLORS.gray[600]} />
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
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
    <View
      style={{
        flexDirection: "row",
        backgroundColor: COLORS.gray[50],
        paddingHorizontal: 15,
        gap: 10,
        minWidth: Dimensions.get("screen").width,
      }}
    >
      {props.navigationState.routes.map((route, i) => {
        return (
          <AnimatePressable
            onPress={() => props.setIndex(i)}
            style={{
              //paddingVertical: 10,
              backgroundColor:
                props.navigationState.index === i
                  ? COLORS.gray[600]
                  : COLORS.gray[100],
              borderRadius: 50,
              marginVertical: 15,
              flex: 1,
              paddingHorizontal: 30,
            }}
            key={i}
          >
            <Animated.Text
              style={{
                textAlign: "center",
                paddingVertical: 5,
                color:
                  props.navigationState.index === i
                    ? COLORS.gray[50]
                    : COLORS.gray[600],
              }}
            >
              {route.title}
            </Animated.Text>
          </AnimatePressable>
        );
      })}
    </View>
  );
};
