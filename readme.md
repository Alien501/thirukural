
# 📜 Thirukural API

Thirukural API is developed to provide efficient access to the Thirukkural and its contents. Special thanks to [Thirukkural repo](https://github.com/tk120404/thirukkural) by [tk120404](https://github.com/tk120404) and [tshrinivasan](https://github.com/tshrinivasan) for their comprehensive compilation of Thirukurals, chapters, subgroups, and more.

## Backend

### 💻 Tech Stack
1. Node.js
2. Express.js

### 🚀 Commands to Start the Server
1. Clone the repository:
    ```
    git clone https://github.com/Alien501/thirukural
    ```
2. Navigate to the backend directory:
    ```
    cd backend
    ```
3. Install the dependencies:
    ```
    npm install
    ```
4. Start the server in development mode:
    ```
    npm run dev
    ```
5. Start the server in production mode:
    ```
    npm run start
    ```

The server will be running on `https://localhost:3000`.

## 📚 API Endpoints

Currently, only GET methods are available. POST and PUT methods will be considered in the future.

### Fetch All Data
Retrieve all data from `details.json`.
```
GET /api/v1/getdetails
```

### Fetch Specific Details

1. **Fetch by Section (Paal)**
    ```
    GET /api/v1/getdetails/paal?name=<section_name>
    ```
    - Valid values for `section_name` are:
        - aram
        - porul
        - inbam

2. **Fetch All Sections**
    ```
    GET /api/v1/getdetails/paal/all
    ```

3. **Fetch by Chapter Group (Iyal)**
    ```
    GET /api/v1/getdetails/iyal?name=<chapter_group_name>
    ```
    - Valid values for `chapter_group_name` are:
        - pay: பாயிரவியல்
        - ila: இல்லறவியல்
        - thur: துறவறவியல்
        - ula: ஊழியல்
        - ara: அரசியல்
        - ama: அமைச்சியல்
        - aran: அரணியல்
        - koozh: கூழியல்
        - pada: படையில்
        - nat: நட்பியல்
        - kud: குடியியல்
        - ozh: ஒழிபியல்
        - kal: களவியல்
        - kar: கற்பியல்

4. **Fetch All Chapter Groups**
    ```
    GET /api/v1/getdetails/iyal/all
    ```

5. **Fetch by Chapter (Adhigaram)**
    ```
    GET /api/v1/getdetails/adhigaram?no=<Adhigaram_No>
    ```

6. **Fetch All Chapters**
    ```
    GET /api/v1/getdetails/adhigaram/all
    ```

### Fetch Kurals

1. **Fetch Random Kural**
    ```
    GET /api/v1/kural/random
    ```

2. **Fetch Kurals by Range**
    ```
    GET /api/v1/kural/range/:range
    ```
    - Example: `/api/v1/kural/range/1-10`

3. **Fetch Kural by Number**
    ```
    GET /api/v1/kural/:kno
    ```
    - Example: `/api/v1/kural/1`

---

## Frontend

This is the frontend of the Thirukural application, built using React, NextUI, and Tailwind CSS. The frontend provides a user-friendly interface to access and interact with the Thirukural API.

## 📦 Tech Stack

- React
- NextUI
- Tailwind CSS
- React Router
- Vercel Analytics

## 🚀 Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/Alien501/thirukural
    ```
2. Navigate to the project directory:
    ```bash
    cd client
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

The application will be running on `http://localhost:5173`.

## 🗺️ Routing

The application uses React Router for client-side routing. Below are the main routes:

- **Home Page:** `/`
- **About Page:** `/about`
- **Adhigaram Page:** `/adhigaram`
- **Kural Page:** `/kural/:r`
- **Iyal Page:** `/iyal`
- **Paal Page:** `/paal`

## 📊 Analytics

Vercel Analytics is integrated to track user interactions and gather insights.

## 🎨 Styling

The application leverages NextUI for UI components and Tailwind CSS for utility-first styling.


## 🤝 Contributions
Feel free to open issues or submit pull requests. Contributions are welcome!

---