
from playwright.sync_api import sync_playwright, expect

def test_script_loading():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the verification page
        page.goto("http://localhost:8000/verification/index.html")

        # Wait for the lucide-loaded class which indicates the script ran and DOMContentLoaded fired
        page.wait_for_selector("body.lucide-loaded")

        # Check if lucide is defined
        is_lucide_defined = page.evaluate("typeof lucide !== 'undefined'")
        assert is_lucide_defined, "Lucide should be defined"

        # Check if the icon was replaced (lucide.createIcons() replaces <i> with <svg>)
        page.wait_for_selector("svg.lucide-camera")

        # Take a screenshot
        page.screenshot(path="verification/screenshot.png")

        browser.close()

if __name__ == "__main__":
    test_script_loading()
