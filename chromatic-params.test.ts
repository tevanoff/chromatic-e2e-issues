import { test } from '@chromaui/test-archiver';

test('does not capture', async ({ page }) => {
  await page.goto('/');
});

test.describe('enable auto capture', () => {
  test.use({ disableAutoCapture: false });
  
  test('captures the auto snapshot', async ({ page }) => {
    await page.goto('/');
  });
});

test.describe('enable with other chromatic options', () => {
  test.use({ disableAutoCapture: false, delay: 300, diffIncludeAntiAliasing: true, forcedColors: 'active' });
  
  test('still captures the auto snapshot with chromatic config', async ({ page }) => {
    await page.goto('/');
  });
});
