# Generate board presentation slides using dall-e-2 via LLMCORE
# 运行前设置: $env:OPENAI_API_KEY, 可选 $env:OPENAI_API_BASE / OPENAI_API_BASE_BACKUP / OPENAI_API_KEY_BACKUP
$repoRoot = Split-Path $PSScriptRoot -Parent
$apiKey = $env:OPENAI_API_KEY
$baseUrl = if ($env:OPENAI_API_BASE) { $env:OPENAI_API_BASE } else { "https://api.openai.com/v1" }

if (-not $apiKey) {
    Write-Error "请设置环境变量 OPENAI_API_KEY"
    exit 1
}

$slides = @(
    @{
        name = "Slide 4 - 历史复盘"
        session = "board-v2-04"
        prompt = "A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle 60x60 grid pattern. Large bold black Chinese characters '历史复盘' at top. Below, a horizontal timeline with three white Neo-Brutalist cards (each has 2px black border and 6px hard shadow): first card says '岗位化 2006-2012', second card says '工业化 2013-2017', third card says '中台化 2018-2022'. Warm yellow #ECD44C accent circles as timeline markers. Clean, academic, minimalist, professional presentation. 16:9 aspect ratio."
    },
    @{
        name = "Slide 5 - 康威定律"
        session = "board-v2-05"
        prompt = "A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters '康威定律的现实' at top. Below, a white Neo-Brutalist card (2px black border, 6px hard shadow) showing an organizational chart diagram on the left mirroring a fragmented product architecture on the right, connected by dashed black lines representing Conway's Law. Warm yellow #ECD44C accent highlights. Minimalist black line icons. Clean academic professional. 16:9 aspect ratio."
    },
    @{
        name = "Slide 8 - AI产品经理对比传统PM"
        session = "board-v2-08"
        prompt = "A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters at top. Below, two white Neo-Brutalist cards side by side (each 2px black border, 6px hard shadow): left card shows a slow waterfall diagram labeled in Chinese, right card shows a fast circular loop diagram with warm yellow #ECD44C highlights. Clean comparison chart style, professional presentation. 16:9 aspect ratio."
    },
    @{
        name = "Slide 9 - 微型生产线"
        session = "board-v2-09"
        prompt = "A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters at top. Below, a white Neo-Brutalist card (2px black border, 6px hard shadow) showing a diagram of small autonomous teams - each person working independently, connected directly to end users with warm yellow #ECD44C accent lines. Clean professional minimalist style, presentation design. 16:9 aspect ratio."
    },
    @{
        name = "Slide 10 - 我们招什么样的人"
        session = "board-v2-10"
        prompt = "A corporate presentation slide in Neo-Brutalist style for AIPOCH. Warm gray #E8E8E8 background with subtle grid. Large bold black Chinese characters at top. Below, four white Neo-Brutalist cards in a 2x2 grid (each 2px black border, 6px hard shadow) with warm yellow #ECD44C numbered circles (1,2,3,4). Each card has a simple black line icon. Clean academic style, professional presentation. 16:9 aspect ratio."
    }
)

# 可选备用 API（通过环境变量配置）
$localLanUrl = $env:OPENAI_API_BASE_BACKUP
$localLanKey = $env:OPENAI_API_KEY_BACKUP

function Generate-Slide {
    param(
        [string]$ImageUrl,
        [string]$ApiKey,
        [string]$Session,
        [string]$SlideName,
        [string]$Prompt
    )
    
    Write-Host "Generating: $SlideName"
    
    $body = @{
        model = "dall-e-2"
        prompt = $Prompt
        n = 1
        size = "1024x1024"
    } | ConvertTo-Json
    
    Write-Host "  Requesting image generation..."
    
    try {
        $response = Invoke-RestMethod -Uri "$ImageUrl/images/generations" `
            -Headers @{ "Authorization" = "Bearer $ApiKey"; "Content-Type" = "application/json" } `
            -Body $body -Method Post -UseBasicParsing -TimeoutSec 120
        
        $imageUrl = $response.data[0].url
        
        if ($imageUrl) {
            $outputDir = Join-Path $repoRoot "work_dir\generated_images_gpt_image_2\$Session"
            if (-not (Test-Path $outputDir)) {
                New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
            }
            
            $outputPath = Join-Path $outputDir "01.png"
            Write-Host "  Downloading to: $outputPath"
            
            Invoke-WebRequest -Uri $imageUrl -OutFile $outputPath -UseBasicParsing -TimeoutSec 60
            Write-Host "  SUCCESS: $outputPath"
            return $true
        }
        else {
            Write-Host "  FAILED: No URL in response"
            return $false
        }
    }
    catch {
        Write-Host "  ERROR: $_"
        return $false
    }
}

# Try LLMCORE first (has dall-e-2)
$apiUrl = $baseUrl

Write-Host "=== Using LLMCORE API ($apiUrl) ===" -ForegroundColor Cyan

foreach ($slide in $slides) {
    Write-Host ""
    $result = Generate-Slide -ImageUrl $apiUrl -ApiKey $apiKey -Session $slide.session -SlideName $slide.name -Prompt $slide.prompt
    
    if (-not $result -and $localLanUrl -and $localLanKey) {
        Write-Host "  Trying with backup API..." -ForegroundColor Yellow
        $result = Generate-Slide -ImageUrl $localLanUrl -ApiKey $localLanKey -Session $slide.session -SlideName $slide.name -Prompt $slide.prompt
    }
    
    Start-Sleep -Seconds 3
}

Write-Host ""
Write-Host "=== Done ===" -ForegroundColor Green
Get-ChildItem (Join-Path $repoRoot "work_dir\generated_images_gpt_image_2") -Recurse -Filter "*.png"
