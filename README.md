# Veri İşleme Süreçleri

## 1. Veri Toplama

Veri toplama, analiz sürecinin ilk aşamasıdır. Veriler farklı kaynaklardan elde edilebilir.

### Veri Kaynakları

Veriler genel olarak ikiye ayrılabilir:

- **Birincil veri:** Araştırmacının doğrudan kendisinin topladığı verilerdir. Anket, röportaj, gözlem ve sensör ölçümleri örnek olarak verilebilir.
- **İkincil veri:** Daha önce başka kişi veya kurumlar tarafından toplanmış verilerdir. İnternet siteleri, resmi kurumların veri setleri, mevcut veritabanları ve araştırma raporları örnek verilebilir.

### CSV / Excel Verileri

CSV ve Excel dosyaları, verilerin tablo şeklinde saklanması ve analiz edilmesi için sık kullanılan kaynaklardır.

Örneğin bir satış şirketinin Excel dosyasında:

| Ürün | Satış Adedi | Fiyat |
|---|---:|---:|
| Laptop | 15 | 25.000 TL |
| Telefon | 30 | 15.000 TL |
| Tablet | 20 | 10.000 TL |

Bu veriler daha sonra Python, Excel, Power BI gibi araçlarla analiz edilebilir.

### Veritabanları

Veritabanları, büyük miktardaki verilerin düzenli bir şekilde saklanmasını ve gerektiğinde sorgulanmasını sağlar.

SQL sorguları kullanılarak gerekli veriler çekilip analiz için kullanılabilir.

### API ile Veri Toplama

API, farklı yazılımların birbirleriyle iletişim kurmasını sağlayan bir arayüzdür. Bir uygulama, başka bir servisin API'sine istek göndererek veri alabilir.

Örneğin bir hava durumu API'sinden aşağıdaki gibi veri alınabilir:

```json
{
  "city": "bursa",
  "temperature": 18,
  "humidity": 65
}
```

### Sensör Verileri

Sensörler fiziksel ortamdan gerçek zamanlı olarak veri toplamak için kullanılır.

Örneğin:

- **Sıcaklık sensörü:** Sıcaklık
- **Nem sensörü:** Nem oranı
- **Hareket sensörü:** Hareket bilgisi
- **Işık sensörü:** Işık seviyesi
- **GPS:** Konum bilgisi

Örneğin bir IoT sisteminde, sıcaklık sensöründen her 10 saniyede bir veri alınarak veritabanına kaydedilebilir. Daha sonra bu veriler analiz edilerek ortam sıcaklığındaki değişimler incelenebilir.

### Kısaca

Veri toplama süreci şu şekilde düşünülebilir:

**Veri Kaynağı → Verinin Toplanması → Saklanması → Temizlenmesi → Analiz**

Örneğin:

**Sensör → ESP32 → Veritabanı → Python → Veri Analizi**

Bu nedenle veri toplama, veri analizinin ilk ve önemli aşamalarından biridir. Yanlış veya güvenilir olmayan verilerle yapılan analizlerin sonuçları da güvenilir olmayacaktır.

---

## 2. Veriyi Tanıma

Veriyi tanıma, bir veri setinin yapısını, içerdiği veri türlerini ve değişkenlerin özelliklerini inceleme sürecidir.

Veri analizine başlamadan önce verinin nasıl organize edildiğini anlamak, doğru analiz yöntemlerini seçmek açısından önemlidir.

### Satır ve Sütun Yapısı

Veri setleri genellikle satır ve sütunlardan oluşan tablolar şeklindedir.

- **Satır:** Veri setindeki bir gözlemi veya kaydı temsil eder.
- **Sütun:** Her kaydın belirli bir özelliğini veya değişkenini temsil eder.

Örneğin:

| Öğrenci | Yaş | Bölüm | Not |
|---|---:|---|---:|
| Ahmet | 21 | Bilgisayar | 85 |
| Mehmet | 22 | Elektrik | 72 |
| Ayşe | 20 | Bilgisayar | 90 |

Burada her satır bir öğrenciyi, sütunlar ise öğrencinin adı, yaşı, bölümü ve notunu göstermektedir.

### Veri Tipleri

Verilerin analiz sırasında hangi türde olduğunun bilinmesi gerekir.

Yaygın veri tipleri:

- **Integer (Tam sayı):** `10`, `25`, `100`
- **Float (Ondalıklı sayı):** `10.5`, `25.75`
- **String (Metin):** `"Ahmet"`, `"Bilgisayar"`
- **Boolean (Mantıksal):** `True / False`
- **Date/Time (Tarih/Saat):** `07.10.2026`, `09:30`

