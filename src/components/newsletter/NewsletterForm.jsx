import { useState } from "react";
import { apiRequest } from "../../api/server";
import Button from "../common/Button";
import { toast } from "react-toastify";
import { SiMinutemailer } from "react-icons/si";

const NewsLatterForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || value.trim() === "") {
            setError("Please enter your email address.");
            setIsValid(false);
            return false;
        } else if (!regex.test(value)) {
            setError("Please enter a valid email address.");
            setIsValid(false);
            return false;
        } else {
            setError("");
            setIsValid(true);
            return true;
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) return;

        setStatus("loading");

        try {
            const response = await apiRequest("/api/v1/portfolio/subscribe", {
                method: "POST",
                body: JSON.stringify({ email }),
            });

            setStatus("success");
            console.log("Subscribed:", response);

            if (response.status === "Success" && response.statusCode === 200) {
                toast.success(response.message || "Thank you for subscribing!");
                setEmail("");
                setIsValid(false);
            } else {
                toast.error(response.message || "Subscription failed.");
            }
        } catch (error) {
            console.error("Subscription error:", error);
            setStatus("error");
            toast.error("Server error! Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex w-full">
                <div className="flex-grow">
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                        className={`flex-grow px-4 py-2 border focus:outline-none w-full transition-all duration-200
                         ${error ? "border-red-500 focus:border-red-500"
                                : isValid ? "border-green-500 focus:border-green-500"
                                    : "border-gray-300 focus:border-blue-500"
                            }`}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>

                <div className="ml-2">
                    <Button
                        variant="primary"
                        size="medium"
                        type="submit"
                        disabled={status === "loading"}
                        className="px-4 py-2 gap-2"
                    >
                        <SiMinutemailer /> {status === "loading" ? "Subscribing..." : "Subscribe"}
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default NewsLatterForm;
