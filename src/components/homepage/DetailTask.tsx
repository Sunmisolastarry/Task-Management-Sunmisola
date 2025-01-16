import React from "react";

interface DetailTaskProp {
  num: number;
  detail: string;
}
const DetailTask: React.FC<DetailTaskProp> = ({ num, detail }) => {
  return (
    <div className="flex items-center gap-3">
      <p className="py-3 px-5 rounded-[10px] bg-[#F5F5F7] text-[12px] md:text-[14px] xl:text-base font-medium">
        {num}
      </p>
      <p className="text-[12px] md:text-[14px] xl:text-base font-medium">{detail}</p>
    </div>
  );
};

export default DetailTask;
