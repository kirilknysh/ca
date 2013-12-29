using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Web.WebPages.OAuth;
using ca.Models;

namespace ca {
    public static class AuthConfig {
        public static void RegisterAuth() {
            // To let users of this site log in using their accounts from other sites such as Microsoft, Facebook, and Twitter,
            // you must update this site. For more information visit http://go.microsoft.com/fwlink/?LinkID=252166

            //OAuthWebSecurity.RegisterMicrosoftClient(
            //    clientId: "",
            //    clientSecret: "");

            OAuthWebSecurity.RegisterFacebookClient(
                appId: "659022654109831",
                appSecret: "a976a01d356d36b3f4ab73a4a4f63ed9");

            OAuthWebSecurity.RegisterTwitterClient(
                consumerKey: "ZZ4twtX1E7lLd2I1UKjOdA",
                consumerSecret: "CryOUCyEy0PZODVoPF3UEBolVTru708SbPFvDlf03s");

            OAuthWebSecurity.RegisterGoogleClient();
        }
    }
}
