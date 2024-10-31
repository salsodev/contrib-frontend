import TypographyH1 from "@/layouts/typography/TypographyH1";
import TypographyP from "@/layouts/typography/TypographyP";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="flex flex-col gap-5 items-center justify-center mt-20 ">
      <div className="flex flex-col gap-4">
        <TypographyH1>Join a community driven by a purpose.</TypographyH1>
        <TypographyP>
          You can go fast when you go alone But when you move in a group, you
          will have the support you need to last longer
        </TypographyP>
      </div>
      <div>
        <Link
          to="/register"
          className="px-5 py-3 rounded-md text-white bg-cyan-700"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
export default HeroSection;
