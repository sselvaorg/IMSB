import React, { useEffect, useState } from "react";
import AreaCharts from "../../Components/AreaCharts/AreaCharts";
import PieCharts from "../../Components/PieCharts/PieCharts";
import RadialBar from "../../Components/RadialBar/RadialBar";
import { Stats } from "../../helpers/declarations";
import ItemSkeleton from "../../Components/ItemSkeleton/ItemSkeleton";
import { GetDashboardStats } from "../../Services/ChartsService";

type Props = {};

const DashboardPage = (props: Props) => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const GetStats = async () => {
      setLoading(true);
      const reponse = await GetDashboardStats();
      setStats(reponse);
      setLoading(false);
    };
    GetStats();
  }, []);

  return (
    <div className="container contain-content mx-auto max-w-full grid grid-cols-12 justify-center ">
      <div className="p-3 col-span-3">
        {isLoading ? (
          <ItemSkeleton isLoading={isLoading}></ItemSkeleton>
        ) : (
          <div className="bg-yellow-400  px-3 py-2 rounded-lg flex justify-start gap-4 items-center">
            <div>
              <svg
                className="w-12 h-12 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-sans text-5xl  text-white">
                {stats?.nombreArticle}
              </h1>
              <p className="font-sans text-xl  text-white">Articles</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-3 col-span-3">
        {isLoading ? (
          <ItemSkeleton isLoading={isLoading}></ItemSkeleton>
        ) : (
          <div className="bg-blue-400  px-3 py-2 rounded-lg flex justify-start gap-4 items-center">
            <div>
              <svg
                className="w-16 h-16 text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-sans text-5xl  text-white">
                {stats?.nombreFournisseur}
              </h1>
              <p className="font-sans text-xl  text-white">Fournisseurs</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-3 col-span-3">
        {isLoading ? (
          <ItemSkeleton isLoading={isLoading}></ItemSkeleton>
        ) : (
          <div className="bg-red-400  px-3 py-2 rounded-lg flex justify-start gap-4 items-center">
            <div>
              <svg
                className="w-12 h-12 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-sans text-5xl  text-white">
                {stats?.stockEpuisee}
              </h1>
              <p className="font-sans text-xl  text-white">stock épuisé</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-3 col-span-3">
        {isLoading ? (
          <ItemSkeleton isLoading={isLoading}></ItemSkeleton>
        ) : (
          <div className="bg-green-400  px-3 py-2 rounded-lg flex justify-start gap-4 items-center">
            <div>
              <svg
                className="w-12 h-12 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a2 2 0 0 0-2 2v1h10.968l-1.9-2.28A2 2 0 0 0 10.532 4H5ZM3 19V9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm11.707-7.707a1 1 0 0 0-1.414 1.414l.293.293H8a1 1 0 1 0 0 2h5.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-sans text-5xl  text-white">
                {stats?.nombreCategorie}
              </h1>
              <p className="font-sans text-xl  text-white">Categories</p>
            </div>
          </div>
        )}
      </div>

      <div className="px-3 col-span-8">
        <div className=" bg-white px-3 py-2 rounded-lg">
          <AreaCharts></AreaCharts>
        </div>
      </div>
      <div className="px-3 col-span-4 flex  justify-center flex-col gap-3 aspect-video">
        <div className=" bg-white px-3 py-2 rounded-lg flex items-center">
          <PieCharts></PieCharts>
        </div>
        <div className=" bg-white px-3  rounded-lg flex items-start h-max">
          <RadialBar></RadialBar>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
