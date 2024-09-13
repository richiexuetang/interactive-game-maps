import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/firebase/auth";
import { userAtom } from "@/store/auth";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

interface UserAvatarProps {
  imageSrc: string;
  name: string;
}
export function UserAvatar({ imageSrc, name }: UserAvatarProps) {
  const router = useRouter();
  const setAppUser = useSetAtom(userAtom);

  const handleSignOut = async () => {
    const isOk = await signOut();

    if (isOk) {
      setAppUser(null);
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage src={imageSrc} alt="user profile image" />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[1000]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
