
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
        subscribe_request: 'Чтобы получить доступ к разбору, подпишись на мой канал. Там я даю доп. материалы по дисциплине, характеру и отношениям для парней из Ташкента и СНГ.',
        btn_subscribe: 'Подписаться на канал',
        btn_check_sub: '✅ Я подписался',
        not_subscribed: '❌ Вы еще не подписались на канал.',
        sub_confirmed: '✅ Подписка подтверждена!',
        welcome_message: `⚫ **Давай честно.** Сколько раз ты слышал:
«Извини, ты хороший парень, но давай останемся просто друзьями»?

Сколько раз ты молчал, когда тебя не уважали, потому что боялся потерять человека?
Ты думаешь: «Вот заработаю денег, куплю крутую тачку — и тогда со мной начнут считаться». Бред. Тебя будут просто использовать из-за бабок. А за спиной — ни капли реального уважения.

Меня зовут **Амир Салиев**, я записал этот разбор не для того, чтобы погладить тебя по голове. Это жесткая правда о том, почему ты до сих пор стоишь на месте.

**Бьем по фактам. Узнаешь себя?**

**Сливаешь ресурсы:** Тратишь последние деньги на ночные посиделки в «компах» с пацанами и лаваш, но жалеешь копейки на свое развитие.

**Иллюзия действий:** Сутками смотришь мотивацию в Reels и читаешь умные книги, но твое тело слабое, а в реальности ты ничего не делаешь. Ты — просто теоретик.

**Потеря времени:** Отсидел 4 года в универе ради куска картона, но не имеешь ни реального опыта, ни стержня, чтобы пойти и взять свое.

**Задай себе один вопрос:**
Что будет через 10 лет, если ты не поменяешься сейчас? Твой ребенок подойдет и спросит: «Пап, а почему мы так живем? Почему мама постоянно расстроена и мы на всем экономим? Почему другие могут, а мы нет?»
Что ты ему ответишь? Что тебе было жалко времени на себя? Что ты предпочел поиграть в игры?

В этом видео нет воды. **За 26 минут ты получишь пошаговую базу:**
⚫ Как за 40 дней пересобрать свое тело и жесткий характер через Bossroom.
⚫ Как заставить людей слушать и уважать тебя, даже если у тебя сейчас ноль в кармане.
⚫ Как выйти из позиции «славного парня» и стать тем, за кем хотят идти.

Либо ты открываешь видео сейчас и начинаешь менять свою реальность. Либо закрываешь бота, идешь дальше жаловаться на жизнь и остаешься там же, где и был.

**⚫ Выбор твой.**`,
        btn_watch_vsl: 'Смотреть разбор',
        vsl_link_text: `Нажми на кнопку ниже — тебя перебросит на страницу с видео.

Посмотри его до конца, там я объясняю, как работает Боссрум Сообщество - Bossroom Jamiyati и для кого он вообще подходит.`,
        btn_go_to_vsl: 'Перейти к разбору'
    },
    uz: {
        intro_select_language: '👋 Salom! Davom etish uchun tilni tanlang:',
        language_selected: '✅ Til tanlandi: O\'zbekcha',
        subscribe_request: 'Tahlilni olish uchun kanalimga obuna bo\'ling. U yerda Toshkent va MDH yigitlari uchun intizom, xarakter va munosabatlar haqida qo\'shimcha materiallar beraman.',
        btn_subscribe: 'Kanalga obuna bo\'lish',
        btn_check_sub: '✅ Obuna bo\'ldim',
        not_subscribed: '❌ Siz hali kanalga obuna bo\'lmadingiz.',
        sub_confirmed: '✅ Obuna tasdiqlandi!',
        welcome_message: `⚫ **Keling, rostini gaplashaylik.** Necha marta eshitgansiz:
"Kechirasiz, siz yaxshi yigitsiz, lekin keling, shunchaki do'st bo'lib qolaylik"?

Sizni hurmat qilishmaganda, necha marta odamni yo'qotib qo'yishdan qo'rqib indamay turganiz?
Siz o'ylaysiz: "Mana, pul ishlab topaman, zo'r mashina sotib olaman — shunda men bilan hisoblashishni boshlashadi". Safsata. Sizdan shunchaki pulingiz uchun foydalanishadi. Orqangizdan esa — zarracha haqiqiy hurmat bo'lmaydi.

Mening ismim **Amir Saliyev**, men bu tahlilni sizning boshingizni silash uchun yozganim yo'q. Bu sizning nima uchun hali ham bir joyda depsinib turganingiz haqidagi achchiq haqiqatdir.

**Faktlar bilan gaplashamiz. O'zingizni taniyapsizmi?**

**Resurslarni ko'kka sovurish:** Oxirgi pulingizni oshnalar bilan kompyuterxonalarda tunashga va lavashga sarflaysiz, lekin o'z rivojlanishingizga kelganda bir tiyinni ham qizg'anasiz.

**Harakat illyuziyasi:** Reels-da kun-tun motivatsiya ko'rasiz va aqlli kitoblar o'qiysiz, lekin tanangiz zaif, hayotda esa hech narsa qilmayapsiz. Siz shunchaki nazariyotchisiz.

**Vaqtni yo'qotish:** Bir parcha qog'oz uchun universitetda 4 yil o'tirdingiz, lekin borib o'zingiznikini olish uchun na real tajribangiz, na xarakteringiz bor.

**O'zingizga bitta savol bering:**
Hozir o'zgarmasangiz, 10 yildan keyin nima bo'ladi? Farzandingiz kelib so'raydi: "Dada, nega biz bunday yashaymiz? Nega oyim doim xafa va biz hamma narsani tejaymiz? Nega boshqalar qila oladi, biz esa yo'q?"
Unga nima deb javob berasiz? O'zingizga vaqt ajratishni qizg'anganingiznimi? Yoki o'yin o'ynashni afzal ko'rganingiznimi?

Bu videoda suv yo'q. **26 daqiqa ichida siz bosqichma-bosqich bazani olasiz:**
⚫ Bossroom orqali 40 kun ichida tanangizni va mustahkam xarakteringizni qanday qayta tiklash kerak.
⚫ Hozir cho'ntagingizda nol bo'lsa ham, qanday qilib odamlarni sizni tinglashga va hurmat qilishga majbur qilish kerak.
⚫ Qanday qilib "yaxshi yigit" holatidan chiqib, odamlar ergashishni xohlaydigan shaxsga aylanish kerak.

Yoki videoni hozir ochib, o'z haqiqatingizni o'zgartirishni boshlaisiz. Yoki botni yopasiz, hayotdan nolishda davom etib, bor joyingizda qolasiz.

**⚫ Tanlov sizniki.**`,
        btn_watch_vsl: 'Tahlilni ko\'rish',
        vsl_link_text: `Pastdagi tugmani bosing — sizni video sahifasiga o'tkazadi.

Uni oxirigacha ko'ring, u yerda men Боссрум Сообщество - Bossroom Jamiyati qanday ishlashini va u kimga mos kelishini tushuntiraman.`,
        btn_go_to_vsl: 'Tahlilga o\'tish'
    },
    en: {
        intro_select_language: '👋 Hello! Select a language to continue:',
        language_selected: '✅ Language selected: English',
        subscribe_request: 'To get access to the breakdown, subscribe to my channel. I share additional materials on discipline, character, and relationships for guys from Tashkent and CIS.',
        btn_subscribe: 'Subscribe to Channel',
        btn_check_sub: '✅ I have subscribed',
        not_subscribed: '❌ You have not subscribed to the channel yet.',
        sub_confirmed: '✅ Subscription confirmed!',
        welcome_message: `⚫ **Let's be honest.** How many times have you heard:
"I'm sorry, you're a nice guy, but let's just be friends"?

How many times did you stay silent when you weren't respected, because you were afraid of losing the person?
You think: "Once I make money and buy a cool car, they'll start respecting me." Nonsense. You'll just be used for your cash. And behind your back — not a single drop of real respect.

My name is **Amir Saliev**, and I recorded this breakdown not to pat you on the head. This is the hard truth about why you are still standing still.

**Let's look at the facts. Do you recognize yourself?**

**Wasting resources:** Spending your last money on late-night gaming sessions at internet cafes with the boys and shawarma, but grudgingly refusing to spend a dime on your own development.

**Illusion of action:** Watching motivation Reels all day long and reading smart books, but your body is weak, and in reality, you do nothing. You are just a theorist.

**Wasting time:** Sitting in university for 4 years for a piece of cardboard, but having neither real experience nor the backbone to go and take what's yours.

**Ask yourself one question:**
What will happen in 10 years if you don't change now? Your child will come up and ask: "Dad, why do we live like this? Why is mom always upset and we save on everything? Why can others do it, but we can't?"
What will you answer him? That you spared time for yourself? That you preferred to play games?

There is no fluff in this video. **In 26 minutes, you will get a step-by-step base:**
⚫ How to rebuild your body and tough character in 40 days through Bossroom.
⚫ How to make people listen to and respect you, even if you have zero in your pocket right now.
⚫ How to step out of the "nice guy" position and become someone others want to follow.

Either you open the video now and start changing your reality. Or you close the bot, go on complaining about life, and stay exactly where you were.

**⚫ The choice is yours.**`,
        btn_watch_vsl: 'Watch Breakdown',
        vsl_link_text: `Click the button below — it will take you to the video page.

Watch it to the end, there I explain how Боссрум Сообщество - Bossroom Jamiyati works and who it is suitable for.`,
        btn_go_to_vsl: 'Go to Breakdown'
    }
};

export function t(key: keyof typeof TRANSLATIONS.ru, language: string): string {
    const lang = (language in TRANSLATIONS) ? language as Language : 'ru';
    return TRANSLATIONS[lang][key] || TRANSLATIONS['ru'][key];
}
