2. # RESTful API Activity - John Harvey Revilloza 
3. ## Best Practices Implementation
4. **1. Environment Variables:**
5. - Why did we put `BASE_URI` in `.env` instead of hardcoding it?
6. - Answer: We put the BASE URI in the environment file so it is easier to change when needed.using an environment variable is more practical because it separates configuration from the actual logic of the program.
7. **2. Resource Modeling:**
8. - Why did we use plural nouns (e.g., `/dishes`) for our routes?
9. - Answer: Using plural nouns makes the routes consistent and clearer for users and developers. It also helps us easily identify when we are accessing all resources or just a specific one using an ID.
10. **3. Status Codes:**
11. - When do we use `201 Created` vs `200 OK`?
    - Answer: We use 201 Created when a new resource is successfully added, such as creating a new record using a POST request. We use 200 OK when the request is successful but does not create something new, like fetching or updating existing data.
12. - Why is it important to return `404` instead of just an empty array or a generic error?
13. - Answer: Using the correct status code like 404 makes error handling better and more accurate. It helps the client understand what went wrong and allows the system to respond properly.
14.
15. **4. Testing:**
16. - (Paste a screenshot of a successful GET request here)
