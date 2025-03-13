

function store() {
  return (
    <section className="bg-white py-8 antialiased  md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-yellow-800 sm:text-2xl">
          سبد خرید
        </h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-xl  md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <a href="#" className="shrink-0 md:order-1">
                    <img
                      className="h-20 w-20 dark:hidden"
                      src="/img/سرویس-29-پارچه-لوازم-آشپزخانه-کن-ست.jpg"
                      alt="imac image"
                    />
                    <img
                      className="hidden h-20 w-20 dark:block"
                      src="img/2.webp"
                      alt="imac image"
                    />
                  </a>
                  <label htmlFor="counter-input" className="sr-only">
                    تعداد را انتخاب کنید:
                  </label>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="counter-input"
                        data-input-counter=""
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-red-400"
                        placeholder=""
                        defaultValue={2}
                      />
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-emerald-950">
                        $1,499
                      </p>
                    </div>
                  </div>
                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a
                      href="#"
                      className="text-base font-medium text-emerald-950 hover:underline"
                    >
                      سیستم کامپیوتری All in One APPLE iMac (2023) mqrq3ro/a, Apple M3,
                      24 Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, صفحه‌کلید INT
                    </a>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                          />
                        </svg>
                        افزودن به علاقه‌مندی‌ها
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline p-1 dark:text-red-500"
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* سایر آیتم‌های سبد خرید */}
              {/* ... */}
            </div>
            <div className="hidden xl:mt-8 xl:block">
              <h3 className="text-2xl font-semibold text-yellow-800">
                محصولات پیشنهادی
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                <div className="bg-white border border-blue-200 rounded-lg shadow-md p-4">
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
                        src="/img/ef6bbc.jpeg"
                        alt="Product Image"
                        className="object-contain w-full h-[270px]"
                      />
                    </div>
                  </div>
                  {/* Product Details */}
                  <div className="mt-4">
                    <h3 className="text-gray-800 font-medium text-base">
                      عمر محصول وکارایی بالایی دارد
                    </h3>
                    <p className="uppercase text-green-600 text-xs font-medium">Oraimo</p>
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
                        <span className="text-blue-600 text-xl font-semibold">
                          $806.33
                        </span>
                        <span className="text-gray-400 text-sm line-through">
                          $1500.00
                        </span>
                      </div>
                      {/* Add to Cart Button */}
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
                {/* سایر محصولات پیشنهادی */}
                {/* ... */}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-xl dark:border-[#b99466] dark:bg-[#f5d6b0] sm:p-6">
              <p className="text-xl font-semibold text-yellow-800">
                خلاصه سفارش
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-600">
                      قیمت اصلی
                    </dt>
                    <dd className="text-base font-medium text-emerald-950">
                      $7,592.00
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-600">
                      تخفیف
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -$299.00
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-700 dark:text-gray-600">
                      تحویل در فروشگاه
                    </dt>
                    <dd className="text-base font-medium text-emerald-950">
                      $99
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-800 dark:text-gray-600">
                      مالیات
                    </dt>
                    <dd className="text-base font-medium text-emerald-950">
                      $799
                    </dd>
                  </dl>
                </div>
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-emerald-950">
                    مجموع
                  </dt>
                  <dd className="text-base font-bold text-emerald-950">
                    $8,191.00
                  </dd>
                </dl>
              </div>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium bg-yellow-800 text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                پرداخت
              </a>

            </div>
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-xl dark:border-[#b99466] dark:bg-[#f5d6b0] sm:p-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-emerald-950"
                  >
                    {" "}
                    آیا کد تخفیف یا کارت هدیه دارید؟{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 shadow-xl dark:border-[#b99466] dark:bg-[#f5d6b0] dark:text-white dark:placeholder:text-gray-400  dark:focus:ring-yellow-950"
                    placeholder=""
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg  px-5 py-2.5 text-sm font-medium shadow-xl dark:border-[#503f2c] dark:bg-yellow-800 text-white hover:bg-primary-800 focus:outline-none focus:ring-4  dark:bg-primary-600 dark:focus:ring-yellow-950"
                >
                  اعمال کد
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default store;