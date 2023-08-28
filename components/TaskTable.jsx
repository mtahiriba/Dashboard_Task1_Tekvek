

export default function TaskTable() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b-2 font-medium dark:border-neutral-300">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Task</th>
                  <th scope="col" className="px-6 py-4">Completion</th>
                  <th scope="col" className="px-6 py-4">Assigned to</th>
                  <th scope="col" className="px-6 py-4">Completion %</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-300">
                  <td className="whitespace-nowrap px-6 py-3 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-3">TWLT</td>
                  <td className="whitespace-nowrap px-6 py-3"><span className="bg-teal-700 text-white text-xs font-medium mr-2 px-2.5 py-1.5 rounded">Pending</span></td>
                  <td className="whitespace-nowrap px-6 py-3">@mdo</td>
                </tr>
                <tr className="border-b dark:border-neutral-300">
                  <td className="whitespace-nowrap px-6 py-3 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-3">A16Z</td>
                  <td className="whitespace-nowrap px-6 py-3"><span className="bg-red-500 text-white text-xs font-medium mr-2 px-2.5 py-1.5 rounded">Testing</span></td>
                  <td className="whitespace-nowrap px-6 py-3">@fat</td>
                </tr>
                <tr className="border-b dark:border-neutral-300">
                  <td className="whitespace-nowrap px-6 py-3 font-medium">3</td>
                  <td className="whitespace-nowrap px-6 py-3">DARK</td>
                  <td className="whitespace-nowrap px-6 py-3"><span className="bg-amber-400 text-white text-xs font-medium mr-2 px-2.5 py-1.5 rounded">Due</span></td>
                  <td className="whitespace-nowrap px-6 py-3">@twitter</td>
                </tr>
                <tr className="border-b dark:border-neutral-300">
                  <td className="whitespace-nowrap px-6 py-3 font-medium">4</td>
                  <td className="whitespace-nowrap px-6 py-3">Q300</td>
                  <td className="whitespace-nowrap px-6 py-3"><span className="bg-green-500 text-white text-xs font-medium mr-2 px-2.5 py-1.5 rounded">Accepted</span></td>
                  <td className="whitespace-nowrap px-6 py-3">@mdo</td>
                </tr>
                <tr className="border-b dark:border-neutral-300">
                  <td className="whitespace-nowrap px-6 py-3 font-medium">5</td>
                  <td className="whitespace-nowrap px-6 py-3">RVNG</td>
                  <td className="whitespace-nowrap px-6 py-3"><span className="bg-rose-800 text-white text-xs font-medium mr-2 px-2.5 py-1.5 rounded">Suspended</span></td>
                  <td className="whitespace-nowrap px-6 py-3">@fat</td>
                </tr>
                <tr className="">
                  <td className="whitespace-nowrap px-6 py-3 font-medium">6</td>
                  <td className="whitespace-nowrap px-6 py-3">FDSA</td>
                  <td className="whitespace-nowrap px-6 py-3"><span className="bg-blue-700 text-white text-xs font-medium mr-2 px-2.5 py-1.5 rounded"> In evaluation</span></td>
                  <td className="whitespace-nowrap px-6 py-3">@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}