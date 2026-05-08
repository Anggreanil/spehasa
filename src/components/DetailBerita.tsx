import { useParams, useNavigate } from "react-router-dom";
import ContentSection from "./ContentSection";
import BeritaMunaqosah from "./BeritaMunaqosah";
import BeritaBilingual from "./BeritaBilingual";

export default function DetailBerita() {
  const { id } = useParams();
  const navigate = useNavigate();

  let content;

  if (id === "munaqosah") {
    content = <BeritaMunaqosah onBack={() => navigate("/berita")} />;
  } else if (id === "bilingual") {
    content = <BeritaBilingual onBack={() => navigate("/berita")} />;
  } else {
    content = <p>Berita tidak ditemukan</p>;
  }

  return (
    <ContentSection title="Berita Sekolah">
      {content}
    </ContentSection>
  );
}