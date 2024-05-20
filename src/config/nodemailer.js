import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sg2304366@gmail.com",
    pass: "tqamydmoxybzvylx",
  },
});

export const mailOptions = {
  from: "sg2304366@gmail.com",
  to: "sg2304366@gmail.com",
};
