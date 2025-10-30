import { Win95Button } from "./Button/Button";
import { Win95Input } from "./Input/Input";

export function Form() {
  return (
    <form className="max-w-4xl">
      <div className="space-y-12">
        <div className="pb-6">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Want to say hi?
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Fill in a quick form and we'll reply as soon as possible
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Win95Input
                labelText="First name"
                placeholder="First name..."
                type="text"
                id="first-name"
                name="first-name"
              />
            </div>

            <div className="sm:col-span-3">
              <Win95Input
                labelText="Last name"
                placeholder="Last name..."
                type="text"
                id="last-name"
                name="last-name"
              />
            </div>

            <div className="sm:col-span-3">
              <Win95Input
                labelText="Email address"
                placeholder="Email address..."
                type="text"
                id="email-address"
                name="email-address"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Country
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full px-2 py-1 text-sm font-ms bg-white win-bevel-raised outline-none"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Europe</option>
                  <option>Japan</option>
                </select>
              </div>
            </div>
            {/* <div className="sm:col-span-3"> */}
            <div className="sm:col-span-6">
              <label
                htmlFor="message"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  className="block min-h-28 w-full px-2 py-1 text-sm font-ms bg-white win-bevel-raised outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <Win95Button>Send</Win95Button>
      </div>
    </form>
  );
}
