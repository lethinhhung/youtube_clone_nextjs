"use client";

import Image from "next/image";
import SearcBar from "./search-bar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { AuthenticationDialog } from "./authentication-dialog";

export default function Header() {
  const loggined = false;

  return (
    <div className="flex flex-row justify-between items-center bg-background text-foreground h-15 px-1 py-5 w-full">
      <SidebarTrigger className="flex md:hidden" />
      <Image
        className="dark:invert w-10 h-10 object-contain"
        src="/imgs/logo-default.svg"
        width={100}
        height={40}
        alt="Logo"
        priority
      />
      <SearcBar />
      {loggined ? (
        <div className="flex flex-row items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"}>Hehe</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div>|</div>
          <Button variant={"ghost"}>
            Log out
            <LogOut />
          </Button>
        </div>
      ) : (
        <AuthenticationDialog asChild>
          <Button>Login</Button>
        </AuthenticationDialog>
      )}
    </div>
  );
}
