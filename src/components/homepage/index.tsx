import { useState, useEffect } from "react";
import DetailTask from "./DetailTask";
import MentorsCard from "./MentorsCard";
import TaskCard from "../tasks/TaskCard";
import CalendarCard from "./CalendarCard";
import ActivityChart from "./ActivityChart";
import RunningTaskCard from "./RunningTaskCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DetailTaskk, MonthlyMentors, NewTaskCardDetails } from "../DummyData";

const Homepage = () => {
  const [numberOfCardsToDisplay, setNumberOfCardsToDisplay] =
    useState<number>(2);
  const [currentIndexOfCol1, setCurrentIndexOfCol1] = useState<number>(0);
  const [currentIndexOfCol2, setCurrentIndexOfCol2] = useState<number>(0);

  const handleCol1Previous = () => {
    setCurrentIndexOfCol1((prevIndex) =>
      prevIndex === 0
        ? MonthlyMentors.length - numberOfCardsToDisplay
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
      prevIndex + 1 >= MonthlyMentors.length ? 0 : prevIndex + 1
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
    currentIndexOfCol1 + numberOfCardsToDisplay >= MonthlyMentors.length;

  const isLastNewTaskCard =
    currentIndexOfCol2 + numberOfCardsToDisplay >= NewTaskCardDetails.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setNumberOfCardsToDisplay(1);
      } else {
        setNumberOfCardsToDisplay(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="px-4 w-full bg-[#fafafa] overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
        <div className="2xl:w-3/4 w-full">
          {/* upper cards... */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 ">
            <div className="w-3/5 2xl:w-2/5">
              <RunningTaskCard />
            </div>
            <div className="md:w-4/5">
              <ActivityChart />
            </div>
          </div>

          {/* next row for mentors... */}
          <div className="my-6 md:my-8">
            <div className="flex items-center justify-between">
              <p className="md:text-[20px] font-semibold">Monthly Mentors</p>

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

            <div className="overflow-hidden relative w-full mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {MonthlyMentors.slice(
                  currentIndexOfCol1,
                  currentIndexOfCol1 + numberOfCardsToDisplay
                ).map((card) => {
                  return (
                    <div
                      key={card.id}
                      className="aspect-auto rounded-xl bg-muted/50"
                    >
                      <MentorsCard
                        image={card.image}
                        mentorName={card.name}
                        mentorRole={card.role}
                        numOfTask={card.task}
                        numOfReview={card.reviewNo}
                        starRating={card.starNo}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* next row for upcoming tasks... */}
          <div className="flex flex-1 flex-col gap-4 p-4 mb-6 md:mb-8">
            <div className="flex items-center justify-between">
              <p className="md:text-[20px] font-semibold">Upcoming Tasks</p>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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

        {/* right side... */}
        <div className="2xl:w-1/4 md:2/4 md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-4 lg:gap-0">
          <div className="w-full md:pt-4">
            <CalendarCard />
          </div>

          <div className="my-6">
            {NewTaskCardDetails.slice(4, 5).map((card) => {
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

          <div className="lg:border-t">
            <div className="flex items-center justify-between my-6">
              <h1 className="text-[14px] md:text-base xl:text-[18px] font-medium">
                Detail Task
              </h1>
              <p className="text-[12px] md:text-[14px] ">UI / UX Designer</p>
            </div>
            <ul className="flex flex-col gap-4">
              {DetailTaskk.map((list) => {
                return (
                  <li key={list.id}>
                    <DetailTask num={list.num} detail={list.task} />
                  </li>
                );
              })}
            </ul>
            <button className="bg-[#546FFF] text-white text-[14px] md:text-base w-full rounded-[10px] text-center p-3 md:font-medium mt-6 md:mt-10">
              Go To Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
