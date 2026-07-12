# Cyber-Taoist Real

> 完整的视觉风格系统。基于 js-designer-skill + GPT Image 2 的海报生成体系。
> 涵盖人物 DNA、海报构图、排版规则、色彩系统、可参数空间。
> 基于 v3 → 女性版的全部迭代经验提炼。

---

## 零、系统定位

**Cyber-Taoist Real** 是一套用于 AI 图像生成的视觉风格系统，核心能力：

1. **人物生成** — 可调性别/发型/面具/服装/视角的 Cyber-Taoist 角色
2. **海报构图** — 多种布局模板，适配朋友圈/小红书/公众号
3. **文字渲染** — 中文/英文精准渲染技巧
4. **品牌一致性** — 固定色彩、边框、阴影、纹理规范

**技术栈**：js-designer-skill（GPT Image 2 API）+ 精简提示词（<150 tokens）

---

## 一、色彩系统

| 色名 | HEX | 用途 |
|------|-----|------|
| **JS Yellow** | `#FCD228` | 品牌主色 — 面具、能量核心、强调文字、标题 |
| **Black** | `#000000` | 背景色、边框、阴影、服装主体 |
| **White** | `#FFFFFF` | 文字容器、卡片背景、对比文字 |
| **Dark Gray** | `#111111` | 网格纹理、次要文字背景 |
| **Yellow Glow** | 发光效果 | 胸口能量核心、电路辉光 |

### 色彩使用规则

- 文字必须在**色块容器**内：黄底黑字 / 白底黑字 / 黑底黄字
- 禁止低对比组合（如黄底白字、白底浅灰字）
- 背景统一黑色，网格用暗灰低透明度

---

## 二、Neo-Brutalism 视觉规范

| 元素 | 规格 |
|------|------|
| **边框** | 3-4px 硬边框（solid black），无圆角 |
| **阴影** | 4-6px 硬阴影（hard offset shadow），无模糊 |
| **网格** | 50px 技术网格，暗色低透明度 |
| **角标** | 白色十字标记点（crop marks） |
| **纹理** | 做旧/磨损/粗糙感，增加工业质感 |
| **禁用** | 渐变、圆角、柔和阴影、pastel 色 |

---

## 三、Cyber-Taoist 人物 DNA

### 3.1 不可变核心（所有版本共享）

| 元素 | 描述 |
|------|------|
| **JS 面具** | 黄色圆形面板 + 黑色粗体 JS 字母 + 金属铆钉 + 电路纹理 |
| **能量核心** | 胸口多环发光反应堆，像钢铁侠，黄色辉光 |
| **电路纹理** | 从胸口核心辐射到全身的线条 |
| **JS 肩章** | 双侧对称，黄色 JS 标志 |
| **耳麦系统** | 圆形机械耳麦 + 细电缆延伸到胸口 |
| **色彩** | 黑黄白三色 |

### 3.2 可调参数空间

| 参数 | 选项 | 示例 |
|------|------|------|
| **性别** | 男 / 女 / 中性 | 男性宽肩壮实 / 女性修身曲线 |
| **发型** | 短刺猬头 / 长软发 / 高马尾 / 脏辫 / 短发 | v3 刺猬头 / v7 长发 / 女性版高马尾 |
| **面具** | 全覆盖 / 半面具 / 单侧 | v3 全覆盖 / 女性版半面具露眼 |
| **服装** | 机械夹克 / 紧身战斗服 / 长袍 / 战术背心 | v3 夹克 / 女性版紧身服 |
| **视角** | 半侧面 / 正面 | v3 半侧 / v6/v7/v10 正面 |
| **身形** | 7.5-8 头身 | 修长挺拔，非 Q 版 |

### 3.3 发型参数详解

| 发型 | 提示词关键词 | 适用场景 |
|------|------------|---------|
| **短刺猬头** | `short dense spiky hair standing upright, close to scalp` | v3 原版，干练硬朗 |
| **长软发** | `long messy organic flowing black hair, soft and voluminous, visible individual strands, slightly windblown, not spiky` | v10，飘逸有流动感 |
| **高马尾** | `long flowing black hair in high ponytail with loose strands framing the face` | 女性版，利落凌厉 |
| **脏辫** | `thick braided dreadlocks, textured, extending past shoulders` | 粗犷原始感 |
| **短发** | `short cropped black hair, neat crew cut` | 极简专业 |

### 3.4 面具参数详解

