"use client";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import React from "react";

type Props = {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
};

const ImageModal = ({ onClose, src, isOpen }: Props) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="h-80 w-80">
        <Image className="object-contain" fill alt="Image" src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
