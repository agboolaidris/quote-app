import { View, Share, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { Modal, ModalProps } from "../commons/Modal";
import { Button } from "../commons/Button";
import { ImageQuoteCard } from "../commons/ImageQuoteCard";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { COLORS } from "@/constants";
import { AnimatePressable } from "../commons/AnimatePressable";
import { Quote } from "@/hooks/useQuote";

type Props = Omit<ModalProps, "children"> & {
  quote: Quote;
};

type ShareAsImageViewProps = {
  quote: Quote;
  onFinish: () => void;
};

const ShareAsImageView = ({ onFinish, quote }: ShareAsImageViewProps) => {
  const [backgroundColor, setBackgroundColor] = useState(COLORS.random[0]);
  const ref = useRef<any>();

  const handleShare = async () => {
    try {
      const uri = await ref.current.capture();
      await Sharing.shareAsync(uri);
      onFinish();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ padding: 20, gap: 20 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ViewShot
          ref={ref}
          options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}
        >
          <ImageQuoteCard
            backgroundColor={backgroundColor}
            author={quote.author}
            content={quote.content}
            authorSlug={quote.authorSlug}
          />
        </ViewShot>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              gap: 20,
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {COLORS.random.map((color) => (
              <AnimatePressable
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: color,
                  borderRadius: 40,
                }}
                onPress={() => setBackgroundColor(color)}
                key={color}
              ></AnimatePressable>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Button onPress={handleShare}>Share now</Button>
      </View>
    </View>
  );
};

export const ShareModal = ({ visible, onClose, quote }: Props) => {
  const [showShareAsImageView, setShowShareAsImageView] = useState(false);

  const handleShareImage = () => {
    setShowShareAsImageView(true);
  };

  const handleShareText = async () => {
    try {
      await Share.share({
        message: `${quote.author}`,
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFinishImageShare = () => {
    onClose();
    setShowShareAsImageView(false);
  };

  const handleClose = () => {
    onClose();
    setShowShareAsImageView(false);
  };

  return (
    <Modal visible={visible} onClose={handleClose}>
      {!showShareAsImageView && (
        <View style={{ padding: 20, gap: 20, marginTop: 20 }}>
          <Button onPress={handleShareImage}>Share as image</Button>
          <Button onPress={handleShareText}>Share as text</Button>
        </View>
      )}
      {showShareAsImageView && (
        <ShareAsImageView onFinish={handleFinishImageShare} quote={quote} />
      )}
    </Modal>
  );
};

export default ShareModal;
