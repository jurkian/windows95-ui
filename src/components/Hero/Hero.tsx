import { Win95Button } from "../Form/Button/Button";

export function Hero() {
  return (
    <div className="bg-[#c8c8c8] win-bevel-raised">
      <div className="mx-auto max-w-2xl px-6 py-14 sm:py-32 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 sm:text-5xl">
          Boost your productivity. Start using our app today.
        </h2>
        <div className="mt-10 flex items-center justify-center flex-col gap-y-4 sm:flex-row sm:gap-x-6">
          <Win95Button>Help</Win95Button>
          <a
            href="#"
            className="bg-win-blue px-3 py-1.5 text-sm font-semibold text-white shadow-xs"
          >
            Get started
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
