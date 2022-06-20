import test from "ava";
import { parseResponse } from "../src/parse-response.js";


test("Reads the downloads from the response", async (t) => {
  const downloads = 42;
  t.is(parseResponse({data: {downloads: downloads}}), downloads);
});
