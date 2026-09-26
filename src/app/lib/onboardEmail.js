import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const onboardingSuccessEmail = (user) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Welcome to QuerLabs</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f4f7fb;
    font-family:Arial, Helvetica, sans-serif;
    color:#0f172a;
  "
>

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="background:#f4f7fb;padding:40px 16px;"
  >
    <tr>
      <td align="center">

        <!-- MAIN CARD -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width:620px;
            background:#ffffff;
            border-radius:18px;
            overflow:hidden;
            border:1px solid #e5eaf1;
          "
        >

          <!-- HEADER -->
          <tr>
            <td
              style="
                padding:30px 36px;
                background:#0f172a;
              "
            >

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>

                  <td>
                    <div
                      style="
                        font-size:24px;
                        font-weight:700;
                        letter-spacing:-0.8px;
                        color:#ffffff;
                      "
                    >
                      Quer<span style="color:#3b82f6;">Labs</span>
                    </div>

                    <div
                      style="
                        margin-top:6px;
                        font-size:12px;
                        color:#94a3b8;
                        letter-spacing:0.5px;
                      "
                    >
                      BUILD • LEARN • GROW
                    </div>
                  </td>

                  <td align="right">
                    <div
                      style="
                        display:inline-block;
                        padding:7px 11px;
                        border-radius:20px;
                        background:#172554;
                        color:#60a5fa;
                        font-size:11px;
                        font-weight:600;
                      "
                    >
                      PROFILE READY
                    </div>
                  </td>

                </tr>
              </table>

            </td>
          </tr>


          <!-- HERO -->
          <tr>
            <td style="padding:42px 36px 20px;">

              <div
                style="
                  width:52px;
                  height:52px;
                  line-height:52px;
                  text-align:center;
                  border-radius:15px;
                  background:#eff6ff;
                  color:#2563eb;
                  font-size:25px;
                "
              >
                ✓
              </div>

              <h1
                style="
                  margin:22px 0 10px;
                  font-size:30px;
                  line-height:1.2;
                  letter-spacing:-1px;
                  color:#0f172a;
                "
              >
                You're officially ready,
                ${user.fullName || "there"}.
              </h1>

              <p
                style="
                  margin:0;
                  font-size:15px;
                  line-height:1.7;
                  color:#64748b;
                "
              >
                Your QuerLabs profile is complete and your
                interview preparation journey can now begin.
              </p>

            </td>
          </tr>


          <!-- DIVIDER -->
          <tr>
            <td style="padding:0 36px;">
              <div
                style="
                  height:1px;
                  background:#e2e8f0;
                "
              ></div>
            </td>
          </tr>


          <!-- PROFILE SUMMARY -->
          <tr>
            <td style="padding:28px 36px 10px;">

              <p
                style="
                  margin:0 0 15px;
                  font-size:11px;
                  font-weight:700;
                  letter-spacing:1.2px;
                  color:#2563eb;
                "
              >
                YOUR PREPARATION PROFILE
              </p>


              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                  background:#f8fafc;
                  border:1px solid #e2e8f0;
                  border-radius:14px;
                "
              >

                <tr>
                  <td
                    style="
                      padding:16px 18px;
                      border-bottom:1px solid #e2e8f0;
                    "
                  >
                    <span style="font-size:12px;color:#64748b;">
                      Target Role
                    </span>

                    <br />

                    <strong
                      style="
                        display:inline-block;
                        margin-top:4px;
                        font-size:14px;
                        color:#0f172a;
                      "
                    >
                      ${user.targetJobRole || "Your selected role"}
                    </strong>
                  </td>
                </tr>


                <tr>
                  <td
                    style="
                      padding:16px 18px;
                      border-bottom:1px solid #e2e8f0;
                    "
                  >
                    <span style="font-size:12px;color:#64748b;">
                      Target Experience
                    </span>

                    <br />

                    <strong
                      style="
                        display:inline-block;
                        margin-top:4px;
                        font-size:14px;
                        color:#0f172a;
                      "
                    >
                      ${user.targetExperience || "Selected level"}
                    </strong>
                  </td>
                </tr>


                <tr>
                  <td style="padding:16px 18px;">

                    <span style="font-size:12px;color:#64748b;">
                      Companies
                    </span>

                    <br />

                    <strong
                      style="
                        display:inline-block;
                        margin-top:4px;
                        font-size:14px;
                        color:#0f172a;
                      "
                    >
                      ${
                        user.targetCompanies?.join(", ") ||
                        "Your selected companies"
                      }
                    </strong>

                  </td>
                </tr>

              </table>

            </td>
          </tr>


          <!-- MESSAGE -->
          <tr>
            <td style="padding:25px 36px 10px;">

              <p
                style="
                  margin:0;
                  font-size:14px;
                  line-height:1.75;
                  color:#475569;
                "
              >
                Your profile information has been securely saved.
                From here, QuerLabs will use your goals and background
                to help create a more focused interview preparation
                experience for you.
              </p>

            </td>
          </tr>


          <!-- CTA -->
          <tr>
            <td align="center" style="padding:30px 36px 38px;">

              <a
                href="https://interviewproof.querlabs.com/dashboard"
                style="
                  display:inline-block;
                  padding:14px 28px;
                  border-radius:10px;
                  background:#2563eb;
                  color:#ffffff;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:700;
                "
              >
                Go to My Dashboard →
              </a>

            </td>
          </tr>


          <!-- FOOTER -->
          <tr>
            <td
              style="
                padding:25px 36px;
                background:#f8fafc;
                border-top:1px solid #e2e8f0;
              "
            >

              <p
                style="
                  margin:0;
                  font-size:12px;
                  line-height:1.6;
                  color:#64748b;
                  text-align:center;
                "
              >
                You're receiving this email because you completed
                your profile on QuerLabs.
              </p>

              <p
                style="
                  margin:12px 0 0;
                  font-size:11px;
                  color:#94a3b8;
                  text-align:center;
                "
              >
                © ${new Date().getFullYear()} QuerLabs.
                All rights reserved.
              </p>

            </td>
          </tr>

        </table>


        <!-- OUTSIDE FOOTER -->

        <p
          style="
            margin:20px 0 0;
            font-size:11px;
            color:#94a3b8;
            text-align:center;
          "
        >
          QuerLabs · Interview Preparation Platform
        </p>

      </td>
    </tr>
  </table>

</body>
</html>
`;
};

export async function sendOnboardingSuccessEmail(email, user) {
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: [email],
    subject: "Your QuerLabs profile is ready 🚀",
    html: onboardingSuccessEmail(user),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}