import { View, Text, Modal as RModal } from "react-native";
import React, { ReactNode } from "react";
import { COLORS } from "@/constants";
import { AnimatePressable } from "./AnimatePressable";
import { XMarkIcon } from "../icons/XMark";

export type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ visible, onClose, children }: ModalProps) => {
  return (
    <RModal visible={visible} transparent>
      <View style={{ backgroundColor: COLORS.gray[500] + "b3", flex: 1 }}>
        <AnimatePressable style={{ flex: 1 }} onPress={onClose} />
        <View style={{ marginTop: "auto" }}>
          <View
            style={{
              minHeight: 300,
              backgroundColor: COLORS.gray[50],
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}
          >
            <View style={{ padding: 20 }}>
              <AnimatePressable
                style={{
                  marginLeft: "auto",
                  width: 40,
                  height: 40,
                  backgroundColor: COLORS.gray[100],
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 40,
                }}
                onPress={onClose}
              >
                <XMarkIcon width={30} height={20} color={COLORS.gray[500]} />
              </AnimatePressable>
            </View>
            {children}
          </View>
        </View>
      </View>
    </RModal>
  );
};
