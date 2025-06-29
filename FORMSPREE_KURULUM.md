# Formspree Kurulum Talimatları

## 🔧 Formspree Kurulumu (Adım Adım)

### 1. Formspree Hesabı Oluşturun
1. https://formspree.io adresine gidin
2. "Get Started" butonuna tıklayın
3. E-posta adresinizi girin: `nagihansamut0@gmail.com`
4. Şifre oluşturun
5. Hesabınızı onaylayın

### 2. Yeni Form Oluşturun
1. Dashboard'da "New Form" butonuna tıklayın
2. Form adını girin: "Portfolio Contact"
3. E-posta adresinizi girin: `nagihansamut0@gmail.com`
4. "Create Form" butonuna tıklayın

### 3. Form ID'sini Kopyalayın
1. Oluşturulan formun sayfasına gidin
2. "Form Endpoint" kısmında şuna benzer bir URL göreceksiniz:
   ```
   https://formspree.io/f/xpzgwvzg
   ```
3. `xpzgwvzg` kısmını kopyalayın (bu sizin form ID'niz)

### 4. HTML Dosyasını Güncelleyin
1. `index.html` dosyasını açın
2. İletişim formunu bulun (yaklaşık 150. satır)
3. Şu satırı bulun:
   ```html
   <form class="contact-form" id="contactForm">
   ```
4. Bu satırı şu şekilde değiştirin:
   ```html
   <form class="contact-form" action="https://formspree.io/f/SIZIN_FORM_ID_NIZ" method="POST" id="contactForm">
   ```
5. `SIZIN_FORM_ID_NIZ` kısmını kopyaladığınız ID ile değiştirin

### 5. JavaScript Dosyasını Güncelleyin
1. `script.js` dosyasını açın
2. İletişim formu kısmını bulun
3. Mevcut kodu şu kodla değiştirin:

```javascript
// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Gönderiliyor...';
    submitButton.disabled = true;
    
    // Send form data to Formspree
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Success
        submitButton.textContent = 'Mesaj Gönderildi!';
        submitButton.style.background = '#10b981';
        
        // Reset form
        this.reset();
        
        // Show success message
        showNotification('Mesajınız başarıyla gönderildi! E-posta adresinize iletilecek.', 'success');
      } else {
        // Error
        throw new Error('Gönderim başarısız');
      }
    })
    .catch(error => {
      // Error handling
      submitButton.textContent = 'Hata Oluştu!';
      submitButton.style.background = '#ef4444';
      showNotification('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.', 'error');
    })
    .finally(() => {
      // Reset button after 3 seconds
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.background = '';
      }, 3000);
    });
  });
}
```

### 6. E-posta Onayını Yapın
1. Formspree'den gelen onay e-postasını kontrol edin
2. E-postadaki "Confirm Email" butonuna tıklayın
3. Artık form mesajları doğrudan e-posta adresinize gelecek

### 7. Test Edin
1. Sitenizi açın
2. İletişim formunu doldurun
3. "Mesaj Gönder" butonuna tıklayın
4. E-posta adresinizi kontrol edin

## 🚨 Önemli Notlar

- Formspree ücretsiz planında aylık 50 mesaj sınırı vardır
- Form ID'si benzersizdir, kimseyle paylaşmayın
- E-posta onayı yapmadan form çalışmaz
- Spam koruması otomatik olarak aktif olur

## 🔍 Sorun Giderme

### "Hata Oluştu" Mesajı Alıyorsanız:
1. Form ID'sinin doğru olduğundan emin olun
2. E-posta onayını yaptığınızdan emin olun
3. Formspree dashboard'da formun aktif olduğunu kontrol edin

### Mesaj Gelmiyorsa:
1. Spam klasörünüzü kontrol edin
2. Formspree dashboard'da mesajları kontrol edin
3. E-posta adresinizin doğru olduğundan emin olun

## 📞 Destek

Formspree ile ilgili sorunlar için:
- Formspree Destek: https://formspree.io/support
- E-posta: nagihansamut0@gmail.com 