import Header from "@/components/Header"
import Dashboard from "@/components/Dashboard"

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header/>
      <Dashboard/>
    </div>
  )
}
