import Image from "next/image";
import Link from "next/link";

export interface FooterProps {}

const footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Golf Clubs", href: "#" },
    { name: "Apparel", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    {
      name: "Who we are",
      href: "https://www.pruneridgegolfclub.com/lessons/staff-bios",
    },
    { name: "Sustainability", href: "#" },
    {
      name: "Directions",
      href: "https://www.google.com/maps/place/Pruneridge+Golf+Club/@37.3316306,-121.9638139,15z/data=!4m5!3m4!1s0x0:0xa8cb895b7de05a20!8m2!3d37.3316627!4d-121.963729?sa=X&ved=2ahUKEwi8tfL2yZXzAhU1SjABHbA9DjMQ_BJ6BAhgEAU&shorturl=1",
    },
    {
      name: "Careers",
      href: "https://recruiting.paylocity.com/recruiting/jobs/All/8201d238-0726-484b-9ca4-f187f9d1c9a2/Pruneridge-Golf-Club",
    },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "https://www.pruneridgegolfclub.com/contact" },
    { name: "Twitter", href: "https://twitter.com/Pruneridgegolf" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pruneridge.golf.club/",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/Pruneridge.Golf.Club/",
    },
  ],
};

export const Footer = (props: FooterProps) => {
  return (
    <>
      <footer aria-labelledby="footer-heading" className="bg-white">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Catalog</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                {/* <div>
                  <h3 className="text-sm font-medium text-gray-900">Account</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Connect</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="mt-16 md:mt-16 xl:mt-0">
            <h3 className="text-sm font-medium text-gray-900">
              Sign up for our newsletter
            </h3>
            <p className="mt-6 text-sm text-gray-500">
              The latest deals and savings, sent to your inbox weekly.
            </p>
            <form className="mt-2 flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="text"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-indigo-500 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <div className="ml-4 flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div> */}
          </div>

          <div className="border-t border-gray-200 py-10">
            <p className="text-sm text-gray-500">
              Copyright &copy; 2023 Pruneridge Golf Club
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
