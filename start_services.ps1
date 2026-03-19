Write-Host "Starting All YieldSense Services..."

$BASE = "c:\Users\rajan\OneDrive\Documents\yieldsense_stable"

# 1. Start Backend Server (Position Manager) - Uses npm run dev for hot reload
Write-Host "Launching Backend Server (Port 3001)..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$BASE\whirlpool-dashboard\server'; npm run dev"

# 2. Start ML API (Python)
Write-Host "Launching ML API (Port 8000)..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$BASE\whirlpool-dashboard\ml-api'; python main.py"

# 3. Start Frontend (Vite)
Write-Host "Launching Frontend Dashboard (Port 5173)..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$BASE\whirlpool-dashboard'; npm run dev"

# 4. Start Monitoring Service (Telegram/Firebase)
Write-Host "Launching Monitoring Service..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$BASE\monitoring'; npm start"

Write-Host "All services launched in 4 separate windows."
