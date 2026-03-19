import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, User, Briefcase, FolderGit2, Cpu, Mail, FileUser } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'About', to: 'about', icon: <User className="w-7 h-7 text-neon-cyan group-hover:text-neon-purple transition-all duration-300" /> },
    { name: 'Experience', to: 'experience', icon: <Briefcase className="w-7 h-7 text-neon-cyan group-hover:text-neon-purple transition-all duration-300" /> },
    { name: 'Projects', to: 'projects', icon: <FolderGit2 className="w-7 h-7 text-neon-cyan group-hover:text-neon-purple transition-all duration-300" /> },
    { name: 'Skills', to: 'skills', icon: <Cpu className="w-7 h-7 text-neon-cyan group-hover:text-neon-purple transition-all duration-300" /> },
    { name: 'Contact', to: 'contact', icon: <Mail className="w-7 h-7 text-neon-cyan group-hover:text-neon-purple transition-all duration-300" /> },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent h-24'}`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer group"
                >
                    <Link to="hero" smooth={true} duration={500}>
                        <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {/* Hexagon Background */}
                            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(176,0,255,0.5)]">
                                <defs>
                                    <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#b000ff" />
                                        <stop offset="100%" stopColor="#00ffff" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <path
                                    d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z"
                                    fill="none"
                                    stroke="url(#logo-gradient)"
                                    strokeWidth="3"
                                    className="group-hover:stroke-[4px] transition-all duration-300"
                                />
                                <text
                                    x="50"
                                    y="68"
                                    fontSize="38"
                                    fontWeight="bold"
                                    fontFamily="monospace"
                                    fill="white"
                                    textAnchor="middle"
                                    className="group-hover:fill-neon-cyan transition-colors duration-300"
                                    style={{ filter: "drop-shadow(0 0 2px rgba(176,0,255,0.8))" }}
                                >
                                    AS
                                </text>
                            </svg>
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ol className="flex space-x-8">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer font-mono text-sm text-slate-light hover:text-neon-cyan transition-colors group flex items-center gap-3"
                                >
                                    <motion.div
                                        className="relative flex items-center justify-center"
                                        whileTap={{ scale: 1.25 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <div className="absolute inset-0 bg-neon-cyan/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {item.icon}
                                    </motion.div>
                                    <span className="group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] transition-all font-bold tracking-wide">
                                        {item.name}
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
                    </ol>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <a
                            href="https://drive.google.com/file/d/1eFdN_-J-caLcNBLaSPBYjAH1N-OmODSS/view."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-6 py-2 bg-transparent overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95"
                        >
                            <div className="absolute inset-0 border border-neon-purple/50 rounded-md group-hover:border-neon-cyan/50 transition-colors duration-300" />
                            <div className="absolute inset-0 bg-neon-purple/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />

                            <span className="relative flex items-center gap-2 text-neon-purple font-mono text-sm group-hover:text-neon-cyan transition-colors duration-300">
                                <FileUser className="w-4 h-4" />
                                Resume
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-neon-purple focus:outline-none"
                    >
                        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-0 right-0 w-full h-screen bg-violet-900/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40 md:hidden"
                    >
                        <ol className="flex flex-col items-center space-y-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="flex flex-col items-center cursor-pointer font-mono text-lg text-slate-light hover:text-neon-cyan group"
                                    >
                                        <motion.div
                                            className="p-3 mb-2 rounded-full bg-navy-800 border border-white/10 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
                                            whileTap={{ scale: 1.25 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            {item.icon}
                                        </motion.div>
                                        <span className="font-bold tracking-wider">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                        <a
                            href="https://drive.google.com/file/d/1qy6pWI4qf04pbbdaqWHHS3Rp48NkRct6/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-3 overflow-hidden rounded-lg mt-4"
                        >
                            <div className="absolute inset-0 bg-none border-2 border-neon-purple rounded-lg group-hover:border-neon-cyan transition-colors duration-300" />
                            <div className="absolute inset-0 bg-neon-purple/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                            <span className="relative flex items-center gap-3 text-neon-purple font-mono text-xl group-hover:text-white transition-colors duration-300">
                                <FileUser className="w-6 h-6" />
                                Resume
                            </span>
                        </a>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 text-neon-purple"
                        >
                            <X className="h-8 w-8" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
