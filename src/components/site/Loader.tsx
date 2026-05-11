import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cog } from "lucide-react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <Cog className="w-16 h-16 text-primary" />
          </motion.div>
          <div className="mt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Technie Engineers
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
