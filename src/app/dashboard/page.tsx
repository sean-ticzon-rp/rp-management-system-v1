export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">
            Welcome to your dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-[#0ca6ec]">0</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold text-[#0ca6ec]">0</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">New Today</h3>
            <p className="text-3xl font-bold text-[#0ca6ec]">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}