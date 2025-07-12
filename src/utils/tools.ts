import { customAlphabet } from "nanoid";

const ALPHABETS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const generateBase62Key = (length = 6) => {
  const nanoid = customAlphabet(ALPHABETS, length);
  return nanoid();
};
