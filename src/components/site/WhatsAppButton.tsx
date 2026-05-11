import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917417271092?text=Hi%20Technie%20Engineers,%20I%27d%20like%20a%20quote"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </motion.a>
  );
}
