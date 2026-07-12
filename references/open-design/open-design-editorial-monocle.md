# Open Design Editorial Monocle 风格参考

> 来源：open-design 项目（nexu-io/open-design）的 Editorial Monocle 视觉方向
> 记录日期：2026-05-14
> 成功生成案例：KL44 养虾日记配图系列（6 张）

---

## 风格概述

open-design 的 Editorial Monocle 视觉方向是一种**高端科技杂志**审美，灵感来自《Monocle》杂志。温暖、克制、专业，与暗黑赛博朋克风格形成鲜明对比。

## 核心视觉参数

### 色彩系统

| 用途 | 颜色 | Hex | 说明 |
|------|------|-----|------|
| **背景主色** | 暖米色渐变 | `#FBF7EF` → `#EFE7D7` | 从上到下的微妙渐变 |
| **主文字色** | 深棕黑 | `#1F1B16` | 标题、正文 |
| **强调色** | Terracotta 陶土色 | `#C2532D` | 装饰线、图标边框、accent 元素 |
| **次要文字** | 暖灰 | `#6B6258` | 副标题、说明文字 |
| **装饰线** | Terracotta + 虚线 | `#C2532D` stroke-width: 3, dasharray: 16 12 | 边框装饰 |

### 排版规范

| 元素 | 规范 |
|------|------|
| **大标题字体** | 无衬线体（ui-sans-serif, system-ui），字重 700 |
| **副标题字体** | 无衬线体，字重 600 |
| **说明文字** | 等宽字体（ui-monospace, SFMono-Regular），用于路径/技术信息 |
| **字间距** | 大标题 letter-spacing: 6，装饰文字 letter-spacing: 4 |
| **文字大小** | 大标题 56px+，副标题 34px，说明 24-26px |

### 构图原则

1. **大量留白**：negative space 是核心，元素只占画面 30-40%
2. **居中对齐**：标题和主视觉居中，图标水平排列
3. **几何简洁**：用圆形、矩形、线条等基础几何形状
4. **线条艺术**：描边（stroke）为主，填充（fill）为辅
5. **虚线边框**：圆角矩形 + 虚线描边是标志性装饰元素
6. **圆角**：rx="18" 或 rx="28"，柔和但不软弱

### 插画风格

- **扁平几何**：用简单的几何形状组合表现物体
- **线条优先**：stroke-width: 6，round cap/join
- **单色为主**：主要用深棕黑线条 + Terracotta 点缀
- **无阴影**：不用 drop shadow，靠线条和形状表达层次
- **图标化**：物体简化为可识别的图标，不是写实插画

---

## gpt-image-2 提示词模板

### 基础框架

```
A clean editorial magazine illustration in open-design Editorial Monocle style. 
Warm cream background gradient (#FBF7EF to #EFE7D7). 
Large bold Chinese text '【标题文字】' in dark brown (#1F1B16) at the top. 
Below the text, 【主体插画描述】. 
Terracotta (#C2532D) accent color for decorative elements. 
Clean line art, lots of negative space. 
16:9 aspect ratio. No English text.
```

### 已验证成功的案例

#### 案例 1：头图（龙虾讲 PPT）

```
A clean editorial magazine cover illustration in open-design style. 
Dark charcoal background (#1a1a2e). 
Large bold Chinese text '让龙虾做PPT' in white sans-serif font at the top. 
Below the text, a minimalist geometric illustration of a cartoon lobster in a business suit, rendered as simple flat shapes. 
Clean layout with lots of negative space. 
Technical grid pattern faintly visible in background. 
The overall aesthetic matches a high-end tech magazine like Monocle or Wired. 
16:9 aspect ratio. No English text anywhere.
```

#### 案例 2：先想场景

```
A clean editorial magazine illustration in open-design Editorial Monocle style. 
Warm cream background gradient (#FBF7EF to #EFE7D7). 
Large bold Chinese text '先想场景' in dark brown (#1F1B16) sans-serif font at the top. 
Below the text, 5 simple geometric icon cards in a horizontal row, each with a terracotta (#C2532D) accent border: 
card 1 has a small screen icon (meeting), card 2 has a spotlight/stage icon (presentation), 
card 3 has a document-to-slides icon, card 4 has a data table icon, card 5 has a rectangular frame icon (social media cover). 
Clean line art style, lots of negative space. 
16:9 aspect ratio. No English text.
```

