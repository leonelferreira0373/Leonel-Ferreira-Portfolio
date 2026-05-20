$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$dest = "C:\Users\leone\portfolio-work\public\gallery"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$mapping = @(
  @{ src = "20250211_111943.jpg";                              out = "me-01-navy.jpg" }
  @{ src = "20250207_113419.jpg";                              out = "me-02-bw.jpg" }
  @{ src = "20250210_100308.jpg";                              out = "me-03-suit.jpg" }
  @{ src = "20250213_104242.jpg";                              out = "me-04-white.jpg" }
  @{ src = "IMG_20250714_133724_636.jpg";                      out = "work-01-badge.jpg" }
  @{ src = "BackgroundEraser_20251103_200020966.jpg";          out = "photo-01-fur.jpg" }
  @{ src = "BackgroundEraser_20251103_205650209.jpg";          out = "photo-02-sunglasses.jpg" }
  @{ src = "unnamed.jpg";                                      out = "me-05-pattern.jpg" }
  @{ src = "IMG_20251211_195705_473.jpg";                      out = "work-02-laptop.jpg" }
)

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)

foreach ($m in $mapping) {
  $srcPath = Join-Path "C:\Users\leone\Downloads" $m.src
  $outPath = Join-Path $dest $m.out
  if (-not (Test-Path $srcPath)) { Write-Host "MISSING $($m.src)"; continue }

  $img = [System.Drawing.Image]::FromFile($srcPath)

  # Apply EXIF orientation
  $orientProp = $img.PropertyItems | Where-Object { $_.Id -eq 0x0112 }
  if ($orientProp) {
    $orient = $orientProp.Value[0]
    switch ($orient) {
      2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
      3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
      4 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
      5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
      6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
      7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
      8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
    }
  }

  # Resize to max 1200px on the long side
  $maxDim = 1200
  $w = $img.Width
  $h = $img.Height
  $scale = [Math]::Min(1.0, $maxDim / [Math]::Max($w, $h))
  $newW = [int]($w * $scale)
  $newH = [int]($h * $scale)

  $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.DrawImage($img, 0, 0, $newW, $newH)

  if (Test-Path $outPath) { Remove-Item $outPath -Force }
  $bmp.Save($outPath, $encoder, $encParams)

  $g.Dispose()
  $bmp.Dispose()
  $img.Dispose()

  $sizeKB = [math]::Round((Get-Item $outPath).Length / 1KB, 1)
  Write-Host ("OK {0,5} KB  {1}" -f $sizeKB, $m.out)
}
