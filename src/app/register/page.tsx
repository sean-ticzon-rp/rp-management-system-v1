import { RegisterForm } from "@/components/forms/register-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0ca6ec] items-center justify-center p-12">
        <div className="text-center text-white space-y-4 animate-fade-in">
          <div className="w-24 h-24 bg-white rounded-2xl mx-auto flex items-center justify-center mb-6">
            <span className="text-[#0ca6ec] text-4xl font-bold">C</span>
          </div>
          <h1 className="text-4xl font-bold">Company Name</h1>
          <p className="text-blue-100 text-lg">Start your journey with us today</p>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md animate-slide-up">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}