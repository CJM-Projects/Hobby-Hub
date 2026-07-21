# Hobby-Hub
Hobby Hub is a full‑stack hobby discovery platform built collaboratively using C#, ASP.NET Core, React, TypeScript, and Tailwind CSS.  
Users can browse hobbies, filter by category and price, and complete a short quiz that recommends hobbies matched to their interests and preferences.  
Each hobby includes a beginner‑friendly YouTube guide, helping users get started quickly and confidently.  
The platform also features weekly trending hobbies generated through deterministic randomisation, ensuring fresh inspiration every time users visit.

# Features
* Personalised Quiz that recommends hobbies based on user preferences
* Browse All Hobbies with category and price filtering
* Beginner YouTube Guides embedded directly into each hobby page
* Weekly Trending Hobbies using deterministic randomisation
* Accessible UI following WCAG principles
* Responsive Frontend built with React + Tailwind CSS
* RESTful API built with ASP.NET Core and Entity Framework
* Strongly Typed Frontend using TypeScript models
* Health checks (/health)

# Full‑Stack Tech Summary

| Layer | Technologies |
| --- | --- |
| **Frontend** | React, TypeScript, Tailwind CSS |
| **Backend** | C#, ASP.NET Core Web API (.NET 8) |
| **Data** | JSON file storage |
| **ORM** | Entity Framework Core |
| **Testing** | NUnit |
| **Tools** | Figma, Jira |


# Running Hobby Hub Locally
Hobby Hub contains both the ASP.NET Core API and the React and TypeScript frontend inside the same repository.
To run the project locally, start both parts side‑by‑side.

1. Start the Backend
Open the solution in Visual Studio and press the green Run button (HTTPS profile).
This will start the API at: https://localhost:7203.

2. Start the Frontend
In a terminal:
  cd hobby-hub-frontend
  npm install
  npm run dev
This will start the frontend at: https://localhost:5173.

3. Using the App
Once both servers are running:
* Visit https://localhost:5173 on a web browser to use the app.

# Testing
The backend uses NUnit for testing accross service, repository and controller layers.
