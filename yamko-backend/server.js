const csvParser = require('csv-parser');
const express = require('express');
const https = require('https');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const repos = ["LILIA", "ARIA", "WHIRL_2"];

const app = express();
const port = 3050;
const options = {
//  key: fs.readFileSync('/etc/letsencrypt/live/evlmei.dev/privkey.pem'),
//  cert: fs.readFileSync('/etc/letsencrypt/live/evlmei.dev/fullchain.pem'),
};

app.use(express.json());

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.get('api/panw', (req, res) => {
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

app.get('/api/commits', async (req, res) => {
  try {
    const token = process.env.GIT_TOK;
    const headers = token ? { Authorization: `token ${token}` } : {};

    const results = await Promise.all(
      repos.map(async (repo) => {
        const url = `https://api.github.com/repos/yammei/${repo}/commits`;
        const response = await axios.get(url, { headers });

        const recentCommits = response.data.slice(0, 3).map((commit) => ({
          repoName: repo,
          commitDate: new Date(commit.commit.author.date),
          commitMessage: commit.commit.message,
        }));

        return recentCommits;
      })
    );

    const sortedCommits = results
      .flat()
      .sort((a, b) => b.commitDate - a.commitDate);

    res.json(sortedCommits);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});


app.listen(port, '127.0.0.1',() => {
  console.log(`Server running at http://localhost:${port}`);
});

// https.createServer(options, app).listen(port, ()=> {
// console.log('Server running @ https://evlmei.dev');
// });