import Link from 'next/link';
import React from 'react';
import SignInButton from './SignInButton';
import {
  PopoverGroup,
  Popover,
  PopoverButton,
  PopoverPanel,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/16/solid';

const AppBar = () => {
  return (
    <header className="bg-black text-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div>
          <Link href={'/'} className="text-2xl font-bold leading-6 text-sky-600">
            PAGGO
          </Link>
        </div>
        <div className="lg:flex lg:gap-x-12">
          <Link href={'/'} className="text-sm font-semibold leading-6 hover:text-sky-600">
            Home
          </Link>
          <Link href={'/dashboard'} className="text-sm font-semibold leading-6 hover:text-sky-600">
            Dashboard
          </Link>
          <Link href={'/upload'} className="text-sm font-semibold leading-6 hover:text-sky-600">
            Upload Images
          </Link>
        </div>
        <div>
          <SignInButton />
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
