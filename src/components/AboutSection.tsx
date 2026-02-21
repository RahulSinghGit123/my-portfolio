import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          Frontend Developer with 2+ years of experience building scalable and high-performance web applications using React.js and Next.js. Currently working at Flooid (merged with Keuro Digital) on enterprise-level e-commerce platforms and Order Management Systems. Strong expertise in UI performance, responsive design, and search-driven user experiences.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
