import mongoose from 'mongoose';

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DATABASE_NAME } = process.env;
if(!MONGODB_USERNAME || !MONGODB_PASSWORD || !MONGODB_CLUSTER) {
  throw new Error('Please define the MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_CLUSTER environment variable inside .env.local');
}

const URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/${MONGODB_DATABASE_NAME ?? 'dev'}?retryWrites=true&w=majority`;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  global.mongoose = { conn: null, promise: null };
  // @ts-ignore
  cached = global.mongoose;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    // TODO try-catch
    cached.promise = mongoose.connect(URI as string, opts).then((mong) => mong);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
