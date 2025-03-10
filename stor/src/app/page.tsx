

export default function Home() {
  return (

    <main className="">
      <section>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto px-5 sm:max-w-screen-2xl lg:max-w-3/4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 gap-4 sm:gap-6 xl:gap-8">
              {/* image - start */}
              <a
                href="#"
                className="group relative flex h-32 sm:h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="/img/6.avif"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  VR
                </span>
              </a>
              {/* image - end */}
              {/* image - start */}
              <a
                href="#"
                className="group relative flex h-32 sm:h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="/img/3.webp"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Tech
                </span>
              </a>
              {/* image - end */}
              {/* image - start */}
              <a
                href="#"
                className="group relative flex h-32 sm:h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="/img/2.webp"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Dev
                </span>
              </a>
              {/* image - end */}
              {/* image - start */}
              <a
                href="#"
                className="group relative flex h-32 sm:h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="img/1.webp"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Retro
                </span>
              </a>
              {/* image - end */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" mx-auto px-6 sm:px-12 lg:px-96">
          <div className="flex flex-col items-center relative">
            <h2 className="text-3xl text-emerald-950 font-bold mb-6">دسته بندی محصولات فروشگاه</h2>
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { src: "/img/1.webp", alt: "هدیه برای او", text: "هدیه برای او" },
                  { src: "/img/2.webp", alt: "هدیه برای نوزاد", text: "هدیه برای نوزاد" },
                  { src: "/img/3.webp", alt: "هدیه باغچه", text: "هدیه باغچه" },
                  { src: "/img/4.avif", alt: "هدیه عید پاک", text: "هدیه عید پاک" },
                  { src: "/img/5.avif", alt: "هدیه برج حوت", text: "هدیه برج حوت" },
                  { src: "/img/6.avif", alt: "هدیه‌های ارسال رایگان", text: "هدیه‌های ارسال رایگان" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:bg-[#f5d6b0] hover:shadow-xl hover:scale-105 transition-transform duration-300 p-4 w-full">
                      <a href="#" className="no-underline">
                        <div className="relative w-full h-48 sm:h-56">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover "
                          />
                        </div>
                        <p className="text-center text-black mt-4 text-lg font-semibold">{item.text}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="coler-effect py-6 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-52 mt-12">
        <div className="mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 px-4 sm:px-6 overflow-hidden">
          {/* Sidebar */}
          <div className="coler-effect text-white p-6 rounded-xl flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
            <p className="text-yellow-500 font-bold text-sm">ویژه برنامه</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-yellow-800">پیشنهادات ویژه</h2>
            <p className="text-gray-800 mt-2 text-sm">محصولات محدود و تخفیف‌های ویژه – فقط در اپلیکیشن.</p>
            <button
              className="text-amber-800  bg-gradient-to-r from-[#fac78a] to-[#e9c293] mt-2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-amber-600 shadow-lg shadow-yellow-50 dark:shadow-lg dark:shadow-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="button"
            >
              دریافت
            </button>
          </div>

          {/* کارت‌های قابل اسکرول */}
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide w-full">
            {[
              { date: "03/12", img: "/img/ef6bbc.jpeg", title: "مخلوط‌کن پیشرفته Ninja - Detect Power" },
              { date: "03/13", img: "/img/fantasy-kitchen-appliances-model-13.jpg", title: "اجاق Solo Stove - مدل Mesa XL - رنگ برنز" },
              { date: "03/14", img: "/img/IMG_5773_1.jpeg", title: "نرم‌کننده بستنی Ninja - Swirl™ by CREAMi®" },
              { date: "03/18", img: "/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg", title: "حافظه SSD سامسونگ 9100 PRO 2TB، PCIe 5.0x4" },
              { date: "03/19", img: "/img/سرویس-آشپزخانه7-300x300.jpg", title: "کارت هدیه 100 دلاری Disney [دیجیتالی]" },
              { date: "03/20", img: "/img/شیک-ترین-وسایل-آشپزخانه-8.jpg", title: "لیزر کاهش موی Nood - The Flasher 2.0" },
              { date: "03/21", img: "/img/لیست-جهیزیه-عروس-1.jpg", title: "مسواک برقی Philips Sonicare - DiamondClean" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 w-48 min-w-48 flex-shrink-0">
                <p className="text-gray-500 text-sm font-bold">◯ پیشنهادات <span className="text-black">{item.date}</span></p>
                <img src={item.img} alt={item.title} className="w-full h-32 object-cover mt-2 rounded-lg" />
                <p className="text-sm mt-2 text-gray-800">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <>




        <section className="flex flex-col items-center mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          {/* عنوان */}
          <h2 className="text-xl sm:text-2xl text-emerald-950 font-bold text-center">تخفیف‌های ترند</h2>
          <p className="text-emerald-950 font-bold text-sm text-center mt-2">
            ببینید چه تخفیف‌هایی سریع فروخته می‌شوند
          </p>

          {/* دکمه‌های دسته‌بندی */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <button
              className="text-white bg-[#f7c180] hover:bg-[#f5d6b0] focus:ring-4 focus:outline-none focus:ring-[#f5d6b0] shadow-lg shadow-[#f5d6b0]/50 font-medium rounded-lg text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5 text-center"
              type="button"
            >
              تلویزیون و تئاتر خانگی
            </button>
            <button
              className="text-white bg-[#f7c180] hover:bg-[#f5d6b0] focus:ring-4 focus:outline-none focus:ring-[#f5d6b0] shadow-lg shadow-[#f5d6b0]/50 font-medium rounded-lg text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5 text-center"
              type="button"
            >
              کامپیوتر و تبلت
            </button>
            <button
              className="text-white bg-[#f7c180] hover:bg-[#f5d6b0] focus:ring-4 focus:outline-none focus:ring-[#f5d6b0] shadow-lg shadow-[#f5d6b0]/50 font-medium rounded-lg text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5 text-center"
              type="button"
            >
              بازی‌های ویدیویی
            </button>
            <button
              className="text-white bg-[#f7c180] hover:bg-[#f5d6b0] focus:ring-4 focus:outline-none focus:ring-[#f5d6b0] shadow-lg shadow-[#f5d6b0]/50 font-medium rounded-lg text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5 text-center"
              type="button"
            >
              لوازم خانگی
            </button>
            <button
              className="text-white bg-[#f7c180] hover:bg-[#f5d6b0] focus:ring-4 focus:outline-none focus:ring-[#f5d6b0] shadow-lg shadow-[#f5d6b0]/50 font-medium rounded-lg text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5 text-center"
              type="button"
            >
              موبایل
            </button>
            <button
              className="text-white bg-[#f7c180] hover:bg-[#f5d6b0] focus:ring-4 focus:outline-none focus:ring-[#f5d6b0] shadow-lg shadow-[#f5d6b0]/50 font-medium rounded-lg text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5 text-center"
              type="button"
            >
              صوتی
            </button>
          </div>

          {/* لیست محصولات */}
          <div className="w-full mt-6">
            {/* برای موبایل: اسکرول افقی */}
            <div className="flex overflow-x-auto space-x-4 sm:space-x-6 scrollbar-hide sm:hidden px-4 sm:px-0">
              {[
                { discount: "۴۰$ تخفیف", img: "/img/ef6bbc.jpeg", title: "تلویزیون ۳۲ اینچ Insignia", price: "$۸۹.۹۹", originalPrice: "$۱۲۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/fantasy-kitchen-appliances-model-13.jpg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/IMG_5773_1.jpeg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۴۰$ تخفیف", img: "/img/سرویس-آشپزخانه7-300x300.jpg", title: "تلویزیون ۴۳ اینچ Insignia", price: "$۱۵۹.۹۹", originalPrice: "$۱۹۹.۹۹" },
                { discount: "۲۰$ تخفیف", img: "/img/شیک-ترین-وسایل-آشپزخانه-8.jpg", title: "Amazon - Fire TV Stick", price: "$۳۹.۹۹", originalPrice: "$۵۹.۹۹" },
                { discount: "۵۵$ تخفیف", img: "/img/لیست-جهیزیه-عروس-1.jpg", title: "تلویزیون ۳۲ اینچ Pioneer", price: "$۷۴.۹۹", originalPrice: "$۱۲۹.۹۹" },
                { discount: "۴۰$ تخفیف", img: "/img/ef6bbc.jpeg", title: "تلویزیون ۳۲ اینچ Insignia", price: "$۸۹.۹۹", originalPrice: "$۱۲۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/fantasy-kitchen-appliances-model-13.jpg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/IMG_5773_1.jpeg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۴۰$ تخفیف", img: "/img/سرویس-آشپزخانه7-300x300.jpg", title: "تلویزیون ۴۳ اینچ Insignia", price: "$۱۵۹.۹۹", originalPrice: "$۱۹۹.۹۹" },
                { discount: "۲۰$ تخفیف", img: "/img/شیک-ترین-وسایل-آشپزخانه-8.jpg", title: "Amazon - Fire TV Stick", price: "$۳۹.۹۹", originalPrice: "$۵۹.۹۹" },
                { discount: "۵۵$ تخفیف", img: "/img/لیست-جهیزیه-عروس-1.jpg", title: "تلویزیون ۳۲ اینچ Pioneer", price: "$۷۴.۹۹", originalPrice: "$۱۲۹.۹۹" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-56 sm:w-64 min-w-56 sm:min-w-64 flex-shrink-0">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.discount}
                  </span>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-32 sm:h-40 object-cover my-4 rounded-lg"
                  />
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-lg font-bold text-blue-600">
                    {item.price} <span className="text-gray-400 line-through">{item.originalPrice}</span>
                  </p>
                  <button className="text-blue-500 font-bold mt-2">افزودن به سبد</button>
                </div>
              ))}
            </div>

            {/* برای دسکتاپ: نمایش در چند ردیف */}
            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:px-80">
              {[
                { discount: "۴۰$ تخفیف", img: "/img/ef6bbc.jpeg", title: "تلویزیون ۳۲ اینچ Insignia", price: "$۸۹.۹۹", originalPrice: "$۱۲۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/fantasy-kitchen-appliances-model-13.jpg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/IMG_5773_1.jpeg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۴۰$ تخفیف", img: "/img/سرویس-آشپزخانه7-300x300.jpg", title: "تلویزیون ۴۳ اینچ Insignia", price: "$۱۵۹.۹۹", originalPrice: "$۱۹۹.۹۹" },
                { discount: "۲۰$ تخفیف", img: "/img/شیک-ترین-وسایل-آشپزخانه-8.jpg", title: "Amazon - Fire TV Stick", price: "$۳۹.۹۹", originalPrice: "$۵۹.۹۹" },
                { discount: "۵۵$ تخفیف", img: "/img/لیست-جهیزیه-عروس-1.jpg", title: "تلویزیون ۳۲ اینچ Pioneer", price: "$۷۴.۹۹", originalPrice: "$۱۲۹.۹۹" },
                { discount: "۴۰$ تخفیف", img: "/img/ef6bbc.jpeg", title: "تلویزیون ۳۲ اینچ Insignia", price: "$۸۹.۹۹", originalPrice: "$۱۲۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/fantasy-kitchen-appliances-model-13.jpg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/IMG_5773_1.jpeg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۱۲۰$ تخفیف", img: "/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg", title: "تلویزیون ۵۵ اینچ Insignia", price: "$۲۲۹.۹۹", originalPrice: "$۳۴۹.۹۹" },
                { discount: "۴۰$ تخفیف", img: "/img/سرویس-آشپزخانه7-300x300.jpg", title: "تلویزیون ۴۳ اینچ Insignia", price: "$۱۵۹.۹۹", originalPrice: "$۱۹۹.۹۹" }

              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.discount}
                  </span>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-32 sm:h-40 object-cover my-4 rounded-lg"
                  />
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-lg font-bold text-blue-600">
                    {item.price} <span className="text-gray-400 line-through">{item.originalPrice}</span>
                  </p>
                  <button className="text-blue-500 font-bold mt-2">افزودن به سبد</button>
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="coler-effect py-6 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-52 mt-12">
          <div className="mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 px-4 sm:px-6 overflow-hidden">
            {/* Sidebar */}
            <div className="coler-effect text-white p-6 rounded-xl flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
              <p className="text-yellow-500 font-bold text-sm">ویژه برنامه</p>
              <h2 className="text-2xl sm:text-2xl font-extrabold mt-2 text-yellow-800">بیشترین محصولات  فروش رفته</h2>
              <p className="text-gray-800 mt-2 text-sm">محصولات محدود و تخفیف‌های ویژه – فقط در اپلیکیشن.</p>
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mt-4">دریافت اپلیکیشن</button>
            </div>

            {/* کارت‌های قابل اسکرول */}
            <div className="flex overflow-x-auto space-x-4 scrollbar-hide w-full">
              {[
                { date: "03/12", img: "/img/ef6bbc.jpeg", title: "مخلوط‌کن پیشرفته Ninja - Detect Power" },
                { date: "03/13", img: "/img/fantasy-kitchen-appliances-model-13.jpg", title: "اجاق Solo Stove - مدل Mesa XL - رنگ برنز" },
                { date: "03/14", img: "/img/IMG_5773_1.jpeg", title: "نرم‌کننده بستنی Ninja - Swirl™ by CREAMi®" },
                { date: "03/18", img: "/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg", title: "حافظه SSD سامسونگ 9100 PRO 2TB، PCIe 5.0x4" },
                { date: "03/19", img: "/img/سرویس-آشپزخانه7-300x300.jpg", title: "کارت هدیه 100 دلاری Disney [دیجیتالی]" },
                { date: "03/20", img: "/img/شیک-ترین-وسایل-آشپزخانه-8.jpg", title: "لیزر کاهش موی Nood - The Flasher 2.0" },
                { date: "03/21", img: "/img/لیست-جهیزیه-عروس-1.jpg", title: "مسواک برقی Philips Sonicare - DiamondClean" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 w-48 min-w-48 flex-shrink-0">
                  <p className="text-gray-500 text-sm font-bold">◯ پیشنهادات <span className="text-black">{item.date}</span></p>
                  <img src={item.img} alt={item.title} className="w-full h-32 object-cover mt-2 rounded-lg" />
                  <p className="text-sm mt-2 text-gray-800">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* وبلاگ */}
        <section id="recent-posts" className="py-12 ">

          <div className="container mx-auto text-center mb-14" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-emerald-950  ">پست‌های اخیر وبلاگ</h2>
            <>

              <button
                className=" mt-2 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
                type="button"
              >
                <div className="bg-[#f7c180] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="25px"
                    width="25px"
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#000000"
                    />
                    <path
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      fill="#000000"
                    />
                  </svg>
                </div>
                <p className="translate-x-2 mt-4 text-emerald-950 font-bold">دیدن مطالب بیشتر ما</p>
              </button>
            </>

          </div>
          {/* End Section Title */}
          <div className="container mx-auto px-4 items-center justify-center flex">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-24 sm:gap-14 md:gap-8 lg:gap-96">
              {/* Post 1 */}


              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#f7c180]">
                  <img
                    src="/img/عکس وبلاگ.jpg"
                    className="w-full h-48 object-cover"
                    alt=""
                  /></div>
                <div className="post-content p-4">
                  <div className="meta text-sm text-gray-500 mb-2">
                    <span className="post-date">جمعه، 28شهریور403</span>
                    <span className="post-author"> / ادمین</span>
                  </div>
                  <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                    درمان‌های پیشرفته دندانپزشکی
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    تجربه‌ای بدون درد با تکنولوژی‌های روز دنیا. سلامت دهان و دندان خود را به ما بسپارید.             </p>
                  <>
                    <div className="items-center justify-center flex">
                      <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#f7c180] rounded-md group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f7a94a] rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f7a94a] rounded group-hover:-ml-4 group-hover:-mb-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#f7a94a] rounded-md group-hover:translate-x-0" />
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                          مطالعه بیشتر
                        </span>
                      </button>
                    </div>
                  </>

                </div>
              </div>

              <div className="relative flex mt-4 w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#f7c180]">
                  <img
                    src="/img/عکس وبلاگ.jpg"
                    className="w-full h-48 object-cover"
                    alt=""
                  /></div>
                <div className="post-content p-4">
                  <div className="meta text-sm text-gray-500 mb-2">
                    <span className="post-date">جمعه، 24شهریور403</span>
                    <span className="post-author"> / ادمین</span>
                  </div>
                  <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                    طراحی لبخند ایده‌آل
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    با خدمات حرفه‌ای زیبایی دندان، لبخندی درخشان و طبیعی داشته باشید. متخصصان ما همراه شما هستند.                </p>
                  <>
                    <div className="items-center justify-center flex">
                      <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#f7c180] rounded-md group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f7a94a] rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f7a94a] rounded group-hover:-ml-4 group-hover:-mb-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#f7a94a] rounded-md group-hover:translate-x-0" />
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                          مطالعه بیشتر
                        </span>
                      </button>
                    </div>
                  </>

                </div>
              </div>
              <div className="relative flex w-80 mt-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#f7c180]">
                  <img
                    src="/img/عکس وبلاگ.jpg"
                    className="w-full h-48 object-cover"
                    alt=""
                  /></div>
                <div className="post-content p-4">
                  <div className="meta text-sm text-gray-500 mb-2">
                    <span className="post-date">جمعه، 12 آبان 403</span>
                    <span className="post-author"> / ادمین</span>
                  </div>
                  <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                    ارتودنسی برای همه سنین
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    با روش‌های نوین ارتودنسی، زیبایی و تراز دندان‌های خود را تضمین کنید. مشاوره رایگان!              </p>
                  <>
                    <div className="items-center justify-center flex">
                      <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#f7c180] rounded-md group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f7a94a] rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f7a94a] rounded group-hover:-ml-4 group-hover:-mb-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#f7a94a] rounded-md group-hover:translate-x-0" />
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                          مطالعه بیشتر
                        </span>
                      </button>
                    </div>
                  </>

                </div>
              </div>
              <div className="relative flex w-80 mt-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#f7c180]">
                  <img
                    src="/img/عکس وبلاگ.jpg"
                    className="w-full h-48 object-cover"
                    alt=""
                  /></div>
                <div className="post-content p-4">
                  <div className="meta text-sm text-gray-500 mb-2">
                    <span className="post-date">جمعه، 24شهریور403</span>
                    <span className="post-author"> / ادمین</span>
                  </div>
                  <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                    خدمات اورژانسی دندانپزشکی
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    در مواقع اضطراری، کنار شما هستیم. ارائه خدمات فوری برای دردهای دندان و لثه.           </p>
                  <>
                    <div className="items-center justify-center flex">
                      <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#f7c180] rounded-md group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f7a94a] rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#f7a94a] rounded group-hover:-ml-4 group-hover:-mb-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#f7a94a] rounded-md group-hover:translate-x-0" />
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                          مطالعه بیشتر
                        </span>
                      </button>
                    </div>
                  </>

                </div>
              </div>
            </div>
          </div>
        </section>



      </>



    </main>

  );
}
