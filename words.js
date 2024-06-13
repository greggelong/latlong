
const nouns1 = [
  { chinese: '道德', pinyin: 'dào dé', english: 'Morality' },
  { chinese: '真理', pinyin: 'zhēn lǐ', english: 'Truth' },
  { chinese: '智慧', pinyin: 'zhì huì', english: 'Wisdom' },
  { chinese: '哲学', pinyin: 'zhé xué', english: 'Philosophy' },
  { chinese: '宇宙', pinyin: 'yǔ zhòu', english: 'Universe' },
  { chinese: '灵魂', pinyin: 'líng hún', english: 'Soul' },
  { chinese: '和谐', pinyin: 'hé xié', english: 'Harmony' },
  { chinese: '自由', pinyin: 'zì yóu', english: 'Freedom' },
  { chinese: '理性', pinyin: 'lǐ xìng', english: 'Reason' },
  { chinese: '平等', pinyin: 'píng děng', english: 'Equality' },
  { chinese: '山脉', pinyin: 'shān mài', english: 'Mountain Range' },
  { chinese: '河流', pinyin: 'hé liú', english: 'River' },
  { chinese: '湖泊', pinyin: 'hú bó', english: 'Lake' },
  { chinese: '草原', pinyin: 'cǎo yuán', english: 'Grassland' },
  { chinese: '沙漠', pinyin: 'shā mò', english: 'Desert' },
  { chinese: '大洋', pinyin: 'dà yáng', english: 'Ocean' },
  { chinese: '大陆', pinyin: 'dà lù', english: 'Continent' },
  { chinese: '岛屿', pinyin: 'dǎo yǔ', english: 'Islands' },
  { chinese: '港口', pinyin: 'gǎng kǒu', english: 'Port' },
  { chinese: '峡谷', pinyin: 'xiá gǔ', english: 'Canyon' },
  { chinese: '星系', pinyin: 'xīng xì', english: 'Galaxy' },
  { chinese: '行星', pinyin: 'xíng xīng', english: 'Planet' },
  { chinese: '彗星', pinyin: 'huì xīng', english: 'Comet' },
  { chinese: '星云', pinyin: 'xīng yún', english: 'Nebula' },
  { chinese: '黑洞', pinyin: 'hēi dòng', english: 'Black Hole' },
  { chinese: '银河', pinyin: 'yín hé', english: 'Milky Way' },
  { chinese: '恒星', pinyin: 'héng xīng', english: 'Star' },
  { chinese: '卫星', pinyin: 'wèi xīng', english: 'Satellite' },
  { chinese: '宇宙射线', pinyin: 'yǔ zhòu shè xiàn', english: 'Cosmic Rays' },
  { chinese: '星座', pinyin: 'xīng zuò', english: 'Constellation' }
];

const nouns= [
  { chinese: '道德', pinyin: 'dào dé', english: 'Morality' },
  { chinese: '真理', pinyin: 'zhēn lǐ', english: 'Truth' },
  { chinese: '智慧', pinyin: 'zhì huì', english: 'Wisdom' },
  { chinese: '哲学', pinyin: 'zhé xué', english: 'Philosophy' },
  { chinese: '宇宙', pinyin: 'yǔ zhòu', english: 'Universe' },
  { chinese: '灵魂', pinyin: 'líng hún', english: 'Soul' },
  { chinese: '和谐', pinyin: 'hé xié', english: 'Harmony' },
  { chinese: '自由', pinyin: 'zì yóu', english: 'Freedom' },
  { chinese: '理性', pinyin: 'lǐ xìng', english: 'Reason' },
  { chinese: '平等', pinyin: 'píng děng', english: 'Equality' },
  { chinese: '星系', pinyin: 'xīng xì', english: 'Galaxy' },
  { chinese: '行星', pinyin: 'xíng xīng', english: 'Planet' },
  { chinese: '彗星', pinyin: 'huì xīng', english: 'Comet' },
  { chinese: '星云', pinyin: 'xīng yún', english: 'Nebula' },
  { chinese: '黑洞', pinyin: 'hēi dòng', english: 'Black Hole' },
  { chinese: '银河', pinyin: 'yín hé', english: 'Milky Way' },
  { chinese: '恒星', pinyin: 'héng xīng', english: 'Star' },
  { chinese: '卫星', pinyin: 'wèi xīng', english: 'Satellite' },
  { chinese: '宇宙射线', pinyin: 'yǔ zhòu shè xiàn', english: 'Cosmic Rays' },
  { chinese: '星座', pinyin: 'xīng zuò', english: 'Constellation' },
  { chinese: '细胞', pinyin: 'xì bāo', english: 'Cell' },
  { chinese: '基因', pinyin: 'jī yīn', english: 'Gene' },
  { chinese: '核酸', pinyin: 'hé suān', english: 'Nucleic Acid' },
  { chinese: '蛋白质', pinyin: 'dàn bái zhì', english: 'Protein' },
  { chinese: '酶', pinyin: 'méi', english: 'Enzyme' },
  { chinese: '染色体', pinyin: 'rǎn sè tǐ', english: 'Chromosome' },
  { chinese: '细胞膜', pinyin: 'xì bāo mó', english: 'Cell Membrane' },
  { chinese: '细胞核', pinyin: 'xì bāo hé', english: 'Cell Nucleus' },
  { chinese: '细胞器', pinyin: 'xì bāo qì', english: 'Cell Organelle' },
  { chinese: '细胞分裂', pinyin: 'xì bāo fēn liè', english: 'Cell Division' },
  { chinese: '遗传物质', pinyin: 'yí chuán wù zhì', english: 'Genetic Material' },
  { chinese: '生物钟', pinyin: 'shēng wù zhōng', english: 'Biological Clock' },
  { chinese: '免疫系统', pinyin: 'miǎn yì xì tǒng', english: 'Immune System' },
  { chinese: '神经元', pinyin: 'shén jīng yuán', english: 'Neuron' },
  { chinese: '激素', pinyin: 'jī sù', english: 'Hormone' },
];


