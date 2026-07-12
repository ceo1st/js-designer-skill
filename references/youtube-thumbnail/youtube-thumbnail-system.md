# YouTube Thumbnail System

> 真人出镜 AI 科技博主视频封面生成体系。
> 涵盖核心公式、三层背景、6 大主题视觉、平台适配、Prompt 工程。
> 基于 js-designer-skill（gpt-image-2 edit 模式）+ JS 本人参考照片。

---

## 零、系统定位

**YouTube Thumbnail System** 是一套用于 AI 科技博主视频封面的视觉工程系统，核心能力：

1. **真人出镜** — 基于 JS 本人照片的保真人脸封面
2. **主题自适应** — 6 大主题类型对应不同视觉语言（背景/光线/文字/道具/情绪）
3. **平台适配** — 横版（YouTube/B站）、竖版（TikTok/抖音）、方版（Instagram）
4. **三层背景** — 底层情绪色 + 中层主题元素 + 顶层粒子光效

**技术栈**：js-designer-skill（GPT Image 2 edit 模式）+ 真人参考照片

---

## 一、核心公式

```
高点击率封面 = 保真人脸 + 夸张肢体 + 三层背景 + 悬念标题
```

### 1.1 保真人脸

- 必须使用参考照片 edit 模式，不可纯生成
- Prompt 必须强调 `"do not alter, do not beautify, preserve original face"`
- 脸部占据画面 1/3 以上面积

### 1.2 夸张肢体

- 手部放大 2-3 倍，制造故意不协调
- 手指指向标题区域，引导视觉动线
- Prompt 关键词：`"RIGHT HAND dramatically enlarged (2-3x normal size), pointing toward the right side"`

### 1.3 三层背景

```
底层：基础色调 → 情绪定调
中层：主题视觉元素 → 内容暗示
顶层：粒子/光效 → 氛围渲染
```

**中层元素库**（差异化关键）：

| 主题 | 中层元素 |
|------|----------|
| AI 取代 | 被取代的图标（文件、办公桌、计算器） |
| 效率工具 | 代码片段、API 图标、自动化流程图 |
| 赚钱增长 | 增长曲线、数据仪表盘、转化漏斗 |
| 哲学思考 | 水墨笔触、古籍纹理、留白 |
| 踩坑警告 | 红色叉号、崩溃界面、错误代码 |
| 教程教学 | 步骤序号、高亮按钮、界面截图 |

### 1.4 悬念标题

- 2-4 个大字，不超过一瞥能读完的量
- 问句或冲击性陈述
- 字体、颜色、描边匹配主题情绪

---

## 二、6 大主题视觉体系

| 主题 | 背景色 | 光线 | 文字 | 道具 | 情绪 |
|------|--------|------|------|------|------|
| **AI 取代/威胁** | 深蓝紫渐变 | 冷蓝侧光+红底光 | 白字红发光粗体 | 小机器人 | 紧张/警惕 |
| **效率/工具** | 纯黑+网格 | 暖白顶光+金晕 | 黄字黑边等宽 | 齿轮/闪电 | 高效/掌控 |
| **赚钱/增长** | 黑金渐变 | 金色侧光 | 金色立体字 | 钱/箭头 | 兴奋/机会 |
| **哲学/思考** | 深灰水墨 | 柔和侧光+纸感 | 白色细宋体 | 太极/水面 | 冷静/深度 |
| **踩坑/警告** | 暗红渐变 | 红底光+警示 | 白字黑边倾斜 | 警告三角 | 焦虑/急迫 |
| **教程/教学** | 亮蓝白渐变 | 均匀柔光 | 黑字白底圆角 | 书本/灯泡 | 友好/信任 |

---

## 三、平台适配

| 比例 | 尺寸 | 构图逻辑 | 适配平台 |
|------|------|----------|----------|
| **横版** | 1536×1024 | 左右分屏：左脸+手，右文字 | YouTube、B站 |
| **竖版** | 1024×1536 | 上下分层：上脸，中标题，下道具 | TikTok、抖音、小红书、视频号 |
| **方版** | 1024×1024 | 中心聚焦：脸居中，周围环绕 | Instagram、朋友圈 |

---

## 四、完整提示词模板

### 模板 A：AI 取代/威胁类（横版）

```
YouTube thumbnail for an AI technology channel. Use the person from reference photo, keep face EXACTLY as is - do not alter, do not beautify. Person on left side with EXAGGERATED shocked expression, mouth wide open. RIGHT HAND dramatically enlarged (2-3x normal size), pointing toward the right side with index finger. On the right side near the hand, place a small floating miniature glowing AI robot model (baseball size). Large bold white text 'AI取代一切?' on upper right with red glow outline. Background: dark blue to purple gradient with floating digital particles and glowing neural network lines. Cinematic rim lighting, cold blue side light with red bottom light. High contrast, bold composition, professional YouTuber style, photorealistic.
```

