import { useState } from "react";
import { apiRequest } from "../../api/server";
import Button from "../common/Button";
import { toast } from "react-toastify";
import { SiMinutemailer } from "react-icons/si";
import InputField from "../common/InputField";

const NewsLatterForm = () => {
    const [formData, setFormData] = useState({
        email: ""
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);

    const validateField = (name, value) => {
        let error = "";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim() && value.trim() == "") error = "Email is required.";
        else if (!emailRegex.test(value)) error = "Invalid email address.";

        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    const validateFormData = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const errorMsg = validateField(key, formData[key]);
            if (errorMsg) newErrors[key] = errorMsg;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateFormData()) {
            toast.error("Please fill all required fields.");
            return;
        }

        setStatus("loading");
        try {
            const response = await apiRequest("/api/v1/portfolio/subscribe", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            setStatus("success");
            if (response.status === "Success" && response.statusCode === 200) {
                toast.success(response.message || "Message sent successfully!");
                setFormData({ email: "" });
                setErrors({});
            } else {
                toast.error(response.message || "Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            toast.error("Server error! Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex w-full">
                <div className="flex-grow">
                    <InputField
                        name="email"
                        type="emal"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        error={errors.email}
                    />
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
