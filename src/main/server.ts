/* eslint-disable */
import { krpcClient } from "@/infrastructure";

krpcClient.createConnection().then(() => {
  console.log("Successfully connected");
});
