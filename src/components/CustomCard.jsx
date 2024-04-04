import { motion } from "framer-motion";

const CustomCard = (props) => {
  const { header, description, url } = props;
  return (
    <>
      <motion.div
        className="bg-primary text-white shadow-md rounded transition duration-300 hover:pointer ease-in-out"
        whileHover={{ scale: 1.1 }}
      >
        <div className="container">
          <h1 className="text-center font-bold pt-4">{header}</h1>
          <p className="mt-2 px-4">{description}</p>
          <div className="mt-6"></div>
        </div>
      </motion.div>
    </>
  );
};

export default CustomCard;