const places = [
  { chinese: '门', pinyin: 'mén', english: 'Gate' },
  
  { chinese: '桥', pinyin: 'qiáo', english: 'Bridge' },
  
  { chinese: '园', pinyin: 'yuán', english: 'Park' },
  { chinese: '巷', pinyin: 'xiàng', english: 'Alley' },
  { chinese: '市', pinyin: 'shì', english: 'Market' },
 
  { chinese: '楼', pinyin: 'lóu', english: 'Building' },
  { chinese: '广场', pinyin: 'guǎngchǎng', english: 'Square' },
  { chinese: '庙', pinyin: 'miào', english: 'Temple' },
  
  { chinese: '林', pinyin: 'lín', english: 'Forest' },
  { chinese: '城', pinyin: 'chéng', english: 'City' },
  { chinese: '村', pinyin: 'cūn', english: 'Village' },
  
  { chinese: '屋', pinyin: 'wū', english: 'House' }
];

const adj = [
  { chinese: '美丽', pinyin: 'měi lì', english: 'Beautiful' },
  { chinese: '聪明', pinyin: 'cōng míng', english: 'Intelligent' },
  { chinese: '幸福', pinyin: 'xìng fú', english: 'Happy' },
  { chinese: '勇敢', pinyin: 'yǒng gǎn', english: 'Brave' },
  { chinese: '友好', pinyin: 'yǒu hǎo', english: 'Friendly' },
  { chinese: '开心', pinyin: 'kāi xīn', english: 'Joyful' },
  { chinese: '激动', pinyin: 'jī dòng', english: 'Excited' },
  { chinese: '温柔', pinyin: 'wēn róu', english: 'Gentle' },
  { chinese: '自信', pinyin: 'zì xìn', english: 'Confident' },
  { chinese: '有趣', pinyin: 'yǒu qù', english: 'Interesting' },
  { chinese: '善良', pinyin: 'shàn liáng', english: 'Kind' },
   
  { chinese: '宽容', pinyin: 'kuān róng', english: 'Tolerant' },
  { chinese: '快乐', pinyin: 'kuài lè', english: 'Happy' },
  { chinese: '真诚', pinyin: 'zhēn chéng', english: 'Sincere' },
  { chinese: '独立', pinyin: 'dú lì', english: 'Independent' },
  { chinese: '美好', pinyin: 'měi hǎo', english: 'Wonderful' },
  { chinese: '谦虚', pinyin: 'qiān xū', english: 'Humble' },
  { chinese: '坚强', pinyin: 'jiān qiáng', english: 'Strong' },
  { chinese: '积极', pinyin: 'jī jí', english: 'Positive' },
  { chinese: '宽心', pinyin: 'kuān xīn', english: 'Relieved' },
  { chinese: '热情', pinyin: 'rè qíng', english: 'Enthusiastic' },
  { chinese: '深思熟虑', pinyin: 'shēn sī shú lǜ', english: 'Thoughtful' },
  { chinese: '忠诚', pinyin: 'zhōng chéng', english: 'Loyal' },
  { chinese: '灵活', pinyin: 'líng huó', english: 'Flexible' },
  { chinese: '高尚', pinyin: 'gāo shàng', english: 'Noble' },
  { chinese: '沉稳', pinyin: 'chén wěn', english: 'Steady' },
  { chinese: '勤奋', pinyin: 'qín fèn', english: 'Hardworking' },
  { chinese: '谨慎', pinyin: 'jǐn shèn', english: 'Cautious' },
  { chinese: '舒适', pinyin: 'shū shì', english: 'Comfortable' },
  { chinese: '无聊', pinyin: 'wú liáo', english: 'Boring' },
  { chinese: '平庸', pinyin: 'píng yōng', english: 'Mediocre' },
  { chinese: '普通', pinyin: 'pǔ tōng', english: 'Ordinary' },
  { chinese: '乏味', pinyin: 'fá wèi', english: 'Dull' },
  { chinese: '糟糕', pinyin: 'zāo gāo', english: 'Terrible' },
  { chinese: '拙劣', pinyin: 'zhuō liè', english: 'Inferior' },
  { chinese: '可怕', pinyin: 'kě pà', english: 'Awful' },
  { chinese: '沉闷', pinyin: 'chén mèn', english: 'Dreary' },
  
];

// Function to generate unique combinations
function generateCombinations() {
  const combinations = [];

  for (const adjective of adj) {
    for (const noun of nouns) {
      for (const place of places) {
        const combination = `${adjective.english} ${noun.english} ${place.english}`;
        combinations.push(combination);
      }
    }
  }

  return combinations;
}


