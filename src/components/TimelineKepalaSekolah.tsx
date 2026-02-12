export default function TimelineKepalaSekolah() {
  const data = [
    { tahun: "1968 - 1975", nama: "Anwar Widianto. BA" },
    { tahun: "1975 - 1994", nama: "Zainuddin SA.BA" },
    { tahun: "1994 - 1998", nama: "Drs. Muh Qosim" },
    { tahun: "1998 - 2007", nama: "Drs. H. Abdul Madjid" },
    { tahun: "2007 - 2009", nama: "H. Sulaiman A S, S.Pd" },
    { tahun: "2009 - 2011", nama: "Drs. H. Djainul Fatah" },
    { tahun: "2011 - 2015", nama: "Drs. H. Abdul Rahman" },
    { tahun: "2015 - 2019", nama: "Drs. H. Djainul Fatah" },
    { tahun: "2019 - 2023", nama: "Dra. Hj. Ida Zulfiyah, M.Pd" },
    { tahun: "2023 - 2027", nama: "Dra. Hj. Ida Zulfiyah, M.Pd" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">

      <div className="relative">
        {/* Garis tengah */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-700 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {data.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Titik */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-700 rounded-full border-4 border-white shadow"></div>

              {/* Box */}
              <div
                className={`w-5/12 p-4 rounded-lg shadow bg-green-50 border border-green-200 ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <p className="font-semibold text-gray-700">{item.tahun}</p>
                <p className="text-lg font-bold text-green-800">{item.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
