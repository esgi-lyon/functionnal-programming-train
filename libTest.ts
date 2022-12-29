import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";
import { pgcd, isDivisibleBy } from "./math/lib.ts"

Deno.test("Divide test 2", () => {
  assertEquals(isDivisibleBy(7, 2), false);
  assertEquals(isDivisibleBy(8, 2), true);
  assertEquals(isDivisibleBy(20, 2), true);
})

Deno.test("Divide test 3", () => {
  assertEquals(isDivisibleBy(7, 3), false);
  assertEquals(isDivisibleBy(9, 3), true);
  assertEquals(isDivisibleBy(30, 3), true);
})

Deno.test("Divide test 4", () => {
  assertEquals(isDivisibleBy(9, 4), false);
  assertEquals(isDivisibleBy(444, 4), true);
  assertEquals(isDivisibleBy(448, 4), true);
  assertEquals(isDivisibleBy(40, 4), true);
})

Deno.test("Divide test 5", () => {
  assertEquals(isDivisibleBy(852, 5), false);
  assertEquals(isDivisibleBy(6900, 5), true);
  assertEquals(isDivisibleBy(50, 5), true);
})

Deno.test("Divide test 6", () => {
  assertEquals(isDivisibleBy(6901, 6), false);
  assertEquals(isDivisibleBy(1_254_936, 6), true);
  assertEquals(isDivisibleBy(60, 6), true);
})

Deno.test("Divide test 8", () => {
  assertEquals(isDivisibleBy(442, 8), false);
  assertEquals(isDivisibleBy(21, 8), false);
  assertEquals(isDivisibleBy(80, 8), true);
  assertEquals(isDivisibleBy(444, 8), true);
  assertEquals(isDivisibleBy(6908, 8), true);
})

Deno.test("Pgcd test", () => {
  assertEquals(pgcd(1, 2), 1);
})