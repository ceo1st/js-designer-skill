# Sketchnote Editorial — X Article 手绘信息图风格

> **风格 ID**：`sketchnote-editorial`  
> **主文档**：本文件 `design.md`  
> **来源**：@AnatoliKopadze X Article「Build your first AI agent」（post `2063985608381362576`，445 万+ views）封面与内嵌图  
> **首次验证**：2026-07-18 — Hassabis AGI 长文封面（`sample-hassabis-agi-cover-v1.png`）  
> **推荐生成方式**：`edit --image` 以 `samples/ref-origin-cover-kopadze-agents.jpg` 为风格锚点（优于裸 `generate`）

---

## 零、系统定位

**Sketchnote Editorial** 是一套面向 **X Article 长文** 的编辑型信息图视觉系统：数字马克笔手绘、皱纸底、黑线为主、单一橙色强调。气质 **informal but professional**——像有人在白板/笔记本上把复杂技术概念画清楚，而不是赛博朋克海报或高端杂志矢量插画。

### 适用场景

| 场景 | 推荐模板 |
|------|----------|
| 文章封面（1536×1024） | [模板 A：横向流程封面](#模板-a横向流程封面-x-article-cover) |
| 章节插图 / 步骤说明 | [模板 A](#模板-a横向流程封面-x-article-cover) 或简化 3 框版 |
| 对比 / 光谱 / 双栏 | [模板 B：手绘对比表](#模板-b手绘对比表-inline) |
| 双路径 / 分叉决策 | [模板 C：分叉流程](#模板-c分叉流程) |
| 时间线 / 双时钟 | [模板 D：并排对照](#模板-d并排对照--双时钟) |

### 不适用

- 品牌人物海报、赛博道家视觉 → 用 `cyber-taoist/`
- 暖米色杂志留白风 → 用 `open-design/`
- 高对比 YouTube 缩略图 → 用 `youtube-thumbnail/`

---

## 一、色彩系统

| 用途 | 颜色 | Hex（参考） | 说明 |
|------|------|-------------|------|
| **背景** | 皱纸米白 | `#F2F0EB` – `#F8F6F1` | 必须带 **crumpled paper texture**，非 flat white |
| **主线条 / 主文字** | 墨黑 | `#1A1A1A` – `#000000` | 手绘马克笔线，略有不均匀 |
| **唯一强调色** | 活力橙 | `#F05A28` – `#FF6B2C` | **全图只用这一种 accent**；下划线、编号圈、火花、关键数据 |
| **禁用** | 多色渐变、霓虹、pastel 彩虹 | — | 破坏系列一致性 |
| **禁用** | 大面积实色填充块 | — | 以线稿为主，填充极少 |

### 强调色使用规则

1. 橙色 **不超过画面 10%** 面积  
2. 优先用于：标题下划线、底栏 tagline 下划线、步骤编号圈、icon 旁「火花/能量」短线  
3. 对比表中：**仅最右列或关键列** 用橙色标注（见 `ref-origin-inline-spectrum-table.jpg`）  
4. 不要用橙色画大背景块

---

## 二、线条与质感

| 元素 | 规范 |
|------|------|
| **线宽** | 统一 monoline，约 2–3px 等效；略抖、非完美几何 |
| **圆角框** | 手绘圆角矩形；步骤框左上角 **编号圆圈**（黑线 + 可选 orange 圈边） |
| **箭头** | 简单黑色手绘箭头，单线、无 fancy 箭头head |
| **图标** | 极简线稿 icon（钥匙、服务器、对话泡级别），禁止 3D / 写实 |
| **纸纹** | 高分辨率 crumpled / wrinkled paper texture，全画布 |
| **阴影** | **无** drop shadow |
| **渐变** | **无** 背景渐变（与 open-design 关键区别） |

---

## 三、排版规范

| 元素 | 规范 |
|------|------|
| **字体气质** | Hand-drawn / handwritten sans-serif；清晰可读，非正式书法 |
| **封面标题** | 顶部居中或略偏上；**Bold handwritten**；标题下 **橙色粗下划线** + 两侧 orange 火花短线 |
| **步骤标签** | 每框 1–2 行，**英文短标签**（3–6 词）；禁止整段句子 |
| **底栏 tagline** | 底部居中一句；关键词下 orange  underline（见 origin cover `Claude Code + Telegram + 20 minutes`） |
| **对比表** | 表头行 + 左列标签 + 数据列；表头下 orange underline |
| **语言** | X Article 英文定稿 → **图内英文**；中文长文可共用同一套无字/英文图 |

### 文字风险（P0）

gpt-image-2 常把 **prompt 里的 icon 描述** 误印到图上（如 `crack band-aid`）。  
**规则**：prompt 里 icon 用「Draw a simple band-aid icon」，**标签行只写用户可见 copy**。

---

## 四、构图模板

### 模板 A：横向流程封面（X Article cover）

**比例**：`1536×1024`（landscape）  
**结构**：

```text
┌─────────────────────────────────────────────────────────────┐
│              [TITLE — handwritten bold]                      │
│              ═══════ orange underline ═══════                │
│                                                              │
│  ┌①──┐    →    ┌②──┐    →    ┌③──┐    →    ┌④──┐    →  (💬) │
│  │   │        │   │        │   │        │   │     bubble   │
│  └───┘        └───┘        └───┘        └───┘              │
│  icon+label   icon+label   icon+label   icon+label          │
│                                                              │
│        [bottom tagline — key phrases orange underlined]      │
└─────────────────────────────────────────────────────────────┘
```

**常量**：4–5 个编号框 + 箭头 + 可选末端 speech bubble  
**变量**：标题、每框 label/icon、底栏 tagline

### 模板 B：手绘对比表（inline）

**比例**：`1536×1024` 或 `1024×1024`  
**结构**：标题 + 表格（表头行 + 多数据行）；左列类型名，右列关键值 **orange**  
**样例文件**：`samples/ref-origin-inline-spectrum-table.jpg`（Chat → Agent spectrum）

### 模板 C：分叉流程

**用途**：两条 builder 路径、deep tech vs leverageable architecture  
**结构**：中心问题框 → 下分 Y 形双箭头 → 左右两框 + 短 label

### 模板 D：并排对照 / 双时钟

**用途**：6–12 mo vs 10 yr、两种节奏并行  
**结构**：模板 B 的 2 列简化版，或左右两个「时钟」icon + 标签

---

## 五、样例文件（references 内置）

| 文件 | 角色 | 说明 |
|------|------|------|
| `samples/ref-origin-cover-kopadze-agents.jpg` | **风格母版（首选 edit 参考图）** | Origin：5 步 Agent 教程封面 |
| `samples/ref-origin-inline-spectrum-table.jpg` | 对比表子模板 | Origin：Agent spectrum 表格 |
| `samples/sample-hassabis-agi-cover-v1.png` | 跨题材验证 | Hassabis AGI：Backbone + 3 Gaps |

**外部溯源（x-articles-js inbox，不随本包复制）**：

- `sources/inbox/x-2063985608381362576/raw/media/cover.jpg`
- `sources/inbox/x-2063985608381362576/raw/media/inline-2.jpg`

---

## 六、CLI 工作流（js-designer-skill）

### 6.1 推荐：edit + 风格母版

```bash
node cli/index.js edit \
  --image references/sketchnote-editorial/samples/ref-origin-cover-kopadze-agents.jpg \
  --prompt "<见下方 Prompt 框架>" \
  --size 1536x1024 \
  --quality high \
  --session-name <project>/<asset-id>
```

- **封面 / 流程图**：reference `ref-origin-cover-kopadze-agents.jpg`  
- **对比表 / spectrum**：reference `ref-origin-inline-spectrum-table.jpg`（或与 cover 双 reference，最多 16 张）  
- 系列第 2 张起：可同时 reference **已定稿封面** + origin cover，锁定系列

### 6.2 系列一致性

1. 首张封面定稿 → 存入 `samples/` 或项目 deliverable  
2. 后续 `edit` 参考：origin cover + 已定稿 cover  
3. 批次完成后：`node cli/index.js consistency --help` 检查 palette / line weight / paper texture

### 6.3 x-articles-js 包装命令

```bash
npm run project -- designer:refs --read sketchnote-editorial
npm run project -- designer:run edit \
  --image D:/github/My/js-designer-skill/references/sketchnote-editorial/samples/ref-origin-cover-kopadze-agents.jpg \
  --prompt "..." \
  --size 1536x1024 \
  --session-name hassabis-agi-worldview/cover-v1
```

---

## 七、gpt-image-2 Prompt 框架

### 7.1 Style Lock（每张图必带）

```text
Same exact visual style as the reference: hand-drawn sketchnote on crumpled off-white paper texture, black ink marker lines with slight wobble, single orange accent (#F05A28) for underlines and small spark highlights only. No drop shadows, no gradients, no 3D, no photorealism. Clean approachable tech whiteboard doodle.
```

### 7.2 封面结构块（模板 A）

```text
Horizontal X Article cover infographic. Title at top (handwritten bold): [TITLE]. Main flow left to right: [N] numbered rounded boxes connected by hand-drawn arrows. Box 1: [icon description] — label [VISIBLE LABEL ONLY]. … Final speech bubble: [OUTCOME LINE]. Bottom tagline underlined in orange: [TAGLINE]. No corporate logos, no photorealistic faces.
```

### 7.3 对比表结构块（模板 B）

```text
Same sketchnote style. Title at top: [TITLE]. Hand-drawn comparison table with header row and [N] data rows. Left column: category labels in black. Right column key values in orange. Orange underline beneath column headers. Crumpled paper background.
```

---

## 八、已验证案例

### 案例 1：Origin — Build your first AI agent（母版）

- **文件**：`samples/ref-origin-cover-kopadze-agents.jpg`  
- **标题**：Build your first AI agent  
- **流程**：Claude API Key → Telegram Bot → VPS → Claude Code builds bot → Agent live  
- **底栏**：Claude Code + Telegram + 20 minutes（orange underline）

### 案例 2：Origin — Agent spectrum 表

- **文件**：`samples/ref-origin-inline-spectrum-table.jpg`  
- **标题**：The Spectrum: From Chat to Agent  
- **结构**：Type / What it does / You involved? 三列；最右列 orange

### 案例 3：Hassabis AGI 封面（跨题材验证）

- **文件**：`samples/sample-hassabis-agi-cover-v1.png`  
- **会话**：`hassabis-agi-worldview/cover-v1`（x-articles-js `working/designer-workspace/`）  
- **标题**：Hassabis on AGI  
- **流程**：Backbone (Pretrain + RLHF + CoT) → Gap 1–3 → Agents still stuck here  
- **底栏**：Google DeepMind · Backbone is here · 3 gaps remain  

**已知问题（v1）**：Box 内误印 prompt 元数据（如 `crack band-aid`）。v2 prompt 应分离 icon 指令与 visible label。

### 案例 3 改进版 Prompt（推荐）

```text
Same exact visual style as the reference: hand-drawn sketchnote on crumpled off-white paper, black ink marker lines, single orange accent for underlines and spark highlights. Horizontal X Article cover.

Title at top (handwritten bold): Hassabis on AGI

Main flow left to right, 4 numbered rounded boxes with arrows:
Box 1: simple neural-network doodle. Visible label only: The Backbone — Pretrain · RLHF · CoT
Box 2: simple band-aid on a crack doodle. Visible label only: Gap 1 — Continual Learning
Box 3: small table with books doodle. Visible label only: Gap 2 — Long-term Memory
Box 4: jagged line doodle. Visible label only: Gap 3 — Stable Reasoning

Arrow to speech bubble. Visible text only: Agents still stuck here

Bottom tagline with orange underline: Google DeepMind · Backbone is here · 3 gaps remain

No photorealistic faces, no Google logo, no prompt instructions visible as text.
```

---

## 九、关键教训

### ✅ 有效做法

1. **始终 `edit` + origin cover**，不要裸 `generate`  
2. **Style Lock 段落** 原样粘贴，减少 drift  
3. **Visible label only** 与 icon 描述分行，避免 meta 文字上图  
4. **1536×1024 + high** 用于 X Article 封面  
5. 对比型内容用 **模板 B** + inline 参考图  
6. 系列第二张起 **双 reference**（origin + 已定稿）

### ❌ 常见失败

1. 裸 generate → 风格滑向 generic flat vector 或 stock infographic  
2. prompt 里 `label X — icon Y` 写在一行 → 模型把 Y 印成可见文字  
3. 多 accent 色 → 与 origin 不一致  
4. 深色背景 / 霓虹 → 误用 cyber-taoist  
5. 过多文字 / 长句 → 移动端 X Article 内嵌图不可读  
6. 使用真人肖像或 Google 等商标 → 合规风险

---

## 十、系列锁定变量（consistency checklist）

生成一组插图前锁定：

| 变量 | 锁定值 |
|------|--------|
| 背景 | crumpled off-white paper |
| 线色 | black ink |
| Accent | single orange |
| 线宽 | monoline hand-drawn |
| 框形 | rounded rectangle + numbered circle |
| 箭头 | simple black single-line |
| 字体 | handwritten sans |
| 比例 | cover 1536×1024；inline 1536×1024 或 1024×1024 |

---

## 十一、与其他风格对比

| 维度 | Sketchnote Editorial | Open-Design Monocle | Cyber-Taoist |
|------|---------------------|---------------------|--------------|
| **背景** | 皱纸米白 | 暖米色渐变 `#FBF7EF` | 纯黑 `#000000` |
| **强调色** | 橙 `#F05A28` | Terracotta `#C2532D` | JS 黄 `#FCD228` |
| **线条** | 手绘抖线 | 干净几何 stroke | 硬边 neo-brutalism |
| **气质** | 白板笔记 / 教程 | 高端杂志 | 赛博海报 |
| **生成** | **edit 为主** | generate 为主 | generate / edit |
| **典型用途** | X Article 封面+内嵌 | 中文信息图 | 账号品牌 KV |

---

## 十二、参考链接

- Origin 帖：https://x.com/AnatoliKopadze/status/2063985608381362576  
- Origin Article：https://x.com/i/article/2062147039652155392  
- x-articles-js 工作区：`research/articles/hassabis-agi-worldview/`  
- js-designer-skill 路径常量：`lib/referencePaths.js` → `sketchnoteEditorial.design`
