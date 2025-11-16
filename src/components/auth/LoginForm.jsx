const LoginForm = () => {
    return (
        <form className="flex flex-col gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-600">
                    Email
                </label>
                <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600">
                    Password
                </label>
                <input
                    type="password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
