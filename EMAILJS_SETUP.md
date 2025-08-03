# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New ROI Tech Club Registration - {{from_name}}

Hello,

A new registration has been submitted for ROI Tech Club.

Registration Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Branch: {{branch}}
- Year of Study: {{year_of_study}}
- Why Join: {{why_join}}
- Skills: {{skills}}
- Resume: {{resume_file}}

Message: {{message}}

Best regards,
ROI Tech Club Website
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" > "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Your actual service ID
  TEMPLATE_ID: 'template_xyz789', // Your actual template ID
  PUBLIC_KEY: 'user_def456', // Your actual public key
  TO_EMAIL: 'roitechclub@gmail.com' // Your email address
};
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Fill out the registration form
3. Submit the form
4. Check your email for the registration details

## Troubleshooting
- Make sure all EmailJS credentials are correct
- Check browser console for any errors
- Verify your email service is properly connected
- Ensure your template variables match the ones in the code

## Security Notes
- The public key is safe to use in client-side code
- Consider using environment variables for production
- EmailJS has rate limiting on free tier (200 emails/month) 