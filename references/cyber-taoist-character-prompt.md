# Cyber-Taoist 人物提示词参考

> 用于 js-designer-skill 生成 GPT-Image-2 图像时的 Cyber-Taoist 人物和海报风格复用。
> 基于 v3 龙虾版 → v10 最终版的迭代经验提炼。

---

## 一、人物视觉 DNA（不可省略的核心特征）

### 1. 发型

```
Long messy organic flowing black hair, soft and voluminous, with visible individual strands,
slightly windblown, extending well above the head, not spiky - soft natural curls and waves.
```

| 维度 | 描述 | 避坑 |
|------|------|------|
| **长度** | 长，蓬松，超过头顶很多 | ❌ 不要太短（buzz cut 失败） |
| **质感** | 柔软有机曲线，可见单根发丝 | ❌ 不要硬刺/短棒（刺猬头失败） |
| **形态** | 自然凌乱，有飘动感 | ❌ 不要整齐排列 |
| **风格** | Cyberpunk 长发 + 道家飘逸感 | 这是 Cyber-Taoist 的核心视觉 |

### 2. 面具

```
Large yellow face plate mask covering entire face with bold black JS letters centered,
metal rivets around edges, circuit line patterns across the mask surface.
```

| 维度 | 描述 |
|------|------|
| **形状** | 大块黄色面板，覆盖整个面部 |
| **文字** | 黑色 JS 字母居中，粗体 |
| **细节** | 金属铆钉 + 电路纹理 + 做旧磨损 |
| **颜色** | 黄色 #FCD228 |

### 3. 耳麦系统

```
Small circular mechanical earpiece on side of head with thin cables running down to chest.
```

- 双侧对称（不是单侧）
- 圆形耳麦，机械质感
- 细电缆从耳麦延伸到胸口

### 4. 夹克/装甲

```
High-collar black mechanical jacket with visible zipper, multiple mechanical panels,
worn distressed texture, yellow JS shoulder patches on both shoulders.
```

| 维度 | 描述 |
|------|------|
| **领口** | 高领黑色 |
| **材质** | 机械装甲感，多个面板 |
| **细节** | 可见拉链 + 做旧磨损纹理 |
| **肩部** | 双侧黄色 JS 肩章（对称） |
| **覆盖** | 电缆和电路纹理遍布全身 |

### 5. 胸口能量核心

```
Multi-ring glowing yellow reactor core in center of chest, concentric rings like Iron Man's
arc reactor, with circuit lines spreading from core across the entire body.
```

- 多层机械环（不是简单发光圆）
- 黄色辉光，像钢铁侠反应堆
- 电路线从核心辐射到全身

---

## 二、海报构图模板

### 模板 A：正面居中（KL36 v10 使用）

```
Poster 1024x1536. Black background with yellow 50px grid.
CENTER: Cyberpunk character front-facing. [人物DNA]
ABOVE: Yellow text [标题].
BELOW: Three cards [卡片1] [卡片2] [卡片3].
Subtitle: [金句].
Yellow footer: [底部文字].
Gritty industrial concept art, hard shadows, high detail.
```

### 模板 B：左右分栏（v3 龙虾版使用）

```
Poster 1024x1536. Black background with yellow 50px grid.
LEFT: Cyberpunk character half-profile facing right. [人物DNA]
RIGHT: Big yellow Chinese text [标题].
Three badges bottom: [标签1] [标签2] [标签3].
Yellow footer bar: [底部文字].
Neo-Brutalism style, hard borders, hard shadows.
```

---

## 三、文字渲染技巧（关键！）

### 成功要素

1. **色块容器先行** — 每个文字都绑定容器（黄底/白底/暗区），AI 不需要猜对比度
2. **字少字大** — 每张图只放 5-6 个中文短语，每个 4-10 个字
3. **用数字代替文字** — `31` 比 `三十一` 渲染准确率高 10 倍
4. **中英双语卡片** — 英文 100% 准确，中文靠容器
5. **硬边框限定区域** — 给 AI 清晰的文字边界

