import Image from "next/image";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import screen from "@/assets/screen-selection.png";
import TextBlock from "@/components/text-block";

export default function MultipleScreen() {
  return (
    <Parallax id="screen-container" pages={5}>
      <ParallaxLayer offset={0} speed={1} sticky={{ start: 0, end: 4 }} style={{textAlign: 'center'}}>
        <Image className="screenshot" src={screen} alt="screenshot of WashMe" />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={5} sticky={{ start: 1, end: 2 }}>
        <TextBlock
          class="text-left"
          title="Devenez prestataire Washme : gagnez de l'argent en faisant une bonne action"
          description="Vous possédez une machine à laver et vous cherchez un moyen de générer un revenu supplémentaire tout en contribuant à l'écologie ? Washme est l'application qu'il vous faut ! Avec notre plateforme, vous pouvez mettre votre machine à laver à disposition des personnes qui ont du linge sale à laver. En échange de vos services, vous serez rémunéré(e) et pourrez ainsi arrondir vos fins de mois. De plus, vous pourrez rejoindre une communauté active de personnes qui partagent les mêmes valeurs que vous, en termes d'écologie et de partage."
        />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={5} sticky={{ start: 2, end: 4 }}>
        <TextBlock
          class="text-right"
          title="Washme : la solution économique et écologique pour laver votre linge"
          description="Vous avez du linge sale à laver et vous manquez de temps pour vous en occuper ? Vous cherchez une solution économique et écologique pour faire votre lessive ? Avec Washme, vous pouvez trouver des personnes disposant d'une machine à laver qui pourront prendre en charge votre lessive. En utilisant notre application, vous économiserez du temps et de l'argent tout en contribuant à la préservation de l'environnement. De plus, vous pourrez rejoindre une communauté dynamique de personnes qui partagent les mêmes valeurs que vous."
        />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={5} sticky={{start: 3, end: 4}}>
        <TextBlock
          class="text-left"
          title="Washme : l'application qui réunit une communauté autour de l'écologie et du partage"
          description="Washme est une application mobile qui met en relation des personnes ayant du linge sale à laver avec des prestataires disposant d'une machine à laver. Grâce à notre plateforme, vous pouvez économiser du temps et de l'argent tout en contribuant à la préservation de l'environnement. En effet, en partageant des machines à laver, nous réduisons notre empreinte écologique et nous participons à la création d'une communauté active de personnes partageant les mêmes valeurs. Notre application est facile à utiliser et vous permettra de trouver rapidement un prestataire ou un client près de chez vous. Rejoignez Washme dès maintenant et faites partie de cette communauté active !"
        />
      </ParallaxLayer>
    </Parallax>
  );
}
