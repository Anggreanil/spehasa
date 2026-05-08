import ContentSection from "./ContentSection";
import { User } from "lucide-react";

export default function StudentOnStage() {
  return (
    <ContentSection title="Student On Stage">
      <div className="text-center py-12">
        <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <p className="text-gray-600">Konten akan segera hadir</p>
      </div>
    </ContentSection>
  );
}