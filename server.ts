import express from 'express';
import { createServer as createViteServer } from 'vite';
import cors from 'cors';
import Mailjet from 'node-mailjet';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API routes FIRST
  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const mailjetApiKey = process.env.MAILJET_API_KEY;
    const mailjetApiSecret = process.env.MAILJET_API_SECRET;

    if (!mailjetApiKey || !mailjetApiSecret) {
      console.warn('Mailjet credentials not found. Simulating email send.');
      // Simulate success for development if keys are missing
      return res.status(200).json({ success: true, simulated: true });
    }

    try {
      const mailjet = new Mailjet({
        apiKey: mailjetApiKey,
        apiSecret: mailjetApiSecret
      });

      const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "ebula251056@navotaspolytechniccollege.edu.ph", // Replace with verified sender email
                Name: "Portfolio Contact Form"
              },
              To: [
                {
                  Email: "ebula251056@navotaspolytechniccollege.edu.ph", // Replace with your receiving email
                  Name: "Eldrex"
                }
              ],
              Subject: `New Contact Form Submission from ${name}`,
              TextPart: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
              HTMLPart: `<h3>New Contact Form Submission</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
            }
          ]
        });

      await request;
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Mailjet error:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile('index.html', { root: 'dist' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
