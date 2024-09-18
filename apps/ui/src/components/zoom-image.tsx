import Image from "next/image";
import * as React from "react";
import { Modal } from "@mui/material";

interface ZoomImageProps {
  src: string;
}

export const ZoomImage = ({ src }: ZoomImageProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Image
        onClick={handleOpen}
        src={src}
        width={300}
        height={150}
        alt={src}
        className="cursor-pointer"
      />
      <Modal open={open} onClose={handleClose}>
        <Image
          src={src}
          fill
          objectFit="none"
          alt={src}
          className="cursor-pointer"
        />
      </Modal>
    </>
  );
};
