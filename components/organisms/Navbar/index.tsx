import Link from 'next/link';
import ButtonTheme from './ButtonTheme';
import ButtonToggler from './ButtonToggler';
import FormSearch from './FormSearch';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <span className="text-3xl font-bold text-purple">
              What
              <span className="text-black">Movie</span>
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <ButtonTheme />
            <ButtonToggler />
          </div>
        </div>
        <div className="block lg:hidden">
          <FormSearch />
        </div>
        <div className="hidden lg:flex justify-between">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/">
                <span className="text-gray-600 hover:text-gray-900">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <span className="text-gray-600 hover:text-gray-900">About Us</span>
              </Link>
            </li>
          </ul>
          <FormSearch />

        </div>
      </div>
    </nav>
  );
}