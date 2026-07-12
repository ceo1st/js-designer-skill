'use strict';

const { referencePaths } = require('./referencePaths');

const designSystemPath = referencePaths.aipoch.designSystem;

const slides = [
  {
    name: 'Slide 4 - 历史复盘',
    session: 'board-v2-04',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle 60x60 grid pattern. Large bold black Chinese characters "历史复盘" at top. Below, a horizontal timeline with three white Neo-Brutalist cards (each has 2px black border and 6px hard shadow): first card says "岗位化 2006-2012", second card says "工业化 2013-2017", third card says "中台化 2018-2022". Each card has a simple black line icon. Warm yellow #ECD44C accent circles as timeline markers. Clean, academic, minimalist. 16:9 aspect ratio, professional presentation design.',
  },
  {
    name: 'Slide 5 - 康威定律',
    session: 'board-v2-05',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle 60x60 grid. Large bold black Chinese characters "康威定律的现实" at top. Below, a white Neo-Brutalist card (2px black border, 6px hard shadow) showing an organizational chart diagram on the left mirroring fragmented product architecture blocks on the right, connected by dashed black lines representing Conway law. Warm yellow #ECD44C accent highlights. Minimalist black line icons. Clean academic professional. 16:9 aspect ratio.',
  },
  {
    name: 'Slide 8 - AI产品经理对比传统PM',
    session: 'board-v2-08',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters at top. Below, two white Neo-Brutalist cards side by side (each 2px black border, 6px hard shadow): left card shows a slow waterfall diagram labeled 传统PM, right card shows a fast circular loop diagram labeled AI产品经理 with warm yellow #ECD44C highlights. Clean comparison chart style, professional presentation. 16:9 aspect ratio.',
  },
  {
    name: 'Slide 9 - 微型生产线',
    session: 'board-v2-09',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters "微型生产线" at top. Below, a white Neo-Brutalist card (2px black border, 6px hard shadow) showing a diagram of small autonomous teams - each person working independently, connected directly to end users with warm yellow #ECD44C accent lines. Clean professional minimalist style, presentation design. 16:9 aspect ratio.',
  },
  {
    name: 'Slide 10 - 我们招什么样的人',
    session: 'board-v2-10',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters "我们招什么样的人" at top. Below, four white Neo-Brutalist cards in a 2x2 grid (each 2px black border, 6px hard shadow) with warm yellow #ECD44C numbered circles (1,2,3,4). Each card has a simple black line icon and Chinese text. Clean academic style, professional presentation. 16:9 aspect ratio.',
  },
];

module.exports = {
  slides,
  designSystemPath,
};