Örneğin bir öğrencinin yaşı integer, ortalaması float, bölümü string, mezuniyet durumu boolean olabilir.

### Sayısal Veriler

Sayısal (numerik) veriler, matematiksel işlemlerin yapılabildiği verilerdir.

Örnekler:

- Yaş: `22`
- Maaş: `35.000 TL`
- Sıcaklık: `24.5 °C`
- Ürün adedi: `150`
- Sınav notu: `85`

Sayısal veriler üzerinde ortalama, toplam, minimum, maksimum ve standart sapma gibi istatistiksel işlemler yapılabilir.

### Kategorik Veriler

Kategorik veriler, verileri belirli gruplara veya kategorilere ayıran verilerdir.

Örneğin:

- Cinsiyet: Kadın / Erkek
- Şehir: Bursa / İstanbul / Ankara
- Ürün türü: Telefon / Laptop / Tablet
- Eğitim durumu: Lise / Üniversite / Yüksek Lisans

Kategorik veriler genellikle doğrudan matematiksel işlemlerde kullanılmaz. Bunun yerine gruplama, frekans ve karşılaştırma işlemlerinde kullanılır.

### Kısaca

Veriyi tanıma aşamasında şu sorulara cevap aranır:

- Veri setinde kaç satır ve sütun var?
- Sütunların veri tipleri neler?
- Hangi sütunlar sayısal?
- Hangi sütunlar kategorik?
- Tarih veya metin gibi özel veri türleri var mı?

Bu inceleme yapıldıktan sonra veri temizleme ve analiz aşamasına geçilebilir.

---

## 3. Veri Temizleme

Veri temizleme, veri setindeki hatalı, eksik, tekrarlanan ve tutarsız verilerin tespit edilerek düzeltilmesi sürecidir.

### Eksik Veriler

Eksik veri, veri setinde bazı bilgilerin bulunmaması durumudur. Boş hücreler, `NULL` değerler veya bilinmeyen olarak işaretlenen alanlar eksik veri olarak değerlendirilebilir.

Örneğin:

| Öğrenci | Yaş | Bölüm | Not |
|---|---:|---|---:|
| Ahmet | 21 | Bilgisayar | 85 |
| Mehmet |  | Elektrik | 72 |
| Ayşe | 20 | Bilgisayar | 90 |

Bu örnekte Mehmet'in yaş bilgisi eksiktir.

Eksik veriler için:

- Eksik kayıt silinebilir.
- Ortalama veya medyan gibi bir değerle doldurulabilir.
- Eksik değer `"Bilinmiyor"` şeklinde bırakılabilir.
- Eksik verinin neden oluştuğu araştırılabilir.

### Tekrarlanan Kayıtlar

Aynı verinin veri setinde birden fazla kez bulunmasına **tekrarlanan kayıt (duplicate)** denir.

Örneğin:

| Öğrenci | Yaş | Bölüm |
|---|---:|---|
| Ahmet | 21 | Bilgisayar |
| Mehmet | 22 | Elektrik |
| Ahmet | 21 | Bilgisayar |

Burada Ahmet'in kaydı iki kez bulunmaktadır. Eğer bu kayıtlar aynı kişiye aitse gereksiz olan tekrar kayıt silinmelidir.

### Hatalı Değerler

Veri girişinde yapılan yanlışlıklar sonucunda hatalı değerler oluşabilir.

Örneğin:

| Öğrenci | Yaş | Not |
|---|---:|---:|
| Ahmet | 21 | 85 |
| Mehmet | 222 | 72 |
| Ayşe | 20 | 95 |

Burada Mehmet'in yaşının `222` olması gerçekçi değildir ve veri giriş hatası olabilir. Bu değer kontrol edilmeli ve doğru değerle düzeltilmelidir.

### Tutarsız Değerler

Aynı bilgilerin farklı biçimlerde yazılması veya birbirleriyle uyuşmayan değerlerin bulunması tutarsız veri olarak adlandırılır.

Örneğin:

```text
Şehir
Bursa
İstanbul
bursa
BURSA
İst.
```

Burada `"Bursa"`, `"bursa"` ve `"BURSA"` aynı şehri ifade etmektedir.

Analiz sırasında sorun yaşamamak için bu değerler tek bir standart biçime dönüştürülebilir.

Örneğin:

```text
Şehir
Bursa
İstanbul
Bursa
Bursa
İstanbul
```

