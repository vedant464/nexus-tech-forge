# 🚀 Google Form Setup Instructions

## ✅ What I've Done:
- ✅ Created GoogleFormEmbed component
- ✅ Updated Join.tsx to use Google Form
- ✅ Removed old EmailJS registration form
- ✅ Added proper navigation to the form

## 📝 What You Need to Do:

### Step 1: Create Google Form
1. Go to https://forms.google.com/
2. Click "Create a new form"
3. Name it "ROI Tech Club Registration"

### Step 2: Add Form Fields
Add these questions in order:

**Personal Information:**
1. **Full Name** (Short answer) - Required
2. **Email Address** (Short answer) - Required  
3. **Phone Number** (Short answer) - Required

**Academic Information:**
4. **Branch/Department** (Multiple choice) - Required
   - Artificial Intelligence and Data Science
   - Computer Science
   - Information Technology
   - Electronics and Telecommunication
   - Mechanical
   - Civil
   - Other

5. **Year of Study** (Multiple choice) - Required
   - 1st Year
   - 2nd Year
   - 3rd Year
   - 4th Year

**Application Details:**
6. **Why do you want to join the club?** (Paragraph) - Required
7. **Skills** (Paragraph) - Required
8. **Upload Resume/Portfolio** (File upload) - **IMPORTANT: This will give you direct download links!**

**Terms:**
9. **I agree to follow the club's rules** (Checkbox) - Required

### Step 3: Configure File Upload
1. Click on the "Upload Resume/Portfolio" question
2. Set file size limit to **10 MB**
3. Allow file types: **PDF, DOC, DOCX**

### Step 4: Get Embed Code
1. Click **"Send"** button
2. Choose **"Embed"** tab
3. Copy the embed code (it looks like `<iframe src="...">`)

### Step 5: Update the Code
1. Open `src/pages/Join.tsx`
2. Find line 18: `const googleFormUrl = "YOUR_GOOGLE_FORM_URL_HERE";`
3. Replace `YOUR_GOOGLE_FORM_URL_HERE` with your Google Form URL
4. The URL should look like: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true`

### Step 6: Set Up Email Notifications
1. In Google Forms, click the three dots menu (⋮)
2. Select **"Get email notifications for new responses"**
3. Enter your email: **vedantt2830@gmail.com**

### Step 7: View Responses
1. Click **"Responses"** tab
2. Click the **Google Sheets** icon to create a spreadsheet
3. All responses will be stored in the spreadsheet with **direct file download links!**

## 🎯 Benefits You'll Get:
- ✅ **Direct file downloads** - Click links to download resume files
- ✅ **Email notifications** - Get emails when someone submits
- ✅ **Spreadsheet storage** - All data in Google Sheets
- ✅ **No technical issues** - Works reliably
- ✅ **Mobile friendly** - Works on all devices
- ✅ **Free forever** - No monthly fees

## 🧪 Test the Form:
1. Start your development server: `npm run dev`
2. Go to the Join page
3. Click "Apply Now" or scroll to the form
4. Fill out the test form with a resume file
5. Submit and check your email + Google Sheets

## 📧 What You'll Receive:
- **Email notification** with form details
- **Google Sheets** with all responses and file download links
- **Direct download links** for all resume files

**Once you complete these steps, you'll have a working registration form with direct file downloads!** 🎉 