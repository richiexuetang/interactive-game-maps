import Image from "next/image";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ZoomImageProps {
  src: string;
}

export const ZoomImage = ({ src }: ZoomImageProps) => {
  // State variable for managing zoomed image
  const [zoomedImage, setZoomedImage] = React.useState<string | null>(null);
  // Function to open zoomed image
  const openZoomedImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
  };
  // Function to close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  //   .zoomed-image {
  //     max-width: 90vw;
  //     max-height: 90vh;
  //   }
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
