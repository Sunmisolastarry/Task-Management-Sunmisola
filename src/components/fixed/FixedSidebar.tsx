import { useState } from "react";
import { Bell, Plus } from "lucide-react";
import { Separator } from "../ui/separator";
import { AppSidebar } from "../dashboard/app-sidebar";
import { SearchForm } from "../dashboard/search-form";
import { Outlet, useLocation } from "react-router-dom";
import AddTask from "../modals/AddTask";
import CategoryPopover from "../popovers/CategoryPopover";
import DeadlinePopover from "../popovers/DeadlinePopover";
import { Breadcrumb, BreadcrumbList } from "../ui/breadcrumb";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const FixedSidebar = () => {
  const location = useLocation();
  const [shouldShowAddModal, setShouldShowAddModal] = useState<boolean>(false);

  const handleAddBtnClick = () => {
    setShouldShowAddModal(true);
  };

  const getGreetingMessage = () => {
    if (location.pathname === "/") {
      return {
        title: "Hi Sunmisola,",
        subtitle: "Let's finish your task today!",
      };
    } else if (location.pathname === "/task") {
      return {
        title: "Explore Task",
        subtitle: "",
      };
    } else {
      return {
        title: "Settings",
        subtitle: "",
      };
    }
  };

  const { title, subtitle } = getGreetingMessage();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b w-full px-4 py-10">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb className="w-full ">
            <BreadcrumbList className="flex items-center justify-between w-full">
              <div>
                <p className="text-[18px] md:text-[24px] text-black font-semibold">
                  {title}
                </p>
                {subtitle && <p className="mt-2">{subtitle}</p>}
              </div>
              <div className="flex items-center gap-4">
                <Bell />
                <div
                  className="w-[50px] h-[50px] rounded-full"
                  style={{
                    background: `url('/headshott.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#f3f3f3",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex items-center justify-between pl-2 pr-4">
          <div className="lg:w-1/4 w-3/4 md:w-2/4 my-4 md:my-6">
            <SearchForm />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={handleAddBtnClick}
              className="border px-[28px] py-[14px] rounded-md flex items-center gap-2"
            >
              <Plus color="#8e92bc" />
              <p className="text-[14px] md:text-base">Add Task</p>
            </button>

            <Popover>
              <PopoverTrigger className="border px-[28px] py-[14px] rounded-md flex items-center gap-2">
                <img
                  src="/category.png"
                  alt="category"
                  className="w-[16px] md:w-[20px] h-[16px] md:h-[20px]"
                />
                <p className="text-[14px] md:text-base">Category</p>
              </PopoverTrigger>
              <PopoverContent className="w-40">
                <CategoryPopover />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger className="border px-[28px] py-[14px] rounded-md flex items-center gap-2">
                <img
                  src="/sort.png"
                  alt="sort"
                  className="w-[16px] md:w-[20px] h-[16px] md:h-[20px]"
                />
                <p className="text-[14px] md:text-base">Sort By : Deadline</p>
              </PopoverTrigger>
              <PopoverContent className="w-[13.1rem]">
                <DeadlinePopover />
              </PopoverContent>
            </Popover>
          </div>

          <div className="block lg:hidden ">
            <Popover>
              <PopoverTrigger className="border p-[14px] rounded-md">
                <img
                  src="/mobile-category.png"
                  alt="category"
                  className="w-[18px] md:w-[20px] h-[16px] md:h-[20px]"
                />
              </PopoverTrigger>
              <PopoverContent className="w-40 justify-start">
                <CategoryPopover />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <main className="md:h-[83%]">
          <Outlet />
        </main>
      </SidebarInset>

      {shouldShowAddModal && (
        <AddTask onClose={() => setShouldShowAddModal(false)} />
      )}
    </SidebarProvider>
  );
};

export default FixedSidebar;
