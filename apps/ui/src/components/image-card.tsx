import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
  Card,
  CardFooter,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface ImageCardProps {
  imageSrc: string;
  href: string;
  content: string;
}

export const ImageCard = ({ imageSrc, href, content }: ImageCardProps) => {
  return (
    <Card>
      <CardContent className="p-0">
        <Link href={href} className="flex flex-col items-center">
          <Image
            src={imageSrc}
            width={360}
            height={202.5}
            alt={imageSrc}
            className="w-auto h-full"
            priority
          />
          <div className="">
            <Button variant="link" className="py-8">
              {content}
            </Button>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};
