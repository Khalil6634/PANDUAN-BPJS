import { useState } from "react";
import {
  ArrowLeft,
  PlayCircle,
  Search,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router";

export default function VideoListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Data kumpulan video panduan
  const videos = [
    {
      id: 1,
      title: "Alur Antrean Online FTKP",
      category: "Mobile JKN",
      duration: "03:45 min",
      description:
        "Panduan lengkap tata cara mengambil nomor antrean online di fasilitas kesehatan tingkat pertama (FKTP) maupun rumah sakit melalui aplikasi Mobile JKN.",
      videoUrl:
        "https://www.instagram.com/reel/DcPztslzhnB/?rpxt=MXZld3Zob3hvY292MA==", // Ganti dengan link embed video asli BPJS
    },
    {
      id: 12,
      title: "Alur Antrean Online FTKP",
      category: "Mobile JKN",
      duration: "03:45 min",
      description:
        "Panduan lengkap tata cara mengambil nomor antrean online di fasilitas kesehatan tingkat pertama (FKTP) maupun rumah sakit melalui aplikasi Mobile JKN.",
      videoUrl:
        "https://www.instagram.com/reel/DTIU9UvErAw/?cplk=OWRtZGgxOGpoOGJ3", // Ganti dengan link embed video asli BPJS
    },
    {
      id: 2,
      title: "Cara Mengatasi Lupa Kata Sandi",
      category: "Akun & Keamanan",
      duration: "02:15 min",
      description:
        "Langkah-langkah mudah mereset password akun Mobile JKN menggunakan email atau nomor handphone yang terdaftar.",
      videoUrl:
        "https://www.instagram.com/reel/DVbFx3sCbnQ/?exln=MTA0Z21mOTV2ZDVmcw== ",
    },
    {
      id: 3,
      title: "Cara Mengubah Alamat Email",
      category: "Profil Pengguna",
      duration: "01:50 min",
      description:
        "Cara memperbarui alamat email aktif Anda di dalam sistem aplikasi Mobile JKN untuk kelancaran verifikasi data.",
      videoUrl:
        "https://www.instagram.com/reel/DaW6gkQSpYC/?exln=dTRnZzBjbDd1eGoy",
    },
    {
      id: 4,
      title: "Cara Mengubah Nomor Telfon",
      category: "Profil Pengguna",
      duration: "02:30 min",
      description:
        "Panduan aman mengganti nomor telepon seluler yang terhubung dengan akun JKN-KIS Anda.",
      videoUrl:
        "https://www.instagram.com/reel/DY6alzCgkhx/?psln=MWRhNG1rYXYzcmhyeg==",
    },
    {
      id: 5,
      title: "Cara cek no VA",
      category: "Profil Pengguna",
      duration: "02:30 min",
      description:
        "Panduan aman mengganti nomor telepon seluler yang terhubung dengan akun JKN-KIS Anda.",
      videoUrl:
        "https://www.instagram.com/reel/DY6alzCgkhx/?psln=MWRhNG1rYXYzcmhyeg==",
    },
    {
      id: 6,
      title: "Cek kepesertaan",
      category: "Profil Pengguna",
      duration: "02:30 min",
      description:
        "Panduan aman mengganti nomor telepon seluler yang terhubung dengan akun JKN-KIS Anda.",
      videoUrl:
        "https://www.instagram.com/reel/DUWpPU0knMd/?cplk=aDF3eWFzOWlmMm5p",
    },
    {
      id: 7,
      title: "Penambahan anggota keluarga",
      category: "Profil Pengguna",
      duration: "02:30 min",
      description:
        "Panduan aman mengganti nomor telepon seluler yang terhubung dengan akun JKN-KIS Anda.",
      videoUrl:
        "https://www.instagram.com/reel/DaAQOTcSjDq/?vrfl=d2pibjU2N2h6cW1r ",
    },
  ];

  // Filter video berdasarkan pencarian
  const filteredVideos = videos.filter((v) =>
    v.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* Header BPJS */}
      <header className="bg-white shadow-sm border-b border-emerald-100 py-3 px-4 md:px-8 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-600 text-white p-2 rounded-lg font-bold tracking-wider text-sm flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>BPJS KESEHATAN</span>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline border-l border-slate-300 pl-3">
            KC Bogor - Portal Serba Digital
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-6">
        {/* Tombol Kembali ke Layanan */}
        <Link to={"/"}>
          <button className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-6 transition-colors bg-white px-3.5 py-2 rounded-full shadow-xs border border-emerald-100 hover:bg-emerald-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke layanan
          </button>
        </Link>

        {/* Judul Halaman */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Panduan Aplikasi Mobile JKN
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kumpulan panduan video resmi penggunaan fitur layanan digital BPJS
            Kesehatan.
          </p>
        </div>

        {/* Kotak Pencarian Video */}
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="Cari video panduan (misal: sandi, email, antrean)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Daftar List Video */}
        <div className="space-y-3.5">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center space-x-4 flex-1 pr-3">
                  {/* Icon Play Bulat Hitam/Emerald */}
                  <div className="w-12 h-12 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                    <PlayCircle className="w-6 h-6 fill-white text-slate-900 group-hover:text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {video.title}
                    </h2>
                    <span className="text-xs text-slate-400 mt-0.5 block">
                      Durasi: {video.duration} • {video.category}
                    </span>
                  </div>
                </div>

                {/* Badge PANDUAN */}
                <span className="shrink-0 bg-slate-100 group-hover:bg-emerald-100 text-slate-700 group-hover:text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-lg tracking-wider transition-colors border border-slate-200/60 group-hover:border-emerald-200">
                  PANDUAN
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">
                Video panduan tidak ditemukan.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Modal Pemutar Video / Detail Panduan */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Header Modal */}
            <div className="bg-emerald-600 px-6 py-4 text-white flex items-center justify-between">
              <h3 className="font-bold text-base flex items-center gap-2">
                <PlayCircle className="w-5 h-5" /> Putar Panduan
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white/80 hover:text-white font-bold text-lg px-2"
              >
                ✕
              </button>
            </div>

            {/* Video Placeholder / Frame */}
            <div className="relative aspect-video bg-slate-900 flex items-center justify-center">
              <div className="text-center p-6 text-white">
                <PlayCircle className="w-16 h-16 mx-auto text-emerald-400 mb-2 animate-pulse" />
                <p className="text-sm font-semibold">{selectedVideo.title}</p>
                <span className="text-xs text-slate-400">
                  Simulasi Pemutar Video Resmi BPJS
                </span>
              </div>
            </div>

            {/* Keterangan Modal */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                  {selectedVideo.category}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedVideo.duration}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">
                {selectedVideo.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedVideo.description}
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Tutup
                </button>
                <button className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-sm font-semibold text-white shadow-sm transition-colors inline-flex items-center gap-2">
                  <a href={selectedVideo.videoUrl}>
                    <span>Buka Video</span>
                  </a>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Sederhana */}
      <footer className="text-center py-6 text-xs text-slate-400 border-t border-slate-200/60 mt-auto">
        © 2026 BPJS Kesehatan Kantor Cabang Bogor. All Rights Reserved.
      </footer>
    </div>
  );
}
