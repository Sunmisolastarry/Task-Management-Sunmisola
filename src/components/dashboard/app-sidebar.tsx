import * as React from "react";
import { SidebarData } from "../DummyData";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar {...props}>
      <SidebarContent className="flex flex-col justify-between h-full py-6">
        {/* We create a SidebarGroup for each parent. */}

        <div>
          <div className="flex items-center gap-2 px-4">
            <img src="/logo.png" alt="logo" className="w-[45px]" />
            <h1 className="text-[32px] font-semibold">TMG</h1>
          </div>

          {SidebarData.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => {
                    const isActive = location.pathname === item.url;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          onClick={() => navigate(item.url)}
                        >
                          <a href={item.url} className="text-[14px] md:text-[18px] my-1 py-5 md:py-7">
                            {isActive ? (
                              <img
                                src={item.activeImg}
                                alt={item.title}
                                className="h-[18px]"
                              />
                            ) : (
                              <img
                                src={item.inactiveImg}
                                alt={item.title}
                                className="h-[18px]"
                              />
                            )}

                            {item.title}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>

        <div className="px-6">
          <img src="/HelpBox.png" alt="help box" />
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
