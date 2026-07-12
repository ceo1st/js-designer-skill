# AIPOCH 品牌视觉系统 — 真实网站逆向工程

> **来源**: https://www.aipoch.com（2026-05-18 完整 HTML + CSS 逆向）
> **用途**: AIPOCH 品宣 PPT 设计风格基准
> **状态**: ✅ 基于源码，非推测
> **同目录素材**: `aipoch-css1.css`（Tailwind 编译样式）、`aipoch-css2.css`（字体加载）

---

## 一、色彩系统

### 核心色板

| 角色 | 色值 | 说明 |
|------|------|------|
| **背景主色** | `#E8E8E8` | 暖灰色（非深色！） |
| **强调色/高亮** | `#ECD44C` | 暖黄（与 JS 的 `#FCD228` 同源，更柔和） |
| **文字主色** | `#000000` | 纯黑 |
| **文字次级** | `rgba(0,0,0,0.6)` | 说明文字 |
| **文字三级** | `rgba(0,0,0,0.5)` | 标签/编号 |
| **文字四级** | `rgba(0,0,0,0.4)` | 分割线上方文字 |
| **边框** | `rgba(0,0,0,0.1)` | 极淡黑 |
| **白底卡片** | `#FFFFFF` | 卡片背景 |
| **Footer 背景** | `#1A1A1A` | 深灰（仅底部） |
| **NProgress 橙色** | `#EA580C` | 加载动画（辅助色） |

### 渐变过渡带（Section 背景）

```
#F3F4F6 (浅灰) → #CDEEDC (薄荷绿) → #8CC9C4 (青蓝) 
→ #5F94D1 (天空蓝) → #9F8FD8 (薰衣草紫) → #E3E5F0 (淡紫灰)
```

---

## 二、排版系统

### 字体

| 用途 | 字体 | CSS 变量 |
|------|------|---------|
| **正文/标题** | Inter | `font-sans` |
| **代码/等宽** | Roboto Mono | `font-mono` |

### 字号层级

| 层级 | CSS | 约值 |
|------|-----|------|
| **Hero 标题** | `text-7xl` | 72px |
| **Section 标题** | `text-[42px]` | 42px |
| **区块标题** | `text-3xl / text-5xl` | 30-48px |
| **卡片标题** | `text-xl` | 20px |
| **正文** | `text-sm` | 14px |
| **标签/编号** | `text-xs` | 12px |
| **超小标签** | `text-[10px]` | 10px |

### 字重使用

- `font-light`: 关键词高亮、Section 大标题
- `font-normal`: Hero 主标题
- `font-medium`: 卡片标题、导航
- `font-semibold`: 导航链接
- `font-bold`: Logo

### 特色排版

```
"insight" — 等宽斜体 + 黄色高亮背景 + 内边距
导航: 大写 + 宽字间距 + 悬停下划线
```

---

## 三、布局结构

### 网格系统

- **最大宽度**: 1280px (`max-w-7xl`) 居中
- **内边距**: 24px (mobile) → 32px (desktop)
- **Hero 区顶部**: 128px → 160px 留白（极大呼吸感）
- **Section 间距**: 64px → 96px

### 背景纹理

```css
/* Hero 区：60×60 极淡网格线，3% 透明度 */
background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
background-size: 60px 60px;

/* Footer：50×50 白色网格线，3% 透明度（深色底上） */
background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
background-size: 50px 50px;
```

---

## 四、组件样式

### 导航栏

- 固定顶部 + 毛玻璃 (`backdrop-blur-sm`)
- 背景: `#E8E8E8/90`
- 底部 1px 淡色边框
- 链接: 大写 + 宽间距 + 悬停下划线

### 卡片（Neo-Brutalist）

```css
border: 2px solid black;
background: white;
box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
/* 无圆角、硬阴影 */
```

内部结构:
- 顶部: 图标/头像（圆形黑色背景 + 白色图片）
- 标题: `text-xl font-medium`
- 信息栏: 灰色小字 + Info 图标
- 内容区: 2px 黑色分隔线
- 底部: 链接/按钮区域

### Toggle 按钮组

- 选中: `#ECD44C` 黄色背景
- 未选中: 白色背景
- 2px 黑色分隔线

### 编号圆圈

```css
width: 24px; height: 24px;
border-radius: 50%;
background: #ECD44C;
color: black;
```

### 代码块

```css
background: black;
color: white;
font-family: monospace;
padding: 16px;
```

### 链接按钮

- 左侧: 32px 黑色方块 + 白色箭头
- 右侧: 文字 + 悬停时黑色滑入覆盖

---

## 五、图形元素

### 旋转 SVG 装饰

- 同心圆 + 放射线（雷达/日晷风格）
- `spin 30s linear infinite` 匀速旋转
- 描边透明度递减（0.15 → 0.4）
- Hero 区: 256px → md:384px
- 下半区: 256px → md:432px

### Logo

```
32×32 极简图标
外圈: 半透明描边
中心点: 实心圆
```

---

## 六、与 JS 品牌对比

| 维度 | AIPOCH | JS Cyber-Taoist |
|------|--------|-----------------|
| **主背景** | `#E8E8E8` 暖灰 | `#000000` 纯黑 |
| **强调色** | `#ECD44C` 暖黄 | `#FCD228` 亮黄 |
| **边框** | 1px 淡色 + 卡片 2px 黑 | 3px solid black |
| **阴影** | 6px 硬阴影（卡片） | 4-6px 硬阴影 |
| **氛围** | 干净、学术、专业 | 赛博朋克、粗野 |
| **字体** | Inter + Roboto Mono | Space Grotesk + JetBrains Mono |
| **网格** | 60px 极淡线 | 50px 技术网格 |

**共同点**:
- 都用 Neo-Brutalist 元素（硬阴影、直角、黄色）
- 黄色色调接近（ECD44C vs FCD228）
- 都用技术网格背景

**核心差异**:
- AIPOCH 是**浅色底**，JS 是**深色底**
- AIPOCH 温和学术，JS 激进赛博朋克

---

## 七、PPT 品宣设计规范

### 推荐配色（继承 AIPOCH 浅灰基因）

| 元素 | 色值 | 用途 |
|------|------|------|
| 背景 | `#E8E8E8` | 幻灯片底色 |
| 标题文字 | `#000000` | 主标题 |
| 正文文字 | `rgba(0,0,0,0.6)` | 辅助说明 |
| 强调色 | `#ECD44C` | 高亮、编号、关键数据 |
| 卡片背景 | `#FFFFFF` | 白色卡片 |
| 硬阴影 | 6px 黑色 | 卡片投影 |
| Footer/深色页 | `#1A1A1A` | 结尾页 |
| 渐变色块 | `#F3F4F6 → #9F8FD8` | 过渡页 |

### 排版规范

- **字体**: Inter（标题）+ Roboto Mono（代码/数据）
- **标题**: 48-72px，font-light 或 font-medium
- **正文**: 14-16px
- **编号**: 24px 黄色圆圈
- **背景纹理**: 60×60 极淡网格
- **卡片**: 2px 黑边 + 6px 硬阴影

### 为什么选浅色而非深色赛博？

1. **目标受众**: 临床医生，学术场景
2. **品牌一致性**: aipoch.com 本身就是浅灰底
3. **专业感**: 浅色更适合品宣/招募，深色适合技术产品

---

_生成时间: 2026-05-18 | 数据来源: AIPOCH 官网 HTML/CSS 完整逆向_
