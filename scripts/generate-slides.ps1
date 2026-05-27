# Generate board presentation slides using LLMCORE (dall-e-2)
# 运行前设置: $env:OPENAI_API_KEY, 可选 $env:OPENAI_API_BASE
$repoRoot = Split-Path $PSScriptRoot -Parent

$slides = @(
    @{
        name = "Slide 4 - 历史复盘"
        session = "board-v2-04"
        prompt = "A corporate presentation slide in Neo-Brutalist style. Warm gray #E8E8E8 background with subtle 60x60 grid pattern. Large bold black Chinese text at top. Below, a horizontal timeline with three white Neo-Brutalist cards (each has 2px black border and 6px hard shadow): card 1 says 岗位化 2006-2012, card 2 says 工业化 2013-2017, card 3 says 中台化 2018-2022. Each card has a simple black line icon. Warm yellow #ECD44C accent circles as timeline markers. Clean, academic, minimalist. 16:9 aspect ratio."
    },
    @{
        name = "Slide 5 - 康威定律"
        session = "board-v2-05"
        prompt = "A corporate presentation slide in Neo-Brutalist style. Warm gray #E8E8E8 background with subtle 60x60 grid. Large bold black Chinese text at top. Below, a white Neo-Brutalist card (2px black border, 6px hard shadow) showing org chart on left mirroring fragmented product architecture on right, connected by dashed lines representing Conway law. Warm yellow #ECD44C accent highlights. Minimalist black icons. Clean academic professional. 16:9 aspect ratio."
    },
    @{
        name = "Slide 8 - AI产品经理对比传统PM"
        session = "board-v2-08"
        prompt = "A corporate presentation slide in Neo-Brutalist style. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese text at top. Below, two white Neo-Brutalist cards side by side (each 2px black border, 6px hard shadow): left card shows slow waterfall process, right card shows fast direct loop with warm yellow #ECD44C highlights. Clean comparison chart style. 16:9 aspect ratio."
    },
    @{
        name = "Slide 9 - 微型生产线"
        session = "board-v2-09"
        prompt = "A corporate presentation slide in Neo-Brutalist style. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese text at top. Below, a white Neo-Brutalist card (2px black border, 6px hard shadow) showing small autonomous teams - each person working independently connected directly to end users. Warm yellow #ECD44C accents. Clean professional minimalist style. 16:9 aspect ratio."
    },
    @{
        name = "Slide 10 - 我们招什么样的人"
        session = "board-v2-10"
        prompt = "A corporate presentation slide in Neo-Brutalist style. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese text at top. Below, four white Neo-Brutalist cards (each 2px black border, 6px hard shadow) with warm yellow #ECD44C numbered circles. Each card has a simple black line icon. Clean academic style. 16:9 aspect ratio."
    }
)

foreach ($slide in $slides) {
    Write-Host "=== $($slide.name) ==="
    $outputDir = Join-Path $repoRoot "work_dir\generated_images_gpt_image_2\$($slide.session)"
    if (-not (Test-Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }
    Write-Host "Output: $outputDir"
    Write-Host "Prompt: $($slide.prompt)"
    Write-Host ""
}
