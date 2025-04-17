import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedBook, setSelectedBook] = useState(null);

   const handleOpenModal = (book) => {
      setSelectedBook(book);
      setIsModalOpen(true);
   };
   return (
      <ModalContext.Provider
         value={{ isModalOpen, selectedBook, handleOpenModal, setIsModalOpen }}
      >
         {children}
      </ModalContext.Provider>
   );
};

export default ModalProvider;
export const useModal = () => useContext(ModalContext);