### 失败模式

| 失败原因 | 表现 | 解决 |
|---------|------|------|
| 文字没有容器 | 模糊/缺笔画 | 必须放在色块内 |
| 提示词太长（>200 tokens） | API 超时 | 精简到 <150 tokens |
| 中文放在深色背景上 | 完全不可读 | 改用黄底/白底 |
| 字体描述不够明确 | AI 随机渲染 | 指定 bold/crisp/clear |

---

## 四、完整提示词参考

### 正面版（v10 最终版）

```
Poster 1024x1536. Black background with yellow 50px grid. CENTER: Cyberpunk character
front-facing. Long messy organic flowing black hair, soft and voluminous, with visible
individual strands, slightly windblown, extending well above the head, not spiky - soft
natural curls and waves. Large yellow face plate mask with bold black JS letters and
metal rivets and circuit lines. Small circular mechanical earpiece with thin cables.
High-collar black mechanical jacket with zipper worn distressed texture. Yellow JS
shoulder patches. Cables from earpiece to chest. Multi-ring glowing yellow chest reactor
core. Circuit lines from core across body. ABOVE: Yellow text 怎么教龙虾用 GPT-Image-2.
BELOW: Three cards 理解问题 审美决策 视觉翻译. Subtitle: 不是画图的人，是做决策的人.
Yellow footer: 设计师培养指南. Gritty industrial concept art, hard shadows, high detail.
```

### 半侧面版（v3 原版）

```
Vertical poster 1024x1536. Black background with yellow grid. LEFT: Cyberpunk character
half-profile facing right. Spiky black hair. Yellow mechanical face mask with black JS
letters and metal rivets and circuit lines. Black armor jacket with zippers and yellow
JS shoulder patch. Glowing yellow multi-ring chest reactor core like Iron Man. Circuit
lines from core across body. RIGHT: Big yellow Chinese text 让龙虾自己画图. Numbers
31天 5项目 top right. Three badges bottom: 文生图 参考编辑 7维评审. Yellow footer bar:
零成本 开源 本地. Neo-Brutalism style, hard borders, hard shadows.
```

---

## 五、环境配置备忘

| 配置项 | 值 |
|--------|----|
| **API 端点** | `https://aihubmix.com/v1`（代理） |
| **模型** | `gpt-image-2` |
| **默认尺寸** | `1024x1536`（最接近小红书 3:4） |
| **输出目录** | `D:\github\my\js-designer-skill\work_dir\generated_images_gpt_image_2` |
| **Chrome 路径** | `C:\Program Files\Google\Chrome\Application\chrome.exe` |

### 调用命令

```bash
cd D:\github\my\js-designer-skill
node cli/index.js generate --prompt "..." --n 1 --size 1024x1536 --quality high --session-name "<名称>"
```

---

## 六、迭代历史速查

| 版本 | 发型 | 视角 | 评价 |
|------|------|------|------|
| v3 | 长软发（正确） | 半侧面 | ✅ 原版，所有后续版本的参考 |
| v5 | 短硬刺 | 半侧面 | ❌ 太硬，像机器人 |
| v6 | 中长发 | 正面 | ⚠️ 不错但不是 v3 DNA |
| v7 | 粗脏辫 | 正面 | ❌ 太长太粗 |
| v8 | buzz cut | 正面 | ❌ 太短 |
| v9 | 中等刺猬头 | 正面 | ❌ 还是太硬 |
| v10 | 长软发（正确） | 正面 | ✅ 最终版，完美还原 v3 DNA |

**发型关键词进化**：
- ❌ `spiky upright` → 太硬
- ❌ `short dense spikes` → 太短
- ❌ `crew cut styled up` → 太整齐
- ✅ `long messy organic flowing, soft and voluminous, not spiky, soft natural curls and waves` → 正确

---

*创建于 2026-04-23 · 基于 js-designer-skill v1.0*
