'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user)
    return (
      <div className="ml-auto flex gap-4">
        <p className="text-sm font-semibold leading-6 text-sky-600">Hello, {session.user.email}</p>
        <Link
          href={'/api/auth/signout'}
          className="ml-auto text-sm font-semibold leading-6 text-red-600"
        >
          Sign Out
        </Link>
      </div>
    );

  return (
    <div className="ml-auto flex items-center gap-4">
      <Link href={'/signup'} className="ml-auto text-sm font-semibold leading-6">
        Sign Up
      </Link>
      <Link
        href={'/api/auth/signin'} //this is handled by nextauth
        className="ml-auto text-sm font-semibold leading-6"
      >
        Log In <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
};

export default SignInButton;
