import React from "react";

const Blog = () => {
    return (
        <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
            <div class="grid grid-cols-1 gap-24 md:grid-cols-1">
                <div>
                    <h1 class="mb-6 text-2xl font-light text-gray-900 md:text-3xl">
                        Questions & Answers
                    </h1>
                    <p class="mt-10 mb-3 font-semibold text-black-900">
                        Difference between authentication & authorization......
                    </p>
                    <p class="text-black-600">
                        Authorization
                        the process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization.

                        Authentication
                        Authentication means confirming your own identity, while authorization means granting access to the system. In simple terms, authentication is the process of verifying who you are, while authorization is the process of verifying what you have access to
                    </p>
                    <p class="mt-10 mb-3 font-semibold text-black-900">
                        why are using firebase......what other options do you have to implement authentication....????
                    </p>
                    <p class="text-black-600">

                    </p>

                </div>
            </div>
        </section>
    );
};

export default Blog;
