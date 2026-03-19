param(
  [int]$Width = 2400,
  [int]$Height = 2800
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$chrome = Get-Command chrome.exe -ErrorAction SilentlyContinue
if (-not $chrome) {
  $chrome = Get-Command chrome -ErrorAction SilentlyContinue
}

if (-not $chrome) {
  throw 'Chrome was not found on this machine. Install Google Chrome or update the export script to use a local browser binary.'
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$profileDir = Join-Path $root '.chrome-headless'
New-Item -ItemType Directory -Force -Path $profileDir | Out-Null

$assets = @(
  @{
    Svg = Join-Path $root 'ftd-logo-transparent.svg'
    Png = Join-Path $root 'exports\ftd-logo-transparent.png'
  },
  @{
    Svg = Join-Path $root 'ftd-logo-dark.svg'
    Png = Join-Path $root 'exports\ftd-logo-dark.png'
  }
)

foreach ($asset in $assets) {
  if (Test-Path $asset.Png) {
    Remove-Item $asset.Png -Force
  }

  $svgUri = [System.Uri]::new((Resolve-Path $asset.Svg).Path).AbsoluteUri
  $arguments = @(
    '--headless=new'
    '--disable-gpu'
    '--hide-scrollbars'
    '--no-first-run'
    '--disable-crash-reporter'
    '--run-all-compositor-stages-before-draw'
    '--default-background-color=00000000'
    "--user-data-dir=$profileDir"
    "--window-size=$Width,$Height"
    "--screenshot=$($asset.Png)"
    $svgUri
  )

  & $chrome.Source @arguments | Out-Null

  if (-not (Test-Path $asset.Png)) {
    throw "PNG export failed for $($asset.Svg)"
  }
}

Write-Host 'Exported logo PNGs:'
Get-ChildItem (Join-Path $root 'exports') -File | Select-Object Name, Length
