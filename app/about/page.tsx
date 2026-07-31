import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda – VOXL 3D",
  description:
    "VOXL 3D hakkında bilgi edinin. 3D baskı sürecimiz, kullandığımız malzemeler ve bu işe neden tutku duyduğumuzu keşfedin.",
};

const processSteps = [
  {
    step: "01",
    title: "Tasarım",
    description:
      "Her ürün, kullanıcı ihtiyaçlarını göz önünde bulundurarak CAD yazılımlarıyla özenle modellenir.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Baskı",
    description:
      "FDM teknolojisi ve yüksek kaliteli PLA/PETG filament kullanarak katman katman baskı alınır.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Kalite Kontrolü",
    description:
      "Her ürün sevkiyat öncesinde boyut doğruluğu, yüzey kalitesi ve dayanıklılık açısından incelenir.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Teslimat",
    description:
      "Güvenli paketleme ile Türkiye genelinde hızlı kargo teslimatı yapılır.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Hakkımızda
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl leading-tight">
            Hayalleri Katman Katman{" "}
            <span className="text-orange-400">Gerçeğe Dönüştürüyoruz</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            VOXL 3D olarak, günlük hayatı kolaylaştıran ve estetik değer katan
            3D baskı ürünleri tasarlıyor ve üretiyoruz.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-gray-900">
              Bu İşi Neden Yapıyorum?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              3D baskı benim için yalnızca bir üretim yöntemi değil, fikirleri gerçeğe dönüştüren bir tasarım sürecidir.
              Her ürün, günlük hayatta karşılaşılan bir ihtiyacı daha pratik,
              estetik ve işlevsel hale getirme amacıyla özenle tasarlanır.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Üretimde kalite ve dayanıklılığı ön planda tutuyor, her modeli
              baskı öncesinde ve sonrasında titizlikle test ediyorum.
              Kullandığım PLA ve PETG filamentler; sağlamlık, uzun ömür ve kaliteli yüzey
              görünümü sağlayacak şekilde özenle seçilmektedir.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Amacım, sadece bir 3D baskı ürünü sunmak değil; uzun yıllar güvenle kullanılabilecek,
              kullanıcı deneyimini iyileştiren ve beklentilerin ötesine geçen kaliteli tasarımlar üretmektir.
            </p>
          </div>

          {/* Orange accent stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "16+", label: "Üretilen Ürün" },
              { value: "1+", label: "Yıllık Deneyim" },
              { value: "PLA/PETG", label: "Malzeme" },
              { value: "100%", label: "Müşteri Memnuniyeti" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:border-orange-200 hover:bg-orange-50 transition-colors"
              >
                <div className="text-3xl font-bold text-orange-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">
              Nasıl Çalışıyoruz?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Baskı Sürecimiz
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-gray-100 select-none">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
