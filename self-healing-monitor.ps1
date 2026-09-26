while ($true) {

    $status = docker inspect self-healing-app --format "{{.State.Status}}"

    if ($status -ne "running") {
        Write-Host "Container failed. Restarting..."
        docker start self-healing-app
        Write-Host "Self-healing completed."
    }

    Start-Sleep -Seconds 5
}