const functions = require("firebase-functions");

exports.beforeCreate = functions.auth.user().beforeCreate((user, context) => {
  return {
    customClaims: {
      admin: true,
    },
  };
});
