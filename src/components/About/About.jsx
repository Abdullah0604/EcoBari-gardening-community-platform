import { FaEdit, FaComments, FaSeedling } from "react-icons/fa";
import aboutImg from "../../assets/banner/about.png"; // replace with your image path
import Feature from "./Feature";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
const AboutSection = () => {
  const customFadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left Image */}

        <div className="w-full md:w-1/2">
          <Fade
            triggerOnce
            keyframes={customFadeUp}
            direction="up"
            duration={1800}
          >
            <img src={aboutImg} alt="about" className="w-full" />
          </Fade>
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-slate-100 rounded-xl px-5 py-10">
          <div className="my-5">
            <Fade direction="down" duration={1800} triggerOnce>
              <p className="text-sm font-medium text-green-600 mb-2">
                Why choose Ecobari?
              </p>
            </Fade>
            <Fade direction="up" duration={1800} triggerOnce>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Integrate Automated <br /> Workflows
              </h2>
            </Fade>
            <Fade direction="up" duration={1800} triggerOnce>
              <p className="text-gray-600 text-sm  mb-6">
                We help you transform everyday gardening into a smart,
                connected, and efficient experience. Track, manage, and grow
                your garden like never before.
              </p>
            </Fade>
          </div>

          <div className="mt-5">
            {/* Feature 1 */}
            <Fade direction="up" duration={1800} triggerOnce>
              <Feature
                icon={<FaEdit size={20} />}
                title="Custom Edit Tool"
                desc="Tailor your gardening experience with our flexible edit tools."
              />
            </Fade>
            {/* Feature 2 */}
            <Fade direction="up" duration={1800} triggerOnce>
              <Feature
                icon={<FaSeedling size={20} />}
                title={" Practical Gardening Tips"}
                desc={
                  "  Learn from tried-and-tested tips shared by experts and hobbyists to improve your gardening techniques."
                }
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