### Kısaca

Veri temizleme aşamasında:

- **Eksik veriler:** Tespit edilir ve uygun yöntemle işlenir.
- **Tekrarlanan kayıtlar:** Kontrol edilir ve gereksiz tekrarlar kaldırılır.
- **Hatalı değerler:** Tespit edilir ve düzeltilir.
- **Tutarsız değerler:** Standart bir formata dönüştürülür.

Bu işlemler tamamlandıktan sonra veri seti daha düzenli, güvenilir ve analiz için uygun hale gelir.

---

## 4. Eksik Veri İşlemleri

Eksik veri, veri setinde bazı alanların boş veya bilinmeyen olması durumudur.

Eksik veriler analiz sonuçlarını etkileyebileceği için analizden önce uygun bir yöntemle ele alınmalıdır.

Kullanılacak yöntem, eksik verinin miktarına ve veri setinin yapısına göre değişir.

### Eksik Verilerin Silinmesi

Eksik veri içeren satır veya sütunların veri setinden kaldırılması yöntemidir.

Örneğin:

| Öğrenci | Yaş | Not |
|---|---:|---:|
| Ahmet | 21 | 85 |
| Mehmet |  | 72 |
| Ayşe | 20 | 90 |

Mehmet'in yaş bilgisi eksiktir. Eğer eksik kayıt sayısı çok azsa bu satır veri setinden silinebilir.

Bu yöntem, eksik veri oranının düşük olduğu durumlarda kullanılabilir. Ancak çok fazla veri silinirse veri setinin boyutu küçülür ve analiz sonuçları etkilenebilir.

### Eksik Verilerin Doldurulması

Eksik olan değerlerin, mevcut veriler kullanılarak uygun bir değerle tamamlanmasıdır. Bu işleme **eksik veri doldurma (imputation)** denir.

En yaygın yöntemler şunlardır:

#### Ortalama ile Doldurma

Sayısal verilerde eksik değerlerin sütundaki değerlerin ortalamasıyla doldurulmasıdır.

Örneğin:

```text
Notlar: 70, 80, ?, 90

Ortalama = (70 + 80 + 90) / 3
Ortalama = 80
```

Eksik değer `80` olarak doldurulabilir.

#### Medyan ile Doldurma

Eksik değer, sıralanmış verilerin ortanca değeri kullanılarak doldurulur.

Özellikle aykırı değerlerin bulunduğu veri setlerinde ortalamaya göre daha uygun olabilir.

#### Mod ile Doldurma

Kategorik verilerde en sık tekrar eden değer kullanılır.

Örneğin:

```text
Bölüm:
Bilgisayar
Elektrik
Bilgisayar
?
Bilgisayar
```

En sık tekrar eden bölüm `"Bilgisayar"` olduğu için eksik değer `"Bilgisayar"` olarak doldurulabilir.

### Önceki veya Sonraki Değerle Doldurma

Özellikle zaman sıralı verilerde eksik değerler, önceki veya sonraki değer kullanılarak doldurulabilir.

Örneğin:

| Tarih | Sıcaklık |
|---|---:|
| Pazartesi | 20°C |
| Salı | ? |
| Çarşamba | 22°C |

Salı günündeki eksik değer, önceki veya sonraki değerlere göre tahmin edilerek doldurulabilir.

### Kısaca

Eksik veri işlemlerinde temel olarak iki yaklaşım vardır:

- **Eksik veriyi silme:** Eksik kayıt veya sütun veri setinden kaldırılır.
- **Eksik veriyi doldurma:** Eksik değer; ortalama, medyan, mod veya önceki/sonraki değer gibi yöntemlerle tamamlanır.

Hangi yöntemin kullanılacağı; eksik verinin miktarına, veri türüne ve analiz amacına göre belirlenmelidir.

---

## 5. Aykırı Değerler

Aykırı değer, bir veri setindeki diğer değerlerden belirgin şekilde farklı olan ve veri setinin genel yapısından uzaklaşan değerdir.

Aykırı değerler:

- Ölçüm hatalarından
- Veri giriş hatalarından
- Gerçekten sıra dışı durumlardan

kaynaklanabilir.

### Aykırı Değer Örneği

Bir sınıftaki öğrencilerin sınav notları şu şekilde olsun:

```text
65, 70, 72, 75, 78, 80, 82, 95, 10
```

Burada `10`, diğer notlardan oldukça farklı olduğu için aykırı değer olabilir.

Ancak `10` değerinin gerçekten aykırı bir değer olup olmadığı kontrol edilmelidir. Öğrenci gerçekten 10 aldıysa bu değer silinmemelidir.

