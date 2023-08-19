/** 紫微斗数四化 */
export const MUTAGEN = ['禄', '权', '科', '忌'] as const;

/** 紫微斗数14主星 */
export const MAJOR_STARS = [
  '紫微',
  '天机',
  '太阳',
  '武曲',
  '天同',
  '廉贞',
  '天府',
  '太阴',
  '贪狼',
  '巨门',
  '天相',
  '天梁',
  '七杀',
  '破军',
] as const;

/**
 * 紫微斗数14辅星
 *
 * 其中包含：
 * - 六吉星：左辅、右弼、文昌、文曲、天魁、天钺
 * - 六煞星：火星、铃星、擎羊、陀罗、地空、地劫
 * - 二助星：禄存、天马
 *
 */
export const MINOR_STARTS = [
  '文昌',
  '文曲',
  '天魁',
  '天钺',
  '左辅',
  '右弼',
  '地空',
  '地劫',
  '火星',
  '铃星',
  '擎羊',
  '陀罗',
  '禄存',
  '天马',
] as const;

/** 47杂耀 */
export const ADJECTIVE_STARTS = [
  '红鸾',
  '天喜',
  '天姚',
  '咸池',
  '月解',
  '三台',
  '八座',
  '恩光',
  '天贵',
  '龙池',
  '凤阁',
  '天才',
  '天寿',
  '台辅',
  '封诰',
  '天巫',
  '华盖',
  '天官',
  '天福',
  '天厨',
  '天月',
  '天德',
  '月德',
  '天空',
  '旬空',
  '截路',
  '空亡',
  '孤辰',
  '寡宿',
  '蜚廉',
  '破碎',
  '天刑',
  '阴煞',
  '天哭',
  '天虚',
  '天使',
  '天伤',
] as const;

/** 流耀 */
export const HOROSCOPE_STARS = [
  '运魁',
  '运钺',
  '运昌',
  '运曲',
  '运禄',
  '运羊',
  '运陀',
  '运马',
  '运鸾',
  '运喜',
  '流魁',
  '流钺',
  '流昌',
  '流曲',
  '流禄',
  '流羊',
  '流陀',
  '流马',
  '流鸾',
  '流喜',
  '年解',
] as const;
/**
 * 星耀信息
 * 其中包含：
 * 1. 亮度（bright）, 按照宫位地支排序（从寅开始）
 * 2. 五行（fiveElements）
 * 3. 阴阳（yinYang）
 * 4. 健康提示（healthTip）
 */
