
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
        subscribe_request: 'Чтобы получить доступ к бесплатному отрывку интенсива, подпишитесь на мой канал.',
        btn_subscribe: 'Подписаться на канал',
        btn_check_sub: '✅ Я подписалась',
        not_subscribed: '❌ Вы еще не подписались на канал.',
        sub_confirmed: '✅ Подписка подтверждена!',
        welcome_message: `Привет! Я Нигина Мумин — твой проводник в мир успешного блогинга и высоких доходов через Инстаграм!

Если ты хочешь:
✨ Монетизировать свои знания и навыки
✨ Создать стабильный источник дохода через Инстаграм
✨ Выстроить сильный личный бренд и легко привлекать клиентов

То ты в правильном месте! 

Нажми на кнопку ниже, чтобы посмотреть бесплатный отрывок интенсива по заработку на своем блоге в Инстаграм.`,
        btn_watch_vsl: '🎬 Посмотреть бесплатный отрывок',
        vsl_link_text: `Нажми на кнопку ниже — тебя перебросит на страницу с видео.
        
Посмотри его до конца, там я объясняю, как работает интенсив и для кого он вообще подходит.`,
        btn_go_to_vsl: 'Перейти к видео'
    },
    uz: {
        intro_select_language: '👋 Salom! Davom etish uchun tilni tanlang:',
        language_selected: '✅ Til tanlandi: O\'zbekcha',
        subscribe_request: 'Intensivning bepul qismini ko\'rish uchun kanalimga obuna bo\'ling.',
        btn_subscribe: 'Kanalga obuna bo\'lish',
        btn_check_sub: '✅ Obuna bo\'ldim',
        not_subscribed: '❌ Siz hali kanalga obuna bo\'lmadingiz.',
        sub_confirmed: '✅ Obuna tasdiqlandi!',
        welcome_message: `Salom! Men Nigina Mo'min — sizning Instagram blogingiz orqali muvaffaqiyat va yuqori daromadlar olamiga yo'lboshchingizman!

Agar siz:
✨ Bilim va ko'nikmalaringizni monetizatsiya qilishni
✨ Instagram orqali barqaror daromad manbaini yaratishni
✨ Kuchli shaxsiy brend yaratishni va mijozlarni oson jalb qilishni istasangiz

Siz to'g'ri joydasiz!

Instagram blogingizda pul ishlash bo'yicha intensivning bepul qismini ko'rish uchun quyidagi tugmani bosing.`,
        btn_watch_vsl: '🎬 Bepul qismni ko\'rish',
        vsl_link_text: `Pastdagi tugmani bosing — sizni video sahifasiga o'tkazadi.
        
Uni oxirigacha ko'ring, u yerda men intensiv qanday ishlashini va u kimga mos kelishini tushuntiraman.`,
        btn_go_to_vsl: 'Videoga o\'tish'
    },
    en: {
        intro_select_language: '👋 Hello! Select a language to continue:',
        language_selected: '✅ Language selected: English',
        subscribe_request: 'To get access to the free intensive excerpt, please subscribe to my channel.',
        btn_subscribe: 'Subscribe to Channel',
        btn_check_sub: '✅ I have subscribed',
        not_subscribed: '❌ You have not subscribed to the channel yet.',
        sub_confirmed: '✅ Subscription confirmed!',
        welcome_message: `Hello! I am Nigina Mumin — your guide to the world of successful blogging and high incomes through Instagram!

If you want to:
✨ Monetize your knowledge and skills
✨ Create a stable source of income through Instagram
✨ Build a strong personal brand and easily attract clients

Then you are in the right place!

Click the button below to watch a free excerpt of the intensive on making money on your Instagram blog.`,
        btn_watch_vsl: '🎬 Watch free excerpt',
        vsl_link_text: `Click the button below — it will take you to the video page.
        
Watch it to the end, there I explain how the intensive works and who it is suitable for.`,
        btn_go_to_vsl: 'Go to Video'
    }
};

export function t(key: keyof typeof TRANSLATIONS.ru, language: string): string {
    const lang = (language in TRANSLATIONS) ? language as Language : 'ru';
    return TRANSLATIONS[lang][key] || TRANSLATIONS['ru'][key];
}
