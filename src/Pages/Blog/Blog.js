import React from "react";

const Blog = () => {
    return (
        <div className="container">
            <h2 className="text-center text-success">
                Difference between Authentication and Authorization
            </h2>


            <h3>
                While authentication and authorization are often used interchangeably, they are separate processes used to protect an organization from cyber-attacks. As data breaches continue to escalate in both frequency and scope, authentication and authorization are the first line of defense to prevent confidential data from falling into the wrong hands. As a result, strong authentication and authorization methods should be a critical part of every organizations overall security strategy.
                Authentication, in the form of a key. The lock on the door only grants access to someone with the correct key in much the same way that a system only grants access to users who have the correct credentials.
                Authorization, in the form of permissions. Once inside, the person has the authorization to access the kitchen and open the cupboard that holds the pet food. The person may not have permission to go into the bedroom for a quick nap.
            </h3>

            <h2 className="text-center text-success">
                Why are you using firebase???
            </h2>

            <h3>
                Firebase helps you build and run successful apps. Backed by Google, loved by developers. Accelerate app development with fully managed backend infrastructure. Learn more today. Boost App Engagement. Release Apps Confidently.Get started by Product or Platform Develop High-Quality apps, fast
            </h3>
            <h2 className="text-center text-success">
                What other options do you have to implement authentication?
            </h2>
            <h3>
                1.Auth0
                2.Okta
                3.Passport
                4.Keycloak
            </h3>
            <h2 className="text-center text-success">
                What other services does firebase provide other than authentication???
            </h2>

            <h3>
                Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business...Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
            </h3>
        </div>
    );
};

export default Blog;
