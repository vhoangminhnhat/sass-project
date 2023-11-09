import React from "react";
import Topbar from "@/components/topbar";
import { cn } from "@/lib/utils";
import Sidebars from "@/components/sidebars";
import MobileSidebar from "@/components/sidebars/mobile-sidebar";
import UpgradeToPro from "@/components/dashboard/upgrade-to-pro";

const DashboardLayout = (props: { children: React.ReactNode }) => {
  const isProPlan = false;
  const userLimitCount = 0;
  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main
        className={cn(
          "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20"
        )}
      >
        <Sidebars
          userLimitCount={userLimitCount}
          isProPlan={isProPlan}
          className={cn(
            "fixed left-0 z-20 w-80 hidden [&:has([is-navbar-minimal]):w-fit]",
            "lg:block"
          )}
        />
        <MobileSidebar isProPlan={false} userLimitCount={0}/>
        <UpgradeToPro isProPlan={false} />
        <div className={cn(
          "bg-background h-[calc(100vh-56px)]",
          "lg:rounded-3xl lg:p-7"
        )}>

        </div>
        {props.children}
      </main>
    </div>
  );
};

export default DashboardLayout;
