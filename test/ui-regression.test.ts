/**
 * ui-regression.test.ts — Regression guards for UI components
 *
 * CRITICAL: upstream deleted office view (commit 923b1ca).
 * NUCHULA fork must keep it. These tests catch if it goes missing.
 */
import { describe, test, expect } from "bun:test";
import { existsSync, readFileSync } from "fs";
import { join } from "path";

const SRC = join(import.meta.dir, "../src");

describe("office view regression", () => {
  test("src/views/office.ts exists", () => {
    const officeViewPath = join(SRC, "views/office.ts");
    expect(existsSync(officeViewPath)).toBe(true);
    // If this fails: upstream deleted office view (923b1ca).
    // NUCHULA must restore it — the ARRA Office UI depends on this view.
  });

  test("views/index.ts mounts office view", () => {
    const indexPath = join(SRC, "views/index.ts");
    expect(existsSync(indexPath)).toBe(true);
    const content = readFileSync(indexPath, "utf-8");
    expect(content).toContain("office");
    // If this fails: office view was removed from mountViews().
    // Restore the import and app.route() for officeView.
  });
});

describe("static UI assets", () => {
  test("ui/office/index.html exists", () => {
    const htmlPath = join(import.meta.dir, "../ui/office/index.html");
    expect(existsSync(htmlPath)).toBe(true);
  });

  test("ui/office/index.html contains ARRA Office", () => {
    const htmlPath = join(import.meta.dir, "../ui/office/index.html");
    if (!existsSync(htmlPath)) return;
    const html = readFileSync(htmlPath, "utf-8");
    expect(html).toContain("ARRA Office");
  });

  test("ui/office/assets/ directory has JS files", () => {
    const assetsDir = join(import.meta.dir, "../ui/office/assets");
    if (!existsSync(assetsDir)) {
      expect(existsSync(assetsDir)).toBe(true);
      return;
    }
    const { readdirSync } = require("fs");
    const jsFiles = readdirSync(assetsDir).filter((f: string) => f.endsWith(".js"));
    expect(jsFiles.length).toBeGreaterThan(0);
  });
});
