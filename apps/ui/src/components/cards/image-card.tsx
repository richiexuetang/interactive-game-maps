"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useRouter } from "next/navigation";

interface ImageCardProps {
  imageSrc: string;
  href: string;
  content: string;
}

export const ImageCard = ({ imageSrc, href, content }: ImageCardProps) => {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => router.push(href)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageSrc}
          alt={content}
        />
        <CardContent
          sx={{
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
          }}
        >
          <Typography variant="body1" sx={{ textDecoration: "none" }}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
