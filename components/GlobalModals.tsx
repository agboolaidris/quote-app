import React from "react";
import { ModalTypes, useModalStore } from "./store/modalStore";
import { ShareModal } from "./Modals/ShareModal";

const Modals = [
  {
    Component: ShareModal,
    value: ModalTypes.SHARE_MODAL,
  },
];

export const GlobalModals = () => {
  const { activeModal, closeModal } = useModalStore();

  return (
    <>
      {Modals.map(({ value, Component }) => {
        return (
          <Component
            visible={activeModal?.modal === value}
            key={value}
            onClose={closeModal}
            {...activeModal?.modalProps}
          />
        );
      })}
    </>
  );
};
