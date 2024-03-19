"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import React from "react";
import MobileItem from "./MobileItem";

type Props = {};

const MobileFooter = (props: Props) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 z-40 flex w-full items-center justify-between border-t-[1px] bg-white 
      lg:hidden"
    >
      {routes.map((route) => {
        const { href, icon, label, active, onClick } = route;
        return (
          <MobileItem
            key={label}
            href={href}
            active={active}
            icon={icon}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default MobileFooter;
