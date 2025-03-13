export const runtime = 'edge';


export default function Home() {
  return (

    <main className="">
      <section>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto px-5 sm:max-w-screen-2xl lg:max-w-3/4 md:px-8 lg:mr-10 md:mr-10 ">
            <div className="grid grid-cols-4 gap-4 sm:gap-6 xl:gap-8">

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

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto px-6 sm:px-12 lg:px-96">
          <div className="flex flex-col items-center relative">
            <h2 className="text-xl text-emerald-950 font-bold mb-6">دسته بندی محصولات فروشگاه</h2>
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                            className="w-full h-full object-cover"
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
            <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mt-4">دریافت</button>
          </div>

          {/* کارت‌های قابل اسکرول */}
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide w-full">
            {/* لیست محصولات */}
            {[
              { src: "/img/ef6bbc.jpeg", alt: "هدیه برای او", text: "هدیه برای او", price: 806.33, discount: 1500.00 },
              { src: "/img/fantasy-kitchen-appliances-model-13.jpg", alt: "هدیه برای نوزاد", text: "هدیه برای نوزاد", price: 500.00, discount: 1000.00 },
              { src: "/img/IMG_5773_1.jpeg", alt: "هدیه باغچه", text: "هدیه باغچه", price: 300.00, discount: 600.00 },
              { src: "/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg", alt: "هدیه عید پاک", text: "هدیه عید پاک", price: 400.00, discount: 800.00 },
              { src: "/img/سرویس-آشپزخانه7-300x300.jpg", alt: "هدیه برج حوت", text: "هدیه برج حوت", price: 700.00, discount: 1400.00 },
              { src: "/img/شیک-ترین-وسایل-آشپزخانه-8.jpg", alt: "هدیه‌های ارسال رایگان", text: "هدیه‌های ارسال رایگان", price: 900.00, discount: 1800.00 }
            ].map((item, index) => (
              <div key={index} className="w-72 sm:w-80 bg-white border border-blue-200 rounded-lg shadow-md p-4 flex-shrink-0">
                {/* Discount Badge */}
                <div className="relative">

                  {/* Wishlist Icon */}
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                      />
                    </svg>
                  </button>
                  {/* Product Image */}
                  <div>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-contain w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                    />
                  </div>
                </div>
                {/* Product Details */}
                <div className="mt-4">
                  <h3 className="text-gray-800 font-medium text-base sm:text-lg md:text-xl">
                    {item.text}
                  </h3>
                  <p className="uppercase text-green-600 text-xs sm:text-sm font-medium">برند محصول</p>
                  {/* Ratings */}
                  <div className="flex space-x-1 text-orange-500 text-sm mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                  </div>
                  {/* Pricing */}
                  <div className="flex items-end justify-between">
                    <div className="flex items-baseline space-x-2 mt-2">
                      <span className="text-blue-600 text-xl font-semibold">${item.price.toFixed(2)}</span>
                      <span className="text-gray-400 text-sm line-through">${item.discount.toFixed(2)}</span>
                    </div>
                    <button className="  rounded-full p-1 bg-[#fcbd70] hover:bg-[#ebb981]  flex items-center justify-center shadow text-white">
                      سبد خرید
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                      </svg>
                    </button>
                  </div>
                </div>
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
                  <p className="text-lg font-bold text-[#fcbd70] ">
                    {item.price} <span className="text-gray-400 line-through">{item.originalPrice}</span>
                  </p>
                  <button className="bg-[#fcbd70] text-[#fcbd70]  font-bold mt-2">افزودن به سبد</button>
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

                  <button className="text-[#f0a74f] font-bold mt-2 flex items-center hover:text-amber-800">
                    افزودن به سبد
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </button>
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
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-yellow-800">پیشنهادات ویژه</h2>
              <p className="text-gray-800 mt-2 text-sm">محصولات محدود و تخفیف‌های ویژه – فقط در اپلیکیشن.</p>
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mt-4">دریافت</button>
            </div>

            {/* کارت‌های قابل اسکرول */}
            <div className="flex overflow-x-auto space-x-4 scrollbar-hide w-full">
              {/* لیست محصولات */}
              {[
                { src: "/img/ef6bbc.jpeg", alt: "هدیه برای او", text: "هدیه برای او", price: 806.33, discount: 1500.00 },
                { src: "/img/fantasy-kitchen-appliances-model-13.jpg", alt: "هدیه برای نوزاد", text: "هدیه برای نوزاد", price: 500.00, discount: 1000.00 },
                { src: "/img/IMG_5773_1.jpeg", alt: "هدیه باغچه", text: "هدیه باغچه", price: 300.00, discount: 600.00 },
                { src: "/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg", alt: "هدیه عید پاک", text: "هدیه عید پاک", price: 400.00, discount: 800.00 },
                { src: "/img/سرویس-آشپزخانه7-300x300.jpg", alt: "هدیه برج حوت", text: "هدیه برج حوت", price: 700.00, discount: 1400.00 },
                { src: "/img/شیک-ترین-وسایل-آشپزخانه-8.jpg", alt: "هدیه‌های ارسال رایگان", text: "هدیه‌های ارسال رایگان", price: 900.00, discount: 1800.00 }
              ].map((item, index) => (
                <div key={index} className="w-72 sm:w-80 bg-white border border-blue-200 rounded-lg shadow-md p-4 flex-shrink-0">
                  {/* Discount Badge */}
                  <div className="relative">

                    {/* Wishlist Icon */}
                    <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                        />
                      </svg>
                    </button>
                    {/* Product Image */}
                    <div>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="object-contain w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                      />
                    </div>
                  </div>
                  {/* Product Details */}
                  <div className="mt-4">
                    <h3 className="text-gray-800 font-medium text-base sm:text-lg md:text-xl">
                      {item.text}
                    </h3>
                    <p className="uppercase text-green-600 text-xs sm:text-sm font-medium">برند محصول</p>
                    {/* Ratings */}
                    <div className="flex space-x-1 text-orange-500 text-sm mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                      </svg>
                    </div>
                    {/* Pricing */}
                    <div className="flex items-end justify-between">
                      <div className="flex items-baseline space-x-2 mt-2">
                        <span className="text-blue-600 text-xl font-semibold">${item.price.toFixed(2)}</span>
                        <span className="text-gray-400 text-sm line-through">${item.discount.toFixed(2)}</span>
                      </div>
                      <button className="  rounded-full p-1 bg-[#fcbd70] hover:bg-[#ebb981]  flex items-center justify-center shadow text-white">
                        سبد خرید
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M17 17h-11v-14h-2" />
                          <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* وبلاگ */}
        <section id="recent-posts" className="py-12 items-center justify-center ">

          <div className="container mx-auto text-center mb-14 " data-aos="fade-up">
            <h2 className="text-3xl font-bold text-emerald-950">پست‌های اخیر وبلاگ</h2>
            <button
              className="mt-2 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
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
          </div>

          <div className="container mx-auto px-4 items-center justify-center flex lg:ml-82">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              {/* Post 1 */}
              <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl mt-5">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#f7c180]">
                  <img
                    src="/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg"
                    className="w-full h-full bject-cover"
                    alt=""
                  />
                </div>
                <div className="post-content p-4">
                  <div className="meta text-sm text-gray-500 mb-2">
                    <span className="post-date">جمعه، 28شهریور403</span>
                    <span className="post-author"> / ادمین</span>
                  </div>
                  <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                    درمان‌های پیشرفته دندانپزشکی
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    تجربه‌ای بدون درد با تکنولوژی‌های روز دنیا. سلامت دهان و دندان خود را به ما بسپارید.
                  </p>
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
                </div>
              </div>

              {/* Post 2 */}
              <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl mt-5">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#f7c180]">
                  <img
                    src="/img/4.avif"
                    className="w-full h-48 "
                    alt=""
                  />
                </div>
                <div className="post-content p-4">
                  <div className="meta text-sm text-gray-500 mb-2">
                    <span className="post-date">جمعه، 24شهریور403</span>
                    <span className="post-author"> / ادمین</span>
                  </div>
                  <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                    طراحی لبخند ایده‌آل
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    با خدمات حرفه‌ای زیبایی دندان، لبخندی درخشان و طبیعی داشته باشید. متخصصان ما همراه شما هستند.
                  </p>
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
                </div>
              </div>

              {/* Post 3 */}
              <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl mt-5">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#f7c180]">
                  <img
                    src="/img/شیک-ترین-وسایل-آشپزخانه-8.jpg"
                    className="w-full h-48 "
                    alt=""
                  />
                </div>
                <div className="post-content p-4">
                  <div className="meta text-sm text-gray-500 mb-2">
                    <span className="post-date">جمعه، 12 آبان 403</span>
                    <span className="post-author"> / ادمین</span>
                  </div>
                  <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                    ارتودنسی برای همه سنین
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    با روش‌های نوین ارتودنسی، زیبایی و تراز دندان‌های خود را تضمین کنید. مشاوره رایگان!
                  </p>
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
                </div>
              </div>

              {/* Post 4 */}
              <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl mt-5">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[#f7c180]">
                  <img
                    src="/img/سرویس-آشپزخانه7-300x300.jpg"
                    className="w-full h-48"
                    alt=""
                  />
                </div>
                <div className="post-content p-4">
                  <div className="meta text-sm text-gray-500 mb-2">
                    <span className="post-date">جمعه، 24شهریور403</span>
                    <span className="post-author"> / ادمین</span>
                  </div>
                  <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                    خدمات اورژانسی دندانپزشکی
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    در مواقع اضطراری، کنار شما هستیم. ارائه خدمات فوری برای دردهای دندان و لثه.
                  </p>
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
                </div>
              </div>
            </div>
          </div>
        </section>



      </>



    </main>

  );
}
