"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function Navbar() {
    const navItems = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="text-xl font-black tracking-tighter text-white">
                    MELLY<span className="text-gray-500">.</span>DEV
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Action Button */}
                <div>
                    <Button className="bg-white text-black hover:bg-gray-200 font-semibold rounded-full px-6">
                        Resume
                    </Button>
                </div>
            </div>
        </nav>
    );
}
