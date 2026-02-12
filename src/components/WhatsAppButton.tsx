import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '628993651889';
  const message = 'Halo, saya ingin bertanya tentang SMP Hasjim Asj\'ari';

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center gap-2 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden group-hover:inline-block pr-2 font-medium">
        Chat via WhatsApp
      </span>
    </button>
  );
}
