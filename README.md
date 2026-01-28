A high-performance, accessible, and SEO-optimized personal portfolio website built with Astro, React, and Sanity CMS.

This project utilizes Island Architecture to deliver static HTML by default, hydrating interactive components (like navigation, forms, and animations) only when necessary. It is structured as a monorepo containing both the frontend application and the backend CMS studio.

# Tech Stack

## Frontend

- Framework: Astro v5
- UI Library: React v19
- Styling: Tailwind CSS v4
- Components: Shadcn UI
- Animations: Magic UI, Framer Motion, CSS Native Scroll Snapping
- Language: TypeScript

## Backend (CMS)

- Platform: Sanity.io
- Query Language: GROQ
- Language: TypeScript


# Key Features

- Performance: Static site generation (SSG) for fast load times and high Lighthouse scores.
- CMS Integration: Content (Bio, Experience, Education, Projects) is managed via Sanity Studio.
- Interactive UI: Includes horizontal drag-to-scroll project carousel, blur-fade entrance animations, and sticky sidebars.
- Theming: System-aware dark and light mode toggle.
- Responsive: Mobile-first design with a custom accessible navigation drawer.
- Contact: Functional contact form using Web3Forms.

# Project Structure

This repository follows a monorepo structure:

```Plaintext
/
├── backend/            # Sanity Studio (Content Management System)
│   ├── schemaTypes/    # Database Schemas (Profile, Projects, Experience, Education)
│   └── sanity.config.ts
│
└── frontend/           # Astro Application
    ├── public/         # Static assets (Favicon, Resume)
    ├── src/
    │   ├── components/ # React & Astro Components
    │   ├── layouts/    # Page Shells
    │   ├── pages/      # File-based Routing
    │   ├── styles/     # Tailwind Configuration
    │   └── lib/        # Sanity Client & Utilities
    └── astro.config.mjs
```

# Prerequisites

- Node.js (v18 or later)
- npm or pnpm
- Git

# Getting Started

1. Clone the Repository

```Bash
git clone <repository-url>
cd <repository-folder>
```

2. Setup the Backend (Sanity CMS)

Navigate to the backend directory, install dependencies, and start the local studio.

```Bash
cd backend
npm install
npm run dev
```

The Sanity Studio will start at http://localhost:3333. You will need to log in and create a new project if one is not already linked.

Important: To allow your frontend to fetch data, you must add your frontend URL to the Sanity CORS settings.

1. Go to https://www.sanity.io/manage
2. Select your project.
3. Go to the API tab.
4. Under CORS Origins, add http://localhost:4321 (and your production domain later).
5. Select "Allow credentials".
6. Setup the Frontend (Astro)

Open a new terminal window, navigate to the frontend directory, and install dependencies.

```bash
cd frontend
npm install
```

4. Configure Environment Variables

Create a .env file inside the frontend/ directory. You will need your Project ID from the Sanity Dashboard and a Web3Forms access key.

```Bash
# frontend/.env
PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id"
PUBLIC_SANITY_DATASET="production"
PUBLIC_WEB3FORM_KEY="your_web3forms_access_key"
```

5. Run the Application

Start the Astro development server:

```Bash
npm run dev
```

The application will be available at http://localhost:4321.
# Content Management

The content is defined by schemas in backend/schemaTypes/. The available content types are:

- Profile: General site information (Name, Bio, Headline, Resume URL, Social Links).
- Experience: Work history with support for start/end dates and logos.
- Education: Academic history supporting multiple qualifications per institute.
- DevProject: Case studies for projects including tech stack, gallery, and links.

To update content, visit your local Sanity Studio (http://localhost:3333) or your deployed Studio URL.

# Deployment

## Deploying the Backend

To host the Sanity Studio interface, run the following command from the backend/ directory:

```Bash
cd backend
npx sanity deploy
```
  
Follow the prompts to choose a hostname (e.g., your-name.sanity.studio).
## Deploying the Frontend

The frontend is optimized for deployment on Vercel.

1. Push your code to a Git provider (GitHub/GitLab).
2. Import the repository into Vercel.
3. Root Directory: Change the root directory setting in Vercel to frontend.
4. Environment Variables: Add the variables from your local .env file to the Vercel project settings.
5. Deploy.

Note: After deploying the frontend, remember to add your new production domain (e.g., https://your-site.vercel.app) to the Sanity CORS Origins list.

# License

This project is open-source and available under the MIT License.