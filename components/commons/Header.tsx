import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Animated,
} from "react-native";
import { ArrowBackIcon } from "@/components/icons/ArrowBack";
import { AnimatePressable } from "@/components/commons/AnimatePressable";
import { COLORS } from "@/constants";
import { NavigationState, SceneRendererProps } from "react-native-tab-view";
import { Logo } from "../icons/Logo";

type HeaderProps = {
  goBack?: () => void;
  canGoBack?: boolean;
};

export const Header = ({ canGoBack, goBack }: HeaderProps) => {
  return (
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
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.gray[50],
          paddingHorizontal: 15,
          gap: 10,
        }}
      >
        {props.navigationState.routes.map((route, i) => {
          return (
            <AnimatePressable
              onPress={() => props.setIndex(i)}
              style={{
                flex: 1,
                backgroundColor:
                  props.navigationState.index === i
                    ? COLORS.gray[600]
                    : COLORS.gray[100],
                borderRadius: 50,
                marginVertical: 15,
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
    </SafeAreaView>
  );
};
