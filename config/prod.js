//prod.js -- production keys here
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleClientIDProd:'677000195047-dq8eihngvnraqmavp5d44o6eias83eb7.apps.googleusercontent.com',
    googleClientSecretProd: 'zxivJX90EdZL8t4cUVGWpJVB',
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    mongoProdURI: 'mongodb+srv://myuser-prod:sBQUaRPkbhIuZK52@cluster0-csh5r.mongodb.net/test?retryWrites=true&w=majority',
};