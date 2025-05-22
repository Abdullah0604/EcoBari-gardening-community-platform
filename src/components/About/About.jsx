import { FaEdit, FaComments, FaSeedling } from "react-icons/fa";
import aboutImg from "../../assets/banner/about.png"; // replace with your image path
import Feature from "./Feature";

const AboutSection = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img src={aboutImg} alt="about" className="w-full" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-slate-100 rounded-xl px-5 py-10">
          <div className="my-5">
            <p className="text-sm font-medium text-green-600 mb-2">
              Why choose Us?
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Integrate Automated <br /> Workflows
            </h2>
            <p className="text-gray-600 text-sm  mb-6">
              We help you transform everyday gardening into a smart, connected,
              and efficient experience. Track, manage, and grow your garden like
              never before.
            </p>
          </div>

          <div className="mt-5">
            {/* Feature 1 */}
            <Feature
              icon={<FaEdit size={20} />}
              title="Custom Edit Tool"
              desc="Tailor your gardening experience with our flexible edit tools."
            />

            {/* Feature 2 */}
            <Feature
              icon={<FaSeedling size={20} />}
              title={" Practical Gardening Tips"}
              desc={
                "  Learn from tried-and-tested tips shared by experts and hobbyists to improve your gardening techniques."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
