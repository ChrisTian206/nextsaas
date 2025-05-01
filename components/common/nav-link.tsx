"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
    const pathname = usePathname();

    //href is the pathname of the current page, very handy
    const isActive = pathname === href;
    return (
        <Link href={href}
            className={cn("transition-color text-sm duration-200 text-gray-400 hover:text-orange-500", className, isActive && "text-orange-500")}>
            {children}
        </Link>
    )
}

export default NavLink