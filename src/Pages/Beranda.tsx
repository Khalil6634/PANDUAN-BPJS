import { useState } from "react";
import {
  Smartphone,
  Info,
  HelpCircle,
  PhoneCall,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Clock,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  Menu,
  X,
  Building2,
} from "lucide-react";
import { Link } from "react-router";

export default function Beranda() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900">
                    BPJS
                  </span>
                  <span className="font-extrabold text-xl tracking-tight text-emerald-600">
                    Kesehatan
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  Kantor Cabang Bogor
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#layanan"
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Layanan Utama
              </a>

              <a
                href="#kontak"
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Kontak & Lokasi
              </a>
            </nav>

            {/* Header Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/628118165165"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>PANDAWA WA</span>
              </a>
              <a
                href="https://wa.me/628118165165"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/25 active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Care Center 165</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#layanan"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
            >
              Layanan Utama
            </a>
            <a
              href="#panduan"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
            >
              Panduan JKN
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
            >
              Pusat Informasi
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/628118165165"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>PANDAWA (WhatsApp)</span>
              </a>
              <a
                href="tel:165"
                className="flex justify-center items-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-600"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Center 165</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-b from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 sm:py-24">
        {/* Decorative Background Effects */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-400/20 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Portal Pelayanan Resmi KC Bogor</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            SELAMAT DATANG
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto font-normal leading-relaxed">
            Portal Informasi dan Panduan Resmi{" "}
            <span className="font-semibold text-white">
              BPJS Kesehatan Kantor Cabang Bogor
            </span>
            . Temukan kemudahan akses dan solusi layanan kesehatan Anda di sini.
          </p>
        </div>
      </section>

      {/* MAIN 3 ACTION CARDS (REDESIGNED FROM MOCKUP) */}
      <section
        id="layanan"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Mobile JKN Guide */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-100 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8" />
              </div>
              <span className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
                Serba Digital
              </span>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Panduan Aplikasi Mobile JKN
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Nikmati kemudahan urus BPJS Kesehatan langsung dari genggaman.
                Cek kartu digital, ubah data faskes, hingga antrean online.
              </p>

              <ul className="mt-4 space-y-2 text-xs font-medium text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>KIS Digital Tanpa Kartu Fisik</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Ambil Antrean Faskes Online</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Info Ketersediaan Tempat Tidur</span>
                </li>
              </ul>
            </div>

            <Link to={"/SerbaDigital"}>
              <button className="mt-6 w-full py-3 px-4 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-md">
                <span>Pelajari Panduan</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Card 2: Service Info */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-100 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                <Info className="w-8 h-8" />
              </div>
              <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-3">
                Informasi Resmi
              </span>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                Informasi Layanan BPJS Kesehatan
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Informasi lengkap persyaratan berkas, hak kelas rawat,
                penjaminan program JKN-KIS, dan alur pelayanan di rumah sakit.
              </p>

              <ul className="mt-4 space-y-2 text-xs font-medium text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Persyaratan Pendaftaran Mandiri / PBPU</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Daftar Faskes Kerjasama Bogor</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Alur Gawat Darurat (UGD)</span>
                </li>
              </ul>
            </div>

            <Link to={"/LayananBPJS"}>
              <button className="mt-6 w-full py-3 px-4 bg-slate-900 hover:bg-emerald-600 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-md">
                <span>Lihat Info Layanan</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Card 3: Assistance & Services */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-100 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-8 h-8" />
              </div>
              <span className="inline-block px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-bold tracking-wide uppercase mb-3">
                Bantuan & Pengaduan
              </span>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                Bantuan Pelayanan & PANDAWA
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Butuh bantuan kendala layanan? Hubungi petugas PANDAWA KC Bogor,
                Layanan CHIKA, atau pengaduan langsung.
              </p>

              <ul className="mt-4 space-y-2 text-xs font-medium text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Pelayanan Tanpa Tatap Muka (PANDAWA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Layanan Pengaduan Kendala Faskes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Konsultasi Penanganan Tunggakan</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() =>
                setSelectedModal({
                  title: "Bantuan Pelayanan & Kontak PANDAWA",
                  content:
                    "Layanan PANDAWA (Pelayanan Administrasi melalui WhatsApp) beroperasi pada jam kerja (08.00 - 15.00 WIB). Anda dapat melakukan perubahan data, penambahan anggota keluarga, dan pengaktifan kembali kartu cukup melalui pesan WhatsApp.",
                })
              }
              className="mt-6 w-full py-3 px-4 bg-slate-900 hover:bg-purple-600 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <span>Akses Bantuan</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* OFFICE & OPERATIONAL INFO */}
      <section
        id="kontak"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Office Address Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Kantor Cabang Bogor
                  </h3>
                  <p className="text-xs text-slate-500">
                    Wilayah Layanan Kota & Kab. Bogor
                  </p>
                </div>
              </div>

              <div className="space-y-3 mt-6 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Jl. Ahmad Yani No. 62, RT.04/RW.07, Tanah Sareal, Kec. Tanah
                    Sereal, Kota Bogor, Jawa Barat 16161
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Senin - Jumat: 08.00 - 15.00 WIB</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=BPJS+Kesehatan+KC+Bogor"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              <span>Petunjuk Arah (Google Maps)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Contact Banner */}
          <div className="lg:col-span-2 bg-linear-to-r from-emerald-600 to-teal-700 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-emerald-600/20">
            <div className="absolute right-0 bottom-0 opacity-10 translate-x-8 translate-y-8 pointer-events-none">
              <PhoneCall className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase">
                Layanan 24 Jam
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-4">
                Butuh Informasi Bantuan Darurat?
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base mt-2 max-w-xl">
                Hubungi BPJS Kesehatan Care Center 165 kapan saja dan dari mana
                saja untuk informasi status kepesertaan, keluhan, dan informasi
                faskes.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/628118165165"
                className="px-6 py-3.5 rounded-2xl bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-sm flex items-center gap-2 shadow-xl transition-all active:scale-95"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call Center 165</span>
              </a>
              <a
                href="https://wa.me/628118165165"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-800/60 hover:bg-emerald-800/80 border border-white/20 text-white font-bold text-sm flex items-center gap-2 backdrop-blur-md transition-all active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp PANDAWA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL PREVIEW DETIL */}
      {selectedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <Info className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {selectedModal.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {selectedModal.content}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              {selectedModal.title === "Bantuan Pelayanan & Kontak PANDAWA" ? (
                <div className="space-x-2">
                  <button className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors">
                    <a href="https://www.instagram.com/bpjscabangbogor?obrf=MTI4cDBjZHlxODd2Zw== ">
                      Instagram
                    </a>
                  </button>
                  <button className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors">
                    <a href="https://wa.me/628118165165">Whatsapp</a>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSelectedModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Tutup Panduan
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-white tracking-tight">
                BPJS Kesehatan KC Bogor
              </span>
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} BPJS Kesehatan Kantor Cabang Bogor.
              Hak Cipta Dilindungi Undang-Undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
