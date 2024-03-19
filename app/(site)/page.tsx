import Image from "next/image";
import React from "react";
import AuthForm from "./components/AuthForm";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex min-h-full flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height={999}
          width={999}
          className="mx-auto h-12 w-12"
          src={`/Images/logo.png`}
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {/* form */}
      <AuthForm />
    </div>
  );
};

export default Home;
