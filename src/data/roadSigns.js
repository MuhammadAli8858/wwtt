
const code = (s) => ({ ru: s, en: s, zh: s, kk: s, be: s, tr: s, uz: s })

// Size helper: square or rectangular dimensions in millimetres.
const sz = (a, b) => ({
  ru: `${a}мм × ${b}мм`,
  uz: `${a}mm × ${b}mm`,
  en: `${a}mm × ${b}mm`,
  zh: `${a}毫米 × ${b}毫米`,
  kk: `${a}мм × ${b}мм`,
  be: `${a}мм × ${b}мм`,
  tr: `${a}mm × ${b}mm`,
  
})

// Reusable material values
const GALV = { ru: 'Оцинкованная сталь', en: 'Galvanized steel', zh: '镀锌钢', kk: 'Мырышталған болат', be: 'Ацынкаваная сталь', tr: 'Galvanizli çelik', uz: 'Rux qoplangan poʻlat' }
const GALV_POLY = { ru: 'Оцинкованная сталь с полимерным покрытием', en: 'Galvanized steel with polymer coating', zh: '镀锌钢带聚合物涂层', kk: 'Полимерлі жабыны бар мырышталған болат', be: 'Ацынкаваная сталь з палімерным пакрыццём', tr: 'Polimer kaplamalı galvanizli çelik', uz: 'Polimer qoplamali rux qoplangan poʻlat' }
const GALV_10 = { ru: 'Оцинкованная сталь 1,0мм', en: 'Galvanized steel 1.0 mm', zh: '镀锌钢 1.0毫米', kk: 'Мырышталған болат 1,0мм', be: 'Ацынкаваная сталь 1,0мм', tr: 'Galvanizli çelik 1,0 mm', uz: 'Rux qoplangan poʻlat 1,0mm' }
const ALU3 = { ru: 'Композитный алюминий 3мм', en: 'Composite aluminum 3 mm', zh: '铝复合板 3毫米', kk: 'Композиттік алюминий 3мм', be: 'Кампазітны алюміній 3мм', tr: 'Kompozit alüminyum 3 mm', uz: 'Kompozit alyuminiy 3mm' }
const ALU = { ru: 'Композитный алюминий', en: 'Composite aluminum', zh: '铝复合板', kk: 'Композиттік алюминий', be: 'Кампазітны алюміній', tr: 'Kompozit alüminyum', uz: 'Kompozit alyuminiy' }

// Reusable reflectivity classes
const CLASS2HI = { ru: 'Класс 2 (высокая интенсивность)', en: 'Class 2 (high intensity)', zh: '2级（高强度）', kk: '2-класс (жоғары қарқындылық)', be: 'Клас 2 (высокая інтэнсіўнасць)', tr: 'Sınıf 2 (yüksek yoğunluk)', uz: '2-sinf (yuqori intensivlik)' }
const CLASS2 = { ru: 'Класс 2', en: 'Class 2', zh: '2级', kk: '2-класс', be: 'Клас 2', tr: 'Sınıf 2', uz: '2-sinf' }
const CLASS1 = { ru: 'Класс 1', en: 'Class 1', zh: '1级', kk: '1-класс', be: 'Клас 1', tr: 'Sınıf 1', uz: '1-sinf' }

// Reusable mounting values
const M_POLE_BRACKET = { ru: 'На столбе или кронштейне', en: 'On a pole or bracket', zh: '安装于立柱或支架上', kk: 'Бағанда немесе кронштейнде', be: 'На слупе або кранштэйне', tr: 'Direk veya konsol üzerinde', uz: 'Ustun yoki kronshteynda' }
const M_SIDE_OR_PORTAL_STRUCT = { ru: 'Боковое крепление или портальная конструкция', en: 'Side mounting or gantry structure', zh: '侧装或门架结构', kk: 'Бүйірлік бекіту немесе порталдық конструкция', be: 'Бакавое мацаванне або партальная канструкцыя', tr: 'Yandan montaj veya portal yapı', uz: 'Yon oʻrnatish yoki portal konstruksiya' }
const M_STD_POLE = { ru: 'Стандартное крепление на столб', en: 'Standard pole mounting', zh: '标准立柱安装', kk: 'Бағанға стандартты бекіту', be: 'Стандартнае мацаванне на слуп', tr: 'Standart direk montajı', uz: 'Ustunga standart oʻrnatish' }
const M_SIDE_OR_PORTAL = { ru: 'Боковое или портальное', en: 'Side or gantry', zh: '侧装或门架式', kk: 'Бүйірлік немесе порталдық', be: 'Бакавое або партальнае', tr: 'Yandan veya portal', uz: 'Yon yoki portal' }
const M_STD_PORTAL = { ru: 'Стандартное/портальное', en: 'Standard / gantry', zh: '标准/门架式', kk: 'Стандартты/порталдық', be: 'Стандартнае/партальнае', tr: 'Standart / portal', uz: 'Standart/portal' }
const M_PORTAL_OR_SIDE = { ru: 'Портальное или боковое', en: 'Gantry or side', zh: '门架式或侧装', kk: 'Порталдық немесе бүйірлік', be: 'Партальнае або бакавое', tr: 'Portal veya yandan', uz: 'Portal yoki yon' }
const M_PORTAL = { ru: 'Портальное', en: 'Gantry', zh: '门架式', kk: 'Порталдық', be: 'Партальнае', tr: 'Portal', uz: 'Portal' }
const M_PORTAL_STRUCT = { ru: 'Портальная конструкция', en: 'Gantry structure', zh: '门架结构', kk: 'Порталдық конструкция', be: 'Партальная канструкцыя', tr: 'Portal yapı', uz: 'Portal konstruksiya' }
const M_SIDE = { ru: 'Боковое крепление', en: 'Side mounting', zh: '侧装', kk: 'Бүйірлік бекіту', be: 'Бакавое мацаванне', tr: 'Yandan montaj', uz: 'Yon oʻrnatish' }
const M_STD = { ru: 'Стандартное', en: 'Standard', zh: '标准安装', kk: 'Стандартты', be: 'Стандартнае', tr: 'Standart', uz: 'Standart' }
const M_UNDER_MAIN = { ru: 'Под основным знаком', en: 'Below the main sign', zh: '位于主标志下方', kk: 'Негізгі белгінің астында', be: 'Пад асноўным знакам', tr: 'Ana işaretin altında', uz: 'Asosiy belgi ostida' }
const M_UNDER_WARN = { ru: 'Под предупреждающим знаком', en: 'Below the warning sign', zh: '位于警告标志下方', kk: 'Ескерту белгісінің астында', be: 'Пад папярэджвальным знакам', tr: 'Uyarı işaretinin altında', uz: 'Ogohlantiruvchi belgi ostida' }

