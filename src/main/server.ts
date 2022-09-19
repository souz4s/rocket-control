/* eslint-disable */
import { krpcClient } from "@/infrastructure";

krpcClient()
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => console.log(err));
