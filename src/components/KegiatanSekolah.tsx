import ContentSection from "../components/ContentSection";
import { User } from "lucide-react";

export default function KegiatanSekolah() {
  return (
    <ContentSection title="Kegiatan Sekolah">
      <div className="text-center py-12">
        <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <p className="text-gray-600">Konten akan segera hadir</p>
      </div>
    </ContentSection>
  );
}