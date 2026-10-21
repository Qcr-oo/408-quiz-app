@echo off
chcp 65001 >nul
title 408数据结构考研助手
cd /d "%~dp0"
start "" "node_modules\electron\dist\electron.exe" "."
