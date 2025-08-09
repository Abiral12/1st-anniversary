"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowDown,
  CalendarDays,
  MapPin,
  Gift,
  Camera,
  HeartIcon,
} from "lucide-react";
import LoveQuotes from "@/components/LoveQuotes";
import HeartWithInitials from "@/components/HeartWithInitials";
import TimeCounter from "@/components/TimeCounter";
import FloatingElements from "@/components/FloatingElements";
import Background from "@/components/Background";

export default function AnniversaryHomepage() {
  const memoriesRef = useRef<HTMLDivElement>(null);

  const scrollToMemories = () => {
    memoriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 text-rose-100 font-montserrat">
      {/* Floating Hearts Background */}
      <FloatingHearts count={20} />

      <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center">
        <Background />
        <FloatingElements />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-8 flex flex-col items-center justify-center">
          <div className="w-full backdrop-blur-sm bg-white/10 rounded-2xl shadow-xl p-8 border border-white/20">
            <header className="flex items-center justify-center mb-6">
              <HeartIcon className="w-6 h-6 mr-2 text-pink-400" />
              <h1 className="text-3xl md:text-4xl font-dancing font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-400">
                Our Love Journey
              </h1>
              <HeartIcon className="w-6 h-6 ml-2 text-pink-400" />
            </header>

            <TimeCounter />

            <div className="my-8">
              <HeartWithInitials initials="A&B" />
            </div>

            <div className="mb-8">
              <LoveQuotes />
            </div>
          </div>
        </div>
      </div>

      {/* Memories Section */}
      <section
        ref={memoriesRef}
        className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent"
        >
          Our Journey So Far
        </motion.h2>

        <div className="relative space-y-32 text-rose-900">
          <MemoryTimeline />
        </div>
      </section>

     
    </div>
  );
}

function FloatingHearts({ count = 10 }: { count?: number }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.2, 0.8],
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          className="fixed text-rose-300"
          style={{
            fontSize: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Heart className="h-8 w-8" fill="currentColor" />
        </motion.div>
      ))}
    </>
  );
}

function MemoryTimeline() {
  const memories = [
    {
      title: "Our First unofficial Date",
      date: "July 23, 2024",
      location: "Dalo Restaurant",
      description:
        "That magical Day when we talked for hours and I fucked up by coughing for 3 min straight But you still liked me. That day we share many laughs and stories, and I knew I wanted to know you more.our first unofficial date was a beautiful beginning to our journey.",
      image: "/images/date.png",
      icon: <Camera className="h-6 w-6" />,
    },
    {
      title: "First Gift I buy for you",
      date: "October 3, 2024",
      location: "Basantapur",
      description:
        "I remember the day I bought you that beautiful Jhumka. It was a small token of my love, but it meant so much to me to see you smile when you received it.You wored it with such grace and elegance, and it made me realize how lucky I am to have you in my life.You looked like a queen that day, and I knew I wanted to make you feel special every day.",
      image: "/images/first-gift.jpg",
      icon: <Gift className="h-6 w-6" />,
      //  <MapPin className="h-6 w-6" />
    },
    {
      title: "our first Hiking",
      date: "June 27, 2025",
      location: "shivapuri,Jharna",
      description:
        "We started that morning for the jharna, walking and laughing with friends. Somehow, we ended up at the top instead until your “scary jungle” warning turned us back. Coming down, the waterfall appeared, and we spent our happiest moments there… and along the way, we stole little kisses, hiding from our friends like two partners in crime. ❤️ On the way back, you had your royal nature break in the bushes, with me as your loyal guard while our friends were far below. That hike was more than just a walk it was laughter, love, stolen kisses, and a secret only we share. 😂💖",
      image: "/images/hiking.jpg",
      icon: <Gift className="h-6 w-6" />,
    },
    // {
    //   title: "Our First Anniversary",
    //   date: "August 10, 2024",
    //   location: "Beach Sunset",
    //   description:
    //     "Celebrating one year of love, growth, and beautiful memories together.",
    //   image: "/images/anniversary.jpg",
    //   icon: <Heart className="h-6 w-6" />,
    // },
  ];

  return (
    <>
      {memories.map((memory, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`flex flex-col gap-8 md:gap-12 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* <motion.div 
            className="w-90 h-90 overflow-hidden rounded-3xl shadow-xl shadow-rose-200/50 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          > */}
          <div className="relative w-70 h-full overflow-hidden rounded-3xl shadow-xl shadow-rose-200/50 flex-shrink-0">
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-full object-contain rounded-3xl bg-white"
            />
          </div>
          {/* </motion.div> */}

          <div className="w-full space-y-4 md:w-1/2">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-rose-100 p-2 text-rose-600">
                {memory.icon}
              </div>
              <h3 className="text-3xl font-semibold text-rose-200">
                {memory.title}
              </h3>
            </div>
            <div className="space-y-2 text-rose-300">
              <p className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                {memory.date}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {memory.location}
              </p>
            </div>
            <p className="text-lg text-rose-100">{memory.description}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
}
