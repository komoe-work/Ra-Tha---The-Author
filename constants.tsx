
import { Book, Article, Language } from './types';

export const GEMINI_GEM_URL = "https://gemini.google.com/gem/1guaPZ_jRTtmiwi_KiEGh1pd9nclq2S9z?usp=sharing";

export const TRANSLATIONS = {
  nav: {
    home: { mm: 'ပင်မ', en: 'Home' },
    about: { mm: 'စာရေးသူ', en: 'Author' },
    books: { mm: 'စာအုပ်များ', en: 'Books' },
    blog: { mm: 'ဆောင်းပါး', en: 'Articles' },
    chat: { mm: 'အမေးအဖြေ', en: 'QA' }
  },
  hero: {
    title: { mm: 'Ra Tha - The Author', en: 'Ra Tha - The Author' },
    subtitle: { mm: 'လောကဓမ္မနှင့် သဘာဝတရားကို ခေတ်သစ်အမြင်ဖြင့် ရှင်းလင်းတင်ပြထားသော စာရေးဆရာ Ra Tha ၏ စာအုပ်များနှင့် အတွေးအမြင်များ', en: 'Books and insights by author Ra Tha, presenting Dhamma and nature through a modern lens.' },
    ctaBooks: { mm: 'စာအုပ်များ', en: 'Books' },
    ctaChat: { mm: 'အမေးအဖြေ', en: 'QA' }
  },
  about: {
    title: { mm: 'Ra Tha ဆိုတာ ဘယ်သူလဲ?', en: 'Who is Ra Tha?' },
    p1: { mm: 'စာရေးဆရာ Ra Tha သည် ရှေးရိုးစွဲ ပါဠိစကားလုံးများနှင့် နှစ်ပေါင်း ၂၅၀၀ ကျော်က အသုံးအနှုန်းများကို နားလည်ရခက်နေသော ယနေ့ခေတ် လူငယ်များအတွက် ရည်ရွယ်၍ စာများကို ရေးသားသူဖြစ်ပါသည်။', en: 'Author Ra Tha writes for today’s youth who find archaic Pali terms from 2,500 years ago difficult to understand.' },
    quote: { mm: '"IT, AI, International School ခေတ်တွင် ကြီးပြင်းလာကြသော လူငယ်များ၏ ရင်ထဲသို့ ဓမ္မအနှစ်သာရများ ရောက်ရှိစေရန်..."', en: '"To bring the essence of Dhamma into the hearts of youth growing up in the age of IT, AI, and International Schools..."' },
    p2: { mm: 'ဘဝပြဿနာများကို ဖြေရှင်းရန် ဓမ္မကို လက်တွေ့ (Daily Life Style) တွင် မည်သို့ အသုံးချရမည် ဆိုသည်ကို အဓိကထား ရှင်းပြလေ့ရှိပါသည်။ ဘာသာရေးဆိုသည်မှာ လုပ်ဆောင်နေရသည့် အရာမဟုတ်ဘဲ သိရှိနားလည်နေရသည့် အရာဖြစ်ကြောင်း အမြဲမပြတ် သတိပေးလေ့ရှိသူ ဖြစ်ပါသည်။', en: 'He focuses on how to apply Dhamma in daily life to solve problems. He constantly reminds readers that religion is not something to do, but something to know and understand.' },
    connect: { mm: 'စာရေးသူနှင့် ဆက်သွယ်ရန်', en: 'Connect with Author' },
    telegram: { mm: 'Telegram Community', en: 'Telegram Community' },
    facebook: { mm: 'Official Facebook', en: 'Official Facebook' }
  },
  chat: {
    title: { mm: 'Ra Tha AI (Official)', en: 'Ra Tha AI (Official)' },
    subtitle: { mm: 'Ra Tha ၏ စာအုပ်များကို အခြေခံ၍ လေ့ကျင့်ပေးထားသော တရားဝင် Gemini AI နှင့် စကားပြောကြည့်ရန် အောက်ပါ ခလုတ်ကို နှိပ်ပါ။', en: 'Speak with the official Gemini AI trained on Ra Tha’s books by clicking the button below.' },
    back: { mm: 'Go Back Home', en: 'Go Back Home' }
  },
  gemCard: {
    tag: { mm: 'Official Ra Tha AI', en: 'Official Ra Tha AI' },
    title: { mm: 'Gemini Expert Companion', en: 'Gemini Expert Companion' },
    desc: { mm: 'စာအုပ် ၃ အုပ်လုံးမှ အချက်အလက်များကို အသေးစိတ် မေးမြန်းလေ့လာနိုင်သော တရားဝင် AI ဖြစ်ပါသည်။ Google Account ဖြင့် Sign-in ဝင်ရန် လိုအပ်ပါသည်။', en: 'An official AI companion to dive deep into all three books. Google Account sign-in required.' },
    btn: { mm: 'Gemini ဖြင့် စတင်မည်', en: 'Start with Gemini' },
    footer: { mm: 'Google Sign-in Required', en: 'Google Sign-in Required' }
  }
};

