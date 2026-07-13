import crypto from "crypto";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getFirstName(name) {
  const [firstName] = name.trim().split(/\s+/);
  return firstName || "there";
}

function buildAdminEmailHtml({ name, email, phone, company, userType }) {
  const isExpert = userType === "expert";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : "";
  const safePhone = phone ? escapeHtml(phone) : "";
  const roleBadge = isExpert ? "Home Service Expert" : "Homeowner";
  const roleBgColor = isExpert ? "#005864" : "#F5A623";
  const roleTextColor = isExpert ? "#ffffff" : "#1a1a1a";
  const introText = isExpert
    ? "A new <strong>home service expert</strong> has joined the NexaHome waitlist and is ready to connect with homeowners."
    : "A new <strong>homeowner</strong> has joined the NexaHome waitlist and is looking for trusted home service experts.";

  const companyRow = company
    ? `<tr>
        <td style="padding:12px 16px;font-size:14px;color:#6b7280;border-bottom:1px solid #f3f4f6;width:140px;">Company</td>
        <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;font-weight:600;">${safeCompany}</td>
      </tr>`
    : "";

  const phoneRow = phone
    ? `<tr>
        <td style="padding:12px 16px;font-size:14px;color:#6b7280;border-bottom:1px solid #f3f4f6;width:140px;">Phone</td>
        <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;font-weight:600;">${safePhone}</td>
      </tr>`
    : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#005864 0%,#03717f 100%);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">NexaHome</h1>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.8);font-weight:400;">New Waitlist Submission</p>
            </td>
          </tr>

          <!-- Badge -->
          <tr>
            <td style="padding:24px 40px 0;text-align:center;">
              <span style="display:inline-block;background-color:${roleBgColor};color:${roleTextColor};font-size:13px;font-weight:700;padding:6px 20px;border-radius:100px;letter-spacing:0.5px;text-transform:uppercase;">
                ${roleBadge}
              </span>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:20px 40px 8px;text-align:center;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:#4b5563;">${introText}</p>
            </td>
          </tr>

          <!-- Details Card -->
          <tr>
            <td style="padding:16px 40px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;">
                <tr>
                  <td style="padding:12px 16px;font-size:14px;color:#6b7280;border-bottom:1px solid #f3f4f6;width:140px;">Name</td>
                  <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;font-weight:600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:14px;color:#6b7280;border-bottom:1px solid #f3f4f6;width:140px;">Email</td>
                  <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;font-weight:600;">
                    <a href="mailto:${safeEmail}" style="color:#005864;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                ${companyRow}
                ${phoneRow}
                <tr>
                  <td style="padding:12px 16px;font-size:14px;color:#6b7280;width:140px;">Source</td>
                  <td style="padding:12px 16px;font-size:14px;color:#111827;font-weight:600;">${isExpert ? "Expert Landing Page (/)" : "Homeowners Page (/homeowners)"}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background-color:#e5e7eb;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 32px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                This is an automated notification from the NexaHome waitlist.<br />
                © ${new Date().getFullYear()} NexaHome. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildUserConfirmationEmail({ name, userType }) {
  const isExpert = userType === "expert";
  const firstName = getFirstName(name);
  const safeFirstName = escapeHtml(firstName);
  const subject = isExpert
    ? "You're on the NexaHome expert list!"
    : "You're on the NexaHome waitlist!";
  const secondParagraph = isExpert
    ? "Thanks for signing up! You're on the list — we'll reach out as soon as we're ready to bring you on board."
    : "Thanks for signing up! You're on the list — we'll reach out as soon as we're ready to welcome you in.";
  const thirdParagraph = isExpert
    ? "With NexaHome you'll be able to browse real jobs, choose the leads you want, and get discovered by homeowners and businesses in your area."
    : "With NexaHome you'll be able to find trusted local experts, browse services, and get the help your home needs — all in one place.";

  return {
    subject,
    text: `Hi ${firstName},

${secondParagraph}

${thirdParagraph}

Stay tuned.

- The NexaHome Team`,
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#005864 0%,#03717f 100%);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">NexaHome</h1>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.8);font-weight:400;">Waitlist Confirmation</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px 12px;">
              <p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#111827;">Hi ${safeFirstName},</p>
              <p style="margin:0 0 18px;font-size:15px;line-height:1.75;color:#4b5563;">${escapeHtml(secondParagraph)}</p>
              <p style="margin:0 0 18px;font-size:15px;line-height:1.75;color:#4b5563;">${escapeHtml(thirdParagraph)}</p>
              <p style="margin:0;font-size:15px;line-height:1.75;color:#4b5563;">Stay tuned.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background-color:#e5e7eb;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px 28px;">
              <p style="margin:0;font-size:15px;line-height:1.6;color:#111827;">- The NexaHome Team</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
}

async function addSubscriberToMailchimp({ email, name, phone, company, userType }) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !listId) {
    throw new Error("Mailchimp API Key or Audience ID is missing in environment variables.");
  }

  const dc = apiKey.split("-")[1] || "us1";
  const subscriberHash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");

  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;
  const authHeader = `Basic ${Buffer.from(`anykey:${apiKey}`).toString("base64")}`;

  const isExpert = userType === "expert";
  const tag = isExpert ? "Expert Waitlist" : "Homeowner Waitlist";

  const fullName = name.trim();

  // Attempt 1: All fields (including FNAME, LNAME, PHONE, COMPANY if provided)
  const mergeFields = {
    FNAME: fullName,
    LNAME: "",
  };
  if (phone) mergeFields.PHONE = phone;
  if (company) mergeFields.COMPANY = company;

  const body1 = {
    email_address: email,
    status_if_new: "subscribed",
    merge_fields: mergeFields,
  };

  console.log(`[Mailchimp] Attempting to subscribe ${email} with merge fields...`);

  let response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body1),
  });

  if (response.ok) {
    console.log(`[Mailchimp] Successfully subscribed ${email} on first attempt.`);
    return await response.json();
  }

  let errorData = await response.json().catch(() => ({}));
  console.warn(`[Mailchimp] First attempt failed with status ${response.status}:`, errorData);

  // Attempt 2: Fallback to only FNAME and LNAME (in case PHONE/COMPANY don't exist)
  console.log(`[Mailchimp] Retrying with only basic fields (FNAME, LNAME)...`);
  const body2 = {
    email_address: email,
    status_if_new: "subscribed",
    merge_fields: {
      FNAME: fullName,
      LNAME: "",
    },
  };

  response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body2),
  });

  if (response.ok) {
    console.log(`[Mailchimp] Successfully subscribed ${email} on second attempt.`);
    return await response.json();
  }

  errorData = await response.json().catch(() => ({}));
  console.warn(`[Mailchimp] Second attempt failed with status ${response.status}:`, errorData);

  // Attempt 3: Fallback to only email (minimum required)
  console.log(`[Mailchimp] Retrying with only email...`);
  const body3 = {
    email_address: email,
    status_if_new: "subscribed",
  };

  response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body3),
  });

  if (response.ok) {
    console.log(`[Mailchimp] Successfully subscribed ${email} on third attempt.`);
    return await response.json();
  }

  errorData = await response.json().catch(() => ({}));
  console.error(`[Mailchimp] Third attempt failed with status ${response.status}:`, errorData);
  const mailchimpError = new Error(errorData.detail || "Failed to subscribe member to Mailchimp.");
  mailchimpError.status = response.status;
  throw mailchimpError;
}

