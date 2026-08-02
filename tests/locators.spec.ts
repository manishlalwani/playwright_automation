import { test, expect } from '@playwright/test';

test('locators practice', async ({ page }) => {
    await page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26');

    //Locators

    let firstName = page.getByRole('textbox', { name: 'First Name' });
    await firstName.highlight();


    let lastName = page.getByRole('textbox', { name: 'Last Name' });
    await lastName.highlight();

    let emailAddress = page.getByRole('textbox', { name: 'Email Address' });
    await emailAddress.highlight();

    let password = page.getByRole('textbox', { name: 'Password' }).first();
    await password.highlight();

    let phone = page.getByRole('textbox', { name: 'Phone Number' })
    await phone.highlight();

    let website = page.getByRole('textbox', { name: 'Website' });
    await website.highlight();

    let age = page.getByRole('spinbutton', { name: 'Age' });
    await age.highlight()

    let salary = page.getByRole('spinbutton', { name: 'Salary' });
    await salary.highlight();

    let dob = page.getByLabel('Date of Birth');
    await dob.highlight();

    let meetingTime = page.getByLabel('Preferred Meeting Time');
    await meetingTime.highlight();

    let scheduleInterview = page.getByLabel('Schedule Interview');
    await scheduleInterview.highlight();

    let birthMonth = page.getByLabel('Birth Month');
    await birthMonth.highlight();

    let workWeek = page.getByLabel('Work Week');
    await workWeek.highlight();

    let favColor = page.getByLabel('Color');
    await favColor.highlight();

    let yoe = page.getByLabel('Years');
    await yoe.highlight();


    let search = page.getByRole('combobox', { name: 'Search' });
    await search.highlight();

    let bio = page.getByRole('textbox', { name: 'Bio' });
    await bio.highlight();

    let userID = page.getByRole('textbox', { name: 'User ID' });
    await userID.highlight();

    let acctStatus = page.getByRole('textbox', { name: 'Status' });
    await acctStatus.highlight();

    let autoFilled = page.getByRole('textbox', { name: 'Auto' });
    await autoFilled.highlight();

    let saveBtn = page.getByRole('button', { name: 'Save' });
    await saveBtn.highlight();

    let cancelBtn = page.getByRole('button', { name: 'Cancel' });
    await cancelBtn.highlight();

    let apprvBtn = page.getByRole('button', { name: 'Approve' });
    await apprvBtn.highlight();

    let deleteActBtn = page.getByRole('button', { name: 'Delete Account' });
    await deleteActBtn.highlight();

    let archiveBtn = page.getByRole('button', { name: 'Archive' });
    await archiveBtn.highlight();

    let learnMoreBtn = page.getByRole('button', { name: 'Learn' });
    await learnMoreBtn.highlight();

    let submitFrmBtn = page.getByRole('button', { name: 'Submit Form' });
    await submitFrmBtn.highlight();

    let resetFrmBtn = page.getByRole('button', { name: 'Reset Form' });
    await resetFrmBtn.highlight();

    let disabledBtn = page.getByRole('button', { name: 'Disabled' });
    await disabledBtn.highlight();

    let loadingBtn = page.getByRole('button', { name: 'Loading' });
    await loadingBtn.highlight();

    let inputSubmitBtn = page.getByRole('button', { name: 'Input as Submit' });
    await inputSubmitBtn.highlight();

    let inputBtn = page.getByRole('button', { name: 'Input as Submit' });
    await inputBtn.highlight();

    let editProfileBtn = page.getByRole('button', { name: 'Edit user profile' });
    await editProfileBtn.highlight();

    let deleteSlctBtn = page.getByRole('button', { name: 'delete selected' });
    await deleteSlctBtn.highlight();

    let refreshBtn = page.getByRole('button', { name: 'Refresh' });
    await refreshBtn.highlight();

    let copyClipBtn = page.getByRole('button', { name: 'Clipboard' });
    await copyClipBtn.highlight();


    let preferredLng = page.getByRole('group', { name: 'language' });
    await preferredLng.highlight();

    let skills = page.getByRole('group', { name: 'Skills' });
    await skills.highlight();

    let genderMale = page.getByLabel('male', { exact: true });
    await genderMale.highlight();

    let genderFeMale = page.getByLabel('Female');
    await genderFeMale.highlight();

    let genderOther = page.getByLabel('Prefer not to say');
    await genderOther.highlight();

    let termsCheckBox = page.getByLabel('Terms');
    await termsCheckBox.highlight();

    let subscribeCheckBox = page.getByLabel('Subscribe');
    await subscribeCheckBox.highlight();

    let rememberCheckBox = page.getByLabel('Remember');
    await rememberCheckBox.highlight();

    let selectCountryDrpDwn = page.getByRole('combobox', { name: 'Country' });
    await selectCountryDrpDwn.highlight();

    let autoToolDrpDwn = page.getByRole('combobox', { name: 'Automation Tool' });
    await autoToolDrpDwn.highlight();

    let roleDrpDwn = page.getByRole('combobox', { name: 'Multi' });
    await roleDrpDwn.highlight();

    let headingLevel1 = page.getByRole('heading', { level: 1, name: 'Heading Level 1' });
    await headingLevel1.highlight();

    let headingLevel2 = page.getByRole('heading', { level: 2, name: 'Heading Level 2' });
    await headingLevel2.highlight();

    let headingLevel3 = page.getByRole('heading', { level: 3, name: 'Heading Level 3' });
    await headingLevel3.highlight();

    let headingLevel4 = page.getByRole('heading', { level: 4, name: 'Heading Level 4' });
    await headingLevel4.highlight();

    let headingLevel5 = page.getByRole('heading', { level: 5, name: 'Heading Level 5' });
    await headingLevel5.highlight();

    let headingLevel6 = page.getByRole('heading', { level: 6, name: 'Heading Level 6' });
    await headingLevel6.highlight();


    let unorderedList = page.getByTestId('list-unordered');
    await unorderedList.highlight();

    let orderedList = page.getByTestId('list-ordered');
    await orderedList.highlight();

    let naveenYouTubeLink = page.getByRole('link', { name: 'on YouTube' });
    await naveenYouTubeLink.highlight();

    let playwrightOfficialDocs = page.getByRole('link', { name: 'Playwright Official' });
    await playwrightOfficialDocs.highlight();

    let backToTopPage = page.getByRole('link', { name: 'Back to top of this page' });
    await backToTopPage.highlight();

    let helloNaveenLink = page.getByRole('link', { name: 'hello' });
    await helloNaveenLink.highlight();

    let callOfficeLink = page.getByRole('link', { name: 'NAL office' });
    await callOfficeLink.highlight();

    let downLoadPDF = page.getByRole('link', { name: 'PDF' });
    await downLoadPDF.highlight();


    let definitions = page.getByTestId('list-definition');
    await definitions.highlight();

    let batchTable = page.getByTestId('students-table');
    await batchTable.highlight();

    let plawrightImage = page.getByRole('img', { name: 'Playwright' });
    await plawrightImage.highlight();

    let naveenImage = page.getByRole('img', { name: 'Naveen' });
    await naveenImage.highlight();

    let missingImage = page.getByRole('img', { name: 'Missing' });
    await missingImage.highlight();

    let emptyDecorativeImage = page.getByTestId('img-decorative');
    await emptyDecorativeImage.highlight();

    let singleFileUploadBtn = page.getByLabel('Single');
    await singleFileUploadBtn.highlight();

    let multiFileUploadBtn = page.getByTestId('file-multiple');
    await multiFileUploadBtn.highlight();

    let imageFileUploadBtn = page.getByTestId('file-image');
    await imageFileUploadBtn.highlight();

    let pdfFileUploadBtn = page.getByLabel('PDF only');
    await pdfFileUploadBtn.highlight();


    let uploadPrgress = page.getByTestId('progress-upload');
    await uploadPrgress.highlight();

    let diskSpace = page.getByTestId('meter-disk');
    await diskSpace.highlight();

    let alertBtn = page.getByRole('button', { name: 'Show Alert' });
    await alertBtn.highlight();

    let confirmBtn = page.getByRole('button', { name: 'Show Confirm' });
    await confirmBtn.highlight();

    let promptBtn = page.getByRole('button', { name: 'Show Prompt' });
    await promptBtn.highlight();

    let openModalBtn = page.getByRole('button', { name: 'Open' });
    await openModalBtn.highlight();

    let selectorsTab = page.getByRole('tab', { name: 'Selectors' });
    await selectorsTab.highlight();

    let assertionsTab = page.getByRole('tab', { name: 'Assertions' });
    await assertionsTab.highlight();

    let fixturesTab = page.getByRole('tab', { name: 'Fixtures' });
    await fixturesTab.highlight();

    let hoverMeBtn = page.getByRole('button', { name: 'hover' });
    await hoverMeBtn.highlight();

    let hoverDrpDwn = page.getByRole('button', { name: 'Account ▾', exact: true });
    await hoverDrpDwn.highlight();

    let nodeVersionAccord = page.getByTestId('acc-1');
    await nodeVersionAccord.highlight();

    let browserVersionAccord = page.getByTestId('acc-2');
    await browserVersionAccord.highlight();

    let parallelAccord = page.getByTestId('acc-3');
    await parallelAccord.highlight();


    let invisibleDisplay = page.getByRole('code', { name: 'display' });
    await invisibleDisplay.highlight();

    let visibleDisplay = page.getByRole('code', { name: 'visibility' });
    await visibleDisplay.highlight();


    let opacity = page.getByRole('code', { name: 'opacity' });
    await opacity.highlight();

    let screen = page.getByRole('code', { name: 'screen' });
    await screen.highlight();

    let addItembtn = page.getByRole('button', { name: 'Add Item' });
    await addItembtn.highlight()

    let lastRemoveBtn = page.getByRole('button', { name: 'Remove Last' });
    await lastRemoveBtn.highlight();

    let clearAllBtn = page.getByRole('button', { name: 'Clear' });
    await clearAllBtn.highlight();

    let removeBtn = page.getByRole('button', { name: 'Remove', exact: true });
    await removeBtn.highlight();

    let delayedMsgBtn = page.getByRole('button', { name: 'delayed' });
    await delayedMsgBtn.highlight();


    let liveCounter = page.getByTestId('live-counter');
    await liveCounter.highlight();

    let onePara = page.locator('.repeat-line').nth(0);
    await onePara.highlight();

    let secondPara = page.locator('.repeat-line').nth(1);
    await secondPara.highlight();

    let thirdPara = page.locator('.repeat-line').nth(3);
    await thirdPara.highlight();

    let fourPara = page.locator('.repeat-line').nth(4);
    await fourPara.highlight();

    let fifthPara = page.locator('.repeat-line').nth(5);
    await fifthPara.highlight();


    let insideFrame = page.getByRole('textbox', { name: 'inside' });
    await insideFrame.highlight();

    let insideFrameBtn = page.getByRole('button', { name: 'iframe' });
    await insideFrameBtn.highlight();

    let dragNDrop = page.locator('.dnd-item');
    await dragNDrop.highlight();

    let dndTarget = page.locator('#dropTarget');
    await dndTarget.highlight();

    let shadowInput = page.getByRole('textbox', { name: 'shadow' });
    await shadowInput.highlight();

    let shadowBtn = page.getByRole('button', { name: 'shadow' });
    await shadowBtn.highlight();

    let traingle = page.locator('#svgTriangle');
    await traingle.highlight();

    let circle = page.locator('#svgCircle');
    await circle.highlight();

    let rectangle = page.locator('#svgRect');
    await rectangle.highlight();

    let editableContent = page.getByRole('textbox', { name: 'Editable' });
    await editableContent.highlight();

    let userName = page.getByRole('textbox', { name: 'username' });
    await userName.highlight();

    let passwordInput = page.getByPlaceholder('password');
    await passwordInput.highlight();

    let signInBtn = page.getByRole('button', { name: 'Sign in' });
    await signInBtn.highlight();

    let resetBtn = page.getByRole('button', { name: 'Reset', exact: true });
    await resetBtn.highlight();

    let keepSignChkBox = page.getByRole('checkbox', { name: 'keep' });
    await keepSignChkBox.highlight();

    page.pause();

});