### 模板 B：效率/工具类（横版）

```
YouTube thumbnail for a productivity tool video. Use the person from reference photo, keep face EXACTLY as is - preserve all facial features, do not alter or beautify. Person on left side with confident, in-control expression, slight smile. RIGHT HAND dramatically enlarged (2-3x normal size), holding a glowing lightning bolt icon. On the right side, add a small floating golden gear icon. Large bold yellow text '效率翻倍!' with black outline on upper right, tech monospace font style. Background: pure black with subtle 50px technical grid, semi-transparent code snippets, API brackets, and automation flowchart lines floating. Warm white top lighting, golden rim light. Cinematic lighting, high contrast, clean modern tech aesthetic.
```

### 模板 C：AI 取代/威胁类（竖版）

```
TikTok vertical video thumbnail for an AI technology channel. Use the person from reference photo, keep face EXACTLY as is. Person on UPPER portion with EXAGGERATED shocked expression, mouth open wide. RIGHT HAND dramatically enlarged (2-3x), pointing toward the center with index finger. In the MIDDLE area, add large bold white text 'AI取代一切?' with red glow outline. Below the text, add a small floating miniature glowing AI robot model. Background: dark blue to purple gradient with floating digital particles and glowing lines. Cinematic rim lighting. Vertical portrait composition, person takes upper half, content elements take lower half.
```

### 模板 D：效率/工具类（竖版）

```
TikTok vertical video thumbnail for a productivity tool video. Use the person from reference photo, keep face EXACTLY as is. Person on UPPER portion with confident expression, slight smile. RIGHT HAND dramatically enlarged (2-3x), holding a glowing lightning bolt. In the MIDDLE area, add large bold yellow text '效率翻倍!' with black outline. Below the text, add a small floating golden gear icon. Background: pure black with subtle technical grid, semi-transparent code snippets and automation flowchart lines. Warm white top lighting, golden rim light. Vertical portrait composition.
```

### 模板 E：教程/教学类（竖版 · OpenClaw 官网风格）

**适用场景**：KL36「怎么教龙虾用 GPT-Image-2」等教程类内容

**视觉特征**：
- 背景：深色宇宙 + 红色顶部光晕 + 青色侧面光晕 + 星点粒子 + 半透明悬浮卡片（openclaw.ai 风格）
- 人物：上部，**自然专注表情**（保真，不夸张不平淡）
- 肢体：右手夸张放大 2-3 倍，**手持当前主题核心元素**（根据具体视频内容决定）
- 标题：中部白色大字带微光
- 底部：主题相关道具（根据视频内容定制）

```
TikTok vertical video thumbnail for a tutorial video. Use the person from reference photo, keep face EXACTLY as is - do not alter facial features, do not add any expression, keep the same natural expression from the reference photo. Person on UPPER portion in natural pose. RIGHT HAND dramatically enlarged (2-3x normal size), holding a [THEME-SPECIFIC PROP, e.g., glowing digital paintbrush and painter's palette for AI image gen topic]. The prop is the focal point, representing the tutorial's core subject. In the MIDDLE area, add large bold white text '[TITLE]' with subtle glow. Below the text, add [BOTTOM PROP matching theme]. Background: very dark near-black background with subtle deep red gradient glow at the top and subtle teal gradient glow on the sides. Scattered tiny white star particles throughout. Add a few dark translucent cards floating in the background with subtle borders showing relevant UI elements. Cinematic lighting, dark tech aesthetic. Vertical portrait composition.
```

**KL36 定稿示例**（教 AI 画图）：
- 手上道具：发光数字画笔 + 彩色调色板
- 底部道具：橙色卡通龙虾拿画笔 + GPT-Image-2 界面面板（展示生成的灯塔日落图）
- 悬浮卡片：GPT-Image-2 参数面板、AI Prompt、Style 选择、Generate 按钮

**关键元素检查清单**：
- [ ] 脸部保真（"do not alter facial features, keep the same natural expression"）
- [ ] **表情二分**：要么保真自然，要么夸张，不要卡在中间
- [ ] 手部夸张放大（2-3 倍）
- [ ] **手上道具 = 当前视频主题核心元素**（根据内容决定，不可用通用符号如灯泡/箭头）
- [ ] 底部道具 = 当前视频主题相关元素
- [ ] 悬浮卡片内容 = 与主题相关的 UI/参数/标签
- [ ] OpenClaw 风格背景（深色宇宙 + 红青光晕 + 星点 + 悬浮卡片）

