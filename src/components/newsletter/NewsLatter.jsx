/**
 * @file NewsletterSection.jsx
 * @description Production-ready Newsletter subscription component.
 * 
 * Features:
 * - Email validation with regex pattern matching
 * - Error handling and user feedback via toast notifications
 * - Loading states during API requests
 * - Responsive design (mobile-first)
 * - Accessibility features (ARIA labels, semantic HTML)
 * - API integration for subscription management
 * - Form reset after successful submission
 * 
 * @component
 * @example
 * return <NewsletterSection />
 */

import { useState, useCallback } from "react";
import { SiMinutemailer } from "react-icons/si";
import { toast } from "react-toastify";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { apiRequest } from "../../api/server";

/**
 * Email validation regex pattern
 * Matches standard email format: localpart@domain.tld
 * @type {RegExp}
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter API endpoint
 * @type {string}
 */
const NEWSLETTER_ENDPOINT = "/api/v1/portfolio/subscribe";

/**
 * Initial form state
 * @type {Object}
 */
const INITIAL_FORM_STATE = {
    email: "",
};

/**
 * Newsletter Section Component
 * 
 * Renders a responsive newsletter subscription section with form validation,
 * error handling, and API integration.
 * 
 * @component
 * @returns {React.ReactElement} Newsletter subscription UI
 */
const NewsletterSection = () => {
    // ==================== STATE ====================
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
    const [touched, setTouched] = useState({}); // Track which fields have been interacted with

    // ==================== VALIDATION ====================

    /**
     * Validates a single field value
     * 
     * @param {string} name - Field name
     * @param {string} value - Field value to validate
     * @returns {string} Error message or empty string if valid
     */
    const validateField = useCallback((name, value) => {
        if (name !== "email") return "";

        const trimmedValue = value.trim();

        if (!trimmedValue) {
            return "Email address is required.";
        }

        if (!EMAIL_REGEX.test(trimmedValue)) {
            return "Please enter a valid email address.";
        }

        return "";
    }, []);

    /**
     * Validates all form fields
     * 
     * @returns {boolean} True if all fields are valid, false otherwise
     */
    const validateFormData = useCallback(() => {
        const newErrors = {};

        for (const [key, value] of Object.entries(formData)) {
            const errorMsg = validateField(key, value);
            if (errorMsg) {
                newErrors[key] = errorMsg;
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData, validateField]);

    // ==================== EVENT HANDLERS ====================

    /**
     * Handles input field changes
     * Updates form data and validates field in real-time
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
     */
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        const errorMsg = validateField(name, value);
        setErrors((prev) => ({
            ...prev,
            [name]: errorMsg,
        }));
    }, [validateField]);

    /**
     * Handles form blur event
     * Marks field as touched for validation display
     * 
     * @param {React.FocusEvent<HTMLInputElement>} e - Blur event
     */
    const handleBlur = useCallback((e) => {
        const { name } = e.target;
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));
    }, []);

    /**
     * Handles form submission
     * Validates form, sends API request, and handles response
     * 
     * @async
     * @param {React.FormEvent<HTMLFormElement>} e - Form submit event
     */
    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();

            if (!validateFormData()) {
                toast.error("Please fill all required fields correctly.");
                return;
            }

            setStatus("loading");

            try {
                const response = await apiRequest(NEWSLETTER_ENDPOINT, {
                    method: "POST",
                    body: JSON.stringify(formData),
                });

                if (response?.statusCode === 200 || response?.status === "Success") {
                    setStatus("success");
                    toast.success(
                        response?.message || "Successfully subscribed to newsletter!"
                    );

                    setFormData(INITIAL_FORM_STATE);
                    setErrors({});
                    setTouched({});

                    setTimeout(() => setStatus(null), 2000);
                } else {
                    setStatus("error");
                    toast.error(
                        response?.message || "Failed to subscribe. Please try again."
                    );
                }
            } catch (error) {
                console.error("Newsletter subscription error:", error);
                setStatus("error");
                toast.error(
                    "Unable to subscribe at this moment. Please try again later."
                );
            }
        },
        [formData, validateFormData]
    );

    // ==================== RENDER ====================

    return (
        <section
            className="w-full mx-auto p-6 mt-15"
            aria-labelledby="newsletter-title"
        >
            <div className="max-w-6xl mx-auto">
                {/* Newsletter Container */}
                <div
                    className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-md rounded-lg p-8 md:p-12 
                     flex flex-col md:flex-row justify-between items-center gap-8 border border-blue-100"
                >
                    {/* Left Content Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                        {/* Title */}
                        <h2
                            id="newsletter-title"
                            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                        >
                            Stay Updated with Latest{" "}
                            <span className="text-blue-600">Tech Insights</span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Subscribe to my newsletter for exclusive content on software
                            development, cloud technologies, modern architecture, and industry
                            best practices. Get valuable insights delivered to your inbox —
                            no spam, only quality.
                        </p>

                        {/* Benefits List */}
                        <ul className="space-y-2 text-sm md:text-base text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">✓</span> Weekly Tech
                                Updates
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">✓</span> In-depth
                                Tutorials & Guides
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">✓</span> Industry
                                Trends & News
                            </li>
                        </ul>
                    </div>

                    {/* Right Form Section */}
                    <div className="w-full md:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                            {/* Email Input Group */}
                            <div className="flex gap-2 flex-col md:flex-row md:gap-0">
                                <div className="flex-grow">
                                    <InputField
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.email ? errors.email : ""}
                                        required
                                        aria-label="Email address"
                                        aria-required="true"
                                        aria-invalid={touched.email && !!errors.email}
                                        aria-describedby={
                                            touched.email && errors.email
                                                ? "email-error"
                                                : undefined
                                        }
                                        autoComplete="email"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex flex-col md:ml-2 justify-end mt-5 md:mt-0">
                                    <Button
                                        variant="primary"
                                        size="medium"
                                        type="submit"
                                        loading={status === "loading"}
                                        disabled={!!errors.email && touched.email}
                                        className="w-full md:w-auto whitespace-nowrap flex items-center justify-center gap-2"
                                        aria-label={
                                            status === "loading"
                                                ? "Subscribing to newsletter"
                                                : "Subscribe to newsletter"
                                        }
                                    >
                                        <span className="flex items-center gap-2">
                                            <SiMinutemailer className="text-lg" />
                                            {status === "loading" ? "Subscribing..." : "Subscribe"}
                                        </span>
                                    </Button>
                                </div>

                            </div>

                            {/* Privacy Notice */}
                            <p className="text-xs text-gray-500 text-center md:text-left">
                                We respect your privacy. Unsubscribe anytime with one click.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

NewsletterSection.propTypes = {};

export default NewsletterSection;

