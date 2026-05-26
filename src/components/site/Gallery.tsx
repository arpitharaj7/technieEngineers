import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import upsbclCeilInspection from "@/assets/UPSBCL&CEIL-inspection.jpg";
import dfccilInspection from "@/assets/DFCCIL-inspection.jpg";
import nhaiInspection from "@/assets/NHAI-inspection.jpg";
import railwayInspection from "@/assets/railway-inspection.jpg";
import jammuRailwayRehab from "@/assets/jammu-railway-rehab-work.jpg";
import nh12Rehab from "@/assets/NH12-rehab-work.jpg";
import nh66Alleppey from "@/assets/NH66-alleppey-work.jpg";
import nhaiRaigarh from "@/assets/NHAI-raigarh-work.jpg";
import railwayOpenWeb from "@/assets/Railway45.7-open-web-work.jpg";
import ntpcRehab from "@/assets/NTPC-rehab-work.jpg";
import odishaRailway from "@/assets/odisha-railway-work.jpg";
import jammuBridge from "@/assets/jammu-bridge-work.jpg";

const images = [
  { src: upsbclCeilInspection, label: "UPSBCL & CEIL Inspection", span: "row-span-2" },
  { src: dfccilInspection, label: "DFCCIL Inspection", span: "" },
  { src: nhaiInspection, label: "NHAI Inspection", span: "" },
  { src: railwayInspection, label: "Railway Inspection", span: "row-span-2" },
  { src: jammuRailwayRehab, label: "Jammu Railway Rehab Work", span: "" },
  { src: nh12Rehab, label: "NH12 Rehab Work", span: "" },
  { src: nh66Alleppey, label: "NH-66 Alleppey Kerala", span: "row-span-2" },
  { src: nhaiRaigarh, label: "NHAI Raigarh Work", span: "" },
  { src: railwayOpenWeb, label: "Railway 45.7 Open Web Work", span: "" },
  { src: ntpcRehab, label: "NTPC Rehab Work", span: "row-span-2" },
  { src: odishaRailway, label: "Odisha Railway Work", span: "" },
  { src: jammuBridge, label: "Jammu Bridge Work", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  const [touchIndex, setTouchIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Workshop Gallery</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Inside the <span className="text-gradient-fire">Engineering Process.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {images.map((img, i) => {
            const isTouchActive = touchIndex === i;
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => setOpen(img.src)}
                onTouchStart={() => setTouchIndex(i)}
                onTouchEnd={() => setTouchIndex(null)}
                onTouchCancel={() => setTouchIndex(null)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative rounded-2xl overflow-hidden group ${img.span} hover-lift`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-black/60 transition-opacity ${isTouchActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                <div className={`absolute bottom-3 left-3 text-sm font-semibold text-cyan-100 transition-opacity ${isTouchActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {img.label}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={open}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
