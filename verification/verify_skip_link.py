from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:4000")

    # Locate the skip link
    skip_link = page.locator(".skip-link")

    # It should exist
    expect(skip_link).to_be_attached()

    # It should have the correct text
    expect(skip_link).to_have_text("Skip to main content")

    # It should point to the main content
    expect(skip_link).to_have_attribute("href", "#main-content")

    # It should be initially hidden (top: -100px)
    # Note: We check the computed style
    expect(skip_link).to_have_css("top", "-100px")

    # Focus the link
    skip_link.focus()

    # After focus, it should be visible (top: 0px)
    expect(skip_link).to_have_css("top", "0px")

    # Take a screenshot
    page.screenshot(path="verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
