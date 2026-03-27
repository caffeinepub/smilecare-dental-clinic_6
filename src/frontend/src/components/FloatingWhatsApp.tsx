import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.floating.button"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
    >
      <MessageCircle size={22} fill="white" />
      <span className="text-sm font-semibold hidden group-hover:block">
        Chat with us
      </span>
    </a>
  );
}
