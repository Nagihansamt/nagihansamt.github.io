# EmailJS Kurulum Talimatları

Bu dosya, portfolio sitenizde e-posta gönderimi için EmailJS kurulumunu açıklar.

## EmailJS Nedir?

EmailJS, JavaScript kullanarak e-posta göndermenizi sağlayan ücretsiz bir servistir. E-posta uygulaması açmadan doğrudan web sitenizden e-posta gönderebilirsiniz.

## Kurulum Adımları

### 1. EmailJS Hesabı Oluşturun
- [EmailJS.com](https://www.emailjs.com/) adresine gidin
- "Sign Up" butonuna tıklayın
- Ücretsiz hesap oluşturun

### 2. E-posta Servisi Ekleyin
- Dashboard'da "Email Services" sekmesine gidin
- "Add New Service" butonuna tıklayın
- Gmail, Outlook veya diğer e-posta sağlayıcılarınızdan birini seçin
- E-posta bilgilerinizi girin ve bağlantıyı test edin

### 3. E-posta Şablonu Oluşturun
- "Email Templates" sekmesine gidin
- "Create New Template" butonuna tıklayın
- Şablon adı: "Portfolio Contact"
- HTML içeriği:
```html
<h2>Portfolio İletişim Formu</h2>
<p><strong>Gönderen:</strong> {{from_name}}</p>
<p><strong>E-posta:</strong> {{from_email}}</p>
<p><strong>Konu:</strong> {{subject}}</p>
<p><strong>Mesaj:</strong></p>
<p>{{message}}</p>
```

### 4. Kodunuzu Güncelleyin

`script.js` dosyasında aşağıdaki değerleri değiştirin:

```javascript
// 1. Public Key'i değiştirin
emailjs.init("YOUR_PUBLIC_KEY"); // Dashboard'dan alacağınız public key

// 2. Service ID ve Template ID'yi değiştirin
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### 5. Gerekli Bilgileri Bulun

**Public Key:**
- Dashboard'da "Account" sekmesine gidin
- "API Keys" bölümünde "Public Key" değerini kopyalayın

**Service ID:**
- "Email Services" sekmesinde oluşturduğunuz servisin ID'sini kopyalayın

**Template ID:**
- "Email Templates" sekmesinde oluşturduğunuz şablonun ID'sini kopyalayın

### 6. Örnek Kod

Güncellenmiş kodunuz şu şekilde olmalı:

```javascript
// Initialize EmailJS
(function() {
  emailjs.init("abc123def456ghi789"); // Sizin public key'iniz
})();

// Form submission
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Test Etme

1. Sitenizi açın
2. İletişim formunu doldurun
3. "Mesaj Gönder" butonuna tıklayın
4. E-posta adresinizi kontrol edin

## Ücretsiz Plan Sınırlamaları

- Aylık 200 e-posta gönderimi
- Günlük 50 e-posta gönderimi
- Temel e-posta şablonları

## Sorun Giderme

**E-posta gelmiyor:**
- Spam klasörünü kontrol edin
- E-posta servisi ayarlarını kontrol edin
- Console'da hata mesajlarını kontrol edin

**JavaScript hatası:**
- Public key, service ID ve template ID'nin doğru olduğundan emin olun
- EmailJS kütüphanesinin yüklendiğinden emin olun

## Güvenlik

- Public key'inizi paylaşmayın
- E-posta şablonlarınızı güvenli tutun
- Rate limiting'e dikkat edin

## Destek

Sorun yaşarsanız:
- EmailJS dokümantasyonunu inceleyin
- EmailJS destek ekibiyle iletişime geçin
- Console hatalarını kontrol edin 