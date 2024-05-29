import { motion } from "framer-motion";
import Header from "./Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-full bg-black flex sm:flex-row flex-col items-center justify-between py-10 sm:py-[300px] text-white sm:px-24 px-5 pb-24 gap-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="sm:text-6xl text-4xl anton text-pretty"
        >
          WE’RE A HIGH QUALITY GYM DEDICATED TO AFFORDABLE HEALTH AND WELLNESS.{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-pretty text-lg"
        >
          Body Buddy is a gym where you come as you are, and do your best.
          Our membership offers both digital and in-club programming aimed at
          helping you achieve your fitness goals. Discover all of our club’s
          offerings below.{" "}
        </motion.h1>
      </div>
      <div className="w-full sm:h-screen relative bg-black p-5">
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/6dd4f4e5-5131-49b1-9223-5a305b4deb4b/2888486jpgOriginalDelivery.jpg"
          alt=""
          className="sm:w-[500px] w-[200px] sm:absolute sm:top-[20%] sm:left-[25%]"
        />
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/2fba5f51-a18e-4ee7-93b6-0b53db29dfc2/1716607jpgOriginalDelivery.jpg"
          alt=""
          className="sm:w-[500px] w-[160px] absolute sm:top-[10%] sm:left-[50%] top-0 right-5"
        />
      </div>
      <div className="w-full bg-black flex flex-col items-center justify-evenly text-white py-24 px-10 gap-10">
        <h1 className="sm:text-5xl text-3xl anton ">AMENITIES</h1>
        <h1 className="sm:text-xl text-lg font-medium text-pretty text-center">
          At Body Buddy gym, we’re always expanding our amenities to meet{" "}
          <br /> the needs of our community. Something you’d like to <br /> see
          added to our list? Submit a request.
        </h1>
        <div className="w-full flex items-center sm:justify-center justify-between sm:gap-40 gap-5 sm:py-20 text-sm">
          <div className="sm:w-auto w-full flex flex-col items-center justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 250 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Modern Facilities
            </motion.h1>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="list-disc"
            ></motion.li>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Premium Classes
            </motion.h1>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="list-disc"
            ></motion.li>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 0.8,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Personal Trainers
            </motion.h1>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 1,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="list-disc"
            ></motion.li>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 1.2,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Rockwall
            </motion.h1>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 1.4,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="list-disc"
            ></motion.li>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 1.8,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Boxing Ring
            </motion.h1>
          </div>
          <div className="sm:w-auto w-full flex flex-col items-center justify-center text-center text-pretty">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 250 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Juice Bar
            </motion.h1>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="list-disc"
            ></motion.li>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Personal Nutritiousness
            </motion.h1>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="list-disc"
            ></motion.li>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 0.8,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Monthly Guest Passes
            </motion.h1>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 1,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="list-disc"
            ></motion.li>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 1.2,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Basketball Courts
            </motion.h1>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 1.4,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="list-disc"
            ></motion.li>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                delay: 1.8,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Lockers
            </motion.h1>
          </div>
        </div>

        {/* address section */}
      </div>
      <div className="w-full bg-gradient-to-r from-[#d5be5c] via-[#c8ad92] to-[#9eae9b] flex flex-col items-center justify-center gap-10 py-20 text-white px-5">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="anton text-4xl sm:text-6xl"
        >
          &quot;
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="anton sm:text-6xl text-3xl text-center text-pretty"
        >
          BODY BUDDY WAS CENTRAL IN HELPING ME GAIN <br /> THE STAMINA FOR
          MY RECENT MARATHON.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="sm:pb-32"
        >
          -Alejandro Jimenez
        </motion.h1>
      </div>
      <div className="w-full bg-black flex items-center justify-evenly py-10 text-white px-5">
        <div className="flex flex-col items-center justify-center sm:gap-5 gap-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
            viewport={{ once: true, amount: 0.5 }}
            className="anton sm:text-5xl text-3xl"
          >
            BROOKLYN
          </motion.h1>
          <div className="flex flex-col items-center justify-center text-center text-pretty sm:text-base text-sm">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              12834 Fitness Ln.
            </motion.h1>{" "}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Brooklyn, NY
            </motion.h1>{" "}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              11385
            </motion.h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:gap-5 gap-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
            viewport={{ once: true, amount: 0.5 }}
            className="anton sm:text-5xl text-3xl"
          >
            LOS ANGELES
          </motion.h1>
          <div className="flex flex-col items-center justify-center text-center text-pretty sm:text-base text-sm">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              12834 Fitness Ln.
            </motion.h1>{" "}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Brooklyn, NY
            </motion.h1>{" "}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              11385
            </motion.h1>
          </div>
        </div>
      </div>

      {/* slider img sec */}
      <div className="w-full sm:flex grid grid-cols-2 sm:h-[310px] sm:overflow-hidden">
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839353-WUEAVI0MS9EW70OUA4HM/2888448.jpg?format=500w"
          alt=""
          className="sm:w-full sm:size-auto size-[190px] object-cover object-center"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839365-7IMNB6JSHH4DF7TQMUJ7/Stocksy_comp_2217207+%281%29.jpg?format=500w"
          alt=""
          className="sm:w-full sm:size-auto size-[190px] object-cover object-center"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839327-XPPCORY8DG6OEI218VI7/1716591+%281%29.jpg?format=500w"
          alt=""
          className="sm:w-full sm:size-auto size-[190px] object-cover object-center"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839317-ZJRJ5911ZF2SIJKJYR5Z/2888434.jpg?format=500w"
          alt=""
          className="sm:w-full sm:size-auto size-[190px] object-cover object-center"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839376-BX3V9E7L777J6A1CTWTR/Stocksy_comp_2217189+%281%29.jpg?format=500w"
          alt=""
          className="sm:w-full sm:size-auto size-[190px] object-cover object-center"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097839338-MC8PZG6HTSKUSBVSWKZI/2888491.jpg?format=500w"
          alt=""
          className="sm:w-full sm:size-auto size-[190px] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Home;
