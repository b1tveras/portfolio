import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

const experienceData = [
   
    {
        role: "Full Stack Developer",
        company: "The Skybrisk",
        period: "jan 2029 -mar 2026",
        description: [
            "Developed and maintained full-stack web applications using React and Spring Boot.",
            "Implemented RESTful APIs and integrated third-party services.",
            "Collaborated with UX team to improve user journey."
        ]
    },
     {
        role: "Hospital Management System",
        company: "Technologies: Java, Spring Boot, React.js, Tailwind CSS, MySQL ",
        period: "(Live Project)",
        description: [
            " full-stack educational platform to provide free study resources across multiple academic streams. ",
            "Implemented APIs using Java and Spring Boot to manage notes, resources, and structured content storage. ",
            "Implemented distributed tracing which reduced debugging time by 40%."
        ]
    },
    
    {
        role: "B.Tech in information technology",
        company: "chandigarh Group of Collage",
        period: "2022 - 2026",
        description: [
            "Graduated with Honors.",
            "Specialized in Software Engineering and Data Structures."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-violet-900/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle title="Where I've Worked" />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-xl hover:shadow-[0_0_25px_rgba(176,0,255,0.2)] hover:border-neon-purple/50 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                        {item.role}
                                    </h3>
                                    <h4 className="text-neon-purple font-mono text-sm mt-1">
                                        @ {item.company}
                                    </h4>
                                </div>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-slate-light border border-white/5">
                                    {item.period}
                                </span>
                            </div>

                            <ul className="space-y-3 mt-6">
                                {item.description.map((desc, i) => (
                                    <li key={i} className="flex items-start text-slate-light text-sm leading-relaxed">
                                        <span className="text-neon-cyan mr-3 mt-1">▹</span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
