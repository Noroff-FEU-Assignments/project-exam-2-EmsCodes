import React from "react";
import Heading from "../global/heading/Heading";
import Card from "./Card";
import discover from "../../../public/images/styling/discoverBergen.jpg";
import fjordTour from "../../../public/images/styling/fjordTour.jpg";
import glacier from "../../../public/images/styling/glacier.jpg";
import hiking from "../../../public/images/styling/hiking.jpg";
import shopping from "../../../public/images/styling/shopping.jpg";
import spa from "../../../public/images/styling/spa.jpg";
import Link from "next/link";

function AboutBergen() {
  return (
    <>
      <Heading size="5" content="Bergen" />
      <blockquote>City of Seven Mountains</blockquote>
      <div>
        <Heading size="6" content="Discover Bergen" />
        <p>
          Bergen, historically Bjørgvin, is a city and municipality in Vestland
          county on the west coast of Norway. As of 2021, its population is
          roughly 285,900. Bergen is the second-largest city in Norway. The city
          is an international center for aquaculture, shipping, the offshore
          petroleum industry and subsea technology, and a national centre for
          higher education, media, tourism and finance.
        </p>
        <p>
          According to tradition, the city was founded in 1070 by King Olav
          Kyrre and was named Bjørgvin, ‘the green meadow among the mountains’.
          It served as Norway’s capital in the 13th century, and from the end of
          the 13th century became a bureau city of the Hanseatic League.
          (source: Wikipedia)
        </p>
        <p>
          Bergen offers world-class experiences and culture. Located in the
          heart of the fjords, Bergen has the ideal combination of nature,
          culture and interesting urban attractions. Pick and choose of a great
          range of things to do in Bergen – all year round. (visitbergen.com)
        </p>
      </div>
      <div>
        <Heading size="6" content="Popular attractions" />
        <div>
          <Card
            img={fjordTour}
            altText="'Trolltungen' with view out on the fjord below"
            name="Fjord tours"
          />
          <Card
            img={discover}
            altText="Above Bergen at night"
            name="Discover"
          />
          <Card
            img={hiking}
            altText="Two people hiking in the mountain"
            name="Hiking"
          />
          <Card
            img={glacier}
            altText="A man standing in front of a glacier"
            name="Glacier tours"
          />
          <Card
            img={spa}
            altText="White towls laying neatly wrapped up on a bed"
            name="Spa"
          />
          <Card
            img={shopping}
            altText="'Bryggen' in Bergen on a summer evening "
            name="Shopping"
          />
        </div>
        <p>
          More at{" "}
          <Link href="https://www.visitbergen.no/">
            <a>visitbergen.no</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default AboutBergen;
