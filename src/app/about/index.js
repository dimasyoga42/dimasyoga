const AboutPage = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-items-center items-center">
        <div className="">
          <div className="">
            <div className="ml-2">
              <h1 className="lg:text-5xl text-3xl font-extrabold font-Poppins">
                Dimas Yoga
              </h1>
              <span className="ml-1 lg:text-xl text-sm text-gray-400">
                Web Developer | Student
              </span>
            </div>
            <div className="">
              <p className="py-4 ml-2">
                halo perkenalkan saya dimas yoga kurniawan saya adalah seorang
                mahasiswa di salah satu universitas yang ada di Lampung, saya
                memiliki hobby menonton anime, ngoding, tidur dan membaca manga.
                btw selamat datang di website pribadi saya
              </p>
              <button className="btn btn-ghost border-none hover:text-sky-400 hover:bg-transparent">
                Lihat Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
