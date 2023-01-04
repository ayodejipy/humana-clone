// import { describe, test, expect } from "vitest";
// import { $fetch, url, setup } from "@nuxt/test-utils";
import { setupTest, createPage } from "@nuxt/test-utils";

describe("browser", () => {
    setupTest({ browser: true });

    test("renders the index page", async () => {
        const page = await createPage("/");
        const html = await page.innerHTML("body");

        expect(html).toContain("Something");
    });
});