### Aykırı Değerlerin Tespiti

Aykırı değerleri belirlemek için çeşitli yöntemler kullanılabilir.

### IQR (Çeyrekler Arası Aralık) Yöntemi

IQR yöntemi, verinin alt ve üst çeyreklerini kullanarak aykırı değerleri belirler.

```text
IQR = Q3 - Q1

Alt sınır = Q1 - 1.5 × IQR

Üst sınır = Q3 + 1.5 × IQR
```

Bu sınırların dışında kalan değerler aykırı değer olarak değerlendirilebilir.

#### Örnek

Bir sınıftaki öğrencilerin sınav notları:

```text
40, 45, 50, 55, 60, 65, 70, 75, 100
```

Medyan değer `60` olduğundan alt ve üst yarılar ayrı değerlendirilir.

```text
Alt yarı:
40, 45, 50, 55

Q1 = (45 + 50) / 2
Q1 = 47,5
```

Üst yarı:

```text
65, 70, 75, 100

Q3 = (70 + 75) / 2
Q3 = 72,5
```

IQR hesaplaması:

```text
IQR = Q3 - Q1
IQR = 72,5 - 47,5
IQR = 25
```

Alt sınır:

```text
Q1 - 1.5 × IQR
47,5 - 1.5 × 25
47,5 - 37,5
= 10
```

Üst sınır:

```text
Q3 + 1.5 × IQR
72,5 + 1.5 × 25
72,5 + 37,5
= 110
```

Bu durumda normal kabul edilen aralık:

```text
10 ile 110
```

arasındadır.

`100` değeri bu aralık içerisinde olduğu için IQR yöntemine göre aykırı değer değildir.

### Z-Skoru Yöntemi

Bir değerin ortalamadan ne kadar uzak olduğunu ölçmek için kullanılır.

Genellikle Z-skoru `-3`'ten küçük veya `+3`'ten büyük olan değerler aykırı değer olarak incelenir.

Örneğin:

```text
Ortalama = 50
Standart sapma = 10
Değer = 55
```

Formül:

```text
Z = (Değer - Ortalama) / Standart Sapma

Z = (55 - 50) / 10
Z = 0,5
```

`0,5` değeri `-3` ile `+3` arasında olduğu için aykırı değer olarak değerlendirilmez.

### Kısaca

- **IQR yöntemi:** Verinin çeyreklerine göre alt ve üst sınır belirler.
- **Z-Skoru yöntemi:** Bir değerin ortalamadan kaç standart sapma uzaklıkta olduğunu hesaplar.

> **Önemli:** Bir değer aykırı olarak tespit edildiğinde hemen silinmemelidir. Öncelikle bu değerin gerçekten hatalı mı yoksa gerçek bir durum mu olduğu araştırılmalıdır.

---

## 6. Veri Dönüştürme

Veri dönüştürme, veri setindeki bilgilerin analiz veya makine öğrenmesi için daha uygun bir forma getirilmesi işlemidir.

Farklı kaynaklardan gelen veriler farklı formatlarda olabilir. Bu nedenle analizden önce verilerin uygun bir biçime dönüştürülmesi gerekebilir.

### Veri Tipi Dönüşümü

Verilerin sahip olduğu veri tipinin değiştirilmesidir.

Örneğin metin olarak bulunan bir sayı, matematiksel işlemler yapılabilmesi için sayısal veri tipine dönüştürülebilir.

Örneğin:

```text
"21"
"25"
"30"
```

Bu değerler metin olarak tutuluyorsa:

```text
21
25
30
```

şeklinde sayısal veri tipine dönüştürülebilir.

### Tarih Verilerinin Dönüştürülmesi

Tarih verileri analiz edilebilmesi için standart bir tarih formatına dönüştürülebilir.

Örneğin:

```text
07/10/2026
07-10-2026
2026.10.07
```

gibi farklı formatlarda bulunan tarihler tek bir formata dönüştürülebilir:

```text
2026-10-07
```

Tarih verileri ayrıca yıl, ay, gün veya haftanın günü gibi ayrı değişkenlere dönüştürülebilir.

Örneğin:

```text
2026-10-07

→ Yıl: 2026
→ Ay: 10
→ Gün: 7
→ Gün: Çarşamba
```

Bu sayede satışların hangi ayda veya hangi günlerde daha fazla olduğu analiz edilebilir.

### Kategorik Verilerin Dönüştürülmesi

