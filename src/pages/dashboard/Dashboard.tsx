// Hooks
import { useState, useEffect } from "react";
import { useAuth } from "../../utils/useAuth";
import { useNavigate } from "react-router-dom";

// UI Components
import Header from "./Header";
import DataCard from "./DataCard";
import {
  IoHappyOutline,
  IoHeartOutline,
  IoPeopleOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { FaUsersRays } from "react-icons/fa6";

interface Data {
  followers: number;
  following: number;
  ctr: number;
  views: number;
  impressions: number;
  likes: number;
}

const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [data] = useState<Data>({
    followers: 0,
    following: 1,
    ctr: 60,
    views: 5000,
    impressions: 200,
    likes: 1000,
  });

  useEffect(() => {
    if (!auth.token) {
      navigate("/login");
    }
  }, [auth.token, navigate]);

  return (
    <div className="relative w-screen h-screen bg-gray-100 overflow-hidden">
      <div className="pt-20">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 mx-auto w-full max-w-7xl gap-4">
          <DataCard
            title={"Following"}
            value={data.following}
            icon={
              <div className="h-16 w-16 rounded-full bg-green-800 flex items-center justify-center">
                <IoPeopleOutline className="text-white text-2xl" />
              </div>
            }
          />
          <DataCard
            title={"Followers"}
            value={data.followers}
            icon={
              <div className="h-16 w-16 rounded-full bg-amber-700 flex items-center justify-center">
                <FaUsersRays className="text-white text-2xl" />
              </div>
            }
          />
          <DataCard
            title={"Impressions"}
            value={data.impressions}
            icon={
              <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center">
                <IoHappyOutline className="text-white text-2xl" />
              </div>
            }
          />
          <DataCard
            title="Views"
            value={data.views}
            icon={
              <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                <IoVideocamOutline className="text-white text-2xl" />
              </div>
            }
          />
          <DataCard
            title="Likes"
            value={data.views}
            icon={
              <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
                <IoHeartOutline className="text-white text-2xl" />
              </div>
            }
          />
          <DataCard
            title={"Click Through Rate"}
            value={`${data.ctr}%`}
            icon={
              <div className="h-16 w-16 rounded-full bg-red-800 flex items-center justify-center">
                <IoPeopleOutline className="text-white text-2xl" />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
