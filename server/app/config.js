// Provides config for the app in conjunction with dotenv
// Config is the only place accesses 'dotenv'
import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    clientURL: process.env.DB_CLIENT_URL,
    name: "storeGoods",
    collectionName: "storeGoods",
  },
  port: process.env.PORT || 3000,
};
