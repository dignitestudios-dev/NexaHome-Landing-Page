import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function buildEmailHtml({ name, email, phone, company, userType }) {
  const isExpert = userType === "expert";
  const roleBadge = isExpert ? "Home Service Expert" : "Homeowner";
  const roleBgColor = isExpert ? "#005864" : "#F5A623";
  const roleTextColor = isExpert ? "#ffffff" : "#1a1a1a";
  const introText = isExpert
    ? "A new <strong>home service expert</strong> has joined the NexaHome waitlist and is ready to connect with homeowners."
    : "A new <strong>homeowner</strong> has joined the NexaHome waitlist and is looking for trusted home service experts.";

  const companyRow = company
    ? `<tr>
        <td style="padding:12px 16px;font-size:14px;color:#6b7280;border-bottom:1px solid #f3f4f6;width:140px;">Company</td>
        <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;font-weight:600;">${company}</td>
      </tr>`
    : "";

  const phoneRow = phone
    ? `<tr>
        <td style="padding:12px 16px;font-size:14px;color:#6b7280;border-bottom:1px solid #f3f4f6;width:140px;">Phone</td>
        <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;font-weight:600;">${phone}</td>
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
                  <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;font-weight:600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:14px;color:#6b7280;border-bottom:1px solid #f3f4f6;width:140px;">Email</td>
                  <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;font-weight:600;">
                    <a href="mailto:${email}" style="color:#005864;text-decoration:none;">${email}</a>
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

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, userType } = body;

    if (!name || !email || !userType) {
      return Response.json(
        { error: "Name, email, and user type are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!["expert", "homeowner"].includes(userType)) {
      return Response.json(
        { error: "Invalid user type." },
        { status: 400 }
      );
    }

    const isExpert = userType === "expert";
    const subjectLine = isExpert
      ? `New Expert Waitlist Signup — ${name}`
      : `New Homeowner Waitlist Signup — ${name}`;

    const msg = {
      to: "info@nexahomeapp.com",
      from: {
        email: "no-reply@nexahomeapp.com",
        name: "NexaHome Waitlist",
      },
      subject: subjectLine,
      html: buildEmailHtml({ name, email, phone, company, userType }),
    };

    await sgMail.send(msg);

    return Response.json(
      { message: "Successfully joined the waitlist!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "SendGrid Error:",
      error?.response?.body || error.message
    );

    return Response.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
