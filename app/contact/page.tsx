import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İletişim – VOXL 3D",
  description:
    "VOXL 3D ile iletişime geçin. Sipariş vermek veya özel tasarım talepleri için WhatsApp veya e-posta yoluyla ulaşın.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/905318108471?text=${encodeURIComponent(
    "Merhaba! Ürünleriniz hakkında bilgi almak istiyorum."
  )}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">
            İletişim
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sizinle Konuşalım
          </h1>
          <p className="text-lg text-gray-500 max-w-xl">
            Sipariş vermek, fiyat bilgisi almak ya da özel tasarım hakkında
            konuşmak için bize ulaşın. En hızlı yanıtı WhatsApp üzerinden
            alırsınız.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp"
            className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-green-100 group-hover:bg-green-500 text-green-500 group-hover:text-white rounded-2xl flex items-center justify-center mb-4 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
            <p className="text-sm text-gray-500 mb-3">
              En hızlı yanıt yöntemi. Genellikle birkaç saat içinde dönüş
              yapıyorum.
            </p>
            <span className="text-sm font-medium text-green-600 group-hover:text-green-700">
              Şimdi Mesaj At →
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@voxl3d.com"
            id="contact-email"
            className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-orange-100 group-hover:bg-orange-500 text-orange-500 group-hover:text-white rounded-2xl flex items-center justify-center mb-4 transition-colors">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">E-Posta</h3>
            <p className="text-sm text-gray-500 mb-3">
              Detaylı talepler ve özel tasarım sorguları için e-posta
              gönderebilirsiniz.
            </p>
            <span className="text-sm font-medium text-orange-500 group-hover:text-orange-600">
              info@voxl3d.com →
            </span>
          </a>

          {/* Response time */}
          <div className="bg-orange-500 rounded-2xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-1">Yanıt Süresi</h3>
            <p className="text-sm text-orange-100 mb-4">
              WhatsApp mesajlarına genellikle aynı gün, e-postalara ise 24 saat
              içinde dönüş yapıyorum.
            </p>
            <div className="text-2xl font-black">&lt; 24 saat</div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Özel boyut veya renk talep edebilir miyim?",
                a: "Evet! Standart ürünlerin boyutlarını veya filament rengini özelleştirebilirsiniz. Taleplerinizi WhatsApp üzerinden iletebilirsiniz.",
              },
              {
                q: "Kargo süresi ne kadar?",
                a: "Türkiye genelinde kargo 2-4 iş günü sürmektedir. Baskı süresi ürüne göre ek 1-2 gün gerektirebilir.",
              },
              {
                q: "PLA ve PETG arasındaki fark nedir?",
                a: "PLA daha yaygın ve kolay baskı alınır, iç mekan kullanımı için idealdir. PETG ise daha dayanıklı ve ısıya karşı daha dirençlidir, mutfak veya araç içi kullanım için tercih edilir.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="pb-6 border-b border-gray-200 last:border-0 last:pb-0"
              >
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Hâlâ sorunuz mu var?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp&apos;tan Yazın
          </a>
        </div>
      </div>
    </div>
  );
}
