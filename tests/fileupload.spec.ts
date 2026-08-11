import { test, expect } from '@playwright/test';

test('Single file upload and remove file testcase', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
    await page.locator('#single-file').setInputFiles('/Users/temp/Downloads/QA_TestCases_ArticleExtraction.md');
    await page.waitForTimeout(5000);
    await page.locator('#single-file').setInputFiles([]);
    //type = file must be there
    await page.pause();
});

test('Multiple file upload and remove file testcase', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    await page.locator('#multi-file').setInputFiles([
        '/Users/temp/Downloads/QA_TestCases_ArticleExtraction.md',
        '/Users/temp/Downloads/project_smart_ai_images/DashboardPage/dashboard_for_all_issues.jpg',
        '/Users/temp/Downloads/Resume_July_2026/Manish_Lalwani_Resume_QA_Lead_Enhanced.docx'
    ]);
    await page.waitForTimeout(5000);
    await page.locator('#multi-file').setInputFiles([]);
    //type = file must be there
    await page.pause();
});


test('file upload when file type tage is not present testcase', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let [fileUpload] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click(),
    ]);

    await fileUpload.setFiles([
        '/Users/temp/Downloads/QA_TestCases_ArticleExtraction.md',
        '/Users/temp/Downloads/project_smart_ai_images/DashboardPage/dashboard_for_all_issues.jpg',
        '/Users/temp/Downloads/Resume_July_2026/Manish_Lalwani_Resume_QA_Lead_Enhanced.docx'
    ]);

    await page.pause();

    await fileUpload.setFiles([
        '/Users/temp/Downloads/QA_TestCases_ArticleExtraction.md',
        '/Users/temp/Downloads/project_smart_ai_images/DashboardPage/dashboard_for_all_issues.jpg'
    ]);

    await page.pause();
    await fileUpload.setFiles([]);
});