# ML API for YieldSense

This service provides machine learning predictions for volatility and sentiment analysis for the YieldSense DeFi platform.

## Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Download ML Models

The ML models are not included in the repository due to size constraints. You need to download them:

#### Option A: Download pre-trained models
Create the models directory and place the following files:
- `models/volatility_sol.keras`
- `models/volatility_usdc.keras`
- `models/volatility_usdt.keras`
- `models/volatility_jup.keras`
- `models/volatility_jupsol.keras`
- `models/volatility_pengu.keras`
- `models/finbert_sentiment/` (directory with FinBERT model files)

#### Option B: Train your own models
(Training scripts will be provided in future updates)

### 3. Run the API

```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Endpoints

- `GET /health` - Health check
- `GET /volatility/{token}` - Get volatility prediction for a token
- `GET /sentiment` - Get market sentiment analysis
- `POST /predict` - Get combined prediction

## Environment Variables

- `PORT` - Server port (default: 8000)
- `HF_HOME` - Hugging Face cache directory for model downloads