// Reusable compliance values
const GOST_52290 = code('ГОСТ Р 52290-2004')
const GOST_52289 = code('ГОСТ Р 52289-2019')
const TRTS_018 = code('ТР ТС 018/2011')
const CERT_TRTS = { ru: 'Сертификат соответствия ТР ТС', en: 'TR CU conformity certificate', zh: '海关联盟技术规程合格证书', kk: 'ТР КО сәйкестік сертификаты', be: 'Сертыфікат адпаведнасці ТР МС', tr: 'TR GB uygunluk sertifikası', uz: 'TR BI muvofiqlik sertifikati' }
const GOV_1090 = { ru: 'Постановление Правительства РФ № 1090', en: 'RF Government Resolution No. 1090', zh: '俄罗斯联邦政府第1090号决议', kk: 'РФ Үкіметінің № 1090 қаулысы', be: 'Пастанова Урада РФ № 1090', tr: 'RF Hükümeti No. 1090 Kararı', uz: 'RF Hukumatining № 1090-sonli qarori' }
const MVD_ORDER = { ru: 'Приказ МВД России', en: 'Order of the Ministry of Internal Affairs of Russia', zh: '俄罗斯内务部命令', kk: 'Ресей ІІМ бұйрығы', be: 'Загад МУС Расіі', tr: 'Rusya İçişleri Bakanlığı Emri', uz: 'Rossiya IIV buyrugʻi' }

// Shared description / purpose for speed-limit signs (3.24 family, "выше N км/ч")
const speedDescAbove = (n) => ({
  ru: `Запрещается движение со скоростью выше ${n} км/ч.`,
  en: `Driving faster than ${n} km/h is prohibited.`,
  zh: `禁止以超过 ${n} 公里/小时的速度行驶。`,
  kk: `${n} км/сағ-тан жоғары жылдамдықпен жүруге тыйым салынады.`,
  be: `Забараняецца рух са хуткасцю вышэй за ${n} км/гадз.`,
  tr: `${n} km/s üzerindeki hızla seyretmek yasaktır.`,
  uz: `${n} km/soatdan yuqori tezlikda harakatlanish taqiqlanadi.`,
})

