import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/919922325070"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href="tel:+919922325070"
            className="flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-medium text-background shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
      >
        {open ? <X size={24} /> : <Phone size={24} />}
      </button>
    </div>
  );
}
