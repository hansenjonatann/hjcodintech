import CustomCard from "./CustomCard";
import layananList from "./layanan.json";

const Layanan = () => {
  return (
    <>
      <section id="layanan">
        <h2 className="font-bold text-xl mt-5 text-center text-primary">
          Layanan
        </h2>
        <p className="mt-2 text-center">
          <span className="font-bold">HJ Codin Tech</span> menyediakan beberapa
          layanan yang dapat membantu anda sebagai berikut:
        </p>
        <div className="container px-16 mt-5">
          <div
            className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3  lg:grid-cols-3 lg:gap-4"
            data-aos="fade-up"
          >
            {layananList.map((layanan) => (
              <CustomCard
                header={layanan.header}
                description={layanan.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Layanan;
