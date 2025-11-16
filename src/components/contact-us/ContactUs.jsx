import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
    return (
        <div className="max-w-10/12 mx-auto p-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-8 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">

                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <ContactUsForm />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;