import { Cross1Icon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-2 border-gray-900 p-6 rounded-lg w-full max-w-screen-xl shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="text-right">
              <button
                className="bg-transparent hover:bg-brand-300 hover:border-brand-300 border-2 border-transparent text-black font-bold py-2 px-2 rounded-full transition-all duration-300"
                onClick={onClose}
              >
                <Cross1Icon width={18} height={18} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
