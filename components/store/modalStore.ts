import { create } from "zustand";

export enum ModalTypes {
  SHARE_MODAL = "SHARE-MODAL",
}

type AppModal = {
  modal: ModalTypes;
  modalProps: Record<string, any>;
};

type Store = {
  activeModal: AppModal | undefined;
  closeModal: () => void;
  openModal: (modal: ModalTypes, modalProps?: Record<string, any>) => void;
};

export const useModalStore = create<Store>((set) => ({
  activeModal: undefined,

  closeModal: () =>
    set(() => ({
      activeModal: undefined,
    })),

  openModal: (modal, modalProps = {}) =>
    set(() => ({
      activeModal: { modal, modalProps },
    })),
}));
