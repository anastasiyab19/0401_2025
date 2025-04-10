"use client";
import { Button } from "@heroui/button";
import link from "next/link";
// this is for buttons
import Link from "next/link";
import { useState } from "react";

import { title } from "@/components/primitives";
export default function AboutMePage() {
  let facts: string[] = [
    "Sails have trapeze lines",
    "Honey never spoils",
    "the word photography comes from Greek, meaning drawing with light",
    "I manily photograph with a k1-ii",
    "A baby kangaroo is called a joey",
    "Octopuses have three hearts",
    "An ostrich's eye is bigger than its brain",
    "Photography was invented by Frenchman Nicéphore Niépce in 1822",
    "Sailing has been part of the Summer Olympics since 1896",
    "The world record sailing speed is 65.45 knots (121 km/h)",
    "Hot water will turn into ice faster than cold water",
    "There are over 200 distinct types of martial arts, each with its own techniques, philosophies, and cultural backgrounds. This diversity reflects the unique histories and values of different communities around the world.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <br />
      <Button
        className="bg-red-500 text-white"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * 11)]);
        }}
      >
        press 4 fact
      </Button>
      <p>{fact}</p>
      <div className="flex m-3 border-2 flex-wrap">
        <h3 className="text-2xl text-center">Me and family</h3> <br />
        <img
          alt="my brother and I"
          height="200px"
          src="/me and matt green day.jpeg"
          width="200px"
        />
        <img
          alt="my brother and I"
          height="400px"
          src="/me and family at grren day.jpeg"
          width="400px"
        />
      </div>
      <h3 className="text-2xl">My photography</h3>
      <Link href="#" />
      <div className="flex m-3 border-2 flex-wrap">
        <img alt="2 ducks and space needle" src="/2 duck space needle.jpeg" />{" "}
        <br />
        <p>MT.Rainer</p>
        <img
          alt="mountain at night with city lights"
          src="night mt with buildings.jpeg"
        />
        <p>Cape dissapointment</p>
        <img alt="cape dissapointment" src="cape dissapointment img.jpeg" />
        <img alt="25 speed sign" src="25 speed.jpeg" />
        <Button
          as={link}
          className="bg-green-400"
          href="https://pentax.eu/products/pentax-k1-mark-ii"
          target="_blank"
        >
          most used camera
        </Button>
      </div>

      <h3 className="text 2xl">Sailing</h3>
      <div className="flex m-3 border-2 flex-wrap">
        <img
          alt="sail at sun down"
          height="300px"
          src="sails at sun down.jpeg"
          width="300px"
        />
        <img
          alt="3 people next to sail boat"
          height="500px"
          src="me jonas aaron sail.jpeg"
          width="500px"
        />
        <img
          alt="Me sailing"
          height="300px"
          src="me sailing.jpeg"
          width="300px"
        />
      </div>
      <Button
        as={link}
        className="bg-rose-300"
        href="https://issaquah.instructure.com/courses/36871"
        target="_blank"
      >
        canvas
      </Button>
      {/* this should take us to canvas */}
    </div>
  );
}
