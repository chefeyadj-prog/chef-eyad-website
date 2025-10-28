import type { Translations } from '../types';

export const content: Translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      menu: 'قائمة الطعام',
      allergens: 'الحساسية',
      contact: 'تواصل معنا',
      language_switch: 'Eng',
    },
    hero: {
      title: ' مطعم الشيف إياد جــدة ',
      subtitle: 'تذوق الطعم الأصيل الذي لا ينسى',
      cta_button: 'عرض القائمة',
    },
    menu: {
      title: 'قائمة الطعام',
      categories: [
        {
          title: 'الأطباق الرئيسية',
          description: 'سعر الكيلو 370 ر.س / التسعيرة حسب الوزن\nالاسعار تشمل: الصوصات + السلطات + الأرز ( إعادة تعبئة مجانية )\n1 مشروب غازي لكل 250 جرام من اللحم',
          note: 'نوع اللحوم: استرالي / كندي / روسي / محلي / بولندي / امريكي\nلحم الغنم 143 سعرة حرارية لكل 100 غرام\nلحم البقر 168 سعرة حرارية لكل 100 غرام',
          items: [
            { name: 'اضلاع بقر', description: 'طريقة الطلب حسب وزن القطعة كامله او نصف القطعة', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760729917/ChatGPT_Image_14_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_06_03_%D8%B5_kd4ejp.png' },
            { name: 'برسكت بقر', description: 'طريقة الطلب اقل كمية للطلب 250 جرام', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760729790/1_hffdih.png' },
            { name: 'موزات غنم', description: 'طريقة الطلب حسب وزن القطعة كامله', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760729942/ChatGPT_Image_13_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_11_57_%D9%85_zmhyn6.png' },
            { name: 'رقبة غنم', description: 'طريقة الطلب حسب وزن القطعة كامله', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730147/ChatGPT_Image_15_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_26_33_%D8%B5_cgqepz.png' },
            { name: 'كتف غنم', description: 'طريقة الطلب حسب وزن القطعة كامله', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730146/554_lwpkgu.png' },
          ],
        },
        {
          title: 'البرجر',
          description: '\n\n',
          items: [
            { name: 'برجر دبل سماش', description: 'لحم بقر يُشكّل على الصاج ويُضغط ليمنحك قشرة ذهبية مقرمشة من الخارج وعصارة غنية من الداخل. يُقدم في خبز طري مع الجبنة الذائبة والصوص الخاص، ليمنحك تجربة برجر لا تُنسى\n Cal 835.', price: 'SAR 49', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730423/smach_ieuiql.png' },
            { name: 'برسكت بريوش', description: 'لحم البريسكت المدخن ببطء لساعات طويلة لينضح بالعصارة والنكهة الغنية، يُقدم في خبز بريوش طري مع صوص الشيف الخاص ولمسة من الخس الطازج. كل قضمة تمنحك توازنًا مثاليًا بين الطراوة واللذة المدخنة.\n Cal 835', price: 'SAR 49', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730422/Bryosh_eveyot.png' },
          ],
          
        },
        {
          title: 'الاطباق الجانبية',
          description: '\n\n',
          items: [
            { name: 'بطاطس حارة', description: 'قطع بطاطس ذهبية مقرمشة تُقلى بعناية وتُتبّل بمزيج خاص من التوابل الحارة ليمنحك قوة النكهة مع القرمشة المثالية في كل قضمة.\n Cal 386', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730423/ChatGPT_Image_14_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_36_22_%D9%85_l1agel.png' },
            { name: 'بطاطس مهروسة حارة', description: 'بطاطس طازجة مهروسة بدقة لتصبح ناعمة كالحرير، مُتبّلة بتوابل حارة تمنحك دفعة من النكهة المميزة في كل ملعقة.\n Cal 328', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730424/ChatGPT_Image_14_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_45_54_%D9%85_qnlgju.png' },
            { name: 'بطاطس مقلية', description: 'قطع بطاطس ذهبية مقرمشة تُقلى بعناية لتبقى خفيفة من الداخل ومقرمشة من الخارج، مع لمسة ملح مثالية تُبرز النكهة الكلاسيكية التي يعشقها الجميع.\n Cal 397', price: 'SAR 11', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730424/ChatGPT_Image_15_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_09_16_%D8%B5_ta69vb.png' },
          ],
        },
        {
          title: 'عصائر طبيعية',
          description: '\n\n',
          items: [
            { name: 'برتقال', description: 'عصير برتقال طبيعي طازج ومنعش، مليء بالنكهات الحلوة والحامضة.\n120 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_34_40_%D9%85_ypcdhg.png' },
            { name: 'ليمون', description: 'عصير ليمون حامض ومنعش، مثالي لإعادة الانتعاش في أي وقت.\n80 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817242/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_35_52_%D9%85_rvkfty.png' },
            { name: 'ليمون نعناع', description: 'مزيج منعش من الليمون والنعناع ليمنحك إحساساً بالانتعاش الفوري.\n110 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_37_31_%D9%85_o1qynj.png' },
            { name: 'أناناس', description: 'عصير أناناس استوائي حلو ومنعش، مثالي لأيام الصيف الحارة.\n160 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_40_04_%D9%85_oqnuld.png' },
            { name: 'أناناس مع برتقال', description: 'مزيج استوائي منعش يجمع بين حلاوة الأناناس ونكهة البرتقال الطبيعية.\n150 Cal', price: 'SAR 18', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_52_55_%D9%85_lhtfun.png' },
            { name: 'كركديه', description: 'مشروب كركديه منعش بطعم حامض قليلًا، غني باللون الأحمر الجذاب.\n60 Cal', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760818224/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_57_17_%D9%85_gw4qal.png' },
            { name: 'بيناكولادا', description: 'مزيج كريمي من الأناناس وجوز الهند، يمنحك طعم استوائي غني ومنعش.\n250 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760819783/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_36_10_%D9%85_vn9fwx.png' },
          ],
        },
        {
          title: 'الحلى',
          description: '\n\n',
          items: [
            { name: 'بقلاوة تركية', description: 'بقلاوة مقرمشة محشوة بالمكسرات الفاخرة.', price: 'SAR 20', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760910674/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_50_20_%D8%B5_xfas1c.png' },
            { name: 'بقلاوة تركية مع أيس كريم', description: 'بقلاوة فاخرة تُقدم مع آيس كريم كريمي بارد لتوازن مثالي بين القرمشة والانتعاش.', price: 'SAR 26', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760909011/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_23_23_%D8%B5_a9l7sg.png' },
            { name: ' اناناس مع عسل', description: 'شرائح أناناس طازجة تُغطى بعسل طبيعي لتجربة استوائية منعشة.', price: 'SAR 18', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760912739/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_01_25_24_%D8%B5_zrvzyd.png' },
            //{ name: 'أناناس مع عسل و أيس كريم', description: 'طعم استوائي مميز', price: 'SAR 25', image: '' },
            { name: 'شوكليت كيك', description: 'كيكة شوكولاتة غنية بطبقات طرية ونكهة كاكاو فاخرة تذوب في الفم.', price: 'SAR 23', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760905195/ChatGPT_Image_19_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_18_45_%D9%85_vnr6y5.png' },
            { name: 'كيكة الزامل', description: 'كيكة منزلية ناعمة بطعم كلاسيكي لذيذ، تُقدم مع لمسة من الكراميل.', price: 'SAR 23', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760909721/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_35_08_%D8%B5_jwkbyo.png' },
            { name: 'كنافة تشيز كيك', description: 'كنافة مقرمشة محشوة بكريمة الجبن الغنية، تُقدم مع قطر دافئ بنكهة شرقية مميزة.', price: 'SAR 23', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760908327/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_11_55_%D8%B5_ddhnne.png' },
            //{ name: 'أيس كريم', description: 'طعم استوائي مميز', price: 'SAR 25', image: '' },
          ],
        },
        {
          title: 'موهيتو',
          description: '\n\n',
          items: [
            { name: 'موهيتو توت ازرق', description: '160 سعرة حرارية', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989169/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_08_53_14_%D9%85_bdcrep.png' },
            { name: 'موهيتو توت احمر', description: '150 سعرة حرارية', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_03_34_%D9%85_gu5fzm.png' },
            { name: 'موهيتو بطيخ', description: '140 سعرة حرارية', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_09_30_%D9%85_u7bxa7.png' },
            { name: 'موهيتو رمان', description: '170 سعرة حرارية', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_18_53_%D9%85_yvma9e.png' },
            { name: 'موهيتو مكس توت', description: '180 سعرة حرارية', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_11_41_%D9%85_e71zrw.png' },
            { name: 'موهيتو باشن فروت', description: '160 سعرة حرارية', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760990894/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_08_06_%D9%85_fectfj.png' },
            { name: 'موهيتو ايس تي الشيف اياد', description: '130 سعرة حرارية', price: 'SAR 15', image: '' },
            { name: 'سعودي كوكتيل', description: '250 سعرة حرارية', price: 'SAR 15', image: '' },
          ],
        },
        {
          title: 'مشروبات باردة',
          description: '\n\n',
          items: [
            { name: 'مشروبات غازية', description: 'كولا - ليمون - برتقال - توت - حمضيات - كولا دايت - ليمون دايت - مياة غازية ', price: 'SAR 5', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_28_05_%D9%85_mnba7t.png' },
            { name: 'مياه معدنية', description: 'محلية', price: 'SAR 1', image: '' },
          ],
        },
        {
          title: 'مشروبات ساخنة',
          description: '\n\n',
          items: [
            { name: 'شاي', description: '', price: 'SAR 8', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761599436/ChatGPT_Image_28_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_10_25_%D8%B5_eo3xwm.png' },
            { name: 'أمريكانو', description: '', price: 'SAR 12', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761598589/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_56_14_%D9%85_fybxrm.png' },
            { name: 'كابتشينو', description: '', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989208/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_08_13_41_%D9%85_yf7cgu.png' },
            { name: 'أسبريسو', description: '', price: 'SAR 12', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_40_24_%D9%85_jvbnjw.png' },
            { name: 'لاتيه', description: '', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760991414/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_16_42_%D9%85_kisxqp.png' },
            { name: 'ميكاتو', description: '', price: 'SAR 14', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761598200/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_49_48_%D9%85_euwoaf.png' },
          ],
        },
        {
          title: 'قهوة بارده',
          description: '\n\n',
          items: [
            { name: 'سبانش لاتيه', description: '280 سعرة حرارية', price: 'SAR 17', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761596354/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_15_55_%D9%85_dv668c.png' },
            { name: 'موكا', description: '320 سعرة حرارية', price: 'SAR 18', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761597467/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_37_17_%D9%85_xa4cml.png' },
            { name: 'كراميل', description: '270 سعرة حرارية', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761596479/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_20_12_%D9%85_uzc9sp.png' },
            { name: 'ايس لاتيه', description: '180 سعرة حرارية', price: 'SAR 14', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761597901/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_44_50_%D9%85_vpvyjf.png' },
            { name: 'ايس امريكانو', description: '15 سعرة حرارية', price: 'SAR 12', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761596016/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_11_18_%D9%85_ui37do.png' },
          ],
          ],
        },
      ],
    info: {
      hours_title: 'ساعات العمل',
      hours: [
        'السبت - الخميس: 12:00 ظهرًا - 2:00 صباحًا',
        'الجمعة: 1:00 ظهرًا - 3:00 صباحًا',
      ],
      hours_note: 'كما نود التنويه بأنه في حال انتهاء كمية اللحم يتم إغلاق المطعم مبكرًا، وسيتم إشعاركم فورًا عبر حساباتنا في وسائل التواصل الاجتماعي.',
      location_title: 'موقعنا',
      location: 'الامير سلطان، الزهراء، جدة 23424',
      follow_us_title: 'تابعنا على',
    },
    footer: {
      social_title: 'الموقع',
      rights_reserved: 'جميع الحقوق محفوظة © ٢٠٢٤',
    },
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      contact: 'Contact',
      language_switch: 'العربية',
    },
    hero: {
      title: 'Chef Eyad Jeddah',
      subtitle: 'Experience an unforgettable authentic taste',
      cta_button: 'View Menu',
    },
    menu: {
      title: 'Our Menu',
      categories: [
        {
          title: 'Main Courses',
          description: 'Price per Kilo: SAR 370 / Priced by weight\nPrices include: Sauces + Salads + Rice (free refill)\n1 soft drink per 250g of meat',
          note: 'Meat Origins: Australian / Canadian / Russian / Local / Polish / American\nLamb: 143 calories per 100g\nBeef: 168 calories per 100g',
          items: [
            { name: 'Beef Ribs', description: 'Order by weight of the whole or half piece', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760729917/ChatGPT_Image_14_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_06_03_%D8%B5_kd4ejp.png' },
            { name: 'Beef Brisket', description: 'Minimum order is 250 grams', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760729790/1_hffdih.png' },
            { name: 'Lamb Shanks', description: 'Order by weight of the whole piece', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760729942/ChatGPT_Image_13_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_11_57_%D9%85_zmhyn6.png' },
            { name: 'Lamb Neck', description: 'Order by weight of the whole piece', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730147/ChatGPT_Image_15_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_26_33_%D8%B5_cgqepz.png' },
            { name: 'Lamb Shoulder', description: 'Order by weight of the whole piece', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730146/554_lwpkgu.png' },
          ],
        },
        {
      title: 'Burgers',
      description: '\n\n',
      items: [
        { 
          name: 'Double Smash Burger', 
          description: 'Beef patty smashed on a hot grill to create a golden crispy crust on the outside while keeping it juicy inside. Served in a soft bun with melted cheese and our signature sauce for an unforgettable burger experience.\n Cal 835.', 
          price: 'SAR 49', 
          image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730423/smach_ieuiql.png' 
        },
        { 
          name: 'Brisket Brioche', 
          description: 'Slow-smoked brisket cooked for hours to lock in rich, smoky flavor. Served in a fluffy brioche bun with Chef’s special sauce and fresh lettuce. Every bite is a perfect balance of tenderness and bold flavor.\n Cal 835', 
          price: 'SAR 49', 
          image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730422/Bryosh_eveyot.png' 
        },
      ],
    },
    {
      title: 'Side Dishes',
      description: '\n\n',
      items: [
        { 
          name: 'Spicy Fries', 
          description: 'Golden crispy fries seasoned with a special spicy blend for the perfect crunch and a bold kick of flavor.\n Cal 386', 
          price: 'SAR 15', 
          image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730423/ChatGPT_Image_14_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_36_22_%D9%85_l1agel.png' 
        },
        { 
          name: 'Spicy Mashed Potatoes', 
          description: 'Smooth, creamy mashed potatoes with a spicy twist for a burst of flavor in every spoonful.\n Cal 328', 
          price: 'SAR 15', 
          image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730424/ChatGPT_Image_14_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_45_54_%D9%85_qnlgju.png' 
        },
        { 
          name: 'French Fries', 
          description: 'Crispy golden fries, light on the inside and perfectly crunchy on the outside, with just the right touch of salt.\n Cal 397', 
          price: 'SAR 11', 
          image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760730424/ChatGPT_Image_15_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_09_16_%D8%B5_ta69vb.png' 
        },
      ],
    },
    {
      title: 'Fresh Juices',
      description: '\n\n',
      items: [
        { name: 'Orange', description: 'Freshly squeezed orange juice, naturally sweet and tangy.\n120 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_34_40_%D9%85_ypcdhg.png' },
        { name: 'Lemon', description: 'Refreshing sour lemon juice, perfect for a quick energy boost.\n80 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817242/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_35_52_%D9%85_rvkfty.png' },
        { name: 'Lemon Mint', description: 'A refreshing blend of lemon and mint for instant coolness.\n110 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_37_31_%D9%85_o1qynj.png' },
        { name: 'Pineapple', description: 'Sweet and tropical pineapple juice, perfect for summer days.\n160 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_40_04_%D9%85_oqnuld.png' },
        { name: 'Pineapple & Orange', description: 'A tropical blend combining the sweetness of pineapple and the tang of orange.\n150 Cal', price: 'SAR 18', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_52_55_%D9%85_lhtfun.png' },
        { name: 'Hibiscus', description: 'A cool and tangy hibiscus drink with a deep red color.\n60 Cal', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760818224/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_57_17_%D9%85_gw4qal.png' },
        { name: 'Pina Colada', description: 'A creamy tropical mix of pineapple and coconut for a rich refreshing taste.\n250 Cal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760819783/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_36_10_%D9%85_vn9fwx.png' },
      ],
    },
    {
      title: 'Desserts',
      description: '\n\n',
      items: [
        { name: 'Turkish Baklava', description: 'Crispy layered pastry filled with premium nuts.', price: 'SAR 20', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760910674/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_50_20_%D8%B5_xfas1c.png' },
        { name: 'Turkish Baklava with Ice Cream', description: 'Premium baklava served with creamy ice cream for the perfect balance of crunch and refreshment.', price: 'SAR 26', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760909011/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_23_23_%D8%B5_a9l7sg.png' },
        { name: 'Pineapple with Honey', description: 'Fresh pineapple slices topped with natural honey for a tropical treat.', price: 'SAR 18', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760912739/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_01_25_24_%D8%B5_zrvzyd.png' },
        { name: 'Chocolate Cake', description: 'Rich chocolate cake with soft layers and premium cocoa flavor that melts in your mouth.', price: 'SAR 23', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760905195/ChatGPT_Image_19_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_18_45_%D9%85_vnr6y5.png' },
        { name: 'Zamel Cake', description: 'A classic homemade-style cake served with a touch of caramel.', price: 'SAR 23', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760909721/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_35_08_%D8%B5_jwkbyo.png' },
        { name: 'Kunafa Cheesecake', description: 'Crispy kunafa filled with creamy cheese, served with warm oriental syrup.', price: 'SAR 23', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760908327/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_11_55_%D8%B5_ddhnne.png' },
      ],
    },
    {
      title: 'Mojito',
      description: '\n\n',
      items: [
        { name: 'Blueberry Mojito', description: '160 Calories', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989169/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_08_53_14_%D9%85_bdcrep.png' },
        { name: 'Red Berry Mojito', description: '150 Calories', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_03_34_%D9%85_gu5fzm.png' },
        { name: 'Watermelon Mojito', description: '140 Calories', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_09_30_%D9%85_u7bxa7.png' },
        { name: 'Pomegranate Mojito', description: '170 Calories', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_18_53_%D9%85_yvma9e.png' },
        { name: 'Mixed Berry Mojito', description: '180 Calories', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_11_41_%D9%85_e71zrw.png' },
        { name: 'Passion Fruit Mojito', description: '160 Calories', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760990894/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_08_06_%D9%85_fectfj.png' },
        { name: 'Chef Eyad Ice Tea Mojito', description: '130 Calories', price: 'SAR 15', image: '' },
        { name: 'Saudi Cocktail', description: '250 Calories', price: 'SAR 15', image: '' },
      ],
    },
    {
      title: 'Cold Drinks',
      description: '\n\n',
      items: [
        { name: 'Soft Drinks', description: 'Cola - Lemon - Orange - Berry - Citrus - Diet Cola - Diet Lemon - Sparkling Water.', price: 'SAR 5', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_28_05_%D9%85_mnba7t.png' },
        { name: 'Mineral Water', description: 'Local', price: 'SAR 1', image: '' },
      ],
    },
    {
      title: 'Hot Drinks',
      description: '\n\n',
      items: [
        { name: 'Tea', description: '', price: 'SAR 8', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761599436/ChatGPT_Image_28_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_10_25_%D8%B5_eo3xwm.png' },
        { name: 'Americano', description: '', price: 'SAR 12', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761598589/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_56_14_%D9%85_fybxrm.png' },
        { name: 'Cappuccino', description: '', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989208/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_08_13_41_%D9%85_yf7cgu.png' },
        { name: 'Espresso', description: '', price: 'SAR 12', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_40_24_%D9%85_jvbnjw.png' },
        { name: 'Latte', description: '', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760991414/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_16_42_%D9%85_kisxqp.png' },
        { name: 'Macchiato', description: '', price: 'SAR 14', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761598200/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_49_48_%D9%85_euwoaf.png' },
      ],
    },
    {
      title: 'Iced Coffee',
      description: '\n\n',
      items: [
        { name: 'Spanish Latte', description: '280 kcal', price: 'SAR 17', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761596354/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_15_55_%D9%85_dv668c.png' },
        { name: 'Mocha', description: '320 kcal', price: 'SAR 18', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761597467/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_37_17_%D9%85_xa4cml.png' },
        { name: 'Caramel', description: '270 kcal', price: 'SAR 15', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761596479/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_20_12_%D9%85_uzc9sp.png' },
        { name: 'Iced Latte', description: '180 kcal', price: 'SAR 14', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761597901/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_44_50_%D9%85_vpvyjf.png' },
        { name: 'Iced Americano', description: '15 kcal', price: 'SAR 12', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761596016/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_11_18_%D9%85_ui37do.png' },
]
    },
  ],
},

    info: {
      hours_title: 'Working Hours',
      hours: [
        'Saturday - Thursday: 12:00 PM - 2:00 AM',
        'Friday: 1:00 PM - 3:00 AM',
      ],
      hours_note: 'Please note that if we run out of meat, the restaurant will close early. We will notify you immediately on our social media accounts.',
      location_title: 'Our Location',
      location: 'Prince Sultan, Al Zahra, Jeddah 23424',
    },
    footer: {
      social_title: 'Follow Us',
      rights_reserved: 'All rights reserved © 2024',
    },
  },
};
