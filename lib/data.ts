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
  { id: 'morning-wakeup',     cat: 'morning', titleAr: 'دعاء الاستيقاظ',  titleBn: 'ঘুম থেকে উঠার দুআ',    firstLine: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا' },
  { id: 'morning-protection', cat: 'morning', titleAr: 'دعاء الصباح',      titleBn: 'সকালের সুরক্ষার দুআ',  firstLine: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا' },
  { id: 'morning-tasbih',     cat: 'morning', titleAr: 'تسبيح الصباح',     titleBn: 'সকালের তাসবিহ',         firstLine: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ' },
  { id: 'morning-dress',      cat: 'morning', titleAr: 'دعاء اللباس',       titleBn: 'পোশাক পরার দুআ',        firstLine: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا' },
  { id: 'morning-leaving',    cat: 'morning', titleAr: 'دعاء الخروج',       titleBn: 'বের হওয়ার দুআ',         firstLine: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ' },
  // Evening
  { id: 'evening-protection', cat: 'evening', titleAr: 'دعاء المساء',       titleBn: 'সন্ধ্যার সুরক্ষার দুআ', firstLine: 'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا' },
  { id: 'sleep-dua',           cat: 'evening', titleAr: 'دعاء النوم',        titleBn: 'ঘুমানোর দুআ',            firstLine: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا' },
  { id: 'evening-forgiveness', cat: 'evening', titleAr: 'دعاء قبل النوم',    titleBn: 'ঘুমের আগের দুআ',         firstLine: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ' },
  { id: 'evening-tasbih',      cat: 'evening', titleAr: 'تسبيح المساء',      titleBn: 'সন্ধ্যার তাসবিহ',        firstLine: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ' },
  { id: 'evening-kul',         cat: 'evening', titleAr: 'المعوذتان مساءً',   titleBn: 'সন্ধ্যায় মুআউওয়িযাতাইন', firstLine: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ' },
];

export const CATS: Category[] = [
  { id: 'salat',   icon: '🕌', titleBn: 'নামাজের দুআ',   sub: 'Prayers of Salat'    },
  { id: 'quran',   icon: '📖', titleBn: 'কুরআনের সূরা', sub: 'Surahs of the Quran' },
  { id: 'amal',    icon: '⭐', titleBn: 'আমল ও ফজিলত',  sub: 'Deeds & Virtues'     },
  { id: 'morning', icon: '🌅', titleBn: 'সকালের আমল',   sub: 'Morning Deeds'       },
  { id: 'evening', icon: '🌙', titleBn: 'সন্ধ্যার আমল', sub: 'Evening Deeds'       },
];

export const CAT_LABELS: Record<string, CatLabel> = {
  salat:   { bn: 'নামাজের দুআ',   en: 'Prayers of Salat'    },
  quran:   { bn: 'কুরআনের সূরা', en: 'Surahs of the Quran' },
  amal:    { bn: 'আমল ও ফজিলত',  en: 'Deeds & Virtues'     },
  morning: { bn: 'সকালের আমল',   en: 'Morning Deeds'       },
  evening: { bn: 'সন্ধ্যার আমল', en: 'Evening Deeds'       },
};

export const DETAIL_MAP: Record<string, DuaDetail> = {
  tashahhud: {
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
    fullArabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nالرَّحْمَنِ الرَّحِيمِ\nمَالِكِ يَوْمِ الدِّينِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ\nصِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    fullBanglaTranslit: "বিসমিল্লাহির রাহমানির রাহিম। আলহামদু লিল্লাহি রব্বিল আলামিন। আর্রাহমানির রাহিম। মালিকি ইয়াওমিদ্দিন। ইয়্যাকা না'বুদু ওয়া ইয়্যাকা নাস্তাইন। ইহদিনাস্ সিরাতাল মুস্তাকিম। সিরাতাল্লাযিনা আন'আমতা আলাইহিম, গাইরিল মাগযুবি আলাইহিম ওয়ালাদ দ্বাল্লিন।",
    fullMeaningBn: 'পরম করুণাময় অসীম দয়ালু আল্লাহর নামে। সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সমগ্র সৃষ্টির পালনকর্তা। যিনি পরম করুণাময়, অসীম দয়ালু। যিনি বিচার দিনের মালিক। আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনার কাছেই সাহায্য চাই। আমাদের সরল পথ দেখান — তাদের পথ যাদের উপর আপনি অনুগ্রহ করেছেন, তাদের পথ নয় যাদের উপর ক্রোধ হয়েছে এবং যারা পথভ্রষ্ট।',
    segments: [
      {
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
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
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
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
        arabic: 'الرَّحْمَنِ الرَّحِيمِ',
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
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
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
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
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
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
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
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
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
    fullArabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
    fullBanglaTranslit: 'কুল হুওয়াল্লাহু আহাদ। আল্লাহুস্ সামাদ। লাম ইয়ালিদ ওয়ালাম ইউলাদ। ওয়ালাম ইয়াকুল্লাহু কুফুওয়ান আহাদ।',
    fullMeaningBn: 'বলুন, তিনি আল্লাহ, একক। আল্লাহ চিরস্থায়ী ও সকলের আশ্রয়। তিনি জন্ম দেননি এবং জন্ম নেননি। এবং তাঁর সমকক্ষ কেউ নেই।',
    segments: [
      {
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
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
        arabic: 'اللَّهُ الصَّمَدُ',
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
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
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
        arabic: 'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
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
};
