import TaskTable from "@/components/TaskTable";

const Dashboard = () => {
  return (
    <div className="h-[88%] w-full overflow-y-auto">
      <div className="w-full h-10 bg-gray-100 flex items-center px-10 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 stroke-gray-500 text-gray-500 cursor-pointer"
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
        <span className="text-gray-300">
            /
        </span>
        <span className="text-gray-500 text-sm">
            Dashboard
        </span>
      </div>
      <div className="w-full bg-gray-200 p-10">
        <div className="flex justify-between mb-10">
            <div className="bg-white w-[23%] h-52 rounded-sm shadow-sm"></div>
            <div className="bg-white w-[23%] h-32 rounded-sm shadow-sm"></div>
            <div className="bg-white w-[23%] h-32 rounded-sm shadow-sm"></div>
            <div className="bg-white w-[23%] h-32 rounded-sm shadow-sm"></div>            
        </div>
        <div className="w-full h-[700px] flex justify-between mb-10">
            <div className="bg-white w-[65%] h-[98.5%] rounded-sm shadow-sm"></div>
            <div className=" w-[32%] h-full flex flex-col justify-end">
                <div className=" w-full h-[98.5%] flex flex-col justify-between items-center">
                    <div className="bg-white w-[96%] h-[52%] rounded-sm shadow-sm"></div>
                    <div className="w-full h-[20%] bg-white rounded-sm shadow-sm"></div>
                    <div className="w-[96%] h-[17%] bg-white rounded-sm shadow-sm"></div>
                </div>
            </div> 
        </div>
        <div className="flex justify-between mb-10">
            <div className="bg-white w-[23%] h-20 rounded-sm shadow-sm"></div>
            <div className="bg-white w-[23%] h-20 rounded-sm shadow-sm"></div>
            <div className="bg-white w-[23%] h-20 rounded-sm shadow-sm"></div>
            <div className="bg-white w-[23%] h-20 rounded-sm shadow-sm"></div>            
        </div>

        <div className="w-full h-[400px] bg-white rounded-sm shadow-sm mb-10"></div>

        <div className="flex justify-between w-full h-[400px] mb-10">
            <div className="bg-white w-[49%] h-full rounded-sm shadow-sm"></div>
            <div className="bg-white w-[48%] h-full rounded-sm shadow-sm"></div>
        </div>

        <div className="w-full h-[350px] bg-white rounded-sm shadow-sm mb-10 px-5">
            <TaskTable />
        </div>
    </div>
    </div>
  );
};

export default Dashboard;
