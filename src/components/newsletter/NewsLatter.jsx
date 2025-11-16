import NewsLatterForm from "./NewsletterForm";

const NewsLatter = () => {
    return (
        <div className="max-w-10/12 mx-auto p-6 pt-30">
            <div className="bg-gray-50 shadow-sm rounded-lg p-8 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                        Subscribe to Our Newsletter!
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Stay updated with my latest projects, articles, and insights on software development,
                        cloud technologies, and modern architecture. Subscribe to my newsletter and get valuable
                        content delivered straight to your inbox — no spam, just useful updates.
                    </p>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <NewsLatterForm />
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;