Kategorik veriler, bazı analiz ve makine öğrenmesi algoritmalarında doğrudan kullanılamaz. Bu nedenle sayısal değerlere dönüştürülebilir.

Örneğin:

```text
Cinsiyet:
Erkek
Kadın
```

şeklindeki veriler:

```text
Erkek → 0
Kadın → 1
```

şeklinde kodlanabilir.

Birden fazla kategori olduğunda **One-Hot Encoding** kullanılabilir.

Örneğin:

```text
Şehir:
Bursa
İstanbul
Ankara
```

şu şekilde dönüştürülebilir:

| Bursa | İstanbul | Ankara |
|---:|---:|---:|
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 1 |

### Normalizasyon

Normalizasyon, sayısal verilerin belirli bir aralığa, genellikle `0` ile `1` arasına dönüştürülmesidir.

Örneğin:

```text
Minimum değer = 10
Maksimum değer = 100
Değer = 50
```

Min-Max normalizasyon formülü:

```text
(Değer - Minimum) / (Maksimum - Minimum)
```

Hesaplama:

```text
(50 - 10) / (100 - 10)
= 40 / 90
≈ 0,44
```

Yani `50` değeri normalizasyon sonucunda yaklaşık `0,44` olur.

Normalizasyon özellikle değişkenlerin farklı ölçeklerde olduğu durumlarda kullanılabilir.

### Standardizasyon

Standardizasyon, verilerin ortalamasının `0`, standart sapmasının ise `1` olacak şekilde dönüştürülmesidir.

Örneğin:

```text
Ortalama = 50
Standart sapma = 10
Değer = 70
```

Formül:

```text
Z = (Değer - Ortalama) / Standart Sapma

Z = (70 - 50) / 10
Z = 2
```

Sonuç `2` olur. Bu, `70` değerinin ortalamadan 2 standart sapma uzaklıkta olduğunu gösterir.

### Kısaca

- **Veri tipi dönüşümü:** Verinin uygun veri tipine çevrilmesi.
- **Tarih dönüşümü:** Tarihlerin standartlaştırılması ve yıl, ay, gün gibi parçalara ayrılması.
- **Kategorik dönüşüm:** Metinsel kategorilerin sayısal forma dönüştürülmesi.
- **Normalizasyon:** Verilerin genellikle `0-1` aralığına getirilmesi.
- **Standardizasyon:** Verilerin ortalamasının `0`, standart sapmasının `1` olacak şekilde dönüştürülmesi.

Bu işlemler sonucunda veri seti analiz ve makine öğrenmesi modelleri için daha uygun hale getirilir.

---

## 7. Veri Birleştirme

Veri birleştirme, farklı tablolarda veya veri kaynaklarında bulunan bilgilerin ortak bir alan kullanılarak tek bir veri setinde bir araya getirilmesi işlemidir.

Veri analizinde gerekli bilgilerin farklı tablolarda bulunması durumunda kullanılır.

### Ortak Anahtar (Key) Kullanımı

İki veya daha fazla tabloyu birleştirmek için tablolarda ortak bulunan bir sütun kullanılır. Bu sütuna **ortak anahtar (key)** denir.

Örneğin iki farklı tablomuz olsun.

#### Müşteriler Tablosu

| Müşteri_ID | Ad | Şehir |
|---:|---|---|
| 101 | Ahmet | Bursa |
| 102 | Mehmet | İstanbul |
| 103 | Ayşe | Ankara |

#### Siparişler Tablosu

| Sipariş_ID | Müşteri_ID | Tutar |
|---:|---:|---:|
| 1 | 101 | 500 |
| 2 | 103 | 750 |
| 3 | 102 | 300 |

Burada `Müşteri_ID` her iki tabloda da bulunduğu için ortak anahtar olarak kullanılabilir.

### Join İşlemi

SQL'de tabloları birleştirmek için `JOIN` kullanılır.

### Veri Birleştirme Ne Zaman Gerekli Olur?

Veriler her zaman tek bir tabloda tutulmaz. Özellikle veritabanlarında bilgiler farklı tablolar halinde tutulur.

Örneğin bir e-ticaret sisteminde:

- Müşterilerin bilgileri bir tabloda,
- Siparişlerin bilgileri başka bir tabloda tutulabilir.

Bunun nedeni verileri düzenli tutmak ve aynı bilgileri tekrar tekrar yazmaktan kaçınmaktır.

Ancak bir analiz yapmak istediğimizde bu iki tablodaki bilgilere aynı anda ihtiyaç duyabiliriz.