#### 案例 3：5 个选手

```
A clean editorial magazine illustration in open-design Editorial Monocle style. 
Warm cream background gradient (#FBF7EF to #EFE7D7). 
Large bold Chinese text '5个选手' in dark brown (#1F1B16) at the top. 
Below the text, a vertical ranked list of 5 tool names in clean typography. 
Each entry has a terracotta (#C2532D) star icon and simple geometric accent. 
Clean line art, lots of negative space. 
16:9 aspect ratio. No English text.
```

#### 案例 4：能导 PPTX 的 / 和不能的

```
A clean editorial magazine illustration in open-design Editorial Monocle style. 
Warm cream background gradient (#FBF7EF to #EFE7D7). 
Large bold Chinese text '能导PPTX的' in dark brown (#1F1B16) on the left half, 
and '和不能的' in light gray on the right half, separated by a bold vertical terracotta (#C2532D) line in the center. 
Below the left text, a simple PowerPoint icon with editable elements. 
Below the right text, a browser window icon showing a web presentation. 
Clean line art, lots of negative space. 
16:9 aspect ratio. No English text.
```

#### 案例 5：不是选一个，是搭配

```
A clean editorial magazine illustration in open-design Editorial Monocle style. 
Warm cream background gradient (#FBF7EF to #EFE7D7). 
Large bold Chinese text '不是选一个' in dark brown (#1F1B16) at the top, 
with a smaller subtitle '是搭配' below it in terracotta (#C2532D) color. 
Below the text, 3 interconnected geometric shapes in a horizontal flow. 
Arrows connecting them with terracotta accent lines. 
Clean line art, lots of negative space. 
16:9 aspect ratio. No English text.
```

#### 案例 6：场景决定工具

```
A clean editorial magazine illustration in open-design Editorial Monocle style. 
Warm cream background gradient (#FBF7EF to #EFE7D7). 
Large bold Chinese text '场景决定工具' in dark brown (#1F1B16) at the top. 
Below the text, a minimalist compass/decision tree illustration showing 3 paths. 
Each path has a terracotta (#C2532D) accent line. 
Clean line art, lots of negative space. 
16:9 aspect ratio. No English text.
```

---

## 关键教训

### ✅ 有效做法

1. **明确指定背景色**：不要只说"dark background"，要给具体 hex 值
2. **强调中文排版**：明确要求"Large bold Chinese text"，否则 gpt-image-2 倾向生成英文
3. **用 "No English text" 结尾**：防止 AI 自动添加英文装饰文字
4. **指定 Terracotta 色值**：`#C2532D` 是 open-design 的标志性颜色
5. **"lots of negative space"**：确保画面不会太拥挤

### ❌ 常见失败

1. **英文排版**：不明确说中文，AI 会生成英文标题
2. **文字太小**：不说"Large bold"，文字会变成装饰性小字
3. **风格混乱**：混用"暗黑赛博朋克"和"暖米色杂志"，导致不统一
4. **元素太多**：不说"lots of negative space"，画面会塞满元素

---

## 与 Cyber-Taoist 风格的区别

| 维度 | Cyber-Taoist | Open-Design Editorial |
|------|-------------|----------------------|
| **背景** | 暗黑 `#000000` | 暖米色 `#FBF7EF` → `#EFE7D7` |
| **主色** | JS黄 `#FCD228` | Terracotta `#C2532D` |
| **边框** | 3px solid black 硬边框 | 虚线描边 rx="18" 圆角 |
| **阴影** | 4-6px hard shadow | 无阴影 |
| **字体** | Space Grotesk + JetBrains Mono | ui-sans-serif + ui-monospace |
| **气质** | 赛博朋克、硬核、冲击 | 杂志、温暖、克制 |
| **适用** | 养虾日记头图/品牌视觉 | 文章内配图/信息图 |

---

## 参考链接

- open-design 项目：https://github.com/nexu-io/open-design
- open-design 官网：https://open-design.ai/
- 5 个视觉方向定义：`apps/daemon/src/prompts/directions.ts`
- Editorial Monocle 是 5 个方向之一（其他：Modern Minimal / Warm Soft / Tech Utility / Brutalist Experimental）
