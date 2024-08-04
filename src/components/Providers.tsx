'use client';

import React from 'react';
import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

const Providers = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
