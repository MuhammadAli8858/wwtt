// All textual fields are multilingual objects: { ru, en, zh, kk, be, tr, uz }.
// `id` and `code` stay as plain strings. Standard codes (ГОСТ / ТР ТС) are kept
// verbatim across languages via the code() helper.

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
    name: { ru: 'Зона с ограничением экологического класса грузовых автомобилей', en: 'Zone with a truck emission-class restriction', zh: '货车环保等级限制区', kk: 'Жүк көліктерінің экологиялық класы шектелген аймақ', be: 'Зона з абмежаваннем экалагічнага класа грузавых аўтамабіляў', tr: 'Kamyon emisyon sınıfı kısıtlama bölgesi', uz: 'Yuk avtomobillari ekologik sinfi cheklangan hudud' },
    description: { ru: 'Обозначает зону, в которой запрещено движение грузовых автомобилей, тракторов и самоходных машин, экологический класс которых ниже указанного на знаке.', en: 'Marks a zone where trucks, tractors and self-propelled machines below the emission class shown on the sign are prohibited.', zh: '标示禁止环保等级低于标志所示等级的货车、拖拉机及自行式机械通行的区域。', kk: 'Экологиялық класы белгіде көрсетілгеннен төмен жүк көліктері, тракторлар мен өздігінен жүретін машиналардың қозғалысына тыйым салынған аймақты білдіреді.', be: 'Абазначае зону, у якой забаронены рух грузавых аўтамабіляў, трактароў і самаходных машын, экалагічны клас якіх ніжэйшы за пазначаны на знаку.', tr: 'İşarette belirtilen emisyon sınıfının altındaki kamyon, traktör ve kendi yürür makinelerin geçişinin yasak olduğu bölgeyi gösterir.', uz: 'Belgida koʻrsatilgan ekologik sinfdan past boʻlgan yuk avtomobillari, traktorlar va oʻzi yuradigan mashinalar harakati taqiqlangan hududni bildiradi.' },
    purpose: { ru: 'Экологический контроль транспорта. Используется с автоматическими системами распознавания.', en: 'Environmental control of vehicles. Used with automatic recognition systems.', zh: '车辆环保管控。与自动识别系统配合使用。', kk: 'Көліктің экологиялық бақылауы. Автоматты тану жүйелерімен бірге қолданылады.', be: 'Экалагічны кантроль транспарту. Выкарыстоўваецца з аўтаматычнымі сістэмамі распазнавання.', tr: 'Araçların çevresel denetimi. Otomatik tanıma sistemleriyle kullanılır.', uz: 'Transportning ekologik nazorati. Avtomatik tanish tizimlari bilan ishlatiladi.' },
    specifications: { size: sz(700, 700), material: ALU3, reflectivity: CLASS2HI, mounting: M_SIDE_OR_PORTAL_STRUCT },
    applications: [
      { ru: 'Въезды в экологические зоны', en: 'Entrances to low-emission zones', zh: '环保区入口', kk: 'Экологиялық аймақтарға кірулер', be: 'Уезды ў экалагічныя зоны', tr: 'Düşük emisyon bölgesi girişleri', uz: 'Ekologik hududlarga kirishlar' },
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
    name: { ru: 'Конец зоны с ограничением экологического класса', en: 'End of the emission-class restriction zone', zh: '环保等级限制区结束', kk: 'Экологиялық класы шектелген аймақтың соңы', be: 'Канец зоны з абмежаваннем экалагічнага класа', tr: 'Emisyon sınıfı kısıtlama bölgesi sonu', uz: 'Ekologik sinf cheklovi hududining oxiri' },
    description: { ru: 'Отменяет действие знака 5.43.', en: 'Cancels the effect of sign 5.43.', zh: '解除5.43号标志的限制。', kk: '5.43 белгісінің күшін жояды.', be: 'Адмяняе дзеянне знака 5.43.', tr: '5.43 işaretinin etkisini sona erdirir.', uz: '5.43 belgisining amal qilishini bekor qiladi.' },
    purpose: { ru: 'Обозначает окончание зоны экологического контроля.', en: 'Marks the end of the environmental control zone.', zh: '标示环保管控区的结束。', kk: 'Экологиялық бақылау аймағының аяқталуын білдіреді.', be: 'Абазначае заканчэнне зоны экалагічнага кантролю.', tr: 'Çevresel denetim bölgesinin bittiğini gösterir.', uz: 'Ekologik nazorat hududining tugashini bildiradi.' },
    specifications: { size: sz(700, 700), material: ALU, reflectivity: CLASS2, mounting: M_SIDE },
    applications: [
      { ru: 'Выезды из экологических зон', en: 'Exits from low-emission zones', zh: '环保区出口', kk: 'Экологиялық аймақтардан шығулар', be: 'Выезды з экалагічных зон', tr: 'Düşük emisyon bölgesi çıkışları', uz: 'Ekologik hududlardan chiqishlar' },
      { ru: 'Границы контролируемых территорий', en: 'Boundaries of controlled areas', zh: '管控区域边界', kk: 'Бақыланатын аумақтардың шекаралары', be: 'Межы кантраляваных тэрыторый', tr: 'Denetlenen alanların sınırları', uz: 'Nazorat qilinadigan hududlar chegaralari' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '5.24',
    image:'/5.24.png',
    code: '5.24',
    name: { ru: 'Фотовидеофиксация', en: 'Photo and video enforcement', zh: '照片视频抓拍', kk: 'Фото-бейне тіркеу', be: 'Фотавідэафіксацыя', tr: 'Fotoğraf ve video kayıt', uz: 'Foto-video qayd etish' },
    description: { ru: 'Обозначает участки дороги, на которых работают камеры фото- и видеофиксации нарушений.', en: 'Marks road sections where photo and video violation-recording cameras operate.', zh: '标示设有违章照片和视频抓拍摄像头的路段。', kk: 'Бұзушылықтарды фото- және бейнетіркеу камералары жұмыс істейтін жол учаскелерін білдіреді.', be: 'Абазначае ўчасткі дарогі, на якіх працуюць камеры фота- і відэафіксацыі парушэнняў.', tr: 'Fotoğraf ve video ihlal kayıt kameralarının çalıştığı yol kesimlerini gösterir.', uz: 'Qoidabuzarliklarni foto va video qayd etish kameralari ishlaydigan yoʻl uchastkalarini bildiradi.' },
    purpose: { ru: 'Информирование водителей о работе систем автоматической фиксации нарушений ПДД.', en: 'Informing drivers that automatic traffic-violation recording systems are in operation.', zh: '告知驾驶员自动交通违章抓拍系统正在运行。', kk: 'Жүргізушілерді ЖҚЕ бұзушылықтарын автоматты тіркеу жүйелерінің жұмысы туралы хабардар ету.', be: 'Інфармаванне кіроўцаў пра працу сістэм аўтаматычнай фіксацыі парушэнняў ПДР.', tr: 'Sürücüleri otomatik trafik ihlali kayıt sistemlerinin çalıştığı konusunda bilgilendirme.', uz: 'Haydovchilarni YHQ buzilishini avtomatik qayd etish tizimlari ishlayotgani haqida xabardor qilish.' },
    specifications: { size: sz(600, 600), material: GALV_POLY, reflectivity: CLASS2, mounting: M_STD_POLE },
    applications: [
      { ru: 'Зоны контроля скорости', en: 'Speed-control zones', zh: '测速区', kk: 'Жылдамдықты бақылау аймақтары', be: 'Зоны кантролю хуткасці', tr: 'Hız kontrol bölgeleri', uz: 'Tezlik nazorati zonalari' },
      { ru: 'Участки с камерами фиксации проезда на красный свет', en: 'Sections with red-light enforcement cameras', zh: '设有闯红灯抓拍摄像头的路段', kk: 'Қызыл шамнан өтуді тіркейтін камералары бар учаскелер', be: 'Участкі з камерамі фіксацыі праезду на чырвонае святло', tr: 'Kırmızı ışık ihlal kameralı kesimler', uz: 'Qizil chiroqdan oʻtishni qayd etuvchi kameralar boʻlgan uchastkalar' },
      { ru: 'Контроль выделенных полос', en: 'Dedicated-lane enforcement', zh: '专用车道监控', kk: 'Арнайы жолақтарды бақылау', be: 'Кантроль вылучаных палос', tr: 'Tahsisli şerit denetimi', uz: 'Ajratilgan yoʻlaklarni nazorat qilish' },
      { ru: 'Фиксация нарушений разметки', en: 'Recording of road-marking violations', zh: '抓拍违反标线行为', kk: 'Таңбалау бұзушылықтарын тіркеу', be: 'Фіксацыя парушэнняў разметкі', tr: 'Yol çizgisi ihlallerinin kaydı', uz: 'Yoʻl chiziqlari buzilishini qayd etish' },
    ],
    compliance: [GOST_52290, MVD_ORDER],
  },
  {
    id: '5.33',
    image:'/5.33.svg',
    code: '5.33',
    name: { ru: 'Пешеходная зона', en: 'Pedestrian zone', zh: '步行区', kk: 'Жаяу жүргіншілер аймағы', be: 'Пешаходная зона', tr: 'Yaya bölgesi', uz: 'Piyodalar hududi' },
    description: { ru: 'Обозначает территорию, на которой разрешено движение только пешеходов.', en: 'Marks an area where only pedestrian traffic is allowed.', zh: '标示仅允许行人通行的区域。', kk: 'Тек жаяу жүргіншілердің қозғалысына рұқсат етілген аумақты білдіреді.', be: 'Абазначае тэрыторыю, на якой дазволены рух толькі пешаходаў.', tr: 'Yalnızca yaya geçişine izin verilen alanı gösterir.', uz: 'Faqat piyodalar harakatiga ruxsat etilgan hududni bildiradi.' },
    purpose: { ru: 'Контроль въезда транспорта в пешеходные зоны с использованием систем видеонаблюдения.', en: 'Controlling vehicle entry into pedestrian zones using video surveillance systems.', zh: '借助视频监控系统管控车辆进入步行区。', kk: 'Бейнебақылау жүйелерін пайдаланып көліктің жаяу жүргіншілер аймағына кіруін бақылау.', be: 'Кантроль уезду транспарту ў пешаходныя зоны з выкарыстаннем сістэм відэаназірання.', tr: 'Video gözetim sistemleriyle yaya bölgelerine araç girişinin denetimi.', uz: 'Videokuzatuv tizimlari yordamida transportning piyodalar hududiga kirishini nazorat qilish.' },
    specifications: { size: sz(600, 600), material: GALV, reflectivity: CLASS2, mounting: M_SIDE },
    applications: [
      { ru: 'Центры городов', en: 'City centers', zh: '城市中心', kk: 'Қала орталықтары', be: 'Цэнтры гарадоў', tr: 'Şehir merkezleri', uz: 'Shahar markazlari' },
      { ru: 'Парковые зоны', en: 'Park areas', zh: '公园区域', kk: 'Саябақ аймақтары', be: 'Паркавыя зоны', tr: 'Park alanları', uz: 'Bogʻ hududlari' },
      { ru: 'Торговые улицы', en: 'Shopping streets', zh: '商业街', kk: 'Сауда көшелері', be: 'Гандлёвыя вуліцы', tr: 'Alışveriş caddeleri', uz: 'Savdo koʻchalari' },
      { ru: 'Системы контроля доступа', en: 'Access-control systems', zh: '门禁系统', kk: 'Қол жеткізуді бақылау жүйелері', be: 'Сістэмы кантролю доступу', tr: 'Erişim kontrol sistemleri', uz: 'Kirishni nazorat qilish tizimlari' },
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
    name: { ru: 'Глухие пешеходы', en: 'Deaf pedestrians', zh: '聋人行人', kk: 'Саңырау жаяу жүргіншілер', be: 'Глухія пешаходы', tr: 'İşitme engelli yayalar', uz: 'Kar piyodalar' },
    description: { ru: 'Табличка указывает, что пешеходным переходом пользуются глухие пешеходы.', en: 'The plate indicates that the pedestrian crossing is used by deaf pedestrians.', zh: '该辅助标志表示该人行横道有聋人行人使用。', kk: 'Тақташа жаяу жүргіншілер өткелін саңырау жаяу жүргіншілер пайдаланатынын көрсетеді.', be: 'Таблічка ўказвае, што пешаходным пераходам карыстаюцца глухія пешаходы.', tr: 'Levha, yaya geçidini işitme engelli yayaların kullandığını belirtir.', uz: 'Lavha piyodalar oʻtish joyidan kar piyodalar foydalanishini bildiradi.' },
    purpose: { ru: 'Повышение безопасности на пешеходных переходах с использованием систем контроля.', en: 'Improving safety at pedestrian crossings using enforcement systems.', zh: '借助监控系统提升人行横道安全。', kk: 'Бақылау жүйелерін пайдаланып жаяу жүргіншілер өткелдеріндегі қауіпсіздікті арттыру.', be: 'Павышэнне бяспекі на пешаходных пераходах з выкарыстаннем сістэм кантролю.', tr: 'Denetim sistemleriyle yaya geçitlerinde güvenliğin artırılması.', uz: 'Nazorat tizimlari yordamida piyodalar oʻtish joylarida xavfsizlikni oshirish.' },
    specifications: { size: sz(350, 500), material: GALV, reflectivity: CLASS1, mounting: M_UNDER_MAIN },
    applications: [
      { ru: 'Пешеходные переходы у специализированных учреждений', en: 'Crossings near specialized institutions', zh: '专门机构附近的人行横道', kk: 'Мамандандырылған мекемелер маңындағы жаяу жүргіншілер өткелдері', be: 'Пешаходныя пераходы каля спецыялізаваных устаноў', tr: 'Özel kurumların yakınındaki yaya geçitleri', uz: 'Maxsus muassasalar yonidagi piyodalar oʻtish joylari' },
      { ru: 'Социальные объекты', en: 'Social facilities', zh: '社会公共设施', kk: 'Әлеуметтік нысандар', be: 'Сацыяльныя аб’екты', tr: 'Sosyal tesisler', uz: 'Ijtimoiy obyektlar' },
      { ru: 'Системы контроля пешеходных переходов', en: 'Pedestrian-crossing enforcement systems', zh: '人行横道监控系统', kk: 'Жаяу жүргіншілер өткелдерін бақылау жүйелері', be: 'Сістэмы кантролю пешаходных пераходаў', tr: 'Yaya geçidi denetim sistemleri', uz: 'Piyodalar oʻtish joylari nazorati tizimlari' },
    ],
    compliance: [GOST_52290],
  },
  {
    id: '7.21',
    image:'/7.21.png',
    code: '7.21',
    name: { ru: 'Вид опасности', en: 'Type of hazard', zh: '危险类型', kk: 'Қауіп түрі', be: 'Від небяспекі', tr: 'Tehlike türü', uz: 'Xavf turi' },
    description: { ru: 'Табличка уточняет характер опасности на участке дороги.', en: 'The plate specifies the nature of the hazard on a road section.', zh: '该辅助标志说明路段上危险的性质。', kk: 'Тақташа жол учаскесіндегі қауіптің сипатын нақтылайды.', be: 'Таблічка ўдакладняе характар небяспекі на ўчастку дарогі.', tr: 'Levha, yol kesimindeki tehlikenin niteliğini belirtir.', uz: 'Lavha yoʻl uchastkasidagi xavf xususiyatini aniqlashtiradi.' },
    purpose: { ru: 'Дополнительная информация для систем мониторинга дорожной обстановки.', en: 'Additional information for road-condition monitoring systems.', zh: '为道路状况监测系统提供补充信息。', kk: 'Жол жағдайын мониторингтеу жүйелеріне қосымша ақпарат.', be: 'Дадатковая інфармацыя для сістэм маніторынгу дарожнай абстаноўкі.', tr: 'Yol durumu izleme sistemleri için ek bilgi.', uz: 'Yoʻl holatini monitoring qilish tizimlari uchun qoʻshimcha maʼlumot.' },
    specifications: { size: sz(350, 500), material: GALV, reflectivity: CLASS1, mounting: M_UNDER_WARN },
    applications: [
      { ru: 'Опасные участки дорог', en: 'Hazardous road sections', zh: '危险路段', kk: 'Қауіпті жол учаскелері', be: 'Небяспечныя ўчасткі дарог', tr: 'Tehlikeli yol kesimleri', uz: 'Xavfli yoʻl uchastkalari' },
      { ru: 'Зоны повышенного внимания', en: 'Zones requiring extra attention', zh: '需特别注意区域', kk: 'Аса назар аударатын аймақтар', be: 'Зоны павышанай увагі', tr: 'Dikkat gerektiren bölgeler', uz: 'Diqqatni kuchaytirish zonalari' },
      { ru: 'Интеграция с системами мониторинга', en: 'Integration with monitoring systems', zh: '与监测系统集成', kk: 'Мониторинг жүйелерімен интеграция', be: 'Інтэграцыя з сістэмамі маніторынгу', tr: 'İzleme sistemleriyle entegrasyon', uz: 'Monitoring tizimlari bilan integratsiya' },
    ],
    compliance: [GOST_52290],
  },
]
