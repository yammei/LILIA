<h1>ARIMAX: PANW (endo) + Friends (exo)</h1> 

Model Metrics:

```bash
MAE (%): 2.6134959337216515
RMSE (%): 3.1307138765254643
```

Model Output

```bash
Actual vs Forecast (Last 10 Days):
                Actual    Forecast
2024-11-05  366.290009  365.003789
2024-11-06  385.179993  382.944112
2024-11-07  387.000000  380.337162
2024-11-08  391.399994  388.499608
2024-11-11  398.100006  399.616777
2024-11-12  398.019989  400.267605
2024-11-13  402.359985  403.072332
2024-11-14  394.390015  398.621933
2024-11-15  387.000000  388.727487
```

Endogenous Variables: Palo Alto Networks (PANW) Closing Price<br>
Exogenous Variables: PANW Adjacent/Competitor stock data: Closing Price, EMA 12, EMA 26, Volume

Environment Setup

```bash
git init
git remote add origin https://github.com/yammei/statistical-models.git
git pull origin main
python3 -m venv .venv
source .venv/bin/activate
pip3 install -r requirements.txt
```

Running the model

```bash
cd scripts
python3 analyze_comovement.py
python3 retrieve_data.py
python3 train_arimax.py
python3 model_inference.py
```
