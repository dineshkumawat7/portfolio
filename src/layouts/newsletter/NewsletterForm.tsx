import { SiMinutemailer } from "react-icons/si";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { MdEmail } from "react-icons/md";

export const NewsletterForm = () => {
  return (
    <form className="w-full">
      <div className="relative w-full">
        <Input
          id="email"
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          leftIcon={<MdEmail />}
          required
          helperText="We respect your privacy. Unsubscribe anytime with one click."
          className="pr-36"
        />

        <Button
          type="submit"
          className="rounded-lg! shadow-none! absolute right-1 top-7 h-7.5"
        >
          <SiMinutemailer />
          Subscribe
        </Button>
      </div>
    </form>
  );
};
