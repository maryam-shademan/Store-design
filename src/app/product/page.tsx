

function store() {
  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* بخش تصاویر محصول */}
        <div className="mt-10 lg:mt-0">
          <div className="flex space-x-4">
            <button className="flex-1 flex flex-col items-center p-2 border border-transparent rounded-md hover:border-gray-300 focus:outline-none">
              <span className="sr-only">نمای زاویه‌دار</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg"
                alt="نمای زاویه‌دار"
                className="w-full h-auto"
              />
            </button>
            <button className="flex-1 flex flex-col items-center p-2 border border-transparent rounded-md hover:border-gray-300 focus:outline-none">
              <span className="sr-only">نمای جلو</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg"
                alt="نمای جلو"
                className="w-full h-auto"
              />
            </button>
            <button className="flex-1 flex flex-col items-center p-2 border border-transparent rounded-md hover:border-gray-300 focus:outline-none">
              <span className="sr-only">نمای پشت</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg"
                alt="نمای پشت"
                className="w-full h-auto"
              />
            </button>
            <button className="flex-1 flex flex-col items-center p-2 border border-transparent rounded-md hover:border-gray-300 focus:outline-none">
              <span className="sr-only">نمای زاویه‌دار باز</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg"
                alt="نمای زاویه‌دار باز"
                className="w-full h-auto"
              />
            </button>
          </div>
          <div className="mt-6">
            <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg"
              alt="نمای زاویه‌دار باز کیف با دسته‌های کناری"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* بخش جزئیات محصول */}
        <div className="mt-10 lg:mt-0">
          <h1 className="text-3xl font-extrabold text-gray-900">کیف چرمی</h1>
          <div className="mt-6">
            <h2 className="sr-only">اطلاعات محصول</h2>
            <p className="text-3xl text-gray-900">۱,۲۰۰,۰۰۰ تومان</p>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">نظرات</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {/* آیکون‌های ستاره */}
                <svg
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="sr-only">۴ از ۵ ستاره</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">توضیحات</h3>
            <div className="text-base text-emerald-950">
              <p>
                کیف چرمی ما ترکیبی از زیبایی و دوام است. این کیف با استفاده از چرم طبیعی و باکیفیت ساخته شده و مناسب برای استفاده روزمره، محل کار یا سفر است. طراحی شیک و کاربردی آن همراه با جیب‌های متعدد، آن را به انتخابی ایده‌آل تبدیل کرده است.
              </p>
            </div>
          </div>
          <form className="mt-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900">رنگ</h3>
              <fieldset className="mt-2">
                <legend className="sr-only">رنگ را انتخاب کنید</legend>
                <div className="flex space-x-3">
                  <label className="flex items-center justify-center w-8 h-8 bg-gray-900 rounded-full cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      defaultValue="مشکی"
                      className="sr-only"
                    />
                    <span className="sr-only">مشکی</span>
                  </label>
                  <label className="flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer border border-gray-300">
                    <input
                      type="radio"
                      name="color"
                      defaultValue="سفید"
                      className="sr-only"
                    />
                    <span className="sr-only">سفید</span>
                  </label>
                  <label className="flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      defaultValue="خاکستری"
                      className="sr-only"
                    />
                    <span className="sr-only">خاکستری</span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="/buy"
                type="submit"
                className="flex-1 bg-[#f8c587] text-white py-2 px-4 rounded-md hover:bg-[#f8c585] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#dd9f52]"
              >
                افزودن به سبد خرید
              </a>
              <button
                type="button"
                className="flex-1 bg-gray-100 text-emerald-950 py-2 px-4 rounded-md hover:bg-[#f8c585] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#dd9f52]"
              >
                افزودن به علاقه‌مندی‌ها
              </button>
            </div>
          </form>
          <section className="mt-12">
            <h2 className="sr-only">جزئیات بیشتر</h2>
            <div className="space-y-6">
              {/* بخش ویژگی‌ها */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-sm font-medium text-gray-900">ویژگی‌ها</span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className="h-5 w-5 transform transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="mt-2">
                  <ul className="list-disc pl-5 text-sm text-emerald-950">
                    <li>ویژگی ۱: کیفیت بالای چرم</li>
                    <li>ویژگی ۲: طراحی شیک و مدرن</li>
                    <li>ویژگی ۳: جیب‌های متعدد</li>
                  </ul>
                </div>
              </details>
              {/* بخش مراقبت */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-sm font-medium text-gray-900">مراقبت</span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className="h-5 w-5 transform transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="mt-2">
                  <ul className="list-disc pl-5 text-sm text-emerald-950">
                    <li>از تماس با آب خودداری کنید.</li>
                    <li>با یک پارچه نرم تمیز کنید.</li>
                    <li>در جای خشک نگهداری کنید.</li>
                  </ul>
                </div>
              </details>
              {/* بخش ارسال */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-sm font-medium text-gray-900">ارسال</span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className="h-5 w-5 transform transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="mt-2">
                  <ul className="list-disc pl-5 text-sm text-emerald-950">
                    <li>ارسال رایگان برای خریدهای بالای ۵۰۰,۰۰۰ تومان</li>
                    <li>زمان تحویل: ۲ تا ۳ روز کاری</li>
                  </ul>
                </div>
              </details>
              {/* بخش بازگرداندن */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-sm font-medium text-gray-900">بازگرداندن</span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className="h-5 w-5 transform transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="mt-2">
                  <ul className="list-disc pl-5 text-sm text-emerald-950">
                    <li>درخواست بازگرداندن آسان</li>
                    <li>برچسب پستی پیش‌پرداخت شده شامل می‌شود</li>
                    <li>هزینه بازگرداندن ۱۰٪</li>
                    <li>بازه زمانی بازگرداندن ۶۰ روز</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

        </div>
      </div>
    </div>

  );
}

export default store;