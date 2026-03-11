 # RESTful API Activity - John Harvey Revilloza
 ## Best Practices Implementation
**1. Environment Variables:**
 - Why did we put `BASE_URI` in `.env` instead of hardcoding it?
 - Answer: We put the BASE URI in the environment file so it is easier to change when needed.using an environment variable is more practical because it separates configuration from the actual logic of the program.
**2. Resource Modeling:**
 - Why did we use plural nouns (e.g., `/dishes`) for our routes?
 - Answer: Using plural nouns makes the routes consistent and clearer for users and developers. It also helps us easily identify when we are accessing all resources or just a specific one using an ID.
**3. Status Codes:**
 - When do we use `201 Created` vs `200 OK`?
    - Answer: We use 201 Created when a new resource is successfully added, such as creating a new record using a POST request. We use 200 OK when the request is successful but does not create something new, like fetching or updating existing data.
 - Why is it important to return `404` instead of just an empty array or a generic error?
 - Answer: Using the correct status code like 404 makes error handling better and more accurate. It helps the client understand what went wrong and allows the system to respond properly.

 **4. Testing:**
 "Why did I choose to Embed the [Review/Tag/Log]?"
    I choose to embed the review tag because it belongs specifically to that specific dish only.
    o "Why did I choose to Reference the [Chef/User/Guest]?"
    I choose to reerence the chef because chefs exist even if they are not around and multiple dishes can be made by one chef.

Submission Checklist & README.md 
Update your README.md with the following questions to prove your 
understanding: 
1. [ /] Code runs via npm run dev with no errors. 
2. [ /] Registration and Login endpoints are functional. 
3. [ /] Middleware correctly blocks unauthorized users. 
4. [ /] GitHub Repo link submitted. 
5. [ /] README.md updated with the following answers: 
README.md Questions: 
1. Authentication vs Authorization: 
o What is the difference between Authentication and Authorization in our 
code? 
o Answer: In our code, Authentication is the process of verifying who a user is ( by checking their email and password to issue a JWT token), while Authorization is the process of verifying what a user is allowed to do (checking if their specific role, like "admin," has permission to access a certain route).
2. Security (bcrypt): 
o Why did we use bcryptjs instead of saving passwords as plain text in 
MongoDB? 
o Answer: We use bcryptjs because saving passwords as plain text  is a major security risk.Bcryptjs protects users by converting their passwords into a cryptographic hash making it more secure.
3. JWT Structure: 
o What does the protect middleware do when it receives a JWT from the 
client? 
o Answer: the middleware decodes the user’s ID from the payload, fetches that user from the database, and attaches their information to the req.user object so that the next functions in the route know exactly who is making the request.
