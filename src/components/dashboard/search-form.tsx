import { Search } from "lucide-react";
import { Label } from "../ui/label";
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "../ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search Tasks"
            className="h-[3rem] md:h-[3.5rem]"
          />
          <Search className="pointer-events-none absolute right-2 top-1/2 size-5 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
