const express = require('express');
const apiRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => res.send('Proj4 CI/CD Sample App'));
app.use('/api', apiRouter);

if (require.main === module) {
  app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    try {
      // dynamic import of open for Node v24+ CommonJS
      const open = (await import('open')).default;
      await open(`http://localhost:${port}`);
    } catch (err) {
      console.error('Could not open browser automatically:', err);
    }
  });
}

module.exports = app;
