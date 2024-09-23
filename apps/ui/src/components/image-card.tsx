import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";

interface ImageCardProps {
  imageSrc: string;
  href: string;
  content: string;
}

export const ImageCard = ({ imageSrc, href, content }: ImageCardProps) => {
  return (
    <Link href={href}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageSrc}
            alt={content}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