export const QUOTES = [
  {
    mm: "\"ဘာသာရေးဆိုတာ လုပ်ရတာမဟုတ်ပါဘူး၊ သိရတာပါ။ တကူးတက လုပ်ရတဲ့ ဘာသာရေးအလုပ်မှန်သမျှက ဘာသာရေးလုပ်တာ မဟုတ်ပါဘူး။\"",
    en: "\"Religion is not something to do, but something to know. Any religious work that is forced is not true religion.\""
  },
  {
    mm: "\"နားလည်ခြင်းဟာ လွတ်မြောက်ခြင်းရဲ့ လမ်းစပါပဲ။\"",
    en: "\"Understanding is the beginning of liberation.\""
  },
  {
    mm: "\"သံသရာဆိုတာ သင်္ချာလိုပဲ၊ Formula သေချာထုတ်ပြီး တွက်နိုင်တဲ့သူမှန်သမျှ သံသရာက လွတ်မယ်။\"",
    en: "\"Samsara is like mathematics; anyone who can derive and solve the formula will be free from it.\""
  },
  {
    mm: "\"If you don't Mind, It doesn't Matter.\"",
    en: "\"If you don't Mind, It doesn't Matter.\""
  }
];

export const BOOKS: Book[] = [
  {
    id: 1,
    title: { mm: "စိတ်အထုံးများ ပြေလျော့ခြင်း (၁)", en: "Untying Mental Knots (1)" },
    subtitle: { mm: "Know your Body, Mind & Soul", en: "Know your Body, Mind & Soul" },
    tag: { mm: "အတွဲ (၁)", en: "Vol. 1" },
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNDzX6ir_sUZfNrBLtjMcho48rgp0c371B04CIqbizmQ6x0jP_24Eu1SrAb95tZyRx9_oduJgNy1DdSoDvSCurUWNFtmV-W6CaJuB2IY2nsB8g20gE=w2400",
    summary: { 
      mm: "ဤစာအုပ်သည် 'Know your Body, Know your Mind, Know who you are' ဟူသော ခံယူချက်ဖြင့် မိမိကိုယ်ကို ပြန်လည်ရှာဖွေခြင်းအကြောင်း ဖြစ်သည်။ တရားရှာ ခန္ဓာတွေ့ခြင်း၊ သေခြင်းကို နားလည်ခြင်း၊ ဒုက္خဆင်းရဲ၏ အဆုံးနှင့် စွန့်လွှတ်ခြင်း ဝိမုတ္တိအကြောင်းများကို ဆွေးနွေးထားပါသည်။",
      en: "This book is about rediscovering yourself through 'Know your Body, Know your Mind, Know who you are'. It discusses finding Dhamma in the body, understanding death, the end of suffering, and liberation."
    },
    topics: [
      { mm: "လူနှင့် တိရစ္ဆာန် ဘာကွာခြားသလဲ။", en: "Difference between humans and animals." },
      { mm: "ဘဝ၏ စိတ်ချမ်းသာမှု အစစ်အမှန်။", en: "True happiness in life." },
      { mm: "ရုပ်ကြမ်းခန္ဓာ၏ အလွန်။", en: "Beyond the physical body." }
    ]
  },
  {
    id: 2,
    title: { mm: "စိတ်အထုံးများ ပြေလျော့ခြင်း (၂)", en: "Untying Mental Knots (2)" },
    subtitle: { mm: "Boomerang Karma & Zero Concept", en: "Boomerang Karma & Zero Concept" },
    tag: { mm: "အတွဲ (၂)", en: "Vol. 2" },
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczO3AcCJAx5ENTHrVDr3gmYhbACe2jB7pfGPSFEhi-hipxmugCQz9SIVzhZSSAkyEMEeCombbiPVfTut-5577MF8t4i5B0J6HsF_aJZwMLM4avqrxa0=w2400",
    summary: {
      mm: "ပထမစာအုပ်၏ အဆက်ဖြစ်ပြီး သံသရာလည်ပတ်ပုံ၊ Boomerang Karma (ပတ်တုတ်ကံ) သဘောတရားများနှင့် ဒုက္ခမှ လွတ်မြောက်ခြင်း (Escape from suffering) ကို အပိုင်းလိုက် ရှင်းလင်းထားသည်။",
      en: "A continuation of the first book, explaining the cycle of Samsara, Boomerang Karma, and escaping from suffering step-by-step."
    },
    topics: [
      { mm: "သေတစ်နေ့၊ မွေးတစ်နေ့။", en: "Die one day, born another." },
      { mm: "သင်္ချာဆန်သော သံသရာ။", en: "The mathematical nature of Samsara." },
      { mm: "ကုသိုလ်၊ အကုသိုလ်နှင့် သုညသဘော။", en: "Merit, demerit, and the concept of Zero." },
      { mm: "Mindful Understanding (သတိဖြင့် နားလည်ခြင်း)။", en: "Mindful Understanding." }
    ]
  },
  {
    id: 3,
    title: { mm: "လောကမှ နိုးထခြင်း", en: "Awakening from the World" },
    subtitle: { mm: "The Light Code & Nature", en: "The Light Code & Nature" },
    tag: { mm: "အသစ်", en: "New" },
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczOQpr0J6xDWcORsxvSEidkLOaatIxMidI-XQIIatp3SNPq3RotNDCeDmDLrofety8mPtsKOOkpGou6tSSJ6Gc_9nAUmKalO8FH9IVzRYnevdFOSt8E=w2400",
    summary: {
      mm: "လောကအမြင်ကို ဓမ္မအမြင်ဖြင့် ထပ်လိုက်သောအခါ ပြောင်းလဲသွားသော ဘဝအမြင်များကို တင်ပြထားသည်။ သဘာဝတရား (Nature)၊ အလင်းကုတ် (The Light Code) နှင့် Mind & Matter သဘောတရားများကို ဆွေးနွေးထားပါသည်။",
      en: "Presents life views that change when you overlay Dhamma perception onto worldly views. Discusses Nature, The Light Code, and Mind & Matter."
    },
    topics: [
      { mm: "လောကနောက်ကွယ်က သဘာဝ။", en: "Nature behind the world." },
      { mm: "ဓမ္မသညာ (Dhamma Perception)။", en: "Dhamma Perception." },
      { mm: "Destiny (ကံကြမ္မာ) နှင့် ဆုံးဖြတ်ချက်များ။", en: "Destiny and decisions." }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: { mm: "Know your Body, Know your Mind (ကိုယ့်ခန္ဓာ၊ ကိုယ့်စိတ်ကို သိခြင်း)", en: "Know your Body, Know your Mind" },
    preview: { mm: "မိမိတို့၏ အစစ်အမှန်ဖြစ်သော ခန္ဓာနှင့် စိတ်အကြောင်းကို မေ့လျော့နေတတ်ကြသော လူအများအတွက်...", en: "For many who forget their true physical and mental nature in the rush of life..." },
    content: [
      { mm: "လူအများစုသည် မိသားစု၊ စီးပွားရေးနှင့် လူမှုရေးကိစ္စများကို ဦးစားပေးနေကြသော်လည်း မိမိတို့၏ အစစ်အမှန်ဖြစ်သော ခန္ဓာနှင့် စိတ်အကြောင်းကို မေ့လျော့နေတတ်ကြသည်။", en: "Most people prioritize family, business, and social affairs, but often forget their true physical and mental nature." },
      { mm: "ဤဆောင်းပါးတွင် မိမိကိုယ်ကို ပြန်လည်ရှာဖွေခြင်း၊ သတ်မှတ်ချက် (Label) များမပါဘဲ ခံစားချက်ကို သက်သက် ခံစားကြည့်ခြင်းနှင့် 'ငါဘယ်သူလဲ' (Know who you are) ဆိုသည်ကို ရှာဖွေခြင်းအကြောင်း ဆွေးနွေးထားပါသည်။", en: "This article discusses rediscovering yourself, feeling sensations without labels, and seeking the answer to 'Who am I?'" },
      { mm: "ကိုယ့်ခန္ဓာအကြောင်း၊ ကိုယ့်စိတ်အကြောင်း၊ ကိုယ့်သဘောသဘာဝ အစစ်အမှန်အကြောင်း သေချာနားလည်သွားပြီဆိုရင် ဒီကမ္ဘာလောကကြီးတခုလုံးမှာရှိတဲ့ သတ်မှတ်ချက်တွေကို အစစ်အမှန်ယူတတ်တဲ့ အကျင့်တွေ တဖြည်းဖြည်းလျော့ပါးလာပြီး သဘာဝနဲ့ တိုက်ရိုက်ထိတွေ့နိုင်လာမယ်။", en: "Once you truly understand your body, mind, and true nature, the habit of taking worldly labels as reality gradually fades, allowing direct contact with nature." }
    ]
  },
  {
    id: 2,
    title: { mm: "ဘာသာရေးဆိုတာ လုပ်ရတာမဟုတ်၊ သိရတာပါ", en: "Religion is not doing, it's knowing" },
    preview: { mm: "ဘုရားရှိခိုး၊ ပုတီးစိပ်ရုံဖြင့် မပြီးဘဲ စိတ်ထားတတ်ရန်နှင့် သဘောတရားကို နားလည်ရန် အရေးကြီးပုံ...", en: "It's not just about prayers and beads; understanding the mindset and principles is key..." },
    content: [
      { mm: "ဘုရားရှိခိုးခြင်း၊ ပုတီးစိပ်ခြင်း၊ လှူဒါန်းခြင်းများသည် ဘာသာရေး၏ ပြင်ပအဆောက်အဦးများသာ ဖြစ်သည်။", en: "Praying, using beads, and donating are just the outer structures of religion." },
      { mm: "အစစ်အမှန် ဘာသာရေးဆိုသည်မှာ မိမိ၏ စိတ်အလုပ်လုပ်ပုံကို သိခြင်း၊ ဖြစ်ပေါ်လာသော ခံစားချက်များကို အရှိအတိုင်း ရှုမြင်တတ်ခြင်းဖြစ်သည်။", en: "True religion is knowing how your mind works and seeing emotions as they are." },
      { mm: "ဘာသာရေးဆိုတာ လုပ်ရတာမဟုတ်ပါဘူး၊ သိရတာပါ။ တကူးတက လုပ်ရတဲ့ ဘာသာရေးအလုပ်မှန်သမျှက ဘာသာရေးလုပ်တာ မဟုတ်ပါဘူး... စိတ်ထားတတ်မှ ထိရောက်တာပါ။", en: "Religion is not something to do, but something to know. Any religious work that is forced is not true religion... It is only effective when you have the right mindset." }
    ]
  },
  {
    id: 3,
    title: { mm: "Boomerang Karma (ပတ်တုတ်ကံ)", en: "Boomerang Karma" },
    preview: { mm: "ကိုယ်ပြုသည့်ကံသည် ပဲ့တင်သံကဲ့သို့ ကိုယ့်ထံပြန်လာမည့်အကြောင်းနှင့် အတိတ်ဘဝ...", en: "Your actions return to you like an echo, explaining past lives..." },
    content: [
      { mm: "ကျွန်ုပ်တို့ ပြုလုပ်လိုက်သော ကံတိုင်းသည် စကြာဝဠာထဲသို့ ထုတ်လွှင့်လိုက်သော စွမ်းအင်များဖြစ်သည်။", en: "Every action we take is energy broadcast into the universe." },
      { mm: "ထိုစွမ်းအင်သည် Boomerang ကဲ့သို့ပင် ပြုလုပ်သူထံသို့ မလွဲမသွေ ပြန်လည်ရောက်ရှိလာတတ်သည်။", en: "That energy, like a boomerang, inevitably returns to the doer." },
      { mm: "ကိုယ်ကနေပြီးတော့ တခြားလူကို... နစ်နာပါစေ ဒါမှမဟုတ် အဆင်ပြေပါစေဆိုပြီး ပြုလုပ်လိုက်တဲ့ အကြောင်းကံမှန်သမျှက တချိန်ချိန်မှာ ကိုယ့်ဆီကို... တည့်တည့်မတ်မတ် ပြန်ရောက်သွားစေတာကို Boomerang Karma လို့ခေါ်ပါတယ်။", en: "Actions taken with intent—whether for harm or benefit—will eventually find their way back to you precisely. This is what we call Boomerang Karma." }
    ]
  },
  {
    id: 4,
    title: { mm: "သုညတ ဓမ္မ (The Concept of Zero)", en: "The Concept of Zero (Sunyata)" },
    preview: { mm: "တန်ဖိုးရှိသော အရာအားလုံးကို သုည (၀) နှင့် မြှောက်လိုက်ပါက သုညသာ ရသကဲ့သို့...", en: "Just as multiplying any value by zero yields zero..." },
    content: [
      { mm: "သင်္ချာတွင် မည်မျှပင် ကြီးမားသော ကိန်းဂဏန်းဖြစ်စေ သုညနှင့် မြှောက်လျှင် သုညသာ ရသည်။", en: "In math, no matter how large the number, multiplying by zero results in zero." },
      { mm: "လောက၏ အနှစ်မဲ့သော သဘောကို သုညဟု မြင်တတ်လျှင် မည်သည့် ဆုံးရှုံးမှု, မည်သည့် ဒုက္ခကမျှ ကျွန်ုပ်တို့ကို မတုန်လှုပ်စေနိုင်တော့ပါ။", en: "If you see the void (Zero) nature of the world, no loss or suffering can shake you." },
      { mm: "သင့်ရဲ့ အဇ္ဈတ္တသန္တာန်မှာ သုညအစဉ်ကိန်းနေပြီဆိုရင် သင့်အတွက် အဲဒီနေရာမှာ သံသရာမရှိတော့ပါဘူး။", en: "If your inner being is constant at Zero, there is no more cycle of Samsara for you in that space." }
    ]
  },
  {
    id: 5,
    title: { mm: "ဒုက္ခမှ လွတ်မြောက်ခြင်း (Escape from Suffering)", en: "Escape from Suffering" },
    preview: { mm: "ဒုက္ခမှ လွတ်မြောက်ရန် ကြိုးစားရာတွင် သုခကို ရှာဖွေခြင်းသည် အဖြေမဟုတ်ကြောင်း...", en: "Seeking happiness is not the solution when trying to escape suffering..." },
    content: [
      { mm: "ဒုက္ခမှ လွတ်မြောက်ရန် ကြိုးစားရာတွင် သုခ (ချမ်းသာမှု) ကို ရှာဖွေခြင်းသည် အဖြေမဟုတ်ကြောင်း၊ သုခကို မျှော်လင့်ခြင်းသည် ဒုက္ခကို ပိုမိုကြီးထွားစေကြောင်း ရှင်းပြသည်။", en: "When trying to escape suffering, seeking happiness is not the answer; expecting happiness only magnifies suffering." },
      { mm: "ဒုက္ခမှ အမှန်တကယ် လွတ်မြောက်လိုပါက မျှော်လင့်ချက် (Expectation) များကို စွန့်လွှတ်ပြီး အရှိတရားကို လက်ခံတတ်ရန် လိုအပ်ပုံကို ဆွေးနွေးထားသည်။", en: "To truly escape suffering, one must abandon expectations and learn to accept reality as it is." },
      { mm: "ဆင်းရဲ ဒုက္ခကနေ လွတ်မြောက်ချင်တယ်ဆိုရင် ချမ်းသာသုခကို မျှော်လင့်ပြီး လုပ်ကိုင်ကြံဆောင်နေတဲ့ ကိစ္စမှန်သမျှကို ရပ်တန့်ပစ်ရပါမယ်... မမျှော်လင့်ပါနဲ့၊ မတောင့်တပါနဲ့၊ မရည်ရွယ်ပါနဲ့။", en: "If you want to be free from suffering, stop all actions driven by the hope for happiness... Do not expect, do not crave, do not intend." }
    ]
  },
  {
    id: 6,
    title: { mm: "သင်္ချာဆန်သော သံသရာ", en: "Mathematical Samsara" },
    preview: { mm: "သံသရာလည်ပတ်ပုံသည် ရှုပ်ထွေးသည်ဟု ထင်ရသော်လည်း အမှန်တကယ်တွင် တိကျသော Formula ရှိသည်။", en: "The cycle of Samsara may seem complex, but it actually follows a precise formula." },
    content: [
      { mm: "သံသရာလည်ပတ်ပုံသည် ရှုပ်ထွေးသည်ဟု ထင်ရသော်လည်း အမှန်တကယ်တွင် သင်္ချာပုစ္ဆာကဲ့သို့ တိကျသော Formula ရှိသည်။", en: "The cycle of Samsara seems complex, but it actually has a precise formula like a math problem." },
      { mm: "အကြောင်းနှင့် အကျိုး ဆက်စပ်မှုကို (Formula) မှန်ကန်စွာ တွက်ချက်နိုင်ပါက သံသရာမှ လွတ်မြောက်နိုင်သည်။ ဘာသာရေးသည် ချဉ်းကပ်လမ်း (Formula) တစ်ခုသာ ဖြစ်ကြောင်း တင်ပြထားသည်။", en: "If one can correctly calculate the correlation of cause and effect (the Formula), one can escape Samsara. Religion is merely a gateway or formula." },
      { mm: "သံသရာသာ သင်္ချာမေးခွန်းတစ်ခုဆိုရင် အဲဒီမေးခွန်းကို formula သေချာထုတ်ပြီး တွက်နိုင်တဲ့သူမှန်သမျှ သံသရာက လွတ်မယ်။", en: "If Samsara were a math question, anyone who can derive and solve the formula would be free from it." }
    ]
  },
  {
    id: 7,
    title: { mm: "လောကမှ နိုးထခြင်း (Awakening from the World)", en: "Awakening from the World" },
    preview: { mm: "မနက်ခင်း အိပ်ရာမှ နိုးထလာသကဲ့သို့ လောက၏ အတုအယောင်များမှ နိုးထလာခြင်း...", en: "Awakening from the illusions of the world just like waking up in the morning..." },
    content: [
      { mm: "မနက်ခင်း အိပ်ရာမှ နိုးထလာသကဲ့သို့ လောက၏ အတုအယောင်များ၊ သတ်မှတ်ချက်များမှ နိုးထလာပြီး အမှန်တရားကို သိမြင်လာခြင်းအကြောင်းဖြစ်သည်။", en: "It is about waking up from the illusions and labels of the world, much like waking up from a dream in the morning, to see the truth." },
      { mm: "လောကအမြင်ကို ဓမ္မအမြင်ဖြင့် ထပ်လိုက်သောအခါ ပြောင်းလဲသွားသော ဘဝအမြင်များနှင့် စစ်မှန်သော နိုးထမှုအကြောင်းကို ဖော်ပြထားသည်။", en: "It describes the shift in life views when worldly perception is overlaid with Dhamma perception, leading to true awakening." },
      { mm: "လောကမှ နိုးထသွားတဲ့အခါ မနိုးထခင် အချိန်တုန်းကနဲ့ မတူတော့တဲ့ အမြင်တွေ၊ နားလည်မှုတွေ... အားလုံးက ပြောင်းလဲသွားတယ်။", en: "When you awaken from the world, the views and understandings you had before are no longer the same... everything changes." }
    ]
  },
  {
    id: 8,
    title: { mm: "ဓမ္မသညာ (Dhamma Perception)", en: "Dhamma Perception" },
    preview: { mm: "ကျွန်ုပ်တို့သည် သံသရာတစ်လျှောက်လုံး မှားယွင်းသော အမှတ်သညာများဖြင့် ကြီးပြင်းလာခဲ့ကြသည်...", en: "We have grown up throughout Samsara with false perceptions..." },
    content: [
      { mm: "ကျွန်ုပ်တို့သည် သံသရာတစ်လျှောက်လုံး မှားယွင်းသော အမှတ်သညာ (Perception) များဖြင့် ကြီးပြင်းလာခဲ့ကြသည်။", en: "We have spent lifetimes in Samsara growing up with false perceptions." },
      { mm: "ဗုဒ္ဓ၏ ဓမ္မသညာ (ဥပမာ - အနိစ္စသညာ၊ အနတ္တသညာ) များကို မိမိ၏ အသိဉာဏ်တွင် အစားထိုး ထည့်သွင်းခြင်းဖြင့် အဝိဇ္ဇာ (မသိမှု) ကို ဖယ်ရှားပြီး ဉာဏ်အလင်းရရှိနိုင်ပုံကို ရှင်းပြထားသည်။", en: "It explains how replacing those with Buddha's Dhamma perceptions (e.g., Anicca, Anatta) in the intellect can remove ignorance (Avijja) and lead to enlightenment." },
      { mm: "အနတ္တသညာကို ပွားများသူ... ၏ သဏ္ဌာန်၌ ဆုတ်ယုတ်ရန်မရှိ တရားတိုးတက်ဖို့သာ ရှိတယ်။", en: "For one who cultivates the perception of non-self (Anatta)... there is no regression, only progress in Dhamma." }
    ]
  },
  {
    id: 9,
    title: { mm: "Destiny (ကံကြမ္မာ) နှင့် ဆုံးဖြတ်ချက်များ", en: "Destiny and Decisions" },
    preview: { mm: "ကံကြမ္မာဆိုသည်မှာ အလိုလို ဖြစ်လာခြင်းမဟုတ်ဘဲ မိမိ၏ ရွေးချယ်မှုများအပေါ် မူတည်နေသည်...", en: "Destiny is not something that happens automatically; it depends on your choices..." },
    content: [
      { mm: "ကံကြမ္မာဆိုသည်မှာ အလိုလို ဖြစ်လာခြင်းမဟုတ်ဘဲ မိမိ၏ ရွေးချယ်မှု (Decision) များအပေါ် မူတည်နေသည်။", en: "Destiny is not something that just happens; it depends on your own choices (decisions)." },
      { mm: "မိမိ၏ ဆုံးဖြတ်ချက်များသည် ကံကြမ္မာကို မည်သို့ ဖန်တီးပုံဖော်နိုင်ကြောင်း dominance နှင့် ဖြစ်လာသမျှကို ကျေနပ်စွာ လက်ခံခြင်းအကြောင်း ဆွေးနွေးထားသည်။", en: "It discusses how your decisions shape your destiny and how to accept whatever comes with satisfaction." },
      { mm: "ကံကြမ္မာရဲ့ အဆုံးအဖြတ်တိုင်းမှာ ကျွန်တော်တို့ ပါတယ်။ အဲဒီလိုဆုံးဖြတ်လိုက်ရင်းနဲ့ ဖြစ်လာတာတွေကသာ ကံကြမ္မာပဲ... ကိုယ်တိုင်ဆုံးဖြတ်ရတာ။", en: "We are part of every decision of destiny. What happens as a result of those decisions is what we call destiny... you decide it yourself." }
    ]
  },
  {
    id: 10,
    title: { mm: "လူနှင့် တိရစ္ဆာန် ဘာကွာခြားသလဲ?", en: "Difference between Humans and Animals" },
    preview: { mm: "ရုပ်ပိုင်းဆိုင်ရာအရ လူနှင့် တိရစ္ဆာန်သည် အင်္ဂါအစိတ်အပိုင်းများ တူညီကြသော်လည်း...", en: "Physically, humans and animals share similar organs, yet..." },
    content: [
      { mm: "ရုပ်ပိုင်းဆိုင်ရာအရ လူနှင့် တိရစ္ဆာန်သည် အင်္ဂါအစိတ်အပိုင်းများ တူညီကြပြီး၊ မိသားစုကို ချစ်ခင်ခြင်း၊ အစာရှာခြင်း စသည့် အလေ့အထများလည်း တူညီကြသည်။", en: "Physically, humans and animals have similar organs and shared habits like loving family and seeking food." },
      { mm: "သို့သော် အဓိက ကွာခြားချက်မှာ 'ဉာဏ်ပညာ' (Wisdom) ဖြစ်သည်။ လူသည် ဉာဏ်ပညာဖြင့် မိမိ၏ ဘဝကို မြှင့်တင်နိုင်စွမ်းရှိကြောင်း သုံးသပ်ပြထားသည်။", en: "However, the primary difference is Wisdom. It analyzes how humans have the capacity to elevate their lives through wisdom." },
      { mm: "အထူး သိသာသော ကွာခြားမှုကို ပြပါဆိုလျှင် ဉာဏ်ပညာ လို့ပဲ highlight လုပ်ရုံမှလွဲ၍ အခြားမရှိ... လူနဲ့ တိရစ္ဆာန် ကြား ဘာကွာခြားလဲမေးရင် ဉာဏ်ပညာ ကွာပါသည် ဟုပဲ ဖြေရမည်ဖြစ်သည်။", en: "If you want to point out the most significant difference, there is nothing else but Wisdom... If asked what separates humans from animals, the answer must be Wisdom." }
    ]
  }
];