| 面具 | 提示词关键词 | 效果 |
|------|------------|------|
| **全覆盖面板** | `large yellow face plate mask covering entire face` | 神秘感最强，v3/v5/v7 |
| **半面具** | `half mask, revealing eyes, yellow face plate with JS letters` | 保留辨识度，增加人性化 |
| **单侧面具** | `one-sided yellow mask covering half face` | 不对称张力 |

---

## 四、海报构图模板

### 模板 A：正面居中

```
Poster 1024x1536. Black background with yellow 50px grid.
CENTER: [人物描述]
ABOVE: Yellow text [标题].
BELOW: Three cards [卡片1] [卡片2] [卡片3].
Subtitle: [金句].
Yellow footer: [底部文字].
Gritty industrial concept art, hard shadows, high detail.
```

**适用**：小红书封面、朋友圈推广、公众号封面
**已验证版本**：v6、v7、v10、女性版

### 模板 B：左右分栏

```
Poster 1024x1536. Black background with yellow grid.
LEFT: [人物描述] half-profile facing right.
RIGHT: Big yellow Chinese text [标题].
Numbers [数据1] [数据2] top right.
Three badges bottom: [标签1] [标签2] [标签3].
Yellow footer bar: [底部文字].
Neo-Brutalism style, hard borders, hard shadows.
```

**适用**：数据驱动型封面、功能展示
**已验证版本**：v3

### 模板 C：上下分层

```
Poster 1024x1536. Black background with yellow grid.
TOP: [标题] [数据标签]
CENTER: [人物描述]
BOTTOM: [功能卡片] [CTA文字]
Industrial concept art quality.
```

**适用**：品牌宣传、人物海报
**已验证版本**：v5

---

## 五、文字渲染规则

### 成功要素

1. **色块容器先行** — 每个文字短语都必须放在色块内（黄底/白底/暗区）
2. **字少字大** — 每张图只放 5-6 个中文短语，每个 4-12 个字
3. **数字优先** — `31天` 比 `三十一` 准确率高 10 倍
4. **中英双语** — 英文 100% 准确，可作辅助信息
5. **硬边框** — 给 AI 清晰的文字边界

### 文字布局模板

```
[大标题] 怎么教龙虾用 GPT-Image-2  → 黄底黑字 / 黑底黄字
[副标题] 设计师培养指南              → 白字暗区 / 黄字
[卡片] 理解问题 / 审美决策 / 视觉翻译 → 黄底黑字 + 白底黑字交替
[金句] 不是画图的人，是做决策的人    → 白字黑底
[底部] 零成本 · 开源 · 本地         → 黄底黑字横条
```

### 失败模式

| 失败原因 | 表现 | 解决 |
|---------|------|------|
| 无容器 | 模糊/缺笔画 | 必须放色块内 |
| 提示词太长 | API 超时 | 精简 <150 tokens |
| 低对比 | 不可读 | 用黄底黑字/白底黑字 |
| 深色背景文字 | 完全消失 | 改用亮色背景 |

---

## 六、完整提示词参考

### 男性正面版（v7 风格）

```
Poster 1024x1536. Black background with yellow 50px grid. CENTER: Cyberpunk
character front-facing. Long messy organic flowing black hair, soft and
voluminous, visible individual strands, slightly windblown, not spiky. Large
yellow face plate mask with bold black JS letters and metal rivets and circuit
lines. Small circular mechanical earpiece with thin cables. High-collar black
mechanical jacket with zipper worn distressed texture. Yellow JS shoulder
patches. Multi-ring glowing yellow chest reactor core. Circuit lines from core
across body. ABOVE: Yellow text 怎么教龙虾用 GPT-Image-2. BELOW: Three cards
理解问题 审美决策 视觉翻译. Subtitle: 不是画图的人，是做决策的人. Yellow
footer: 设计师培养指南. Gritty industrial concept art, hard shadows, high detail.
```

### 男性半侧面版（v3 风格）

```
Poster 1024x1536. Black background with yellow grid. LEFT: Cyberpunk character
half-profile facing right. Short dense spiky hair standing upright. Yellow
mechanical face mask with black JS letters and rivets and circuit lines. Black
armor jacket with zippers and yellow JS shoulder patch. Glowing yellow multi-ring
chest reactor core. Circuit lines across body. RIGHT: Big yellow text 让龙虾
自己画图. Numbers 31天 5项目 top right. Three badges: 文生图 参考编辑 7维评审.
Yellow footer bar: 零成本 开源 本地. Neo-Brutalism, hard borders, hard shadows.
```

