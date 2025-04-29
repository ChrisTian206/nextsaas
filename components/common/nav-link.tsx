import Link from "next/link";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
    return (
        <Link href={href}
            className={cn("transition-color text-sm duration-200 text-gray-400 hover:text-orange-500", className)}>
            {children}
        </Link>
    )
}

export default NavLink