export const STARS_INFO = {
  紫微: {
    brightness: ['旺', '旺', '得', '旺', '庙', '庙', '旺', '旺', '得', '旺', '平', '庙'],
    fiveElements: '土',
    yinYang: '阴',
    healthTip: '胰脏、脾脏、大脑中枢',
  },
  天机: {
    brightness: ['得', '旺', '利', '平', '庙', '陷', '得', '旺', '利', '平', '庙', '陷'],
    fiveElements: '木',
    yinYang: '阴',
    healthTip: '肝 胆、神经系统、手指尖神经末梢',
  },
  太阳: {
    brightness: ['庙', '庙', '旺', '旺', '庙', '得', '得', '平', '陷', '陷', '陷', '不'],
    fiveElements: '',
    yinYang: '',
    healthTip: '心、脑、眼睛、心血管系统',
  },
  武曲: {
    brightness: ['得', '利', '庙', '平', '旺', '庙', '得', '利', '庙', '平', '旺', '庙'],
    fiveElements: '金',
    yinYang: '阴',
    healthTip: '呼吸系统、鼻、气管、支气管及肺部',
  },
  天同: {
    brightness: ['利', '平', '平', '庙', '陷', '不', '旺', '平', '平', '庙', '旺', '不'],
    fiveElements: '水',
    yinYang: '阳',
    healthTip: '膀胱、肾水系统、耳朵听力',
  },
  廉贞: {
    brightness: ['庙', '平', '利', '陷', '平', '利', '庙', '平', '利', '陷', '平', '利'],
    fiveElements: '火',
    yinYang: '阴',
    healthTip: '血液血管，免疫力、生殖系统（子宫、卵巢、输卵管、输精管）、青春痘',
  },
  天府: {
    brightness: ['庙', '得', '庙', '得', '旺', '庙', '得', '旺', '庙', '得', '庙', '庙'],
    fiveElements: '土',
    yinYang: '阳',
    healthTip: '胃脏、十二指肠、小肠',
  },
  太阴: {
    brightness: ['旺', '陷', '陷', '陷', '陷', '不', '利', '旺', '旺', '庙', '庙', '庙'],
    fiveElements: '水',
    yinYang: '阴',
    healthTip: '肾脏、肾水系统、眼睛视力',
  },
  贪狼: {
    brightness: ['平', '利', '庙', '陷', '旺', '庙', '平', '利', '庙', '陷', '旺', '庙'],
    fiveElements: '水',
    yinYang: '',
    healthTip: '生殖器官',
  },
  巨门: {
    brightness: ['庙', '庙', '平', '旺', '旺', '不', '庙', '庙', '平', '旺', '旺', '不'],
    fiveElements: '土',
    yinYang: '阴',
    healthTip: '食道、喉管、口、通道管状部位',
  },
  天相: {
    brightness: ['庙', '陷', '得', '得', '旺', '得', '庙', '陷', '得', '得', '庙', '庙'],
    fiveElements: '水',
    yinYang: '',
    healthTip: '面部、脸',
  },
  天梁: {
    brightness: ['庙', '庙', '旺', '陷', '庙', '庙', '庙', '得', '庙', '陷', '庙', '旺'],
    fiveElements: '土',
    yinYang: '',
    healthTip: '肌肉、肋骨',
  },
  七杀: {
    brightness: ['庙', '旺', '庙', '平', '旺', '庙', '庙', '旺', '庙', '平', '旺', '庙'],
    fiveElements: '',
    yinYang: '',
    healthTip: '骨头、脊椎骨、直肠大肠',
  },
  破军: {
    brightness: ['得', '陷', '旺', '平', '庙', '旺', '得', '陷', '旺', '平', '庙', '旺'],
    fiveElements: '水',
    yinYang: '',
    healthTip: '生殖器官、肾脏、脑神经、皮肤',
  },
  文昌: {
    brightness: ['陷', '利', '得', '庙', '陷', '利', '得', '庙', '陷', '利', '得', '庙'],
  },
  文曲: {
    brightness: ['平', '旺', '得', '庙', '陷', '旺', '得', '庙', '陷', '旺', '得', '庙'],
  },
  天钺: {
    brightness: ['', '', '', '', '', '', '', '', '', '', '', ''],
  },
  天魁: {
    brightness: ['', '', '', '', '', '', '', '', '', '', '', ''],
  },
  左辅: {
    brightness: ['', '', '', '', '', '', '', '', '', '', '', ''],
  },
  右弼: {
    brightness: ['', '', '', '', '', '', '', '', '', '', '', ''],
  },
  地空: {
    brightness: ['', '', '', '', '', '', '', '', '', '', '', ''],
  },
  地劫: {
    brightness: ['', '', '', '', '', '', '', '', '', '', '', ''],
  },
  火星: {
    brightness: ['庙', '利', '陷', '得', '庙', '利', '陷', '得', '庙', '利', '陷', '得'],
  },
  铃星: {
    brightness: ['庙', '利', '陷', '得', '庙', '利', '陷', '得', '庙', '利', '陷', '得'],
  },
  擎羊: {
    brightness: ['', '陷', '庙', '', '陷', '庙', '', '陷', '庙', '', '陷', '庙'],
  },
  陀罗: {
    brightness: ['陷', '', '庙', '陷', '', '庙', '陷', '', '庙', '陷', '', '庙'],
  },
  禄存: {
    brightness: ['', '', '', '', '', '', '', '', '', '', '', ''],
  },
  天马: {
    brightness: ['', '', '', '', '', '', '', '', '', '', '', ''],
  },
} as const;
