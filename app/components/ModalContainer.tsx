"use client";
import { useModalState } from "@/app/hooks/useModalStore";

const ModalContainer = () => {
  const { isOpen, content, closeModal } = useModalState();

  if (!isOpen) return null;

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content text-center">
        {content}
        <button className="btn" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default ModalContainer;
