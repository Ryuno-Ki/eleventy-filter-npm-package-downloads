import test from "ava";
import { getRequestObject } from "../src/get-request-object.js";


test("Would make a GET request", async (t) => {
  const pkgName = 'foo';
  t.is(getRequestObject(pkgName).method, "get");
});

test("Would request a JSON response", async (t) => {
  const pkgName = 'foo';
  t.is(getRequestObject(pkgName).responseType, "json");
});

test("Would build the API endpoint", async(t) => {
  const pkgName = 'foo';
  const expected = `https://api.npmjs.org/downloads/point/last-week/${ pkgName }`;
  t.is(getRequestObject(pkgName).url, expected);
});