Örneğin:

> "Hangi müşteri ne kadar alışveriş yaptı?"

sorusunu cevaplamak istiyoruz.

Müşterinin adı `Musteriler` tablosunda, yaptığı alışverişin tutarı ise `Siparisler` tablosunda bulunuyor.

Bu nedenle iki tabloyu `Müşteri_ID` üzerinden birleştirmemiz gerekir.

### Birleştirme Örneği

```sql
SELECT *
FROM Musteriler
JOIN Siparisler
ON Musteriler.Musteri_ID = Siparisler.Musteri_ID;
```

Bu işlem sonucunda müşterilerin bilgileri ile sipariş bilgileri aynı tabloda birleştirilebilir.

### Sonuç

| Müşteri_ID | Ad | Şehir | Sipariş_ID | Tutar |
|---:|---|---|---:|---:|
| 101 | Ahmet | Bursa | 1 | 500 |
| 103 | Ayşe | Ankara | 2 | 750 |
| 102 | Mehmet | İstanbul | 3 | 300 |

### JOIN Türleri

En yaygın `JOIN` türleri:

- **INNER JOIN:** Her iki tabloda da eşleşen kayıtları getirir.
- **LEFT JOIN:** Sol tablodaki tüm kayıtları ve sağ tabloda eşleşen kayıtları getirir.
- **RIGHT JOIN:** Sağ tablodaki tüm kayıtları ve sol tabloda eşleşen kayıtları getirir.
- **FULL JOIN:** Her iki tablodaki tüm kayıtları getirir ve eşleşen kayıtları birleştirir.

### Merge İşlemi

Python'da özellikle Pandas kütüphanesi kullanılarak veri tabloları `merge()` fonksiyonu ile birleştirilebilir.

Örneğin:

```python
sonuc = pd.merge(musteriler, siparisler, on="Musteri_ID")
```

Burada `Musteri_ID`, iki veri setinin ortak anahtarıdır.

### Neden Veri Birleştirilir?

Veriler farklı kaynaklarda veya farklı tablolarda tutulabilir.

Birleştirme işlemi sayesinde bu bilgiler tek bir veri setinde toplanarak daha kapsamlı analiz yapılabilir.

Örneğin:

**Müşteri bilgileri + Sipariş bilgileri → Müşteri bazlı satış analizi**

Bu sayede:

- Hangi müşterinin ne kadar alışveriş yaptığı,
- Hangi şehirde daha fazla satış gerçekleştiği,
- Müşteri başına ortalama sipariş tutarı

gibi analizler yapılabilir.

### Kısaca

**Farklı tablolar → Ortak anahtar → JOIN / MERGE → Birleştirilmiş veri seti → Analiz**

---

## 8. Analize Hazırlama

Analize hazırlama, veri temizleme ve dönüştürme işlemleri tamamlandıktan sonra veri setinin analiz yapmaya uygun olup olmadığının kontrol edilmesi ve verinin genel özelliklerinin incelenmesi sürecidir.

Bu aşamada temel istatistikler incelenerek veri setinin genel yapısı anlaşılır.

### 1. Temel İstatistiklerin İncelenmesi

Sayısal veriler için bazı temel istatistikler hesaplanır:

- **Ortalama (Mean):** Verilerin toplamının veri sayısına bölünmesiyle bulunur.
- **Medyan (Median):** Sıralanmış verilerin ortasında bulunan değerdir.
- **Minimum:** Veri setindeki en küçük değerdir.
- **Maksimum:** Veri setindeki en büyük değerdir.
- **Standart sapma:** Verilerin ortalamadan ne kadar uzaklaştığını gösterir.
- **Toplam:** Tüm değerlerin toplamıdır.
- **Sayım (Count):** Veri setinde kaç kayıt bulunduğunu gösterir.

Örneğin bir öğrencinin sınav notları:

```text
60, 70, 75, 80, 90
```

Ortalama:

```text
(60 + 70 + 75 + 80 + 90) / 5 = 75
```

Bu veri setinin ortalaması `75`'tir.

### 2. Veri Dağılımının İncelenmesi

Verilerin nasıl dağıldığı kontrol edilir.

Örneğin:

- Veriler birbirine yakın mı?
- Çok düşük veya çok yüksek değerler var mı?
- Aykırı değer bulunuyor mu?
- Verilerin genel eğilimi nasıl?

Bu inceleme sayesinde veri setinde daha önce fark edilmeyen problemler tespit edilebilir.

### 3. Kategorik Verilerin İncelenmesi

