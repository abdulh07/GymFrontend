import { motion } from "framer-motion";

const coache = [
  {
    name: "NICOLE WINTER",
    category: ["PILATES", "YOGA"],
    img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845478-QY336CGB319C7V2J9P0R/Nicole%2BWinter.jpg?format=2500w",
    delay: 0,
  },
  {
    name: "AARON HUGHES",
    category: ["STRENGTH TRAINING", "BOXING"],
    img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845484-ULMHSV4RD7QF5UH5DY2T/Stocksy_comp_2908015-%281%29.jpg?format=2500w",
    delay: 0.2,
  },
  {
    name: "DERRICK SAWYERS",
    category: ["CARDIO", "CORE"],
    img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845489-7ET4Y8RHYKQMMS1ER3CS/Derrick%2BSawyers.%2BCardio%252C%2BCore.jpg?format=2500w",
    delay: 0.4,
  },
  {
    name: "ALIYAH WILLIAMS",
    category: ["CORE", "CARDIO"],
    img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845500-CUULFHP3RRMHTV8179R0/Aliyah%25252BWilliams.%25252BCore%2525252C%25252BCardio.jpg?format=2500w",
    delay: 0.6,
  },
  {
    name: "OMAR HARRIS",
    category: ["CARDIO", "YOGA"],
    img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845506-E2OZ4XVFK4UVUCD04DG5/Omar+Harris.+Cardio%2C+Yoga.?format=2500w",
    delay: 0.8,
  },
  {
    name: "TESHIA MILLER",
    category: ["BOXING", "STRENGTH TRAINING"],
    img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845511-TQ5BY6SQ7XDQGHC8302G/Teshia+Harris.+Boxing%2C+Strength.?format=2500w",
    delay: 1,
  },
];
const About = () => {
  return (
    <div className="w-full grid sm:grid-cols-3 gap-5 sm:p-24">
      {coache.map((data, i) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: `${data?.delay}`,
          }}
          viewport={{ once: true, amount: 0.5 }}
          key={i}
          className="w-full relative flex flex-col items-center justify-center text-white overflow-hidden"
        >
          <img
            src={data.img}
            alt=""
            className="w-full hover:scale-105 transition-all duration-700"
          />
          <h1 className="absolute anton text-5xl">{data.name}</h1>
          <h1 className="absolute pt-24 font-medium">
            {data?.category[0]} {data.category[1] ? "," : ""}{" "}
            {data?.category[1]}
          </h1>
        </motion.div>
      ))}
    </div>
  );
};

export default About;
