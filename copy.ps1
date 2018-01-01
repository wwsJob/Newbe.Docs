﻿Get-ChildItem ../newbepro/* | ForEach-Object {
    if ($_.Name -ne ".git") {
        Remove-Item $_ -Recurse -Force
    }
}

Get-ChildItem .\docs\* -File -Recurse | Where-Object { $_.FullName.EndsWith(".html") -or $_.FullName.EndsWith(".xml")} | ForEach-Object {
    $content = Get-Content $_.FullName -Encoding "utf8"
    if ($content.Contains("http://0.0.0.0:4000")) {
        $content = $content.Replace("http://0.0.0.0:4000","http://www.newbe.cf")
        $content | Out-File -FilePath $_.FullName -Encoding "utf8"
    }
}

Copy-Item .\docs\* ../newbepro -Recurse -Force