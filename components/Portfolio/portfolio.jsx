import { useQuery } from "react-query";
import PortfolioCard from "./PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../Common/ImageAndParagraphSkeleton";

const Portfolio = () => {
  const { isLoading, error, data } = useQuery("portfolio", () =>
    axios
      .get("api/portfolio")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );
  return (
    <>
      <div className="px-2 md:px-8 pt-4 text-lg font-bold text-Snow">
        Completed Projects
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-2 md:px-8 my-6">
        {isLoading
          ? [1, 2, 3, 4].map(() => (
              <ImageAndParagraphSkeleton className={"w-full object-cover"} />
            ))
          : data?.map((data, key) => <PortfolioCard key={key} data={data} />)}
      </div>
    </>
  );
};

export default Portfolio;
