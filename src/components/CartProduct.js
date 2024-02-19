import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CartProduct({ product }) {
  return (
    <div className="flex justify-between space-x-4 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4 bg-white">
      <Link
        href={`/product/${product.id}`}
        className="flex items-center space-x-4 group"
      >
        <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="font-semibold text-xl group-hover:underline">
          {product.name}
        </p>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center space-x-">
          <button
            disabled={product.quantity <= 1}
            className="p-1 rounded-md hover:bg-rose-100 hover:text-rose-500"
          >
            <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
          </button>
          <p className="font-semibold text-xl">{product.quantity}</p>
          <button className="p-1 rounded-md hover:bg-green-100 hover:text-green-500">
            <PlusSmallIcon className="w-6 h-6 flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
