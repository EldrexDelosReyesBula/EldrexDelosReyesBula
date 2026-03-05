import React, { useEffect, useState} from'react';
import { motion, useMotionValue, useSpring} from'motion/react';
import { useSettings} from'../contexts/SettingsContext';

export default function Cursor() {
 const [isHovering, setIsHovering] = useState(false);
 const { theme} = useSettings();

 const cursorX = useMotionValue(-100);
 const cursorY = useMotionValue(-100);

 const springConfig = { damping: 25, stiffness: 700, mass: 0.5};
 const cursorXSpring = useSpring(cursorX, springConfig);
 const cursorYSpring = useSpring(cursorY, springConfig);

 const outerSpringConfig = { damping: 25, stiffness: 300, mass: 0.8};
 const outerXSpring = useSpring(cursorX, outerSpringConfig);
 const outerYSpring = useSpring(cursorY, outerSpringConfig);

 useEffect(() => {
 const updatePosition = (e: MouseEvent) => {
 cursorX.set(e.clientX);
 cursorY.set(e.clientY);
};

 const handleMouseOver = (e: MouseEvent) => {
 const target = e.target as HTMLElement;
 if (
 target.tagName.toLowerCase() ==='a' ||
 target.tagName.toLowerCase() ==='button' ||
 target.closest('a') ||
 target.closest('button') ||
 target.classList.contains('hover-target') ||
 target.closest('.hover-target')
 ) {
 setIsHovering(true);
} else {
 setIsHovering(false);
}
};

 window.addEventListener('mousemove', updatePosition);
 window.addEventListener('mouseover', handleMouseOver);

 return () => {
 window.removeEventListener('mousemove', updatePosition);
 window.removeEventListener('mouseover', handleMouseOver);
};
}, [cursorX, cursorY]);

 return (
 <>
 <motion.div
 className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference"
 style={{
 x: cursorXSpring,
 y: cursorYSpring,
 translateX:'-50%',
 translateY:'-50%',
}}
 animate={{
 scale: isHovering ? 2.5 : 1,
 backgroundColor: isHovering ?'#ff0557' : (theme ==='dark' ?'#ffffff' :'#111111'),
}}
 transition={{ duration: 0.15}}
 />
 <motion.div
 className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-[#ff0557] pointer-events-none z-[9998]"
 style={{
 x: outerXSpring,
 y: outerYSpring,
 translateX:'-50%',
 translateY:'-50%',
}}
 animate={{
 scale: isHovering ? 1.5 : 1,
 opacity: isHovering ? 0 : 1,
}}
 transition={{ duration: 0.15}}
 />
 </>
 );
}