Kategorik verilerde hangi kategorinin ne sıklıkta tekrarlandığı incelenebilir.

Örneğin:

```text
Bölüm
Bilgisayar
Elektrik
Bilgisayar
Makine
Bilgisayar
```

Burada:

```text
Bilgisayar → 3
Elektrik   → 1
Makine     → 1
```

şeklinde bir frekans dağılımı elde edilir.

### 4. Verinin Analize Hazır Hale Getirilmesi

Bu aşamaya gelindiğinde daha önce yapılan işlemler tekrar kontrol edilir:

| Kontrol | Durum |
|---|---|
| Eksik veriler | Kontrol edildi |
| Tekrarlanan kayıtlar | Kontrol edildi |
| Hatalı değerler | Düzeltildi |
| Aykırı değerler | Değerlendirildi |
| Veri tipleri | Düzenlendi |
| Kategorik veriler | Dönüştürüldü |
| Tablolar | Birleştirildi |

Son olarak veri setinin analiz için uygun olup olmadığı kontrol edilir.

### Kısaca

**Ham veri → Temizleme → Dönüştürme → Birleştirme → Temel istatistikler → Analize hazır veri**

---

## 9. Veri Görselleştirme

Veri görselleştirme, veri setindeki bilgilerin grafik ve görsel öğeler kullanılarak daha kolay anlaşılmasını sağlayan işlemdir.

Büyük miktardaki verileri yalnızca tablo halinde incelemek yerine grafiklerle göstermek, veriler arasındaki ilişkileri ve değişimleri daha kolay fark etmemizi sağlar.

### 1. Bar Chart (Çubuk Grafik)

Bar chart, farklı kategorilerdeki değerleri karşılaştırmak için kullanılır.

Örneğin bir mağazanın ürün satışları:

| Ürün | Satış |
|---|---:|
| Laptop | 50 |
| Telefon | 80 |
| Tablet | 35 |
| Kulaklık | 65 |

Bu veriler çubuk grafikle gösterildiğinde hangi ürünün daha fazla veya daha az sattığı kolayca görülebilir.

#### Kullanım Alanları

- Ürün satışlarını karşılaştırma
- Şehirlerin nüfuslarını karşılaştırma
- Departmanların çalışan sayılarını karşılaştırma
- Kategorilerin frekanslarını gösterme

**Kısaca:** Kategoriler arasındaki karşılaştırmalar için kullanılır.

### 2. Line Chart (Çizgi Grafik)

Line chart, bir değerin zaman içerisinde nasıl değiştiğini göstermek için kullanılır.

Örneğin bir mağazanın aylık satışları:

| Ay | Satış |
|---|---:|
| Ocak | 100 |
| Şubat | 120 |
| Mart | 150 |
| Nisan | 130 |
| Mayıs | 180 |

Çizgi grafik sayesinde satışların zaman içerisinde arttığı, azaldığı veya dalgalandığı kolayca görülebilir.

#### Kullanım Alanları

- Günlük sıcaklık değişimi
- Aylık satışlar
- Hisse senedi fiyatları
- Yıllara göre nüfus değişimi
- Web sitesi ziyaretçi sayısı

**Kısaca:** Zaman içerisindeki değişim ve trendleri göstermek için kullanılır.

### 3. Histogram

Histogram, sayısal verilerin hangi aralıklarda yoğunlaştığını göstermek için kullanılır.

Örneğin bir sınıftaki öğrencilerin sınav notları:

| Not Aralığı | Öğrenci Sayısı |
|---|---:|
| 0-20 | 1 |
| 21-40 | 2 |
| 41-60 | 5 |
| 61-80 | 12 |
| 81-100 | 10 |

Histogram sayesinde öğrencilerin notlarının hangi aralıkta yoğunlaştığı görülebilir.

#### Kullanım Alanları

- Sınav notlarının dağılımı
- Yaş dağılımı
- Maaş dağılımı
- Ürün fiyatlarının dağılımı
- Ölçüm sonuçlarının dağılımı

**Kısaca:** Sayısal verilerin dağılımını ve yoğunluğunu göstermek için kullanılır.

### 4. Scatter Plot (Serpilme Grafiği)

Scatter plot, iki sayısal değişken arasındaki ilişkiyi incelemek için kullanılır.

Örneğin öğrencilerin çalışma süresi ile sınav notları:

| Çalışma Saati | Sınav Notu |
|---:|---:|
| 2 | 50 |
| 3 | 55 |
| 4 | 65 |
| 5 | 75 |
| 6 | 85 |

