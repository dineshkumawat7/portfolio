import { FaUser } from "react-icons/fa6";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { TextArea } from "../input/TextArea";
import { MdEmail, MdSubject } from "react-icons/md";
import { ImArrowRight2 } from "react-icons/im";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <Input
          label="Your Name"
          id="name"
          name="name"
          placeholder="e.g. John Smith"
          type="text"
          required
          leftIcon={<FaUser />}
        />
      </div>
      <div>
        <Input
          label="Email Address"
          id="email"
          name="email"
          placeholder="e.g. john.smith@example.com"
          type="email"
          required
          leftIcon={<MdEmail />}
        />
      </div>
      <div>
        <Input
          label="Subject"
          id="subject"
          name="subject"
          placeholder="What's on your mind?"
          type="text"
          required
          leftIcon={<MdSubject />}
        />
      </div>
      <div>
        <TextArea
          label="Message"
          id="message"
          name="message"
          placeholder="Tell us more..."
          required
        />
      </div>

      <div>
        <Button type="submit" rightIcon={<ImArrowRight2 />}>
          Send Message
        </Button>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500">
          ✓ Response within 24 hours
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
