import Image from "next/image";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import screen from "@/assets/screen-selection.png";
import TextBlock from "@/components/text-block";

export default function MultipleScreen() {
  return (
    <Parallax id="screen-container" pages={4}>
      <ParallaxLayer offset={0} speed={0.5} sticky={{ start: 0, end: 4 }}>
        <Image className="screenshot" src={screen} alt="screenshot of WashMe" />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={3} sticky={{ start: 1, end: 2 }}>
        <TextBlock
          class="text-left"
          title="Select your car"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, vel aliqua"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={3} sticky={{ start: 2, end: 4 }}>
        <TextBlock
          class="text-right"
          title="Select your car"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, vel aliqua"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={3} sticky={{start: 3, end: 4}}>
        <TextBlock
          class="text-left"
          title="Select your car"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, vel aliqua"
        />
      </ParallaxLayer>
    </Parallax>
  );
}
