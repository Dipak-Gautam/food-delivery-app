function generateOTP() {
  const randomCode = Math.floor(1000 + Math.random() * 9000);
  return randomCode.toString();
}
export default generateOTP;
