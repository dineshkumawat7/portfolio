import Container from "../../components/layout/Container";
import { NewsletterForm } from "./NewsletterForm";

export const Newsletter = () => {
  return (
    <section className="bg-white dark:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <img
              src="src/assets/images/Newsletter.png"
              alt="Newsletter Illustration"
              className="w-120 h-auto rounded-lg"
            />
          </div>
          <div>
            <h2
              id="newsletter-title"
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 transition-all duration-300"
            >
              Stay Updated with Latest{" "}
              <span className="text-blue-600">Tech Insights</span>
            </h2>
            <p className="text-black dark:text-gray-300 mt-4 text-sm md:text-base transition-colors duration-300">
              Subscribe to my newsletter for exclusive content on software
              development, cloud technologies, modern architecture, and industry
              best practices. Get valuable insights delivered to your inbox — no
              spam, only quality.
            </p>
            <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400 transition-all duration-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                Weekly Tech Updates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                In-depth Tutorials & Guides
              </li>
              <li className="flex items-center md:justify-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                Industry Trends & News
              </li>
            </ul>
            <div className="mt-10">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
