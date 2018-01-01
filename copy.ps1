Get-ChildItem ../newbepro/* | ForEach-Object {
    if ($_.Name -ne ".git") {
        Remove-Item $_ -Recurse -Force
    }
}

Copy-Item .\docs\* ../newbepro -Recurse -Force