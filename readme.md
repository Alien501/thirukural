# Thriukral API
It is an API developed to access thirukural and its contents efficiently. Before moving to documentation I would like to thank [Thirukkural repo](https://github.com/tk120404/thirukkural) by [tk120404](https://github.com/tk120404) and [tshrinivasan](https://github.com/tshrinivasan) for such a vast compilation of Thirukurals, chapter, subgroups and everything.

# Backend
- Techstack:
    1. Nodejs
    2. ExpressJs
- Command to start server
    1. `git clone https://github.com/Alien501/thirukural`
    2. `cd backend`
    3. `npm install`
    4. `npm run dev` (Deveopment mode)
    5. `npm run start` (Production)
- Thats it, now the server will be running on `https://localhost:3000`

    ## End Points
    For now only GET methods had been developed, POST, PUT, will be considered in future.

    1. To get all data from details.json

        ```
        GET /api/v1/getdetail
        ```
    2. To get details like
        - அதிகாரம்/Chapter/Adhigaram,
        - இயல்/ChapterGroup/Iyal,
        - பால்/Section/Paal.

        1. அதிகாரம்/Chapter/Adhigaram
            ```
            GET /adhigaram?no=<Adhigaram No>
            ```