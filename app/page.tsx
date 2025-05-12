import { Button } from "@/components/ui/button";
import Mainbody from "@/components/homepage/mainbody";
import GradientBg from "@/components/common/GradientBg";
export default function Home() {
  return (
    <div className="relative w-full">
      <GradientBg />
      <div className="relative w-full" >
        <Mainbody />
      </div>
    </div>

  );
}
