"use client";

import Link from "next/link";
import { memo } from "react";

function TopBarComponent() {
  return (
    <div className="flex justify-between items-center px-8 h-16 border-b border-gray-300">

      <div className="h-24 flex items-center ml-28">
        <img
          src="8.png"
          alt="Logo Doveon"
          className="h-full object-contain"
        />
      </div>


      <nav className="flex-1 flex justify-center">
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/for-business">
              <span className="font-medium text-[#6E6E6E] hover:text-[#1D1D1D] transition-colors">
                Para Empresas
              </span>
            </Link>
          </li>
          <li>
            <Link href="/for-professionals">
              <span className="font-medium text-[#6E6E6E] hover:text-[#1D1D1D] transition-colors">
                Para Profissionais
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export const TopBar = memo(TopBarComponent);