### 女性版

```
Poster 1024x1536. Black background with yellow 50px grid. CENTER: Female
cyberpunk character front-facing. Long flowing black hair in high ponytail
with loose strands framing the face. Large yellow face plate half mask with
bold black JS letters and metal rivets. Small circular mechanical earpiece
with thin cables. Form-fitting black mechanical suit with visible zipper
panels worn distressed texture. Yellow JS shoulder patches. Multi-ring
glowing yellow chest reactor core. Circuit lines across body. ABOVE: Yellow
text 怎么教龙虾用 GPT-Image-2. BELOW: Three cards 理解问题 审美决策 视觉翻译.
Subtitle: 不是画图的人，是做决策的人. Yellow footer: 设计师培养指南. Gritty
industrial concept art, hard shadows, high detail.
```

---

## 七、环境配置

| 配置项 | 值 |
|--------|----|
| **API 端点** | `https://aihubmix.com/v1`（代理） |
| **模型** | `gpt-image-2` |
| **默认尺寸** | `1024x1536`（最接近小红书 3:4） |
| **质量** | `high` |
| **输出目录** | `D:\github\my\js-designer-skill\work_dir\generated_images_gpt_image_2` |
| **Chrome 路径** | `C:\Program Files\Google\Chrome\Application\chrome.exe` |

### 调用命令

```bash
cd D:\github\my\js-designer-skill
node cli/index.js generate --prompt "..." --n 1 --size 1024x1536 --quality high --session-name "<名称>"
```

---

## 八、迭代历史速查

| 版本 | 性别 | 发型 | 面具 | 视角 | 内容 | 评价 |
|------|------|------|------|------|------|------|
| **v3** | 男 | 短刺猬头 | 全覆盖 | 半侧面 | 功能推广 | ✅ 原版，所有参考 |
| **v5** | 男 | 尖刺短发 | 机械 | 半侧面 | KL36 | ✅ 内容匹配 |
| **v6** | 男 | 短发 | JS 面板 | 正面 | KL36+装饰 | ✅ 专业感强 |
| **v7** | 男 | 长发 | JS 面板 | 正面 | KL36 完整 | ✅ 气场强 |
| **v8** | 男 | buzz cut | JS 面板 | 正面 | KL36 | ❌ 发型太短 |
| **v9** | 男 | 中刺猬头 | JS 面板 | 正面 | KL36 | ❌ 发型太硬 |
| **v10** | 男 | 长软发 | JS 面板 | 正面 | KL36 | ✅ 发型正确 |
| **女性版** | 女 | 高马尾 | 半面具 | 正面 | KL36 | ✅ 性别可调验证 |

**发型关键词进化树**：
```
短刺猬头 (v3) ──┬── 尖刺短发 (v5)
                ├── 中刺猬头 (v9) ❌ 太硬
                └── 长软发 (v10) ✅
长发 (v7) ──────── 脏辫 ❌ 太粗
短发 (v6/v8) ──── buzz cut ❌ 太短
高马尾 (女性版) ── ✅ 女性专用
```

---

## 九、可调参数快速组合

用变量替换法生成任意组合：

```
[性别] + [发型] + [面具] + [服装] + [视角] + [内容模板]
```

### 快速组合示例

| 组合 | 结果 |
|------|------|
| 女 + 短刺猬头 + 全覆盖 + 紧身服 + 正面 | 女版战士 |
| 女 + 长软发 + 半面具 + 长袍 + 半侧面 | 女版道家 |
| 男 + 高马尾 + 全覆盖 + 夹克 + 正面 | 男性高马尾版 |
| 中性 + 短发 + 单侧面具 + 战术背心 + 半侧面 | 战术版 |

### 提示词替换规则

| 原词 | 替换为 |
|------|--------|
| `Cyberpunk character` | `Female cyberpunk character` / `Male cyberpunk character` |
| `short dense spiky hair` | `long flowing black hair in high ponytail` / `long messy organic flowing hair` |
| `face plate mask covering entire face` | `half mask, revealing eyes` |
| `black mechanical jacket` | `form-fitting black mechanical suit` / `black tactical vest` |
| `half-profile facing right` | `front-facing` |

---

*创建于 2026-04-23 · Cyber-Taoist Real v1.0 · 基于 js-designer-skill + GPT Image 2*
