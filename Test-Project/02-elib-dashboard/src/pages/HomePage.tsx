import { Button } from "@/components/ui/button"
// import DashboardLayout from "@/layouts/DashboardLayout"


const HomePage = () => {
  return (
    <main  className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      {/* <DashboardLayout/> */}
      <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          <div
            className="flex items-center justify-center flex-1 border border-dashed rounded-lg shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no books
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a book.
              </p>
              <Button className="mt-4">Add Book</Button>
            </div>
          </div>
    </main>
  )
}

export default HomePage