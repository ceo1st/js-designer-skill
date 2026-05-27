/**
 * Generate 5 board presentation slides via LLMCORE gpt-image-2
 */
require('dotenv').config();
const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = (process.env.OPENAI_API_BASE || 'https://api.openai.com/v1').replace(/\/$/, '');
const API_KEY = process.env.OPENAI_API_KEY;
const OUTPUT_BASE = path.resolve(__dirname, '../work_dir/generated_images_gpt_image_2');

if (!API_KEY) {
  console.error('请设置环境变量 OPENAI_API_KEY');
  process.exit(1);
}

function requestImage(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'gpt-image-2',
      prompt,
      n: 1,
      size: '1536x1024',
      quality: 'high'
    });

    const url = new URL(BASE_URL + '/images/generations');
    const req = https.request({
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Length': Buffer.byteLength(body)
      },
      timeout: 300000
    }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}: ${raw.substring(0, 300)}`));
          return;
        }
        try {
          const data = JSON.parse(raw);
          resolve(data);
        } catch (e) {
          reject(new Error(`JSON parse error: ${e.message}`));
        }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Request timeout')); });
    req.write(body);
    req.end();
  });
}

function saveB64Image(b64, outputPath) {
  const cleaned = b64.replace(/^data:image\/[a-z+]+;base64,/, '');
  const buffer = Buffer.from(cleaned, 'base64');
  
  // Detect format by magic bytes
  let ext = 'png';
  if (buffer.length >= 2 && buffer[0] === 0xff && buffer[1] === 0xd8) ext = 'jpg';
  else if (buffer.length >= 4 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) ext = 'png';
  else if (buffer.toString('utf8', 0, 5) === '<?xml') ext = 'svg';
  
  const finalPath = path.dirname(outputPath) + '/' + path.basename(outputPath, path.extname(outputPath)) + '.' + ext;
  fs.writeFileSync(finalPath, buffer);
  console.log(`Saved: ${finalPath} (${buffer.length} bytes)`);
  return finalPath;
}

async function generateSlide(prompt, sessionName, slideName) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Generating: ${slideName}`);
  console.log(`${'='.repeat(60)}`);
  
  const outputDir = path.join(OUTPUT_BASE, sessionName);
  fs.mkdirSync(outputDir, { recursive: true });
  
  // Retry with backoff
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`Attempt ${attempt}/3...`);
      const response = await requestImage(prompt);
      
      if (!response.data || !response.data[0]) {
        throw new Error('No image data in response: ' + JSON.stringify(response).substring(0, 200));
      }
      
      const item = response.data[0];
      
      if (item.b64_json) {
        const outPath = path.join(outputDir, '01.png');
        const savedPath = saveB64Image(item.b64_json, outPath);
        console.log(`SUCCESS: ${savedPath}`);
        return savedPath;
      } else if (item.url) {
        const ext = path.extname(new URL(item.url).pathname) || '.png';
        const outPath = path.join(outputDir, '01' + ext);
        await downloadImage(item.url, outPath);
        console.log(`SUCCESS: ${outPath}`);
        return outPath;
      } else {
        throw new Error('No b64_json or url in response: ' + Object.keys(item).join(', '));
      }
    } catch (e) {
      lastError = e;
      console.error(`Failed: ${e.message}`);
      if (attempt < 3) {
        const delay = attempt * 3000;
        console.log(`Retrying in ${delay / 1000}s...`);
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }
  
  throw new Error(`All attempts failed: ${lastError.message}`);
}

function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Download failed: ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        fs.writeFileSync(outputPath, buf);
        resolve(outputPath);
      });
    }).on('error', reject).setTimeout(120000, () => reject(new Error('Download timeout')));
  });
}

const slides = [
  {
    name: 'Slide 4 - 历史复盘',
    session: 'board-v2-04',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle 60x60 grid pattern. Large bold black Chinese characters "历史复盘" at top. Below, a horizontal timeline with three white Neo-Brutalist cards (each has 2px black border and 6px hard shadow): first card says "岗位化 2006-2012", second card says "工业化 2013-2017", third card says "中台化 2018-2022". Each card has a simple black line icon. Warm yellow #ECD44C accent circles as timeline markers. Clean, academic, minimalist. 16:9 aspect ratio, professional presentation design.'
  },
  {
    name: 'Slide 5 - 康威定律',
    session: 'board-v2-05',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle 60x60 grid. Large bold black Chinese characters "康威定律的现实" at top. Below, a white Neo-Brutalist card (2px black border, 6px hard shadow) showing an organizational chart diagram on the left mirroring fragmented product architecture blocks on the right, connected by dashed black lines representing Conway law. Warm yellow #ECD44C accent highlights. Minimalist black line icons. Clean academic professional. 16:9 aspect ratio.'
  },
  {
    name: 'Slide 8 - AI产品经理对比传统PM',
    session: 'board-v2-08',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters at top. Below, two white Neo-Brutalist cards side by side (each 2px black border, 6px hard shadow): left card shows a slow waterfall diagram labeled 传统PM, right card shows a fast circular loop diagram labeled AI产品经理 with warm yellow #ECD44C highlights. Clean comparison chart style, professional presentation. 16:9 aspect ratio.'
  },
  {
    name: 'Slide 9 - 微型生产线',
    session: 'board-v2-09',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters "微型生产线" at top. Below, a white Neo-Brutalist card (2px black border, 6px hard shadow) showing a diagram of small autonomous teams - each person working independently, connected directly to end users with warm yellow #ECD44C accent lines. Clean professional minimalist style, presentation design. 16:9 aspect ratio.'
  },
  {
    name: 'Slide 10 - 我们招什么样的人',
    session: 'board-v2-10',
    prompt: 'A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters "我们招什么样的人" at top. Below, four white Neo-Brutalist cards in a 2x2 grid (each 2px black border, 6px hard shadow) with warm yellow #ECD44C numbered circles (1,2,3,4). Each card has a simple black line icon and Chinese text. Clean academic style, professional presentation. 16:9 aspect ratio.'
  }
];

async function main() {
  const results = [];
  for (const slide of slides) {
    try {
      const savedPath = await generateSlide(slide.prompt, slide.session, slide.name);
      results.push({ slide: slide.name, path: savedPath, status: 'success' });
      // Wait between slides
      if (slides.indexOf(slide) < slides.length - 1) {
        console.log('\nWaiting 5 seconds before next slide...');
        await new Promise(r => setTimeout(r, 5000));
      }
    } catch (err) {
      results.push({ slide: slide.name, error: err.message, status: 'failed' });
      console.error(`FAILED: ${slide.name}: ${err.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  for (const r of results) {
    if (r.status === 'success') {
      console.log(`✓ ${r.slide} -> ${r.path}`);
    } else {
      console.log(`✗ ${r.slide}: ${r.error}`);
    }
  }
}

main().then(() => process.exit(0)).catch(e => { console.error('Fatal:', e); process.exit(1); });
