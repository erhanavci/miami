# Miami Workflow Deploy

## 1. Supabase kurulumu

Supabase Dashboard > SQL Editor içinde `supabase-schema.sql` dosyasındaki SQL'i çalıştır.

Ardından Authentication > Providers bölümünde Email provider'ın açık olduğundan emin ol.
İlk test için Authentication > Settings içinde email confirmation kapalı olabilir.

## 2. Lokal test

`index.html` dosyasını tarayıcıda aç.

Uygulama Supabase Auth, Database ve Storage kullanır. İlk üyelikten sonra Excel görevleri otomatik olarak `tasks` tablosuna eklenir.

## 3. Vercel deploy

Bu klasörü GitHub reposuna yükle.

Vercel'de:

1. Add New Project
2. GitHub reposunu seç
3. Framework Preset: Other
4. Build Command: `npm run build`
5. Output Directory: boş bırak
6. Deploy

Site kökü `/` isteğinde doğrudan `index.html` dosyası açılır.

## 4. Canlı test

Canlı URL açıldığında:

1. Üyelik oluştur
2. Giriş yap
3. Mart 2026 takviminde Excel görevlerini kontrol et
4. Bir görev oluşturup dosya/ses notu ekle