**重要设计原则**：
- 手上道具 ≠ 通用符号（灯泡、箭头、感叹号等）
- 手上道具 = 当前主题核心元素（KL36 用画笔+调色板，其他教程换对应道具）
- 底部道具和悬浮卡片同理，随主题变化
- 肢体姿势可根据主题调整（持物/指向/托举等）
- 表情要么保真自然，要么夸张，不要中间态

---

## 五、Prompt 工程要点

### 5.1 关键指令结构

```
1. 人物保真："Use the person from reference photo, keep face EXACTLY as is"
2. 禁止美化："do not alter, do not beautify, preserve original face details"
3. 表情控制："EXAGGERATED shocked expression, mouth wide open" / "confident expression, slight smile"
4. 肢体夸张："RIGHT HAND dramatically enlarged (2-3x normal size), pointing toward [方向]"
5. 道具定位："small floating miniature [道具] near the hand / below the text"
6. 背景三层：分别描述底层（颜色）+ 中层（主题元素）+ 顶层（粒子/光效）
7. 文字规格："Large bold [颜色] text '[标题]' with [描边] outline on [位置]"
8. 光线规格："[方向] lighting + [颜色] rim light"
```

### 5.2 已知坑位

| 坑位 | 表现 | 解决 |
|------|------|------|
| 脸部失真 | AI 自动美化/改变五官 | 反复强调 "do not alter, do not beautify" |
| 尺寸报错 | `Invalid size` | 必须是 16 的倍数，用 1536×1024 / 1024×1536 / 1024×1024 |
| 文字乱码 | 中文渲染失败 | 用简单短句，避免生僻字 |
| API 限流 | `RateLimitReached` | 间隔 30 秒以上再调用 |
| 背景抢焦点 | 中层元素太显眼 | 强调 "subtle, low opacity, not compete with main subject" |

---

## 六、环境配置

| 配置项 | 值 |
|--------|----|
| **工具** | js-designer-skill（gpt-image-2 edit 模式） |
| **参考图** | `work_dir/ai-youtube-thumb-js/reference.jpg` |
| **尺寸** | `1536x1024`（横）/ `1024x1536`（竖）/ `1024x1024`（方） |
| **质量** | `high` |
| **输出目录** | `D:\github\my\js-designer-skill\work_dir\generated_images_gpt_image_2\ai-youtube-thumb-js-*` |

### 调用命令

```bash
cd D:\github\my\js-designer-skill
node cli/index.js edit --prompt "..." --image "work_dir/ai-youtube-thumb-js/reference.jpg" --n 1 --size 1536x1024 --quality high --session-name "<名称>"
```

---

## 七、迭代历史速查

| 版本 | 策略 | 结果 | JS 反馈 |
|------|------|------|---------|
| 样稿1 | 暗黑科技霓虹无脸 | ✅ | 喜欢有真人的 |
| 样稿2/v2 | 真人出镜+夸张表情 | ✅ | "人脸有点失真" |
| v3 | 保真脸部+思考表情 | ✅ | "还是v2好" |
| Cyber 融合 | Cyber-Taoist 元素+JS Logo 面具 | ✅ | "还是不好"——太花哨 |
| **v4** | v3 保真 + v2 夸张 + 横屏 | ✅ | ✅ **认可，定版** |
| **工具类** | 黑金网格+三层背景 | ✅ | ✅ 满意 |
| **横竖版对比** | 横1536x1024 / 竖1024x1536 | ✅ | ✅ 体系确认 |
| **KL36 v3** | 教程类竖版+OpenClaw官网风格 | ✅ | ✅ 沉淀为模板 E |
| **KL36 v4** | 手持画笔+调色板替换灯泡 | ✅ | ✅ 主题核心元素原则验证 |
| **KL36 v5** | 表情保真自然（非夸张非平淡） | ✅ | ✅ **最终定版，最佳脸部还原** |

---

## 八、模板速查表

| 模板 | 类型 | 平台 | 背景风格 | 关键道具 | 文件名 |
|------|------|------|----------|----------|--------|
| A | AI 取代/威胁 | 横版 | 深蓝紫渐变 | 小机器人 | - |
| B | 效率/工具 | 横版 | 纯黑 + 网格 | 齿轮/闪电 | - |
| C | AI 取代/威胁 | 竖版 | 深蓝紫渐变 | 小机器人 | - |
| D | 效率/工具 | 竖版 | 纯黑 + 网格 | 齿轮/闪电 | - |
| **E** | **教程/教学** | **竖版** | **OpenClaw 官网风** | **画笔+调色板+龙虾** | `ai-youtube-thumb-js-kl36-v5` |

---

*创建于 2026-04-25 · YouTube Thumbnail System v1.0 · 基于 js-designer-skill + GPT Image 2 edit 模式*
