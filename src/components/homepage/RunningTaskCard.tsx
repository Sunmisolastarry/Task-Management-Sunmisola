import CircularProgressBar from "../progress-bar/CircularProgressBar";

const RunningTaskCard = () => {
  const progress = 45;
  return (
    <div className="text-white rounded-[10px] bg-[#141522] p-6 md:p-10">
      <p className="text-base lg:text-[20px] font-semibold">Running Task</p>
      <h1 className="text-[24px] md:text-[32px] lg:text-[42px] font-semibold mt-4">65</h1>

      <div className="flex items-center gap-3 mt-4">
        <CircularProgressBar progress={progress} />
        <div>
          <h1 className="text-base md:text-[20px] lg:text-[32px] font-semibold">100</h1>
          <p className="mt-1 lg:mt-2 text-[#8E92BC] text-[14px] md:text-base lg:text-[20px] font-medium">Task</p>
        </div>
      </div>
    </div>
  );
};

export default RunningTaskCard;
