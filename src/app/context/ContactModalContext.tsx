"use client"
import { createContext, useContext, useState, ReactNode } from "react";
import ContactModal from "../components/ContactModal";

type ContactModalContextType = {
    openModal: () => void;
    closeModal: () => void;
    setOpenContactModal: React.Dispatch<React.SetStateAction<boolean>>;
    isClosing: boolean;
    openContactModal: boolean;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({
    children,
}:{
    children: ReactNode;
}) {
    const [openContactModal, setOpenContactModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    function openModal() {
        setOpenContactModal(true);
    }
    function closeModal() {
    setIsClosing(true);

    setTimeout(() => {
      setOpenContactModal(false);
      setIsClosing(false);
    }, 500);
  }

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal, setOpenContactModal, isClosing, openContactModal }}>
        {children}
        {openContactModal && <ContactModal isClosing={isClosing} closeModal={closeModal}/>}
    </ContactModalContext.Provider>
  )
}

export function useContactModal(){
    const context = useContext(ContactModalContext);
    if(!context){
        throw new Error("useContactModal must be used within a ContactModalProvider")
    }
    return context
}