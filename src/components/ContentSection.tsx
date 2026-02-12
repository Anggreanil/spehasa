interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-700 pb-2 inline-block">
        {title}
      </h2>
      <div className="prose max-w-none text-gray-700">
        {children}
      </div>
    </div>
  );
}
