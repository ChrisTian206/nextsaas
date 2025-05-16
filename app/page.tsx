import { Button } from "@/components/ui/button";
import Mainbody from "@/components/homepage/mainbody";
import GradientBg from "@/components/common/GradientBg";
import Demos from "@/components/homepage/Demos";
import WalkTrou from "@/components/homepage/WalkTrou";
import Pricings from "@/components/homepage/Pricings";

export default function Home() {
  return (
    <div className="relative w-full">
      <GradientBg />
      <div className="relative w-full" >
        <Mainbody />
        <Demos />
        <WalkTrou />
        <Pricings />
      </div>
    </div>

  );
}
