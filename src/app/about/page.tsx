

function abuot() {
  return (
    <>
      <main>
        {/* محتوای شما */}

        <section className="color">
          <div className="w-full m-auto flex items-center justify-center py-20 bg-gray-50">
            <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
              <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center">
                {/* Image Section */}
                <div className="relative">
                  {[
                    { src: "/img/1.webp", alt: "Side Image", className: "lg:left-[2rem] -top-4 left-[1rem]" },
                    { src: "/img/2.webp", alt: "Side Image 2", className: "lg:top-[12rem] sm:top-[11rem] top-[8rem] sm:-left-[3rem] -left-[3rem]" },
                    { src: "/img/5.avif", alt: "Side Image 3", className: "lg:top-[28rem] sm:top-[20.5rem] top-[14rem] left-[5rem]" }
                  ].map((img, index) => (
                    <img
                      key={index}
                      className={`absolute z-20 lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[5rem] h-[5rem] rounded-full ${img.className}`}
                      src={img.src}
                      alt={img.alt}
                    />
                  ))}
                  <img
                    className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[15rem] h-[15rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500"
                    src="/img/3.webp"
                    alt="About us"
                  />
                </div>

                {/* Text Section */}
                <div className="lg:w-[60%] w-full h-full p-4 sm:mt-28 mt-20 lg:mt-4 shadow-xl shadow-[#aaa784] flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl coler-effect">
                  <h2 className="text-4xl text-center text-emerald-950 dark:text-emerald-800 font-bold px-4 py-1 md:mt-0 mt-10">
                    درباره فروشگاه
                  </h2>
                  <p className="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-600 font-bold my-5">
                    فروش انواع وسایل آشپزخانه
                  </p>
                  <div className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-600 space-y-4">
                    <p>
                      روشن کیتچن با بهترین برند های خاص جهان (برند اصلی) آماده خدمت‌رسانی لوازم خانگی به مشتریان با بهترین کیفیت و ضمانت سلامت فیزیکی کالا.
                    </p>
                    <p>
                      ۷۲ ساعت مرجوع کالا در صورت خرابی و شکستگی.
                    </p>
                    <p>
                      جنس به شرط اورجینال و با فاکتور برای مشتری ارسال می‌گردد.
                    </p>
                    <p>
                      اگر سوالی دارید با شماره زیر تماس بگیرید:
                    </p>
                    <ul className="list-disc list-inside">
                      <li>همراه: ۰۹۱۷۵۹۸۲۰۷۴</li>
                      <li>واتس‌اپ: ۰۹۱۷۴۳۱۸۸۹۵</li>
                      <li>اینستاگرام: roshankitchen1</li>
                    </ul>
                    <p>
                      فیلم کوتاه و عکس بعضی از اجناس را می‌توانید داخل اینستاگرام مشاهده کنید. برای خرید از طریق وب‌سایت اقدام نمایید.
                    </p>
                    <p>
                      در اسرع وقت تا ساعت ۲۲ پاسخگوی شما مشتریان و هموطنان عزیز هستیم.
                    </p>
                    <p>
                      با تشکر
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-emerald-800 body-font ">

          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap text-center justify-center">
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-emerald-800">
                    اخرین و به روز ترین وسایل
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    قیمت مناسب
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    بهره وری زمان
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    ارسال در سریع ترین زمان
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>

  );
}

export default abuot;