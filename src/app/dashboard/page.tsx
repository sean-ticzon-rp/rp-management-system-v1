import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">
            Welcome back, {user.name || user.email}!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Your Email</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{user.email}</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">User ID</h3>
            <p className="text-3xl font-bold text-[#0ca6ec]">{user.id}</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Account Status</h3>
            <p className="text-3xl font-bold text-green-600">Active</p>
          </div>
        </div>

        <div className="mt-8">
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}