Bu veriler scatter plot ile gösterildiğinde çalışma süresi arttıkça sınav notunun da artıp artmadığı görülebilir.

#### Kullanım Alanları

- Çalışma süresi ↔ Sınav notu
- Reklam harcaması ↔ Satış
- Boy ↔ Kilo
- Ev fiyatı ↔ Ev büyüklüğü
- Sıcaklık ↔ Elektrik tüketimi

**Kısaca:** İki sayısal değişken arasındaki ilişkiyi veya korelasyonu incelemek için kullanılır.

### Grafiklerin Kısaca Karşılaştırılması

| Grafik | Temel Kullanım Alanı |
|---|---|
| Bar Chart | Kategorileri karşılaştırmak |
| Line Chart | Zaman içerisindeki değişimi göstermek |
| Histogram | Sayısal verilerin dağılımını göstermek |
| Scatter Plot | İki sayısal değişken arasındaki ilişkiyi göstermek |

### Özet

Hangi grafiğin kullanılacağı, eldeki verinin türüne ve neyi göstermek istediğimize göre belirlenir.

- **Bar chart:** Karşılaştırma
- **Line chart:** Zaman içindeki değişim
- **Histogram:** Dağılım
- **Scatter plot:** Değişkenler arasındaki ilişki

---

# 10. Ham Veriden Analize Hazır Veriye Geçiş Süreci

```text
HAM VERİ
   ↓
Veri Toplama
   ↓
Veriyi Tanıma
   ↓
Veri Temizleme
   ↓
Eksik Verileri İşleme
   ↓
Aykırı Değerleri Tespit Etme
   ↓
Veri Dönüştürme
   ↓
Veri Birleştirme
   ↓
Temel İstatistikleri İnceleme
   ↓
Veriyi Kontrol Etme
   ↓
ANALİZE HAZIR VERİ
   ↓
Veri Analizi
   ↓
Veri Görselleştirme
```

## Adımların Kısa Açıklaması

### 1. Veri Toplama

CSV, Excel, veritabanı, API veya sensör gibi kaynaklardan veriler toplanır.

### 2. Veriyi Tanıma

Satır ve sütun yapısı, veri tipleri, sayısal ve kategorik değişkenler incelenir.

### 3. Veri Temizleme

Hatalı, tekrarlanan ve tutarsız kayıtlar tespit edilerek düzeltilir.

### 4. Eksik Verileri İşleme

Eksik veriler silinir veya ortalama, medyan, mod gibi yöntemlerle doldurulur.

### 5. Aykırı Değerleri Tespit Etme

IQR veya Z-skoru gibi yöntemlerle normalden çok farklı değerler belirlenir ve değerlendirilir.

### 6. Veri Dönüştürme

Veri tipleri düzenlenir, kategorik veriler sayısallaştırılır, normalizasyon veya standardizasyon uygulanır.

### 7. Veri Birleştirme

Farklı tablolardaki veriler ortak anahtar kullanılarak JOIN veya Merge işlemleriyle birleştirilir.

### 8. Temel İstatistikleri İnceleme

Ortalama, medyan, minimum, maksimum ve standart sapma gibi değerler incelenir.

### 9. Veriyi Kontrol Etme

Yapılan işlemlerden sonra veri setinin doğru, tutarlı ve analiz için uygun olup olmadığı kontrol edilir.

### 10. Analize Hazır Veri

Tüm kontroller tamamlandıktan sonra veri, analiz ve görselleştirme işlemlerinde kullanılabilecek hale gelir.

---

## Sonuç

Ham verinin doğrudan analiz edilmesi çoğu zaman doğru sonuçlar vermeyebilir. Bu nedenle veri analizinden önce verinin toplanması, tanınması, temizlenmesi, eksik ve aykırı değerlerin değerlendirilmesi, dönüştürülmesi ve gerekli durumlarda farklı veri kaynaklarının birleştirilmesi gerekir.

Bu işlemler tamamlandıktan sonra veri seti analiz için hazır hale gelir.

**Genel süreç:**

```text
Ham Veri
   ↓
Veri Toplama
   ↓
Veriyi Tanıma
   ↓
Veri Temizleme
   ↓
Eksik Verileri İşleme
   ↓
Aykırı Değerleri İnceleme
   ↓
Veri Dönüştürme
   ↓
Veri Birleştirme
   ↓
Temel İstatistikleri İnceleme
   ↓
Son Kontrol
   ↓
Analize Hazır Veri
   ↓
Analiz ve Görselleştirme
```
