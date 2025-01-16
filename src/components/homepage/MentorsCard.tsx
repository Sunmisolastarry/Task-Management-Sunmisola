import React, { useState } from "react";
import { Plus, Star } from "lucide-react";

interface MentorsProp {
  image: string;
  mentorName: string;
  mentorRole: string;
  numOfTask: number;
  numOfReview: number;
  starRating: string;
}
const MentorsCard: React.FC<MentorsProp> = ({
  image,
  mentorName,
  mentorRole,
  numOfTask,
  numOfReview,
  starRating,
}) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  const handleFollowBtnClick = () => {
    setIsFollowed((prev) => !prev);
  };
  return (
    <div className="bg-white rounded-[10px] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="rounded-full h-[48px] w-[48px]"
          ></div>
          <div>
            <h1 className="font-medium text-[14px] md:text-base">{mentorName}</h1>
            <p className="text-[#54577A] text-[12px] md:text-[14px]">{mentorRole}</p>
          </div>
        </div>

        <button
          className="flex items-center gap-2"
          onClick={handleFollowBtnClick}
        >
          {isFollowed ? (
            <span className="text-[14px] text-[#546FFF] font-medium">
              Followed
            </span>
          ) : (
            <>
              <Plus size={14} color="#546FFF" />
              <span className="text-[14px] text-[#546FFF] font-medium">
                Follow
              </span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between mt-4 md:mt-6">
        <div className="flex items-center gap-2">
          <img
            src="/task-icon.png"
            alt="task icon"
            className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
          />
          <p className="font-medium text-[14px] md:text-base">{`${numOfTask} Tasks`}</p>
        </div>

        <div className="flex items-center gap-2">
          <Star size={20} color="orange" fill="orange" />
          <p className="font-medium text-[14px] md:text-base">{`${starRating} (${numOfReview} Reviews)`}</p>
        </div>
      </div>
    </div>
  );
};

export default MentorsCard;
