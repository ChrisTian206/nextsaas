"use client"
import Link from "next/link";
import { FileText } from "lucide-react";
import { useState } from "react";

export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto border-b border-gray-200">
            <div className="flex-1">
                <Link href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
                    <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 hover:rotate-12
                        transform transition-all duration-200 ease-in-out" />
                    <span className="font-extrabold text-orange-500 lg:text-2xl">ChatPDF</span>
                </Link>
            </div>
            <div className="flex flex-1 items-center gap-5 lg:gap-12 lg:flex-1 lg:justify-center">
                <Link href="/#pricing">
                    Pricing
                </Link>
                {isLoggedIn && (
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                )}

            </div>
            <div className="flex lg:justify-end lg:flex-1">
                {isLoggedIn ? (
                    <div className="flex gap-2 items-center">
                        <Link href="/sign-in">Upload PDFs</Link>
                    </div>
                ) : (
                    <div className="flex gap-2 items-center">
                        <Link href="/sign-in">Sign In</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}