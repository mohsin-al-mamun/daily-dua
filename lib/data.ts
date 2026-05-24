import Q from './quran-arabic.json';

export type Word = { ar: string; tr: string; en: string; bn: string };

export type Segment = {
  arabic: string;
  translit: string;
  banglaTranslit: string;
  meaningBn: string;
  meaningEn: string;
  words: Word[];
};

export type DuaDetail = {
  fullArabic: string;
  fullBanglaTranslit: string;
  fullMeaningBn: string;
  reference?: string;
  segments: Segment[];
};

export type DuaMeta = {
  id: string;
  cat: string;
  titleAr: string;
  titleBn: string;
  firstLine: string;
};

export type Category = {
  id: string;
  icon: string;
  titleBn: string;
  sub: string;
};

export type CatLabel = { bn: string; en: string };

export const DUAS: DuaMeta[] = [
  // Salat
  { id: 'tashahhud',    cat: 'salat',   titleAr: 'التحيات',              titleBn: 'আত-তাশাহহুদ',             firstLine: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ' },
  { id: 'darud',        cat: 'salat',   titleAr: 'الصلاة الإبراهيمية',   titleBn: 'দরূদ ইব্রাহিম',            firstLine: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ' },
  { id: 'dua-masura',   cat: 'salat',   titleAr: 'دعاء المأثور',          titleBn: 'দুআ মাসুরা',               firstLine: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا' },
  { id: 'ruku',         cat: 'salat',   titleAr: 'دعاء الركوع',           titleBn: 'রুকুর তাসবিহ',             firstLine: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ' },
  { id: 'sijdah',       cat: 'salat',   titleAr: 'دعاء السجود',           titleBn: 'সিজদার তাসবিহ',            firstLine: 'سُبْحَانَ رَبِّيَ الْأَعْلَى' },
  { id: 'qiyam',        cat: 'salat',   titleAr: 'دعاء الاستفتاح',        titleBn: 'সানা',                     firstLine: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ' },
  // Quran
  { id: 'fatiha',       cat: 'quran',   titleAr: 'الفاتحة',               titleBn: 'সূরা আল-ফাতিহা',          firstLine: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ' },
  { id: 'ikhlas',       cat: 'quran',   titleAr: 'الإخلاص',               titleBn: 'সূরা আল-ইখলাস',           firstLine: 'قُلْ هُوَ اللَّهُ أَحَدٌ' },
  { id: 'falaq',        cat: 'quran',   titleAr: 'الفلق',                  titleBn: 'সূরা আল-ফালাক',           firstLine: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ' },
  { id: 'nas',          cat: 'quran',   titleAr: 'الناس',                  titleBn: 'সূরা আন-নাস',              firstLine: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ' },
  { id: 'ayatul-kursi', cat: 'quran',   titleAr: 'آية الكرسي',             titleBn: 'আয়াতুল কুরসি',            firstLine: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ' },
  { id: 'kafiroon',     cat: 'quran',   titleAr: 'الكافرون',               titleBn: 'সূরা আল-কাফিরুন',         firstLine: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ' },
  // Amal
  { id: 'subhanallah',  cat: 'amal',    titleAr: 'التسبيح',               titleBn: 'তাসবিহ',                   firstLine: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ' },
  { id: 'istighfar',    cat: 'amal',    titleAr: 'الاستغفار',              titleBn: 'ইস্তেগফার',                firstLine: 'أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ' },
  { id: 'kalima',       cat: 'amal',    titleAr: 'الكلمة الطيبة',          titleBn: 'কালিমা তাইয়্যেবা',        firstLine: 'لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ' },
  { id: 'durood-simple',cat: 'amal',    titleAr: 'الصلاة على النبي',       titleBn: 'দরূদ শরিফ সংক্ষিপ্ত',     firstLine: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ' },
  { id: 'alhamdulillah',cat: 'amal',    titleAr: 'الحمد لله',              titleBn: 'আলহামদুলিল্লাহ',           firstLine: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ' },
  // Morning
  { id: 'morning-wakeup',     cat: 'masnun', titleAr: 'دعاء الاستيقاظ',  titleBn: 'ঘুম থেকে উঠার দুআ',    firstLine: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا' },
  { id: 'morning-protection', cat: 'masnun', titleAr: 'دعاء الصباح',      titleBn: 'সকালের সুরক্ষার দুআ',  firstLine: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا' },
  { id: 'morning-tasbih',     cat: 'masnun', titleAr: 'تسبيح الصباح',     titleBn: 'সকালের তাসবিহ',         firstLine: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ' },
  { id: 'morning-dress',      cat: 'masnun', titleAr: 'دعاء اللباس',       titleBn: 'পোশাক পরার দুআ',        firstLine: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا' },
  { id: 'morning-leaving',    cat: 'masnun', titleAr: 'دعاء الخروج',       titleBn: 'বের হওয়ার দুআ',         firstLine: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ' },
  // Evening
  { id: 'evening-protection', cat: 'masnun', titleAr: 'دعاء المساء',       titleBn: 'সন্ধ্যার সুরক্ষার দুআ', firstLine: 'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا' },
  { id: 'sleep-dua',           cat: 'masnun', titleAr: 'دعاء النوم',        titleBn: 'ঘুমানোর দুআ',            firstLine: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا' },
  { id: 'evening-forgiveness', cat: 'masnun', titleAr: 'دعاء قبل النوم',    titleBn: 'ঘুমের আগের দুআ',         firstLine: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ' },
  { id: 'evening-tasbih',      cat: 'masnun', titleAr: 'تسبيح المساء',      titleBn: 'সন্ধ্যার তাসবিহ',        firstLine: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ' },
  { id: 'evening-kul',         cat: 'masnun', titleAr: 'المعوذتان مساءً',   titleBn: 'সন্ধ্যায় মুআউওয়িযাতাইন', firstLine: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ' },
  // After Salat — serial reading order
  { id: 'istighfar-salat', cat: 'after-salat', titleAr: 'الاستغفار بعد الصلاة', titleBn: 'ইস্তিগফার (নামাজের পর)',      firstLine: 'أَسْتَغْفِرُ اللَّهَ' },
  { id: 'salam-dua',       cat: 'after-salat', titleAr: 'اللهم أنت السلام',      titleBn: 'সালামের দুআ',                firstLine: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ' },
  { id: 'tahleel',         cat: 'after-salat', titleAr: 'التهليل',               titleBn: 'তাহলীল',                     firstLine: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ' },
  { id: 'durood-after',    cat: 'after-salat', titleAr: 'الصلاة على النبي',       titleBn: 'দরূদ শরীফ',                  firstLine: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ' },
  { id: 'tasbih-fatemi',   cat: 'after-salat', titleAr: 'تسبيح فاطمة',           titleBn: 'তাসবীহে ফাতেমী',             firstLine: 'سُبْحَانَ اللَّهِ · الْحَمْدُ لِلَّهِ · اللَّهُ أَكْبَرُ' },
  { id: 'ayah-kursi-after',cat: 'after-salat', titleAr: 'آية الكرسي بعد الصلاة', titleBn: 'আয়াতুল কুরসি (নামাজের পর)', firstLine: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ' },
  { id: 'after-salat-dua', cat: 'after-salat', titleAr: 'دعاء بعد الصلاة',       titleBn: 'নামাজের পর বিশেষ দুআ',      firstLine: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ' },
  { id: 'la-manea',        cat: 'after-salat', titleAr: 'لا مانع لما أعطيت',     titleBn: 'লা মানিআ দুআ',               firstLine: 'اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ' },
];

export const CATS: Category[] = [
  { id: 'salat',       icon: '🕌', titleBn: 'নামাজের দুআ',    sub: 'Prayers of Salat'           },
  { id: 'after-salat', icon: '🤲', titleBn: 'নামাজের পর দুআ', sub: 'Post-Prayer Supplications'  },
  { id: 'quran',       icon: '📖', titleBn: 'কুরআনের সূরা',  sub: 'Surahs of the Quran'        },
  { id: 'amal',        icon: '🕊️', titleBn: 'আমল ও ফজিলত',        sub: 'Deeds & Virtues'      },
  { id: 'masnun',      icon: '📿', titleBn: 'বিভিন্ন মাসনুন দোয়া', sub: 'Various Masnoon Duas' },
];

export const CAT_LABELS: Record<string, CatLabel> = {
  salat:   { bn: 'নামাজের দুআ',   en: 'Prayers of Salat'    },
  quran:   { bn: 'কুরআনের সূরা', en: 'Surahs of the Quran' },
  amal:          { bn: 'আমল ও ফজিলত',        en: 'Deeds & Virtues'           },
  masnun:        { bn: 'বিভিন্ন মাসনুন দোয়া', en: 'Various Masnoon Duas'      },
  'after-salat': { bn: 'নামাজের পর দুআ',     en: 'Post-Prayer Supplications' },
};

export const DETAIL_MAP: Record<string, DuaDetail> = {
  tashahhud: {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ،\nالسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ،\nالسَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ،\nأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    fullBanglaTranslit: 'আত্তাহিয়্যাতু লিল্লাহি ওয়াস্সালাওয়াতু ওয়াত্তাইয়্যিবাত, আস্সালামু আলাইকা আইয়্যুহান্নাবিয়্যু ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু, আস্সালামু আলাইনা ওয়া আলা ইবাদিল্লাহিস্ সালিহিন, আশহাদু আল্লা ইলাহা ইল্লাল্লাহু ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসুলুহু',
    fullMeaningBn: 'সকল সম্মান, ইবাদত ও পবিত্র কথা আল্লাহর জন্য। হে নবী! আপনার উপর শান্তি বর্ষিত হোক এবং আল্লাহর রহমত ও বরকত। আমাদের উপর এবং আল্লাহর সৎ বান্দাদের উপর শান্তি বর্ষিত হোক। আমি সাক্ষ্য দিচ্ছি যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ তাঁর বান্দা ও রাসুল।',
    segments: [
      {
        arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ',
        translit: 'At-Tahiyyātu lillāhi was-Salawātu wat-Tayyibāt',
        banglaTranslit: 'আত্তাহিয়্যাতু লিল্লাহি ওয়াস্সালাওয়াতু ওয়াত্তাইয়্যিবাত',
        meaningBn: 'সকল সম্মান, ইবাদত ও পবিত্র কথা আল্লাহর জন্য',
        meaningEn: 'All greetings, prayers, and pure words are for Allah',
        words: [
          { ar: 'التَّحِيَّاتُ', tr: 'At-Tahiyyātu', en: 'all greetings/salutations', bn: 'সকল সম্মান ও শুভেচ্ছা' },
          { ar: 'لِلَّهِ', tr: 'lillāhi', en: 'for Allah', bn: 'আল্লাহর জন্য' },
          { ar: 'وَالصَّلَوَاتُ', tr: 'was-Salawātu', en: 'and the prayers/worship', bn: 'এবং ইবাদত' },
          { ar: 'وَالطَّيِّبَاتُ', tr: 'wat-Tayyibāt', en: 'and the pure words', bn: 'এবং পবিত্র কথা' },
        ],
      },
      {
        arabic: 'السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ',
        translit: 'As-Salāmu alayka ayyuhan-Nabiyyu wa rahmatullāhi wa barakātuh',
        banglaTranslit: 'আস্সালামু আলাইকা আইয়্যুহান্নাবিয়্যু ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু',
        meaningBn: 'হে নবী! আপনার উপর শান্তি বর্ষিত হোক এবং আল্লাহর রহমত ও বরকত',
        meaningEn: 'Peace be upon you, O Prophet, and the mercy of Allah and His blessings',
        words: [
          { ar: 'السَّلَامُ', tr: 'As-Salāmu', en: 'peace', bn: 'শান্তি' },
          { ar: 'عَلَيْكَ', tr: 'alayka', en: 'upon you', bn: 'আপনার উপর' },
          { ar: 'أَيُّهَا النَّبِيُّ', tr: 'ayyuhan-Nabiyyu', en: 'O Prophet', bn: 'হে নবী' },
          { ar: 'وَرَحْمَةُ اللَّهِ', tr: 'wa rahmatullāhi', en: 'and the mercy of Allah', bn: 'এবং আল্লাহর রহমত' },
          { ar: 'وَبَرَكَاتُهُ', tr: 'wa barakātuh', en: 'and His blessings', bn: 'এবং তাঁর বরকত' },
        ],
      },
      {
        arabic: 'السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ',
        translit: 'As-Salāmu alaynā wa alā ibādillāhis-Sālihīn',
        banglaTranslit: 'আস্সালামু আলাইনা ওয়া আলা ইবাদিল্লাহিস্ সালিহিন',
        meaningBn: 'আমাদের উপর এবং আল্লাহর সৎ বান্দাদের উপর শান্তি বর্ষিত হোক',
        meaningEn: 'Peace be upon us and upon the righteous servants of Allah',
        words: [
          { ar: 'السَّلَامُ', tr: 'As-Salāmu', en: 'peace', bn: 'শান্তি' },
          { ar: 'عَلَيْنَا', tr: 'alaynā', en: 'upon us', bn: 'আমাদের উপর' },
          { ar: 'وَعَلَى', tr: 'wa alā', en: 'and upon', bn: 'এবং উপর' },
          { ar: 'عِبَادِ اللَّهِ', tr: 'ibādillāhi', en: 'servants of Allah', bn: 'আল্লাহর বান্দাদের' },
          { ar: 'الصَّالِحِينَ', tr: 'as-Sālihīn', en: 'the righteous', bn: 'সৎ/নেককার' },
        ],
      },
      {
        arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
        translit: 'Ashhadu an lā ilāha illallāhu wa ashhadu anna Muhammadan abduhū wa rasūluh',
        banglaTranslit: 'আশহাদু আল্লা ইলাহা ইল্লাল্লাহু ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসুলুহু',
        meaningBn: 'আমি সাক্ষ্য দিচ্ছি যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ তাঁর বান্দা ও রাসুল',
        meaningEn: 'I bear witness that none is worthy of worship except Allah, and that Muhammad is His servant and messenger',
        words: [
          { ar: 'أَشْهَدُ', tr: 'Ashhadu', en: 'I bear witness', bn: 'আমি সাক্ষ্য দিচ্ছি' },
          { ar: 'أَنْ لَا إِلَهَ', tr: 'an lā ilāha', en: 'that there is no god', bn: 'যে কোনো ইলাহ নেই' },
          { ar: 'إِلَّا اللَّهُ', tr: 'illallāhu', en: 'except Allah', bn: 'আল্লাহ ছাড়া' },
          { ar: 'وَأَشْهَدُ', tr: 'wa ashhadu', en: 'and I bear witness', bn: 'এবং আমি সাক্ষ্য দিচ্ছি' },
          { ar: 'أَنَّ مُحَمَّدًا', tr: 'anna Muhammadan', en: 'that Muhammad', bn: 'যে মুহাম্মাদ' },
          { ar: 'عَبْدُهُ', tr: 'abduhū', en: 'is His servant', bn: 'তাঁর বান্দা' },
          { ar: 'وَرَسُولُهُ', tr: 'wa rasūluh', en: 'and His messenger', bn: 'এবং তাঁর রাসুল' },
        ],
      },
    ],
  },

  darud: {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ،\nكَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ،\nإِنَّكَ حَمِيدٌ مَجِيدٌ،\nاللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ،\nكَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ،\nإِنَّكَ حَمِيدٌ مَجِيدٌ',
    fullBanglaTranslit: 'আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিন ওয়া আলা আলি মুহাম্মাদ, কামা সাল্লাইতা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিম, ইন্নাকা হামিদুম মাজিদ। আল্লাহুম্মা বারিক আলা মুহাম্মাদিন ওয়া আলা আলি মুহাম্মাদ, কামা বারাকতা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিম, ইন্নাকা হামিদুম মাজিদ।',
    fullMeaningBn: 'হে আল্লাহ! মুহাম্মাদ এবং মুহাম্মাদের পরিবারের উপর রহমত বর্ষণ করুন, যেভাবে আপনি ইব্রাহিম ও তাঁর পরিবারের উপর রহমত বর্ষণ করেছিলেন। নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত। হে আল্লাহ! মুহাম্মাদ ও তাঁর পরিবারের উপর বরকত দিন, যেভাবে আপনি ইব্রাহিম ও তাঁর পরিবারের উপর বরকত দিয়েছিলেন। নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত।',
    segments: [
      {
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
        translit: 'Allāhumma salli alā Muhammadin wa alā āli Muhammad',
        banglaTranslit: 'আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিন ওয়া আলা আলি মুহাম্মাদ',
        meaningBn: 'হে আল্লাহ! মুহাম্মাদ এবং মুহাম্মাদের পরিবারের উপর রহমত বর্ষণ করুন',
        meaningEn: 'O Allah, send Your blessings upon Muhammad and upon the family of Muhammad',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'صَلِّ', tr: 'salli', en: 'send blessings', bn: 'রহমত বর্ষণ করুন' },
          { ar: 'عَلَى', tr: 'alā', en: 'upon', bn: 'উপর' },
          { ar: 'مُحَمَّدٍ', tr: 'Muhammadin', en: 'Muhammad', bn: 'মুহাম্মাদ' },
          { ar: 'وَعَلَى آلِ', tr: 'wa alā āli', en: 'and upon the family of', bn: 'এবং পরিবারের উপর' },
        ],
      },
      {
        arabic: 'كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
        translit: 'kamā sallayta alā Ibrāhīma wa alā āli Ibrāhīma innaka Hamīdun Majīd',
        banglaTranslit: 'কামা সাল্লাইতা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিম, ইন্নাকা হামিদুম মাজিদ',
        meaningBn: 'যেভাবে আপনি ইব্রাহিম ও তাঁর পরিবারের উপর রহমত বর্ষণ করেছিলেন। নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত',
        meaningEn: 'Just as You sent blessings upon Ibrahim and the family of Ibrahim. Indeed You are Praiseworthy, Most Glorious',
        words: [
          { ar: 'كَمَا', tr: 'kamā', en: 'just as', bn: 'যেভাবে' },
          { ar: 'صَلَّيْتَ', tr: 'sallayta', en: 'You sent blessings', bn: 'আপনি রহমত বর্ষণ করেছিলেন' },
          { ar: 'عَلَى إِبْرَاهِيمَ', tr: 'alā Ibrāhīma', en: 'upon Ibrahim', bn: 'ইব্রাহিমের উপর' },
          { ar: 'إِنَّكَ', tr: 'innaka', en: 'indeed You are', bn: 'নিশ্চয়ই আপনি' },
          { ar: 'حَمِيدٌ', tr: 'Hamīdun', en: 'Praiseworthy', bn: 'প্রশংসনীয়' },
          { ar: 'مَجِيدٌ', tr: 'Majīd', en: 'Most Glorious', bn: 'মহিমান্বিত' },
        ],
      },
      {
        arabic: 'اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
        translit: 'Allāhumma bārik alā Muhammadin wa alā āli Muhammad',
        banglaTranslit: 'আল্লাহুম্মা বারিক আলা মুহাম্মাদিন ওয়া আলা আলি মুহাম্মাদ',
        meaningBn: 'হে আল্লাহ! মুহাম্মাদ এবং মুহাম্মাদের পরিবারের উপর বরকত দিন',
        meaningEn: 'O Allah, bless Muhammad and the family of Muhammad',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'بَارِكْ', tr: 'bārik', en: 'bestow blessings', bn: 'বরকত দিন' },
          { ar: 'عَلَى مُحَمَّدٍ', tr: 'alā Muhammadin', en: 'upon Muhammad', bn: 'মুহাম্মাদের উপর' },
          { ar: 'وَعَلَى آلِ', tr: 'wa alā āli', en: 'and upon the family of', bn: 'এবং পরিবারের উপর' },
        ],
      },
      {
        arabic: 'كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
        translit: 'kamā bārakta alā Ibrāhīma wa alā āli Ibrāhīma innaka Hamīdun Majīd',
        banglaTranslit: 'কামা বারাকতা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিম, ইন্নাকা হামিদুম মাজিদ',
        meaningBn: 'যেভাবে আপনি ইব্রাহিম ও তাঁর পরিবারের উপর বরকত দিয়েছিলেন। নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত',
        meaningEn: 'Just as You blessed Ibrahim and the family of Ibrahim. Indeed You are Praiseworthy, Most Glorious',
        words: [
          { ar: 'كَمَا', tr: 'kamā', en: 'just as', bn: 'যেভাবে' },
          { ar: 'بَارَكْتَ', tr: 'bārakta', en: 'You blessed', bn: 'আপনি বরকত দিয়েছিলেন' },
          { ar: 'عَلَى إِبْرَاهِيمَ', tr: 'alā Ibrāhīma', en: 'upon Ibrahim', bn: 'ইব্রাহিমের উপর' },
          { ar: 'إِنَّكَ حَمِيدٌ مَجِيدٌ', tr: 'innaka Hamīdun Majīd', en: 'indeed You are Praiseworthy, Most Glorious', bn: 'নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত' },
        ],
      },
    ],
  },

  'dua-masura': {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ،\nفَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي،\nإِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
    fullBanglaTranslit: 'আল্লাহুম্মা ইন্নি যালামতু নাফসি যুলমান কাসিরান ওয়া লা ইয়াগফিরুয্ যুনুবা ইল্লা আন্তা, ফাগফিরলি মাগফিরাতাম মিন ইন্দিকা ওয়ারহামনি, ইন্নাকা আন্তাল গাফুরুর রাহিম।',
    fullMeaningBn: 'হে আল্লাহ! আমি আমার নিজের উপর অনেক যুলুম করেছি এবং গুনাহ ক্ষমা করার ক্ষমতা কেবল আপনারই। তাই আপনার পক্ষ থেকে আমাকে বিশেষ ক্ষমা করুন এবং আমার উপর রহম করুন। নিশ্চয়ই আপনি মহাক্ষমাশীল, অসীম দয়ালু।',
    segments: [
      {
        arabic: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
        translit: 'Allāhumma innī zalamtu nafsī zulman kathīran wa lā yaghfirudhdhunūba illā ant',
        banglaTranslit: 'আল্লাহুম্মা ইন্নি যালামতু নাফসি যুলমান কাসিরান ওয়া লা ইয়াগফিরুয্ যুনুবা ইল্লা আন্তা',
        meaningBn: 'হে আল্লাহ! আমি আমার নিজের উপর অনেক যুলুম করেছি এবং গুনাহ ক্ষমা করার ক্ষমতা কেবল আপনারই',
        meaningEn: 'O Allah, I have wronged myself greatly and none forgives sins except You',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'إِنِّي', tr: 'innī', en: 'indeed I', bn: 'নিশ্চয়ই আমি' },
          { ar: 'ظَلَمْتُ نَفْسِي', tr: 'zalamtu nafsī', en: 'have wronged myself', bn: 'আমার নিজের উপর যুলুম করেছি' },
          { ar: 'ظُلْمًا كَثِيرًا', tr: 'zulman kathīran', en: 'greatly / many wrongs', bn: 'অনেক যুলুম' },
          { ar: 'وَلَا يَغْفِرُ الذُّنُوبَ', tr: 'wa lā yaghfirudhdhunūba', en: 'and none forgives sins', bn: 'এবং গুনাহ ক্ষমা করে না' },
          { ar: 'إِلَّا أَنْتَ', tr: 'illā ant', en: 'except You', bn: 'আপনি ছাড়া' },
        ],
      },
      {
        arabic: 'فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
        translit: 'Faghfir lī maghfiratan min indika warhamni innaka antal Ghafūrur-Rahīm',
        banglaTranslit: 'ফাগফিরলি মাগফিরাতাম মিন ইন্দিকা ওয়ারহামনি, ইন্নাকা আন্তাল গাফুরুর রাহিম',
        meaningBn: 'তাই আপনার পক্ষ থেকে আমাকে বিশেষ ক্ষমা করুন এবং আমার উপর রহম করুন। নিশ্চয়ই আপনি মহাক্ষমাশীল, অসীম দয়ালু',
        meaningEn: 'So forgive me with a forgiveness from Yourself and have mercy on me. Surely You are the Forgiving, the Merciful',
        words: [
          { ar: 'فَاغْفِرْ لِي', tr: 'faghfir lī', en: 'so forgive me', bn: 'তাই আমাকে ক্ষমা করুন' },
          { ar: 'مَغْفِرَةً مِنْ عِنْدِكَ', tr: 'maghfiratan min indika', en: 'forgiveness from Yourself', bn: 'আপনার পক্ষ থেকে ক্ষমা' },
          { ar: 'وَارْحَمْنِي', tr: 'warhamni', en: 'and have mercy on me', bn: 'এবং আমার উপর রহম করুন' },
          { ar: 'إِنَّكَ أَنْتَ', tr: 'innaka anta', en: 'indeed You are', bn: 'নিশ্চয়ই আপনি' },
          { ar: 'الْغَفُورُ', tr: 'al-Ghafūru', en: 'the Forgiving', bn: 'মহাক্ষমাশীল' },
          { ar: 'الرَّحِيمُ', tr: 'ar-Rahīm', en: 'the Merciful', bn: 'অসীম দয়ালু' },
        ],
      },
    ],
  },

  ruku: {
    reference: 'সহীহ মুসলিম · আবু দাউদ',
    fullArabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    fullBanglaTranslit: 'সুবহানা রব্বিয়াল আযিম',
    fullMeaningBn: 'আমার মহান প্রভুর পবিত্রতা ঘোষণা করছি',
    segments: [
      {
        arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
        translit: 'Subhāna Rabbiyal-Azīm',
        banglaTranslit: 'সুবহানা রব্বিয়াল আযিম',
        meaningBn: 'আমার মহান প্রভুর পবিত্রতা ঘোষণা করছি',
        meaningEn: 'Glory be to my Lord, the Most Great',
        words: [
          { ar: 'سُبْحَانَ', tr: 'Subhāna', en: 'Glory be to / Far removed from imperfection', bn: 'পবিত্র / মহিমান্বিত' },
          { ar: 'رَبِّيَ', tr: 'Rabbiya', en: 'my Lord', bn: 'আমার প্রভু' },
          { ar: 'الْعَظِيمِ', tr: 'al-Azīm', en: 'the Most Great', bn: 'সর্বমহান' },
        ],
      },
    ],
  },

  sijdah: {
    reference: 'সহীহ মুসলিম · আবু দাউদ',
    fullArabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    fullBanglaTranslit: "সুবহানা রব্বিয়াল আ'লা",
    fullMeaningBn: 'আমার সর্বোচ্চ প্রভুর পবিত্রতা ঘোষণা করছি',
    segments: [
      {
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
        translit: "Subhāna Rabbiyal-A'lā",
        banglaTranslit: "সুবহানা রব্বিয়াল আ'লা",
        meaningBn: 'আমার সর্বোচ্চ প্রভুর পবিত্রতা ঘোষণা করছি',
        meaningEn: 'Glory be to my Lord, the Most High',
        words: [
          { ar: 'سُبْحَانَ', tr: 'Subhāna', en: 'Glory be to', bn: 'পবিত্র' },
          { ar: 'رَبِّيَ', tr: 'Rabbiya', en: 'my Lord', bn: 'আমার প্রভু' },
          { ar: 'الْأَعْلَى', tr: "al-A'lā", en: 'the Most High', bn: 'সর্বোচ্চ' },
        ],
      },
    ],
  },

  qiyam: {
    reference: 'আবু দাউদ · তিরমিযি',
    fullArabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ\nوَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ\nوَلَا إِلَهَ غَيْرُكَ',
    fullBanglaTranslit: 'সুবহানাকাল্লাহুম্মা ওয়া বিহামদিকা ওয়া তাবারাকাসমুকা ওয়া তাআলা জাদ্দুকা ওয়া লা ইলাহা গাইরুক',
    fullMeaningBn: 'হে আল্লাহ! আমি আপনার প্রশংসাসহ পবিত্রতা ঘোষণা করছি। আপনার নাম বরকতময়, আপনার মহত্ব অতি উচ্চ এবং আপনি ছাড়া কোনো ইলাহ নেই।',
    segments: [
      {
        arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ',
        translit: 'Subhānakallāhumma wa bihamdik',
        banglaTranslit: 'সুবহানাকাল্লাহুম্মা ওয়া বিহামদিক',
        meaningBn: 'হে আল্লাহ! আমি আপনার প্রশংসাসহ পবিত্রতা ঘোষণা করছি',
        meaningEn: 'O Allah, You are glorified and praised',
        words: [
          { ar: 'سُبْحَانَكَ', tr: 'Subhānaka', en: 'Glory be to You', bn: 'আপনার পবিত্রতা' },
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'وَبِحَمْدِكَ', tr: 'wa bihamdik', en: 'and with Your praise', bn: 'এবং আপনার প্রশংসাসহ' },
        ],
      },
      {
        arabic: 'وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ',
        translit: 'wa tabārakasmuka wa taālā jadduka wa lā ilāha ghayruk',
        banglaTranslit: 'ওয়া তাবারাকাসমুকা ওয়া তাআলা জাদ্দুকা ওয়া লা ইলাহা গাইরুক',
        meaningBn: 'আপনার নাম বরকতময়, আপনার মহত্ব অতি উচ্চ এবং আপনি ছাড়া কোনো ইলাহ নেই',
        meaningEn: 'Blessed is Your name, exalted is Your majesty, and there is none worthy of worship except You',
        words: [
          { ar: 'وَتَبَارَكَ', tr: 'wa tabāraka', en: 'and Blessed is', bn: 'এবং বরকতময়' },
          { ar: 'اسْمُكَ', tr: 'asmuka', en: 'Your name', bn: 'আপনার নাম' },
          { ar: 'وَتَعَالَى', tr: 'wa taālā', en: 'and Exalted is', bn: 'এবং উচ্চ' },
          { ar: 'جَدُّكَ', tr: 'jadduka', en: 'Your majesty', bn: 'আপনার মহত্ব' },
          { ar: 'وَلَا إِلَهَ', tr: 'wa lā ilāha', en: 'and there is no god', bn: 'এবং কোনো ইলাহ নেই' },
          { ar: 'غَيْرُكَ', tr: 'ghayruk', en: 'besides You', bn: 'আপনি ছাড়া' },
        ],
      },
    ],
  },

  fatiha: {
    reference: 'সূরা আল-ফাতিহা · আয়াত ১–৭ · মাক্কী সূরা',
    fullArabic: Q.fatiha.join('\n'),
    fullBanglaTranslit: "বিসমিল্লাহির রাহমানির রাহিম। আলহামদু লিল্লাহি রব্বিল আলামিন। আর্রাহমানির রাহিম। মালিকি ইয়াওমিদ্দিন। ইয়্যাকা না'বুদু ওয়া ইয়্যাকা নাস্তাইন। ইহদিনাস্ সিরাতাল মুস্তাকিম। সিরাতাল্লাযিনা আন'আমতা আলাইহিম, গাইরিল মাগযুবি আলাইহিম ওয়ালাদ দ্বাল্লিন।",
    fullMeaningBn: 'পরম করুণাময় অসীম দয়ালু আল্লাহর নামে। সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সমগ্র সৃষ্টির পালনকর্তা। যিনি পরম করুণাময়, অসীম দয়ালু। যিনি বিচার দিনের মালিক। আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনার কাছেই সাহায্য চাই। আমাদের সরল পথ দেখান — তাদের পথ যাদের উপর আপনি অনুগ্রহ করেছেন, তাদের পথ নয় যাদের উপর ক্রোধ হয়েছে এবং যারা পথভ্রষ্ট।',
    segments: [
      {
        arabic: Q.fatiha[0],
        translit: 'Bismillāhir-Rahmānir-Rahīm',
        banglaTranslit: 'বিসমিল্লাহির রাহমানির রাহিম',
        meaningBn: 'পরম করুণাময় অসীম দয়ালু আল্লাহর নামে',
        meaningEn: 'In the name of Allah, the Most Gracious, the Most Merciful',
        words: [
          { ar: 'بِسْمِ', tr: 'Bismi', en: 'In the name of', bn: 'নামে' },
          { ar: 'اللَّهِ', tr: 'Allāhi', en: 'Allah', bn: 'আল্লাহর' },
          { ar: 'الرَّحْمَنِ', tr: 'ar-Rahmāni', en: 'the Most Gracious', bn: 'পরম করুণাময়' },
          { ar: 'الرَّحِيمِ', tr: 'ar-Rahīm', en: 'the Most Merciful', bn: 'অসীম দয়ালু' },
        ],
      },
      {
        arabic: Q.fatiha[1],
        translit: 'Alhamdu lillāhi Rabbil-ālamīn',
        banglaTranslit: 'আলহামদু লিল্লাহি রব্বিল আলামিন',
        meaningBn: 'সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সমগ্র সৃষ্টির পালনকর্তা',
        meaningEn: 'All praise is due to Allah, Lord of all the worlds',
        words: [
          { ar: 'الْحَمْدُ', tr: 'Al-hamdu', en: 'all praise', bn: 'সকল প্রশংসা' },
          { ar: 'لِلَّهِ', tr: 'lillāhi', en: 'is for Allah', bn: 'আল্লাহর জন্য' },
          { ar: 'رَبِّ', tr: 'Rabbi', en: 'Lord / Sustainer', bn: 'পালনকর্তা' },
          { ar: 'الْعَالَمِينَ', tr: 'al-ālamīn', en: 'of all the worlds', bn: 'সমগ্র সৃষ্টির' },
        ],
      },
      {
        arabic: Q.fatiha[2],
        translit: 'Ar-Rahmānir-Rahīm',
        banglaTranslit: 'আর্রাহমানির রাহিম',
        meaningBn: 'যিনি পরম করুণাময়, অসীম দয়ালু',
        meaningEn: 'The Most Gracious, the Most Merciful',
        words: [
          { ar: 'الرَّحْمَنِ', tr: 'ar-Rahmāni', en: 'the Most Gracious (for all creation)', bn: 'পরম করুণাময় (সকলের জন্য)' },
          { ar: 'الرَّحِيمِ', tr: 'ar-Rahīm', en: 'the Most Merciful (for believers)', bn: 'অসীম দয়ালু (মুমিনদের জন্য)' },
        ],
      },
      {
        arabic: Q.fatiha[3],
        translit: 'Māliki yawmid-dīn',
        banglaTranslit: 'মালিকি ইয়াওমিদ্দিন',
        meaningBn: 'যিনি বিচার দিনের মালিক',
        meaningEn: 'Master of the Day of Judgment',
        words: [
          { ar: 'مَالِكِ', tr: 'Māliki', en: 'Master / Owner', bn: 'মালিক' },
          { ar: 'يَوْمِ', tr: 'yawmi', en: 'of the Day', bn: 'দিনের' },
          { ar: 'الدِّينِ', tr: 'ad-dīn', en: 'of Judgment', bn: 'বিচার / দ্বীন' },
        ],
      },
      {
        arabic: Q.fatiha[4],
        translit: "Iyyāka na'budu wa iyyāka nasta'īn",
        banglaTranslit: "ইয়্যাকা না'বুদু ওয়া ইয়্যাকা নাস্তাইন",
        meaningBn: 'আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনার কাছেই সাহায্য চাই',
        meaningEn: 'You alone we worship, and You alone we ask for help',
        words: [
          { ar: 'إِيَّاكَ', tr: 'Iyyāka', en: 'You alone', bn: 'শুধু আপনাকেই' },
          { ar: 'نَعْبُدُ', tr: "na'budu", en: 'we worship', bn: 'আমরা ইবাদত করি' },
          { ar: 'وَإِيَّاكَ', tr: 'wa iyyāka', en: 'and You alone', bn: 'এবং শুধু আপনার কাছেই' },
          { ar: 'نَسْتَعِينُ', tr: "nasta'īn", en: 'we seek help', bn: 'আমরা সাহায্য চাই' },
        ],
      },
      {
        arabic: Q.fatiha[5],
        translit: 'Ihdinassirātal mustaqīm',
        banglaTranslit: 'ইহদিনাস্ সিরাতাল মুস্তাকিম',
        meaningBn: 'আমাদের সরল পথ দেখান',
        meaningEn: 'Guide us to the straight path',
        words: [
          { ar: 'اهْدِنَا', tr: 'Ihdina', en: 'guide us', bn: 'আমাদের পথ দেখান' },
          { ar: 'الصِّرَاطَ', tr: 'as-sirāta', en: 'the path', bn: 'পথ' },
          { ar: 'الْمُسْتَقِيمَ', tr: 'al-mustaqīm', en: 'the straight / upright', bn: 'সরল / সঠিক' },
        ],
      },
      {
        arabic: Q.fatiha[6],
        translit: "Sirātal-ladhīna an'amta alayhim ghayril maghdhūbi alayhim wa lad-dhāllīn",
        banglaTranslit: "সিরাতাল্লাযিনা আন'আমতা আলাইহিম, গাইরিল মাগযুবি আলাইহিম ওয়ালাদ দ্বাল্লিন",
        meaningBn: 'তাদের পথ যাদের উপর আপনি অনুগ্রহ করেছেন, তাদের পথ নয় যাদের উপর ক্রোধ হয়েছে এবং যারা পথভ্রষ্ট',
        meaningEn: 'The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray',
        words: [
          { ar: 'صِرَاطَ', tr: 'Sirāta', en: 'path of', bn: 'পথ' },
          { ar: 'الَّذِينَ', tr: 'alladhīna', en: 'those who', bn: 'যারা' },
          { ar: 'أَنْعَمْتَ', tr: "an'amta", en: 'You have blessed', bn: 'আপনি অনুগ্রহ করেছেন' },
          { ar: 'عَلَيْهِمْ', tr: 'alayhim', en: 'upon them', bn: 'তাদের উপর' },
          { ar: 'غَيْرِ الْمَغْضُوبِ', tr: 'ghayril maghdhūbi', en: 'not those who earned anger', bn: 'যাদের উপর ক্রোধ হয়নি' },
          { ar: 'وَلَا الضَّالِّينَ', tr: 'wa lad-dhāllīn', en: 'nor those who go astray', bn: 'এবং যারা পথভ্রষ্ট নয়' },
        ],
      },
    ],
  },

  ikhlas: {
    reference: 'সূরা আল-ইখলাস · আয়াত ১–৪ · মাক্কী সূরা',
    fullArabic: [Q.bismillah, ...Q.ikhlas].join('\n'),
    fullBanglaTranslit: 'কুল হুওয়াল্লাহু আহাদ। আল্লাহুস্ সামাদ। লাম ইয়ালিদ ওয়ালাম ইউলাদ। ওয়ালাম ইয়াকুল্লাহু কুফুওয়ান আহাদ।',
    fullMeaningBn: 'বলুন, তিনি আল্লাহ, একক। আল্লাহ চিরস্থায়ী ও সকলের আশ্রয়। তিনি জন্ম দেননি এবং জন্ম নেননি। এবং তাঁর সমকক্ষ কেউ নেই।',
    segments: [
      {
        arabic: Q.ikhlas[0],
        translit: 'Qul huwallāhu ahad',
        banglaTranslit: 'কুল হুওয়াল্লাহু আহাদ',
        meaningBn: 'বলুন, তিনি আল্লাহ, একক',
        meaningEn: 'Say: He is Allah, the One',
        words: [
          { ar: 'قُلْ', tr: 'Qul', en: 'Say', bn: 'বলুন' },
          { ar: 'هُوَ', tr: 'huwa', en: 'He', bn: 'তিনি' },
          { ar: 'اللَّهُ', tr: 'Allāhu', en: 'Allah', bn: 'আল্লাহ' },
          { ar: 'أَحَدٌ', tr: 'ahad', en: 'the One / Unique', bn: 'একক / অদ্বিতীয়' },
        ],
      },
      {
        arabic: Q.ikhlas[1],
        translit: 'Allāhus-Samad',
        banglaTranslit: 'আল্লাহুস্ সামাদ',
        meaningBn: 'আল্লাহ চিরস্থায়ী, সকলের আশ্রয়স্থল',
        meaningEn: 'Allah, the Eternal Refuge (upon whom all depend)',
        words: [
          { ar: 'اللَّهُ', tr: 'Allāhu', en: 'Allah', bn: 'আল্লাহ' },
          { ar: 'الصَّمَدُ', tr: 'as-Samad', en: 'the Eternal / the Self-Sufficient Master', bn: 'চিরস্থায়ী / সকলের আশ্রয়' },
        ],
      },
      {
        arabic: Q.ikhlas[2],
        translit: 'Lam yalid wa lam yūlad',
        banglaTranslit: 'লাম ইয়ালিদ ওয়ালাম ইউলাদ',
        meaningBn: 'তিনি জন্ম দেননি এবং জন্ম নেননি',
        meaningEn: 'He neither begets nor was He begotten',
        words: [
          { ar: 'لَمْ', tr: 'Lam', en: 'He did not / never', bn: 'তিনি করেননি' },
          { ar: 'يَلِدْ', tr: 'yalid', en: 'beget / give birth', bn: 'জন্ম দেননি' },
          { ar: 'وَلَمْ', tr: 'wa lam', en: 'and did not', bn: 'এবং করেননি' },
          { ar: 'يُولَدْ', tr: 'yūlad', en: 'be born / begotten', bn: 'জন্ম নেননি' },
        ],
      },
      {
        arabic: Q.ikhlas[3],
        translit: 'Wa lam yakun lahū kufuwan ahad',
        banglaTranslit: 'ওয়ালাম ইয়াকুল্লাহু কুফুওয়ান আহাদ',
        meaningBn: 'এবং তাঁর সমকক্ষ কেউ নেই',
        meaningEn: 'And there is none comparable to Him',
        words: [
          { ar: 'وَلَمْ يَكُنْ', tr: 'wa lam yakun', en: 'and there is not', bn: 'এবং নেই' },
          { ar: 'لَهُ', tr: 'lahū', en: 'for Him', bn: 'তাঁর জন্য' },
          { ar: 'كُفُوًا', tr: 'kufuwan', en: 'equal / comparable', bn: 'সমকক্ষ' },
          { ar: 'أَحَدٌ', tr: 'ahad', en: 'anyone', bn: 'কেউ' },
        ],
      },
    ],
  },

  kalima: {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
    fullBanglaTranslit: 'লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ',
    fullMeaningBn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, মুহাম্মাদ আল্লাহর রাসুল।',
    segments: [
      {
        arabic: 'لَا إِلَهَ إِلَّا اللَّهُ',
        translit: 'Lā ilāha illallāh',
        banglaTranslit: 'লা ইলাহা ইল্লাল্লাহ',
        meaningBn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই',
        meaningEn: 'There is no god worthy of worship except Allah',
        words: [
          { ar: 'لَا', tr: 'Lā', en: 'There is no', bn: 'নেই' },
          { ar: 'إِلَهَ', tr: 'ilāha', en: 'god / deity', bn: 'ইলাহ / উপাস্য' },
          { ar: 'إِلَّا', tr: 'illā', en: 'except', bn: 'ছাড়া' },
          { ar: 'اللَّهُ', tr: 'Allāh', en: 'Allah', bn: 'আল্লাহ' },
        ],
      },
      {
        arabic: 'مُحَمَّدٌ رَسُولُ اللَّهِ',
        translit: 'Muhammadun Rasūlullāh',
        banglaTranslit: 'মুহাম্মাদুর রাসুলুল্লাহ',
        meaningBn: 'মুহাম্মাদ আল্লাহর রাসুল',
        meaningEn: 'Muhammad is the messenger of Allah',
        words: [
          { ar: 'مُحَمَّدٌ', tr: 'Muhammadun', en: 'Muhammad', bn: 'মুহাম্মাদ' },
          { ar: 'رَسُولُ', tr: 'Rasūlu', en: 'the messenger', bn: 'রাসুল' },
          { ar: 'اللَّهِ', tr: 'Allāhi', en: 'of Allah', bn: 'আল্লাহর' },
        ],
      },
    ],
  },

  'istighfar-salat': {
    reference: 'সহীহ মুসলিম · আবু দাউদ',
    fullArabic: 'أَسْتَغْفِرُ اللَّهَ،\nأَسْتَغْفِرُ اللَّهَ،\nأَسْتَغْفِرُ اللَّهَ',
    fullBanglaTranslit: 'আস্তাগফিরুল্লাহ, আস্তাগফিরুল্লাহ, আস্তাগফিরুল্লাহ',
    fullMeaningBn: 'আমি আল্লাহর কাছে ক্ষমা চাই (তিনবার)',
    segments: [
      {
        arabic: 'أَسْتَغْفِرُ اللَّهَ',
        translit: 'Astaghfirullāh',
        banglaTranslit: 'আস্তাগফিরুল্লাহ',
        meaningBn: 'আমি আল্লাহর কাছে ক্ষমা চাই — নামাজের পর তিনবার পড়তে হয়',
        meaningEn: 'I seek forgiveness from Allah — recited three times after prayer',
        words: [
          { ar: 'أَسْتَغْفِرُ', tr: 'Astaghfiru', en: 'I seek forgiveness', bn: 'আমি ক্ষমা চাই' },
          { ar: 'اللَّهَ', tr: 'Allāha', en: 'from Allah', bn: 'আল্লাহর কাছে' },
        ],
      },
    ],
  },

  'salam-dua': {
    reference: 'সহীহ মুসলিম · নাসাই',
    fullArabic: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ،\nتَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
    fullBanglaTranslit: 'আল্লাহুম্মা আন্তাস্ সালামু ওয়া মিন্কাস্ সালাম, তাবারাকতা ইয়া যাল জালালি ওয়াল ইকরাম।',
    fullMeaningBn: 'হে আল্লাহ! আপনি শান্তি এবং আপনার কাছ থেকেই শান্তি আসে। হে মহিমাময় ও সম্মানিত! আপনি বরকতময়।',
    segments: [
      {
        arabic: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ',
        translit: 'Allāhumma antas-Salāmu wa minkas-Salām',
        banglaTranslit: 'আল্লাহুম্মা আন্তাস্ সালামু ওয়া মিন্কাস্ সালাম',
        meaningBn: 'হে আল্লাহ! আপনি শান্তি এবং শান্তি আসে আপনার কাছ থেকেই',
        meaningEn: 'O Allah, You are Peace and from You comes peace',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'أَنْتَ', tr: 'anta', en: 'You are', bn: 'আপনি' },
          { ar: 'السَّلَامُ', tr: 'as-Salāmu', en: 'the Peace', bn: 'শান্তি' },
          { ar: 'وَمِنْكَ', tr: 'wa minka', en: 'and from You', bn: 'এবং আপনার কাছ থেকে' },
          { ar: 'السَّلَامُ', tr: 'as-Salāmu', en: 'comes peace', bn: 'আসে শান্তি' },
        ],
      },
      {
        arabic: 'تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
        translit: 'tabārakta yā Dhal-Jalāli wal-Ikrām',
        banglaTranslit: 'তাবারাকতা ইয়া যাল জালালি ওয়াল ইকরাম',
        meaningBn: 'হে মহিমাময় ও সম্মানিত! আপনি বরকতময়',
        meaningEn: 'Blessed are You, O Possessor of Majesty and Honour',
        words: [
          { ar: 'تَبَارَكْتَ', tr: 'tabārakta', en: 'You are Blessed', bn: 'আপনি বরকতময়' },
          { ar: 'يَا ذَا', tr: 'yā Dha', en: 'O Possessor of', bn: 'হে অধিকারী' },
          { ar: 'الْجَلَالِ', tr: 'al-Jalāli', en: 'Majesty', bn: 'মহিমা' },
          { ar: 'وَالْإِكْرَامِ', tr: 'wal-Ikrām', en: 'and Honour', bn: 'এবং সম্মান' },
        ],
      },
    ],
  },

  tahleel: {
    reference: 'সহীহ মুসলিম · সহীহ বুখারি',
    fullArabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ،\nلَهُ الْمُلْكُ وَلَهُ الْحَمْدُ،\nوَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    fullBanglaTranslit: 'লা ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শারিকা লাহু, লাহুল মুলকু ওয়া লাহুল হামদু, ওয়া হুয়া আলা কুল্লি শাইয়িন কাদির।',
    fullMeaningBn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একা, তাঁর কোনো শরিক নেই। রাজত্ব তাঁরই এবং প্রশংসাও তাঁরই। তিনি সব কিছুর উপর সর্বশক্তিমান।',
    segments: [
      {
        arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
        translit: 'Lā ilāha illallāhu wahdahū lā sharīka lah',
        banglaTranslit: 'লা ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শারিকা লাহু',
        meaningBn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একা, তাঁর কোনো শরিক নেই',
        meaningEn: 'There is no god but Allah, alone, without partner',
        words: [
          { ar: 'لَا إِلَهَ إِلَّا اللَّهُ', tr: 'Lā ilāha illallāhu', en: 'There is no god but Allah', bn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই' },
          { ar: 'وَحْدَهُ', tr: 'wahdahū', en: 'alone', bn: 'তিনি একা' },
          { ar: 'لَا شَرِيكَ لَهُ', tr: 'lā sharīka lah', en: 'without partner', bn: 'তাঁর কোনো শরিক নেই' },
        ],
      },
      {
        arabic: 'لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
        translit: 'lahul-mulku wa lahul-hamdu wa huwa alā kulli shayʾin Qadīr',
        banglaTranslit: 'লাহুল মুলকু ওয়া লাহুল হামদু ওয়া হুয়া আলা কুল্লি শাইয়িন কাদির',
        meaningBn: 'রাজত্ব তাঁরই, প্রশংসাও তাঁরই এবং তিনি সব কিছুর উপর সর্বশক্তিমান',
        meaningEn: 'His is the dominion, His is all praise, and He is over all things omnipotent',
        words: [
          { ar: 'لَهُ الْمُلْكُ', tr: 'lahul-mulku', en: 'His is the dominion', bn: 'রাজত্ব তাঁরই' },
          { ar: 'وَلَهُ الْحَمْدُ', tr: 'wa lahul-hamdu', en: 'and His is all praise', bn: 'এবং প্রশংসাও তাঁরই' },
          { ar: 'وَهُوَ', tr: 'wa huwa', en: 'and He is', bn: 'এবং তিনি' },
          { ar: 'عَلَى كُلِّ شَيْءٍ', tr: 'alā kulli shayʾin', en: 'over all things', bn: 'সব কিছুর উপর' },
          { ar: 'قَدِيرٌ', tr: 'Qadīr', en: 'omnipotent', bn: 'সর্বশক্তিমান' },
        ],
      },
    ],
  },

  'tasbih-fatemi': {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'سُبْحَانَ اللَّهِ (٣٣ مرة)\nالْحَمْدُ لِلَّهِ (٣٣ مرة)\nاللَّهُ أَكْبَرُ (٣٤ مرة)',
    fullBanglaTranslit: 'সুবহানাল্লাহ (৩৩ বার), আলহামদুলিল্লাহ (৩৩ বার), আল্লাহু আকবার (৩৪ বার)',
    fullMeaningBn: 'আল্লাহ পবিত্র (৩৩ বার), সকল প্রশংসা আল্লাহর (৩৩ বার), আল্লাহ সর্বমহান (৩৪ বার)। মোট ১০০ বার।',
    segments: [
      {
        arabic: 'سُبْحَانَ اللَّهِ — ٣٣ مرة',
        translit: 'Subhānallāh — 33 times',
        banglaTranslit: 'সুবহানাল্লাহ — ৩৩ বার',
        meaningBn: 'আল্লাহ পবিত্র — ৩৩ বার পড়তে হয়',
        meaningEn: 'Glory be to Allah — recited 33 times',
        words: [
          { ar: 'سُبْحَانَ', tr: 'Subhāna', en: 'Glory be to', bn: 'পবিত্র' },
          { ar: 'اللَّهِ', tr: 'Allāhi', en: 'Allah', bn: 'আল্লাহ' },
        ],
      },
      {
        arabic: 'الْحَمْدُ لِلَّهِ — ٣٣ مرة',
        translit: 'Alhamdulillāh — 33 times',
        banglaTranslit: 'আলহামদুলিল্লাহ — ৩৩ বার',
        meaningBn: 'সকল প্রশংসা আল্লাহর — ৩৩ বার পড়তে হয়',
        meaningEn: 'All praise is for Allah — recited 33 times',
        words: [
          { ar: 'الْحَمْدُ', tr: 'al-Hamdu', en: 'all praise', bn: 'সকল প্রশংসা' },
          { ar: 'لِلَّهِ', tr: 'lillāhi', en: 'for Allah', bn: 'আল্লাহর জন্য' },
        ],
      },
      {
        arabic: 'اللَّهُ أَكْبَرُ — ٣٤ مرة',
        translit: 'Allāhu Akbar — 34 times',
        banglaTranslit: 'আল্লাহু আকবার — ৩৪ বার',
        meaningBn: 'আল্লাহ সর্বমহান — ৩৪ বার পড়তে হয়',
        meaningEn: 'Allah is the Greatest — recited 34 times',
        words: [
          { ar: 'اللَّهُ', tr: 'Allāhu', en: 'Allah', bn: 'আল্লাহ' },
          { ar: 'أَكْبَرُ', tr: 'Akbaru', en: 'is the Greatest', bn: 'সর্বমহান' },
        ],
      },
    ],
  },

  'after-salat-dua': {
    reference: 'আবু দাউদ · নাসাই · মুসনাদ আহমাদ',
    fullArabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
    fullBanglaTranslit: 'আল্লাহুম্মা আইন্নি আলা যিকরিকা ওয়া শুকরিকা ওয়া হুসনি ইবাদাতিক।',
    fullMeaningBn: 'হে আল্লাহ! আপনার যিকর করতে, আপনার শুকরিয়া আদায় করতে এবং সুন্দরভাবে আপনার ইবাদত করতে আমাকে সাহায্য করুন।',
    segments: [
      {
        arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ',
        translit: 'Allāhumma aʿinnī alā dhikrik',
        banglaTranslit: 'আল্লাহুম্মা আইন্নি আলা যিকরিক',
        meaningBn: 'হে আল্লাহ! আপনার যিকর করতে আমাকে সাহায্য করুন',
        meaningEn: 'O Allah, help me to remember You',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'أَعِنِّي', tr: "aʿinnī", en: 'help me', bn: 'আমাকে সাহায্য করুন' },
          { ar: 'عَلَى ذِكْرِكَ', tr: 'alā dhikrik', en: 'to remember You', bn: 'আপনার যিকর করতে' },
        ],
      },
      {
        arabic: 'وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
        translit: 'wa shukrik wa husni ibādatik',
        banglaTranslit: 'ওয়া শুকরিকা ওয়া হুসনি ইবাদাতিক',
        meaningBn: 'এবং আপনার শুকরিয়া আদায় করতে এবং সুন্দরভাবে আপনার ইবাদত করতে',
        meaningEn: 'and to be grateful to You and to worship You in the best manner',
        words: [
          { ar: 'وَشُكْرِكَ', tr: 'wa shukrik', en: 'and to be grateful to You', bn: 'এবং আপনার শুকরিয়া আদায় করতে' },
          { ar: 'وَحُسْنِ', tr: 'wa husni', en: 'and the best of', bn: 'এবং সুন্দরভাবে' },
          { ar: 'عِبَادَتِكَ', tr: 'ibādatik', en: 'Your worship', bn: 'আপনার ইবাদত' },
        ],
      },
    ],
  },

  'durood-after': {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ،\nكَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ،\nاللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ،\nكَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    fullBanglaTranslit: 'আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিন ওয়া আলা আলি মুহাম্মাদ, কামা সাল্লাইতা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিম, ইন্নাকা হামিদুম মাজিদ। আল্লাহুম্মা বারিক আলা মুহাম্মাদিন ওয়া আলা আলি মুহাম্মাদ, কামা বারাকতা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিম, ইন্নাকা হামিদুম মাজিদ।',
    fullMeaningBn: 'হে আল্লাহ! মুহাম্মাদ ও তাঁর পরিবারের উপর রহমত বর্ষণ করুন, যেভাবে ইব্রাহিম ও তাঁর পরিবারের উপর বর্ষণ করেছিলেন। নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত। মুহাম্মাদ ও তাঁর পরিবারের উপর বরকত দিন, যেভাবে ইব্রাহিম ও তাঁর পরিবারকে দিয়েছিলেন।',
    segments: [
      {
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
        translit: 'Allāhumma salli alā Muhammadin wa alā āli Muhammad',
        banglaTranslit: 'আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিন ওয়া আলা আলি মুহাম্মাদ',
        meaningBn: 'হে আল্লাহ! মুহাম্মাদ ও তাঁর পরিবারের উপর রহমত বর্ষণ করুন',
        meaningEn: 'O Allah, send blessings upon Muhammad and upon the family of Muhammad',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'صَلِّ', tr: 'salli', en: 'send blessings', bn: 'রহমত বর্ষণ করুন' },
          { ar: 'عَلَى مُحَمَّدٍ', tr: 'alā Muhammadin', en: 'upon Muhammad', bn: 'মুহাম্মাদের উপর' },
          { ar: 'وَعَلَى آلِ مُحَمَّدٍ', tr: 'wa alā āli Muhammad', en: 'and upon the family of Muhammad', bn: 'এবং মুহাম্মাদের পরিবারের উপর' },
        ],
      },
      {
        arabic: 'كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
        translit: 'kamā sallayta alā Ibrāhīma wa alā āli Ibrāhīma innaka Hamīdun Majīd',
        banglaTranslit: 'কামা সাল্লাইতা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিম, ইন্নাকা হামিদুম মাজিদ',
        meaningBn: 'যেভাবে আপনি ইব্রাহিম ও তাঁর পরিবারের উপর রহমত বর্ষণ করেছিলেন — নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত',
        meaningEn: 'Just as You sent blessings upon Ibrahim and the family of Ibrahim — indeed You are Praiseworthy, Most Glorious',
        words: [
          { ar: 'كَمَا', tr: 'kamā', en: 'just as', bn: 'যেভাবে' },
          { ar: 'صَلَّيْتَ', tr: 'sallayta', en: 'You sent blessings', bn: 'আপনি রহমত বর্ষণ করেছিলেন' },
          { ar: 'عَلَى إِبْرَاهِيمَ', tr: 'alā Ibrāhīma', en: 'upon Ibrahim', bn: 'ইব্রাহিমের উপর' },
          { ar: 'إِنَّكَ حَمِيدٌ مَجِيدٌ', tr: 'innaka Hamīdun Majīd', en: 'indeed You are Praiseworthy, Most Glorious', bn: 'নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত' },
        ],
      },
      {
        arabic: 'اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
        translit: 'Allāhumma bārik alā Muhammadin wa alā āli Muhammad',
        banglaTranslit: 'আল্লাহুম্মা বারিক আলা মুহাম্মাদিন ওয়া আলা আলি মুহাম্মাদ',
        meaningBn: 'হে আল্লাহ! মুহাম্মাদ ও তাঁর পরিবারের উপর বরকত দিন',
        meaningEn: 'O Allah, bless Muhammad and the family of Muhammad',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'بَارِكْ', tr: 'bārik', en: 'bestow blessings', bn: 'বরকত দিন' },
          { ar: 'عَلَى مُحَمَّدٍ', tr: 'alā Muhammadin', en: 'upon Muhammad', bn: 'মুহাম্মাদের উপর' },
          { ar: 'وَعَلَى آلِ مُحَمَّدٍ', tr: 'wa alā āli Muhammad', en: 'and upon the family of Muhammad', bn: 'এবং মুহাম্মাদের পরিবারের উপর' },
        ],
      },
      {
        arabic: 'كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
        translit: 'kamā bārakta alā Ibrāhīma wa alā āli Ibrāhīma innaka Hamīdun Majīd',
        banglaTranslit: 'কামা বারাকতা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিম, ইন্নাকা হামিদুম মাজিদ',
        meaningBn: 'যেভাবে আপনি ইব্রাহিম ও তাঁর পরিবারের উপর বরকত দিয়েছিলেন — নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত',
        meaningEn: 'Just as You blessed Ibrahim and the family of Ibrahim — indeed You are Praiseworthy, Most Glorious',
        words: [
          { ar: 'كَمَا', tr: 'kamā', en: 'just as', bn: 'যেভাবে' },
          { ar: 'بَارَكْتَ', tr: 'bārakta', en: 'You blessed', bn: 'আপনি বরকত দিয়েছিলেন' },
          { ar: 'عَلَى إِبْرَاهِيمَ', tr: 'alā Ibrāhīma', en: 'upon Ibrahim', bn: 'ইব্রাহিমের উপর' },
          { ar: 'إِنَّكَ حَمِيدٌ مَجِيدٌ', tr: 'innaka Hamīdun Majīd', en: 'indeed You are Praiseworthy, Most Glorious', bn: 'নিশ্চয়ই আপনি প্রশংসনীয়, মহিমান্বিত' },
        ],
      },
    ],
  },

  'ayah-kursi-after': {
    reference: 'সূরা আল-বাক্বারাহ · আয়াত ২৫৫ · নাসাই',
    fullArabic: Q.ayatulKursi,
    fullBanglaTranslit: "আল্লাহু লা ইলাহা ইল্লা হুওয়াল হাইয়্যুল কাইয়্যুম। লা তা'খুযুহু সিনাতুওঁ ওয়ালা নাউম। লাহু মা ফিস্ সামাওয়াতি ওয়ামা ফিল আরদ্ব। মান যাল্লাযি ইয়াশফাউ ইন্দাহু ইল্লা বিইযনিহি। ইয়া'লামু মা বাইনা আইদিহিম ওয়ামা খালফাহুম। ওয়ালা ইউহিতুনা বিশাইয়িম মিন ইলমিহি ইল্লা বিমা শাআ। ওয়াসিআ কুরসিয়্যুহুস সামাওয়াতি ওয়াল আরদ্ব। ওয়ালা ইয়াউদুহু হিফজুহুমা ওয়া হুওয়াল আলিয়্যুল আযিম।",
    fullMeaningBn: 'আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই, তিনি চিরঞ্জীব, সর্বসত্তার ধারক। তাঁকে তন্দ্রা ও নিদ্রা স্পর্শ করে না। আসমান ও জমিনে যা কিছু আছে সব তাঁরই। তাঁর অনুমতি ছাড়া কে তাঁর কাছে সুপারিশ করবে? তিনি জানেন যা তাদের সামনে ও পেছনে আছে। তাঁর ইলমের কিছুই তারা আয়ত্ত করতে পারে না, তিনি যতটুকু ইচ্ছা করেন তা ছাড়া। তাঁর কুরসি আসমান ও জমিন পরিবেষ্টন করে আছে। এ দুটো রক্ষণাবেক্ষণ তাঁকে ক্লান্ত করে না। তিনি সর্বোচ্চ, সর্বমহান।',
    segments: [
      {
        arabic: 'ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ',
        translit: 'Allāhu lā ilāha illā huwal-Hayyul-Qayyūm',
        banglaTranslit: 'আল্লাহু লা ইলাহা ইল্লা হুওয়াল হাইয়্যুল কাইয়্যুম',
        meaningBn: 'আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই, তিনি চিরঞ্জীব, সর্বসত্তার ধারক',
        meaningEn: 'Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence',
        words: [
          { ar: 'اللَّهُ', tr: 'Allāhu', en: 'Allah', bn: 'আল্লাহ' },
          { ar: 'لَا إِلَهَ إِلَّا هُوَ', tr: 'lā ilāha illā huwa', en: 'there is no deity except Him', bn: 'তিনি ছাড়া কোনো ইলাহ নেই' },
          { ar: 'الْحَيُّ', tr: 'al-Hayyu', en: 'the Ever-Living', bn: 'চিরঞ্জীব' },
          { ar: 'الْقَيُّومُ', tr: 'al-Qayyūmu', en: 'the Sustainer of existence', bn: 'সর্বসত্তার ধারক' },
        ],
      },
      {
        arabic: 'لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ',
        translit: 'lā taʾkhudhuhu sinatun wa lā nawm',
        banglaTranslit: 'লা তা\'খুযুহু সিনাতুওঁ ওয়ালা নাউম',
        meaningBn: 'তাঁকে তন্দ্রা ও নিদ্রা স্পর্শ করে না',
        meaningEn: 'Neither drowsiness overtakes Him nor sleep',
        words: [
          { ar: 'لَا تَأْخُذُهُ', tr: 'lā taʾkhudhuhu', en: 'does not overtake Him', bn: 'তাঁকে স্পর্শ করে না' },
          { ar: 'سِنَةٌ', tr: 'sinatun', en: 'drowsiness', bn: 'তন্দ্রা' },
          { ar: 'وَلَا نَوْمٌ', tr: 'wa lā nawm', en: 'nor sleep', bn: 'এবং নিদ্রাও না' },
        ],
      },
      {
        arabic: 'لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ',
        translit: 'lahu mā fis-samāwāti wa mā fil-ard',
        banglaTranslit: 'লাহু মা ফিস্ সামাওয়াতি ওয়ামা ফিল আরদ্ব',
        meaningBn: 'আসমান ও জমিনে যা কিছু আছে সব তাঁরই',
        meaningEn: 'To Him belongs whatever is in the heavens and whatever is on the earth',
        words: [
          { ar: 'لَهُ', tr: 'lahu', en: 'to Him belongs', bn: 'তাঁরই' },
          { ar: 'مَا فِي السَّمَاوَاتِ', tr: 'mā fis-samāwāti', en: 'whatever is in the heavens', bn: 'আসমানে যা আছে' },
          { ar: 'وَمَا فِي الْأَرْضِ', tr: 'wa mā fil-ard', en: 'and whatever is on the earth', bn: 'এবং জমিনে যা আছে' },
        ],
      },
      {
        arabic: 'وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ',
        translit: 'wasiʿa kursiyyuhus-samāwāti wal-arda wa lā yaʾūduhu hifẓuhumā wa huwal-ʿAliyyul-ʿAẓīm',
        banglaTranslit: 'ওয়াসিআ কুরসিয়্যুহুস সামাওয়াতি ওয়াল আরদ্ব, ওয়ালা ইয়াউদুহু হিফজুহুমা, ওয়া হুওয়াল আলিয়্যুল আযিম',
        meaningBn: 'তাঁর কুরসি আসমান ও জমিন পরিবেষ্টন করে আছে। এ দুটো রক্ষণাবেক্ষণ তাঁকে ক্লান্ত করে না। তিনি সর্বোচ্চ, সর্বমহান',
        meaningEn: 'His Kursi extends over the heavens and the earth, and their preservation tires Him not — He is the Most High, the Most Great',
        words: [
          { ar: 'وَسِعَ كُرْسِيُّهُ', tr: 'wasiʿa kursiyyuhu', en: 'His Kursi extends over', bn: 'তাঁর কুরসি পরিবেষ্টন করে আছে' },
          { ar: 'السَّمَاوَاتِ وَالْأَرْضَ', tr: 'as-samāwāti wal-arda', en: 'the heavens and the earth', bn: 'আসমান ও জমিন' },
          { ar: 'وَهُوَ الْعَلِيُّ الْعَظِيمُ', tr: 'wa huwal-ʿAliyyul-ʿAẓīm', en: 'He is the Most High, the Most Great', bn: 'তিনি সর্বোচ্চ, সর্বমহান' },
        ],
      },
    ],
  },

  'la-manea': {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ،\nوَلَا مُعْطِيَ لِمَا مَنَعْتَ،\nوَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ',
    fullBanglaTranslit: 'আল্লাহুম্মা লা মানিআ লিমা আ\'তাইতা, ওয়ালা মু\'তিয়া লিমা মানা\'তা, ওয়ালা ইয়ানফাউ যাল জাদ্দি মিনকাল জাদ্দ।',
    fullMeaningBn: 'হে আল্লাহ! আপনি যা দেন তা আটকানোর কেউ নেই, আপনি যা আটকে রাখেন তা দেওয়ার কেউ নেই। আপনার কাছে কোনো ভাগ্যবানের ভাগ্য কাজে আসে না।',
    segments: [
      {
        arabic: 'اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ',
        translit: 'Allāhumma lā māniʿa limā aʿṭayta wa lā muʿṭiya limā manaʿt',
        banglaTranslit: 'আল্লাহুম্মা লা মানিআ লিমা আ\'তাইতা ওয়ালা মু\'তিয়া লিমা মানা\'তা',
        meaningBn: 'হে আল্লাহ! আপনি যা দেন তা আটকানোর কেউ নেই, আপনি যা আটকে রাখেন তা দেওয়ার কেউ নেই',
        meaningEn: 'O Allah, none can withhold what You give, and none can give what You withhold',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'لَا مَانِعَ', tr: 'lā māniʿa', en: 'none can withhold', bn: 'আটকানোর কেউ নেই' },
          { ar: 'لِمَا أَعْطَيْتَ', tr: 'limā aʿṭayta', en: 'what You give', bn: 'আপনি যা দেন' },
          { ar: 'وَلَا مُعْطِيَ', tr: 'wa lā muʿṭiya', en: 'and none can give', bn: 'এবং দেওয়ার কেউ নেই' },
          { ar: 'لِمَا مَنَعْتَ', tr: 'limā manaʿt', en: 'what You withhold', bn: 'আপনি যা আটকান' },
        ],
      },
      {
        arabic: 'وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ',
        translit: 'wa lā yanfaʿu dhal-jaddi minkal-jadd',
        banglaTranslit: 'ওয়ালা ইয়ানফাউ যাল জাদ্দি মিনকাল জাদ্দ',
        meaningBn: 'আপনার কাছে কোনো ভাগ্যবানের ভাগ্য বা সম্পদ কাজে আসে না',
        meaningEn: 'And the fortune of the fortunate avails him nothing against You',
        words: [
          { ar: 'وَلَا يَنْفَعُ', tr: 'wa lā yanfaʿu', en: 'and it does not avail', bn: 'এবং কাজে আসে না' },
          { ar: 'ذَا الْجَدِّ', tr: 'dhal-jaddi', en: 'the one of fortune', bn: 'ভাগ্যবানের' },
          { ar: 'مِنْكَ الْجَدُّ', tr: 'minkal-jadd', en: 'his fortune against You', bn: 'আপনার কাছে ভাগ্য' },
        ],
      },
    ],
  },

  'morning-wakeup': {
    reference: 'সহীহ বুখারি',
    fullArabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    fullBanglaTranslit: 'আলহামদুলিল্লাহিল্লাযী আহইয়ানা বা\'দা মা আমাতানা ওয়া ইলাইহিন নুশুর',
    fullMeaningBn: 'সকল প্রশংসা আল্লাহর যিনি আমাদের মৃত্যুর পর (ঘুম থেকে) জীবিত করলেন এবং তাঁরই কাছে পুনরুত্থান।',
    segments: [
      {
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا',
        translit: "Alhamdulillahil-ladhi ahyana ba'da ma amatana",
        banglaTranslit: 'আলহামদুলিল্লাহিল্লাযী আহইয়ানা বা\'দা মা আমাতানা',
        meaningEn: 'All praise is for Allah who gave us life after causing us to die',
        meaningBn: 'সকল প্রশংসা আল্লাহর যিনি আমাদের মৃত্যুর পর আবার জীবন দিলেন',
        words: [
          { ar: 'الْحَمْدُ', tr: 'al-ḥamdu', en: 'praise', bn: 'প্রশংসা' },
          { ar: 'لِلَّهِ', tr: 'lillāhi', en: 'for Allah', bn: 'আল্লাহর জন্য' },
          { ar: 'الَّذِي', tr: 'alladhī', en: 'who', bn: 'যিনি' },
          { ar: 'أَحْيَانَا', tr: 'aḥyānā', en: 'gave us life', bn: 'আমাদের জীবিত করলেন' },
          { ar: 'بَعْدَ مَا', tr: "ba'da mā", en: 'after', bn: 'পরে' },
          { ar: 'أَمَاتَنَا', tr: 'amātanā', en: 'causing us to die', bn: 'আমাদের মৃত্যু দেওয়ার' },
        ],
      },
      {
        arabic: 'وَإِلَيْهِ النُّشُورُ',
        translit: 'wa ilayhin-nushur',
        banglaTranslit: 'ওয়া ইলাইহিন নুশুর',
        meaningEn: 'And to Him is the resurrection',
        meaningBn: 'এবং তাঁরই কাছে পুনরুত্থান',
        words: [
          { ar: 'وَإِلَيْهِ', tr: 'wa ilayhi', en: 'and to Him', bn: 'এবং তাঁরই কাছে' },
          { ar: 'النُّشُورُ', tr: 'an-nushūr', en: 'the resurrection', bn: 'পুনরুত্থান' },
        ],
      },
    ],
  },

  'morning-protection': {
    reference: 'আবু দাউদ · তিরমিযি',
    fullArabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
    fullBanglaTranslit: 'আল্লাহুম্মা বিকা আসবাহনা ওয়া বিকা আমসাইনা ওয়া বিকা নাহইয়া ওয়া বিকা নামুতু ওয়া ইলাইকান নুশুর',
    fullMeaningBn: 'হে আল্লাহ! তোমার নামেই আমরা সকালে উপনীত হলাম, তোমার নামেই সন্ধ্যায় উপনীত হই, তোমার নামেই বাঁচি, তোমার নামেই মরি এবং তোমার কাছেই পুনরুত্থান।',
    segments: [
      {
        arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا',
        translit: 'Allahumma bika asbahna wa bika amsayna',
        banglaTranslit: 'আল্লাহুম্মা বিকা আসবাহনা ওয়া বিকা আমসাইনা',
        meaningEn: 'O Allah, by You we enter the morning and by You we enter the evening',
        meaningBn: 'হে আল্লাহ! তোমার নামেই আমরা সকালে ও সন্ধ্যায় উপনীত হলাম',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'بِكَ', tr: 'bika', en: 'by You', bn: 'তোমার নামে' },
          { ar: 'أَصْبَحْنَا', tr: 'aṣbaḥnā', en: 'we enter the morning', bn: 'সকালে উপনীত হলাম' },
          { ar: 'وَبِكَ', tr: 'wa bika', en: 'and by You', bn: 'এবং তোমার নামে' },
          { ar: 'أَمْسَيْنَا', tr: 'amsaynā', en: 'we enter the evening', bn: 'সন্ধ্যায় উপনীত হই' },
        ],
      },
      {
        arabic: 'وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
        translit: 'wa bika nahya wa bika namutu wa ilayka-n-nushur',
        banglaTranslit: 'ওয়া বিকা নাহইয়া ওয়া বিকা নামুতু ওয়া ইলাইকান নুশুর',
        meaningEn: 'By You we live, by You we die, and to You is the resurrection',
        meaningBn: 'তোমার নামেই বাঁচি, তোমার নামেই মরি এবং তোমার কাছেই পুনরুত্থান',
        words: [
          { ar: 'نَحْيَا', tr: 'naḥyā', en: 'we live', bn: 'আমরা বাঁচি' },
          { ar: 'نَمُوتُ', tr: 'namūtu', en: 'we die', bn: 'আমরা মরি' },
          { ar: 'وَإِلَيْكَ', tr: 'wa ilayka', en: 'and to You', bn: 'এবং তোমার কাছে' },
          { ar: 'النُّشُورُ', tr: 'an-nushūr', en: 'the resurrection', bn: 'পুনরুত্থান' },
        ],
      },
    ],
  },

  'morning-tasbih': {
    reference: 'সহীহ মুসলিম',
    fullArabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ',
    fullBanglaTranslit: 'সুবহানাল্লাহি ওয়া বিহামদিহি আদাদা খালকিহি ওয়া রিদা নাফসিহি ওয়া যিনাতা আরশিহি ওয়া মিদাদা কালিমাতিহি',
    fullMeaningBn: 'আল্লাহ পবিত্র তাঁর প্রশংসাসহ — তাঁর সৃষ্টির সংখ্যা অনুযায়ী, তাঁর সন্তুষ্টি অনুযায়ী, তাঁর আরশের ওজন অনুযায়ী এবং তাঁর বাণীসমূহের কালি অনুযায়ী।',
    segments: [
      {
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
        translit: 'Subhanallahi wa bihamdihi',
        banglaTranslit: 'সুবহানাল্লাহি ওয়া বিহামদিহি',
        meaningEn: 'Glory be to Allah and praise be to Him',
        meaningBn: 'আল্লাহ পবিত্র এবং সকল প্রশংসা তাঁর',
        words: [
          { ar: 'سُبْحَانَ اللَّهِ', tr: 'Subḥānallāhi', en: 'Glory be to Allah', bn: 'আল্লাহ পবিত্র' },
          { ar: 'وَبِحَمْدِهِ', tr: 'wa biḥamdihi', en: 'and praise be to Him', bn: 'এবং তাঁর প্রশংসা' },
        ],
      },
      {
        arabic: 'عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ',
        translit: "adada khalqihi wa rida nafsihi wa zinata 'arshihi wa midada kalimatihi",
        banglaTranslit: 'আদাদা খালকিহি ওয়া রিদা নাফসিহি ওয়া যিনাতা আরশিহি ওয়া মিদাদা কালিমাতিহি',
        meaningEn: 'As many times as the number of His creation, His pleasure, the weight of His Throne, and the ink of His words',
        meaningBn: 'তাঁর সৃষ্টির সংখ্যা, তাঁর সন্তুষ্টি, তাঁর আরশের ওজন ও তাঁর বাণীর কালি অনুযায়ী',
        words: [
          { ar: 'عَدَدَ خَلْقِهِ', tr: 'adada khalqihi', en: 'number of His creation', bn: 'তাঁর সৃষ্টির সংখ্যা' },
          { ar: 'وَرِضَا نَفْسِهِ', tr: 'wa riḍā nafsihi', en: 'His pleasure', bn: 'তাঁর সন্তুষ্টি' },
          { ar: 'وَزِنَةَ عَرْشِهِ', tr: "wa zinata 'arshihi", en: 'weight of His Throne', bn: 'তাঁর আরশের ওজন' },
          { ar: 'وَمِدَادَ كَلِمَاتِهِ', tr: 'wa midāda kalimātihi', en: 'ink of His words', bn: 'তাঁর বাণীর কালি' },
        ],
      },
    ],
  },

  'morning-dress': {
    reference: 'আবু দাউদ · তিরমিযি',
    fullArabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    fullBanglaTranslit: 'আলহামদুলিল্লাহিল্লাযী কাসানি হাযা ওয়া রাযাকানিহি মিন গাইরি হাউলিন মিন্নি ওয়ালা কুওয়্যাতিন',
    fullMeaningBn: 'সমস্ত প্রশংসা আল্লাহর যিনি আমাকে এটি পরিয়েছেন এবং আমার কোনো শক্তি ও সামর্থ্য ছাড়াই এটি রিজিক দিয়েছেন।',
    segments: [
      {
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا',
        translit: 'Alhamdulillahil-ladhi kasani hadha',
        banglaTranslit: 'আলহামদুলিল্লাহিল্লাযী কাসানি হাযা',
        meaningEn: 'All praise is for Allah who clothed me with this',
        meaningBn: 'সমস্ত প্রশংসা আল্লাহর যিনি আমাকে এটি পরিয়েছেন',
        words: [
          { ar: 'الْحَمْدُ لِلَّهِ', tr: 'alḥamdu lillāhi', en: 'all praise for Allah', bn: 'সমস্ত প্রশংসা আল্লাহর' },
          { ar: 'الَّذِي', tr: 'alladhī', en: 'who', bn: 'যিনি' },
          { ar: 'كَسَانِي', tr: 'kasānī', en: 'clothed me', bn: 'আমাকে পরিয়েছেন' },
          { ar: 'هَذَا', tr: 'hādhā', en: 'this', bn: 'এটি' },
        ],
      },
      {
        arabic: 'وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
        translit: 'wa razaqanihi min ghayri hawlin minni wa la quwwatin',
        banglaTranslit: 'ওয়া রাযাকানিহি মিন গাইরি হাউলিন মিন্নি ওয়ালা কুওয়্যাতিন',
        meaningEn: 'And provided it for me without any power or strength from me',
        meaningBn: 'এবং আমার কোনো শক্তি ও সামর্থ্য ছাড়াই এটি রিজিক দিয়েছেন',
        words: [
          { ar: 'وَرَزَقَنِيهِ', tr: 'wa razaqanīhi', en: 'and provided it for me', bn: 'এবং আমাকে এটি দিয়েছেন' },
          { ar: 'مِنْ غَيْرِ', tr: 'min ghayri', en: 'without', bn: 'ছাড়া' },
          { ar: 'حَوْلٍ مِنِّي', tr: 'ḥawlin minnī', en: 'any power from me', bn: 'আমার কোনো শক্তি' },
          { ar: 'وَلَا قُوَّةٍ', tr: 'wa lā quwwatin', en: 'nor strength', bn: 'এবং না সামর্থ্য' },
        ],
      },
    ],
  },

  'morning-leaving': {
    reference: 'আবু দাউদ · তিরমিযি',
    fullArabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    fullBanglaTranslit: 'বিসমিল্লাহি তাওয়াক্কালতু আলাল্লাহি ওয়ালা হাউলা ওয়ালা কুওয়্যাতা ইল্লা বিল্লাহ',
    fullMeaningBn: 'আল্লাহর নামে (বের হচ্ছি), আল্লাহর উপর ভরসা করলাম। আল্লাহ ছাড়া কোনো শক্তি ও সামর্থ্য নেই।',
    segments: [
      {
        arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ',
        translit: "Bismillahi tawakkaltu 'alallahi",
        banglaTranslit: 'বিসমিল্লাহি তাওয়াক্কালতু আলাল্লাহি',
        meaningEn: 'In the name of Allah, I put my trust in Allah',
        meaningBn: 'আল্লাহর নামে, আল্লাহর উপর ভরসা করলাম',
        words: [
          { ar: 'بِسْمِ اللَّهِ', tr: 'bismillāhi', en: 'in the name of Allah', bn: 'আল্লাহর নামে' },
          { ar: 'تَوَكَّلْتُ', tr: 'tawakkaltu', en: 'I put my trust', bn: 'ভরসা করলাম' },
          { ar: 'عَلَى اللَّهِ', tr: "'alallāhi", en: 'in Allah', bn: 'আল্লাহর উপর' },
        ],
      },
      {
        arabic: 'وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
        translit: 'wa la hawla wa la quwwata illa billah',
        banglaTranslit: 'ওয়ালা হাউলা ওয়ালা কুওয়্যাতা ইল্লা বিল্লাহ',
        meaningEn: 'There is no power or strength except with Allah',
        meaningBn: 'আল্লাহ ছাড়া কোনো শক্তি ও সামর্থ্য নেই',
        words: [
          { ar: 'وَلَا حَوْلَ', tr: 'wa lā ḥawla', en: 'no power', bn: 'কোনো শক্তি নেই' },
          { ar: 'وَلَا قُوَّةَ', tr: 'wa lā quwwata', en: 'no strength', bn: 'কোনো সামর্থ্য নেই' },
          { ar: 'إِلَّا بِاللَّهِ', tr: 'illā billāhi', en: 'except with Allah', bn: 'আল্লাহ ছাড়া' },
        ],
      },
    ],
  },

  'evening-protection': {
    reference: 'আবু দাউদ · তিরমিযি',
    fullArabic: 'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ',
    fullBanglaTranslit: 'আল্লাহুম্মা বিকা আমসাইনা ওয়া বিকা আসবাহনা ওয়া বিকা নাহইয়া ওয়া বিকা নামুতু ওয়া ইলাইকাল মাসির',
    fullMeaningBn: 'হে আল্লাহ! তোমার নামেই আমরা সন্ধ্যায় উপনীত হলাম, তোমার নামেই সকালে উপনীত হই, তোমার নামেই বাঁচি, তোমার নামেই মরি এবং তোমার কাছেই প্রত্যাবর্তন।',
    segments: [
      {
        arabic: 'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا',
        translit: 'Allahumma bika amsayna wa bika asbahna',
        banglaTranslit: 'আল্লাহুম্মা বিকা আমসাইনা ওয়া বিকা আসবাহনা',
        meaningEn: 'O Allah, by You we enter the evening and by You we enter the morning',
        meaningBn: 'হে আল্লাহ! তোমার নামেই সন্ধ্যায় ও সকালে উপনীত হলাম',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'بِكَ', tr: 'bika', en: 'by You', bn: 'তোমার নামে' },
          { ar: 'أَمْسَيْنَا', tr: 'amsaynā', en: 'we enter the evening', bn: 'সন্ধ্যায় উপনীত হলাম' },
          { ar: 'أَصْبَحْنَا', tr: 'aṣbaḥnā', en: 'we enter the morning', bn: 'সকালে উপনীত হই' },
        ],
      },
      {
        arabic: 'وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ',
        translit: 'wa bika nahya wa bika namutu wa ilaykal-masir',
        banglaTranslit: 'ওয়া বিকা নাহইয়া ওয়া বিকা নামুতু ওয়া ইলাইকাল মাসির',
        meaningEn: 'By You we live, by You we die, and to You is the final return',
        meaningBn: 'তোমার নামেই বাঁচি, তোমার নামেই মরি এবং তোমার কাছেই প্রত্যাবর্তন',
        words: [
          { ar: 'نَحْيَا', tr: 'naḥyā', en: 'we live', bn: 'আমরা বাঁচি' },
          { ar: 'نَمُوتُ', tr: 'namūtu', en: 'we die', bn: 'আমরা মরি' },
          { ar: 'وَإِلَيْكَ', tr: 'wa ilayka', en: 'and to You', bn: 'এবং তোমার কাছে' },
          { ar: 'الْمَصِيرُ', tr: 'al-maṣīr', en: 'the final return', bn: 'প্রত্যাবর্তন' },
        ],
      },
    ],
  },

  'sleep-dua': {
    reference: 'সহীহ বুখারি',
    fullArabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    fullBanglaTranslit: 'বিসমিকা আল্লাহুম্মা আমুতু ওয়া আহইয়া',
    fullMeaningBn: 'হে আল্লাহ! তোমার নামেই আমি মরি (ঘুমাই) এবং তোমার নামেই জীবিত হই (জেগে উঠি)।',
    segments: [
      {
        arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
        translit: 'Bismika Allahumma amutu wa ahya',
        banglaTranslit: 'বিসমিকা আল্লাহুম্মা আমুতু ওয়া আহইয়া',
        meaningEn: 'In Your name, O Allah, I die and I live',
        meaningBn: 'হে আল্লাহ! তোমার নামেই আমি মরি এবং জীবিত হই',
        words: [
          { ar: 'بِاسْمِكَ', tr: 'bismika', en: 'in Your name', bn: 'তোমার নামে' },
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'أَمُوتُ', tr: 'amūtu', en: 'I die', bn: 'আমি মরি' },
          { ar: 'وَأَحْيَا', tr: 'wa aḥyā', en: 'and I live', bn: 'এবং জীবিত হই' },
        ],
      },
    ],
  },

  'evening-forgiveness': {
    reference: 'আবু দাউদ · তিরমিযি',
    fullArabic: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
    fullBanglaTranslit: 'আল্লাহুম্মা কিনি আযাবাকা ইয়াওমা তাবআসু ইবাদাক',
    fullMeaningBn: 'হে আল্লাহ! যেদিন তুমি তোমার বান্দাদের পুনরুত্থিত করবে সেদিন তোমার আযাব থেকে আমাকে রক্ষা করো।',
    segments: [
      {
        arabic: 'اللَّهُمَّ قِنِي عَذَابَكَ',
        translit: "Allahumma qini 'adhabaka",
        banglaTranslit: 'আল্লাহুম্মা কিনি আযাবাকা',
        meaningEn: 'O Allah, protect me from Your punishment',
        meaningBn: 'হে আল্লাহ! তোমার আযাব থেকে আমাকে রক্ষা করো',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'قِنِي', tr: 'qinī', en: 'protect me', bn: 'আমাকে রক্ষা করো' },
          { ar: 'عَذَابَكَ', tr: "'adhabaka", en: 'Your punishment', bn: 'তোমার আযাব থেকে' },
        ],
      },
      {
        arabic: 'يَوْمَ تَبْعَثُ عِبَادَكَ',
        translit: "yawma tab'athu 'ibadak",
        banglaTranslit: 'ইয়াওমা তাবআসু ইবাদাক',
        meaningEn: 'On the day You resurrect Your servants',
        meaningBn: 'যেদিন তুমি তোমার বান্দাদের পুনরুত্থিত করবে',
        words: [
          { ar: 'يَوْمَ', tr: 'yawma', en: 'on the day', bn: 'যেদিন' },
          { ar: 'تَبْعَثُ', tr: "tab'athu", en: 'You resurrect', bn: 'তুমি পুনরুত্থিত করবে' },
          { ar: 'عِبَادَكَ', tr: "'ibādaka", en: 'Your servants', bn: 'তোমার বান্দাদের' },
        ],
      },
    ],
  },

  'evening-tasbih': {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
    fullBanglaTranslit: 'সুবহানাল্লাহি ওয়া বিহামদিহি সুবহানাল্লাহিল আযিম',
    fullMeaningBn: 'আল্লাহ পবিত্র তাঁর প্রশংসাসহ। মহান আল্লাহ পবিত্র।',
    segments: [
      {
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
        translit: 'Subhanallahi wa bihamdihi',
        banglaTranslit: 'সুবহানাল্লাহি ওয়া বিহামদিহি',
        meaningEn: 'Glory be to Allah and praise be to Him',
        meaningBn: 'আল্লাহ পবিত্র এবং সকল প্রশংসা তাঁর',
        words: [
          { ar: 'سُبْحَانَ اللَّهِ', tr: 'Subḥānallāhi', en: 'Glory be to Allah', bn: 'আল্লাহ পবিত্র' },
          { ar: 'وَبِحَمْدِهِ', tr: 'wa biḥamdihi', en: 'and praise be to Him', bn: 'এবং তাঁর প্রশংসা' },
        ],
      },
      {
        arabic: 'سُبْحَانَ اللَّهِ الْعَظِيمِ',
        translit: "Subhanallahil-'azim",
        banglaTranslit: 'সুবহানাল্লাহিল আযিম',
        meaningEn: 'Glory be to Allah, the Magnificent',
        meaningBn: 'মহান আল্লাহ পবিত্র',
        words: [
          { ar: 'سُبْحَانَ اللَّهِ', tr: 'Subḥānallāhi', en: 'Glory be to Allah', bn: 'আল্লাহ পবিত্র' },
          { ar: 'الْعَظِيمِ', tr: "al-'aẓīm", en: 'the Magnificent', bn: 'মহান' },
        ],
      },
    ],
  },

  'evening-kul': {
    reference: 'আবু দাউদ · তিরমিযি',
    fullArabic: [Q.bismillah, ...Q.falaq, Q.bismillah, ...Q.nas].join('\n'),
    fullBanglaTranslit: 'কুল আউযু বিরাব্বিল ফালাক। মিন শাররি মা খালাক। ওয়ামিন শাররি গাসিকিন ইযা ওয়াকাব। ওয়ামিন শাররিন নাফফাসাতি ফিল উকাদ। ওয়ামিন শাররি হাসিদিন ইযা হাসাদ।',
    fullMeaningBn: 'বলো: আমি আশ্রয় নিচ্ছি ভোরের রবের কাছে — তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে, অন্ধকার রাতের অনিষ্ট থেকে যখন তা ছেয়ে পড়ে, গিঁটে ফুঁকদাত্রীদের অনিষ্ট থেকে এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে।',
    segments: [
      {
        arabic: Q.falaq[0],
        translit: "Qul a'udhu bi-rabbil-falaq",
        banglaTranslit: 'কুল আউযু বিরাব্বিল ফালাক',
        meaningEn: 'Say: I seek refuge in the Lord of the daybreak',
        meaningBn: 'বলো: আমি আশ্রয় নিচ্ছি ভোরের রবের কাছে',
        words: [
          { ar: 'قُلْ', tr: 'qul', en: 'say', bn: 'বলো' },
          { ar: 'أَعُوذُ', tr: "a'ūdhu", en: 'I seek refuge', bn: 'আশ্রয় নিচ্ছি' },
          { ar: 'بِرَبِّ', tr: 'bi-rabbi', en: 'in the Lord', bn: 'রবের কাছে' },
          { ar: 'الْفَلَقِ', tr: 'al-falaq', en: 'the daybreak', bn: 'ভোর' },
        ],
      },
      {
        arabic: Q.falaq[1],
        translit: 'min sharri ma khalaq',
        banglaTranslit: 'মিন শাররি মা খালাক',
        meaningEn: 'From the evil of what He has created',
        meaningBn: 'তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে',
        words: [
          { ar: 'مِن شَرِّ', tr: 'min sharri', en: 'from the evil of', bn: 'অনিষ্ট থেকে' },
          { ar: 'مَا خَلَقَ', tr: 'mā khalaqa', en: 'what He has created', bn: 'যা তিনি সৃষ্টি করেছেন' },
        ],
      },
      {
        arabic: [Q.falaq[2], Q.falaq[3], Q.falaq[4]].join('\n'),
        translit: 'wa min sharri ghasiqin idha waqab, wa min sharrin-naffasati fil-uqad, wa min sharri hasidin idha hasad',
        banglaTranslit: 'ওয়ামিন শাররি গাসিকিন ইযা ওয়াকাব, ওয়ামিন শাররিন নাফফাসাতি ফিল উকাদ, ওয়ামিন শাররি হাসিদিন ইযা হাসাদ',
        meaningEn: 'From the evil of darkness when it spreads, from the evil of those who blow on knots, and from the evil of the envier when he envies',
        meaningBn: 'অন্ধকার রাতের অনিষ্ট থেকে যখন তা ছেয়ে পড়ে, গিঁটে ফুঁকদাত্রীদের অনিষ্ট থেকে এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে',
        words: [
          { ar: 'غَاسِقٍ', tr: 'ghāsiqin', en: 'darkness', bn: 'অন্ধকার রাত' },
          { ar: 'إِذَا وَقَبَ', tr: 'idhā waqaba', en: 'when it spreads', bn: 'যখন তা ছেয়ে পড়ে' },
          { ar: 'النَّفَّاثَاتِ', tr: 'an-naffāthāt', en: 'those who blow on knots', bn: 'যারা গিঁটে ফুঁক দেয়' },
          { ar: 'فِي الْعُقَدِ', tr: "fil-'uqad", en: 'on the knots', bn: 'গিঁটে' },
          { ar: 'حَاسِدٍ', tr: 'ḥāsid', en: 'the envier', bn: 'হিংসুক' },
          { ar: 'إِذَا حَسَدَ', tr: 'idhā ḥasada', en: 'when he envies', bn: 'যখন সে হিংসা করে' },
        ],
      },
    ],
  },

  // ── QURAN ────────────────────────────────────────

  falaq: {
    reference: 'কুরআনুল কারিম (সূরা আল-ফালাক)',
    fullArabic: [Q.bismillah, ...Q.falaq].join('\n'),
    fullBanglaTranslit: "কুল আউযু বিরাব্বিল ফালাক। মিন শাররি মা খালাক। ওয়ামিন শাররি গাসিকিন ইযা ওয়াকাব। ওয়ামিন শাররিন নাফফাসাতি ফিল উকাদ। ওয়ামিন শাররি হাসিদিন ইযা হাসাদ।",
    fullMeaningBn: 'বলো: আমি আশ্রয় নিচ্ছি ভোরের রবের কাছে — তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে, অন্ধকার রাতের অনিষ্ট থেকে যখন তা ছেয়ে পড়ে, গিঁটে ফুঁকদাত্রীদের অনিষ্ট থেকে এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে।',
    segments: [
      {
        arabic: Q.falaq[0],
        translit: "Qul a'udhu bi-rabbil-falaq",
        banglaTranslit: 'কুল আউযু বিরাব্বিল ফালাক',
        meaningEn: 'Say: I seek refuge in the Lord of the daybreak',
        meaningBn: 'বলো: আমি আশ্রয় নিচ্ছি ভোরের রবের কাছে',
        words: [
          { ar: 'قُلْ', tr: 'qul', en: 'say', bn: 'বলো' },
          { ar: 'أَعُوذُ', tr: "a'ūdhu", en: 'I seek refuge', bn: 'আশ্রয় নিচ্ছি' },
          { ar: 'بِرَبِّ', tr: 'bi-rabbi', en: 'in the Lord', bn: 'রবের কাছে' },
          { ar: 'الْفَلَقِ', tr: 'al-falaq', en: 'the daybreak', bn: 'ভোর' },
        ],
      },
      {
        arabic: Q.falaq[1],
        translit: 'min sharri mā khalaqa',
        banglaTranslit: 'মিন শাররি মা খালাক',
        meaningEn: 'From the evil of what He has created',
        meaningBn: 'তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে',
        words: [
          { ar: 'مِن شَرِّ', tr: 'min sharri', en: 'from the evil of', bn: 'অনিষ্ট থেকে' },
          { ar: 'مَا خَلَقَ', tr: 'mā khalaqa', en: 'what He created', bn: 'যা তিনি সৃষ্টি করেছেন' },
        ],
      },
      {
        arabic: Q.falaq[2],
        translit: 'wa min sharri ghāsiqin idhā waqab',
        banglaTranslit: 'ওয়ামিন শাররি গাসিকিন ইযা ওয়াকাব',
        meaningEn: 'And from the evil of darkness when it spreads',
        meaningBn: 'এবং অন্ধকার রাতের অনিষ্ট থেকে যখন তা ছেয়ে পড়ে',
        words: [
          { ar: 'غَاسِقٍ', tr: 'ghāsiqin', en: 'darkness', bn: 'অন্ধকার রাত' },
          { ar: 'إِذَا وَقَبَ', tr: 'idhā waqaba', en: 'when it spreads', bn: 'যখন তা ছেয়ে পড়ে' },
        ],
      },
      {
        arabic: Q.falaq[3],
        translit: "wa min sharrin-naffāthāti fil-'uqad",
        banglaTranslit: 'ওয়ামিন শাররিন নাফফাসাতি ফিল উকাদ',
        meaningEn: 'And from the evil of those who blow on knots',
        meaningBn: 'এবং গিঁটে ফুঁকদাত্রীদের অনিষ্ট থেকে',
        words: [
          { ar: 'النَّفَّاثَاتِ', tr: 'an-naffāthāt', en: 'those who blow', bn: 'যারা ফুঁক দেয়' },
          { ar: 'فِي الْعُقَدِ', tr: "fil-'uqad", en: 'on knots', bn: 'গিঁটে' },
        ],
      },
      {
        arabic: Q.falaq[4],
        translit: 'wa min sharri ḥāsidin idhā ḥasad',
        banglaTranslit: 'ওয়ামিন শাররি হাসিদিন ইযা হাসাদ',
        meaningEn: 'And from the evil of the envier when he envies',
        meaningBn: 'এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে',
        words: [
          { ar: 'حَاسِدٍ', tr: 'ḥāsidin', en: 'the envier', bn: 'হিংসুক' },
          { ar: 'إِذَا حَسَدَ', tr: 'idhā ḥasada', en: 'when he envies', bn: 'যখন সে হিংসা করে' },
        ],
      },
    ],
  },

  nas: {
    reference: 'কুরআনুল কারিম (সূরা আন-নাস)',
    fullArabic: [Q.bismillah, ...Q.nas].join('\n'),
    fullBanglaTranslit: 'কুল আউযু বিরাব্বিন নাস। মালিকিন নাস। ইলাহিন নাস। মিন শাররিল ওয়াসওয়াসিল খান্নাস। আল্লাযি ইউওয়াসউইসু ফি সুদুরিন নাস। মিনাল জিন্নাতি ওয়ান নাস।',
    fullMeaningBn: 'বলো: আমি আশ্রয় নিচ্ছি মানুষের রবের কাছে, মানুষের মালিকের কাছে, মানুষের ইলাহের কাছে — কুমন্ত্রণাদাতা আত্মগোপনকারীর অনিষ্ট থেকে, যে মানুষের বুকে কুমন্ত্রণা দেয়, জিন ও মানুষের মধ্য থেকে।',
    segments: [
      {
        arabic: Q.nas[0],
        translit: "Qul a'udhu bi-rabbin-nās",
        banglaTranslit: 'কুল আউযু বিরাব্বিন নাস',
        meaningEn: 'Say: I seek refuge in the Lord of mankind',
        meaningBn: 'বলো: আমি আশ্রয় নিচ্ছি মানুষের রবের কাছে',
        words: [
          { ar: 'قُلْ', tr: 'qul', en: 'say', bn: 'বলো' },
          { ar: 'أَعُوذُ', tr: "a'ūdhu", en: 'I seek refuge', bn: 'আশ্রয় নিচ্ছি' },
          { ar: 'بِرَبِّ النَّاسِ', tr: 'bi-rabbin-nāsi', en: 'in the Lord of mankind', bn: 'মানুষের রবের কাছে' },
        ],
      },
      {
        arabic: [Q.nas[1], Q.nas[2]].join('\n'),
        translit: 'malikin-nāsi ilāhin-nās',
        banglaTranslit: 'মালিকিন নাস, ইলাহিন নাস',
        meaningEn: 'The King of mankind, the God of mankind',
        meaningBn: 'মানুষের মালিক, মানুষের ইলাহ',
        words: [
          { ar: 'مَلِكِ النَّاسِ', tr: 'malikin-nāsi', en: 'King of mankind', bn: 'মানুষের মালিক' },
          { ar: 'إِلَهِ النَّاسِ', tr: 'ilāhin-nāsi', en: 'God of mankind', bn: 'মানুষের ইলাহ' },
        ],
      },
      {
        arabic: [Q.nas[3], Q.nas[4], Q.nas[5]].join('\n'),
        translit: 'min sharril-waswāsil-khannāsi, alladhī yuwaswisu fī sudūrin-nāsi, minal-jinnati wan-nās',
        banglaTranslit: 'মিন শাররিল ওয়াসওয়াসিল খান্নাস, আল্লাযি ইউওয়াসউইসু ফি সুদুরিন নাস, মিনাল জিন্নাতি ওয়ান নাস',
        meaningEn: 'From the evil of the retreating whisperer, who whispers in the breasts of mankind, from jinn and mankind',
        meaningBn: 'আত্মগোপনকারী কুমন্ত্রণাদাতার অনিষ্ট থেকে, যে মানুষের বুকে কুমন্ত্রণা দেয়, জিন ও মানুষের মধ্য থেকে',
        words: [
          { ar: 'الْوَسْوَاسِ', tr: 'al-waswāsi', en: 'the whisperer', bn: 'কুমন্ত্রণাদাতা' },
          { ar: 'الْخَنَّاسِ', tr: 'al-khannāsi', en: 'who retreats', bn: 'আত্মগোপনকারী' },
          { ar: 'يُوَسْوِسُ', tr: 'yuwaswisu', en: 'whispers', bn: 'কুমন্ত্রণা দেয়' },
          { ar: 'فِي صُدُورِ النَّاسِ', tr: 'fī sudūrin-nāsi', en: 'in the breasts of mankind', bn: 'মানুষের বুকে' },
          { ar: 'مِنَ الْجِنَّةِ وَالنَّاسِ', tr: 'minal-jinnati wan-nāsi', en: 'from jinn and mankind', bn: 'জিন ও মানুষের মধ্য থেকে' },
        ],
      },
    ],
  },

  'ayatul-kursi': {
    reference: 'কুরআনুল কারিম (সূরা আল-বাকারা ২:২৫৫)',
    fullArabic: Q.ayatulKursi,
    fullBanglaTranslit: "আল্লাহু লা ইলাহা ইল্লা হুওয়াল হাইয়্যুল কাইয়্যুম। লা তাখুযুহু সিনাতুওঁ ওয়ালা নাউম। লাহু মা ফিস সামাওয়াতি ওয়ামা ফিল আরদ। মান যাল্লাযি ইয়াশফাউ ইন্দাহু ইল্লা বি-ইযনিহি। ইয়া'লামু মা বাইনা আইদিহিম ওয়ামা খালফাহুম। ওয়ালা ইউহিতুনা বিশাইয়িম মিন ইলমিহি ইল্লা বিমা শা'আ। ওয়াসিআ কুরসিয়্যুহুস সামাওয়াতি ওয়াল আরদ। ওয়ালা ইয়াউদুহু হিফযুহুমা। ওয়া হুওয়াল আলিয়্যুল আযিম।",
    fullMeaningBn: 'আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই, তিনি চিরঞ্জীব, সর্বসত্তার ধারক। তাঁকে তন্দ্রা বা নিদ্রা স্পর্শ করে না। আসমান ও জমিনে যা কিছু আছে সবই তাঁর। কে আছে যে তাঁর অনুমতি ছাড়া তাঁর কাছে সুপারিশ করবে? তিনি জানেন যা তাদের সামনে এবং যা তাদের পেছনে আছে। তারা তাঁর জ্ঞান থেকে কিছুই আয়ত্ত করতে পারে না, তবে তিনি যতটুকু চান ততটুকু ছাড়া। তাঁর কুরসি আসমান ও জমিন পরিব্যাপ্ত। তাদের রক্ষণাবেক্ষণ তাঁকে ক্লান্ত করে না। তিনি সর্বোচ্চ, মহামহিম।',
    segments: [
      {
        arabic: 'ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ',
        translit: 'Allāhu lā ilāha illā huwal-ḥayyul-qayyūm',
        banglaTranslit: 'আল্লাহু লা ইলাহা ইল্লা হুওয়াল হাইয়্যুল কাইয়্যুম',
        meaningEn: 'Allah — there is no god except Him, the Ever-Living, the Sustainer of all',
        meaningBn: 'আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই, তিনি চিরঞ্জীব, সর্বসত্তার ধারক',
        words: [
          { ar: 'اللَّهُ', tr: 'Allāhu', en: 'Allah', bn: 'আল্লাহ' },
          { ar: 'لَا إِلَهَ إِلَّا هُوَ', tr: 'lā ilāha illā huwa', en: 'no god except Him', bn: 'তিনি ছাড়া কোনো ইলাহ নেই' },
          { ar: 'الْحَيُّ', tr: 'al-ḥayyu', en: 'the Ever-Living', bn: 'চিরঞ্জীব' },
          { ar: 'الْقَيُّومُ', tr: 'al-qayyūmu', en: 'the Sustainer', bn: 'সর্বসত্তার ধারক' },
        ],
      },
      {
        arabic: 'لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ',
        translit: "lā ta'khudhuhu sinatun wa lā nawm, lahū mā fis-samāwāti wa mā fil-arḍ",
        banglaTranslit: 'লা তাখুযুহু সিনাতুওঁ ওয়ালা নাউম। লাহু মা ফিস সামাওয়াতি ওয়ামা ফিল আরদ',
        meaningEn: 'Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and earth',
        meaningBn: 'তাঁকে তন্দ্রা বা নিদ্রা স্পর্শ করে না। আসমান ও জমিনে যা কিছু আছে সবই তাঁর',
        words: [
          { ar: 'لَا تَأْخُذُهُ', tr: "lā ta'khudhuhu", en: 'does not overtake Him', bn: 'তাঁকে স্পর্শ করে না' },
          { ar: 'سِنَةٌ', tr: 'sinatun', en: 'drowsiness', bn: 'তন্দ্রা' },
          { ar: 'وَلَا نَوْمٌ', tr: 'wa lā nawmun', en: 'nor sleep', bn: 'এবং না নিদ্রা' },
          { ar: 'لَّهُ مَا فِي السَّمَاوَاتِ', tr: 'lahū mā fis-samāwāti', en: 'to Him belongs the heavens', bn: 'আসমানে যা আছে সবই তাঁর' },
          { ar: 'وَمَا فِي الْأَرْضِ', tr: 'wa mā fil-arḍi', en: 'and the earth', bn: 'এবং জমিনে' },
        ],
      },
      {
        arabic: 'مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ',
        translit: "man dhal-ladhī yashfa'u 'indahū illā bi-idhnih",
        banglaTranslit: 'মান যাল্লাযি ইয়াশফাউ ইন্দাহু ইল্লা বি-ইযনিহি',
        meaningEn: 'Who can intercede with Him except by His permission?',
        meaningBn: 'কে আছে যে তাঁর অনুমতি ছাড়া তাঁর কাছে সুপারিশ করবে?',
        words: [
          { ar: 'مَن ذَا الَّذِي', tr: 'man dhal-ladhī', en: 'who is it that', bn: 'কে আছে যে' },
          { ar: 'يَشْفَعُ', tr: "yashfa'u", en: 'intercedes', bn: 'সুপারিশ করে' },
          { ar: 'عِندَهُ', tr: "'indahū", en: 'with Him', bn: 'তাঁর কাছে' },
          { ar: 'إِلَّا بِإِذْنِهِ', tr: 'illā bi-idhnihi', en: 'except by His permission', bn: 'তাঁর অনুমতি ছাড়া' },
        ],
      },
      {
        arabic: 'يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ',
        translit: "ya'lamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bishay'im min 'ilmihī illā bimā shā'",
        banglaTranslit: 'ইয়া\'লামু মা বাইনা আইদিহিম ওয়ামা খালফাহুম। ওয়ালা ইউহিতুনা বিশাইয়িম মিন ইলমিহি ইল্লা বিমা শা\'আ',
        meaningEn: 'He knows what is before them and what is behind them, and they cannot encompass anything of His knowledge except what He wills',
        meaningBn: 'তিনি জানেন যা তাদের সামনে এবং পেছনে। তারা তাঁর জ্ঞান থেকে কিছুই আয়ত্ত করতে পারে না তবে তিনি যতটুকু চান তা ছাড়া',
        words: [
          { ar: 'يَعْلَمُ', tr: "ya'lamu", en: 'He knows', bn: 'তিনি জানেন' },
          { ar: 'مَا بَيْنَ أَيْدِيهِمْ', tr: 'mā bayna aydīhim', en: 'what is before them', bn: 'যা তাদের সামনে' },
          { ar: 'وَمَا خَلْفَهُمْ', tr: 'wa mā khalfahum', en: 'and what is behind them', bn: 'এবং যা তাদের পেছনে' },
          { ar: 'لَا يُحِيطُونَ', tr: 'lā yuḥīṭūna', en: 'they cannot encompass', bn: 'তারা আয়ত্ত করতে পারে না' },
          { ar: 'مِّنْ عِلْمِهِ', tr: "min 'ilmihi", en: 'of His knowledge', bn: 'তাঁর জ্ঞান থেকে' },
          { ar: 'إِلَّا بِمَا شَاءَ', tr: "illā bimā shā'a", en: 'except what He wills', bn: 'তবে তিনি যা চান' },
        ],
      },
      {
        arabic: 'وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ',
        translit: "wasi'a kursiyyuhus-samāwāti wal-arḍa, wa lā ya'ūduhu ḥifẓuhumā, wa huwal-'aliyyul-'aẓīm",
        banglaTranslit: 'ওয়াসিআ কুরসিয়্যুহুস সামাওয়াতি ওয়াল আরদ। ওয়ালা ইয়াউদুহু হিফযুহুমা। ওয়া হুওয়াল আলিয়্যুল আযিম',
        meaningEn: 'His Throne extends over the heavens and earth, and their preservation does not tire Him. He is the Most High, the Magnificent',
        meaningBn: 'তাঁর কুরসি আসমান ও জমিন পরিব্যাপ্ত। তাদের রক্ষণাবেক্ষণ তাঁকে ক্লান্ত করে না। তিনি সর্বোচ্চ, মহামহিম',
        words: [
          { ar: 'وَسِعَ كُرْسِيُّهُ', tr: "wasi'a kursiyyuhu", en: 'His Throne extends over', bn: 'তাঁর কুরসি পরিব্যাপ্ত' },
          { ar: 'السَّمَاوَاتِ وَالْأَرْضَ', tr: 'as-samāwāti wal-arḍa', en: 'the heavens and earth', bn: 'আসমান ও জমিন' },
          { ar: 'وَلَا يَئُودُهُ', tr: "wa lā ya'ūduhu", en: 'does not tire Him', bn: 'তাঁকে ক্লান্ত করে না' },
          { ar: 'حِفْظُهُمَا', tr: 'ḥifẓuhumā', en: 'their preservation', bn: 'তাদের রক্ষণাবেক্ষণ' },
          { ar: 'الْعَلِيُّ الْعَظِيمُ', tr: "al-'aliyyul-'aẓīm", en: 'the Most High, the Magnificent', bn: 'সর্বোচ্চ, মহামহিম' },
        ],
      },
    ],
  },

  kafiroon: {
    reference: 'কুরআনুল কারিম (সূরা আল-কাফিরুন)',
    fullArabic: [Q.bismillah, ...Q.kafiroon].join('\n'),
    fullBanglaTranslit: 'কুল ইয়া আইয়্যুহাল কাফিরুন। লা আ\'বুদু মা তা\'বুদুন। ওয়ালা আনতুম আবিদুনা মা আ\'বুদ। ওয়ালা আনা আবিদুম মা আবাদতুম। ওয়ালা আনতুম আবিদুনা মা আ\'বুদ। লাকুম দিনুকুম ওয়ালিয়া দিন।',
    fullMeaningBn: 'বলো: হে কাফিরগণ! আমি তাদের ইবাদত করি না যাদের তোমরা ইবাদত করো। এবং তোমরাও তাঁর ইবাদতকারী নও যাঁর আমি ইবাদত করি। আমি তাদের ইবাদতকারী নই যাদের তোমরা ইবাদত করেছ। এবং তোমরাও তাঁর ইবাদতকারী নও যাঁর আমি ইবাদত করি। তোমাদের জন্য তোমাদের দীন এবং আমার জন্য আমার দীন।',
    segments: [
      {
        arabic: Q.kafiroon[0],
        translit: 'Qul yā ayyuhal-kāfirūn',
        banglaTranslit: 'কুল ইয়া আইয়্যুহাল কাফিরুন',
        meaningEn: 'Say: O you disbelievers!',
        meaningBn: 'বলো: হে কাফিরগণ!',
        words: [
          { ar: 'قُلْ', tr: 'qul', en: 'say', bn: 'বলো' },
          { ar: 'يَا أَيُّهَا', tr: 'yā ayyuhā', en: 'O you', bn: 'হে তোমরা' },
          { ar: 'الْكَافِرُونَ', tr: 'al-kāfirūna', en: 'the disbelievers', bn: 'কাফিরগণ' },
        ],
      },
      {
        arabic: [Q.kafiroon[1], Q.kafiroon[2], Q.kafiroon[3], Q.kafiroon[4]].join('\n'),
        translit: "lā a'budu mā ta'budūna, wa lā antum 'ābidūna mā a'bud",
        banglaTranslit: 'লা আ\'বুদু মা তা\'বুদুন। ওয়ালা আনতুম আবিদুনা মা আ\'বুদ',
        meaningEn: 'I do not worship what you worship, nor do you worship what I worship',
        meaningBn: 'আমি তাদের ইবাদত করি না যাদের তোমরা করো, এবং তোমরাও তাঁর ইবাদত করো না যাঁর আমি করি',
        words: [
          { ar: 'لَا أَعْبُدُ', tr: "lā a'budu", en: 'I do not worship', bn: 'আমি ইবাদত করি না' },
          { ar: 'مَا تَعْبُدُونَ', tr: "mā ta'budūna", en: 'what you worship', bn: 'যাদের তোমরা ইবাদত করো' },
          { ar: 'وَلَا أَنتُمْ عَابِدُونَ', tr: "wa lā antum 'ābidūna", en: 'nor do you worship', bn: 'এবং তোমরাও ইবাদতকারী নও' },
          { ar: 'مَا أَعْبُدُ', tr: "mā a'budu", en: 'what I worship', bn: 'যাঁর আমি ইবাদত করি' },
        ],
      },
      {
        arabic: Q.kafiroon[5],
        translit: 'lakum dīnukum wa liya dīn',
        banglaTranslit: 'লাকুম দিনুকুম ওয়ালিয়া দিন',
        meaningEn: 'For you is your religion, and for me is my religion',
        meaningBn: 'তোমাদের জন্য তোমাদের দীন এবং আমার জন্য আমার দীন',
        words: [
          { ar: 'لَكُمْ', tr: 'lakum', en: 'for you', bn: 'তোমাদের জন্য' },
          { ar: 'دِينُكُمْ', tr: 'dīnukum', en: 'your religion', bn: 'তোমাদের দীন' },
          { ar: 'وَلِيَ دِينِ', tr: 'wa liya dīni', en: 'and for me is my religion', bn: 'এবং আমার জন্য আমার দীন' },
        ],
      },
    ],
  },

  // ── AMAL ─────────────────────────────────────────

  subhanallah: {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
    fullBanglaTranslit: 'সুবহানাল্লাহি ওয়া বিহামদিহি সুবহানাল্লাহিল আযিম',
    fullMeaningBn: 'আল্লাহ পবিত্র তাঁর প্রশংসাসহ। মহান আল্লাহ পবিত্র।',
    segments: [
      {
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
        translit: 'Subḥānallāhi wa biḥamdihi',
        banglaTranslit: 'সুবহানাল্লাহি ওয়া বিহামদিহি',
        meaningEn: 'Glory be to Allah and praise be to Him',
        meaningBn: 'আল্লাহ পবিত্র এবং সকল প্রশংসা তাঁর',
        words: [
          { ar: 'سُبْحَانَ اللَّهِ', tr: 'Subḥānallāhi', en: 'Glory be to Allah', bn: 'আল্লাহ পবিত্র' },
          { ar: 'وَبِحَمْدِهِ', tr: 'wa biḥamdihi', en: 'and praise be to Him', bn: 'এবং তাঁর প্রশংসা' },
        ],
      },
      {
        arabic: 'سُبْحَانَ اللَّهِ الْعَظِيمِ',
        translit: "Subḥānallāhil-'aẓīm",
        banglaTranslit: 'সুবহানাল্লাহিল আযিম',
        meaningEn: 'Glory be to Allah, the Magnificent',
        meaningBn: 'মহান আল্লাহ পবিত্র',
        words: [
          { ar: 'سُبْحَانَ اللَّهِ', tr: 'Subḥānallāhi', en: 'Glory be to Allah', bn: 'আল্লাহ পবিত্র' },
          { ar: 'الْعَظِيمِ', tr: "al-'aẓīmi", en: 'the Magnificent', bn: 'মহান' },
        ],
      },
    ],
  },

  istighfar: {
    reference: 'আবু দাউদ · তিরমিযি',
    fullArabic: 'أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
    fullBanglaTranslit: 'আস্তাগফিরুল্লাহাল্লাযি লা ইলাহা ইল্লা হুওয়াল হাইয়্যুল কাইয়্যুমু ওয়া আতুবু ইলাইহি',
    fullMeaningBn: 'আমি আল্লাহর কাছে ক্ষমা চাই যিনি ছাড়া কোনো ইলাহ নেই, যিনি চিরঞ্জীব, সর্বসত্তার ধারক, এবং আমি তাঁর কাছে তওবা করছি।',
    segments: [
      {
        arabic: 'أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ',
        translit: 'Astaghfirullāhal-ladhī lā ilāha illā huwa',
        banglaTranslit: 'আস্তাগফিরুল্লাহাল্লাযি লা ইলাহা ইল্লা হুওয়া',
        meaningEn: 'I seek forgiveness from Allah, there is no god except Him',
        meaningBn: 'আমি সেই আল্লাহর কাছে ক্ষমা চাই যিনি ছাড়া কোনো ইলাহ নেই',
        words: [
          { ar: 'أَسْتَغْفِرُ', tr: 'astaghfiru', en: 'I seek forgiveness', bn: 'আমি ক্ষমা চাই' },
          { ar: 'اللَّهَ', tr: 'Allāha', en: 'from Allah', bn: 'আল্লাহর কাছে' },
          { ar: 'الَّذِي', tr: 'alladhī', en: 'who', bn: 'যিনি' },
          { ar: 'لَا إِلَهَ إِلَّا هُوَ', tr: 'lā ilāha illā huwa', en: 'no god except Him', bn: 'তিনি ছাড়া কোনো ইলাহ নেই' },
        ],
      },
      {
        arabic: 'الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
        translit: 'al-ḥayyul-qayyūmu wa atūbu ilayhi',
        banglaTranslit: 'আল হাইয়্যুল কাইয়্যুমু ওয়া আতুবু ইলাইহি',
        meaningEn: 'The Ever-Living, the Sustainer, and I repent to Him',
        meaningBn: 'চিরঞ্জীব, সর্বসত্তার ধারক, এবং আমি তাঁর কাছে তওবা করছি',
        words: [
          { ar: 'الْحَيُّ', tr: 'al-ḥayyu', en: 'the Ever-Living', bn: 'চিরঞ্জীব' },
          { ar: 'الْقَيُّومُ', tr: 'al-qayyūmu', en: 'the Sustainer', bn: 'সর্বসত্তার ধারক' },
          { ar: 'وَأَتُوبُ إِلَيْهِ', tr: 'wa atūbu ilayhi', en: 'and I repent to Him', bn: 'এবং তাঁর কাছে তওবা করছি' },
        ],
      },
    ],
  },

  'durood-simple': {
    reference: 'সহীহ বুখারি · সহীহ মুসলিম',
    fullArabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ',
    fullBanglaTranslit: 'আল্লাহুম্মা সাল্লি আলা মুহাম্মাদ',
    fullMeaningBn: 'হে আল্লাহ! মুহাম্মাদের উপর রহমত বর্ষণ করো।',
    segments: [
      {
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ',
        translit: 'Allāhumma ṣalli alā Muḥammad',
        banglaTranslit: 'আল্লাহুম্মা সাল্লি আলা মুহাম্মাদ',
        meaningEn: 'O Allah, send blessings upon Muhammad',
        meaningBn: 'হে আল্লাহ! মুহাম্মাদের উপর রহমত বর্ষণ করো',
        words: [
          { ar: 'اللَّهُمَّ', tr: 'Allāhumma', en: 'O Allah', bn: 'হে আল্লাহ' },
          { ar: 'صَلِّ', tr: 'ṣalli', en: 'send blessings', bn: 'রহমত বর্ষণ করো' },
          { ar: 'عَلَى', tr: "'alā", en: 'upon', bn: 'উপর' },
          { ar: 'مُحَمَّدٍ', tr: 'Muḥammadin', en: 'Muhammad', bn: 'মুহাম্মাদ' },
        ],
      },
    ],
  },

  alhamdulillah: {
    reference: 'কুরআনুল কারিম (সূরা আল-ফাতিহা ১:২)',
    fullArabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    fullBanglaTranslit: 'আলহামদুলিল্লাহি রাব্বিল আলামিন',
    fullMeaningBn: 'সমস্ত প্রশংসা আল্লাহর যিনি সমগ্র জগতের রব।',
    segments: [
      {
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        translit: 'Alḥamdu lillāhi rabbil-ālamīn',
        banglaTranslit: 'আলহামদুলিল্লাহি রাব্বিল আলামিন',
        meaningEn: 'All praise is for Allah, Lord of all the worlds',
        meaningBn: 'সমস্ত প্রশংসা আল্লাহর যিনি সমগ্র জগতের রব',
        words: [
          { ar: 'الْحَمْدُ', tr: 'al-ḥamdu', en: 'all praise', bn: 'সমস্ত প্রশংসা' },
          { ar: 'لِلَّهِ', tr: 'lillāhi', en: 'for Allah', bn: 'আল্লাহর জন্য' },
          { ar: 'رَبِّ', tr: 'rabbi', en: 'Lord', bn: 'রব' },
          { ar: 'الْعَالَمِينَ', tr: 'al-ālamīna', en: 'of all the worlds', bn: 'সমগ্র জগতের' },
        ],
      },
    ],
  },
};