export const roadSigns = [
  {
    id: '2.5',
    image: '/2.5.svg',
    code: '2.5',
    name: { ru: 'Движение без остановки запрещено', en: 'No entry without stopping (STOP)', zh: '禁止不停车通行（停车让行）', kk: 'Тоқтамай жүруге тыйым салынады', be: 'Рух без прыпынку забаронены', tr: 'Durmadan geçmek yasaktır (DUR)', uz: 'Toʻxtamasdan harakatlanish taqiqlanadi (STOP)' },
    description: { ru: 'Запрещается движение без остановки перед стоп-линией, а если её нет — перед краем пересекаемой проезжей части.', en: 'Driving without stopping is prohibited before the stop line, or, if there is none, before the edge of the intersecting roadway.', zh: '在停止线前必须停车；如无停止线，则在所穿越车行道边缘前停车，禁止不停车通行。', kk: 'Тоқтау сызығының алдында, ал ол болмаса — қиылысатын жол жиегінің алдында тоқтамай жүруге тыйым салынады.', be: 'Забараняецца рух без прыпынку перад стоп-лініяй, а калі яе няма — перад краем праезджай часткі, якая перасякаецца.', tr: 'Dur çizgisinden önce, yoksa kesişen yolun kenarından önce durmadan geçmek yasaktır.', uz: 'Toʻxtash chizigʻidan oldin, agar u boʻlmasa — kesib oʻtiladigan yoʻl chekkasidan oldin toʻxtamasdan harakatlanish taqiqlanadi.' },
    purpose: { ru: 'Обеспечение безопасности на опасных перекрёстках и переездах. Применяется совместно с системами фиксации нарушений.', en: 'Ensuring safety at dangerous intersections and crossings. Used together with violation-recording systems.', zh: '保障危险路口和道口的安全。与违章抓拍系统配合使用。', kk: 'Қауіпті қиылыстар мен өткелдерде қауіпсіздікті қамтамасыз ету. Бұзушылықтарды тіркеу жүйелерімен бірге қолданылады.', be: 'Забеспячэнне бяспекі на небяспечных скрыжаваннях і пераездах. Прымяняецца сумесна з сістэмамі фіксацыі парушэнняў.', tr: 'Tehlikeli kavşaklarda ve geçitlerde güvenliğin sağlanması. İhlal kayıt sistemleriyle birlikte kullanılır.', uz: 'Xavfli chorrahalar va kechuvlarda xavfsizlikni taʼminlash. Qoidabuzarliklarni qayd etish tizimlari bilan birga qoʻllaniladi.' },
    specifications: { size: sz(600, 600), material: GALV_POLY, reflectivity: CLASS2HI, mounting: M_POLE_BRACKET },
    applications: [
      { ru: 'Железнодорожные переезды', en: 'Railway crossings', zh: '铁路道口', kk: 'Теміржол өткелдері', be: 'Чыгуначныя пераезды', tr: 'Demiryolu geçitleri', uz: 'Temir yoʻl kechuvlari' },
      { ru: 'Опасные перекрёстки', en: 'Dangerous intersections', zh: '危险路口', kk: 'Қауіпті қиылыстар', be: 'Небяспечныя скрыжаванні', tr: 'Tehlikeli kavşaklar', uz: 'Xavfli chorrahalar' },
      { ru: 'Участки с ограниченной видимостью', en: 'Areas with limited visibility', zh: '视线受限路段', kk: 'Көрінуі шектеулі учаскелер', be: 'Участкі з абмежаванай бачнасцю', tr: 'Görüşün kısıtlı olduğu kesimler', uz: 'Koʻrinishi cheklangan uchastkalar' },
      { ru: 'Зоны контроля систем фиксации', en: 'Enforcement camera zones', zh: '抓拍系统监控区', kk: 'Тіркеу жүйелерінің бақылау аймақтары', be: 'Зоны кантролю сістэм фіксацыі', tr: 'İhlal kayıt sistemi bölgeleri', uz: 'Qayd etish tizimlari nazorat zonalari' },
    ],
    compliance: [GOST_52290, GOST_52289, CERT_TRTS],
  },
  {
    id: '5.43',
    image: '/5.43.png',
    code: '5.43',
    name: { ru: 'Зона контроля скоростного режима', en: 'Speed control zone', zh: '速度控制区', kk: 'Жылдамдық режимін бақылау аймағы', be: 'Зона кантролю хуткаснага рэжыму', tr: 'Hız kontrol alanı', uz: 'Tezlik rejimini nazorat qilish zonasi' },
    description: { ru: 'Обозначает что в  данном участке дороги контроль скоростного режима осуществляется при помощи стационарных или мобильных устройств фиксации скорости.', 
                   en: 'Indicates that in this section of the road, speed control is carried out using stationary or mobile speed detection devices.', 
                   zh: '表示在该路段，使用静止或移动速度检测装置进行速度控制。', 
                   kk: 'Жолдың осы учаскесінде жылдамдық режимін бақылау стационарлық немесе мобильді жылдамдықты бекіту құрылғыларының көмегімен жүзеге асырылады.', 
                   be: 'Пазначае што ў дадзеным участку дарогі кантроль хуткаснага рэжыму ажыццяўляецца пры дапамозе стацыянарных або мабільных прылад фіксацыі хуткасці.', 
                   tr: 'Bu yol bölümünde hız kontrolünün sabit veya mobil hız tespit cihazları kullanılarak gerçekleştirildiğini belirtir.', 
                   uz: 'Yo‘lning ushbu qismida tezlik rejimini nazorat qilish statsionar yoki mobil tezlikni qayd etish qurilmalari yordamida amalga oshirilishini bildiradi.' },
    purpose: { ru: 'Контроль скоростного режима транспортов. Используется с автоматическими системами распознавания.', 
               en: 'Speed control of vehicles. It is used with automatic recognition systems.', 
               zh: '车辆的速度控制。 它与自动识别系统一起使用。', 
               kk: 'Көліктердің жылдамдық режимін бақылау. Автоматты тану жүйелерімен қолданылады.', 
               be: 'Кантроль хуткаснага рэжыму транспартаў. Выкарыстоўваецца з аўтаматычнымі сістэмамі распазнання.', 
               tr: 'Taşıtların hız sınırının kontrolü.  Otomatik tanıma sistemleriyle birlikte kullanılır.', 
               uz: 'Transport vositalarining tezlik rejimini nazorat qilish. Avtomatik tanib olish tizimlari bilan qo‘llaniladi.' },
    specifications: { size: sz(700, 700), material: ALU3, reflectivity: CLASS2HI, mounting: M_SIDE_OR_PORTAL_STRUCT },
    applications: [
      { ru: 'Городские магистрали', en: 'Urban arterials', zh: '城市主干道', kk: 'Қалалық магистральдар', be: 'Гарадскія магістралі', tr: 'Kentsel ana yollar', uz: 'Shahar magistrallari' },
      { ru: 'Системы автоматического контроля', en: 'Automatic control systems', zh: '自动监控系统', kk: 'Автоматты бақылау жүйелері', be: 'Сістэмы аўтаматычнага кантролю', tr: 'Otomatik denetim sistemleri', uz: 'Avtomatik nazorat tizimlari' },
      { ru: 'Интеграция с камерами распознавания номеров', en: 'Integration with plate-recognition cameras', zh: '与车牌识别摄像头集成', kk: 'Нөмір тану камераларымен интеграция', be: 'Інтэграцыя з камерамі распазнавання нумароў', tr: 'Plaka tanıma kameralarıyla entegrasyon', uz: 'Raqam tanish kameralari bilan integratsiya' },
    ],
    compliance: [GOST_52290, GOV_1090, TRTS_018],
  },
  {
    id: '3.24-30',
    image: '/30.svg',
    code: '3.24',
    name: { ru: 'Ограничение максимальной скорости (30 км/ч)', en: 'Maximum speed limit (30 km/h)', zh: '最高限速（30 公里/小时）', kk: 'Ең жоғары жылдамдықты шектеу (30 км/сағ)', be: 'Абмежаванне максімальнай хуткасці (30 км/гадз)', tr: 'Azami hız sınırı (30 km/s)', uz: 'Maksimal tezlik cheklovi (30 km/soat)' },
    description: { ru: 'Запрещается движение со скоростью, превышающей указанную на знаке.', en: 'Driving faster than the speed shown on the sign is prohibited.', zh: '禁止以超过标志所示速度行驶。', kk: 'Белгіде көрсетілген жылдамдықтан асатын қозғалысқа тыйым салынады.', be: 'Забараняецца рух са хуткасцю, якая перавышае пазначаную на знаку.', tr: 'İşarette belirtilen hızı aşan sürüş yasaktır.', uz: 'Belgida koʻrsatilgan tezlikdan oshib harakatlanish taqiqlanadi.' },
    purpose: { ru: 'Контроль скоростного режима с использованием радарных комплексов и камер фиксации.', en: 'Speed enforcement using radar systems and recording cameras.', zh: '借助雷达系统和抓拍摄像头进行速度管控。', kk: 'Радар кешендері мен тіркеу камераларын пайдалана отырып жылдамдық режимін бақылау.', be: 'Кантроль хуткаснага рэжыму з выкарыстаннем радарных комплексаў і камер фіксацыі.', tr: 'Radar sistemleri ve kayıt kameralarıyla hız denetimi.', uz: 'Radar majmualari va qayd etish kameralari yordamida tezlik nazorati.' },
    specifications: { size: sz(600, 600), material: GALV_10, reflectivity: CLASS2HI, mounting: M_STD_POLE },
    applications: [
      { ru: 'Жилые зоны', en: 'Residential areas', zh: '居住区', kk: 'Тұрғын аймақтар', be: 'Жылыя зоны', tr: 'Yerleşim alanları', uz: 'Turar-joy hududlari' },
      { ru: 'Школьные территории', en: 'School areas', zh: '学校区域', kk: 'Мектеп аумақтары', be: 'Школьныя тэрыторыі', tr: 'Okul bölgeleri', uz: 'Maktab hududlari' },
      { ru: 'Дворовые проезды', en: 'Courtyard driveways', zh: '院落通道', kk: 'Аула жолдары', be: 'Дваровыя праезды', tr: 'Avlu geçişleri', uz: 'Hovli yoʻllari' },
      { ru: 'Участки с радарами контроля скорости', en: 'Sections with speed-control radars', zh: '设有测速雷达的路段', kk: 'Жылдамдықты бақылау радарлары бар учаскелер', be: 'Участкі з радарамі кантролю хуткасці', tr: 'Hız kontrol radarlı kesimler', uz: 'Tezlik nazorati radarlari boʻlgan uchastkalar' },
    ],
    compliance: [GOST_52290, GOST_52289],
  },
  {
    id: '3.24-50',
    image: '/50.svg',
    code: '3.24',
    name: { ru: 'Ограничение максимальной скорости (50 км/ч)', en: 'Maximum speed limit (50 km/h)', zh: '最高限速（50 公里/小时）', kk: 'Ең жоғары жылдамдықты шектеу (50 км/сағ)', be: 'Абмежаванне максімальнай хуткасці (50 км/гадз)', tr: 'Azami hız sınırı (50 km/s)', uz: 'Maksimal tezlik cheklovi (50 km/soat)' },
    description: speedDescAbove(50),
    purpose: { ru: 'Стандартное ограничение для городских дорог с системами автоматической фиксации.', en: 'Standard limit for urban roads with automatic enforcement systems.', zh: '配备自动抓拍系统的城市道路标准限速。', kk: 'Автоматты тіркеу жүйелері бар қалалық жолдарға арналған стандартты шектеу.', be: 'Стандартнае абмежаванне для гарадскіх дарог з сістэмамі аўтаматычнай фіксацыі.', tr: 'Otomatik denetim sistemli kentsel yollar için standart sınır.', uz: 'Avtomatik qayd etish tizimlari boʻlgan shahar yoʻllari uchun standart cheklov.' },
    specifications: { size: sz(700, 700), material: GALV_10, reflectivity: CLASS2, mounting: M_SIDE_OR_PORTAL },
    applications: [
      { ru: 'Городские улицы', en: 'City streets', zh: '城市街道', kk: 'Қала көшелері', be: 'Гарадскія вуліцы', tr: 'Şehir caddeleri', uz: 'Shahar koʻchalari' },
      { ru: 'Загородные трассы перед населёнными пунктами', en: 'Rural roads before settlements', zh: '居民点前的郊区公路', kk: 'Елді мекендер алдындағы қала маңы трассалары', be: 'Загарадныя трасы перад населенымі пунктамі', tr: 'Yerleşim öncesi şehirlerarası yollar', uz: 'Aholi punktlari oldidagi shahar tashqarisidagi yoʻllar' },
      { ru: 'Зоны камер фото-видеофиксации', en: 'Photo and video enforcement zones', zh: '照片和视频抓拍区', kk: 'Фото-бейне тіркеу камераларының аймақтары', be: 'Зоны камер фота-відэафіксацыі', tr: 'Fotoğraf ve video kayıt bölgeleri', uz: 'Foto-video qayd etish kameralari zonalari' },
    ],
    compliance: [GOST_52290, GOST_52289],
  },
  {
    id: '3.24-60',
    image: '/60.svg',
    code: '3.24',
    name: { ru: 'Ограничение максимальной скорости (60 км/ч)', en: 'Maximum speed limit (60 km/h)', zh: '最高限速（60 公里/小时）', kk: 'Ең жоғары жылдамдықты шектеу (60 км/сағ)', be: 'Абмежаванне максімальнай хуткасці (60 км/гадз)', tr: 'Azami hız sınırı (60 km/s)', uz: 'Maksimal tezlik cheklovi (60 km/soat)' },
    description: speedDescAbove(60),
    purpose: { ru: 'Применяется на магистральных улицах с интенсивным движением и камерами контроля.', en: 'Used on arterial streets with heavy traffic and enforcement cameras.', zh: '用于交通繁忙、设有监控摄像头的主干道。', kk: 'Қозғалысы қарқынды және бақылау камералары бар магистральдық көшелерде қолданылады.', be: 'Прымяняецца на магістральных вуліцах з інтэнсіўным рухам і камерамі кантролю.', tr: 'Yoğun trafikli ve denetim kameralı ana caddelerde kullanılır.', uz: 'Harakati jadal va nazorat kameralari boʻlgan magistral koʻchalarda qoʻllaniladi.' },
    specifications: { size: sz(700, 700), material: GALV, reflectivity: CLASS2, mounting: M_STD_PORTAL },
    applications: [
      { ru: 'Магистральные дороги', en: 'Arterial roads', zh: '主干道', kk: 'Магистральдық жолдар', be: 'Магістральныя дарогі', tr: 'Ana yollar', uz: 'Magistral yoʻllar' },
      { ru: 'Скоростные участки в городе', en: 'High-speed urban sections', zh: '城市快速路段', kk: 'Қаладағы жылдамдықты учаскелер', be: 'Хуткасныя ўчасткі ў горадзе', tr: 'Şehir içi yüksek hızlı kesimler', uz: 'Shahardagi tezyurar uchastkalar' },
      { ru: 'Интеграция с радарными комплексами', en: 'Integration with radar systems', zh: '与雷达系统集成', kk: 'Радар кешендерімен интеграция', be: 'Інтэграцыя з радарнымі комплексамі', tr: 'Radar sistemleriyle entegrasyon', uz: 'Radar majmualari bilan integratsiya' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '3.24-70',
    image: '/70.svg',
    code: '3.24',
    name: { ru: 'Ограничение максимальной скорости (70 км/ч)', en: 'Maximum speed limit (70 km/h)', zh: '最高限速（70 公里/小时）', kk: 'Ең жоғары жылдамдықты шектеу (70 км/сағ)', be: 'Абмежаванне максімальнай хуткасці (70 км/гадз)', tr: 'Azami hız sınırı (70 km/s)', uz: 'Maksimal tezlik cheklovi (70 km/soat)' },
    description: speedDescAbove(70),
    purpose: { ru: 'Для загородных дорог и автомагистралей с автоматическим контролем скорости.', en: 'For rural roads and motorways with automatic speed control.', zh: '用于设有自动测速的郊区公路和高速公路。', kk: 'Автоматты жылдамдық бақылауы бар қала маңы жолдары мен автомагистральдарға арналған.', be: 'Для загародных дарог і аўтамагістраляў з аўтаматычным кантролем хуткасці.', tr: 'Otomatik hız kontrollü şehirlerarası yollar ve otoyollar için.', uz: 'Avtomatik tezlik nazorati boʻlgan shahar tashqarisidagi yoʻllar va avtomagistrallar uchun.' },
    specifications: { size: sz(700, 700), material: GALV, reflectivity: CLASS2, mounting: M_PORTAL_OR_SIDE },
    applications: [
      { ru: 'Загородные трассы', en: 'Rural highways', zh: '郊区公路', kk: 'Қала маңы трассалары', be: 'Загарадныя трасы', tr: 'Şehirlerarası yollar', uz: 'Shahar tashqarisidagi yoʻllar' },
      { ru: 'Подъездные пути', en: 'Access roads', zh: '连接道路', kk: 'Кіреберіс жолдар', be: 'Пад’язныя шляхі', tr: 'Bağlantı yolları', uz: 'Kirish yoʻllari' },
      { ru: 'Комплексы фиксации скорости', en: 'Speed-enforcement systems', zh: '测速抓拍系统', kk: 'Жылдамдықты тіркеу кешендері', be: 'Комплексы фіксацыі хуткасці', tr: 'Hız kayıt sistemleri', uz: 'Tezlikni qayd etish majmualari' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '3.24-80',
    image: '/80.svg',
    code: '3.24',
    name: { ru: 'Ограничение максимальной скорости (80 км/ч)', en: 'Maximum speed limit (80 km/h)', zh: '最高限速（80 公里/小时）', kk: 'Ең жоғары жылдамдықты шектеу (80 км/сағ)', be: 'Абмежаванне максімальнай хуткасці (80 км/гадз)', tr: 'Azami hız sınırı (80 km/s)', uz: 'Maksimal tezlik cheklovi (80 km/soat)' },
    description: speedDescAbove(80),
    purpose: { ru: 'Стандарт для загородных трасс с камерами фиксации.', en: 'Standard for rural highways with enforcement cameras.', zh: '设有抓拍摄像头的郊区公路标准限速。', kk: 'Тіркеу камералары бар қала маңы трассаларына арналған стандарт.', be: 'Стандарт для загародных трас з камерамі фіксацыі.', tr: 'Kayıt kameralı şehirlerarası yollar için standart.', uz: 'Qayd etish kameralari boʻlgan shahar tashqarisidagi yoʻllar uchun standart.' },
    specifications: { size: sz(700, 700), material: GALV, reflectivity: CLASS2, mounting: M_PORTAL },
    applications: [
      { ru: 'Междугородные трассы', en: 'Intercity highways', zh: '城际公路', kk: 'Қалааралық трассалар', be: 'Міжгароднія трасы', tr: 'Şehirlerarası yollar', uz: 'Shaharlararo yoʻllar' },
      { ru: 'Автомагистрали', en: 'Motorways', zh: '高速公路', kk: 'Автомагистральдар', be: 'Аўтамагістралі', tr: 'Otoyollar', uz: 'Avtomagistrallar' },
      { ru: 'Зоны с автоматической фиксацией', en: 'Automatic enforcement zones', zh: '自动抓拍区', kk: 'Автоматты тіркеу аймақтары', be: 'Зоны з аўтаматычнай фіксацыяй', tr: 'Otomatik kayıt bölgeleri', uz: 'Avtomatik qayd etish zonalari' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '3.24-100',
    image: '/100.svg',
    code: '3.24',
    name: { ru: 'Ограничение максимальной скорости (100 км/ч)', en: 'Maximum speed limit (100 km/h)', zh: '最高限速（100 公里/小时）', kk: 'Ең жоғары жылдамдықты шектеу (100 км/сағ)', be: 'Абмежаванне максімальнай хуткасці (100 км/гадз)', tr: 'Azami hız sınırı (100 km/s)', uz: 'Maksimal tezlik cheklovi (100 km/soat)' },
    description: speedDescAbove(100),
    purpose: { ru: 'Для скоростных автомагистралей с системами контроля.', en: 'For high-speed motorways with enforcement systems.', zh: '用于设有监控系统的高速公路。', kk: 'Бақылау жүйелері бар жылдамдықты автомагистральдарға арналған.', be: 'Для хуткасных аўтамагістраляў з сістэмамі кантролю.', tr: 'Denetim sistemli yüksek hızlı otoyollar için.', uz: 'Nazorat tizimlari boʻlgan tezyurar avtomagistrallar uchun.' },
    specifications: { size: sz(900, 900), material: GALV, reflectivity: CLASS2, mounting: M_PORTAL_STRUCT },
    applications: [
      { ru: 'Автомагистрали', en: 'Motorways', zh: '高速公路', kk: 'Автомагистральдар', be: 'Аўтамагістралі', tr: 'Otoyollar', uz: 'Avtomagistrallar' },
      { ru: 'Скоростные трассы', en: 'Express highways', zh: '快速公路', kk: 'Жылдамдықты трассалар', be: 'Хуткасныя трасы', tr: 'Ekspres yollar', uz: 'Tezyurar yoʻllar' },
      { ru: 'Комплексы автоматической фиксации', en: 'Automatic enforcement systems', zh: '自动抓拍系统', kk: 'Автоматты тіркеу кешендері', be: 'Комплексы аўтаматычнай фіксацыі', tr: 'Otomatik kayıt sistemleri', uz: 'Avtomatik qayd etish majmualari' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '5.41',
    image: '/5.41.png',
    code: '5.41',
    name: { ru: 'Зона контроля фото и видеофиксация', 
            en: 'Photo and video recording control area', 
            zh: '照片及录像控制区', 
            kk: 'Фото және бейнетіркеуді бақылау аймағы', 
            be: 'Зона кантролю фота і відэафіксацыя', 
            tr: 'Fotoğraf kontrol alanı ve video kaydı', 
            uz: 'Foto va video qayd etish nazorat zonasi ' },
    description: { ru: 'Обозначает что в данном участке ведется автоматический контроль за соблюдением правил дорожного движения с помощью специальных комплексов (камер).', 
                   en: 'Indicates that automatic monitoring of compliance with traffic rules is carried out in this section using special complexes (cameras).', 
                   zh: '表示在本节中使用特殊复合体（摄像机）进行遵守交通规则的自动监控。', 
                   kk: 'Бұл учаскеде арнайы кешендердің (камералардың) көмегімен жол қозғалысы ережелерінің сақталуына автоматты бақылау жүргізілетінін білдіреді.', 
                   be: 'У дадзеным участку вядзецца аўтаматычны кантроль за выкананнем правілаў дарожнага руху з дапамогай спецыяльных комплексаў (камер).', 
                   tr: 'Bu bölümde, özel kompleksler (kameralar) kullanılarak trafik kurallarına uyulmasının otomatik olarak izlendiğini belirtir.', 
                   uz: 'Ushbu uchastkada maxsus komplekslar (kameralar) yordamida yo‘l harakati qoidalariga rioya etilishi avtomatik nazorat qilinayotganini bildiradi.' },
    purpose: { ru: 'Контроль за соблюдением правил дорожного движения.', 
               en: 'Monitoring compliance with traffic rules.', 
               zh: '监控交通规则的遵守情况。', 
               kk: 'Жол қозғалысы ережелерінің сақталуын бақылау.', 
               be: 'Кантроль за выкананнем правілаў дарожнага руху.', 
               tr: 'Trafik kurallarına uygunluğun izlenmesi.', 
               uz: 'Yo‘l harakati qoidalariga rioya etilishini nazorat qilish.' },
    specifications: { size: sz(700, 700), material: ALU, reflectivity: CLASS2, mounting: M_SIDE },
    applications: [
      { ru: 'Зоны контроля скорости', en: 'Speed-control zones', zh: '测速区', kk: 'Жылдамдықты бақылау аймақтары', be: 'Зоны кантролю хуткасці', tr: 'Hız kontrol bölgeleri', uz: 'Tezlik nazorati zonalari' },
      { ru: 'Участки с камерами фиксации проезда на красный свет', en: 'Sections with red-light enforcement cameras', zh: '设有闯红灯抓拍摄像头的路段', kk: 'Қызыл шамнан өтуді тіркейтін камералары бар учаскелер', be: 'Участкі з камерамі фіксацыі праезду на чырвонае святло', tr: 'Kırmızı ışık ihlal kameralı kesimler', uz: 'Qizil chiroqdan oʻtishni qayd etuvchi kameralar boʻlgan uchastkalar' },
      { ru: 'Контроль выделенных полос', en: 'Dedicated-lane enforcement', zh: '专用车道监控', kk: 'Арнайы жолақтарды бақылау', be: 'Кантроль вылучаных палос', tr: 'Tahsisli şerit denetimi', uz: 'Ajratilgan yoʻlaklarni nazorat qilish' },
      { ru: 'Фиксация нарушений разметки', en: 'Recording of road-marking violations', zh: '抓拍违反标线行为', kk: 'Таңбалау бұзушылықтарын тіркеу', be: 'Фіксацыя парушэнняў разметкі', tr: 'Yol çizgisi ihlallerinin kaydı', uz: 'Yoʻl chiziqlari buzilishini qayd etish' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '5.24',
    image:'/5.24.png',
    code: '5.24',
    name: { ru: 'Въезд и Выезды из населенных зон.', 
            en: 'Entrances and Exits from populated areas', 
            zh: '人口稠密地区的出入口', 
            kk: 'Елді мекендерден кіру және шығу', 
            be: 'Ўезд і Выезды з населеных зон', 
            tr: 'Yerleşim alanlarına giriş ve çıkışlar', 
            uz: 'Aholi punktlariga kirish va chiqish' },
    description: { ru: 'Обозначает Въезд и Выезды из населенных зон', 
                   en: 'Indicates Entrances and Exits from populated areas.', 
                   zh: '指示人口稠密地区的入口和出口。', 
                   kk: 'Елді мекендердің кіруі мен шығуын білдіреді.', 
                   be: 'Пазначае ўезд і Выезды з населеных зон.', 
                   tr: 'Yerleşim alanlarından giriş ve çıkışları belirtir.', 
                   uz: 'Aholi punktlariga kirish va chiqishni bildiradi.' },
    purpose: { ru: 'Информирование водителей о работе систем автоматической фиксации нарушений ПДД.', en: 'Informing drivers that automatic traffic-violation recording systems are in operation.', zh: '告知驾驶员自动交通违章抓拍系统正在运行。', kk: 'Жүргізушілерді ЖҚЕ бұзушылықтарын автоматты тіркеу жүйелерінің жұмысы туралы хабардар ету.', be: 'Інфармаванне кіроўцаў пра працу сістэм аўтаматычнай фіксацыі парушэнняў ПДР.', tr: 'Sürücüleri otomatik trafik ihlali kayıt sistemlerinin çalıştığı konusunda bilgilendirme.', uz: 'Haydovchilarni YHQ buzilishini avtomatik qayd etish tizimlari ishlayotgani haqida xabardor qilish.' },
    specifications: { size: sz(600, 600), material: GALV_POLY, reflectivity: CLASS2, mounting: M_STD_POLE },
    applications: [
      { ru: 'Населённые зоны', en: 'Populated areas', zh: '人口稠密地区', kk: 'Елді мекендер', be: 'Населеныя зоны', tr: 'Yerleşim bölgeleri', uz: 'Aholi yashaydigan hududlar' },
      { ru: 'Границы контролируемых территорий', en: 'Boundaries of controlled areas', zh: '管控区域边界', kk: 'Бақыланатын аумақтардың шекаралары', be: 'Межы кантраляваных тэрыторый', tr: 'Denetlenen alanların sınırları', uz: 'Nazorat qilinadigan hududlar chegaralari' },
    ],
    compliance: [GOST_52290, MVD_ORDER],
  },
  {
    id: '5.33',
    image:'/5.33.svg',
    code: '5.33',
    name: { ru: 'Стоп-линия', en: 'Stop line', zh: '停止线', kk: 'Тоқтату сызығы', be: 'Стоп-лінія', tr: 'Durdurma hattı', uz: 'To‘xtash chizig‘i' },
    description: { ru: ' Он указывает точное место, где водитель обязан остановить транспортное средство при запрещающем сигнале светофора или регулировщика.', 
                   en: 'It indicates the exact place where the driver is required to stop the vehicle when the traffic light or traffic controller is forbidding.', 
                   zh: '它指示当红绿灯或交通控制器禁止时要求驾驶员停止车辆的确切位置。', 
                   kk: 'Ол жүргізушінің бағдаршамға немесе реттеушіге тыйым салу сигналы кезінде көлік құралын тоқтатуға міндетті нақты орнын көрсетеді.', 
                   be: 'Ён паказвае дакладнае месца, дзе кіроўца абавязаны спыніць транспартны сродак пры забараняльным сігнале святлафора або рэгуліроўшчыка.', 
                   tr: 'Sürücünün, trafik ışığı veya trafik polisinin yasaklayıcı sinyali sırasında aracı durdurması gereken kesin yeri gösterir.', 
                   uz: 'Bu haydovchi svetofor yoki tartibga soluvchining taqiqlovchi ishorasida transport vositasini to‘xtatishi shart bo‘lgan aniq joyni ko‘rsatadi.' },
    purpose: { ru: 'Показывать точное место стоп линии.', 
               en: 'Show the exact location of the stop line.', 
               zh: '示停止线的确切位置。', 
               kk: 'Аялдама сызығының нақты орнын көрсетіңіз.', 
               be: 'Паказваць дакладнае месца стоп лініі.', 
               tr: 'Göster tam bir yer dur çizgileri.', 
               uz: 'To‘xtash chizig‘ining aniq joyini ko‘rsatish.' },
    specifications: { size: sz(600, 600), material: GALV, reflectivity: CLASS2, mounting: M_SIDE },
    applications: [
      { ru: 'Центры городов', en: 'City centers', zh: '城市中心', kk: 'Қала орталықтары', be: 'Цэнтры гарадоў', tr: 'Şehir merkezleri', uz: 'Shahar markazlari' },
      { ru: 'Светофоры', en: 'Traffic lights', zh: '公园区域', kk: 'Бағдаршамдар', be: 'Святлафор', tr: 'Işıklar', uz: 'Svetoforlar' },
      { ru: 'Перекрёстки ', en: 'Intersections', zh: '交叉路口', kk: 'Қиылыстар', be: 'Скрыжаванне', tr: 'Kavşaklar', uz: 'Chorrahalar' },
      { ru: 'Магистральные дороги', en: 'Arterial roads', zh: '主干道', kk: 'Магистральдық жолдар', be: 'Магістральныя дарогі', tr: 'Ana yollar', uz: 'Magistral yoʻllar' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '3.27',
    image: '/3.27.png',
    code: '3.27',
    name: { ru: 'Остановка запрещена', en: 'No stopping', zh: '禁止停车', kk: 'Тоқтауға тыйым салынады', be: 'Прыпынак забаронены', tr: 'Durmak yasaktır', uz: 'Toʻxtash taqiqlanadi' },
    description: { ru: 'Запрещается остановка и стоянка транспортных средств.', en: 'Stopping and parking of vehicles is prohibited.', zh: '禁止车辆停车和停放。', kk: 'Көлік құралдарының тоқтауы мен тұрағына тыйым салынады.', be: 'Забараняецца прыпынак і стаянка транспартных сродкаў.', tr: 'Araçların durması ve park etmesi yasaktır.', uz: 'Transport vositalarining toʻxtashi va turishi taqiqlanadi.' },
    purpose: { ru: 'Контроль парковки с использованием камер автоматической фиксации нарушений остановки.', en: 'Parking enforcement using cameras that automatically record stopping violations.', zh: '借助自动抓拍违停摄像头进行停车管控。', kk: 'Тоқтау бұзушылықтарын автоматты тіркейтін камераларды пайдаланып тұрақты бақылау.', be: 'Кантроль паркоўкі з выкарыстаннем камер аўтаматычнай фіксацыі парушэнняў прыпынку.', tr: 'Durma ihlallerini otomatik kaydeden kameralarla park denetimi.', uz: 'Toʻxtash qoidabuzarliklarini avtomatik qayd etuvchi kameralar yordamida toʻxtash nazorati.' },
    specifications: { size: sz(600, 600), material: GALV, reflectivity: CLASS2, mounting: M_STD },
    applications: [
      { ru: 'Автобусные остановки', en: 'Bus stops', zh: '公交车站', kk: 'Автобус аялдамалары', be: 'Аўтобусныя прыпынкі', tr: 'Otobüs durakları', uz: 'Avtobus bekatlari' },
      { ru: 'Участки с ограниченной видимостью', en: 'Areas with limited visibility', zh: '视线受限路段', kk: 'Көрінуі шектеулі учаскелер', be: 'Участкі з абмежаванай бачнасцю', tr: 'Görüşün kısıtlı olduğu kesimler', uz: 'Koʻrinishi cheklangan uchastkalar' },
      { ru: 'Зоны контроля парковки', en: 'Parking-control zones', zh: '停车管控区', kk: 'Тұрақты бақылау аймақтары', be: 'Зоны кантролю паркоўкі', tr: 'Park denetim bölgeleri', uz: 'Toʻxtash nazorati zonalari' },
      { ru: 'Камеры фиксации остановки', en: 'Stopping-enforcement cameras', zh: '违停抓拍摄像头', kk: 'Тоқтауды тіркеу камералары', be: 'Камеры фіксацыі прыпынку', tr: 'Durma ihlali kameraları', uz: 'Toʻxtashni qayd etish kameralari' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '7.5.7',
    image:'/7.5.7.svg',
    code: '7.5.7',
    name: { ru: 'Время действия', en: 'Time of action', zh: '行动时间', kk: 'Әрекет уақыты', be: 'Час дзеяння', tr: 'Geçerlilik süresi', uz: 'Amal qilish vaqti' },
    description: { ru: 'Она указывает дни недели и точное время суток, в течение которых действует основной дорожный знак, под которым она установлена.', 
                   en: 'It indicates the days of the week and the exact time of day during which the main road sign under which it is installed is in effect.', 
                   zh: '它表示一星期的日子和一天的确切时间，在此期间，主要道路标志安装在其下是有效的。', 
                   kk: 'Ол аптаның күндерін және ол орнатылған негізгі жол белгісі қолданылатын тәуліктің нақты уақытын көрсетеді.', 
                   be: 'Яна паказвае дні тыдня і дакладны час сутак, на працягу якіх дзейнічае асноўны дарожны знак, пад якім яна ўстаноўлена.', 
                   tr: 'Haftanın günlerini ve ana yol işaretinin etkili olduğu günün tam saatini belirtir, altında yer almaktadır.', 
                   uz: 'U haftaning kunlarini va asosiy yo‘l belgisi o‘rnatilgan aniq vaqt oralig‘ini ko‘rsatadi.' },
    purpose: { ru: 'Указывать дни недели и точное время суток', 
               en: 'Specify the days of the week and the exact time of day', 
               zh: '指定星期几和一天的确切时间', 
               kk: 'Аптаның күндерін және күннің нақты уақытын көрсетіңіз', 
               be: 'Паказваць дні тыдня і дакладны час сутак', 
               tr: 'Haftanın günlerini ve günün tam saatini belirtin', 
               uz: 'Hafta kunlari va kunning aniq vaqtini ko‘rsatish' },
    specifications: { size: sz(350, 500), material: GALV, reflectivity: CLASS1, mounting: M_UNDER_MAIN },
    applications: [
      { ru: 'Знаки остановки и стоянки', en: 'Stop and parking signs', zh: '停车和停车标志', kk: 'Тоқтау және тұрақ белгілері', be: 'Знакі прыпынку і стаянкі', tr: 'Dur ve park işaretleri', uz: 'To‘xtash va to‘xtab turish belgilari' },
      { ru: 'Знаки принудительной эвакуации', en: 'Signs of forced evacuation', zh: '强迫撤离的迹象', kk: 'Мәжбүрлі эвакуация белгілері', be: 'Знакі прымусовай эвакуацыі', tr: 'Zorunlu tahliye işaretleri', uz: 'Majburiy evakuatsiya belgilari' },
      { ru: 'Предупреждающие и предписывающие знаки', en: 'Warning and prescriptive signs', zh: '警告及规定性标志', kk: 'Ескерту және нұсқау белгілері', be: 'Папераджальныя і прадпісваюць знакі', tr: 'Uyarı ve kuralcı işaretler', uz: 'Ogohlantiruvchi va ko‘rsatma belgilari' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '7.21',
    image:'/7.21.png',
    code: '7.21',
    name: { ru: 'Автозаправочная станция', en: 'Gas station', zh: '加油站', kk: 'Жанармай құю станциясы', be: 'Аўтазаправачная станцыя', tr: 'Benzin istasyonu', uz: 'Avtomobillarga yoqilg‘i quyish shoxobchasi' },
    description: { ru: 'Он информирует водителей о том, что на данной АЗС (традиционное топливо)', 
                   en: 'He informs the drivers that there is a traditional fuel at this gas station', 
                   zh: '他告诉司机这个加油站有一种传统的燃料', 
                   kk: 'Ол жүргізушілерге осы жанармай құю станциясында (дәстүрлі отын)екенін хабарлайды', 
                   be: 'Ён інфармуе кіроўцаў аб тым, што на дадзенай АЗС (традыцыйнае паліва)', 
                   tr: 'Sürücülere, bu benzin istasyonunda (geleneksel yakıt) şu konuda bilgi vermektedir:', 
                   uz: 'Bu haydovchilarga ushbu yoqilg‘i quyish shoxobchasida (an’anaviy yoqilg‘i) ekanligi haqida ma’lumot beradi.' },
    purpose: { ru: 'Он информирует водителей о АЗС', en: 'It informs drivers about the gas station', zh: '它通知司机关于加油站', kk: 'Ол жүргізушілерге жанармай құю станциясы туралы хабарлайды', be: 'Ён інфармуе кіроўцаў аб АЗС', tr: 'Sürücüleri benzin istasyonu hakkında bilgilendirir', uz: 'U haydovchilarni yoqilg‘i quyish shoxobchalari haqida xabardor qiladi.' },
    specifications: { size: sz(350, 500), material: GALV, reflectivity: CLASS1, mounting: M_UNDER_WARN },
    applications: [
      { ru: 'Автозаправочная станция (АЗС)', en: 'Gas station (gas station)', zh: '加油站（gas station）', kk: 'Жанармай құю станциясы (жанармай құю бекеті)', be: 'Аўтазаправачная станцыя (АЗС)', tr: 'Benzin istasyonu (benzin istasyonu)', uz: 'Avtomobillarga yoqilg‘i quyish shoxobchasi (AYQSh)' },
    ],
    compliance: [GOST_52290],
  },
]
