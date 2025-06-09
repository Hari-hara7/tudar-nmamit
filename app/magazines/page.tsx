"use client";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MagazinesPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 mt-14">Our Magazines</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-12">
          Explore the vibrant culture, traditions, and festivals of{" "}
          <span className="text-yellow-400 font-semibold">Tulu Nadu</span> — a rich coastal region
          in Karnataka, India. From Kambala races to Bhoota Kola, our magazine celebrates the soul of
          the southwest coast.
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          
          <Card className="bg-[#1a1a1a] border border-gray-700 shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/image.png" 
              alt="Volume One Cover"
              width={400}
              height={250}
              className="w-full h-[250px] object-cover rounded-t-xl"
            />
            <CardContent className="p-5">
              <CardTitle className="text-2xl text-white">
                Volume One: Festivals of Tulu Nadu
              </CardTitle>
              <CardDescription className="text-gray-400 mt-3 mb-5 text-sm">
                Volume One captures the electrifying atmosphere of cultural festivals like{" "}
                <span className="font-semibold">Kambala</span>, <span className="font-semibold">Yakshagana</span>,{" "}
                <span className="font-semibold">Bhoota Kola</span>, and the{" "}
                <span className="font-semibold">Nagaradhane rituals</span>—deeply rooted in the folklore
                of coastal Karnataka.
              </CardDescription>
              <Button
                asChild
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md"
              >
                <a href="/volume1.pdf" target="_blank" rel="noopener noreferrer">
                  Read / Download
                </a>
              </Button>
            </CardContent>
          </Card>

         
          <Card className="bg-[#1a1a1a] border border-gray-700 shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/placeholder2.png"
              alt="Volume Two Cover"
              width={400}
              height={250}
              className="w-full h-[250px] object-cover rounded-t-xl"
            />
            <CardContent className="p-5">
              <CardTitle className="text-2xl text-white">Volume Two: Coastal Cuisine</CardTitle>
              <CardDescription className="text-gray-400 mt-3 mb-5 text-sm">
                Volume Two explores the mouthwatering coastal delicacies of Tulu Nadu—{" "}
                <span className="font-semibold">Neer Dosa</span>, <span className="font-semibold">Fish Curry</span>,{" "}
                <span className="font-semibold">Kori Rotti</span> and more. A culinary journey you won’t want
                to miss!
              </CardDescription>
              <Button
                asChild
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md"
              >
                <a href="/volume2.pdf" target="_blank" rel="noopener noreferrer">
                  Read / Download
                </a>
              </Button>
            </CardContent>
          </Card>

         
          <Card className="bg-[#1a1a1a] border border-gray-700 shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/placeholder3.png" 
              alt="Volume Three Cover"
              width={400}
              height={250}
              className="w-full h-[250px] object-cover rounded-t-xl"
            />
            <CardContent className="p-5">
              <CardTitle className="text-2xl text-white">Volume Three: Heritage & Architecture</CardTitle>
              <CardDescription className="text-gray-400 mt-3 mb-5 text-sm">
                Volume Three delves into the ancient temples, heritage houses, and architectural marvels of
                Tulu Nadu—showcasing the intricacies of{" "}
                <span className="font-semibold">Kadri Manjunath Temple</span>,{" "}
                <span className="font-semibold">Kudroli Gokarnath Temple</span>, and the famed{" "}
                <span className="font-semibold">Tuluva style</span> wood carvings.
              </CardDescription>
              <Button
                asChild
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md"
              >
                <a href="/volume3.pdf" target="_blank" rel="noopener noreferrer">
                  Read / Download
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
