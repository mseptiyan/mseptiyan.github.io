import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Code2, BookOpen, Clock, MessageSquare } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

const navItems = [
  { icon: Home,          path: '/',          label: 'Home'      },
  { icon: User,          path: '/about',     label: 'About'     },
  { icon: Code2,         path: '/projects',  label: 'Projects'  },
  { icon: BookOpen,      path: '/garden',    label: 'Garden'    },
  { icon: Clock,         path: '/telemetry', label: 'Telemetry' },
  { icon: MessageSquare, path: '/guestbook', label: 'Guestbook' },
];

const BASE_SIZE  = 40;  // px — resting icon slot size
const MAX_SIZE   = 72;  // px — direct-hover size
const MID_SIZE   = 56;  // px — neighbour size
const REACH      = 110; // px — how far the magnify effect spreads

const SPRING_CFG = { mass: 0.1, stiffness: 200, damping: 16 };

/* ─── single icon slot ─────────────────────────────────────────────── */
function DockIcon({ item, mouseX, isActive }) {
  const ref     = useRef(null);
  const [tip, setTip] = useState(false);
  const { icon: Icon } = item;

  /* distance of cursor from this icon's centre */
  const dist = useTransform(mouseX, (mx) => {
    const el = ref.current;
    if (!el) return Infinity;
    const { left, width } = el.getBoundingClientRect();
    return mx - (left + width / 2);
  });

  /* size of the SLOT (drives the dock width expansion) */
  const sizeRaw = useTransform(dist, [-REACH, 0, REACH], [BASE_SIZE, MAX_SIZE, BASE_SIZE]);
  const size    = useSpring(sizeRaw, SPRING_CFG);

  /* visual icon scale — slightly separate so it stays crisp */
  const scaleRaw = useTransform(dist, [-REACH, 0, REACH], [1, MAX_SIZE / BASE_SIZE, 1]);
  const scale    = useSpring(scaleRaw, SPRING_CFG);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center flex-shrink-0"
      onHoverStart={() => setTip(true)}
      onHoverEnd={()  => setTip(false)}
    >
      {/* ── tooltip ── */}
      <AnimatePresence>
        {tip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1    }}
            exit={{    opacity: 0, y: 4, scale: 0.9  }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="absolute -top-7 left-1/2 -translate-x-1/2
                       px-2 py-0.5 rounded-md pointer-events-none
                       bg-black/60 backdrop-blur-sm border border-white/10
                       text-white/80 text-[10px] font-mono tracking-wide
                       whitespace-nowrap shadow-md"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── icon button ── */}
      <Link to={item.path} className="flex items-center justify-center w-full h-full">
        <motion.div
          style={{ scale }}
          whileTap={{ scale: 0.85 }}
          className={`
            w-10 h-10 flex items-center justify-center rounded-xl
            transition-colors duration-150
            ${isActive
              ? 'bg-primary text-primary-foreground shadow-[0_0_14px_2px_hsl(38,90%,55%,0.45)]'
              : 'bg-white/[0.07] text-white/55 hover:bg-white/[0.12] hover:text-white/85'}
          `}
        >
          <Icon size={17} strokeWidth={isActive ? 2.2 : 1.75} />
        </motion.div>
      </Link>

      {/* active dot */}
      {isActive && (
        <motion.span
          layoutId="activeDot"
          className="absolute -bottom-1 w-[3px] h-[3px] rounded-full bg-primary"
        />
      )}
    </motion.div>
  );
}

/* ─── dock ─────────────────────────────────────────────────────────── */
export default function BottomNav() {
  const location = useLocation();
  const mouseX   = useMotionValue(Infinity);

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 select-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26, delay: 0.15 }}
        /* dock shell — flex with horizontal padding; height stretches with icons */
        className="
          flex items-end gap-1 px-3 py-2
          rounded-2xl
          bg-[rgba(18,18,22,0.75)] backdrop-blur-2xl
          border border-white/[0.09]
          shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)]
        "
      >
        {navItems.map((item) => (
          <DockIcon
            key={item.path}
            item={item}
            mouseX={mouseX}
            isActive={location.pathname === item.path}
          />
        ))}
      </motion.div>

      {/* ambient ground glow */}
      <div className="
        absolute -bottom-1 left-1/2 -translate-x-1/2
        w-2/3 h-2 rounded-full blur-2xl opacity-15 bg-white pointer-events-none
      " />
    </nav>
  );
}
