import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const COLORS_TOP = ["#a587c9", "#539bd9", "#5cb0ef", "#37a2f4", "#000000"];

const Animation = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 50%, ${color} 10%, #020617 90%)`;
    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
        </motion.section>
    )
}

export default Animation