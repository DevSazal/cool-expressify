import { app } from './app';
import 'dotenv/config';
import { mongoConnector } from './database/mongo';

mongoConnector().catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});

// initialize port
const port = process.env.PORT || 3000;

// run express server
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
