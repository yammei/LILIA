const csvParser = require('csv-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3050;

app.use(express.json());
app.use(cors());

app.get('/panw', (req, res) => {
  const filePath1 = path.join(__dirname, 'ARIA/logs/ARIMAX_actual_vs_forecast_last_10days_2mo.csv');
  const filePath2 = path.join(__dirname, 'ARIA/logs/ARIMAX_3day_forecast_2mo.csv');

  const result = [];

  const formatDate = (dateTime) => {
    return dateTime.split(' ')[0];
  };

  const readFirstFile = new Promise((resolve, reject) => {
    const data1 = [];
    fs.createReadStream(filePath1)
      .pipe(csvParser())
      .on('data', (row) => {
        const date = row[''];
        const closingValue = parseFloat(row['Actual']);
        if (date && !isNaN(closingValue)) {
          data1.push([formatDate(date), closingValue]);
        }
      })
      .on('end', () => resolve(data1))
      .on('error', (err) => reject(err));
  });
  const readSecondFile = new Promise((resolve, reject) => {
    const data2 = [];
    fs.createReadStream(filePath2)
      .pipe(csvParser())
      .on('data', (row) => {
        const dateTime = row['Date'];
        const predictedClose = parseFloat(row['Predicted_Close']);
        if (dateTime && !isNaN(predictedClose)) {
          data2.push([formatDate(dateTime), predictedClose]);
        }
      })
      .on('end', () => resolve(data2))
      .on('error', (err) => reject(err));
  });

  Promise.all([readFirstFile, readSecondFile])
  .then(([data1, data2]) => {
    const combinedData = [...data1, ...data2];
    console.log(`Success: PANW investment data sent.`);
    res.json(combinedData);
  })
  .catch((err) => {
    console.error('Error processing CSV files:', err);
    res.status(500).send('Error processing the files.');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
