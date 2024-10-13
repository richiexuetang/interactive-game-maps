import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import MobileStepper from "@mui/material/MobileStepper";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import { Media } from "@/generated/graphql";

interface MediaViewProps {
  media: Media[];
}

/**
 * Displays images and videos for a location marker, used in Popup cards.
 *
 * @component
 */
export const MediaView = ({ media }: MediaViewProps) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      {media[activeStep].type === "image" && (
        <CardMedia
          onClick={() => setModalOpen(true)}
          sx={{ cursor: "pointer" }}
          component="img"
          height="350"
          image={media[activeStep].url}
          alt={media[activeStep].url}
        />
      )}
      {media[activeStep].type === "video" && (
        <ReactPlayer
          url={media[activeStep].url.replace("watch?v=", "v/")}
          width="100%"
        />
      )}

      {media?.length > 1 && (
        <MobileStepper
          variant="dots"
          steps={media?.length}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === media.length - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Image
          onClick={() => setModalOpen(false)}
          src={media[0]?.url}
          fill
          objectFit="none"
          alt={media[0]?.url}
          className="cursor-pointer"
        />
      </Modal>
    </>
  );
};
