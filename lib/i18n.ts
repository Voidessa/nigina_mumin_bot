export type Language = 'ru' | 'uz' | 'en';

export const LANGUAGES: { code: Language; label: string }[] = [
    { code: 'ru', label: '🇷🇺 Русский' },
    { code: 'uz', label: '🇺🇿 O\'zbekcha' },
    { code: 'en', label: '🇺🇸 English' }
];

const TRANSLATIONS = {
    ru: {
        intro_select_language: '👋 Привет! Выберите язык, чтобы продолжить:',
        language_selected: '✅ Язык выбран: Русский',
        subscribe_request: 'Чтобы получить доступ к материалам, подпишись на мой канал. Там я делюсь секретами блогинга, личного бренда и охватов.',
        btn_subscribe: 'Подписаться на канал',
        btn_check_sub: '✅ Я подписался',
        not_subscribed: '❌ Вы еще не подписались на канал.',
        sub_confirmed: '✅ Подписка подтверждена!',
        welcome_message: `✨ *Поздравляю! Подписка успешно подтверждена.*

Привет! Я Нигина Мумин, основательница Influence Academy. Я рада, что ты сделала первый шаг к изменению своей жизни.

Блогинг — это не просто выкладывание красивых картинок. Это мощный инструмент влияния, обретения независимости и создания личного бренда, который работает на тебя 24/7. Мои блоги набрали суммарно более **150 миллионов охвата**, и я знаю каждый шаг этого пути.

Специально для тебя я приготовила бесплатный 3-дневный живой интенсив, на котором мы разберем:
🔥 Как найти свою уникальность и сделать распаковку личности.
🔥 Секреты создания Reels, которые залетают на миллионы просмотров.
🔥 Стратегию ведения блога, актуальную на 2026 год.

*Выбери действие ниже, чтобы начать:*`,
        btn_watch_excerpt: '🎬 Посмотреть бесплатный отрывок интенсива по заработку на своем блоге в Instagram',
        btn_go_to_site: '🌐 Перейти на сайт Influence Academy',
        excerpt_placeholder_message: `🎥 *Бесплатный отрывок интенсива:*

Здесь скоро появится видео-урок о том, как начать зарабатывать на своем блоге в Instagram и привлекать клиентов без бюджета. 

А пока переходи на наш сайт по кнопке выше, чтобы изучить подробную программу и забронировать место!`
    },
    uz: {
        intro_select_language: '👋 Salom! Davom etish uchun tilni tanlang:',
        language_selected: '✅ Til tanlandi: O\'zbekcha',
        subscribe_request: 'Materiallardan foydalanish uchun kanalimga obuna bo\'ling. U yerda men blogerlik, shaxsiy brend va qamrovlarni oshirish sirlari bilan bo\'lishaman.',
        btn_subscribe: 'Kanalga obuna bo\'lish',
        btn_check_sub: '✅ Obuna bo\'ldim',
        not_subscribed: '❌ Siz hali kanalga obuna bo\'lmadingiz.',
        sub_confirmed: '✅ Obuna tasdiqlandi!',
        welcome_message: `✨ *Tabriklaymiz! Obuna muvaffaqiyatli tasdiqlandi.*

Salom! Men Nigina Mumin, Influence Academy asoschisiman. Hayotingizni o'zgartirish yo'lidagi birinchi qadamni qo'yganingizdan xursandman.

Blog yuritish — shunchaki chiroyli rasmlar yuklash emas. Bu ta'sir o'tkazish, moliyaviy mustaqillikka erishish va siz uchun 24/7 ishlaydigan shaxsiy brendni yaratishning kuchli vositasidir. Mening bloglarim jami **150 milliondan ortiq qamrov** (reach) to'plagan va men bu yo'lning har bir qadamini bilaman.

Siz uchun maxsus bepul 3 kunlik jonli intensiv tayyorladim, unda quyidagilarni tahlil qilamiz:
🔥 Shaxsingizni ochish (raspakovka) va o'ziga xosligingizni topish.
🔥 Millionlab ko'rishlar keltiradigan Reels yaratish sirlari.
🔥 2026-yil uchun dolzarb bo'lgan blog yuritish strategiyasi.

*Boshlash uchun quyidagi harakatlardan birini tanlang:*`,
        btn_watch_excerpt: '🎬 Instagramda blog orqali daromad topish haqidagi intensivdan bepul lavha',
        btn_go_to_site: '🌐 Influence Academy saytiga o\'tish',
        excerpt_placeholder_message: `🎥 *Intensivdan bepul lavha:*

Tez orada bu yerda Instagram blogingiz orqali daromad topish va pulsiz mijozlarni jalb qilish haqidagi video-darslik paydo bo'ladi.

Unga qadar batafsil dasturni o'rganish va o'z joyingizni band qilish uchun yuqoridagi tugma orqali saytimizga o'ting!`
    },
    en: {
        intro_select_language: '👋 Hello! Select a language to continue:',
        language_selected: '✅ Language selected: English',
        subscribe_request: 'To get access to materials, subscribe to my channel. I share secrets of blogging, personal brand, and reach.',
        btn_subscribe: 'Subscribe to Channel',
        btn_check_sub: '✅ I have subscribed',
        not_subscribed: '❌ You have not subscribed to the channel yet.',
        sub_confirmed: '✅ Subscription confirmed!',
        welcome_message: `✨ *Congratulations! Your subscription has been successfully verified.*

Hello! I am Nigina Mumin, founder of Influence Academy. I am glad you have taken the first step towards changing your life.

Blogging is not just about posting pretty pictures. It is a powerful tool of influence, financial independence, and creating a personal brand that works for you 24/7. My blogs have reached a combined total of **over 150 million reach**, and I know every step of this journey.

Specially for you, I have prepared a free 3-day live intensive where we will cover:
🔥 How to find your uniqueness and complete your personality unpacking.
🔥 Secrets of creating Reels that hit millions of views.
🔥 Blog strategy relevant for 2026.

*Select an option below to start:*`,
        btn_watch_excerpt: '🎬 Watch free excerpt of the intensive on earning on your Instagram blog',
        btn_go_to_site: '🌐 Go to Influence Academy Website',
        excerpt_placeholder_message: `🎥 *Free Intensive Excerpt:*

A video lesson on how to start earning from your Instagram blog and attracting clients without a budget will appear here soon.

In the meantime, head over to our website using the button above to study the detailed program and book your spot!`
    }
};

export function t(key: keyof typeof TRANSLATIONS.ru, language: string): string {
    const lang = (language in TRANSLATIONS) ? language as Language : 'ru';
    return TRANSLATIONS[lang][key] || TRANSLATIONS['ru'][key];
}
