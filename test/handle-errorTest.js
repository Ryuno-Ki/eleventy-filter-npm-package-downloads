import test from "ava";
import { handleError } from "../src/handle-error.js";


test("Returns 'N/A' in case of an error", async (t) => {
  const reason = null;  // Imagine this being an instance of Error
  t.is(handleError(reason), 'N/A');
});

