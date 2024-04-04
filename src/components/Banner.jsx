import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="bg-primary h-22 py-16">
        <div className="container px-16">
          <div className="flex flex-col lg:flex-row justify-center text-center  mt-8 items-center   text-white">
            <div className="">
              <div className="container">
                <h1 className="text-white text-2xl  lg:text-2xl">
                  Kamu sulit mencari{" "}
                  <span className="font-bold">pengetahuan</span> dan mengasah{" "}
                  <span className="font-bold">kemampuanmu</span> di bidang
                  teknologi?
                </h1>

                <p className="mt-4  text-sm lg:text-xl">
                  Mari gunakan waktu dan tenagamu dengan{" "}
                  <span className="font-bold">
                    belajar dan berkembang bersama di HJ Codin Tech
                  </span>
                </p>

                <p className="mt-3 font-bold lg:text-md">
                  "Belajar Bersama , Berkembang Bersama HJ Codin Tech"
                </p>

                <div className="mt-8">
                  <a
                    href="#layanan"
                    className="bg-white rounded-md  shadow font-bold   text-primary px-4 py-2"
                  >
                    Pelajari Sekarang!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
