# VOXL 3D Web Sitesi - Proje Yapısı ve Kurulum Raporu

Bu proje **Next.js** framework'ü kullanılarak oluşturulmuştur. 

Bu rehber, projedeki dosyaların ne işe yaradığını, hangilerinin otomatik olarak hazır geldiğini ve hangilerinin manuel olarak yazıldığını açıklamak amacıyla hazırlanmıştır. Yani, **her şeyi sıfırdan tek tek yazmak zorunda değilsiniz**; Next.js size çok güçlü bir hazır altyapı sunar.

---

## 1. Otomatik Gelen (Hazır) Dosya ve Klasörler
Bir Next.js projesi başlattığınızda (`npx create-next-app` komutu ile), aşağıdaki dosyalar ve klasörler altyapıyı kurmak için **otomatik olarak** oluşturulur. İnsan olarak bunları sıfırdan yazmanıza gerek yoktur, framework sizin yerinize bu ayarları yapar.

* **`node_modules/`**: Projede kullanılan tüm dış kütüphanelerin ve hazır paketlerin indirildiği devasa klasördür. Elle dokunulmaz.
* **`package.json` & `package-lock.json`**: Projenizin kimlik kartıdır. Hangi kütüphanelerin kullanıldığını (React, Next.js, vs.) ve projeyi başlatma komutlarını (örn: `npm run dev`) tutar. Otomatik oluşur, sadece yeni kütüphane eklendiğinde güncellenir.
* **`.next/`**: Projeyi çalıştırdığınızda (build veya dev aşamasında) Next.js'in kendi kendine oluşturduğu geçici sistem dosyalarıdır. Gizlidir ve elle değiştirilmez.
* **`tsconfig.json` & `next-env.d.ts`**: TypeScript (gelişmiş JavaScript) ayarlarının tutulduğu dosyalardır. Otomatik oluşur.
* **`eslint.config.mjs`**: Kod yazarken hata yapmanızı engelleyen (kod standartlarını denetleyen) aracın ayar dosyasıdır.
* **`postcss.config.mjs` & `tailwind.config.ts`**: (Eğer kullanılıyorsa) CSS ve tasarım sistemlerinin otomatik ayar dosyalarıdır.
* **`.gitignore`**: Projenin GitHub gibi bulut sistemlerine yüklenirken hangi dosyaların (örneğin devasa node_modules klasörünün) *yüklenmemesi* gerektiğini söyler.

---

## 2. Sizin (İnsanların) Yazdığı Özel Dosya ve Klasörler
Aşağıdaki klasörler, uygulamanın asıl mantığını, tasarımını ve verilerini içerir. Hazır gelen taslağın üzerine **manuel olarak** sizin (veya geliştiricinin) kodladığı kısımlardır.

* **`app/` (Sayfalar ve Yönlendirme)**: Sitenin sayfalarının bulunduğu yerdir. Next.js'te klasör isimleri URL'leri belirler.
  * `app/page.tsx`: Ana sayfa (`/`).
  * `app/about/page.tsx`: Hakkımızda sayfası (`/about`).
  * `app/cart/page.tsx`: Sepet sayfası (`/cart`).
  * `app/layout.tsx`: Tüm sayfalarda ortak olan iskelet yapısıdır (Menü ve Footer genellikle buraya konur).
  * `app/globals.css`: Sitenin genel renk ve tasarım ayarlarının olduğu ana CSS dosyasıdır.
* **`components/` (Bileşenler)**: Tekrar tekrar kullanılan yap-boz parçalarıdır. Her sayfada sıfırdan menü yazmak yerine, `Header.tsx` bir kez buraya yazılır ve diğer sayfalarda çağrılır. (Örn: `ProductCard.tsx`, `Footer.tsx`).
* **`context/` (Durum Yönetimi)**: Sepetteki ürünler veya favoriye alınanlar gibi, sayfalar arası değişebilen *ortak verilerin* (State) hafızada tutulduğu yerdir. (Örn: `CartContext.tsx`).
* **`data/`**: Ürünlerin listesi gibi verilerin genellikle veritabanı yokken yazılı olarak tutulduğu JSON dosyalarıdır. (Örn: `products.json`).
* **`lib/` (Kütüphaneler/Fonksiyonlar)**: Projede kullanılan yardımcı fonksiyonların bulunduğu klasördür. (Örn: ürünleri filtreleyen bir kod bloğu).
* **`public/`**: Sitede kullanılan resimler, logolar, favicon gibi herkesin erişebileceği görsel ve medya dosyalarının tutulduğu klasördür.
* **`types/`**: TypeScript kullanıldığı için, verilerin (örneğin bir ürünün adı, fiyatı, id'si) hangi formatta olacağının kurallarının yazıldığı yerdir.

---

## Özet: Nasıl Kuruldu?

Bu proje sıfırdan boş bir klasör açılarak kodlanmadı.
1. İlk olarak Next.js altyapısı tek tıkla kurularak (`npx create-next-app` gibi) hazır temel mimari oluşturuldu.
2. Sonrasında, sitenin amacına yönelik sayfalar (`app/`), tasarımlar (`components/`) ve veriler (`data/`) geliştirici tarafından manuel olarak adım adım yazılarak bugünkü haline getirildi.

Bu yapı sayesinde, modern web geliştirmede sıfırdan her altyapıyı yazmak yerine, sadece size özel olan tasarıma ve özelliklere odaklanırsınız.

---

## Web Sitesini Nasıl Çalıştırabilirsiniz?

1. Terminali (Komut İstemi) açın ve projenin klasörüne (`VOXL/voxl-app`) gidin.
2. (Sadece ilk seferde) Kütüphaneleri indirmek için: `npm install`
3. Projeyi başlatmak için: `npm run dev`
4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.
