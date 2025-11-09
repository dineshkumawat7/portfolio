import { useState } from "react";
import Button from "../common/Button";
import { toast } from "react-toastify";
import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";
import { apiRequest } from "../../api/server";

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);

    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "name":
                if (!value.trim() && value.trim() == "") error = "Name is required.";
                break;

            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim() && value.trim() == "") error = "Email is required.";
                else if (!emailRegex.test(value)) error = "Invalid email address.";
                break;

            case "subject":
                if (!value.trim() && value.trim() == "") error = "Subject is required.";
                break;

            case "message":
                if (!value.trim() && value.trim() == "") error = "Message is required.";
                break;

            default:
                break;
        }

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
            const response = await apiRequest("/api/v1/portfolio/contact-us", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            setStatus("success");
            if (response.status === "Success" && response.statusCode === 200) {
                toast.success(response.message || "Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
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
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto p-6 rounded-2xl shadow-lg bg-white"
        >
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
                Contact Me
            </h2>

            <div className="flex flex-col space-y-4">
                <InputField
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    error={errors.name}
                />

                <InputField
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    error={errors.email}
                />

                <InputField
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    error={errors.subject}
                />

                <TextAreaField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    error={errors.message}
                    rows={5}
                />

                <Button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
            </div>
        </form>
    );
};

export default ContactUsForm;
