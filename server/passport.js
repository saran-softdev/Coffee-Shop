const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require("dotenv").config();

const userDataModel = require("./src/model/user.modal");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ["profile"]
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        userDataModel.findOne({ googleId: profile.id }).then((currentUser) => {
          if (currentUser) {
            done(null, currentUser);
          } else {
            userDataModel
              .create({
                userName: profile.displayName,
                googleId: profile.id,
                email: profile.emails[0].value,
                userProfile: profile.photos[0].value
              })
              .then((newUser) => {
                done(null, newUser);
              });
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  )
);

// Serialize the user to store their unique identifier in the session (e.g., user ID)
passport.serializeUser((user, done) => {
  done(null, user._id); // Adjust this based on your user data structure
});

// Deserialize the user from the session using the unique identifier
passport.deserializeUser(async (id, done) => {
  try {
    const user = await userDataModel.findById(id);
    done(null, user);
  } catch (err) {
    console.error(err);
    done(err, null);
  }
});
