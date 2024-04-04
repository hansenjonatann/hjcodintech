import { motion } from "framer-motion";

const CustomCard = (props) => {
  const { header, description, url } = props;
  const isDisabled = false;
  return (
    <>
      <motion.div
        className="bg-primary text-white shadow-md rounded transition duration-300 hover:pointer ease-in-out py-8"
        whileHover={{ scale: 1.1 }}
      >
        <div className="container">
          <h1 className="text-center font-bold pt-4">{header}</h1>
          <p className="mt-2 px-4">{description}</p>
          <div className="flex justify-center mt-6">
            <motion.a
              href={url || "#"}
              className={`bg-white text-primary font-bold px-4 py-2 rounded-md  mt-4 transition duration-300 hover:bg-opacity-50 ${
                isDisabled ? "pointer-events-none" : ""
              }`}
              whileHover={{ scale: isDisabled ? 1 : 1.05 }}
            >
              {isDisabled ? "Disabled" : "Coming Soon"}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CustomCard;
