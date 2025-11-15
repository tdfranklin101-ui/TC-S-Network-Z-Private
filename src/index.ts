import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db, members } from '@tcs-network/shared';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3008;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'z-private' });
});

app.get('/api/private/status', (req, res) => {
  res.json({ 
    message: 'Z-Private Network Active',
    features: ['secure-messaging', 'member-content', 'private-distribution']
  });
});

app.listen(PORT, () => {
  console.log(`Z-Private API running on port ${PORT}`);
});
