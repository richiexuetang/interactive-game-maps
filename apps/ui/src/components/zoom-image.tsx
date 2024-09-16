import Image from "next/image";
import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ZoomImageProps {
  src: string;
}

export const ZoomImage = ({ src }: ZoomImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={src}
          width={300}
          height={150}
          alt={src}
          className="cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="z-[2000] fixed  bottom-0 right-0 w-full h-full flex justify-center items-center max-w-[90vw] max-h-[90vh]">
        <Image
          src={src}
          fill
          objectFit="none"
          alt={src}
          className="cursor-pointer"
        />
      </DialogContent>
    </Dialog>
  );
};
