import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TimeLimitCardDetails, NewTaskCardDetails } from "../DummyData";

const Tasks = () => {
  const [numberOfCardsToDisplay, setNumberOfCardsToDisplay] =
    useState<number>(4);
  const [currentIndexOfCol1, setCurrentIndexOfCol1] = useState<number>(0);
  const [currentIndexOfCol2, setCurrentIndexOfCol2] = useState<number>(0);

  const handleCol1Previous = () => {
    setCurrentIndexOfCol1((prevIndex) =>
      prevIndex === 0
        ? TimeLimitCardDetails.length - numberOfCardsToDisplay
        : prevIndex - 1
    );
  };

  const handleCol2Previous = () => {
    setCurrentIndexOfCol2((prevIndex) =>
      prevIndex === 0
        ? NewTaskCardDetails.length - numberOfCardsToDisplay
        : prevIndex - 1
    );
  };

  const handleCol1Next = () => {
    setCurrentIndexOfCol1((prevIndex) =>
      prevIndex + 1 >= TimeLimitCardDetails.length ? 0 : prevIndex + 1
    );
  };

  const handleCol2Next = () => {
    setCurrentIndexOfCol2((prevIndex) =>
      prevIndex + 1 >= NewTaskCardDetails.length ? 0 : prevIndex + 1
    );
  };

  const isFirstTimeLimitCard = currentIndexOfCol1 === 0;

  const isFirstNewTaskCard = currentIndexOfCol2 === 0;

  const isLastTimeLimitCard =
    currentIndexOfCol1 + numberOfCardsToDisplay >= TimeLimitCardDetails.length;

  const isLastNewTaskCard =
    currentIndexOfCol2 + numberOfCardsToDisplay >= NewTaskCardDetails.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setNumberOfCardsToDisplay(1);
      }
      if (window.innerWidth >= 884 && window.innerWidth <= 1104) {
        setNumberOfCardsToDisplay(2);
      } else {
        setNumberOfCardsToDisplay(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#fafafa] h-full py-4">
      <div className="flex flex-1 flex-col gap-4 p-4 my-4">
        <div className="flex items-center justify-between">
          <p className="md:text-[20px] font-semibold">Time Limit</p>

          <div className="flex gap-2">
            <button
              onClick={handleCol1Previous}
              disabled={isFirstTimeLimitCard}
              className={`${
                isFirstTimeLimitCard
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-black"
              }`}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleCol1Next}
              className={`${
                isLastTimeLimitCard
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-black"
              }`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {TimeLimitCardDetails.slice(
              currentIndexOfCol1,
              currentIndexOfCol1 + numberOfCardsToDisplay
            ).map((card) => {
              return (
                <div
                  key={card.id}
                  className="aspect-auto rounded-xl bg-muted/50"
                >
                  <TaskCard
                    title={card.title}
                    role={card.role}
                    time={card.time}
                    progress={card.progress}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 mb-4">
        <div className="flex items-center justify-between">
          <p className="md:text-[20px] font-semibold">New Task</p>

          <div className="flex gap-2">
            <button
              onClick={handleCol2Previous}
              disabled={isFirstNewTaskCard}
              className={`${
                isFirstNewTaskCard
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-black"
              }`}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleCol2Next}
              className={`${
                isLastNewTaskCard
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-black"
              }`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 w-full">
            {NewTaskCardDetails.slice(
              currentIndexOfCol2,
              currentIndexOfCol2 + numberOfCardsToDisplay
            ).map((card) => {
              return (
                <div
                  key={card.id}
                  className="aspect-auto rounded-xl bg-muted/50"
                >
                  <TaskCard
                    title={card.title}
                    role={card.role}
                    time={card.time}
                    progress={card.progress}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
