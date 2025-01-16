import { Briefcase, CircleUser, TriangleAlert } from "lucide-react";

const CategoryPopover = () => {
  return (
    <ul>
      <li className=" hover:bg-[#fafafa] hover:duration-300 p-2 rounded-md">
        <button className="flex items-center gap-2">
          <Briefcase size={16} strokeWidth={1.5} />
          Work
        </button>
      </li>
      <li className=" hover:bg-[#fafafa] hover:duration-300 p-2 rounded-md">
        <button className="flex items-center gap-2">
          <CircleUser size={16} strokeWidth={1.5} />
          Personal
        </button>
      </li>
      <li className=" hover:bg-[#fafafa] hover:duration-300 p-2 rounded-md">
        <button className="flex items-center gap-2">
          <TriangleAlert size={16} strokeWidth={1.5} />
          Urgent
        </button>
      </li>
    </ul>
  );
};

export default CategoryPopover;
