import React from "react";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useSidebarStore } from "@/stores/sidebar-store";

const Topbar = () => {
   const {handleOpenOrClose} = useSidebarStore();
  return (
    <div
      className={cn(
        "flex items-center p-4 justify-between sticky top-0 z-30",
        "lg:hidden"
      )}
    >
      <Logo/>
      <Button variant={"ghost"} size={"icon"}>
        <Menu/>
      </Button>
    </div>
  );
};

export default Topbar;
