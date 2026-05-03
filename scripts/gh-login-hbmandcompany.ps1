#Requires -Version 5.1
<#
  Login (or re-login) with GitHub CLI so HTTPS git uses the right account for hbmandcompany/*.

  Important: You sign in as a GitHub *user* that has write access to the org/repo.
  Organization names are not a separate "hbmandcompany login" in gh — use the member/owner account.

  Run (from anywhere):
    powershell -ExecutionPolicy Bypass -File ".\scripts\gh-login-hbmandcompany.ps1"

  Or open PowerShell in the repo folder and:
    .\scripts\gh-login-hbmandcompany.ps1

  Switch only (account already in gh):
    powershell -ExecutionPolicy Bypass -File ".\scripts\gh-login-hbmandcompany.ps1" -ActivateUsername "YOUR_GITHUB_USERNAME"
#>

param(
  [string]$ActivateUsername = ''
)

$ErrorActionPreference = 'Stop'

function Test-GhInstalled {
  return [bool](Get-Command gh -ErrorAction SilentlyContinue)
}

function Show-PostLoginHelp {
  param([string]$RepoRoot)
  Write-Host @"

Next steps (same terminal):
  cd `"$RepoRoot`"
  git remote set-url origin https://github.com/hbmandcompany/Michelangelo.git
  git push -u origin main

If push still returns 403, that user needs Write access on github.com/hbmandcompany/Michelangelo
(Settings → Collaborators or org team permissions).

"@
}

if (-not (Test-GhInstalled)) {
  Write-Error "GitHub CLI (gh) not found. Install from https://cli.github.com/ then re-run this script."
}

$RepoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
if (-not (Test-Path (Join-Path $RepoRoot '.git'))) {
  Write-Warning "Could not find .git above scripts folder. Repo root assumed: $RepoRoot"
}

if ($ActivateUsername.Trim().Length -gt 0) {
  $user = $ActivateUsername.Trim()
  Write-Host "Activating GitHub account: $user"
  gh auth switch --hostname github.com --user $user
  gh auth status
  Show-PostLoginHelp -RepoRoot $RepoRoot
  exit 0
}

Write-Host @"

----------------------------------------------------------------
  GitHub HTTPS login — account with access to hbmandcompany
----------------------------------------------------------------

You will complete login in the browser.

Use the GitHub account that is allowed to push to:
  https://github.com/hbmandcompany/Michelangelo

(If your username is not literally "hbmandcompany", that is normal — use the user that is a
member or owner with repository write access.)

Press Enter to start browser login, or Ctrl+C to cancel.
"@
[void][System.Console]::ReadLine()

gh auth login --hostname github.com --git-protocol https --web

Write-Host "`nAccounts known to GitHub CLI:"
gh auth status

Write-Host ""
$pick = Read-Host @"
Type the GitHub LOGIN username that should be active for git push (exact spelling), or press Enter to skip
"@

if ($pick -and $pick.Trim().Length -gt 0) {
  gh auth switch --hostname github.com --user $pick.Trim()
}

Write-Host "`nVerifying active account:"
gh auth status

Write-Host "`nRemote (HTTPS) for this repo:"
Push-Location $RepoRoot
try {
  if (Test-Path '.git') {
    git remote set-url origin https://github.com/hbmandcompany/Michelangelo.git
    git remote -v
  }
}
finally {
  Pop-Location
}

Show-PostLoginHelp -RepoRoot $RepoRoot
