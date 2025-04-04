// api/proxy.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Remove '/api/proxy' from the URL to get the actual API endpoint path
  const path = req.url.replace('/api/proxy', '');
  const targetUrl = `http://safe-notes-prod-env.eba-b9gsits3.ap-south-1.elasticbeanstalk.com${path}`;

  try {
    // Forward the request to the target URL
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: req.headers,
      // Only include a body for methods that allow it (like POST, PUT)
      body: ['GET', 'HEAD'].includes(req.method) ? null : req.body,
    });

    const data = await response.text(); // or use .json() if the API returns JSON
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy error', details: error.message });
  }
};
