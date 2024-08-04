'use client';

import React from 'react';
import { Button } from '../../components/Button';
import InputBox from '../../components/InputBox';
import { Backend_URL } from '@/lib/Constants';
import Link from 'next/link';
import { useRef } from 'react';

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const register = async () => {
    const res = await fetch(Backend_URL + '/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      window.alert(res.statusText);
      return;
    }
    const response = await res.json();
    window.alert('User Registered!');
    console.log({ response });
  };

  const data = useRef<FormInputs>({
    name: '',
    email: '',
    password: '',
  });

  console.log(data.current);

  return (
    <div className="m-2 overflow-hidden rounded border shadow">
      <div className="bg-gradient-to-b from-white to-slate-200 p-2 text-slate-600">Sign up</div>
      <div className="flex flex-col gap-6 p-2">
        <InputBox
          autoComplete="off"
          name="name"
          labelText="Name"
          required
          onChange={(e) => (data.current.name = e.target.value)}
        />
        <InputBox
          name="email"
          labelText="Email"
          required
          onChange={(e) => (data.current.email = e.target.value)}
        />
        <InputBox
          name="password"
          labelText="password"
          type="password"
          required
          onChange={(e) => (data.current.password = e.target.value)}
        />
        <div className="flex items-center justify-center gap-2">
          <Button onClick={register}>Submit</Button>
          <Link className="" href={'/'}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
