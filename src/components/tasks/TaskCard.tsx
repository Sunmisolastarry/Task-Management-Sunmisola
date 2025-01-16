import React, { useState } from "react";
import DeleteTask from "../modals/DeleteTask";
import { Clock, Pencil, Trash2 } from "lucide-react";
import { Slider } from "../ui/slider";
import EditTask from "../modals/EditTask";

interface TaskCardProp {
  title: string;
  role: string;
  progress: number;
  time: string;
}

const TaskCard: React.FC<TaskCardProp> = ({ title, role, time, progress }) => {
  const [shouldShowAddModal, setShouldShowAddModal] = useState<boolean>(false);
  const [shouldShowDeleteModal, setShouldShowDeleteModal] =
    useState<boolean>(false);

  const handleAddBtnClick = () => {
    setShouldShowAddModal(true);
  };

  const handleDeleteBtnClick = () => {
    setShouldShowDeleteModal(true);
  };
  return (
    <>
      <div className="p-[16px]">
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={handleAddBtnClick}
            className="p-2 rounded-md bg-white"
          >
            <Pencil size={18} color="#54577A" />
          </button>
          <button onClick={handleDeleteBtnClick}>
            <Trash2 size={18} color="red" />
          </button>
        </div>
        <div>
          <h1 className="font-semibold text-[14px] xl:text-base 2xl:text-[18px] md:text-base">
            {title}
          </h1>
          <p className="text-[#54577a] text-[14px] 2xl:text-base">{role}</p>
        </div>

        <div className="flex items-center justify-between my-3">
          <p>Progress</p>
          <p className="text-[#546FFF] font-medium">{`${progress}%`}</p>
        </div>
        <>
          <Slider defaultValue={[progress]} max={100} step={1} />
        </>
        <div className="flex items-center justify-between mt-6 mb-3">
          <div className="flex items-center gap-1">
            <Clock size={18} color="#54577A" />
            <p className="font-medium text-[14px] md:text-base">{time}</p>
          </div>

          <img src="/Student.svg" alt="students" />
        </div>
      </div>

      {shouldShowAddModal && (
        <EditTask onClose={() => setShouldShowAddModal(false)} />
      )}

      {shouldShowDeleteModal && (
        <DeleteTask
          onClose={() => setShouldShowDeleteModal(false)}
          open={shouldShowDeleteModal}
        />
      )}
    </>
  );
};

export default TaskCard;
