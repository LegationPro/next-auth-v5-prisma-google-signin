"use client";

import { signIn } from 'next-auth/react';
import React from 'react'

const Page = () => {
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign in</button>
    </div>
  )
}

export default Page