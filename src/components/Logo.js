import Link from "next/link";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.svg" alt="Logo" width={42} height={42} />
      <span className="hidden sm:inline-block font-extrabold text-3xl text-grey-700">
        NoStore
      </span>
    </Link>
  );
}

export default Logo;
