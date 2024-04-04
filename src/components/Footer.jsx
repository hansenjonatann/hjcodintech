const Footer = () => {
  return (
    <>
      <footer className=" text-primary py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
              <p className="text-sm">
                HJ Codin Tech adalah sebuah startup yang bergerak dibidang
                teknologi yang menyediakan layanan berupa jasa digital , kelas
                online , dan forum yang dapat membantu anda dalam belajar
                programming dan teknologi..
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="text-sm">
                <li>Kelas Online</li>
                <li>Jasa Digital</li>
                <li>Forum</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
              <ul className="text-sm">
                <li>Email: hjcodintech@gmail.com</li>
                {/* <li>Tele</li> */}
                {/* <li>Alamat: Jalan Contoh No. 123</li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
              <ul className="text-sm">
                <li>
                  <a
                    href="https://instagram.com/hjcodin.tech"
                    target="_blank"
                    className="text-decoration-none text-primary font-semibold"
                  >
                    Instagram{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com/@hjcodin.tech"
                    className="text-decoration-none text-primary font-semibold"
                    target="_blank"
                  >
                    Tiktok
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61558310780350&mibextid=uzlsIk"
                    target="_blank"
                    className="text-decoration-none text-primary font-semibold"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-4 text-center">
            <p className="text-sm">
              &copy; 2024 HJ Codin Tech. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
