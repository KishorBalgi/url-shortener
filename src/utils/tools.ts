import { customAlphabet } from "nanoid";
import config from "@config/config";

const ALPHABETS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const generateBase62Key = (length = 6) => {
  const nanoid = customAlphabet(ALPHABETS, length);
  return config.machineId + nanoid();
};