async function addTagsToMailchimpMember({ email, userType }) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;
  const dc = apiKey.split("-")[1] || "us1";
  const subscriberHash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");

  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}/tags`;
  const authHeader = `Basic ${Buffer.from(`anykey:${apiKey}`).toString("base64")}`;

  const isExpert = userType === "expert";
  const tag = isExpert ? "Expert Waitlist" : "Homeowner Waitlist";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tags: [
        {
          name: tag,
          status: "active",
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.warn(`[Mailchimp] Failed to apply tags to ${email}:`, errorData);
  } else {
    console.log(`[Mailchimp] Successfully applied tag "${tag}" to ${email}.`);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, userType } = body;
    const normalizedName = typeof name === "string" ? name.trim() : "";
    const normalizedEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";
    const normalizedPhone = typeof phone === "string" ? phone.trim() : "";
    const normalizedCompany =
      typeof company === "string" ? company.trim() : "";
    const normalizedUserType =
      typeof userType === "string" ? userType.trim().toLowerCase() : "";

    if (!normalizedName || !normalizedEmail || !normalizedUserType) {
      return Response.json(
        { error: "Name, email, and user type are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!["expert", "homeowner"].includes(normalizedUserType)) {
      return Response.json(
        { error: "Invalid user type." },
        { status: 400 }
      );
    }

    const isExpert = normalizedUserType === "expert";
    const subjectLine = isExpert
      ? `New Expert Waitlist Signup — ${normalizedName}`
      : `New Homeowner Waitlist Signup — ${normalizedName}`;

    const adminMsg = {
      to: "nexahomeapp@gmail.com",
      from: {
        email: "no-reply@nexahomeapp.com",
        name: "NexaHome Waitlist",
      },
      subject: subjectLine,
      html: buildAdminEmailHtml({
        name: normalizedName,
        email: normalizedEmail,
        phone: normalizedPhone,
        company: normalizedCompany,
        userType: normalizedUserType,
      }),
    };

    const confirmationEmail = buildUserConfirmationEmail({
      name: normalizedName,
      userType: normalizedUserType,
    });

    console.log("normalizedEmail: ", normalizedEmail)

    const userMsg = {
      to: normalizedEmail,
      from: {
        email: "no-reply@nexahomeapp.com",
        name: "NexaHome Team",
      },
      subject: confirmationEmail.subject,
      text: confirmationEmail.text,
      html: confirmationEmail.html,
    };

    // Call Mailchimp Integration
    await addSubscriberToMailchimp({
      email: normalizedEmail,
      name: normalizedName,
      phone: normalizedPhone,
      company: normalizedCompany,
      userType: normalizedUserType,
    });

    await addTagsToMailchimpMember({
      email: normalizedEmail,
      userType: normalizedUserType,
    });

    // Send confirmation email to user and notification email to admin using SendGrid
    await Promise.all([sgMail.send(adminMsg), sgMail.send(userMsg)]);

    return Response.json(
      { message: "Successfully joined the waitlist!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Waitlist Error:",
      error.message
    );

    const status = error.status || 500;
    return Response.json(
      { error: error.message || "Something went wrong. Please try again later." },
      { status: status }
    );
  }
}
