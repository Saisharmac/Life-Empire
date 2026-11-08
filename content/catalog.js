/* LIFE & EMPIRE detailed content catalogue v4.0. Curated game records; official references and limitations are in SOURCES.md. */
window.LIFE_EMPIRE_CONTENT = {
  "schemaVersion": 4,
  "schoolTypes": [
    {
      "id": "government",
      "name": "Government school",
      "fee": 0,
      "quality": 48,
      "teacherSupport": 1,
      "scholarship": 0,
      "desc": "Low direct fees; facilities and support vary by district."
    },
    {
      "id": "aided",
      "name": "Government-aided school",
      "fee": 1800,
      "quality": 57,
      "teacherSupport": 1.05,
      "scholarship": 0.15,
      "desc": "Moderate facilities and fee support."
    },
    {
      "id": "private",
      "name": "Private school",
      "fee": 6200,
      "quality": 66,
      "teacherSupport": 1.12,
      "scholarship": 0,
      "desc": "More activities and structured coaching; household fees are higher."
    },
    {
      "id": "elite",
      "name": "Premium residential school",
      "fee": 18500,
      "quality": 78,
      "teacherSupport": 1.22,
      "scholarship": 0.08,
      "desc": "Strong facilities and networks, but high cost and workload."
    }
  ],
  "streams": [
    {
      "id": "science-pcm",
      "name": "Science · PCM",
      "subjects": [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English",
        "Computer Science"
      ],
      "skills": [
        "science",
        "tech",
        "math"
      ],
      "desc": "Engineering, physical sciences, computing and selected defence pathways."
    },
    {
      "id": "science-pcb",
      "name": "Science · PCB",
      "subjects": [
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Psychology"
      ],
      "skills": [
        "science",
        "biology"
      ],
      "desc": "Medicine, health sciences, life sciences and research."
    },
    {
      "id": "science-pcmb",
      "name": "Science · PCMB",
      "subjects": [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "English"
      ],
      "skills": [
        "science",
        "math",
        "biology"
      ],
      "desc": "Broad science option with a heavier academic workload."
    },
    {
      "id": "commerce-math",
      "name": "Commerce with Mathematics",
      "subjects": [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Mathematics",
        "English"
      ],
      "skills": [
        "finance",
        "business",
        "math"
      ],
      "desc": "Finance, economics, commerce, analytics, management and professional accounting."
    },
    {
      "id": "commerce",
      "name": "Commerce",
      "subjects": [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Entrepreneurship",
        "English"
      ],
      "skills": [
        "finance",
        "business"
      ],
      "desc": "Accounting, trade, business, management and entrepreneurship."
    },
    {
      "id": "humanities",
      "name": "Humanities / Arts",
      "subjects": [
        "History",
        "Political Science",
        "Geography",
        "Sociology",
        "English"
      ],
      "skills": [
        "arts",
        "communication",
        "research"
      ],
      "desc": "Law, civil services, social sciences, media, teaching and public policy."
    },
    {
      "id": "vocational",
      "name": "Vocational / Skill Studies",
      "subjects": [
        "English",
        "Applied Mathematics",
        "Vocational Specialisation",
        "Entrepreneurship"
      ],
      "skills": [
        "tech",
        "craft",
        "business"
      ],
      "desc": "Applied trade, diploma, technician and employment-first routes."
    }
  ],
  "exams": [
    {
      "id": "jee-main",
      "name": "JEE Main",
      "minAge": 16,
      "maxAge": 22,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "prepSkill": "science",
      "base": 20,
      "description": "Engineering entrance assessment used for NIT/IIIT and as the first stage for JEE Advanced."
    },
    {
      "id": "jee-advanced",
      "name": "JEE Advanced",
      "minAge": 17,
      "maxAge": 22,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "requiresExam": "jee-main",
      "requiredScore": 62,
      "prepSkill": "science",
      "base": 12,
      "description": "Highly selective engineering entrance route; requires a strong JEE Main result in this simulation."
    },
    {
      "id": "bitsat",
      "name": "BITSAT",
      "minAge": 17,
      "maxAge": 23,
      "streams": [
        "science-pcm"
      ],
      "prepSkill": "science",
      "base": 25,
      "description": "Private university engineering and science entrance route."
    },
    {
      "id": "neet-ug",
      "name": "NEET UG",
      "minAge": 17,
      "maxAge": 23,
      "streams": [
        "science-pcb",
        "science-pcmb"
      ],
      "prepSkill": "science",
      "base": 18,
      "description": "Medical and allied-health entrance examination."
    },
    {
      "id": "cuet-ug",
      "name": "CUET UG",
      "minAge": 17,
      "maxAge": 25,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities"
      ],
      "prepSkill": "arts",
      "base": 32,
      "description": "Common university admission route across a range of undergraduate programmes."
    },
    {
      "id": "clat-ug",
      "name": "CLAT UG",
      "minAge": 17,
      "maxAge": 25,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities"
      ],
      "prepSkill": "communication",
      "base": 28,
      "description": "Law entrance route for participating National Law Universities."
    },
    {
      "id": "ailet",
      "name": "AILET",
      "minAge": 17,
      "maxAge": 25,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities"
      ],
      "prepSkill": "communication",
      "base": 22,
      "description": "Separate law entrance route used by National Law University Delhi."
    },
    {
      "id": "nda",
      "name": "NDA written examination",
      "minAge": 16,
      "maxAge": 19,
      "streams": [
        "science-pcm",
        "science-pcmb",
        "science-pcb",
        "commerce-math",
        "commerce",
        "humanities"
      ],
      "prepSkill": "discipline",
      "base": 28,
      "description": "Defence officer-entry written selection; service and medical standards also apply."
    },
    {
      "id": "ca-foundation",
      "name": "CA Foundation",
      "minAge": 17,
      "maxAge": 30,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "prepSkill": "finance",
      "base": 25,
      "description": "Entry assessment for the chartered accountancy pathway.",
      "grantsCredential": "ca-foundation-pass"
    },
    {
      "id": "cat",
      "name": "CAT",
      "minAge": 20,
      "maxAge": 40,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "requiresDegree": true,
      "prepSkill": "finance",
      "base": 25,
      "description": "MBA entrance test; business schools also consider academics, interviews and other profile factors."
    },
    {
      "id": "gate",
      "name": "GATE",
      "minAge": 21,
      "maxAge": 40,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "requiresDegree": true,
      "prepSkill": "science",
      "base": 24,
      "description": "Postgraduate engineering/science and selected recruitment pathway."
    },
    {
      "id": "upsc-cse",
      "name": "UPSC Civil Services Preliminary",
      "minAge": 21,
      "maxAge": 32,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "requiresDegree": true,
      "prepSkill": "arts",
      "base": 20,
      "description": "National civil-services selection pathway with multiple stages and limited attempts.",
      "threshold": 64
    },
    {
      "id": "ssc-cgl",
      "name": "SSC CGL",
      "minAge": 18,
      "maxAge": 32,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "requiresDegree": true,
      "prepSkill": "finance",
      "base": 35,
      "description": "Graduate-level central government recruitment examination."
    },
    {
      "id": "ibps-po",
      "name": "IBPS PO",
      "minAge": 20,
      "maxAge": 30,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "requiresDegree": true,
      "prepSkill": "finance",
      "base": 32,
      "description": "Public-sector bank officer recruitment route."
    },
    {
      "id": "rbi-grade-b",
      "name": "RBI Grade B",
      "minAge": 21,
      "maxAge": 30,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "requiresDegree": true,
      "prepSkill": "finance",
      "base": 18,
      "description": "Central-bank officer selection; educational marks, written phases and interview matter."
    },
    {
      "id": "nid-dat",
      "name": "NID Design Aptitude Test",
      "minAge": 17,
      "maxAge": 25,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "prepSkill": "arts",
      "base": 26,
      "description": "Design aptitude, studio task and portfolio-oriented route."
    },
    {
      "id": "nata",
      "name": "NATA",
      "minAge": 17,
      "maxAge": 25,
      "streams": [
        "science-pcm"
      ],
      "prepSkill": "arts",
      "base": 22,
      "description": "Architecture aptitude and drawing assessment; institution-specific requirements also apply."
    },
    {
      "id": "uceed",
      "name": "UCEED",
      "minAge": 17,
      "maxAge": 23,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities"
      ],
      "prepSkill": "arts",
      "base": 25,
      "description": "Design aptitude route for participating design programmes."
    },
    {
      "id": "xat",
      "name": "XAT",
      "minAge": 20,
      "maxAge": 35,
      "requiresDegree": true,
      "prepSkill": "business",
      "base": 25,
      "description": "Postgraduate management entrance assessment used by XLRI and other participating schools."
    },
    {
      "id": "nmat",
      "name": "NMAT",
      "minAge": 20,
      "maxAge": 35,
      "requiresDegree": true,
      "prepSkill": "business",
      "base": 28,
      "description": "Management admissions test used by participating business schools; requirements vary by institute."
    },
    {
      "id": "snap",
      "name": "SNAP",
      "minAge": 20,
      "maxAge": 35,
      "requiresDegree": true,
      "prepSkill": "business",
      "base": 28,
      "description": "Management admissions test for participating Symbiosis programmes."
    },
    {
      "id": "cuet-pg",
      "name": "CUET PG",
      "minAge": 20,
      "maxAge": 50,
      "requiresDegree": true,
      "prepSkill": "arts",
      "base": 30,
      "description": "Postgraduate common entrance route across participating universities and programmes."
    },
    {
      "id": "cmat",
      "name": "CMAT",
      "minAge": 20,
      "maxAge": 35,
      "requiresDegree": true,
      "prepSkill": "business",
      "base": 27,
      "description": "National-level management admission test accepted by participating institutions."
    },
    {
      "id": "viteee",
      "name": "VITEEE",
      "minAge": 17,
      "maxAge": 24,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "prepSkill": "science",
      "base": 26,
      "description": "Private engineering entrance examination used by VIT; cycle-specific eligibility and counselling rules apply."
    },
    {
      "id": "srmjeee",
      "name": "SRMJEEE",
      "minAge": 17,
      "maxAge": 24,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "prepSkill": "science",
      "base": 24,
      "description": "SRM engineering entrance route; institution-specific admission rules apply."
    },
    {
      "id": "met",
      "name": "Manipal Entrance Test",
      "minAge": 17,
      "maxAge": 24,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "prepSkill": "science",
      "base": 24,
      "description": "Entrance assessment used for selected Manipal programmes."
    },
    {
      "id": "wbjee",
      "name": "WBJEE",
      "minAge": 17,
      "maxAge": 24,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "prepSkill": "science",
      "base": 25,
      "description": "West Bengal engineering and technology admission route."
    },
    {
      "id": "mht-cet",
      "name": "MHT CET",
      "minAge": 17,
      "maxAge": 24,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "prepSkill": "science",
      "base": 26,
      "description": "Maharashtra state entrance route for selected technical programmes."
    },
    {
      "id": "kcet",
      "name": "KCET",
      "minAge": 17,
      "maxAge": 24,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "prepSkill": "science",
      "base": 24,
      "description": "Karnataka state common entrance route for participating programmes."
    },
    {
      "id": "comedk",
      "name": "COMEDK UGET",
      "minAge": 17,
      "maxAge": 24,
      "streams": [
        "science-pcm",
        "science-pcmb"
      ],
      "prepSkill": "science",
      "base": 25,
      "description": "Consortium entrance route for participating private engineering colleges."
    },
    {
      "id": "ts-eapcet",
      "name": "TS EAPCET",
      "minAge": 17,
      "maxAge": 24,
      "streams": [
        "science-pcm",
        "science-pcmb",
        "science-pcb"
      ],
      "prepSkill": "science",
      "base": 28,
      "description": "Telangana state entrance route for participating engineering, agriculture and pharmacy programmes."
    },
    {
      "id": "ca-intermediate",
      "name": "CA Intermediate",
      "minAge": 18,
      "maxAge": 35,
      "streams": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "requiresCredential": "ca-foundation-pass",
      "prepSkill": "finance",
      "base": 16,
      "threshold": 58,
      "grantsCredential": "ca-intermediate-pass",
      "description": "Second stage of the simulated CA pathway. Requires the Foundation pass credential; candidates prepare for accounting, law, taxation, costing and finance."
    },
    {
      "id": "ca-final",
      "name": "CA Final",
      "minAge": 21,
      "maxAge": 40,
      "requiresCredential": "ca-practical-training",
      "requiresExam": "ca-intermediate",
      "prepSkill": "finance",
      "base": 10,
      "threshold": 65,
      "grantsCredential": "chartered-accountancy",
      "description": "Final professional assessment in this game pathway. The character must have passed Intermediate and completed the simulated practical-training requirement."
    },
    {
      "id": "aibe",
      "name": "All India Bar Examination (AIBE)",
      "minAge": 21,
      "maxAge": 55,
      "requiresCredential": "law-integrated",
      "prepSkill": "arts",
      "base": 20,
      "threshold": 56,
      "grantsCredential": "advocate-licence",
      "description": "Simulated post-LL.B. professional assessment for the advocate pathway. Real eligibility depends on the applicable Bar Council of India rules and recognised legal education."
    },
    {
      "id": "ctet",
      "name": "CTET / Teacher Eligibility Test",
      "minAge": 20,
      "maxAge": 55,
      "requiresCredential": "teacher-training",
      "prepSkill": "arts",
      "base": 24,
      "threshold": 54,
      "grantsCredential": "teacher-certification",
      "description": "A simplified teacher-eligibility assessment. Real CTET and state TET eligibility, paper level and qualification rules must be checked in the current notification."
    },
    {
      "id": "medical-registration",
      "name": "Medical Internship & Registration Assessment",
      "minAge": 23,
      "maxAge": 55,
      "requiresCredential": "mbbs",
      "prepSkill": "science",
      "base": 12,
      "threshold": 58,
      "grantsCredential": "medical-registration",
      "description": "A simplified completion and registration milestone after medical education and internship. Not a substitute for real university, internship or medical-council requirements."
    },
    {
      "id": "nursing-registration",
      "name": "Nursing Registration Assessment",
      "minAge": 21,
      "maxAge": 55,
      "requiresCredential": "nursing",
      "prepSkill": "science",
      "base": 18,
      "threshold": 55,
      "grantsCredential": "nurse-registration",
      "description": "A simplified professional registration milestone after a recognised nursing programme and required practical training."
    }
  ],
  "programmes": [
    {
      "id": "btech-cse",
      "name": "B.Tech · Computer Science",
      "level": 2,
      "field": "technology",
      "stream": [
        "science-pcm"
      ],
      "exam": "jee-main",
      "duration": 16,
      "fee": 18000,
      "skill": "tech",
      "credential": "btech-cse",
      "desc": "Programming, algorithms, systems, databases and software engineering.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "btech-core",
      "name": "B.Tech · Core Engineering",
      "level": 2,
      "field": "engineering",
      "stream": [
        "science-pcm"
      ],
      "exam": "jee-main",
      "duration": 16,
      "fee": 16000,
      "skill": "science",
      "credential": "btech-engineering",
      "desc": "Mathematics, physics, design, labs and engineering practice.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bsc-data",
      "name": "B.Sc. · Mathematics / Data Science",
      "level": 2,
      "field": "analytics",
      "stream": [
        "science-pcm",
        "commerce-math"
      ],
      "exam": "cuet-ug",
      "duration": 12,
      "fee": 9000,
      "skill": "finance",
      "credential": "bsc-data",
      "desc": "Statistics, mathematics, programming, inference and data analysis.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bcom",
      "name": "B.Com. · Commerce and Accounting",
      "level": 2,
      "field": "finance",
      "stream": [
        "commerce-math",
        "commerce",
        "science-pcm",
        "humanities"
      ],
      "exam": "cuet-ug",
      "duration": 12,
      "fee": 8500,
      "skill": "finance",
      "credential": "bcom",
      "desc": "Financial accounting, taxation, audit, business law and corporate finance.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bba",
      "name": "BBA · Business Administration",
      "level": 2,
      "field": "management",
      "stream": [
        "commerce-math",
        "commerce",
        "humanities",
        "science-pcm"
      ],
      "exam": "cuet-ug",
      "duration": 12,
      "fee": 15000,
      "skill": "business",
      "credential": "bba",
      "desc": "Management, marketing, operations, organisation and strategy.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "ba-economics",
      "name": "B.A. · Economics",
      "level": 2,
      "field": "economics",
      "stream": [
        "commerce-math",
        "science-pcm",
        "humanities"
      ],
      "exam": "cuet-ug",
      "duration": 12,
      "fee": 8500,
      "skill": "finance",
      "credential": "ba-economics",
      "desc": "Microeconomics, macroeconomics, statistics and public policy.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "ba-pol-sci",
      "name": "B.A. · Political Science / Public Policy",
      "level": 2,
      "field": "public-policy",
      "stream": [
        "humanities",
        "commerce",
        "science-pcm"
      ],
      "exam": "cuet-ug",
      "duration": 12,
      "fee": 8500,
      "skill": "arts",
      "credential": "ba-political-science",
      "desc": "Political institutions, constitutional systems, international relations and policy.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "mbbs",
      "name": "MBBS",
      "level": 2,
      "field": "healthcare",
      "stream": [
        "science-pcb",
        "science-pcmb"
      ],
      "exam": "neet-ug",
      "duration": 24,
      "fee": 24000,
      "skill": "science",
      "credential": "mbbs",
      "desc": "Medical sciences, clinical rotations, internship and professional registration pathway.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bsc-nursing",
      "name": "B.Sc. Nursing",
      "level": 2,
      "field": "healthcare",
      "stream": [
        "science-pcb",
        "science-pcmb"
      ],
      "exam": "neet-ug",
      "duration": 16,
      "fee": 14000,
      "skill": "science",
      "credential": "nursing",
      "desc": "Nursing science, patient care, clinical practice and licensing requirements.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "llb-integrated",
      "name": "B.A. LL.B. (Integrated)",
      "level": 2,
      "field": "law",
      "stream": [
        "humanities",
        "commerce",
        "commerce-math",
        "science-pcm"
      ],
      "exam": "clat-ug",
      "duration": 20,
      "fee": 22000,
      "skill": "communication",
      "credential": "law-integrated",
      "desc": "Five-year law pathway combining undergraduate study with legal education.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bdes",
      "name": "B.Des. · Communication / Product Design",
      "level": 2,
      "field": "design",
      "stream": [
        "science-pcm",
        "science-pcb",
        "commerce",
        "humanities",
        "vocational"
      ],
      "exam": "nid-dat",
      "duration": 16,
      "fee": 26000,
      "skill": "arts",
      "credential": "bdes",
      "desc": "Design methods, prototyping, visual communication, user research and portfolio.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "diploma-tech",
      "name": "Polytechnic Diploma · Engineering",
      "level": 1,
      "field": "engineering",
      "stream": [
        "science-pcm",
        "vocational"
      ],
      "exam": "merit",
      "duration": 12,
      "fee": 6500,
      "skill": "tech",
      "credential": "diploma-engineering",
      "desc": "Applied engineering, workshop practice and technician foundations.",
      "pathway": "Diploma / vocational entry",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "ca-path",
      "name": "Chartered Accountancy Professional Path",
      "level": 2,
      "field": "finance",
      "stream": [
        "science-pcm",
        "commerce-math",
        "commerce",
        "humanities"
      ],
      "exam": "ca-foundation",
      "duration": 20,
      "fee": 6500,
      "skill": "finance",
      "credential": "ca-path-study",
      "desc": "Staged professional route covering Foundation, Intermediate, supervised practical training and Final assessment. The final chartered-accountancy credential is granted only after the required exam and training milestones.",
      "pathway": "Professional qualification after Class 12",
      "workload": "High, project and research intensive"
    },
    {
      "id": "mba",
      "name": "MBA · Management",
      "level": 3,
      "field": "management",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "exam": "cat",
      "duration": 8,
      "fee": 58000,
      "skill": "business",
      "credential": "mba",
      "desc": "Postgraduate management with case work, internships, group work and placement.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "mtech",
      "name": "M.Tech. · Advanced Engineering",
      "level": 3,
      "field": "engineering",
      "stream": [
        "science-pcm"
      ],
      "exam": "gate",
      "duration": 8,
      "fee": 22000,
      "skill": "science",
      "credential": "mtech",
      "desc": "Advanced specialisation, laboratory work and research project.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "msc",
      "name": "M.Sc. · Science / Analytics",
      "level": 3,
      "field": "analytics",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math"
      ],
      "exam": "merit",
      "duration": 8,
      "fee": 18000,
      "skill": "science",
      "credential": "msc",
      "desc": "Advanced methods, quantitative research and specialisation.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "ma-public-policy",
      "name": "M.A. · Public Policy / Social Sciences",
      "level": 3,
      "field": "public-policy",
      "stream": [
        "science-pcm",
        "commerce",
        "commerce-math",
        "humanities"
      ],
      "exam": "merit",
      "duration": 8,
      "fee": 16000,
      "skill": "arts",
      "credential": "ma-public-policy",
      "desc": "Policy evaluation, research methods, governance and programme design.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "btech-electrical",
      "name": "B.Tech · Electrical Engineering",
      "level": 2,
      "field": "engineering",
      "stream": [
        "science-pcm"
      ],
      "duration": 16,
      "fee": 17500,
      "skill": "science",
      "credential": "btech-electrical",
      "desc": "Electrical machines, power systems, control, embedded systems and grid infrastructure.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "btech-electronics",
      "name": "B.Tech · Electronics & Communication",
      "level": 2,
      "field": "engineering",
      "stream": [
        "science-pcm"
      ],
      "duration": 16,
      "fee": 18000,
      "skill": "tech",
      "credential": "btech-electronics",
      "desc": "Semiconductors, signal processing, communications, embedded systems and hardware design.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "btech-mechanical",
      "name": "B.Tech · Mechanical Engineering",
      "level": 2,
      "field": "engineering",
      "stream": [
        "science-pcm"
      ],
      "duration": 16,
      "fee": 16000,
      "skill": "science",
      "credential": "btech-mechanical",
      "desc": "Thermodynamics, materials, manufacturing, CAD, mechanics and production engineering.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "btech-civil",
      "name": "B.Tech · Civil Engineering",
      "level": 2,
      "field": "engineering",
      "stream": [
        "science-pcm"
      ],
      "duration": 16,
      "fee": 15500,
      "skill": "science",
      "credential": "btech-civil",
      "desc": "Structures, geotechnics, surveying, transport, water and construction management.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "btech-chemical",
      "name": "B.Tech · Chemical Engineering",
      "level": 2,
      "field": "engineering",
      "stream": [
        "science-pcm"
      ],
      "duration": 16,
      "fee": 16500,
      "skill": "science",
      "credential": "btech-chemical",
      "desc": "Process engineering, fluid systems, reaction engineering, safety and plant operations.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bca",
      "name": "Bachelor of Computer Applications",
      "level": 2,
      "field": "technology",
      "stream": [
        "science-pcm",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "duration": 12,
      "fee": 12000,
      "skill": "tech",
      "credential": "bca",
      "desc": "Programming, databases, networks, web applications and software project work.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bsc-agriculture",
      "name": "B.Sc. · Agriculture",
      "level": 2,
      "field": "agriculture",
      "stream": [
        "science-pcb",
        "science-pcmb",
        "science-pcm",
        "vocational"
      ],
      "duration": 12,
      "fee": 9000,
      "skill": "science",
      "credential": "bsc-agriculture",
      "desc": "Crop science, soil, agronomy, irrigation, farm economics and extension.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bpharm",
      "name": "Bachelor of Pharmacy",
      "level": 2,
      "field": "healthcare",
      "stream": [
        "science-pcb",
        "science-pcmb",
        "science-pcm"
      ],
      "duration": 16,
      "fee": 22000,
      "skill": "science",
      "credential": "bpharm",
      "desc": "Pharmaceutical sciences, pharmacology, formulation, quality systems and pharmacy practice.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bpt",
      "name": "Bachelor of Physiotherapy",
      "level": 2,
      "field": "healthcare",
      "stream": [
        "science-pcb",
        "science-pcmb"
      ],
      "duration": 16,
      "fee": 16000,
      "skill": "science",
      "credential": "bpt",
      "desc": "Human anatomy, movement science, rehabilitation, clinical practice and supervised training.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bsc-biotech",
      "name": "B.Sc. · Biotechnology",
      "level": 2,
      "field": "science",
      "stream": [
        "science-pcb",
        "science-pcmb",
        "science-pcm"
      ],
      "duration": 12,
      "fee": 14000,
      "skill": "science",
      "credential": "bsc-biotech",
      "desc": "Molecular biology, genetics, biochemistry, microbiology and laboratory methods.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "ba-psychology",
      "name": "B.A. · Psychology",
      "level": 2,
      "field": "social-sciences",
      "stream": [
        "humanities",
        "commerce",
        "commerce-math",
        "science-pcb",
        "science-pcmb"
      ],
      "duration": 12,
      "fee": 10000,
      "skill": "arts",
      "credential": "ba-psychology",
      "desc": "Behaviour, cognition, research methods, development and applied psychology.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "ba-journalism",
      "name": "B.A. · Journalism & Mass Communication",
      "level": 2,
      "field": "media",
      "stream": [
        "humanities",
        "commerce",
        "commerce-math",
        "science-pcm"
      ],
      "duration": 12,
      "fee": 12500,
      "skill": "communication",
      "credential": "ba-journalism",
      "desc": "Reporting, media law, editing, production, digital storytelling and verification.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bsw",
      "name": "Bachelor of Social Work",
      "level": 2,
      "field": "social-sciences",
      "stream": [
        "humanities",
        "commerce",
        "science-pcb",
        "science-pcm"
      ],
      "duration": 12,
      "fee": 8500,
      "skill": "arts",
      "credential": "bsw",
      "desc": "Community development, case work, social policy, field practice and programme evaluation.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bcom-honours",
      "name": "B.Com. · Accounting & Finance Honours",
      "level": 2,
      "field": "finance",
      "stream": [
        "commerce",
        "commerce-math",
        "science-pcm",
        "humanities"
      ],
      "duration": 12,
      "fee": 10000,
      "skill": "finance",
      "credential": "bcom-honours",
      "desc": "Advanced financial accounting, audit, tax, corporate finance and analytics.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "barch",
      "name": "Bachelor of Architecture",
      "level": 2,
      "field": "architecture",
      "stream": [
        "science-pcm"
      ],
      "duration": 20,
      "fee": 24000,
      "skill": "arts",
      "credential": "barch",
      "desc": "Architectural design, building technology, structures, urban context and studio practice.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bsc-statistics",
      "name": "B.Sc. · Statistics",
      "level": 2,
      "field": "analytics",
      "stream": [
        "science-pcm",
        "commerce-math"
      ],
      "duration": 12,
      "fee": 9500,
      "skill": "finance",
      "credential": "bsc-statistics",
      "desc": "Probability, inference, regression, sampling, operations research and statistical computing.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bsc-physics",
      "name": "B.Sc. · Physics",
      "level": 2,
      "field": "science",
      "stream": [
        "science-pcm",
        "science-pcmb"
      ],
      "duration": 12,
      "fee": 9000,
      "skill": "science",
      "credential": "bsc-physics",
      "desc": "Mechanics, electromagnetism, quantum concepts, mathematical physics and laboratories.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "bsc-chemistry",
      "name": "B.Sc. · Chemistry",
      "level": 2,
      "field": "science",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb"
      ],
      "duration": 12,
      "fee": 9000,
      "skill": "science",
      "credential": "bsc-chemistry",
      "desc": "Organic, inorganic and physical chemistry, analytical techniques and laboratory safety.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high, including coursework and assessment"
    },
    {
      "id": "mcom",
      "name": "Master of Commerce",
      "level": 3,
      "field": "finance",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "duration": 8,
      "fee": 18000,
      "skill": "finance",
      "credential": "mcom",
      "desc": "Advanced accounting, tax, finance, research and business analysis.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "llm",
      "name": "Master of Laws",
      "level": 3,
      "field": "law",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "duration": 8,
      "fee": 26000,
      "skill": "arts",
      "credential": "llm",
      "desc": "Advanced legal research and specialisation after a recognised law degree.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "mtech-cse",
      "name": "M.Tech · Computer Science",
      "level": 3,
      "field": "technology",
      "stream": [
        "science-pcm"
      ],
      "duration": 8,
      "fee": 28000,
      "skill": "tech",
      "credential": "mtech-cse",
      "desc": "Advanced computing, systems, research and engineering specialisation.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "msc-data",
      "name": "M.Sc. · Data Science",
      "level": 3,
      "field": "analytics",
      "stream": [
        "science-pcm",
        "commerce-math"
      ],
      "duration": 8,
      "fee": 24000,
      "skill": "finance",
      "credential": "msc-data",
      "desc": "Statistics, machine learning, databases, experimentation and applied modelling.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "mca",
      "name": "Master of Computer Applications",
      "level": 3,
      "field": "technology",
      "stream": [
        "science-pcm",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "duration": 8,
      "fee": 22000,
      "skill": "tech",
      "credential": "mca",
      "desc": "Software engineering, algorithms, databases, cloud systems and applied computing.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "ma-economics",
      "name": "M.A. · Economics",
      "level": 3,
      "field": "finance",
      "stream": [
        "science-pcm",
        "commerce-math",
        "commerce",
        "humanities"
      ],
      "duration": 8,
      "fee": 20000,
      "skill": "finance",
      "credential": "ma-economics",
      "desc": "Microeconomics, macroeconomics, econometrics, public finance and policy.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "pg-supply-chain",
      "name": "PG Diploma · Supply Chain & Logistics",
      "level": 3,
      "field": "logistics",
      "stream": [
        "science-pcm",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "duration": 4,
      "fee": 19000,
      "skill": "business",
      "credential": "pg-supply-chain",
      "desc": "Procurement, inventory, warehousing, freight, forecasting and operations analytics.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "mba-finance",
      "name": "MBA · Finance",
      "level": 3,
      "field": "management",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "duration": 8,
      "fee": 42000,
      "skill": "finance",
      "credential": "mba-finance",
      "desc": "Corporate finance, valuation, capital markets, risk, treasury and strategy.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "mba-operations",
      "name": "MBA · Operations & Supply Chain",
      "level": 3,
      "field": "management",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "duration": 8,
      "fee": 42000,
      "skill": "business",
      "credential": "mba-operations",
      "desc": "Operations research, manufacturing, logistics, quality and supply networks.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "mba-hr",
      "name": "MBA · Human Resources",
      "level": 3,
      "field": "management",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "duration": 8,
      "fee": 38000,
      "skill": "communication",
      "credential": "mba-hr",
      "desc": "People strategy, employment relations, talent acquisition, compensation and organisational development.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "mdes",
      "name": "Master of Design",
      "level": 3,
      "field": "design-media",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "duration": 8,
      "fee": 36000,
      "skill": "arts",
      "credential": "mdes",
      "desc": "Design research, product systems, interaction, service design and prototyping.",
      "pathway": "Postgraduate / advanced route",
      "workload": "High, project and research intensive"
    },
    {
      "id": "d-el-ed",
      "name": "Diploma in Elementary Education (D.El.Ed.)",
      "level": 2,
      "field": "education",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "exam": "merit",
      "duration": 8,
      "fee": 9500,
      "skill": "arts",
      "credential": "d-el-ed",
      "desc": "Elementary teacher preparation with child development, pedagogy, school practice and supervised teaching.",
      "pathway": "After Class 12",
      "workload": "Moderate with school-practice blocks"
    },
    {
      "id": "bed-secondary",
      "name": "Bachelor of Education (B.Ed.)",
      "level": 3,
      "field": "education",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "exam": "cuet-pg",
      "duration": 8,
      "fee": 18500,
      "skill": "arts",
      "credential": "bed-secondary",
      "desc": "Professional teacher education after a recognised bachelor degree, including pedagogy, assessment and teaching practice.",
      "pathway": "Postgraduate professional qualification",
      "workload": "High during teaching practice"
    },
    {
      "id": "bsc-agri-hons",
      "name": "B.Sc. (Hons.) Agriculture",
      "level": 2,
      "field": "agriculture",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "vocational"
      ],
      "exam": "cuet-ug",
      "duration": 16,
      "fee": 14500,
      "skill": "science",
      "credential": "bsc-agriculture-hons",
      "desc": "Crop science, soil, agronomy, horticulture, agricultural economics and field practicum.",
      "pathway": "Undergraduate route",
      "workload": "Field and laboratory intensive"
    },
    {
      "id": "bsc-nutrition",
      "name": "B.Sc. Nutrition & Dietetics",
      "level": 2,
      "field": "healthcare",
      "stream": [
        "science-pcb",
        "science-pcmb"
      ],
      "exam": "cuet-ug",
      "duration": 12,
      "fee": 16000,
      "skill": "science",
      "credential": "bsc-nutrition",
      "desc": "Nutrition science, food systems, public health, diet planning and supervised practice.",
      "pathway": "Undergraduate route",
      "workload": "Moderate with lab/practical work"
    },
    {
      "id": "bba-fintech",
      "name": "BBA Financial Technology",
      "level": 2,
      "field": "finance",
      "stream": [
        "commerce-math",
        "commerce",
        "science-pcm",
        "science-pcmb"
      ],
      "exam": "cuet-ug",
      "duration": 12,
      "fee": 22000,
      "skill": "finance",
      "credential": "bba-fintech",
      "desc": "Financial services, analytics, payments, risk, compliance and technology-enabled business.",
      "pathway": "Undergraduate route",
      "workload": "Moderate to high"
    },
    {
      "id": "bsc-cybersecurity",
      "name": "B.Sc. Cybersecurity",
      "level": 2,
      "field": "technology",
      "stream": [
        "science-pcm",
        "science-pcmb",
        "vocational"
      ],
      "exam": "cuet-ug",
      "duration": 12,
      "fee": 21000,
      "skill": "tech",
      "credential": "bsc-cybersecurity",
      "desc": "Networks, secure coding, systems, incident response and digital forensics foundations.",
      "pathway": "Undergraduate route",
      "workload": "Lab-intensive"
    },
    {
      "id": "llb-three-year",
      "name": "LL.B. (Three-year)",
      "level": 2,
      "field": "law",
      "stream": [
        "science-pcm",
        "science-pcb",
        "science-pcmb",
        "commerce-math",
        "commerce",
        "humanities",
        "vocational"
      ],
      "exam": "merit",
      "duration": 12,
      "fee": 19000,
      "skill": "arts",
      "credential": "law-three-year",
      "desc": "Professional legal education after graduation, with doctrinal subjects, drafting, moots and internships.",
      "pathway": "Graduate-entry professional route",
      "workload": "Reading, case analysis and internships"
    },
    {
      "id": "pg-data-analytics",
      "name": "Postgraduate Diploma in Data Analytics",
      "level": 3,
      "field": "analytics",
      "stream": [
        "science-pcm",
        "science-pcmb",
        "commerce-math",
        "commerce"
      ],
      "exam": "cuet-pg",
      "duration": 8,
      "fee": 28000,
      "skill": "finance",
      "credential": "pg-data-analytics",
      "desc": "Applied statistics, SQL, Python, BI, experimentation and business data projects.",
      "pathway": "Postgraduate professional route",
      "workload": "Project intensive"
    },
    {
      "id": "bba-hr",
      "name": "BBA Human Resource Management",
      "level": 2,
      "field": "management",
      "stream": [
        "commerce-math",
        "commerce",
        "humanities",
        "science-pcm",
        "science-pcmb"
      ],
      "exam": "cuet-ug",
      "duration": 12,
      "fee": 17500,
      "skill": "business",
      "credential": "bba-hr",
      "desc": "People operations, employment systems, organisational behaviour, HR analytics and labour relations.",
      "pathway": "Undergraduate route",
      "workload": "Moderate"
    }
  ],
  "institutions": [
    {
      "id": "iit-bombay",
      "name": "IIT Bombay",
      "type": "IIT",
      "city": "Mumbai",
      "selectivity": 96,
      "route": "jee-advanced",
      "fee": 22000,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "Highly selective public institute of technology with engineering, research and entrepreneurship ecosystems.",
      "annualFeeEstimate": 88000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-delhi",
      "name": "IIT Delhi",
      "type": "IIT",
      "city": "Delhi",
      "selectivity": 95,
      "route": "jee-advanced",
      "fee": 22000,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "Public technology institute with strong engineering, computing and interdisciplinary research.",
      "annualFeeEstimate": 88000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-madras",
      "name": "IIT Madras",
      "type": "IIT",
      "city": "Chennai",
      "selectivity": 95,
      "route": "jee-advanced",
      "fee": 21000,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "Public engineering and research institute with a strong technology and incubation ecosystem.",
      "annualFeeEstimate": 84000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-kanpur",
      "name": "IIT Kanpur",
      "type": "IIT",
      "city": "Kanpur",
      "selectivity": 93,
      "route": "jee-advanced",
      "fee": 20000,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "Public engineering and science institute with rigorous technical programmes.",
      "annualFeeEstimate": 80000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-hyderabad",
      "name": "IIT Hyderabad",
      "type": "IIT",
      "city": "Hyderabad",
      "selectivity": 91,
      "route": "jee-advanced",
      "fee": 19000,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "Public technology institute with modern engineering, design and research programmes.",
      "annualFeeEstimate": 76000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-kharagpur",
      "name": "IIT Kharagpur",
      "type": "IIT",
      "city": "Kharagpur",
      "selectivity": 92,
      "route": "jee-advanced",
      "fee": 19000,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "Broad public technology institute with multiple engineering disciplines.",
      "annualFeeEstimate": 76000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nit-warangal",
      "name": "NIT Warangal",
      "type": "NIT",
      "city": "Warangal",
      "selectivity": 87,
      "route": "jee-main",
      "fee": 14500,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "National Institute of Technology with engineering and technology programmes.",
      "annualFeeEstimate": 58000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nit-trichy",
      "name": "NIT Tiruchirappalli",
      "type": "NIT",
      "city": "Tiruchirappalli",
      "selectivity": 89,
      "route": "jee-main",
      "fee": 15000,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "National Institute of Technology with competitive engineering programmes.",
      "annualFeeEstimate": 60000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nit-surathkal",
      "name": "NIT Karnataka Surathkal",
      "type": "NIT",
      "city": "Mangaluru",
      "selectivity": 88,
      "route": "jee-main",
      "fee": 14500,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "National Institute of Technology with engineering and coastal campus.",
      "annualFeeEstimate": 58000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nit-calicut",
      "name": "NIT Calicut",
      "type": "NIT",
      "city": "Kozhikode",
      "selectivity": 85,
      "route": "jee-main",
      "fee": 13500,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "National Institute of Technology with engineering and architecture programmes.",
      "annualFeeEstimate": 54000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iiit-hyderabad",
      "name": "IIIT Hyderabad",
      "type": "IIIT",
      "city": "Hyderabad",
      "selectivity": 93,
      "route": "jee-main",
      "fee": 36000,
      "programmes": [
        "btech-cse"
      ],
      "description": "Research-focused institute specialising in computing, AI and information technology.",
      "annualFeeEstimate": 144000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iiit-delhi",
      "name": "IIIT Delhi",
      "type": "IIIT",
      "city": "Delhi",
      "selectivity": 89,
      "route": "jee-main",
      "fee": 33000,
      "programmes": [
        "btech-cse"
      ],
      "description": "Technology institute with computing, design and applied research programmes.",
      "annualFeeEstimate": 132000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "bits-pilani",
      "name": "BITS Pilani",
      "type": "Private deemed university",
      "city": "Pilani",
      "selectivity": 88,
      "route": "bitsat",
      "fee": 92000,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "Private university with its own admission test and structured industry exposure.",
      "annualFeeEstimate": 368000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "jntuh",
      "name": "JNTU Hyderabad",
      "type": "State technical university",
      "city": "Hyderabad",
      "selectivity": 73,
      "route": "ts-eapcet",
      "fee": 12000,
      "programmes": [
        "btech-cse",
        "btech-core"
      ],
      "description": "State technical university with engineering and applied technology pathways.",
      "annualFeeEstimate": 48000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "osmania",
      "name": "Osmania University",
      "type": "Public university",
      "city": "Hyderabad",
      "selectivity": 66,
      "route": "ts-eapcet",
      "fee": 7500,
      "programmes": [
        "bcom",
        "bba",
        "ba-economics",
        "ba-pol-sci",
        "bsc-data",
        "bsc-agri-hons",
        "bba-fintech",
        "bsc-cybersecurity",
        "mca",
        "pg-data-analytics",
        "bed-secondary",
        "llb-three-year"
      ],
      "description": "Public university with broad undergraduate and postgraduate disciplines.",
      "annualFeeEstimate": 30000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "du-srcc",
      "name": "Shri Ram College of Commerce",
      "type": "Public college",
      "city": "Delhi",
      "selectivity": 91,
      "route": "cuet-ug",
      "fee": 8500,
      "programmes": [
        "bcom",
        "ba-economics"
      ],
      "description": "Selective commerce and economics college with a strong academic and alumni network.",
      "annualFeeEstimate": 34000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "du-hindu",
      "name": "Hindu College",
      "type": "Public college",
      "city": "Delhi",
      "selectivity": 86,
      "route": "cuet-ug",
      "fee": 8000,
      "programmes": [
        "bcom",
        "ba-economics",
        "ba-pol-sci"
      ],
      "description": "University college with humanities, science and commerce programmes.",
      "annualFeeEstimate": 32000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "christ",
      "name": "Christ University",
      "type": "Private university",
      "city": "Bengaluru",
      "selectivity": 75,
      "route": "merit",
      "fee": 28000,
      "programmes": [
        "bba",
        "bcom",
        "ba-economics",
        "bdes"
      ],
      "description": "Private university with structured undergraduate programmes and interview-based selection.",
      "annualFeeEstimate": 112000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "uoh",
      "name": "University of Hyderabad",
      "type": "Central university",
      "city": "Hyderabad",
      "selectivity": 82,
      "route": "cuet-ug",
      "fee": 9000,
      "programmes": [
        "bsc-data",
        "ba-economics",
        "ba-pol-sci",
        "msc",
        "ma-public-policy"
      ],
      "description": "Central university with postgraduate, science and interdisciplinary research strengths.",
      "annualFeeEstimate": 36000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iima",
      "name": "IIM Ahmedabad",
      "type": "IIM",
      "city": "Ahmedabad",
      "selectivity": 98,
      "route": "cat",
      "fee": 145000,
      "programmes": [
        "mba"
      ],
      "description": "Highly selective management institute; selection is multi-stage and considers academics and interview performance.",
      "annualFeeEstimate": 580000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iimb",
      "name": "IIM Bangalore",
      "type": "IIM",
      "city": "Bengaluru",
      "selectivity": 98,
      "route": "cat",
      "fee": 150000,
      "programmes": [
        "mba"
      ],
      "description": "Management institute with strong postgraduate, leadership and industry programmes.",
      "annualFeeEstimate": 600000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iimc",
      "name": "IIM Calcutta",
      "type": "IIM",
      "city": "Kolkata",
      "selectivity": 97,
      "route": "cat",
      "fee": 148000,
      "programmes": [
        "mba"
      ],
      "description": "Management institute with quantitative, finance and leadership focus.",
      "annualFeeEstimate": 592000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iiml",
      "name": "IIM Lucknow",
      "type": "IIM",
      "city": "Lucknow",
      "selectivity": 94,
      "route": "cat",
      "fee": 132000,
      "programmes": [
        "mba"
      ],
      "description": "Management institute with general management, analytics and industry exposure.",
      "annualFeeEstimate": 528000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iimk",
      "name": "IIM Kozhikode",
      "type": "IIM",
      "city": "Kozhikode",
      "selectivity": 93,
      "route": "cat",
      "fee": 129000,
      "programmes": [
        "mba"
      ],
      "description": "Management institute with leadership, communication and business programmes.",
      "annualFeeEstimate": 516000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iimidr",
      "name": "IIM Indore",
      "type": "IIM",
      "city": "Indore",
      "selectivity": 92,
      "route": "cat",
      "fee": 128000,
      "programmes": [
        "mba"
      ],
      "description": "Management institute with postgraduate and integrated management pathways.",
      "annualFeeEstimate": 512000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "fms-delhi",
      "name": "Faculty of Management Studies, Delhi",
      "type": "Public management school",
      "city": "Delhi",
      "selectivity": 96,
      "route": "cat",
      "fee": 18000,
      "programmes": [
        "mba"
      ],
      "description": "Public university management school with highly competitive admission and low tuition relative to many peers.",
      "annualFeeEstimate": 72000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "aiims-delhi",
      "name": "AIIMS New Delhi",
      "type": "Institute of National Importance",
      "city": "Delhi",
      "selectivity": 99,
      "route": "neet-ug",
      "fee": 6500,
      "programmes": [
        "mbbs"
      ],
      "description": "Highly selective medical institute with clinical training and research.",
      "annualFeeEstimate": 26000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "aiims-bibinagar",
      "name": "AIIMS Bibinagar",
      "type": "Institute of National Importance",
      "city": "Hyderabad",
      "selectivity": 91,
      "route": "neet-ug",
      "fee": 6000,
      "programmes": [
        "mbbs",
        "bsc-nursing"
      ],
      "description": "Public medical institute in Telangana with health-science education.",
      "annualFeeEstimate": 24000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "osmania-medical",
      "name": "Osmania Medical College",
      "type": "Public medical college",
      "city": "Hyderabad",
      "selectivity": 88,
      "route": "neet-ug",
      "fee": 9000,
      "programmes": [
        "mbbs"
      ],
      "description": "Public medical college with hospital-based clinical training.",
      "annualFeeEstimate": 36000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "gandhi-medical",
      "name": "Gandhi Medical College",
      "type": "Public medical college",
      "city": "Hyderabad",
      "selectivity": 87,
      "route": "neet-ug",
      "fee": 9000,
      "programmes": [
        "mbbs"
      ],
      "description": "Public medical college with clinical education and hospital exposure.",
      "annualFeeEstimate": 36000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "cmc-vellore",
      "name": "Christian Medical College Vellore",
      "type": "Private minority medical institution",
      "city": "Vellore",
      "selectivity": 95,
      "route": "neet-ug",
      "fee": 18000,
      "programmes": [
        "mbbs",
        "bsc-nursing"
      ],
      "description": "Medical institution with demanding clinical and service-oriented training.",
      "annualFeeEstimate": 72000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nlsiu",
      "name": "NLSIU Bengaluru",
      "type": "National Law University",
      "city": "Bengaluru",
      "selectivity": 97,
      "route": "clat-ug",
      "fee": 45000,
      "programmes": [
        "llb-integrated"
      ],
      "description": "Selective national law university with legal research, mooting and internships.",
      "annualFeeEstimate": 180000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nalsar",
      "name": "NALSAR University of Law",
      "type": "National Law University",
      "city": "Hyderabad",
      "selectivity": 94,
      "route": "clat-ug",
      "fee": 42000,
      "programmes": [
        "llb-integrated"
      ],
      "description": "National law university with advocacy, policy and corporate-law pathways.",
      "annualFeeEstimate": 168000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nlu-delhi",
      "name": "National Law University Delhi",
      "type": "National Law University",
      "city": "Delhi",
      "selectivity": 96,
      "route": "ailet",
      "fee": 44000,
      "programmes": [
        "llb-integrated"
      ],
      "description": "National law university with its own AILET admission process.",
      "annualFeeEstimate": 176000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nid-ahmedabad",
      "name": "National Institute of Design Ahmedabad",
      "type": "Institute of National Importance",
      "city": "Ahmedabad",
      "selectivity": 94,
      "route": "nid-dat",
      "fee": 39000,
      "programmes": [
        "bdes"
      ],
      "description": "Design institute with studio, portfolio and project-centred education.",
      "annualFeeEstimate": 156000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "polytechnic-hyd",
      "name": "Government Polytechnic Hyderabad",
      "type": "Public polytechnic",
      "city": "Hyderabad",
      "selectivity": 57,
      "route": "merit",
      "fee": 2500,
      "programmes": [
        "diploma-tech"
      ],
      "description": "Applied diploma route with practical engineering and technician skills.",
      "annualFeeEstimate": 10000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "icai",
      "name": "Institute of Chartered Accountants of India",
      "type": "Professional institute",
      "city": "Delhi",
      "selectivity": 82,
      "route": "ca-foundation",
      "fee": 6500,
      "programmes": [
        "ca-path"
      ],
      "description": "Professional accounting qualification pathway with staged examinations and practical training.",
      "annualFeeEstimate": 26000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-guwahati",
      "name": "IIT Guwahati",
      "type": "IIT",
      "city": "Guwahati",
      "selectivity": 92,
      "route": "jee-advanced",
      "fee": 21000,
      "programmes": [
        "btech-cse",
        "btech-core",
        "btech-electrical",
        "btech-electronics",
        "btech-mechanical",
        "btech-civil"
      ],
      "description": "Public institute with engineering, design, science and research programmes.",
      "annualFeeEstimate": 84000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-roorkee",
      "name": "IIT Roorkee",
      "type": "IIT",
      "city": "Roorkee",
      "selectivity": 93,
      "route": "jee-advanced",
      "fee": 21000,
      "programmes": [
        "btech-cse",
        "btech-core",
        "btech-electrical",
        "btech-electronics",
        "btech-civil",
        "barch"
      ],
      "description": "Engineering, architecture, applied sciences and infrastructure research.",
      "annualFeeEstimate": 84000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-gandhinagar",
      "name": "IIT Gandhinagar",
      "type": "IIT",
      "city": "Gandhinagar",
      "selectivity": 88,
      "route": "jee-advanced",
      "fee": 19000,
      "programmes": [
        "btech-cse",
        "btech-core",
        "btech-electrical",
        "btech-mechanical"
      ],
      "description": "Interdisciplinary technology, engineering and liberal education.",
      "annualFeeEstimate": 76000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-bhubaneswar",
      "name": "IIT Bhubaneswar",
      "type": "IIT",
      "city": "Bhubaneswar",
      "selectivity": 87,
      "route": "jee-advanced",
      "fee": 18000,
      "programmes": [
        "btech-cse",
        "btech-core",
        "btech-electrical",
        "btech-civil"
      ],
      "description": "Engineering and applied research institute.",
      "annualFeeEstimate": 72000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-patna",
      "name": "IIT Patna",
      "type": "IIT",
      "city": "Patna",
      "selectivity": 86,
      "route": "jee-advanced",
      "fee": 18000,
      "programmes": [
        "btech-cse",
        "btech-core",
        "btech-electronics"
      ],
      "description": "Computing, engineering and interdisciplinary sciences.",
      "annualFeeEstimate": 72000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iit-indore",
      "name": "IIT Indore",
      "type": "IIT",
      "city": "Indore",
      "selectivity": 90,
      "route": "jee-advanced",
      "fee": 19000,
      "programmes": [
        "btech-cse",
        "btech-core",
        "btech-electrical"
      ],
      "description": "Technology, engineering and research-focused public institute.",
      "annualFeeEstimate": 76000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nit-warangal-ext",
      "name": "National Institute of Technology Warangal",
      "type": "NIT",
      "city": "Warangal",
      "selectivity": 86,
      "route": "jee-main",
      "fee": 16000,
      "programmes": [
        "btech-cse",
        "btech-core",
        "btech-electrical",
        "btech-mechanical",
        "btech-civil"
      ],
      "description": "Public technical institute with engineering, computing and management programmes.",
      "annualFeeEstimate": 64000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "vit-vellore",
      "name": "VIT Vellore",
      "type": "Private University",
      "city": "Vellore",
      "selectivity": 76,
      "route": "viteee",
      "fee": 44000,
      "programmes": [
        "btech-cse",
        "btech-electronics",
        "btech-mechanical",
        "bca",
        "btech-electrical"
      ],
      "description": "Private multidisciplinary university with its own entrance and admission rules; game route is simplified.",
      "annualFeeEstimate": 176000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "srm-ktr",
      "name": "SRM Institute of Science and Technology",
      "type": "Private University",
      "city": "Chennai",
      "selectivity": 72,
      "route": "srmjeee",
      "fee": 39000,
      "programmes": [
        "btech-cse",
        "btech-electronics",
        "btech-mechanical",
        "bca",
        "bpharm"
      ],
      "description": "Private university with engineering, computing, health and science programmes.",
      "annualFeeEstimate": 156000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "manipal",
      "name": "Manipal Academy of Higher Education",
      "type": "Private University",
      "city": "Manipal",
      "selectivity": 78,
      "route": "met",
      "fee": 52000,
      "programmes": [
        "btech-cse",
        "btech-electronics",
        "bca",
        "bpharm",
        "bpt",
        "bsc-biotech"
      ],
      "description": "Private university with engineering, medicine, pharmacy and allied health.",
      "annualFeeEstimate": 208000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "amrita",
      "name": "Amrita Vishwa Vidyapeetham",
      "type": "Private University",
      "city": "Coimbatore",
      "selectivity": 80,
      "route": "merit",
      "fee": 35000,
      "programmes": [
        "btech-cse",
        "btech-core",
        "bpharm",
        "bsc-biotech",
        "bpt"
      ],
      "description": "Multi-campus university with engineering, health and research programmes.",
      "annualFeeEstimate": 140000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "thapar",
      "name": "Thapar Institute of Engineering and Technology",
      "type": "Private University",
      "city": "Patiala",
      "selectivity": 79,
      "route": "merit",
      "fee": 48000,
      "programmes": [
        "btech-cse",
        "btech-electrical",
        "btech-electronics",
        "btech-mechanical"
      ],
      "description": "Private engineering university with technology and research programmes.",
      "annualFeeEstimate": 192000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "jadavpur",
      "name": "Jadavpur University",
      "type": "State University",
      "city": "Kolkata",
      "selectivity": 88,
      "route": "wbjee",
      "fee": 12000,
      "programmes": [
        "btech-cse",
        "btech-electrical",
        "btech-electronics",
        "btech-mechanical",
        "btech-civil",
        "ba-journalism"
      ],
      "description": "Public university with engineering, arts and science faculties.",
      "annualFeeEstimate": 48000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "bhu",
      "name": "Banaras Hindu University",
      "type": "Central University",
      "city": "Varanasi",
      "selectivity": 84,
      "route": "cuet-ug",
      "fee": 12000,
      "programmes": [
        "bsc-data",
        "bcom",
        "bba",
        "ba-economics",
        "ba-pol-sci",
        "bsc-agriculture",
        "bsc-physics",
        "bsc-chemistry",
        "bsc-biotech"
      ],
      "description": "Large central university with broad sciences, humanities, commerce and agriculture offerings.",
      "annualFeeEstimate": 48000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "jnu",
      "name": "Jawaharlal Nehru University",
      "type": "Central University",
      "city": "Delhi",
      "selectivity": 91,
      "route": "cuet-ug",
      "fee": 10000,
      "programmes": [
        "ba-pol-sci",
        "ba-economics",
        "ba-psychology",
        "ma-economics",
        "ma-public-policy"
      ],
      "description": "Social sciences, languages, international studies and research.",
      "annualFeeEstimate": 40000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "jamia",
      "name": "Jamia Millia Islamia",
      "type": "Central University",
      "city": "Delhi",
      "selectivity": 82,
      "route": "cuet-ug",
      "fee": 12000,
      "programmes": [
        "btech-cse",
        "bcom",
        "bba",
        "ba-journalism",
        "ba-psychology",
        "barch"
      ],
      "description": "Central university with engineering, humanities, media and architecture.",
      "annualFeeEstimate": 48000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "calcutta-university",
      "name": "University of Calcutta",
      "type": "State University",
      "city": "Kolkata",
      "selectivity": 78,
      "route": "cuet-ug",
      "fee": 9000,
      "programmes": [
        "bcom",
        "bcom-honours",
        "bsc-statistics",
        "bsc-physics",
        "bsc-chemistry",
        "ba-psychology"
      ],
      "description": "Public university with commerce, science and humanities programmes.",
      "annualFeeEstimate": 36000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "loyola-chennai",
      "name": "Loyola College",
      "type": "Autonomous College",
      "city": "Chennai",
      "selectivity": 82,
      "route": "merit",
      "fee": 14000,
      "programmes": [
        "bcom",
        "bcom-honours",
        "bba",
        "bsc-data",
        "ba-psychology",
        "ba-journalism"
      ],
      "description": "Autonomous college with commerce, science, social science and media programmes.",
      "annualFeeEstimate": 56000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "symbiosis",
      "name": "Symbiosis International University",
      "type": "Private University",
      "city": "Pune",
      "selectivity": 82,
      "route": "snap",
      "fee": 48000,
      "programmes": [
        "bba",
        "mba",
        "mba-finance",
        "mba-hr",
        "ba-journalism"
      ],
      "description": "Private university with management, law, media and social science pathways.",
      "annualFeeEstimate": 192000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nmims",
      "name": "SVKM NMIMS",
      "type": "Private University",
      "city": "Mumbai",
      "selectivity": 85,
      "route": "nmat",
      "fee": 55000,
      "programmes": [
        "bba",
        "bcom-honours",
        "mba",
        "mba-finance",
        "mba-hr",
        "bca"
      ],
      "description": "Private university with management, commerce, technology and professional programmes.",
      "annualFeeEstimate": 220000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "xlri",
      "name": "XLRI Jamshedpur",
      "type": "Business School",
      "city": "Jamshedpur",
      "selectivity": 94,
      "route": "xat",
      "fee": 68000,
      "programmes": [
        "mba",
        "mba-hr",
        "mba-operations"
      ],
      "description": "Selective management school with human resources and business programmes.",
      "annualFeeEstimate": 272000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "spjimr",
      "name": "SPJIMR Mumbai",
      "type": "Business School",
      "city": "Mumbai",
      "selectivity": 91,
      "route": "cat",
      "fee": 72000,
      "programmes": [
        "mba",
        "mba-finance",
        "mba-operations",
        "mba-hr"
      ],
      "description": "Management school with finance, operations and leadership specialisations.",
      "annualFeeEstimate": 288000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iim-shillong",
      "name": "IIM Shillong",
      "type": "IIM",
      "city": "Shillong",
      "selectivity": 89,
      "route": "cat",
      "fee": 62000,
      "programmes": [
        "mba",
        "mba-finance",
        "mba-operations"
      ],
      "description": "Public management institute with postgraduate management programmes.",
      "annualFeeEstimate": 248000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iim-udaipur",
      "name": "IIM Udaipur",
      "type": "IIM",
      "city": "Udaipur",
      "selectivity": 88,
      "route": "cat",
      "fee": 59000,
      "programmes": [
        "mba",
        "mba-operations",
        "mba-finance"
      ],
      "description": "Public management institute with analytics and operations focus.",
      "annualFeeEstimate": 236000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iim-raipur",
      "name": "IIM Raipur",
      "type": "IIM",
      "city": "Raipur",
      "selectivity": 87,
      "route": "cat",
      "fee": 57000,
      "programmes": [
        "mba",
        "mba-finance",
        "mba-hr"
      ],
      "description": "Public management institute with management and business programmes.",
      "annualFeeEstimate": 228000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "tiss",
      "name": "Tata Institute of Social Sciences",
      "type": "Deemed University",
      "city": "Mumbai",
      "selectivity": 89,
      "route": "cuet-pg",
      "fee": 26000,
      "programmes": [
        "ma-public-policy",
        "ma-economics",
        "ba-psychology",
        "bsw"
      ],
      "description": "Social sciences, public policy, labour studies and social work.",
      "annualFeeEstimate": 104000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iift-delhi",
      "name": "Indian Institute of Foreign Trade",
      "type": "Business School",
      "city": "Delhi",
      "selectivity": 89,
      "route": "cat",
      "fee": 68000,
      "programmes": [
        "mba",
        "mba-finance",
        "mba-operations"
      ],
      "description": "Management education focused on international business and trade.",
      "annualFeeEstimate": 272000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nlu-hyderabad",
      "name": "NALSAR University of Law",
      "type": "National Law University",
      "city": "Hyderabad",
      "selectivity": 92,
      "route": "clat-ug",
      "fee": 38000,
      "programmes": [
        "llb-integrated",
        "llm"
      ],
      "description": "National law university with legal education and research.",
      "annualFeeEstimate": 152000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nlu-bengaluru",
      "name": "National Law School of India University",
      "type": "National Law University",
      "city": "Bengaluru",
      "selectivity": 97,
      "route": "clat-ug",
      "fee": 42000,
      "programmes": [
        "llb-integrated",
        "llm"
      ],
      "description": "National law university with selective legal education and research.",
      "annualFeeEstimate": 168000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nlu-kolkata",
      "name": "NUJS Kolkata",
      "type": "National Law University",
      "city": "Kolkata",
      "selectivity": 91,
      "route": "clat-ug",
      "fee": 38000,
      "programmes": [
        "llb-integrated",
        "llm"
      ],
      "description": "National law university offering integrated law and postgraduate law programmes.",
      "annualFeeEstimate": 152000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "nid-bengaluru",
      "name": "National Institute of Design Bengaluru",
      "type": "Design Institute",
      "city": "Bengaluru",
      "selectivity": 90,
      "route": "nid-dat",
      "fee": 32000,
      "programmes": [
        "bdes",
        "mdes"
      ],
      "description": "Design education and applied product, communication and digital design.",
      "annualFeeEstimate": 128000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iiser-pune",
      "name": "IISER Pune",
      "type": "Research Institute",
      "city": "Pune",
      "selectivity": 90,
      "route": "merit",
      "fee": 18000,
      "programmes": [
        "bsc-physics",
        "bsc-chemistry",
        "bsc-biotech",
        "bsc-statistics"
      ],
      "description": "Research-intensive science education with laboratory and research training.",
      "annualFeeEstimate": 72000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "iiser-bhopal",
      "name": "IISER Bhopal",
      "type": "Research Institute",
      "city": "Bhopal",
      "selectivity": 86,
      "route": "merit",
      "fee": 16000,
      "programmes": [
        "bsc-physics",
        "bsc-chemistry",
        "bsc-biotech",
        "bsc-statistics"
      ],
      "description": "Research-intensive undergraduate science and interdisciplinary studies.",
      "annualFeeEstimate": 64000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "icar-hyd",
      "name": "Professor Jayashankar Telangana State Agricultural University",
      "type": "State University",
      "city": "Hyderabad",
      "selectivity": 74,
      "route": "ts-eapcet",
      "fee": 9000,
      "programmes": [
        "bsc-agriculture"
      ],
      "description": "Agricultural education, extension and applied farm research.",
      "annualFeeEstimate": 36000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "osmania-extra",
      "name": "Osmania University",
      "type": "State University",
      "city": "Hyderabad",
      "selectivity": 76,
      "route": "ts-eapcet",
      "fee": 8500,
      "programmes": [
        "bcom-honours",
        "bca",
        "bsc-statistics",
        "bsc-physics",
        "bsc-chemistry",
        "ba-psychology",
        "ma-economics"
      ],
      "description": "Public university offering broad undergraduate and postgraduate education.",
      "annualFeeEstimate": 34000,
      "applicationNotes": "Illustrative simulation listing. Verify the current prospectus, entrance route, category rules, seat matrix and fee schedule before treating this as real admissions advice."
    },
    {
      "id": "ignou-education",
      "name": "Indira Gandhi National Open University · School of Education",
      "type": "Central open university",
      "city": "New Delhi",
      "selectivity": 55,
      "route": "merit",
      "fee": 8200,
      "programmes": [
        "d-el-ed",
        "bed-secondary",
        "ma-public-policy",
        "ma-economics"
      ],
      "description": "Open and distance learning model with flexible study windows; practical and regulatory requirements still apply.",
      "annualFeeEstimate": 32800,
      "applicationNotes": "Illustrative simulation entry. Actual programme availability, recognition, practical placements and admission rules must be checked in the current prospectus."
    },
    {
      "id": "du-school",
      "name": "University of Delhi · Representative Colleges",
      "type": "Central university system",
      "city": "Delhi",
      "selectivity": 84,
      "route": "cuet-ug",
      "fee": 14500,
      "programmes": [
        "bcom",
        "bba",
        "ba-economics",
        "ba-pol-sci",
        "bcom-honours",
        "ba-journalism",
        "bsc-statistics",
        "bba-hr"
      ],
      "description": "Representative central-university route for commerce, humanities, social sciences and selected undergraduate programmes.",
      "annualFeeEstimate": 58000,
      "applicationNotes": "Illustrative simulation entry. Seat allocation and course-specific eligibility depend on current CUET and university rules."
    },
    {
      "id": "andhra-university",
      "name": "Andhra University",
      "type": "State university",
      "city": "Visakhapatnam",
      "selectivity": 70,
      "route": "merit",
      "fee": 12500,
      "programmes": [
        "bcom",
        "bba",
        "ba-economics",
        "ba-pol-sci",
        "btech-core",
        "bsc-agri-hons",
        "bed-secondary",
        "llb-three-year"
      ],
      "description": "Broad state-university pathway spanning science, engineering, commerce, humanities and professional education.",
      "annualFeeEstimate": 50000,
      "applicationNotes": "Illustrative simulation entry. Programme entry tests and eligibility differ by course and year."
    },
    {
      "id": "pune-university",
      "name": "Savitribai Phule Pune University",
      "type": "State university",
      "city": "Pune",
      "selectivity": 74,
      "route": "mht-cet",
      "fee": 13800,
      "programmes": [
        "btech-core",
        "bca",
        "bcom",
        "bba",
        "bsc-data",
        "bsc-cybersecurity",
        "bed-secondary",
        "mca"
      ],
      "description": "Representative state-university pathway with technical, commerce and postgraduate programme choices.",
      "annualFeeEstimate": 55200,
      "applicationNotes": "Illustrative simulation entry. Not every listed course uses MHT-CET; consult the current department and admission notification."
    },
    {
      "id": "bangalore-university",
      "name": "Bengaluru City University / University Network",
      "type": "State university",
      "city": "Bengaluru",
      "selectivity": 70,
      "route": "merit",
      "fee": 13200,
      "programmes": [
        "bcom",
        "bba",
        "ba-economics",
        "bsc-data",
        "bsc-cybersecurity",
        "bba-fintech",
        "llb-three-year",
        "bed-secondary"
      ],
      "description": "Representative city university route for commerce, computing, humanities and professional programmes.",
      "annualFeeEstimate": 52800,
      "applicationNotes": "Illustrative game institution, not a specific live admission guarantee. Check the actual university and programme rules."
    },
    {
      "id": "regional-institute-education",
      "name": "Regional Institute of Education · Representative Route",
      "type": "Teacher education institute",
      "city": "Bhopal",
      "selectivity": 78,
      "route": "merit",
      "fee": 11500,
      "programmes": [
        "d-el-ed",
        "bed-secondary"
      ],
      "description": "Teacher education pathway with pedagogy, classroom practice and supervised teaching components.",
      "annualFeeEstimate": 46000,
      "applicationNotes": "Illustrative game institution. Real RIE programme offerings, entrance procedures and recognition are year-specific."
    },
    {
      "id": "hyderabad-govt-degree",
      "name": "Government Degree College · Hyderabad",
      "type": "Public college",
      "city": "Hyderabad",
      "selectivity": 58,
      "route": "merit",
      "fee": 1800,
      "programmes": [
        "bcom",
        "ba-economics",
        "ba-pol-sci",
        "bca",
        "bsc-statistics",
        "bba-hr"
      ],
      "description": "Lower-fee local degree route with practical access to commerce, humanities and selected applied programmes.",
      "annualFeeEstimate": 7200,
      "applicationNotes": "Representative simulation college; actual government college offerings and fees vary."
    },
    {
      "id": "hyderabad-technical",
      "name": "State Polytechnic & Technical College · Hyderabad",
      "type": "Public polytechnic",
      "city": "Hyderabad",
      "selectivity": 62,
      "route": "merit",
      "fee": 3500,
      "programmes": [
        "diploma-tech",
        "d-el-ed"
      ],
      "description": "Applied technical and vocational learning with an employment-first orientation.",
      "annualFeeEstimate": 14000,
      "applicationNotes": "Illustrative simulation route. Verify programme affiliation, seat availability and recognition."
    }
  ],
  "careerTracks": [
    {
      "id": "technology",
      "name": "Technology & Software",
      "description": "Build, secure and operate digital systems.",
      "roles": [
        "IT Support",
        "Junior Developer",
        "Software Engineer",
        "DevOps Engineer",
        "Engineering Manager",
        "CTO"
      ]
    },
    {
      "id": "engineering",
      "name": "Core Engineering",
      "description": "Design, build and maintain physical infrastructure and products.",
      "roles": [
        "Technician",
        "Graduate Engineer Trainee",
        "Design Engineer",
        "Project Engineer",
        "Senior Engineer",
        "Engineering Lead",
        "Plant Head",
        "VP Engineering"
      ]
    },
    {
      "id": "analytics",
      "name": "Data & Analytics",
      "description": "Turn data into decisions, forecasts and measurable outcomes.",
      "roles": [
        "MIS Executive",
        "Data Analyst",
        "Senior Data Analyst",
        "Product Analyst",
        "Analytics Manager"
      ]
    },
    {
      "id": "finance",
      "name": "Finance & Accounting",
      "description": "Manage accounts, capital, audit, investments and financial control.",
      "roles": [
        "Accounts Assistant",
        "Accounts Executive",
        "Audit Associate",
        "Financial Analyst",
        "Chartered Accountant",
        "Finance Manager",
        "Controller",
        "CFO"
      ]
    },
    {
      "id": "banking",
      "name": "Banking & Financial Services",
      "description": "Retail banking, credit, risk, treasury, compliance and institutional finance.",
      "roles": [
        "Banking Associate",
        "Credit Analyst",
        "Branch Manager",
        "Regional Banking Head",
        "Bank CEO"
      ]
    },
    {
      "id": "management",
      "name": "Management & Operations",
      "description": "Coordinate people, suppliers, processes, budgets and strategy.",
      "roles": [
        "Operations Associate",
        "Team Lead",
        "Business Analyst",
        "Operations Manager",
        "Plant Manager",
        "General Manager",
        "COO"
      ]
    },
    {
      "id": "marketing",
      "name": "Sales & Marketing",
      "description": "Find customers, price products, grow brands and manage channels.",
      "roles": [
        "Sales Associate",
        "Digital Marketing Executive",
        "Account Manager",
        "Brand Manager",
        "Regional Sales Manager",
        "Marketing Director",
        "Chief Growth Officer"
      ]
    },
    {
      "id": "healthcare",
      "name": "Healthcare & Medicine",
      "description": "Clinical care, diagnostics, nursing, public health and hospital operations.",
      "roles": [
        "Lab Technician",
        "Nursing Associate",
        "Clinical Research Assistant",
        "Registered Nurse",
        "Medical Officer",
        "Specialist Physician",
        "Hospital Administrator"
      ]
    },
    {
      "id": "law",
      "name": "Law & Legal Services",
      "description": "Legal research, contracts, litigation, compliance and policy.",
      "roles": [
        "Legal Assistant",
        "Paralegal",
        "Junior Advocate",
        "Associate Lawyer",
        "Corporate Counsel",
        "Senior Counsel",
        "Partner / Legal Director"
      ]
    },
    {
      "id": "public-service",
      "name": "Government & Public Service",
      "description": "Administration, regulation, public programmes and policy delivery.",
      "roles": [
        "Clerical Assistant",
        "Tax Assistant",
        "Auditor",
        "Section Officer",
        "Deputy Collector",
        "Civil Services Officer",
        "District Administrator"
      ]
    },
    {
      "id": "education",
      "name": "Education & Research",
      "description": "Teaching, academic research, training and institutional leadership.",
      "roles": [
        "Teaching Assistant",
        "School Teacher",
        "Research Assistant",
        "Lecturer",
        "Assistant Professor",
        "Professor",
        "Dean"
      ]
    },
    {
      "id": "defence",
      "name": "Defence & Security",
      "description": "Officer leadership, technical services, logistics and national security.",
      "roles": [
        "Defence Cadet",
        "Commissioned Officer",
        "Technical Officer",
        "Squadron / Unit Lead",
        "Commanding Officer"
      ]
    },
    {
      "id": "design-media",
      "name": "Design, Media & Creative",
      "description": "Create products, communication, media and intellectual property.",
      "roles": [
        "Junior Designer",
        "Graphic Designer",
        "UX Designer",
        "Product Designer",
        "Creative Producer",
        "Art Director",
        "Creative Director"
      ]
    },
    {
      "id": "skilled-trades",
      "name": "Skilled Trades & Services",
      "description": "Practical, credentialed trades with self-employment and contractor routes.",
      "roles": [
        "Apprentice Electrician",
        "Electrician",
        "HVAC Technician",
        "Automotive Technician",
        "Supervisor",
        "Contractor",
        "Service Business Owner"
      ]
    },
    {
      "id": "entrepreneurship",
      "name": "Entrepreneurship",
      "description": "Build, finance, sell and scale an independent business.",
      "roles": [
        "Freelancer",
        "Micro-enterprise Owner",
        "Startup Founder",
        "Business Owner",
        "Managing Director",
        "Group Chairperson"
      ]
    },
    {
      "id": "agriculture",
      "name": "Agriculture & Food Systems",
      "description": "Crop production, farm technology, agri-inputs, food processing and rural enterprise.",
      "roles": [
        "Field Assistant",
        "Agriculture Officer",
        "Agronomist",
        "Farm Manager"
      ]
    },
    {
      "id": "logistics",
      "name": "Logistics & Supply Chain",
      "description": "Procurement, warehousing, inventory, freight, planning and distribution networks.",
      "roles": [
        "Warehouse Associate",
        "Procurement Executive",
        "Supply Chain Analyst",
        "Logistics Manager"
      ]
    },
    {
      "id": "hospitality",
      "name": "Hospitality & Tourism",
      "description": "Hotels, travel, food service, guest operations and destination management.",
      "roles": [
        "Guest Services Associate",
        "Hotel Supervisor",
        "Restaurant Manager",
        "Revenue Manager",
        "Hotel General Manager"
      ]
    },
    {
      "id": "insurance",
      "name": "Insurance & Actuarial",
      "description": "Underwriting, claims, actuarial modelling, distribution and risk management.",
      "roles": [
        "Claims Associate",
        "Underwriter",
        "Actuarial Analyst",
        "Chief Risk Officer"
      ]
    },
    {
      "id": "renewables",
      "name": "Energy & Renewables",
      "description": "Power generation, solar, wind, grid operations and energy transition.",
      "roles": [
        "Solar Technician",
        "Electrical Engineer",
        "Energy Analyst",
        "Project Manager",
        "Plant Operations Head"
      ]
    },
    {
      "id": "journalism",
      "name": "Journalism & Communications",
      "description": "Reporting, research, production, public relations and digital media.",
      "roles": [
        "Reporter",
        "Sub-editor",
        "Video Producer",
        "Communications Manager",
        "Editor"
      ]
    },
    {
      "id": "research",
      "name": "Science & Research",
      "description": "Laboratory, field, data and translational research in science and technology.",
      "roles": [
        "Lab Technician",
        "Research Associate",
        "Scientist",
        "Principal Investigator",
        "Research Director"
      ]
    }
  ],
  "jobs": [
    {
      "id": "retail",
      "title": "Retail Associate",
      "firm": "Urban Retail Group",
      "salary": 240000,
      "track": "marketing",
      "minAge": 18,
      "education": 0,
      "skill": "communication",
      "need": 8,
      "experience": 0,
      "alternate": true,
      "desc": "Store operations, customer service and sales.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "store-supervisor"
    },
    {
      "id": "support",
      "title": "Customer Support Associate",
      "firm": "Connect Services",
      "salary": 360000,
      "track": "management",
      "minAge": 18,
      "education": 0,
      "skill": "communication",
      "need": 18,
      "experience": 0,
      "alternate": true,
      "desc": "Customer service, issue resolution and communication.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "support-team-lead"
    },
    {
      "id": "sales",
      "title": "Sales Executive",
      "firm": "Northstar Commerce",
      "salary": 420000,
      "track": "marketing",
      "minAge": 18,
      "education": 0,
      "skill": "business",
      "need": 22,
      "experience": 0,
      "alternate": true,
      "desc": "Prospecting, product sales, targets and client relationships.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "account-manager"
    },
    {
      "id": "electrician",
      "title": "Apprentice Electrician",
      "firm": "City Utilities Contractors",
      "salary": 220000,
      "track": "skilled-trades",
      "minAge": 18,
      "education": 0,
      "skill": "tech",
      "need": 18,
      "experience": 0,
      "credential": "diploma-engineering",
      "alternate": true,
      "desc": "Supervised electrical installation and maintenance; safety training matters.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "electrical-supervisor"
    },
    {
      "id": "technician",
      "title": "Engineering Technician",
      "firm": "Metro Industrial Works",
      "salary": 330000,
      "track": "engineering",
      "minAge": 18,
      "education": 1,
      "skill": "tech",
      "need": 28,
      "experience": 0,
      "credential": "diploma-engineering",
      "alternate": true,
      "desc": "Testing, drawings, workshop processes and maintenance.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "maintenance-supervisor"
    },
    {
      "id": "developer",
      "title": "Junior Software Developer",
      "firm": "BlueGrid Technologies",
      "salary": 600000,
      "track": "technology",
      "minAge": 18,
      "education": 1,
      "skill": "tech",
      "need": 30,
      "experience": 0,
      "credential": "btech-cse",
      "alternate": true,
      "desc": "Software implementation, code review and debugging.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "software-engineer"
    },
    {
      "id": "analyst",
      "title": "Junior Data Analyst",
      "firm": "MetricWorks",
      "salary": 570000,
      "track": "analytics",
      "minAge": 18,
      "education": 1,
      "skill": "finance",
      "need": 28,
      "experience": 0,
      "credential": "bsc-data",
      "alternate": true,
      "desc": "SQL, spreadsheets, dashboards, statistics and business reporting.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "senior-data-analyst"
    },
    {
      "id": "accountant",
      "title": "Accounts Executive",
      "firm": "Ledger & Co.",
      "salary": 390000,
      "track": "finance",
      "minAge": 18,
      "education": 1,
      "skill": "finance",
      "need": 28,
      "experience": 0,
      "credential": "bcom",
      "alternate": true,
      "desc": "Bookkeeping, reconciliations, GST preparation and month-end close.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "senior-accountant"
    },
    {
      "id": "digital-marketer",
      "title": "Digital Marketing Executive",
      "firm": "Reach Labs",
      "salary": 420000,
      "track": "marketing",
      "minAge": 18,
      "education": 0,
      "skill": "business",
      "need": 26,
      "experience": 0,
      "alternate": true,
      "desc": "Campaign execution, analytics, content and paid-media operations.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "marketing-manager"
    },
    {
      "id": "nurse-assistant",
      "title": "Healthcare Assistant",
      "firm": "CareFirst Hospitals",
      "salary": 280000,
      "track": "healthcare",
      "minAge": 18,
      "education": 0,
      "skill": "science",
      "need": 24,
      "experience": 0,
      "credential": "nursing",
      "alternate": true,
      "desc": "Patient support under clinical supervision; not a licensed nurse role.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "mis-exec",
      "title": "MIS Executive",
      "firm": "Summit Distribution",
      "salary": 360000,
      "track": "analytics",
      "minAge": 18,
      "education": 0,
      "skill": "finance",
      "need": 24,
      "experience": 0,
      "alternate": true,
      "desc": "Operational reports, spreadsheet models and data quality.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "business-analyst"
    },
    {
      "id": "qa-analyst",
      "title": "Quality Assurance Analyst",
      "firm": "Vector Software",
      "salary": 480000,
      "track": "technology",
      "minAge": 18,
      "education": 1,
      "skill": "tech",
      "need": 32,
      "experience": 0,
      "credential": "btech-cse",
      "alternate": true,
      "desc": "Test plans, bug reproduction, automation basics and quality gates.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "devops-engineer"
    },
    {
      "id": "business-analyst",
      "title": "Business Analyst",
      "firm": "Summit Consulting",
      "salary": 840000,
      "track": "analytics",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 38,
      "experience": 1,
      "credential": "bba",
      "alternate": true,
      "desc": "Process mapping, requirements, stakeholder analysis and data interpretation.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "product-analyst"
    },
    {
      "id": "cloud-engineer",
      "title": "Cloud Engineer",
      "firm": "Nimbus Systems",
      "salary": 900000,
      "track": "technology",
      "minAge": 21,
      "education": 2,
      "skill": "tech",
      "need": 50,
      "experience": 2,
      "credential": "btech-cse",
      "alternate": true,
      "desc": "Cloud infrastructure, networking, automation, monitoring and reliability.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "devops-engineer"
    },
    {
      "id": "data-scientist",
      "title": "Data Scientist",
      "firm": "MetricWorks",
      "salary": 1050000,
      "track": "analytics",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 55,
      "experience": 2,
      "credential": "bsc-data",
      "alternate": true,
      "desc": "Statistical learning, experimentation, modelling and deployment.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "ai-ml-engineer"
    },
    {
      "id": "financial-analyst",
      "title": "Financial Analyst",
      "firm": "Aurum Capital",
      "salary": 720000,
      "track": "finance",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 42,
      "experience": 1,
      "credential": "bcom",
      "alternate": true,
      "desc": "Financial statements, valuation, forecasting and investment research.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "portfolio-analyst"
    },
    {
      "id": "credit-analyst",
      "title": "Credit Analyst",
      "firm": "Crescent Bank",
      "salary": 660000,
      "track": "banking",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 42,
      "experience": 1,
      "credential": "bcom",
      "alternate": true,
      "desc": "Borrower analysis, cash-flow assessment, risk grading and documentation.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "treasury-analyst"
    },
    {
      "id": "bank-officer",
      "title": "Probationary Bank Officer",
      "firm": "National Banking Group",
      "salary": 760000,
      "track": "banking",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 38,
      "experience": 0,
      "exam": "ibps-po",
      "desc": "Branch operations, credit, customer relationships and banking compliance.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "nextRole": "branch-manager"
    },
    {
      "id": "rbi-grade-b",
      "title": "Central Bank Officer",
      "firm": "Reserve Monetary Authority",
      "salary": 1500000,
      "track": "banking",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 58,
      "experience": 0,
      "exam": "rbi-grade-b",
      "desc": "Financial regulation, monetary policy, research and supervision.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "regulated": true
    },
    {
      "id": "ca-article",
      "title": "CA Articleship Trainee",
      "firm": "Mitra Rao Chartered Accountants",
      "salary": 180000,
      "track": "finance",
      "minAge": 18,
      "education": 1,
      "skill": "finance",
      "need": 32,
      "experience": 0,
      "credential": "ca-intermediate-pass",
      "desc": "Practical training role available after the simulated CA Intermediate pass. Twelve employment quarters are required for the training credential.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "nextRole": "chartered-accountant",
      "regulated": true
    },
    {
      "id": "chartered-accountant",
      "title": "Chartered Accountant",
      "firm": "Mitra Rao Chartered Accountants",
      "salary": 1100000,
      "track": "finance",
      "minAge": 22,
      "education": 2,
      "skill": "finance",
      "need": 60,
      "experience": 2,
      "credential": "chartered-accountancy",
      "desc": "Audit, taxation, financial control and advisory work.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "regulated": true,
      "exam": "ca-final"
    },
    {
      "id": "law-assistant",
      "title": "Legal Assistant",
      "firm": "LexBridge Partners",
      "salary": 360000,
      "track": "law",
      "minAge": 18,
      "education": 1,
      "skill": "communication",
      "need": 28,
      "experience": 0,
      "credential": "law-integrated",
      "alternate": true,
      "desc": "Legal research, filing, drafting support and case coordination.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "advocate"
    },
    {
      "id": "advocate",
      "title": "Junior Advocate",
      "firm": "LexBridge Partners",
      "salary": 480000,
      "track": "law",
      "minAge": 22,
      "education": 2,
      "skill": "communication",
      "need": 48,
      "experience": 0,
      "credential": "advocate-licence",
      "exam": "aibe",
      "desc": "Legal practice after qualifying law study and professional enrolment.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "regulated": true
    },
    {
      "id": "doctor",
      "title": "Resident Medical Officer",
      "firm": "City Teaching Hospital",
      "salary": 900000,
      "track": "healthcare",
      "minAge": 23,
      "education": 2,
      "skill": "science",
      "need": 55,
      "experience": 0,
      "credential": "medical-registration",
      "desc": "Clinical work after medical degree and required internship/registration.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "regulated": true,
      "exam": "medical-registration"
    },
    {
      "id": "nurse",
      "title": "Registered Nurse",
      "firm": "CareFirst Hospitals",
      "salary": 540000,
      "track": "healthcare",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 42,
      "experience": 0,
      "credential": "nurse-registration",
      "desc": "Professional nursing and patient-care responsibilities.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "regulated": true,
      "exam": "nursing-registration"
    },
    {
      "id": "teacher",
      "title": "School Teacher",
      "firm": "Knowledge Tree Schools",
      "salary": 420000,
      "track": "education",
      "minAge": 21,
      "education": 3,
      "skill": "communication",
      "need": 42,
      "experience": 0,
      "credential": "teacher-certification",
      "alternate": false,
      "desc": "Classroom instruction, assessment and student development.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "university-faculty",
      "exam": "ctet",
      "regulated": true
    },
    {
      "id": "research-assistant",
      "title": "Research Assistant",
      "firm": "Institute for Applied Studies",
      "salary": 480000,
      "track": "education",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 45,
      "experience": 0,
      "credential": "bsc-data",
      "alternate": true,
      "desc": "Literature review, data collection, lab or field research.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "lecturer",
      "title": "College Lecturer",
      "firm": "Regional University",
      "salary": 720000,
      "track": "education",
      "minAge": 24,
      "education": 3,
      "skill": "communication",
      "need": 58,
      "experience": 2,
      "credential": "msc",
      "desc": "Teaching, research and academic service; advanced eligibility can vary by discipline.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation."
    },
    {
      "id": "tax-assistant",
      "title": "Tax Assistant",
      "firm": "Government Revenue Department",
      "salary": 480000,
      "track": "public-service",
      "minAge": 18,
      "education": 2,
      "skill": "finance",
      "need": 34,
      "experience": 0,
      "exam": "ssc-cgl",
      "desc": "Tax administration, data verification and public finance support.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation."
    },
    {
      "id": "auditor",
      "title": "Auditor / Accounts Officer",
      "firm": "Public Audit Service",
      "salary": 720000,
      "track": "public-service",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 44,
      "experience": 0,
      "exam": "ssc-cgl",
      "desc": "Public accounts, compliance testing, audit and financial scrutiny.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation."
    },
    {
      "id": "civil-services",
      "title": "Civil Services Officer",
      "firm": "Government of India",
      "salary": 1350000,
      "track": "public-service",
      "minAge": 21,
      "education": 2,
      "skill": "arts",
      "need": 52,
      "experience": 0,
      "exam": "upsc-cse",
      "desc": "Public administration, policy implementation and district or ministry leadership.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation."
    },
    {
      "id": "defence-officer",
      "title": "Defence Officer Cadet",
      "firm": "National Defence Services",
      "salary": 680000,
      "track": "defence",
      "minAge": 18,
      "education": 1,
      "skill": "discipline",
      "need": 42,
      "experience": 0,
      "exam": "nda",
      "desc": "Officer training after written selection, interview and medical standards.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation."
    },
    {
      "id": "ux-designer",
      "title": "UX / Product Designer",
      "firm": "Mosaic Product Studio",
      "salary": 720000,
      "track": "design-media",
      "minAge": 20,
      "education": 1,
      "skill": "arts",
      "need": 46,
      "experience": 1,
      "credential": "bdes",
      "alternate": true,
      "desc": "User research, interaction design, prototyping and product testing.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "architectural-assistant",
      "title": "Design & Drafting Associate",
      "firm": "Urban Form Studio",
      "salary": 420000,
      "track": "design-media",
      "minAge": 18,
      "education": 1,
      "skill": "arts",
      "need": 32,
      "experience": 0,
      "alternate": true,
      "desc": "CAD, visualisation, design documentation and client coordination.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "operations-manager",
      "title": "Operations Manager",
      "firm": "Apex Industries",
      "salary": 1080000,
      "track": "management",
      "minAge": 24,
      "education": 2,
      "skill": "business",
      "need": 50,
      "experience": 3,
      "credential": "bba",
      "alternate": true,
      "desc": "Capacity planning, people management, procurement and service levels.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "plant-manager",
      "title": "Plant Manager",
      "firm": "Apex Manufacturing",
      "salary": 1440000,
      "track": "engineering",
      "minAge": 27,
      "education": 2,
      "skill": "business",
      "need": 58,
      "experience": 4,
      "credential": "btech-engineering",
      "alternate": true,
      "desc": "Plant throughput, safety, quality, maintenance and labour productivity.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "product-manager",
      "title": "Product Manager",
      "firm": "BlueGrid Technologies",
      "salary": 1600000,
      "track": "technology",
      "minAge": 25,
      "education": 2,
      "skill": "business",
      "need": 58,
      "experience": 3,
      "credential": "btech-cse",
      "alternate": true,
      "desc": "Product strategy, discovery, roadmaps, metrics and cross-functional delivery.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "engineering-manager",
      "title": "Engineering Manager",
      "firm": "BlueGrid Technologies",
      "salary": 1900000,
      "track": "technology",
      "minAge": 28,
      "education": 2,
      "skill": "tech",
      "need": 68,
      "experience": 5,
      "credential": "btech-cse",
      "alternate": true,
      "desc": "Technical direction, hiring, delivery quality and team development.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "finance-manager",
      "title": "Finance Manager",
      "firm": "Aurum Capital",
      "salary": 1700000,
      "track": "finance",
      "minAge": 27,
      "education": 2,
      "skill": "finance",
      "need": 65,
      "experience": 5,
      "credential": "bcom",
      "alternate": true,
      "desc": "Budgeting, capital allocation, controls, treasury and reporting.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "marketing-manager",
      "title": "Brand Manager",
      "firm": "Northstar Commerce",
      "salary": 1250000,
      "track": "marketing",
      "minAge": 25,
      "education": 2,
      "skill": "business",
      "need": 56,
      "experience": 4,
      "credential": "bba",
      "alternate": true,
      "desc": "Customer research, brand positioning, pricing and campaign economics.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "regional-director",
      "title": "Regional Director",
      "firm": "Meridian Holdings",
      "salary": 2200000,
      "track": "management",
      "minAge": 32,
      "education": 3,
      "skill": "business",
      "need": 72,
      "experience": 8,
      "credential": "mba",
      "alternate": true,
      "desc": "Multi-site strategy, P&L ownership, leadership and capital allocation.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "cto",
      "title": "Chief Technology Officer",
      "firm": "Technology Group",
      "salary": 3600000,
      "track": "technology",
      "minAge": 35,
      "education": 3,
      "skill": "tech",
      "need": 86,
      "experience": 10,
      "credential": "btech-cse",
      "alternate": true,
      "desc": "Technology strategy, architecture, risk and executive leadership.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "cfo",
      "title": "Chief Financial Officer",
      "firm": "Meridian Holdings",
      "salary": 3900000,
      "track": "finance",
      "minAge": 35,
      "education": 3,
      "skill": "finance",
      "need": 86,
      "experience": 10,
      "credential": "chartered-accountancy",
      "alternate": true,
      "desc": "Capital structure, financial integrity, treasury, investor relations and risk.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "freelancer",
      "title": "Independent Freelancer",
      "firm": "Self-employed",
      "salary": 300000,
      "track": "entrepreneurship",
      "minAge": 18,
      "education": 0,
      "skill": "tech",
      "need": 25,
      "experience": 0,
      "alternate": true,
      "desc": "Project-based income with irregular cash flow, client acquisition and self-managed costs.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "startup-founder",
      "title": "Startup Founder",
      "firm": "Own venture",
      "salary": 0,
      "track": "entrepreneurship",
      "minAge": 18,
      "education": 0,
      "skill": "business",
      "need": 35,
      "experience": 0,
      "alternate": true,
      "desc": "Owner income depends on venture cash flow and distributions, not a guaranteed salary.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "warehouse-associate",
      "title": "Warehouse Associate",
      "firm": "Nava Logistics",
      "salary": 280000,
      "track": "logistics",
      "minAge": 18,
      "education": 0,
      "skill": "business",
      "need": 18,
      "experience": 0,
      "alternate": true,
      "regulated": false,
      "desc": "Receives, counts, stores and dispatches inventory; accuracy and safety matter.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "procurement-exec"
    },
    {
      "id": "procurement-exec",
      "title": "Procurement Executive",
      "firm": "Eastern Supply Partners",
      "salary": 420000,
      "track": "logistics",
      "minAge": 20,
      "education": 1,
      "skill": "business",
      "need": 30,
      "experience": 0,
      "credential": "bcom",
      "alternate": true,
      "regulated": false,
      "desc": "Sources vendors, compares quotations, negotiates terms and tracks purchase orders.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "supply-chain-analyst"
    },
    {
      "id": "supply-chain-analyst",
      "title": "Supply Chain Analyst",
      "firm": "Meridian Distribution",
      "salary": 720000,
      "track": "logistics",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 42,
      "experience": 1,
      "credential": "bcom",
      "alternate": true,
      "regulated": false,
      "desc": "Forecasting, inventory turns, procurement analytics and service-level reporting.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "logistics-manager"
    },
    {
      "id": "logistics-manager",
      "title": "Logistics Manager",
      "firm": "Nava Logistics",
      "salary": 1150000,
      "track": "logistics",
      "minAge": 25,
      "education": 2,
      "skill": "business",
      "need": 56,
      "experience": 4,
      "credential": "bba",
      "alternate": true,
      "regulated": false,
      "desc": "Owns fulfilment, freight costs, warehouse productivity and delivery performance.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "agri-field-assistant",
      "title": "Agriculture Field Assistant",
      "firm": "Deccan Agro Services",
      "salary": 260000,
      "track": "agriculture",
      "minAge": 18,
      "education": 0,
      "skill": "science",
      "need": 20,
      "experience": 0,
      "alternate": true,
      "regulated": false,
      "desc": "Supports crop surveys, field demonstrations, input distribution and farmer records.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "agri-officer"
    },
    {
      "id": "agri-officer",
      "title": "Agriculture Development Officer",
      "firm": "State Agriculture Services",
      "salary": 620000,
      "track": "agriculture",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 42,
      "experience": 0,
      "credential": "bsc-agriculture",
      "alternate": false,
      "regulated": false,
      "desc": "Agricultural extension, crop advisory and programme implementation; recruitment rules vary.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "nextRole": "agronomist"
    },
    {
      "id": "agronomist",
      "title": "Agronomist",
      "firm": "GreenYield Research",
      "salary": 780000,
      "track": "agriculture",
      "minAge": 22,
      "education": 2,
      "skill": "science",
      "need": 52,
      "experience": 1,
      "credential": "bsc-agriculture",
      "alternate": true,
      "regulated": false,
      "desc": "Advises on crop systems, soil, water, yield and sustainable production.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "farm-manager",
      "title": "Farm Operations Manager",
      "firm": "Sahyadri Foods",
      "salary": 680000,
      "track": "agriculture",
      "minAge": 23,
      "education": 2,
      "skill": "business",
      "need": 45,
      "experience": 3,
      "credential": "bsc-agriculture",
      "alternate": true,
      "regulated": false,
      "desc": "Manages labour, inputs, farm budgets, yields, storage and market timing.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "food-technologist",
      "title": "Food Technologist",
      "firm": "Harvest Foods",
      "salary": 660000,
      "track": "agriculture",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 48,
      "experience": 1,
      "credential": "bsc-biotech",
      "alternate": true,
      "regulated": false,
      "desc": "Food processing, safety, quality control, shelf life and product development.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "guest-services",
      "title": "Guest Services Associate",
      "firm": "Grand Deccan Hotels",
      "salary": 260000,
      "track": "hospitality",
      "minAge": 18,
      "education": 0,
      "skill": "communication",
      "need": 20,
      "experience": 0,
      "alternate": true,
      "regulated": false,
      "desc": "Front desk, guest requests, reservations and service recovery.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "hotel-supervisor"
    },
    {
      "id": "hotel-supervisor",
      "title": "Hotel Operations Supervisor",
      "firm": "CityStay Hotels",
      "salary": 420000,
      "track": "hospitality",
      "minAge": 20,
      "education": 1,
      "skill": "business",
      "need": 34,
      "experience": 1,
      "credential": "bba",
      "alternate": true,
      "regulated": false,
      "desc": "Supervises housekeeping, front office, shifts and guest experience.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "hotel-revenue-manager"
    },
    {
      "id": "restaurant-manager",
      "title": "Restaurant Manager",
      "firm": "Table & Tandoor",
      "salary": 600000,
      "track": "hospitality",
      "minAge": 22,
      "education": 1,
      "skill": "business",
      "need": 42,
      "experience": 2,
      "credential": "bba",
      "alternate": true,
      "regulated": false,
      "desc": "Food cost, staff rosters, hygiene, sales and guest satisfaction.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "hotel-revenue-manager",
      "title": "Hotel Revenue Manager",
      "firm": "Grand Deccan Hotels",
      "salary": 960000,
      "track": "hospitality",
      "minAge": 24,
      "education": 2,
      "skill": "finance",
      "need": 55,
      "experience": 4,
      "credential": "bba",
      "alternate": true,
      "regulated": false,
      "desc": "Pricing, occupancy, channel mix, demand forecasts and revenue optimisation.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "claims-associate",
      "title": "Insurance Claims Associate",
      "firm": "Saffron Assurance",
      "salary": 390000,
      "track": "insurance",
      "minAge": 18,
      "education": 0,
      "skill": "communication",
      "need": 25,
      "experience": 0,
      "alternate": true,
      "regulated": false,
      "desc": "Documents claims, checks policy coverage and coordinates assessment.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "insurance-underwriter"
    },
    {
      "id": "insurance-advisor",
      "title": "Insurance Advisor",
      "firm": "Crescent Life",
      "salary": 420000,
      "track": "insurance",
      "minAge": 18,
      "education": 0,
      "skill": "business",
      "need": 26,
      "experience": 0,
      "alternate": true,
      "regulated": false,
      "desc": "Explains products, suitability, premiums and policy servicing. Sales conduct rules apply.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "insurance-underwriter"
    },
    {
      "id": "insurance-underwriter",
      "title": "Insurance Underwriter",
      "firm": "Saffron Assurance",
      "salary": 720000,
      "track": "insurance",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 48,
      "experience": 2,
      "credential": "bcom",
      "alternate": true,
      "regulated": false,
      "desc": "Assesses exposures, policy terms, exclusions and pricing.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "actuarial-analyst"
    },
    {
      "id": "actuarial-analyst",
      "title": "Actuarial Analyst",
      "firm": "Aurum Risk Analytics",
      "salary": 840000,
      "track": "insurance",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 56,
      "experience": 1,
      "credential": "bsc-statistics",
      "alternate": true,
      "regulated": false,
      "desc": "Uses probability, statistics and financial mathematics to assess risk.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "solar-technician",
      "title": "Solar PV Technician",
      "firm": "SunGrid Services",
      "salary": 330000,
      "track": "renewables",
      "minAge": 18,
      "education": 1,
      "skill": "tech",
      "need": 28,
      "experience": 0,
      "credential": "diploma-engineering",
      "alternate": true,
      "regulated": false,
      "desc": "Installs and maintains photovoltaic equipment under safety procedures.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "energy-analyst"
    },
    {
      "id": "energy-analyst",
      "title": "Energy Analyst",
      "firm": "Bharat Grid Advisory",
      "salary": 720000,
      "track": "renewables",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 48,
      "experience": 1,
      "credential": "btech-electrical",
      "alternate": true,
      "regulated": false,
      "desc": "Analyses load, generation, tariffs, energy efficiency and grid performance.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "renewable-project-manager",
      "title": "Renewable Project Manager",
      "firm": "SunGrid Infrastructure",
      "salary": 1320000,
      "track": "renewables",
      "minAge": 26,
      "education": 2,
      "skill": "business",
      "need": 60,
      "experience": 4,
      "credential": "btech-electrical",
      "alternate": true,
      "regulated": false,
      "desc": "Manages project cost, contractors, approvals, procurement and commissioning.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "reporter",
      "title": "Junior Reporter",
      "firm": "Public Square Media",
      "salary": 360000,
      "track": "journalism",
      "minAge": 18,
      "education": 1,
      "skill": "communication",
      "need": 32,
      "experience": 0,
      "credential": "ba-journalism",
      "alternate": true,
      "regulated": false,
      "desc": "Reports, verifies sources, interviews and writes for a public audience.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "video-producer"
    },
    {
      "id": "video-producer",
      "title": "Digital Video Producer",
      "firm": "Civic Lens Studio",
      "salary": 480000,
      "track": "journalism",
      "minAge": 19,
      "education": 1,
      "skill": "arts",
      "need": 38,
      "experience": 1,
      "credential": "ba-journalism",
      "alternate": true,
      "regulated": false,
      "desc": "Plans shoots, edits video, checks rights and publishes digital content.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "communications-manager"
    },
    {
      "id": "communications-manager",
      "title": "Communications Manager",
      "firm": "Meridian Group",
      "salary": 960000,
      "track": "journalism",
      "minAge": 24,
      "education": 2,
      "skill": "communication",
      "need": 58,
      "experience": 4,
      "credential": "ba-journalism",
      "alternate": true,
      "regulated": false,
      "desc": "Leads corporate communications, stakeholder messaging and crisis response.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "lab-technician",
      "title": "Laboratory Technician",
      "firm": "Institute for Applied Science",
      "salary": 320000,
      "track": "research",
      "minAge": 18,
      "education": 1,
      "skill": "science",
      "need": 28,
      "experience": 0,
      "credential": "bsc-chemistry",
      "alternate": true,
      "regulated": false,
      "desc": "Prepares samples, follows lab protocols, records results and maintains equipment.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "research-associate-data"
    },
    {
      "id": "research-associate-data",
      "title": "Research Associate · Data",
      "firm": "Institute for Applied Studies",
      "salary": 620000,
      "track": "research",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 46,
      "experience": 1,
      "credential": "bsc-statistics",
      "alternate": true,
      "regulated": false,
      "desc": "Supports literature reviews, data cleaning, analysis and reproducible research.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "scientist-junior"
    },
    {
      "id": "scientist-junior",
      "title": "Junior Scientist",
      "firm": "National Research Centre",
      "salary": 820000,
      "track": "research",
      "minAge": 23,
      "education": 2,
      "skill": "science",
      "need": 58,
      "experience": 2,
      "credential": "msc",
      "alternate": true,
      "regulated": false,
      "desc": "Designs experiments and contributes to supervised research programmes.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "hr-executive",
      "title": "Human Resources Executive",
      "firm": "PeopleBridge",
      "salary": 480000,
      "track": "management",
      "minAge": 20,
      "education": 1,
      "skill": "communication",
      "need": 34,
      "experience": 0,
      "credential": "bba",
      "alternate": true,
      "regulated": false,
      "desc": "Recruitment, onboarding, employee records and HR operations.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "recruiter"
    },
    {
      "id": "recruiter",
      "title": "Technical Recruiter",
      "firm": "TalentGrid",
      "salary": 600000,
      "track": "management",
      "minAge": 21,
      "education": 1,
      "skill": "communication",
      "need": 42,
      "experience": 1,
      "credential": "bba",
      "alternate": true,
      "regulated": false,
      "desc": "Sourcing, screening, interview coordination and candidate experience.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "communications-manager"
    },
    {
      "id": "compliance-analyst",
      "title": "Compliance Analyst",
      "firm": "Meridian Financial Services",
      "salary": 720000,
      "track": "finance",
      "minAge": 21,
      "education": 2,
      "skill": "finance",
      "need": 48,
      "experience": 1,
      "credential": "bcom",
      "alternate": true,
      "regulated": false,
      "desc": "Maintains controls, evidence, policy interpretation and regulatory monitoring.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "treasury-analyst",
      "title": "Treasury Analyst",
      "firm": "Crescent Bank",
      "salary": 960000,
      "track": "banking",
      "minAge": 22,
      "education": 2,
      "skill": "finance",
      "need": 55,
      "experience": 2,
      "credential": "bcom",
      "alternate": true,
      "regulated": false,
      "desc": "Liquidity forecasts, cash positioning, funding and market risk support.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "branch-manager"
    },
    {
      "id": "branch-manager",
      "title": "Bank Branch Manager",
      "firm": "National Banking Group",
      "salary": 1080000,
      "track": "banking",
      "minAge": 25,
      "education": 2,
      "skill": "business",
      "need": 58,
      "experience": 5,
      "credential": "bcom",
      "alternate": true,
      "regulated": false,
      "desc": "Branch P&L, deposits, credit quality, compliance, people and customer outcomes.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "regional-director"
    },
    {
      "id": "portfolio-analyst",
      "title": "Investment Research Analyst",
      "firm": "Aurum Capital",
      "salary": 1080000,
      "track": "finance",
      "minAge": 22,
      "education": 2,
      "skill": "finance",
      "need": 60,
      "experience": 2,
      "credential": "bcom",
      "alternate": true,
      "regulated": false,
      "desc": "Company analysis, valuation, sector research and investment memos.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "finance-manager"
    },
    {
      "id": "equity-dealer",
      "title": "Equity Dealer",
      "firm": "Deccan Securities",
      "salary": 720000,
      "track": "finance",
      "minAge": 21,
      "education": 1,
      "skill": "finance",
      "need": 48,
      "experience": 1,
      "credential": "bcom",
      "alternate": true,
      "regulated": false,
      "desc": "Executes client orders under supervision and market conduct controls.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "internal-auditor",
      "title": "Internal Auditor",
      "firm": "Axis Assurance Partners",
      "salary": 900000,
      "track": "finance",
      "minAge": 22,
      "education": 2,
      "skill": "finance",
      "need": 58,
      "experience": 2,
      "credential": "bcom",
      "alternate": true,
      "regulated": false,
      "desc": "Tests processes, reconciliations, controls and operational risk.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "finance-manager"
    },
    {
      "id": "tax-consultant",
      "title": "Tax Consultant",
      "firm": "Ledger & Co.",
      "salary": 900000,
      "track": "finance",
      "minAge": 22,
      "education": 2,
      "skill": "finance",
      "need": 58,
      "experience": 2,
      "credential": "chartered-accountancy",
      "alternate": false,
      "regulated": true,
      "desc": "Tax advice and representation subject to statutory qualification and practice rules.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "nextRole": "cfo"
    },
    {
      "id": "devops-engineer",
      "title": "DevOps Engineer",
      "firm": "Nimbus Systems",
      "salary": 1050000,
      "track": "technology",
      "minAge": 21,
      "education": 2,
      "skill": "tech",
      "need": 55,
      "experience": 2,
      "credential": "btech-cse",
      "alternate": true,
      "regulated": false,
      "desc": "Builds CI/CD, infrastructure automation, observability and release reliability.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "engineering-manager"
    },
    {
      "id": "cybersecurity-analyst",
      "title": "Cybersecurity Analyst",
      "firm": "ShieldStack",
      "salary": 960000,
      "track": "technology",
      "minAge": 21,
      "education": 2,
      "skill": "tech",
      "need": 55,
      "experience": 1,
      "credential": "btech-cse",
      "alternate": true,
      "regulated": false,
      "desc": "Threat monitoring, incident triage, identity and vulnerability management.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "engineering-manager"
    },
    {
      "id": "ai-ml-engineer",
      "title": "AI / ML Engineer",
      "firm": "Quanta Software Systems",
      "salary": 1500000,
      "track": "technology",
      "minAge": 23,
      "education": 2,
      "skill": "science",
      "need": 68,
      "experience": 3,
      "credential": "btech-cse",
      "alternate": true,
      "regulated": false,
      "desc": "Builds data pipelines, trains models, evaluates outcomes and deploys ML systems.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "cto"
    },
    {
      "id": "product-analyst",
      "title": "Product Analyst",
      "firm": "Mosaic Product Studio",
      "salary": 960000,
      "track": "analytics",
      "minAge": 22,
      "education": 2,
      "skill": "finance",
      "need": 52,
      "experience": 2,
      "credential": "bsc-data",
      "alternate": true,
      "regulated": false,
      "desc": "Studies user behaviour, experiments, funnels and product metrics.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "product-manager"
    },
    {
      "id": "economist-analyst",
      "title": "Economic Research Analyst",
      "firm": "Policy Metrics Lab",
      "salary": 900000,
      "track": "research",
      "minAge": 22,
      "education": 2,
      "skill": "finance",
      "need": 55,
      "experience": 2,
      "credential": "ma-economics",
      "alternate": true,
      "regulated": false,
      "desc": "Analyses macroeconomic, fiscal, labour and sector data.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "civil-engineer",
      "title": "Graduate Civil Engineer",
      "firm": "Urban Infra Projects",
      "salary": 540000,
      "track": "engineering",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 42,
      "experience": 0,
      "credential": "btech-civil",
      "alternate": true,
      "regulated": false,
      "desc": "Design support, site supervision, quantities, safety and construction quality.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "plant-manager"
    },
    {
      "id": "electrical-engineer",
      "title": "Graduate Electrical Engineer",
      "firm": "Bharat Grid Energy",
      "salary": 600000,
      "track": "engineering",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 44,
      "experience": 0,
      "credential": "btech-electrical",
      "alternate": true,
      "regulated": false,
      "desc": "Power systems, protection, equipment testing and electrical project support.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "plant-manager"
    },
    {
      "id": "mechanical-engineer",
      "title": "Graduate Mechanical Engineer",
      "firm": "Apex Manufacturing",
      "salary": 600000,
      "track": "engineering",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 44,
      "experience": 0,
      "credential": "btech-mechanical",
      "alternate": true,
      "regulated": false,
      "desc": "Product design, production engineering, maintenance and quality.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "plant-manager"
    },
    {
      "id": "architect-assistant",
      "title": "Architectural Designer",
      "firm": "Urban Form Studio",
      "salary": 600000,
      "track": "design-media",
      "minAge": 21,
      "education": 2,
      "skill": "arts",
      "need": 48,
      "experience": 1,
      "credential": "barch",
      "alternate": false,
      "regulated": false,
      "desc": "Architectural design support; independent regulated practice requires professional registration.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation."
    },
    {
      "id": "pharmacist",
      "title": "Registered Pharmacist",
      "firm": "CareFirst Pharmacy",
      "salary": 420000,
      "track": "healthcare",
      "minAge": 21,
      "education": 2,
      "skill": "science",
      "need": 42,
      "experience": 0,
      "credential": "bpharm",
      "alternate": false,
      "regulated": true,
      "desc": "Dispensing and pharmacy practice subject to recognised qualification and registration.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "nextRole": "healthcare-manager"
    },
    {
      "id": "physiotherapist",
      "title": "Physiotherapist",
      "firm": "RehabFirst Clinics",
      "salary": 480000,
      "track": "healthcare",
      "minAge": 22,
      "education": 2,
      "skill": "science",
      "need": 45,
      "experience": 0,
      "credential": "bpt",
      "alternate": false,
      "regulated": true,
      "desc": "Rehabilitation assessment and therapy under applicable professional requirements.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation.",
      "nextRole": "healthcare-manager"
    },
    {
      "id": "psychology-associate",
      "title": "Psychology Programme Associate",
      "firm": "MindWell Centre",
      "salary": 420000,
      "track": "healthcare",
      "minAge": 21,
      "education": 2,
      "skill": "arts",
      "need": 42,
      "experience": 0,
      "credential": "ba-psychology",
      "alternate": true,
      "regulated": false,
      "desc": "Supports supervised assessments and programme coordination; does not independently diagnose.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "research-associate-data"
    },
    {
      "id": "social-worker",
      "title": "Community Programme Officer",
      "firm": "Civic Foundation",
      "salary": 390000,
      "track": "public-service",
      "minAge": 21,
      "education": 2,
      "skill": "arts",
      "need": 38,
      "experience": 0,
      "credential": "bsw",
      "alternate": true,
      "regulated": false,
      "desc": "Coordinates outreach, referrals, field operations and programme monitoring.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "policy-analyst"
    },
    {
      "id": "policy-analyst",
      "title": "Public Policy Analyst",
      "firm": "Governance Lab",
      "salary": 840000,
      "track": "public-service",
      "minAge": 22,
      "education": 2,
      "skill": "arts",
      "need": 54,
      "experience": 1,
      "credential": "ma-public-policy",
      "alternate": true,
      "regulated": false,
      "desc": "Researches policy design, implementation, evaluation and public finance.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "civil-services"
    },
    {
      "id": "teacher-primary",
      "title": "Primary School Teacher",
      "firm": "Knowledge Tree Schools",
      "salary": 420000,
      "track": "education",
      "minAge": 21,
      "education": 2,
      "skill": "communication",
      "need": 42,
      "experience": 0,
      "credential": "teacher-certification",
      "alternate": false,
      "regulated": true,
      "desc": "Classroom teaching route; in real hiring, teacher training and eligibility tests may be required.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "exam": "ctet"
    },
    {
      "id": "university-faculty",
      "title": "Assistant Professor",
      "firm": "Regional University",
      "salary": 960000,
      "track": "education",
      "minAge": 26,
      "education": 3,
      "skill": "science",
      "need": 68,
      "experience": 3,
      "credential": "msc",
      "alternate": false,
      "regulated": false,
      "desc": "Academic teaching and research; actual eligibility may require NET/SET/PhD and discipline rules.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "Formal qualification or regulated eligibility is required in this simulation."
    },
    {
      "id": "business-development",
      "title": "Business Development Manager",
      "firm": "Northstar Commerce",
      "salary": 780000,
      "track": "marketing",
      "minAge": 22,
      "education": 1,
      "skill": "business",
      "need": 48,
      "experience": 2,
      "credential": "bba",
      "alternate": true,
      "regulated": false,
      "desc": "Builds pipeline, partnerships, customer relationships and commercial proposals.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows.",
      "nextRole": "marketing-manager"
    },
    {
      "id": "founder-operator",
      "title": "Owner-Operator",
      "firm": "Independent Venture",
      "salary": 0,
      "track": "entrepreneurship",
      "minAge": 18,
      "education": 0,
      "skill": "business",
      "need": 38,
      "experience": 0,
      "alternate": true,
      "regulated": false,
      "desc": "Builds and operates a small venture; owner withdrawals depend on actual distributable profit.",
      "workEnvironment": "Employer, clients or field operations; workload varies by organisation.",
      "progression": "Progression normally depends on performance, experience, skill development and role-specific qualification.",
      "equivalencyNote": "This role may accept demonstrated skills, relevant work experience and portfolio evidence where the employer allows."
    },
    {
      "id": "store-supervisor",
      "title": "Store Supervisor",
      "firm": "Urban Retail Group",
      "salary": 390000,
      "track": "marketing",
      "minAge": 21,
      "education": 0,
      "skill": "business",
      "need": 32,
      "experience": 2,
      "alternate": true,
      "desc": "Leads daily store operations, inventory control, cash reconciliation and service standards."
    },
    {
      "id": "support-team-lead",
      "title": "Customer Support Team Lead",
      "firm": "Connect Services",
      "salary": 540000,
      "track": "management",
      "minAge": 21,
      "education": 0,
      "skill": "communication",
      "need": 36,
      "experience": 2,
      "alternate": true,
      "desc": "Manages queue performance, coaching, escalations and service quality."
    },
    {
      "id": "account-manager",
      "title": "Key Account Manager",
      "firm": "Northstar Commerce",
      "salary": 720000,
      "track": "marketing",
      "minAge": 22,
      "education": 1,
      "skill": "business",
      "need": 45,
      "experience": 3,
      "alternate": true,
      "desc": "Owns account retention, commercial terms, revenue forecast and client outcomes."
    },
    {
      "id": "electrical-supervisor",
      "title": "Electrical Site Supervisor",
      "firm": "City Utilities Contractors",
      "salary": 480000,
      "track": "skilled-trades",
      "minAge": 21,
      "education": 1,
      "skill": "tech",
      "need": 36,
      "experience": 2,
      "credential": "diploma-engineering",
      "alternate": true,
      "desc": "Supervises installation, electrical safety, work permits and inspection records."
    },
    {
      "id": "maintenance-supervisor",
      "title": "Maintenance Supervisor",
      "firm": "Metro Industrial Works",
      "salary": 540000,
      "track": "engineering",
      "minAge": 22,
      "education": 1,
      "skill": "tech",
      "need": 42,
      "experience": 3,
      "credential": "diploma-engineering",
      "alternate": true,
      "desc": "Plans preventive maintenance, spare parts, downtime response and technician work."
    },
    {
      "id": "software-engineer",
      "title": "Software Engineer",
      "firm": "BlueGrid Technologies",
      "salary": 960000,
      "track": "technology",
      "minAge": 21,
      "education": 1,
      "skill": "tech",
      "need": 48,
      "experience": 2,
      "credential": "btech-cse",
      "alternate": true,
      "desc": "Owns production features, testing, code quality and system design."
    },
    {
      "id": "senior-data-analyst",
      "title": "Senior Data Analyst",
      "firm": "MetricWorks",
      "salary": 840000,
      "track": "analytics",
      "minAge": 22,
      "education": 1,
      "skill": "finance",
      "need": 46,
      "experience": 3,
      "credential": "bsc-data",
      "alternate": true,
      "desc": "Builds trusted metrics, analytical models, stakeholder recommendations and reporting systems."
    },
    {
      "id": "senior-accountant",
      "title": "Senior Accountant",
      "firm": "Ledger & Co.",
      "salary": 620000,
      "track": "finance",
      "minAge": 22,
      "education": 1,
      "skill": "finance",
      "need": 44,
      "experience": 3,
      "credential": "bcom",
      "alternate": true,
      "desc": "Owns reconciliations, statutory schedules, month-end close and review controls."
    },
    {
      "id": "healthcare-manager",
      "title": "Healthcare Operations Manager",
      "firm": "CareFirst Hospitals",
      "salary": 1050000,
      "track": "healthcare",
      "minAge": 26,
      "education": 2,
      "skill": "business",
      "need": 58,
      "experience": 4,
      "credential": "bsc-nursing",
      "alternate": true,
      "desc": "Manages clinical operations, staffing, patient flow, quality and safety systems."
    },
    {
      "id": "regional-banking-head",
      "title": "Regional Banking Head",
      "firm": "National Banking Group",
      "salary": 2400000,
      "track": "banking",
      "minAge": 32,
      "education": 3,
      "skill": "business",
      "need": 76,
      "experience": 8,
      "credential": "mba",
      "alternate": true,
      "desc": "Owns multiple branches, regional deposits, credit quality, risk and P&L."
    },
    {
      "id": "chief-risk-officer",
      "title": "Chief Risk Officer",
      "firm": "Aurum Financial Group",
      "salary": 3800000,
      "track": "insurance",
      "minAge": 36,
      "education": 3,
      "skill": "finance",
      "need": 88,
      "experience": 10,
      "credential": "mba-finance",
      "alternate": true,
      "desc": "Leads enterprise risk, capital, liquidity, controls and board reporting."
    },
    {
      "id": "civil-servant",
      "title": "Civil Services Officer",
      "firm": "Government of India",
      "salary": 1450000,
      "track": "public-service",
      "minAge": 21,
      "education": 2,
      "skill": "arts",
      "need": 58,
      "experience": 0,
      "exam": "upsc-cse",
      "desc": "Public administration after a competitive examination and prescribed selection process."
    },
    {
      "id": "architect",
      "title": "Registered Architect",
      "firm": "Urban Form Studio",
      "salary": 960000,
      "track": "design-media",
      "minAge": 24,
      "education": 2,
      "skill": "arts",
      "need": 62,
      "experience": 2,
      "credential": "barch",
      "regulated": true,
      "alternate": false,
      "desc": "Professional architecture practice requiring recognised education and applicable registration."
    },
    {
      "id": "junior-accountant",
      "title": "Junior Accountant",
      "firm": "Deccan Ledger Services",
      "salary": 360000,
      "track": "finance",
      "minAge": 18,
      "education": 1,
      "skill": "finance",
      "need": 22,
      "experience": 0,
      "credential": "",
      "alternate": true,
      "desc": "Bookkeeping, reconciliations, GST support, invoice control and month-end schedules.",
      "nextRole": "accountant",
      "workEnvironment": "Small finance team or outsourced accounting office.",
      "progression": "Build accuracy, ERP skill and financial reporting experience.",
      "equivalencyNote": "Can enter with a strong practical portfolio and demonstrable accounting skills."
    },
    {
      "id": "banking-operations-associate",
      "title": "Banking Operations Associate",
      "firm": "Sahyadri Retail Bank",
      "salary": 420000,
      "track": "banking",
      "minAge": 18,
      "education": 1,
      "skill": "finance",
      "need": 26,
      "experience": 0,
      "alternate": true,
      "desc": "Customer onboarding, account servicing, transaction operations and control checks.",
      "nextRole": "bank-officer",
      "workEnvironment": "Branch operations and service centre.",
      "progression": "Progress through operations quality, compliance and lending knowledge."
    },
    {
      "id": "cybersecurity-associate",
      "title": "Cybersecurity Operations Associate",
      "firm": "BlueGrid Security",
      "salary": 540000,
      "track": "technology",
      "minAge": 19,
      "education": 1,
      "skill": "tech",
      "need": 35,
      "experience": 0,
      "alternate": true,
      "desc": "Security monitoring, ticket triage, vulnerability hygiene and incident documentation.",
      "nextRole": "cybersecurity-analyst",
      "workEnvironment": "Security operations centre.",
      "progression": "Build labs, incident evidence and recognised certifications."
    },
    {
      "id": "project-coordinator",
      "title": "Project Coordinator",
      "firm": "Apex Delivery Partners",
      "salary": 480000,
      "track": "management",
      "minAge": 19,
      "education": 1,
      "skill": "business",
      "need": 28,
      "experience": 0,
      "alternate": true,
      "desc": "Schedules, status reporting, vendor coordination, risks and meeting actions.",
      "nextRole": "project-manager",
      "workEnvironment": "Cross-functional delivery team.",
      "progression": "Grow into project management through delivery evidence and stakeholder trust."
    },
    {
      "id": "renewable-field-technician",
      "title": "Renewable Energy Field Technician",
      "firm": "SunRoute Energy",
      "salary": 390000,
      "track": "renewables",
      "minAge": 18,
      "education": 0,
      "skill": "science",
      "need": 22,
      "experience": 0,
      "alternate": true,
      "desc": "Installation support, safety checks, site documentation and basic system maintenance.",
      "nextRole": "solar-technician",
      "workEnvironment": "Field work and technical maintenance.",
      "progression": "Technical certifications and verified field hours matter."
    },
    {
      "id": "supply-chain-coordinator",
      "title": "Supply Chain Coordinator",
      "firm": "Nava Bharat Distribution",
      "salary": 450000,
      "track": "logistics",
      "minAge": 18,
      "education": 1,
      "skill": "business",
      "need": 25,
      "experience": 0,
      "alternate": true,
      "desc": "Purchase orders, inventory movement, dispatch scheduling and supplier follow-up.",
      "nextRole": "procurement-exec",
      "workEnvironment": "Warehouse and planning office.",
      "progression": "Advance through procurement, analytics and supplier performance."
    },
    {
      "id": "junior-research-assistant",
      "title": "Junior Research Assistant",
      "firm": "Centre for Applied Research",
      "salary": 390000,
      "track": "research",
      "minAge": 20,
      "education": 2,
      "skill": "science",
      "need": 35,
      "experience": 0,
      "alternate": true,
      "desc": "Literature review, data collection, lab or field support and reproducible documentation.",
      "nextRole": "research-associate-data",
      "workEnvironment": "Research group, lab or field unit.",
      "progression": "Methods, publications, data handling and postgraduate study support progression."
    },
    {
      "id": "content-editor",
      "title": "Digital Content Editor",
      "firm": "Civic Media Works",
      "salary": 420000,
      "track": "journalism",
      "minAge": 18,
      "education": 0,
      "skill": "communication",
      "need": 28,
      "experience": 0,
      "alternate": true,
      "desc": "Research, fact-checking, editing, publishing workflows and audience analytics.",
      "nextRole": "reporter",
      "workEnvironment": "Editorial team or independent publisher.",
      "progression": "Portfolio quality and editorial judgement matter more than degree title."
    }
  ],
  "events": [
    {
      "id": "infant-sleep-regression",
      "category": "family",
      "minAge": 0,
      "maxAge": 2,
      "weight": 8,
      "cooldown": 12,
      "title": "A difficult sleep phase",
      "description": "Your sleep pattern has become irregular. The household is tired, and your parents need to decide how to respond.",
      "options": [
        {
          "label": "Create a calmer bedtime routine",
          "detail": "More consistency; parents lose some free time.",
          "effects": {
            "stats": {
              "health": 2,
              "energy": 8,
              "stress": -4,
              "happiness": 2
            },
            "family": {
              "support": 2
            }
          }
        },
        {
          "label": "Ask grandparents to help",
          "detail": "Extra caregiving support and stronger family ties.",
          "effects": {
            "stats": {
              "happiness": 3,
              "stress": -2
            },
            "family": {
              "closeness": 4,
              "funds": -1800
            }
          }
        },
        {
          "label": "Let the routine settle naturally",
          "detail": "No immediate expense, but fatigue may linger.",
          "effects": {
            "stats": {
              "energy": -5,
              "stress": 4
            }
          }
        }
      ]
    },
    {
      "id": "infant-vaccination",
      "category": "health",
      "minAge": 0,
      "maxAge": 5,
      "weight": 7,
      "cooldown": 16,
      "title": "A vaccination appointment",
      "description": "A routine immunisation appointment is due. Your family weighs cost, convenience and preventive care.",
      "options": [
        {
          "label": "Attend the appointment",
          "detail": "Pay for transport and private clinic convenience.",
          "effects": {
            "family": {
              "funds": -1200
            },
            "stats": {
              "health": 5,
              "stress": -1
            }
          }
        },
        {
          "label": "Use the public health centre",
          "detail": "Lower cost with a longer wait.",
          "effects": {
            "family": {
              "funds": -150
            },
            "stats": {
              "health": 5,
              "energy": -2
            }
          }
        },
        {
          "label": "Postpone it",
          "detail": "Save money now but accept a health-risk penalty.",
          "effects": {
            "stats": {
              "health": -4,
              "stress": 2
            }
          }
        }
      ]
    },
    {
      "id": "family-celebration",
      "category": "family",
      "minAge": 0,
      "maxAge": 12,
      "weight": 6,
      "cooldown": 20,
      "title": "A family celebration",
      "description": "Relatives are gathering for a festival. Your household can host, travel or keep the celebration modest.",
      "options": [
        {
          "label": "Host a larger gathering",
          "detail": "A warm memory, but a noticeable expense.",
          "effects": {
            "family": {
              "funds": -4500,
              "closeness": 8
            },
            "stats": {
              "happiness": 5,
              "social": 3
            }
          }
        },
        {
          "label": "Celebrate at home",
          "detail": "A smaller, meaningful occasion.",
          "effects": {
            "family": {
              "funds": -900,
              "closeness": 5
            },
            "stats": {
              "happiness": 4
            }
          }
        },
        {
          "label": "Skip the gathering this year",
          "detail": "Protect the household budget, but miss social contact.",
          "effects": {
            "family": {
              "closeness": -2
            },
            "stats": {
              "happiness": -2
            }
          }
        }
      ]
    },
    {
      "id": "sibling-arrival",
      "category": "family",
      "minAge": 0,
      "maxAge": 8,
      "weight": 4,
      "cooldown": 40,
      "title": "A new sibling joins the family",
      "description": "Your parents announce that the family is growing. Attention and resources will be shared differently.",
      "options": [
        {
          "label": "Welcome the change",
          "detail": "Build empathy and family bonds.",
          "effects": {
            "family": {
              "closeness": 5,
              "support": 2
            },
            "stats": {
              "happiness": 3,
              "social": 2
            }
          }
        },
        {
          "label": "Ask for special time with parents",
          "detail": "Your needs are recognised; the household must plan carefully.",
          "effects": {
            "family": {
              "closeness": 3,
              "funds": -800
            },
            "stats": {
              "happiness": 2,
              "confidence": 1
            }
          }
        },
        {
          "label": "Feel unsettled at first",
          "detail": "A realistic adjustment period.",
          "effects": {
            "stats": {
              "stress": 5,
              "happiness": -3
            }
          }
        }
      ]
    },
    {
      "id": "preschool-playgroup",
      "category": "development",
      "minAge": 3,
      "maxAge": 5,
      "weight": 7,
      "cooldown": 16,
      "title": "A neighbourhood playgroup",
      "description": "A local playgroup offers early language, play and social interaction.",
      "options": [
        {
          "label": "Join the playgroup",
          "detail": "Build social comfort and early learning.",
          "effects": {
            "family": {
              "funds": -1800
            },
            "stats": {
              "social": 5,
              "creativity": 3,
              "smarts": 2,
              "happiness": 3
            }
          }
        },
        {
          "label": "Choose a home activity plan",
          "detail": "Lower cost and individual attention.",
          "effects": {
            "family": {
              "funds": -400
            },
            "stats": {
              "creativity": 2,
              "smarts": 3,
              "confidence": 1
            }
          }
        },
        {
          "label": "Wait another year",
          "detail": "Avoid a new routine, but miss this opportunity.",
          "effects": {
            "stats": {
              "social": -1
            }
          }
        }
      ]
    },
    {
      "id": "child-art-prize",
      "category": "education",
      "minAge": 4,
      "maxAge": 12,
      "weight": 5,
      "cooldown": 24,
      "title": "A drawing catches a teacher’s eye",
      "description": "A teacher notices your creativity and suggests entering a local art competition.",
      "options": [
        {
          "label": "Prepare an entry",
          "detail": "Spend time on a creative project.",
          "effects": {
            "stats": {
              "creativity": 5,
              "confidence": 3,
              "stress": 2
            },
            "skills": {
              "arts": 4
            }
          }
        },
        {
          "label": "Ask for a mentor",
          "detail": "Guidance improves learning but costs the family.",
          "effects": {
            "family": {
              "funds": -900
            },
            "stats": {
              "creativity": 4,
              "confidence": 2
            },
            "skills": {
              "arts": 5
            }
          }
        },
        {
          "label": "Decline and focus on other things",
          "detail": "Keep your schedule lighter.",
          "effects": {
            "stats": {
              "energy": 3,
              "happiness": 1
            }
          }
        }
      ]
    },
    {
      "id": "parent-job-change",
      "category": "family",
      "minAge": 0,
      "maxAge": 17,
      "weight": 5,
      "cooldown": 28,
      "title": "A parent considers a new job",
      "description": "A new role may improve household income but requires longer travel and a change in routine.",
      "options": [
        {
          "label": "Take the higher-paying role",
          "detail": "Higher household income, less family time.",
          "effects": {
            "family": {
              "quarterlyIncome": 5500,
              "closeness": -3
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Stay with the stable job",
          "detail": "Protect routine and family availability.",
          "effects": {
            "family": {
              "closeness": 3
            },
            "stats": {
              "happiness": 2
            }
          }
        },
        {
          "label": "Try a small side business",
          "detail": "Potential upside with financial uncertainty.",
          "effects": {
            "family": {
              "funds": -7000,
              "quarterlyIncome": 1800
            },
            "stats": {
              "stress": 3
            }
          }
        }
      ]
    },
    {
      "id": "school-first-friend",
      "category": "social",
      "minAge": 6,
      "maxAge": 12,
      "weight": 7,
      "cooldown": 20,
      "title": "You make a close school friend",
      "description": "A classmate invites you to work together on a school project and spend time after class.",
      "options": [
        {
          "label": "Invest in the friendship",
          "detail": "Build social support and teamwork.",
          "effects": {
            "relationships": {
              "friends": 9
            },
            "stats": {
              "happiness": 4,
              "social": 4
            },
            "skills": {
              "communication": 2
            }
          }
        },
        {
          "label": "Focus on the project only",
          "detail": "Academic benefit with less social commitment.",
          "effects": {
            "school": {
              "effort": 2
            },
            "stats": {
              "smarts": 2,
              "stress": 1
            }
          }
        },
        {
          "label": "Keep your distance",
          "detail": "Protect your time, but miss a connection.",
          "effects": {
            "stats": {
              "happiness": -1
            }
          }
        }
      ]
    },
    {
      "id": "school-science-fair",
      "category": "education",
      "minAge": 8,
      "maxAge": 17,
      "weight": 7,
      "cooldown": 20,
      "title": "A science fair opportunity",
      "description": "Your school selects a small team for a science fair. The project needs effort and some materials.",
      "options": [
        {
          "label": "Lead the project",
          "detail": "High learning value, but a demanding schedule.",
          "effects": {
            "family": {
              "funds": -1600
            },
            "school": {
              "effort": 3
            },
            "stats": {
              "smarts": 4,
              "confidence": 3,
              "stress": 4
            },
            "skills": {
              "science": 5
            }
          }
        },
        {
          "label": "Join as a team member",
          "detail": "Learn collaboratively with manageable pressure.",
          "effects": {
            "family": {
              "funds": -600
            },
            "school": {
              "effort": 2
            },
            "stats": {
              "smarts": 3,
              "social": 2
            },
            "skills": {
              "science": 3
            }
          }
        },
        {
          "label": "Decline to protect your free time",
          "detail": "Reduce workload and stress.",
          "effects": {
            "stats": {
              "energy": 5,
              "stress": -2
            }
          }
        }
      ]
    },
    {
      "id": "school-sports-trial",
      "category": "health",
      "minAge": 7,
      "maxAge": 17,
      "weight": 6,
      "cooldown": 20,
      "title": "Selection trials for the school team",
      "description": "The school team is holding trials. Training can improve fitness and confidence, but takes time.",
      "options": [
        {
          "label": "Train seriously",
          "detail": "Improve fitness and discipline; exam preparation gets harder.",
          "effects": {
            "stats": {
              "fitness": 6,
              "discipline": 3,
              "confidence": 2,
              "stress": 3
            },
            "skills": {
              "communication": 1
            },
            "school": {
              "effort": -1
            }
          }
        },
        {
          "label": "Participate for fun",
          "detail": "Enjoy the activity without a demanding schedule.",
          "effects": {
            "stats": {
              "fitness": 3,
              "happiness": 4,
              "social": 2
            }
          }
        },
        {
          "label": "Skip the trials",
          "detail": "Keep the quarter free for study or rest.",
          "effects": {
            "stats": {
              "energy": 3
            }
          }
        }
      ]
    },
    {
      "id": "school-bullying",
      "category": "social",
      "minAge": 7,
      "maxAge": 17,
      "weight": 4,
      "cooldown": 28,
      "title": "A difficult peer situation",
      "description": "A group of students repeatedly makes fun of you. You need support and a safe response.",
      "options": [
        {
          "label": "Speak with a trusted teacher",
          "detail": "Seek adult support and document the problem.",
          "effects": {
            "relationships": {
              "parents": 2
            },
            "stats": {
              "confidence": 3,
              "stress": -2
            },
            "family": {
              "funds": -300
            }
          }
        },
        {
          "label": "Talk with your family first",
          "detail": "Strengthen support and plan a response together.",
          "effects": {
            "family": {
              "closeness": 5
            },
            "stats": {
              "stress": -3,
              "happiness": 2
            }
          }
        },
        {
          "label": "Try to handle it alone",
          "detail": "You may feel independent, but stress can rise.",
          "effects": {
            "stats": {
              "stress": 6,
              "confidence": -2
            }
          }
        }
      ]
    },
    {
      "id": "school-scholarship",
      "category": "education",
      "minAge": 10,
      "maxAge": 17,
      "weight": 4,
      "cooldown": 32,
      "title": "A scholarship application opens",
      "description": "Your academic record makes you eligible to compete for a local education scholarship.",
      "options": [
        {
          "label": "Prepare a strong application",
          "detail": "Use time for essays and a teacher recommendation.",
          "effects": {
            "school": {
              "effort": 2
            },
            "stats": {
              "stress": 2,
              "confidence": 2
            },
            "family": {
              "educationFund": 12000
            }
          }
        },
        {
          "label": "Ask a teacher for guidance",
          "detail": "A mentor helps you submit a more complete application.",
          "effects": {
            "school": {
              "effort": 1
            },
            "stats": {
              "stress": 1
            },
            "family": {
              "educationFund": 18000
            }
          }
        },
        {
          "label": "Do not apply this year",
          "detail": "Avoid extra pressure, but forgo possible support.",
          "effects": {
            "stats": {
              "energy": 3
            }
          }
        }
      ]
    },
    {
      "id": "exam-pressure",
      "category": "education",
      "minAge": 14,
      "maxAge": 18,
      "weight": 7,
      "cooldown": 16,
      "title": "Board examinations are approaching",
      "description": "The syllabus is large and the exam date is close. Your preparation strategy matters.",
      "options": [
        {
          "label": "Create a disciplined revision plan",
          "detail": "Improve preparation through consistency.",
          "effects": {
            "school": {
              "effort": 4
            },
            "stats": {
              "smarts": 2,
              "discipline": 3,
              "stress": 4
            }
          }
        },
        {
          "label": "Join a coaching programme",
          "detail": "Additional structure and practice at a household cost.",
          "effects": {
            "family": {
              "funds": -6500
            },
            "school": {
              "effort": 5
            },
            "stats": {
              "smarts": 4,
              "stress": 5
            }
          }
        },
        {
          "label": "Reduce activities and recover",
          "detail": "Protect health and focus on a shorter study plan.",
          "effects": {
            "school": {
              "effort": 2
            },
            "stats": {
              "energy": 5,
              "stress": -2
            }
          }
        }
      ]
    },
    {
      "id": "stream-choice",
      "category": "education",
      "minAge": 15,
      "maxAge": 16,
      "weight": 9,
      "cooldown": 60,
      "title": "It is time to choose a Class 11 stream",
      "description": "Your school counsellor explains that subject choices shape eligibility for many university and professional routes.",
      "options": [
        {
          "label": "Science with PCM",
          "detail": "Opens engineering, computing and physical-science pathways; high workload.",
          "effects": {
            "school": {
              "stream": "science-pcm"
            },
            "stats": {
              "stress": 3,
              "smarts": 1
            },
            "skills": {
              "science": 2
            }
          }
        },
        {
          "label": "Science with PCB",
          "detail": "Opens medical and life-science pathways; demanding biology and chemistry.",
          "effects": {
            "school": {
              "stream": "science-pcb"
            },
            "stats": {
              "stress": 3,
              "smarts": 1
            },
            "skills": {
              "science": 2
            }
          }
        },
        {
          "label": "Commerce / Humanities / Vocational",
          "detail": "Choose the pathway that fits your strengths and goals.",
          "effects": {
            "school": {
              "stream": "commerce"
            },
            "stats": {
              "happiness": 2,
              "confidence": 1
            },
            "skills": {
              "business": 2,
              "arts": 1
            }
          }
        }
      ]
    },
    {
      "id": "coaching-centre-offer",
      "category": "education",
      "minAge": 15,
      "maxAge": 19,
      "weight": 6,
      "cooldown": 24,
      "title": "A coaching centre offers an entrance course",
      "description": "A coaching centre promises structured test practice. The cost is significant and results are not guaranteed.",
      "options": [
        {
          "label": "Take the intensive course",
          "detail": "Gain preparation, but workload increases.",
          "effects": {
            "family": {
              "funds": -22000
            },
            "stats": {
              "smarts": 3,
              "stress": 7,
              "discipline": 2
            },
            "exams": {
              "prep": 3
            }
          }
        },
        {
          "label": "Choose a lower-cost test series",
          "detail": "Moderate preparation and a manageable fee.",
          "effects": {
            "family": {
              "funds": -6500
            },
            "stats": {
              "smarts": 2,
              "stress": 3
            },
            "exams": {
              "prep": 1
            }
          }
        },
        {
          "label": "Prepare independently",
          "detail": "Save fees; results depend on consistency.",
          "effects": {
            "stats": {
              "discipline": 3,
              "stress": 2
            },
            "exams": {
              "prep": 1
            }
          }
        }
      ]
    },
    {
      "id": "college-campus-placement",
      "category": "career",
      "minAge": 20,
      "maxAge": 26,
      "weight": 6,
      "cooldown": 32,
      "title": "A campus placement drive is announced",
      "description": "Several employers are visiting campus. Your resume, projects and interview preparation will matter.",
      "options": [
        {
          "label": "Prepare for technical interviews",
          "detail": "Improve role-specific skills and interview readiness.",
          "effects": {
            "skills": {
              "tech": 4
            },
            "stats": {
              "stress": 3,
              "confidence": 2
            },
            "career": {
              "experience": 1
            }
          }
        },
        {
          "label": "Build a portfolio project",
          "detail": "Create evidence of practical capability.",
          "effects": {
            "skills": {
              "tech": 3,
              "business": 1
            },
            "stats": {
              "creativity": 2,
              "stress": 2
            },
            "career": {
              "portfolio": 8
            }
          }
        },
        {
          "label": "Focus on internships instead",
          "detail": "Choose practical experience over immediate placement.",
          "effects": {
            "career": {
              "experience": 2,
              "portfolio": 3
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "internship-offer",
      "category": "career",
      "minAge": 18,
      "maxAge": 26,
      "weight": 7,
      "cooldown": 24,
      "title": "An internship opportunity appears",
      "description": "A local company offers a short internship. The stipend is modest, but the experience could improve your career options.",
      "options": [
        {
          "label": "Accept the internship",
          "detail": "Gain experience and references.",
          "effects": {
            "career": {
              "experience": 2,
              "portfolio": 4
            },
            "stats": {
              "stress": 3,
              "confidence": 2
            },
            "skills": {
              "business": 2
            }
          }
        },
        {
          "label": "Negotiate for a technical project",
          "detail": "Focus on proof of skills and a portfolio.",
          "effects": {
            "career": {
              "portfolio": 6
            },
            "skills": {
              "tech": 3
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Decline and focus on study",
          "detail": "Protect academic performance.",
          "effects": {
            "school": {
              "effort": 2
            },
            "stats": {
              "stress": -2,
              "smarts": 1
            }
          }
        }
      ]
    },
    {
      "id": "first-job-relocation",
      "category": "career",
      "minAge": 18,
      "maxAge": 30,
      "weight": 5,
      "cooldown": 36,
      "title": "A job offer requires relocation",
      "description": "A company in another city offers a better role, but moving will increase housing and travel costs.",
      "options": [
        {
          "label": "Accept and relocate",
          "detail": "Higher career growth with moving costs.",
          "effects": {
            "cityMove": true,
            "cash": -18000,
            "career": {
              "experience": 1
            },
            "stats": {
              "stress": 4,
              "confidence": 2
            }
          }
        },
        {
          "label": "Request hybrid work",
          "detail": "Try to keep your home base while accepting some travel.",
          "effects": {
            "career": {
              "performance": 2
            },
            "stats": {
              "stress": 2
            },
            "family": {
              "closeness": 1
            }
          }
        },
        {
          "label": "Stay where you are",
          "detail": "Keep support networks, but lose this offer.",
          "effects": {
            "relationships": {
              "parents": 2
            },
            "stats": {
              "happiness": 2
            }
          }
        }
      ]
    },
    {
      "id": "cat-result",
      "category": "education",
      "minAge": 21,
      "maxAge": 35,
      "weight": 4,
      "cooldown": 40,
      "title": "Your management entrance result arrives",
      "description": "Your CAT result is one part of a multi-stage business-school selection process. Academic record, interview, writing and experience can still matter.",
      "options": [
        {
          "label": "Prepare seriously for interviews",
          "detail": "Build communication, case analysis and confidence.",
          "effects": {
            "stats": {
              "confidence": 4,
              "stress": 4
            },
            "skills": {
              "communication": 3,
              "business": 2
            },
            "career": {
              "interview": 8
            }
          }
        },
        {
          "label": "Apply to a broader set of schools",
          "detail": "Balance ambition and realistic admission options.",
          "effects": {
            "stats": {
              "stress": 2
            },
            "career": {
              "applications": 3
            }
          }
        },
        {
          "label": "Retake after focused preparation",
          "detail": "Delay admission to improve your score.",
          "effects": {
            "exams": {
              "prep": 2
            },
            "stats": {
              "discipline": 2,
              "stress": 1
            }
          }
        }
      ]
    },
    {
      "id": "family-business-opportunity",
      "category": "entrepreneurship",
      "minAge": 18,
      "maxAge": 45,
      "weight": 5,
      "cooldown": 36,
      "title": "A family business opportunity",
      "description": "A relative offers you a chance to help expand a small local business. The terms need careful review.",
      "options": [
        {
          "label": "Invest a small amount and learn",
          "detail": "Take a limited risk and gain operating experience.",
          "effects": {
            "cash": -25000,
            "career": {
              "experience": 2
            },
            "skills": {
              "business": 3
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Join as an unpaid adviser",
          "detail": "Learn without committing capital.",
          "effects": {
            "career": {
              "experience": 1
            },
            "skills": {
              "business": 2
            },
            "relationships": {
              "parents": 2
            }
          }
        },
        {
          "label": "Decline politely",
          "detail": "Keep your current priorities.",
          "effects": {
            "stats": {
              "stress": -1,
              "happiness": 1
            }
          }
        }
      ]
    },
    {
      "id": "layoff-risk",
      "category": "career",
      "minAge": 22,
      "maxAge": 60,
      "weight": 4,
      "cooldown": 40,
      "title": "Your employer announces cost reductions",
      "description": "Management is reviewing teams and budgets. Your performance, relationships and skills could influence the outcome.",
      "options": [
        {
          "label": "Take on a critical project",
          "detail": "A workload spike may protect your position.",
          "effects": {
            "career": {
              "performance": 7
            },
            "stats": {
              "stress": 7,
              "energy": -5
            },
            "skills": {
              "business": 2
            }
          }
        },
        {
          "label": "Update your resume and network",
          "detail": "Build options before a decision is made.",
          "effects": {
            "career": {
              "portfolio": 4
            },
            "relationships": {
              "network": 5
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Negotiate a voluntary exit package",
          "detail": "Leave with a one-time settlement if available.",
          "effects": {
            "career": {
              "jobExit": true
            },
            "cash": 65000,
            "stats": {
              "stress": -3
            }
          }
        }
      ]
    },
    {
      "id": "promotion-review",
      "category": "career",
      "minAge": 25,
      "maxAge": 60,
      "weight": 5,
      "cooldown": 36,
      "title": "Your annual performance review",
      "description": "Your manager has reviewed delivery, reliability, teamwork and business impact.",
      "options": [
        {
          "label": "Ask for a promotion",
          "detail": "Make a case based on measurable results.",
          "effects": {
            "career": {
              "promotionChance": 18,
              "performance": 4
            },
            "stats": {
              "confidence": 2,
              "stress": 2
            }
          }
        },
        {
          "label": "Ask for training and a specialist track",
          "detail": "Invest in long-term capability.",
          "effects": {
            "skills": {
              "tech": 2,
              "business": 2
            },
            "career": {
              "performance": 2
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Negotiate a salary adjustment",
          "detail": "Request compensation based on market value.",
          "effects": {
            "career": {
              "salaryBoost": 0.05
            },
            "stats": {
              "confidence": 2
            }
          }
        }
      ]
    },
    {
      "id": "burnout-warning",
      "category": "health",
      "minAge": 18,
      "maxAge": 65,
      "weight": 7,
      "cooldown": 24,
      "title": "You are showing signs of burnout",
      "description": "Sleep, workload and constant pressure are affecting your concentration and relationships.",
      "options": [
        {
          "label": "Take a proper recovery period",
          "detail": "Reduce workload and restore energy.",
          "effects": {
            "stats": {
              "energy": 18,
              "stress": -14,
              "health": 3
            },
            "career": {
              "performance": -2
            }
          }
        },
        {
          "label": "Continue but set strict boundaries",
          "detail": "Keep work moving while reducing non-essential commitments.",
          "effects": {
            "stats": {
              "stress": -6,
              "energy": 5
            },
            "career": {
              "performance": 1
            }
          }
        },
        {
          "label": "Ignore the warning signs",
          "detail": "Short-term output may hold, but health risk rises.",
          "effects": {
            "stats": {
              "stress": 10,
              "health": -4,
              "happiness": -3
            },
            "career": {
              "performance": 2
            }
          }
        }
      ]
    },
    {
      "id": "health-insurance-claim",
      "category": "health",
      "minAge": 18,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 32,
      "title": "A medical expense arrives",
      "description": "An unexpected medical expense affects the household budget. Insurance coverage and emergency savings matter.",
      "options": [
        {
          "label": "Use savings and seek treatment",
          "detail": "Pay the bill and protect your health.",
          "effects": {
            "cash": -18000,
            "stats": {
              "health": 5,
              "stress": -2
            }
          }
        },
        {
          "label": "Use an insured network hospital",
          "detail": "Lower out-of-pocket expense if covered.",
          "effects": {
            "cash": -6500,
            "stats": {
              "health": 4
            }
          }
        },
        {
          "label": "Delay treatment",
          "detail": "Preserve cash now, but accept additional health risk.",
          "effects": {
            "stats": {
              "health": -6,
              "stress": 4
            }
          }
        }
      ]
    },
    {
      "id": "inflation-shock",
      "category": "economy",
      "minAge": 18,
      "maxAge": 85,
      "weight": 5,
      "cooldown": 24,
      "title": "A food and fuel price shock",
      "description": "A supply disruption pushes household essentials higher. Inflation reduces real purchasing power.",
      "options": [
        {
          "label": "Cut discretionary spending",
          "detail": "Protect savings by changing consumption.",
          "effects": {
            "stats": {
              "happiness": -1,
              "discipline": 2
            },
            "market": {
              "inflation": 0.3,
              "sentiment": -2
            }
          }
        },
        {
          "label": "Negotiate a salary or contract increase",
          "detail": "Try to protect real income.",
          "effects": {
            "career": {
              "salaryBoost": 0.025
            },
            "stats": {
              "stress": 2
            },
            "market": {
              "inflation": 0.2
            }
          }
        },
        {
          "label": "Use emergency savings",
          "detail": "Keep living standards stable for now.",
          "effects": {
            "cash": -12000,
            "stats": {
              "happiness": 2
            },
            "market": {
              "inflation": 0.2
            }
          }
        }
      ]
    },
    {
      "id": "market-correction",
      "category": "market",
      "minAge": 18,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 40,
      "title": "The stock market corrects sharply",
      "description": "Investor sentiment turns negative. Prices fall, liquidity tightens and risk tolerance is tested.",
      "options": [
        {
          "label": "Hold diversified investments",
          "detail": "Avoid panic selling and review allocation.",
          "effects": {
            "market": {
              "sentiment": 4
            },
            "stats": {
              "stress": 2,
              "discipline": 2
            }
          }
        },
        {
          "label": "Reduce risky holdings",
          "detail": "Sell a portion and preserve liquidity.",
          "effects": {
            "portfolio": {
              "riskTrim": 0.2
            },
            "stats": {
              "stress": -1
            },
            "market": {
              "sentiment": -1
            }
          }
        },
        {
          "label": "Invest additional surplus cash",
          "detail": "Buy at lower prices if you can afford the risk.",
          "effects": {
            "cash": -15000,
            "portfolio": {
              "buyMarket": 15000
            },
            "stats": {
              "stress": 4,
              "discipline": 1
            },
            "market": {
              "sentiment": 2
            }
          }
        }
      ]
    },
    {
      "id": "supplier-failure",
      "category": "business",
      "minAge": 18,
      "maxAge": 85,
      "weight": 5,
      "cooldown": 28,
      "title": "A key supplier misses a delivery",
      "description": "A supplier cannot deliver a key input on time. Your business may face idle capacity or expensive spot purchases.",
      "options": [
        {
          "label": "Pay for emergency procurement",
          "detail": "Protect customer commitments at a higher cost.",
          "effects": {
            "business": {
              "supplyCost": 0.12,
              "service": 3
            },
            "cash": -12000
          }
        },
        {
          "label": "Switch to an alternative supplier",
          "detail": "Pay a qualification cost but reduce dependence.",
          "effects": {
            "business": {
              "supplierResilience": 6
            },
            "cash": -5000
          }
        },
        {
          "label": "Reduce production for the quarter",
          "detail": "Protect cash, but lose sales and customer trust.",
          "effects": {
            "business": {
              "capacity": 0.88,
              "brand": -2
            }
          }
        }
      ]
    },
    {
      "id": "tax-audit",
      "category": "business",
      "minAge": 22,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 48,
      "title": "A tax and compliance review is initiated",
      "description": "Your records are selected for a review. Good documentation reduces disruption; weak controls can be expensive.",
      "options": [
        {
          "label": "Hire a professional adviser",
          "detail": "Pay for review and remediation.",
          "effects": {
            "cash": -18000,
            "business": {
              "compliance": 8
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Handle it internally",
          "detail": "Use your finance skills and employee time.",
          "effects": {
            "business": {
              "compliance": 2
            },
            "stats": {
              "stress": 5
            },
            "skills": {
              "finance": 2
            }
          }
        },
        {
          "label": "Delay and contest the process",
          "detail": "Save immediate fees but risk penalties.",
          "effects": {
            "cash": -32000,
            "business": {
              "compliance": -6
            },
            "stats": {
              "stress": 6
            }
          }
        }
      ]
    },
    {
      "id": "customer-complaint",
      "category": "business",
      "minAge": 18,
      "maxAge": 85,
      "weight": 6,
      "cooldown": 16,
      "title": "A product quality complaint goes viral locally",
      "description": "Customers complain about a defect. The response affects refunds, brand and repeat demand.",
      "options": [
        {
          "label": "Recall affected batches",
          "detail": "Pay immediate costs and protect long-term trust.",
          "effects": {
            "cash": -14000,
            "business": {
              "quality": 5,
              "brand": 5,
              "compliance": 3
            }
          }
        },
        {
          "label": "Offer refunds and a repair programme",
          "detail": "Contain costs and respond publicly.",
          "effects": {
            "cash": -7500,
            "business": {
              "brand": 2,
              "service": 3
            }
          }
        },
        {
          "label": "Deny responsibility",
          "detail": "Save costs temporarily, but reputational damage may persist.",
          "effects": {
            "business": {
              "brand": -9,
              "quality": -2
            },
            "market": {
              "sentiment": -1
            }
          }
        }
      ]
    },
    {
      "id": "competitor-price-war",
      "category": "business",
      "minAge": 18,
      "maxAge": 85,
      "weight": 6,
      "cooldown": 20,
      "title": "A competitor starts a price war",
      "description": "A rival cuts its prices to win market share. You need to choose between margin, volume and differentiation.",
      "options": [
        {
          "label": "Match the price cut",
          "detail": "Protect volume but reduce margins.",
          "effects": {
            "business": {
              "pricePressure": -0.08,
              "marketShare": 3
            }
          }
        },
        {
          "label": "Compete on quality and service",
          "detail": "Invest in customer experience rather than discounting.",
          "effects": {
            "cash": -12000,
            "business": {
              "quality": 4,
              "brand": 3
            }
          }
        },
        {
          "label": "Focus on a profitable niche",
          "detail": "Accept lower volume and defend margins.",
          "effects": {
            "business": {
              "marketShare": -2,
              "margin": 0.05
            }
          }
        }
      ]
    },
    {
      "id": "credit-default-wave",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 36,
      "title": "Borrower defaults rise in your bank",
      "description": "A slowdown causes more missed repayments. Your loan book, provisions and capital buffers come under pressure.",
      "options": [
        {
          "label": "Tighten lending standards",
          "detail": "Reduce new loan growth and improve portfolio quality.",
          "effects": {
            "bank": {
              "loanGrowth": -0.15,
              "trust": 2,
              "creditLoss": -0.01
            }
          }
        },
        {
          "label": "Restructure viable borrowers",
          "detail": "Extend terms to recover more over time.",
          "effects": {
            "bank": {
              "recovery": 0.08,
              "operatingCost": 5000
            }
          }
        },
        {
          "label": "Keep lending aggressively",
          "detail": "Protect growth targets but increase future losses.",
          "effects": {
            "bank": {
              "loanGrowth": 0.12,
              "creditLoss": 0.035,
              "trust": -4
            }
          }
        }
      ]
    },
    {
      "id": "deposit-run",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 48,
      "title": "A rumour triggers deposit withdrawals",
      "description": "Customers question the stability of your bank. Liquidity, communication and capital matter more than headline profit.",
      "options": [
        {
          "label": "Hold extra liquid reserves",
          "detail": "Reduce lending and prepare to meet withdrawals.",
          "effects": {
            "bank": {
              "liquidity": 0.1,
              "trust": 5,
              "loanGrowth": -0.08
            }
          }
        },
        {
          "label": "Raise deposit rates temporarily",
          "detail": "Attract deposits but compress the interest spread.",
          "effects": {
            "bank": {
              "depositRate": 0.005,
              "trust": 2,
              "operatingCost": 12000
            }
          }
        },
        {
          "label": "Borrow short-term liquidity",
          "detail": "Meet withdrawals at a financing cost.",
          "effects": {
            "bank": {
              "wholesaleFunding": 250000,
              "interestCost": 8000,
              "trust": -1
            }
          }
        }
      ]
    },
    {
      "id": "business-expansion-proposal",
      "category": "business",
      "minAge": 22,
      "maxAge": 70,
      "weight": 5,
      "cooldown": 32,
      "title": "A second-city expansion opportunity",
      "description": "A promising location is available. The market is attractive, but logistics and management complexity will increase.",
      "options": [
        {
          "label": "Open a pilot outlet",
          "detail": "Test demand with a smaller investment.",
          "effects": {
            "cash": -65000,
            "business": {
              "expansionLead": 1,
              "brand": 2
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Run market research first",
          "detail": "Pay for information before committing capital.",
          "effects": {
            "cash": -9000,
            "business": {
              "marketInsight": 8
            },
            "stats": {
              "smarts": 1
            }
          }
        },
        {
          "label": "Reject the proposal",
          "detail": "Preserve capital and focus on current operations.",
          "effects": {
            "stats": {
              "stress": -1
            },
            "business": {
              "retainedCash": 1
            }
          }
        }
      ]
    },
    {
      "id": "merger-approach",
      "category": "business",
      "minAge": 30,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 52,
      "title": "A competitor approaches you about a merger",
      "description": "A regional competitor proposes combining operations. The offer includes a cash component and shares, but control would change.",
      "options": [
        {
          "label": "Explore a formal valuation",
          "detail": "Pay advisers and review synergies, liabilities and control.",
          "effects": {
            "cash": -25000,
            "business": {
              "mergerOption": 1
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Reject and remain independent",
          "detail": "Keep strategic control and current operating focus.",
          "effects": {
            "stats": {
              "confidence": 2
            }
          }
        },
        {
          "label": "Offer to acquire selected assets",
          "detail": "Negotiate for a product line or branch rather than the whole firm.",
          "effects": {
            "cash": -10000,
            "business": {
              "acquisitionOption": 1
            }
          }
        }
      ]
    },
    {
      "id": "retirement-planning",
      "category": "life",
      "minAge": 50,
      "maxAge": 75,
      "weight": 6,
      "cooldown": 36,
      "title": "You begin thinking seriously about retirement",
      "description": "Your health, savings, family responsibilities and business succession need a long-term plan.",
      "options": [
        {
          "label": "Build a diversified retirement portfolio",
          "detail": "Move surplus into a more balanced long-term allocation.",
          "effects": {
            "cash": -50000,
            "portfolio": {
              "retirementContribution": 50000
            },
            "stats": {
              "stress": -2
            }
          }
        },
        {
          "label": "Train a successor",
          "detail": "Transfer responsibility gradually to a trusted person.",
          "effects": {
            "career": {
              "succession": 5
            },
            "relationships": {
              "family": 3
            },
            "stats": {
              "confidence": 3
            }
          }
        },
        {
          "label": "Continue working at full pace",
          "detail": "Maintain current income but postpone the transition.",
          "effects": {
            "career": {
              "performance": 2
            },
            "stats": {
              "stress": 4,
              "energy": -4
            }
          }
        }
      ]
    },
    {
      "id": "estate-planning",
      "category": "life",
      "minAge": 55,
      "maxAge": 85,
      "weight": 5,
      "cooldown": 40,
      "title": "Your family asks about estate planning",
      "description": "Your assets are spread across accounts, property and business ownership. Clear records can reduce disputes later.",
      "options": [
        {
          "label": "Prepare a will and succession plan",
          "detail": "Pay legal and documentation costs.",
          "effects": {
            "cash": -22000,
            "family": {
              "closeness": 2
            },
            "stats": {
              "stress": -2
            }
          }
        },
        {
          "label": "Create a family trust structure",
          "detail": "More expensive and complex, but supports structured ownership.",
          "effects": {
            "cash": -65000,
            "career": {
              "succession": 8
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Postpone the discussion",
          "detail": "Avoid immediate expense but leave uncertainty.",
          "effects": {
            "stats": {
              "stress": 3
            },
            "family": {
              "closeness": -2
            }
          }
        }
      ]
    },
    {
      "id": "board-exam-results",
      "category": "education",
      "minAge": 15,
      "maxAge": 19,
      "weight": 7,
      "cooldown": 40,
      "title": "Your board examination results arrive",
      "description": "Your marks will affect available streams, scholarships and institutional choices. The result reflects attendance, preparation, wellbeing and prior academic performance.",
      "options": [
        {
          "label": "Accept the result and plan a realistic route",
          "detail": "Build a course plan around your strengths rather than chasing prestige.",
          "effects": {
            "school": {
              "marks": 2,
              "planning": 5
            },
            "stats": {
              "stress": -3,
              "confidence": 2
            }
          }
        },
        {
          "label": "Appeal for re-evaluation in a weak subject",
          "detail": "Pay an administrative fee and accept uncertainty.",
          "effects": {
            "cash": -1800,
            "school": {
              "marks": 4
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Prepare for an improvement examination",
          "detail": "Spend time revising and delay the next step.",
          "effects": {
            "school": {
              "marks": 7,
              "effort": 3
            },
            "stats": {
              "stress": 5,
              "smarts": 1
            }
          }
        }
      ]
    },
    {
      "id": "scholarship-shortlist",
      "category": "education",
      "minAge": 16,
      "maxAge": 24,
      "weight": 5,
      "cooldown": 36,
      "title": "A scholarship shortlist opens",
      "description": "Your academic record and household finances may qualify you for a merit or need-based award. Applying takes careful documentation.",
      "options": [
        {
          "label": "Prepare a strong application",
          "detail": "Use time and effort to compete for partial tuition support.",
          "effects": {
            "school": {
              "scholarship": 1
            },
            "stats": {
              "stress": 3,
              "discipline": 2
            },
            "family": {
              "educationFund": 18000
            }
          }
        },
        {
          "label": "Ask a teacher to recommend you",
          "detail": "A mentor improves the quality of your application.",
          "effects": {
            "school": {
              "scholarship": 1,
              "marks": 1
            },
            "relationships": {
              "parents": 1
            },
            "stats": {
              "confidence": 2
            }
          }
        },
        {
          "label": "Skip the application",
          "detail": "Avoid the workload, but pay more if you enrol.",
          "effects": {
            "stats": {
              "energy": 4,
              "happiness": 1
            }
          }
        }
      ]
    },
    {
      "id": "jee-main-score",
      "category": "education",
      "minAge": 17,
      "maxAge": 21,
      "weight": 4,
      "cooldown": 48,
      "title": "Your engineering entrance score is released",
      "description": "Your result opens different options. A high score is not an automatic seat: programme demand, counselling choices, eligibility and available seats also matter.",
      "options": [
        {
          "label": "Prepare for the advanced stage",
          "detail": "Commit to a tougher selection process.",
          "effects": {
            "school": {
              "examPrep": 2
            },
            "stats": {
              "stress": 5,
              "discipline": 2
            },
            "career": {
              "portfolio": 1
            }
          }
        },
        {
          "label": "Apply broadly to NIT, IIIT and state options",
          "detail": "Use a wider choice list and compare costs and branches.",
          "effects": {
            "school": {
              "planning": 4
            },
            "stats": {
              "stress": -1,
              "confidence": 2
            }
          }
        },
        {
          "label": "Consider a diploma or alternative technology route",
          "detail": "A practical route can still build a strong technical career.",
          "effects": {
            "school": {
              "planning": 3
            },
            "stats": {
              "confidence": 3
            },
            "skills": {
              "tech": 3
            }
          }
        }
      ]
    },
    {
      "id": "neet-counselling",
      "category": "education",
      "minAge": 17,
      "maxAge": 22,
      "weight": 3,
      "cooldown": 48,
      "title": "Medical counselling begins",
      "description": "Your entrance rank, eligible choices, seat availability, fees and willingness to relocate determine the options worth pursuing.",
      "options": [
        {
          "label": "Join a government medical seat if allotted",
          "detail": "Lower tuition, intense study and long training.",
          "effects": {
            "cash": -12000,
            "career": {
              "educationProgress": 1
            },
            "stats": {
              "stress": 5,
              "confidence": 4
            }
          }
        },
        {
          "label": "Compare private college cost and debt",
          "detail": "A seat is not automatically affordable; assess long-term repayment.",
          "effects": {
            "school": {
              "planning": 5
            },
            "stats": {
              "smarts": 2,
              "stress": 2
            }
          }
        },
        {
          "label": "Choose allied health or life sciences",
          "detail": "Build a healthcare career through another programme.",
          "effects": {
            "school": {
              "planning": 4
            },
            "skills": {
              "science": 3
            },
            "stats": {
              "confidence": 2
            }
          }
        }
      ]
    },
    {
      "id": "college-hostel-choice",
      "category": "education",
      "minAge": 17,
      "maxAge": 25,
      "weight": 5,
      "cooldown": 32,
      "title": "You need to decide where to live during college",
      "description": "A hostel, shared flat or commuting arrangement changes cost, independence, study time and social support.",
      "options": [
        {
          "label": "Choose the campus hostel",
          "detail": "Predictable community and shorter commute; recurring charges apply.",
          "effects": {
            "cash": -14000,
            "stats": {
              "social": 3,
              "confidence": 2,
              "stress": -1
            }
          }
        },
        {
          "label": "Share a flat near campus",
          "detail": "More independence but rent, chores and coordination matter.",
          "effects": {
            "cash": -22000,
            "stats": {
              "discipline": 3,
              "confidence": 3,
              "stress": 2
            }
          }
        },
        {
          "label": "Commute from family home",
          "detail": "Lower cost but less time and campus access.",
          "effects": {
            "family": {
              "closeness": 2
            },
            "stats": {
              "stress": 2,
              "discipline": 1
            }
          }
        }
      ]
    },
    {
      "id": "college-internship",
      "category": "education",
      "minAge": 18,
      "maxAge": 27,
      "weight": 6,
      "cooldown": 24,
      "title": "A summer internship opportunity appears",
      "description": "An internship offers experience and a reference, but it may be unpaid or require travel. Consider the value of the work and the cost.",
      "options": [
        {
          "label": "Accept a paid internship",
          "detail": "Earn a modest stipend and gain relevant experience.",
          "effects": {
            "cash": 18000,
            "career": {
              "experience": 1,
              "portfolio": 2
            },
            "stats": {
              "stress": 3,
              "confidence": 2
            }
          }
        },
        {
          "label": "Accept an unpaid research internship",
          "detail": "Build a portfolio and mentor relationship at a financial cost.",
          "effects": {
            "cash": -5000,
            "career": {
              "experience": 1,
              "portfolio": 3
            },
            "stats": {
              "smarts": 2,
              "stress": 3
            }
          }
        },
        {
          "label": "Keep the summer for exams and recovery",
          "detail": "Protect your grades and wellbeing.",
          "effects": {
            "school": {
              "examPrep": 2
            },
            "stats": {
              "energy": 8,
              "stress": -4
            }
          }
        }
      ]
    },
    {
      "id": "academic-probation",
      "category": "education",
      "minAge": 18,
      "maxAge": 28,
      "weight": 4,
      "cooldown": 36,
      "title": "Your academic performance is below the required standard",
      "description": "Missed classes and incomplete assignments put your progression at risk. A recovery plan is possible, but it costs time.",
      "options": [
        {
          "label": "Meet the faculty adviser and remediate",
          "detail": "Use tutoring and a structured plan.",
          "effects": {
            "cash": -4500,
            "school": {
              "marks": 5,
              "attendance": 2
            },
            "stats": {
              "stress": 3,
              "discipline": 3
            }
          }
        },
        {
          "label": "Reduce extracurricular commitments",
          "detail": "Reallocate time to coursework.",
          "effects": {
            "school": {
              "marks": 3,
              "effort": 2
            },
            "stats": {
              "social": -2,
              "stress": -1
            }
          }
        },
        {
          "label": "Ignore the warning",
          "detail": "Keep current commitments, but the risk remains.",
          "effects": {
            "school": {
              "marks": -6
            },
            "stats": {
              "stress": 7,
              "happiness": -3
            }
          }
        }
      ]
    },
    {
      "id": "cat-interview-call",
      "category": "education",
      "minAge": 21,
      "maxAge": 32,
      "weight": 3,
      "cooldown": 48,
      "title": "A business school invites you to interview",
      "description": "Your entrance score clears one screening stage. The final decision may also consider academic history, written work, interview, diversity and work exposure.",
      "options": [
        {
          "label": "Attend a structured interview-preparation workshop",
          "detail": "Practise cases and communication; pay a fee.",
          "effects": {
            "cash": -9000,
            "career": {
              "interview": 8
            },
            "stats": {
              "confidence": 3,
              "stress": 2
            }
          }
        },
        {
          "label": "Prepare independently with alumni",
          "detail": "Lower direct cost, but use time and networking.",
          "effects": {
            "career": {
              "interview": 5
            },
            "relationships": {
              "network": 4
            },
            "stats": {
              "confidence": 2
            }
          }
        },
        {
          "label": "Decline and continue working",
          "detail": "Keep building experience and consider another intake.",
          "effects": {
            "career": {
              "experience": 1
            },
            "stats": {
              "stress": -2,
              "confidence": 1
            }
          }
        }
      ]
    },
    {
      "id": "first-job-offer",
      "category": "career",
      "minAge": 18,
      "maxAge": 35,
      "weight": 6,
      "cooldown": 32,
      "title": "You receive your first formal job offer",
      "description": "The role has a salary, probation period and learning opportunity. Compensation is only one part of the decision.",
      "options": [
        {
          "label": "Accept the role and negotiate a review date",
          "detail": "Start earning while setting expectations.",
          "effects": {
            "career": {
              "performance": 3,
              "experience": 1
            },
            "stats": {
              "confidence": 4,
              "stress": 2
            }
          }
        },
        {
          "label": "Negotiate pay and learning support",
          "detail": "Try to improve total compensation; the employer may decline.",
          "effects": {
            "career": {
              "salaryBoost": 0.05,
              "performance": 1
            },
            "stats": {
              "confidence": 3,
              "stress": 4
            }
          }
        },
        {
          "label": "Decline for a more aligned opportunity",
          "detail": "Preserve your direction but remain without this income.",
          "effects": {
            "career": {
              "portfolio": 2
            },
            "stats": {
              "stress": 3,
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "job-restructuring",
      "category": "career",
      "minAge": 21,
      "maxAge": 65,
      "weight": 4,
      "cooldown": 40,
      "title": "Your employer announces restructuring",
      "description": "A project may close or teams may be reorganised. Transfer, reskilling and redundancy are all possible.",
      "options": [
        {
          "label": "Volunteer for an internal transfer",
          "detail": "Keep employment and learn a new function.",
          "effects": {
            "career": {
              "performance": 2,
              "experience": 1
            },
            "skills": {
              "business": 2
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Use the transition to reskill",
          "detail": "Spend on learning and improve future employability.",
          "effects": {
            "cash": -12000,
            "career": {
              "portfolio": 3
            },
            "skills": {
              "tech": 3
            },
            "stats": {
              "stress": 4
            }
          }
        },
        {
          "label": "Take a severance package",
          "detail": "Receive a one-time payout and search for a new role.",
          "effects": {
            "cash": 65000,
            "career": {
              "jobLoss": 1
            },
            "stats": {
              "stress": 6,
              "happiness": -2
            }
          }
        }
      ]
    },
    {
      "id": "performance-review",
      "category": "career",
      "minAge": 21,
      "maxAge": 65,
      "weight": 6,
      "cooldown": 20,
      "title": "Your annual performance review is due",
      "description": "Your manager reviews delivery, reliability, collaboration and results. The outcome shapes progression and future opportunities.",
      "options": [
        {
          "label": "Present measurable achievements",
          "detail": "Use evidence and feedback to support a promotion case.",
          "effects": {
            "career": {
              "performance": 7,
              "interview": 2
            },
            "stats": {
              "confidence": 3,
              "stress": 2
            }
          }
        },
        {
          "label": "Ask for a development plan",
          "detail": "Trade an immediate raise for skills and mentorship.",
          "effects": {
            "career": {
              "performance": 3,
              "portfolio": 3
            },
            "skills": {
              "communication": 2
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Challenge the rating formally",
          "detail": "May correct an unfair review, but workplace relationships can suffer.",
          "effects": {
            "career": {
              "performance": 2
            },
            "relationships": {
              "network": -2
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "professional-certification",
      "category": "career",
      "minAge": 20,
      "maxAge": 55,
      "weight": 5,
      "cooldown": 28,
      "title": "A professional certification could unlock new work",
      "description": "A recognised qualification may help in your field, but fees, preparation and the value of the credential vary.",
      "options": [
        {
          "label": "Enrol in a recognised certification",
          "detail": "Pay for training and add a verified in-game credential.",
          "effects": {
            "cash": -18000,
            "career": {
              "certifications": 1,
              "portfolio": 2
            },
            "skills": {
              "tech": 2,
              "finance": 2
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Build a public project portfolio",
          "detail": "Demonstrate practical capability instead of buying a certificate.",
          "effects": {
            "career": {
              "portfolio": 4
            },
            "skills": {
              "tech": 2,
              "communication": 1
            },
            "stats": {
              "confidence": 2
            }
          }
        },
        {
          "label": "Wait until your employer sponsors it",
          "detail": "Preserve cash and ask about professional development funding.",
          "effects": {
            "career": {
              "performance": 1
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "startup-equity-offer",
      "category": "career",
      "minAge": 22,
      "maxAge": 50,
      "weight": 3,
      "cooldown": 48,
      "title": "A startup offers lower salary with equity",
      "description": "The company is early-stage. Equity may become valuable or worthless; salary and job stability are lower.",
      "options": [
        {
          "label": "Join for learning and meaningful equity",
          "detail": "Accept risk for ownership and responsibility.",
          "effects": {
            "career": {
              "salaryBoost": -0.15,
              "experience": 2,
              "portfolio": 4
            },
            "stats": {
              "stress": 5,
              "confidence": 3
            }
          }
        },
        {
          "label": "Negotiate a safer salary floor",
          "detail": "Reduce downside while keeping some upside.",
          "effects": {
            "career": {
              "salaryBoost": -0.05,
              "performance": 1
            },
            "stats": {
              "confidence": 2,
              "stress": 2
            }
          }
        },
        {
          "label": "Stay with stable employment",
          "detail": "Choose predictable income and benefits.",
          "effects": {
            "career": {
              "performance": 2
            },
            "stats": {
              "stress": -2
            }
          }
        }
      ]
    },
    {
      "id": "family-business-succession",
      "category": "family",
      "minAge": 18,
      "maxAge": 55,
      "weight": 3,
      "cooldown": 52,
      "title": "Your family discusses a business succession plan",
      "description": "A relative wants you to take a role in the family enterprise. It could offer ownership and practical experience, but family conflict is possible.",
      "options": [
        {
          "label": "Join with written responsibilities and accounts",
          "detail": "Clarify duties, salary and ownership before joining.",
          "effects": {
            "family": {
              "closeness": 3
            },
            "career": {
              "experience": 2,
              "portfolio": 2
            },
            "skills": {
              "business": 3
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Advise from outside",
          "detail": "Help professionally while protecting family boundaries.",
          "effects": {
            "relationships": {
              "parents": 2,
              "network": 2
            },
            "skills": {
              "business": 2
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Decline respectfully",
          "detail": "Pursue an independent path.",
          "effects": {
            "family": {
              "closeness": -2
            },
            "stats": {
              "confidence": 2,
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "parent-care-responsibility",
      "category": "family",
      "minAge": 25,
      "maxAge": 65,
      "weight": 4,
      "cooldown": 48,
      "title": "A parent needs more support",
      "description": "Ageing parents may need help with appointments, mobility and household expenses. Your time and finances are both affected.",
      "options": [
        {
          "label": "Arrange regular care and medical reviews",
          "detail": "Spend money to reduce risk and distribute care tasks.",
          "effects": {
            "cash": -24000,
            "family": {
              "closeness": 5
            },
            "relationships": {
              "parents": 5
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Share responsibilities with siblings",
          "detail": "Coordinate a family care plan.",
          "effects": {
            "cash": -8000,
            "family": {
              "closeness": 3
            },
            "stats": {
              "stress": 1,
              "discipline": 2
            }
          }
        },
        {
          "label": "Postpone support",
          "detail": "Keep cash and time now, but family trust declines.",
          "effects": {
            "family": {
              "closeness": -6
            },
            "relationships": {
              "parents": -6
            },
            "stats": {
              "stress": 4
            }
          }
        }
      ]
    },
    {
      "id": "marriage-finance-conversation",
      "category": "family",
      "minAge": 22,
      "maxAge": 55,
      "weight": 4,
      "cooldown": 48,
      "title": "A serious conversation about shared finances",
      "description": "A relationship becomes stronger when both people understand debt, savings, family obligations and financial priorities.",
      "options": [
        {
          "label": "Build a shared household budget",
          "detail": "Agree on contributions and emergency savings.",
          "effects": {
            "relationships": {
              "partner": 5
            },
            "family": {
              "closeness": 2
            },
            "stats": {
              "discipline": 2,
              "stress": -2
            }
          }
        },
        {
          "label": "Keep separate accounts with clear boundaries",
          "detail": "Preserve financial autonomy and agree on shared bills.",
          "effects": {
            "relationships": {
              "partner": 3
            },
            "stats": {
              "confidence": 2,
              "stress": -1
            }
          }
        },
        {
          "label": "Avoid the conversation",
          "detail": "Reduce immediate discomfort, but uncertainty remains.",
          "effects": {
            "relationships": {
              "partner": -5
            },
            "stats": {
              "stress": 4
            }
          }
        }
      ]
    },
    {
      "id": "child-learning-support",
      "category": "family",
      "minAge": 28,
      "maxAge": 55,
      "weight": 5,
      "cooldown": 36,
      "title": "A child struggles with a subject at school",
      "description": "Your child needs support. Tutoring, family learning time and a school discussion have different costs and benefits.",
      "options": [
        {
          "label": "Arrange a subject tutor",
          "detail": "Pay for focused help.",
          "effects": {
            "cash": -8000,
            "family": {
              "closeness": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Study together at home",
          "detail": "Use time and patience rather than money.",
          "effects": {
            "family": {
              "closeness": 4
            },
            "stats": {
              "energy": -4,
              "discipline": 2
            }
          }
        },
        {
          "label": "Meet the teacher to understand the gap",
          "detail": "Look for teaching, health or confidence factors before acting.",
          "effects": {
            "cash": -1200,
            "family": {
              "closeness": 2
            },
            "stats": {
              "smarts": 1
            }
          }
        }
      ]
    },
    {
      "id": "small-business-working-capital",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 6,
      "cooldown": 28,
      "title": "Your company is short of working capital",
      "description": "Orders are available but wages, inventory and supplier payments arrive before customers pay. A profitable business can still run out of cash.",
      "options": [
        {
          "label": "Inject owner equity",
          "detail": "Strengthen liquidity without creating debt.",
          "effects": {
            "cash": -35000,
            "business": {
              "capitalInjection": 35000
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Negotiate supplier credit",
          "detail": "Preserve cash but accept a future payable and possibly higher price.",
          "effects": {
            "business": {
              "supplierCredit": 1
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Reduce production and protect liquidity",
          "detail": "Lower short-term costs but risk lost orders.",
          "effects": {
            "business": {
              "capacityFactor": 0.8,
              "brand": -2
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "factory-quality-audit",
      "category": "business",
      "minAge": 22,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 32,
      "title": "A factory quality audit reveals a defect",
      "description": "A batch is below specification. Rework, recall or shipment controls affect cash and customer trust.",
      "options": [
        {
          "label": "Recall and rework the batch",
          "detail": "Pay the cost and protect long-term reliability.",
          "effects": {
            "cash": -26000,
            "business": {
              "quality": 5,
              "brand": 4,
              "compliance": 4
            }
          }
        },
        {
          "label": "Ship only conforming inventory",
          "detail": "Reduce output and accept a smaller quarter.",
          "effects": {
            "business": {
              "capacityFactor": 0.86,
              "quality": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Ship everything and hope",
          "detail": "Preserve cash now but risk complaints and penalties.",
          "effects": {
            "business": {
              "brand": -8,
              "compliance": -5
            },
            "market": {
              "sentiment": -1
            }
          }
        }
      ]
    },
    {
      "id": "key-employee-resigns",
      "category": "business",
      "minAge": 22,
      "maxAge": 75,
      "weight": 5,
      "cooldown": 24,
      "title": "A key employee resigns",
      "description": "A skilled employee holds process knowledge and supplier relationships. The vacancy may disrupt capacity until filled.",
      "options": [
        {
          "label": "Offer a retention package",
          "detail": "Raise payroll to keep the employee.",
          "effects": {
            "cash": -16000,
            "business": {
              "retention": 5,
              "capacityFactor": 1.05
            }
          }
        },
        {
          "label": "Promote and train an internal successor",
          "detail": "Develop your team and accept a temporary productivity dip.",
          "effects": {
            "business": {
              "training": 4,
              "capacityFactor": 0.92
            },
            "skills": {
              "business": 2
            }
          }
        },
        {
          "label": "Let the employee leave",
          "detail": "Save immediate costs but lose capability.",
          "effects": {
            "business": {
              "capacityFactor": 0.82,
              "quality": -2
            },
            "stats": {
              "stress": 3
            }
          }
        }
      ]
    },
    {
      "id": "raw-material-price-spike",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 6,
      "cooldown": 20,
      "title": "Raw-material prices spike",
      "description": "A crop shortfall or freight disruption increases input costs. Passing prices on may reduce demand.",
      "options": [
        {
          "label": "Lock in a supplier contract",
          "detail": "Pay a deposit to secure supply for several quarters.",
          "effects": {
            "cash": -22000,
            "business": {
              "supplyCost": -0.04,
              "supplierResilience": 5
            }
          }
        },
        {
          "label": "Raise product prices selectively",
          "detail": "Protect margins but test customer sensitivity.",
          "effects": {
            "business": {
              "pricePressure": 0.06,
              "marketShare": -1
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Use inventory buffers and reduce output",
          "detail": "Protect cash and avoid buying at the peak.",
          "effects": {
            "business": {
              "capacityFactor": 0.82
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "retail-location-footfall",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 5,
      "cooldown": 28,
      "title": "A high-footfall retail location becomes available",
      "description": "The site has strong traffic but higher rent and a long lease. Your brand and inventory systems must support the expansion.",
      "options": [
        {
          "label": "Sign a short pilot lease",
          "detail": "Test the location before committing to a long contract.",
          "effects": {
            "cash": -42000,
            "business": {
              "marketInsight": 5,
              "brand": 2
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Negotiate turnover-linked rent",
          "detail": "Trade a revenue share for lower fixed obligations.",
          "effects": {
            "cash": -12000,
            "business": {
              "supplierResilience": 2
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Decline and focus on existing stores",
          "detail": "Avoid overexpansion.",
          "effects": {
            "stats": {
              "stress": -2,
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "competitor-new-product",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 5,
      "cooldown": 24,
      "title": "A competitor launches a better product",
      "description": "A rival offers improved quality or a feature customers value. Your response could be product development, price positioning or a niche strategy.",
      "options": [
        {
          "label": "Fund research and development",
          "detail": "Invest in product improvement over several quarters.",
          "effects": {
            "cash": -38000,
            "business": {
              "quality": 5,
              "innovation": 5
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Compete on price and service",
          "detail": "Protect customers but accept tighter margins.",
          "effects": {
            "business": {
              "pricePressure": -0.05,
              "service": 4
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Focus on a defensible niche",
          "detail": "Target customers who value your existing strengths.",
          "effects": {
            "business": {
              "marketShare": 2,
              "brand": 3
            },
            "stats": {
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "cybersecurity-incident",
      "category": "business",
      "minAge": 22,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 40,
      "title": "Your company suffers a cybersecurity incident",
      "description": "Customer information or operations may have been exposed. The response affects cash, compliance and reputation.",
      "options": [
        {
          "label": "Engage an incident-response team",
          "detail": "Contain the breach and investigate quickly.",
          "effects": {
            "cash": -42000,
            "business": {
              "compliance": 6,
              "brand": 2
            },
            "stats": {
              "stress": 4
            }
          }
        },
        {
          "label": "Use internal IT staff and notify affected customers",
          "detail": "Lower cost but slower recovery.",
          "effects": {
            "cash": -15000,
            "business": {
              "compliance": 3,
              "brand": 1
            },
            "stats": {
              "stress": 6
            }
          }
        },
        {
          "label": "Conceal the incident",
          "detail": "Avoid an immediate bill but face serious future legal and trust risks.",
          "effects": {
            "business": {
              "compliance": -10,
              "brand": -9
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "business-credit-line-review",
      "category": "business",
      "minAge": 22,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 32,
      "title": "Your lender reviews the company credit line",
      "description": "The lender checks cash flow, leverage, inventory quality and repayment history. Borrowing can help growth but raises fixed obligations.",
      "options": [
        {
          "label": "Submit audited accounts and reduce drawings",
          "detail": "Improve the chance of renewal.",
          "effects": {
            "business": {
              "compliance": 5
            },
            "career": {
              "portfolio": 1
            },
            "stats": {
              "discipline": 2
            }
          }
        },
        {
          "label": "Offer additional collateral",
          "detail": "Secure the facility but place an asset at risk.",
          "effects": {
            "cash": -6000,
            "business": {
              "creditLimit": 1
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Decline further borrowing",
          "detail": "Grow more slowly with less financial risk.",
          "effects": {
            "business": {
              "debtAversion": 1
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "bank-capital-adequacy",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 40,
      "title": "Your bank approaches its capital adequacy limit",
      "description": "Rapid loan growth has increased risk-weighted assets. Capital, provisions and retained earnings matter more than headline loan volume.",
      "options": [
        {
          "label": "Raise fresh equity capital",
          "detail": "Add funds and dilute your ownership share in a real corporate structure; in this simplified game your own capital is injected.",
          "effects": {
            "cash": -180000,
            "business": {
              "capitalInjection": 180000
            },
            "bank": {
              "capitalBuffer": 4
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Retain earnings and pause dividends",
          "detail": "Protect capital and slow expansion.",
          "effects": {
            "bank": {
              "capitalBuffer": 3,
              "loanGrowth": -0.08
            },
            "stats": {
              "discipline": 2
            }
          }
        },
        {
          "label": "Keep expanding aggressively",
          "detail": "Higher future returns are possible but regulatory and insolvency risk rise.",
          "effects": {
            "bank": {
              "capitalBuffer": -4,
              "loanGrowth": 0.1
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "bank-fraud-investigation",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 52,
      "title": "A suspicious transaction alert reaches your bank",
      "description": "A large transaction is inconsistent with the customer profile. Compliance review may delay revenue but protects the institution.",
      "options": [
        {
          "label": "Freeze and investigate the transaction",
          "detail": "Pay review costs and improve compliance.",
          "effects": {
            "cash": -18000,
            "bank": {
              "trust": 4,
              "compliance": 6
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Escalate to an independent auditor",
          "detail": "More expensive but strengthens controls.",
          "effects": {
            "cash": -32000,
            "bank": {
              "trust": 6,
              "compliance": 8
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Ignore the alert",
          "detail": "Save time now but create a future enforcement risk.",
          "effects": {
            "bank": {
              "trust": -8,
              "compliance": -12
            },
            "stats": {
              "stress": 1
            }
          }
        }
      ]
    },
    {
      "id": "bank-deposit-competition",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 5,
      "cooldown": 28,
      "title": "A rival bank raises its deposit rate",
      "description": "Depositors compare interest, service quality, convenience and trust. Matching rates may attract funds but compress your spread.",
      "options": [
        {
          "label": "Match part of the rate increase",
          "detail": "Defend deposits at a lower margin.",
          "effects": {
            "bank": {
              "depositRate": 0.003,
              "trust": 2
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Invest in branch service and digital reliability",
          "detail": "Spend on quality rather than rate alone.",
          "effects": {
            "cash": -24000,
            "bank": {
              "trust": 5,
              "service": 5
            },
            "stats": {
              "smarts": 1
            }
          }
        },
        {
          "label": "Accept deposit outflows and reduce the loan book",
          "detail": "Protect liquidity and shrink safely.",
          "effects": {
            "bank": {
              "depositOutflow": 0.08,
              "trust": 1,
              "loanGrowth": -0.1
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "bank-liquidity-gap",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 36,
      "title": "A maturity mismatch creates a liquidity gap",
      "description": "Depositors can withdraw sooner than some loans mature. Long-term assets do not automatically pay short-term liabilities.",
      "options": [
        {
          "label": "Sell liquid securities at a small discount",
          "detail": "Restore liquidity and realise a modest loss.",
          "effects": {
            "bank": {
              "liquidity": 0.12,
              "trust": 2,
              "creditLoss": 0.005
            }
          }
        },
        {
          "label": "Arrange wholesale funding",
          "detail": "Pay interest to secure short-term liquidity.",
          "effects": {
            "cash": -30000,
            "bank": {
              "wholesaleFunding": 250000,
              "trust": 1
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Restrict new lending and hold cash",
          "detail": "Reduce growth to restore a safer balance sheet.",
          "effects": {
            "bank": {
              "liquidity": 0.08,
              "loanGrowth": -0.12
            },
            "stats": {
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "bank-npa-review",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 32,
      "title": "Your bank's non-performing assets rise",
      "description": "Some borrowers have missed payments. Provisioning reduces current profit but recognises the risk in the loan book.",
      "options": [
        {
          "label": "Create adequate provisions",
          "detail": "Recognise losses early and preserve trust.",
          "effects": {
            "bank": {
              "creditLoss": 0.025,
              "trust": 3,
              "compliance": 3
            }
          }
        },
        {
          "label": "Restructure viable borrowers",
          "detail": "Extend repayment schedules where cash flow can recover.",
          "effects": {
            "bank": {
              "recovery": 0.08,
              "trust": 2
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Evergreen weak loans",
          "detail": "Avoid recognising losses but increase future fragility.",
          "effects": {
            "bank": {
              "creditLoss": 0.01,
              "trust": -5,
              "compliance": -3
            }
          }
        }
      ]
    },
    {
      "id": "macro-interest-hike",
      "category": "economy",
      "minAge": 18,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 36,
      "title": "The central bank raises policy rates",
      "description": "Borrowing costs rise and new investment may slow. Savers may receive better deposit rates, while leveraged businesses face pressure.",
      "options": [
        {
          "label": "Reduce leverage and refinance cautiously",
          "detail": "Prioritise debt service and cash reserves.",
          "effects": {
            "market": {
              "repoRate": 0.35,
              "sentiment": -2
            },
            "stats": {
              "discipline": 2,
              "stress": -1
            }
          }
        },
        {
          "label": "Keep investing for long-term growth",
          "detail": "Accept higher financing cost in pursuit of future returns.",
          "effects": {
            "market": {
              "repoRate": 0.35,
              "sentiment": 1
            },
            "stats": {
              "stress": 4,
              "confidence": 1
            }
          }
        },
        {
          "label": "Hold more savings and short-duration assets",
          "detail": "Protect liquidity while waiting for clarity.",
          "effects": {
            "market": {
              "repoRate": 0.35
            },
            "stats": {
              "stress": -2,
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "macro-recession",
      "category": "economy",
      "minAge": 18,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 52,
      "title": "The economy enters a downturn",
      "description": "Demand softens, unemployment rises and customers delay purchases. Cash buffers and debt maturity matter.",
      "options": [
        {
          "label": "Cut discretionary costs and protect cash",
          "detail": "Reduce near-term spending.",
          "effects": {
            "market": {
              "sentiment": -5,
              "unemployment": 0.8
            },
            "stats": {
              "discipline": 3,
              "stress": 2
            }
          }
        },
        {
          "label": "Invest counter-cyclically in productive assets",
          "detail": "Take measured risk while prices and demand are weak.",
          "effects": {
            "cash": -30000,
            "market": {
              "sentiment": -2,
              "unemployment": 0.5
            },
            "stats": {
              "confidence": 3,
              "stress": 5
            }
          }
        },
        {
          "label": "Support employees and retain skilled staff",
          "detail": "Higher cost now may preserve capability and morale.",
          "effects": {
            "cash": -22000,
            "business": {
              "brand": 3,
              "retention": 4
            },
            "market": {
              "sentiment": -3
            }
          }
        }
      ]
    },
    {
      "id": "currency-volatility",
      "category": "economy",
      "minAge": 18,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 24,
      "title": "The rupee becomes volatile",
      "description": "Foreign-currency exposure changes import costs, overseas asset values and the value of international contracts.",
      "options": [
        {
          "label": "Hedge essential foreign-currency expenses",
          "detail": "Pay a premium to reduce uncertainty.",
          "effects": {
            "cash": -9500,
            "market": {
              "sentiment": 1
            },
            "stats": {
              "discipline": 2
            }
          }
        },
        {
          "label": "Reduce unhedged foreign exposure",
          "detail": "Sell part of the foreign-currency position.",
          "effects": {
            "portfolio": {
              "riskTrim": 0.1
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Keep the exposure",
          "detail": "Accept volatility and possible gains or losses.",
          "effects": {
            "stats": {
              "stress": 3,
              "confidence": 1
            }
          }
        }
      ]
    },
    {
      "id": "public-infrastructure-contract",
      "category": "business",
      "minAge": 25,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 52,
      "title": "A public infrastructure tender is announced",
      "description": "A government contract could bring large revenue, but qualification, guarantees, compliance and delayed payments create risk.",
      "options": [
        {
          "label": "Prepare a compliant bid",
          "detail": "Pay documentation and bid costs.",
          "effects": {
            "cash": -32000,
            "business": {
              "compliance": 5,
              "contractPipeline": 1
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Partner with an experienced contractor",
          "detail": "Share margin and execution risk.",
          "effects": {
            "cash": -15000,
            "business": {
              "supplierResilience": 4,
              "contractPipeline": 1
            },
            "relationships": {
              "network": 3
            }
          }
        },
        {
          "label": "Avoid the tender",
          "detail": "Protect cash and focus on existing customers.",
          "effects": {
            "stats": {
              "stress": -1,
              "discipline": 1
            }
          }
        }
      ]
    },
    {
      "id": "export-order",
      "category": "business",
      "minAge": 25,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 44,
      "title": "An overseas buyer requests a large order",
      "description": "Export demand could increase capacity utilisation, but foreign exchange, quality certification, customs and shipping risks matter.",
      "options": [
        {
          "label": "Accept after credit insurance and contract checks",
          "detail": "Pay for diligence and protect receivables.",
          "effects": {
            "cash": -25000,
            "business": {
              "exportReadiness": 5,
              "contractPipeline": 1
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Ship a small pilot order",
          "detail": "Test fulfilment and customer reliability.",
          "effects": {
            "cash": -11000,
            "business": {
              "exportReadiness": 2,
              "brand": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Decline until systems are ready",
          "detail": "Avoid taking on delivery risk prematurely.",
          "effects": {
            "business": {
              "compliance": 2
            },
            "stats": {
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "intellectual-property-dispute",
      "category": "business",
      "minAge": 25,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 44,
      "title": "A competitor challenges your intellectual property",
      "description": "A brand, design or software feature may overlap with another firm's rights. Legal advice and product changes have costs.",
      "options": [
        {
          "label": "Obtain specialist legal advice",
          "detail": "Pay for a measured response and preserve records.",
          "effects": {
            "cash": -28000,
            "business": {
              "compliance": 5,
              "brand": 1
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Redesign the disputed feature",
          "detail": "Avoid prolonged litigation at a development cost.",
          "effects": {
            "cash": -18000,
            "business": {
              "quality": 2,
              "innovation": 3
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Ignore the notice",
          "detail": "Risk injunction, damages and reputational harm.",
          "effects": {
            "business": {
              "compliance": -7,
              "brand": -5
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "talent-poaching",
      "category": "business",
      "minAge": 22,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 28,
      "title": "A competitor tries to poach your best manager",
      "description": "Your team leader has marketable skills and an outside offer. Retention, succession and compensation all affect the decision.",
      "options": [
        {
          "label": "Offer a fair retention package",
          "detail": "Increase compensation and define a growth path.",
          "effects": {
            "cash": -24000,
            "business": {
              "retention": 6,
              "quality": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Promote a deputy and document processes",
          "detail": "Reduce dependence on one person.",
          "effects": {
            "business": {
              "succession": 5,
              "training": 4
            },
            "skills": {
              "business": 2
            }
          }
        },
        {
          "label": "Let them leave and recruit externally",
          "detail": "Accept a vacancy and recruitment cost.",
          "effects": {
            "cash": -9000,
            "business": {
              "capacityFactor": 0.9,
              "retention": 2
            },
            "stats": {
              "stress": 3
            }
          }
        }
      ]
    },
    {
      "id": "environmental-compliance",
      "category": "business",
      "minAge": 25,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 40,
      "title": "A new environmental compliance requirement applies",
      "description": "Your operation must meet updated waste, water or emissions standards. Compliance costs money but may improve resource efficiency.",
      "options": [
        {
          "label": "Install compliant equipment",
          "detail": "Capitalise an asset and reduce future operating risk.",
          "effects": {
            "cash": -55000,
            "business": {
              "compliance": 8,
              "capacityFactor": 0.98
            },
            "stats": {
              "discipline": 2
            }
          }
        },
        {
          "label": "Adopt a phased improvement plan",
          "detail": "Lower upfront cost but maintain a remediation schedule.",
          "effects": {
            "cash": -22000,
            "business": {
              "compliance": 4
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Ignore the requirement",
          "detail": "Avoid immediate costs but face penalties and disruption.",
          "effects": {
            "business": {
              "compliance": -10,
              "brand": -5
            },
            "market": {
              "sentiment": -1
            }
          }
        }
      ]
    },
    {
      "id": "product-recall",
      "category": "business",
      "minAge": 20,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 48,
      "title": "A product recall affects your industry",
      "description": "A safety issue across the sector changes customer trust, insurance costs and regulatory attention.",
      "options": [
        {
          "label": "Conduct a voluntary safety review",
          "detail": "Pay for inspection and demonstrate responsible practice.",
          "effects": {
            "cash": -19000,
            "business": {
              "compliance": 5,
              "quality": 3,
              "brand": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Wait for regulator guidance",
          "detail": "Preserve cash, but uncertainty affects customers.",
          "effects": {
            "business": {
              "brand": -2,
              "compliance": 1
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Continue without review",
          "detail": "Save costs but risk serious liability if your product is affected.",
          "effects": {
            "business": {
              "compliance": -6,
              "brand": -7
            },
            "stats": {
              "stress": 4
            }
          }
        }
      ]
    },
    {
      "id": "insurance-premium-renewal",
      "category": "finance",
      "minAge": 18,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 36,
      "title": "Your insurance premium renews at a higher price",
      "description": "Claims and medical inflation push premiums upward. Coverage, deductibles and emergency savings should be considered together.",
      "options": [
        {
          "label": "Keep comprehensive cover",
          "detail": "Pay the higher premium and protect against large losses.",
          "effects": {
            "cash": -14500,
            "stats": {
              "stress": -2,
              "discipline": 1
            }
          }
        },
        {
          "label": "Choose a higher deductible",
          "detail": "Lower the premium but retain more out-of-pocket risk.",
          "effects": {
            "cash": -8000,
            "stats": {
              "stress": 1,
              "discipline": 2
            }
          }
        },
        {
          "label": "Go without cover",
          "detail": "Preserve cash but accept potentially severe future costs.",
          "effects": {
            "stats": {
              "stress": 3,
              "confidence": 1
            }
          }
        }
      ]
    },
    {
      "id": "tax-regime-choice",
      "category": "finance",
      "minAge": 18,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 40,
      "title": "You review your tax and savings plan",
      "description": "Your income, deductions, investments and business structure influence the tax outcome. A professional review may be worthwhile.",
      "options": [
        {
          "label": "Consult a tax professional",
          "detail": "Pay for advice and reduce filing and compliance risk.",
          "effects": {
            "cash": -6500,
            "skills": {
              "finance": 1
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Learn the rules and file yourself",
          "detail": "Save adviser fees but spend time and take responsibility.",
          "effects": {
            "skills": {
              "finance": 3
            },
            "stats": {
              "smarts": 1,
              "stress": 2
            }
          }
        },
        {
          "label": "Delay filing",
          "detail": "Avoid time now but risk interest and penalties.",
          "effects": {
            "cash": -4500,
            "stats": {
              "stress": 4,
              "discipline": -2
            }
          }
        }
      ]
    },
    {
      "id": "unexpected-inheritance",
      "category": "life",
      "minAge": 25,
      "maxAge": 85,
      "weight": 2,
      "cooldown": 80,
      "title": "A relative leaves a modest inheritance",
      "description": "An estate distribution arrives. It can improve your balance sheet, but family expectations and estate obligations remain.",
      "options": [
        {
          "label": "Settle the estate and reserve for taxes/fees",
          "detail": "Receive a smaller but documented amount.",
          "effects": {
            "cash": 95000,
            "family": {
              "closeness": 2
            },
            "stats": {
              "stress": -1,
              "discipline": 2
            }
          }
        },
        {
          "label": "Use part to support family",
          "detail": "Share the benefit and strengthen relationships.",
          "effects": {
            "cash": 50000,
            "family": {
              "closeness": 6
            },
            "relationships": {
              "parents": 3
            },
            "stats": {
              "happiness": 3
            }
          }
        },
        {
          "label": "Invest in a long-term skill or business",
          "detail": "Commit the windfall to productive activity.",
          "effects": {
            "cash": 35000,
            "career": {
              "portfolio": 2
            },
            "skills": {
              "business": 2
            },
            "stats": {
              "confidence": 2
            }
          }
        }
      ]
    },
    {
      "id": "family-education-decision",
      "category": "family",
      "minAge": 30,
      "maxAge": 60,
      "weight": 5,
      "cooldown": 36,
      "title": "Your family must choose an education budget",
      "description": "School quality, coaching, travel and savings all compete for household resources. Spending more does not guarantee a better outcome.",
      "options": [
        {
          "label": "Choose a strong affordable school and save",
          "detail": "Balance support with the future education fund.",
          "effects": {
            "cash": -12000,
            "family": {
              "educationFund": 16000
            },
            "stats": {
              "discipline": 2,
              "stress": -1
            }
          }
        },
        {
          "label": "Pay for additional coaching and activities",
          "detail": "Increase exposure at a higher current cost.",
          "effects": {
            "cash": -26000,
            "family": {
              "educationFund": -7000
            },
            "stats": {
              "stress": 3,
              "happiness": 2
            }
          }
        },
        {
          "label": "Ask the child what support they need",
          "detail": "Prioritise their interests and wellbeing.",
          "effects": {
            "family": {
              "closeness": 5
            },
            "relationships": {
              "family": 4
            },
            "stats": {
              "happiness": 2
            }
          }
        }
      ]
    },
    {
      "id": "career-burnout-warning",
      "category": "health",
      "minAge": 20,
      "maxAge": 70,
      "weight": 5,
      "cooldown": 24,
      "title": "Your body is signalling sustained overwork",
      "description": "Poor sleep, long work hours and constant pressure are affecting concentration and health. Productivity is not sustainable without recovery.",
      "options": [
        {
          "label": "Take leave and rebuild routines",
          "detail": "Lose some short-term income or progress but recover.",
          "effects": {
            "stats": {
              "energy": 22,
              "stress": -18,
              "health": 4,
              "happiness": 3
            },
            "career": {
              "performance": -2
            }
          }
        },
        {
          "label": "Delegate and renegotiate workload",
          "detail": "Keep working but reduce chronic overload.",
          "effects": {
            "cash": -10000,
            "stats": {
              "energy": 8,
              "stress": -8
            },
            "career": {
              "performance": 1
            }
          }
        },
        {
          "label": "Continue at the same pace",
          "detail": "Protect immediate output but increase burnout risk.",
          "effects": {
            "stats": {
              "energy": -10,
              "stress": 12,
              "health": -4,
              "happiness": -3
            },
            "career": {
              "performance": 2
            }
          }
        }
      ]
    },
    {
      "id": "exam-anxiety",
      "category": "education",
      "minAge": 14,
      "maxAge": 24,
      "weight": 6,
      "cooldown": 20,
      "title": "Exam anxiety begins affecting your preparation",
      "description": "You understand the material, but worry is disrupting sleep and recall. A balanced plan can improve performance.",
      "options": [
        {
          "label": "Create a realistic revision timetable",
          "detail": "Use spaced practice and rest breaks.",
          "effects": {
            "school": {
              "examPrep": 2
            },
            "stats": {
              "discipline": 3,
              "stress": -4,
              "energy": 3
            }
          }
        },
        {
          "label": "Talk to a mentor or counsellor",
          "detail": "Get support and identify the source of pressure.",
          "effects": {
            "relationships": {
              "parents": 2
            },
            "stats": {
              "stress": -7,
              "confidence": 2
            }
          }
        },
        {
          "label": "Study longer every day",
          "detail": "Extra hours may help briefly but fatigue compounds.",
          "effects": {
            "school": {
              "examPrep": 1
            },
            "stats": {
              "stress": 8,
              "energy": -12
            }
          }
        }
      ]
    },
    {
      "id": "peer-pressure-spending",
      "category": "life",
      "minAge": 13,
      "maxAge": 30,
      "weight": 5,
      "cooldown": 24,
      "title": "Friends pressure you into expensive spending",
      "description": "A social event or new device is beyond your normal budget. Belonging, financial discipline and priorities conflict.",
      "options": [
        {
          "label": "Set a spending limit and join selectively",
          "detail": "Maintain relationships without overspending.",
          "effects": {
            "cash": -2500,
            "relationships": {
              "friends": 3
            },
            "stats": {
              "discipline": 2,
              "happiness": 1
            }
          }
        },
        {
          "label": "Decline and explain honestly",
          "detail": "Protect money and practise boundaries.",
          "effects": {
            "relationships": {
              "friends": -1
            },
            "stats": {
              "confidence": 3,
              "discipline": 2
            }
          }
        },
        {
          "label": "Spend to fit in",
          "detail": "Gain short-term social approval at a cost.",
          "effects": {
            "cash": -9500,
            "relationships": {
              "friends": 5
            },
            "stats": {
              "happiness": 2,
              "stress": 2
            }
          }
        }
      ]
    },
    {
      "id": "major-move-opportunity",
      "category": "life",
      "minAge": 18,
      "maxAge": 65,
      "weight": 4,
      "cooldown": 36,
      "title": "An opportunity requires relocating to another city",
      "description": "A role or institution in another city offers new possibilities. Moving costs money and changes living expenses and support networks.",
      "options": [
        {
          "label": "Move for the opportunity",
          "detail": "Pay relocation costs and pursue the new path.",
          "effects": {
            "cash": -28000,
            "career": {
              "performance": 3
            },
            "stats": {
              "confidence": 3,
              "stress": 3
            }
          }
        },
        {
          "label": "Negotiate hybrid or remote work",
          "detail": "Try to preserve your current base.",
          "effects": {
            "career": {
              "performance": 1
            },
            "skills": {
              "communication": 1
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Stay close to family",
          "detail": "Keep your support system and decline the opportunity.",
          "effects": {
            "family": {
              "closeness": 3
            },
            "stats": {
              "happiness": 2,
              "confidence": -1
            }
          }
        }
      ]
    },
    {
      "id": "retirement-market-drawdown",
      "category": "finance",
      "minAge": 55,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 36,
      "title": "Your retirement portfolio falls sharply",
      "description": "A market decline arrives just as you begin withdrawing money. Your spending horizon and asset allocation now matter.",
      "options": [
        {
          "label": "Reduce withdrawals temporarily",
          "detail": "Protect long-term portfolio sustainability.",
          "effects": {
            "portfolio": {
              "riskTrim": 0.15
            },
            "stats": {
              "discipline": 3,
              "stress": 2
            }
          }
        },
        {
          "label": "Rebalance to a diversified mix",
          "detail": "Accept transaction costs and maintain a long-term plan.",
          "effects": {
            "cash": -7000,
            "portfolio": {
              "riskTrim": 0.08
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Sell everything in panic",
          "detail": "Eliminate market exposure but lock in losses.",
          "effects": {
            "portfolio": {
              "riskTrim": 0.45
            },
            "stats": {
              "stress": -1,
              "confidence": -3
            }
          }
        }
      ]
    },
    {
      "id": "founder-cofounder-conflict",
      "category": "business",
      "minAge": 22,
      "maxAge": 65,
      "weight": 3,
      "cooldown": 44,
      "title": "You and a co-founder disagree about expansion",
      "description": "One founder wants rapid growth; another wants stable cash flow. Governance and clear decision rights can prevent destructive conflict.",
      "options": [
        {
          "label": "Agree on a board-approved plan and cash limits",
          "detail": "Clarify authority, milestones and performance measures.",
          "effects": {
            "business": {
              "governance": 6,
              "compliance": 3
            },
            "relationships": {
              "network": 2
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Run a small pilot before scaling",
          "detail": "Use evidence to settle the debate.",
          "effects": {
            "cash": -18000,
            "business": {
              "marketInsight": 6,
              "governance": 3
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Expand immediately",
          "detail": "Take the growth bet and accept liquidity risk.",
          "effects": {
            "cash": -65000,
            "business": {
              "capacityFactor": 1.12,
              "governance": -3
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "bank-digital-transformation",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 40,
      "title": "Your bank must modernise its digital platform",
      "description": "Customers expect reliable mobile banking and quick service. Technology spend can improve retention but implementation creates project risk.",
      "options": [
        {
          "label": "Fund a staged digital upgrade",
          "detail": "Invest in systems and staff training.",
          "effects": {
            "cash": -75000,
            "bank": {
              "service": 7,
              "trust": 3
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Partner with a technology provider",
          "detail": "Lower initial spend but pay recurring fees.",
          "effects": {
            "cash": -32000,
            "bank": {
              "service": 4,
              "trust": 2
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Postpone the upgrade",
          "detail": "Preserve capital but lose some competitive appeal.",
          "effects": {
            "bank": {
              "trust": -3,
              "service": -2
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "industry-automation-shift",
      "category": "career",
      "minAge": 22,
      "maxAge": 65,
      "weight": 4,
      "cooldown": 40,
      "title": "Automation changes your industry",
      "description": "Routine tasks are becoming automated. Employees who adapt can move into analysis, maintenance, customer work or supervision.",
      "options": [
        {
          "label": "Retrain in digital and analytical tools",
          "detail": "Invest in practical skills and keep earning.",
          "effects": {
            "cash": -14000,
            "skills": {
              "tech": 4,
              "finance": 2
            },
            "career": {
              "portfolio": 3
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Move into people and client-facing work",
          "detail": "Develop communication and relationship skills.",
          "effects": {
            "skills": {
              "communication": 4,
              "business": 2
            },
            "career": {
              "performance": 2
            },
            "stats": {
              "confidence": 2
            }
          }
        },
        {
          "label": "Ignore the shift",
          "detail": "Keep current routines but accept reduced future options.",
          "effects": {
            "career": {
              "performance": -3
            },
            "stats": {
              "stress": 3
            }
          }
        }
      ]
    },
    {
      "id": "research-grant",
      "category": "education",
      "minAge": 20,
      "maxAge": 40,
      "weight": 3,
      "cooldown": 48,
      "title": "A research grant opportunity opens",
      "description": "A university or lab is funding practical research. A strong proposal, mentor and track record help, but delivery commitments are substantial.",
      "options": [
        {
          "label": "Prepare a detailed proposal",
          "detail": "Invest time and research effort.",
          "effects": {
            "career": {
              "portfolio": 4
            },
            "skills": {
              "science": 3
            },
            "stats": {
              "stress": 4,
              "smarts": 2
            }
          }
        },
        {
          "label": "Join an experienced research team",
          "detail": "Contribute to an existing project and gain mentorship.",
          "effects": {
            "career": {
              "experience": 1,
              "portfolio": 2
            },
            "relationships": {
              "network": 3
            },
            "stats": {
              "smarts": 1
            }
          }
        },
        {
          "label": "Focus on paid work",
          "detail": "Preserve income and revisit research later.",
          "effects": {
            "career": {
              "experience": 1
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "public-exam-final-stage",
      "category": "education",
      "minAge": 21,
      "maxAge": 35,
      "weight": 3,
      "cooldown": 40,
      "title": "You qualify for the final stage of a public examination",
      "description": "Written success is only one stage. Interview, document verification, medical standards or service preferences may still determine final selection.",
      "options": [
        {
          "label": "Prepare with a structured mock interview",
          "detail": "Practise communication and current affairs.",
          "effects": {
            "career": {
              "interview": 7
            },
            "skills": {
              "communication": 2,
              "arts": 1
            },
            "stats": {
              "stress": 3,
              "confidence": 2
            }
          }
        },
        {
          "label": "Review documents and eligibility carefully",
          "detail": "Avoid preventable disqualification.",
          "effects": {
            "career": {
              "compliance": 3
            },
            "stats": {
              "discipline": 3,
              "stress": -1
            }
          }
        },
        {
          "label": "Take a recovery week before the next stage",
          "detail": "Protect mental energy and confidence.",
          "effects": {
            "stats": {
              "energy": 12,
              "stress": -8,
              "happiness": 2
            }
          }
        }
      ]
    },
    {
      "id": "business-insolvency-warning",
      "category": "business",
      "minAge": 22,
      "maxAge": 80,
      "weight": 3,
      "cooldown": 44,
      "title": "A company is close to a cash-flow crisis",
      "description": "Your company has positive sales but cannot meet payroll and supplier payments. Profit, cash flow and solvency are not the same.",
      "options": [
        {
          "label": "Inject equity and renegotiate supplier terms",
          "detail": "Support the company but risk more personal capital.",
          "effects": {
            "cash": -50000,
            "business": {
              "capitalInjection": 50000,
              "governance": 2
            },
            "stats": {
              "stress": 4
            }
          }
        },
        {
          "label": "Sell idle assets and reduce capacity",
          "detail": "Shrink the business to a sustainable size.",
          "effects": {
            "business": {
              "capacityFactor": 0.72,
              "retainedCash": 1
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Continue operating without a plan",
          "detail": "Hope for a recovery and risk defaults.",
          "effects": {
            "business": {
              "compliance": -4,
              "brand": -3
            },
            "stats": {
              "stress": 7
            }
          }
        }
      ]
    },
    {
      "id": "dividend-policy-vote",
      "category": "business",
      "minAge": 25,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 32,
      "title": "Your board reviews the dividend policy",
      "description": "Shareholders want distributions, but lenders and employees need a resilient operating company. Cash reserves and profitable retained earnings should guide the decision.",
      "options": [
        {
          "label": "Retain most profits for productive investment",
          "detail": "Prioritise cash runway and future capacity.",
          "effects": {
            "business": {
              "governance": 3,
              "retainedCash": 1
            },
            "stats": {
              "discipline": 2
            }
          }
        },
        {
          "label": "Pay a sustainable dividend from realised profit",
          "detail": "Reward owners without distributing working capital.",
          "effects": {
            "business": {
              "dividendPolicy": 1,
              "governance": 2
            },
            "stats": {
              "happiness": 1
            }
          }
        },
        {
          "label": "Pay an unusually large dividend",
          "detail": "Short-term personal benefit may weaken the company.",
          "effects": {
            "business": {
              "governance": -5,
              "liquidityRisk": 1
            },
            "stats": {
              "stress": 1
            }
          }
        }
      ]
    },
    {
      "id": "family-medical-emergency",
      "category": "health",
      "minAge": 18,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 36,
      "title": "A family member needs urgent care",
      "description": "A close relative requires treatment. Time, costs and quality of care all matter, and insurance may not cover every item.",
      "options": [
        {
          "label": "Arrange treatment immediately",
          "detail": "Use emergency savings and protect health.",
          "effects": {
            "cash": -32000,
            "family": {
              "closeness": 5
            },
            "relationships": {
              "parents": 4
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Coordinate family support and insurance",
          "detail": "Share costs and manage documentation.",
          "effects": {
            "cash": -16000,
            "family": {
              "closeness": 4
            },
            "stats": {
              "discipline": 2,
              "stress": 2
            }
          }
        },
        {
          "label": "Delay care while arranging funds",
          "detail": "Preserve cash today but increase medical risk.",
          "effects": {
            "stats": {
              "health": -2,
              "stress": 6
            },
            "family": {
              "closeness": -2
            }
          }
        }
      ]
    },
    {
      "id": "career-ethical-dilemma",
      "category": "career",
      "minAge": 18,
      "maxAge": 70,
      "weight": 4,
      "cooldown": 36,
      "title": "You are asked to manipulate a performance report",
      "description": "A manager wants a more favourable presentation of results. Short-term loyalty may conflict with professional integrity and long-term reputation.",
      "options": [
        {
          "label": "Refuse and document the concern",
          "detail": "Protect integrity and use formal reporting channels.",
          "effects": {
            "career": {
              "compliance": 5,
              "performance": -1
            },
            "stats": {
              "confidence": 3,
              "stress": 4
            }
          }
        },
        {
          "label": "Seek advice from a trusted mentor",
          "detail": "Clarify the facts and options before responding.",
          "effects": {
            "relationships": {
              "network": 2
            },
            "skills": {
              "communication": 1
            },
            "stats": {
              "smarts": 1,
              "stress": 2
            }
          }
        },
        {
          "label": "Comply with the instruction",
          "detail": "Avoid immediate conflict but increase future legal and reputational exposure.",
          "effects": {
            "career": {
              "compliance": -6,
              "performance": 2
            },
            "stats": {
              "stress": 3,
              "confidence": -2
            }
          }
        }
      ]
    },
    {
      "id": "housing-market-correction",
      "category": "finance",
      "minAge": 22,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 48,
      "title": "Property prices soften in your city",
      "description": "Transaction volumes fall and sellers become more flexible. A cheaper asset can still be a poor purchase if rent, maintenance and financing do not work.",
      "options": [
        {
          "label": "Review rental yield and vacancy before buying",
          "detail": "Pay for due diligence and compare alternatives.",
          "effects": {
            "cash": -5500,
            "career": {
              "portfolio": 1
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Buy only if the numbers meet your return target",
          "detail": "Use conservative assumptions and avoid emotional bidding.",
          "effects": {
            "stats": {
              "discipline": 3,
              "stress": 1
            }
          }
        },
        {
          "label": "Wait and build liquidity",
          "detail": "Keep flexibility until the market stabilises.",
          "effects": {
            "stats": {
              "stress": -1,
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "community-leadership",
      "category": "life",
      "minAge": 25,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 32,
      "title": "Your neighbourhood asks you to lead a community project",
      "description": "Residents want better waste management, safety or learning support. The work creates social value but consumes time and money.",
      "options": [
        {
          "label": "Lead a practical, measurable project",
          "detail": "Invest time and build trust.",
          "effects": {
            "cash": -6000,
            "relationships": {
              "network": 4
            },
            "stats": {
              "confidence": 3,
              "happiness": 3,
              "stress": 2
            }
          }
        },
        {
          "label": "Support an experienced organiser",
          "detail": "Contribute within a manageable role.",
          "effects": {
            "cash": -2500,
            "relationships": {
              "network": 2
            },
            "stats": {
              "happiness": 2,
              "energy": -2
            }
          }
        },
        {
          "label": "Decline due to current commitments",
          "detail": "Protect your time and priorities.",
          "effects": {
            "stats": {
              "stress": -2,
              "discipline": 1
            }
          }
        }
      ]
    },
    {
      "id": "retirement-health-adjustment",
      "category": "health",
      "minAge": 60,
      "maxAge": 90,
      "weight": 5,
      "cooldown": 28,
      "title": "You reconsider your health and daily routine",
      "description": "Energy recovery takes longer with age. Strength, sleep, social connection and preventative care influence quality of life.",
      "options": [
        {
          "label": "Adopt a supervised fitness routine",
          "detail": "Pay for support and rebuild capacity gradually.",
          "effects": {
            "cash": -9000,
            "stats": {
              "fitness": 4,
              "health": 4,
              "energy": 3,
              "stress": -3
            }
          }
        },
        {
          "label": "Prioritise sleep and regular check-ups",
          "detail": "Make steady changes with lower physical strain.",
          "effects": {
            "cash": -4500,
            "stats": {
              "health": 3,
              "energy": 5,
              "stress": -4
            }
          }
        },
        {
          "label": "Keep the same routine",
          "detail": "Avoid disruption but miss a chance to adapt.",
          "effects": {
            "stats": {
              "fitness": -2,
              "energy": -3
            }
          }
        }
      ]
    },
    {
      "id": "inheritance-dispute",
      "category": "family",
      "minAge": 30,
      "maxAge": 85,
      "weight": 2,
      "cooldown": 72,
      "title": "A family inheritance dispute emerges",
      "description": "Different relatives disagree about an estate. Transparent records and mediation can protect relationships.",
      "options": [
        {
          "label": "Use independent mediation",
          "detail": "Pay for a fair process.",
          "effects": {
            "cash": -18000,
            "family": {
              "closeness": 4
            },
            "relationships": {
              "parents": 1
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Share documents and propose a transparent settlement",
          "detail": "Use communication and evidence.",
          "effects": {
            "skills": {
              "communication": 2
            },
            "relationships": {
              "parents": 2
            },
            "stats": {
              "confidence": 2
            }
          }
        },
        {
          "label": "Escalate immediately to litigation",
          "detail": "Protect a legal claim but raise cost and conflict.",
          "effects": {
            "cash": -45000,
            "family": {
              "closeness": -5
            },
            "stats": {
              "stress": 6
            }
          }
        }
      ]
    },
    {
      "id": "school-bullying-report",
      "category": "education",
      "minAge": 8,
      "maxAge": 17,
      "weight": 4,
      "cooldown": 36,
      "title": "A student reports bullying at school",
      "description": "A child is being excluded or intimidated. A safe response should protect the student and use appropriate adults and school procedures.",
      "options": [
        {
          "label": "Tell a trusted adult and request a safety plan",
          "detail": "Prioritise safety and documentation.",
          "effects": {
            "relationships": {
              "parents": 3
            },
            "school": {
              "attendance": 1
            },
            "stats": {
              "confidence": 2,
              "stress": -2
            }
          }
        },
        {
          "label": "Support the student and include them in activities",
          "detail": "Build peer support while involving responsible adults.",
          "effects": {
            "relationships": {
              "friends": 4
            },
            "stats": {
              "empathy": 3,
              "happiness": 2
            }
          }
        },
        {
          "label": "Ignore it to avoid attention",
          "detail": "The situation may continue.",
          "effects": {
            "stats": {
              "stress": 5,
              "happiness": -3,
              "confidence": -2
            }
          }
        }
      ]
    },
    {
      "id": "early-talent-discovery",
      "category": "education",
      "minAge": 7,
      "maxAge": 17,
      "weight": 5,
      "cooldown": 40,
      "title": "A teacher notices a particular strength",
      "description": "A teacher identifies talent in mathematics, sport, art, communication or practical problem-solving. Early encouragement can broaden future options.",
      "options": [
        {
          "label": "Join an enrichment programme",
          "detail": "Spend on coaching and structured practice.",
          "effects": {
            "cash": -3500,
            "skills": {
              "science": 2,
              "arts": 2
            },
            "stats": {
              "smarts": 2,
              "confidence": 3,
              "stress": 2
            }
          }
        },
        {
          "label": "Explore the interest casually",
          "detail": "Keep learning enjoyable and balanced.",
          "effects": {
            "skills": {
              "arts": 1,
              "tech": 1
            },
            "stats": {
              "creativity": 3,
              "happiness": 3
            }
          }
        },
        {
          "label": "Focus on current school responsibilities",
          "detail": "Maintain your academic routine for now.",
          "effects": {
            "school": {
              "effort": 2
            },
            "stats": {
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "apprenticeship-offer",
      "category": "education",
      "minAge": 16,
      "maxAge": 24,
      "weight": 4,
      "cooldown": 36,
      "title": "A local employer offers an apprenticeship",
      "description": "A structured apprenticeship combines supervised work and practical learning. It can lead to a skilled occupation without a conventional degree.",
      "options": [
        {
          "label": "Accept the apprenticeship",
          "detail": "Earn a stipend and complete practical training.",
          "effects": {
            "cash": 9000,
            "career": {
              "experience": 1,
              "portfolio": 2,
              "apprenticeship": 1
            },
            "skills": {
              "tech": 3
            },
            "stats": {
              "discipline": 2
            }
          }
        },
        {
          "label": "Continue formal studies",
          "detail": "Keep academic options open.",
          "effects": {
            "school": {
              "examPrep": 2
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Ask for a part-time apprenticeship",
          "detail": "Balance work and study at a slower pace.",
          "effects": {
            "cash": 4000,
            "career": {
              "experience": 1
            },
            "skills": {
              "tech": 1
            },
            "stats": {
              "stress": 2
            }
          }
        }
      ]
    },
    {
      "id": "global-expansion",
      "category": "business",
      "minAge": 30,
      "maxAge": 75,
      "weight": 2,
      "cooldown": 60,
      "title": "An international distributor proposes a partnership",
      "description": "Cross-border growth creates foreign exchange exposure, certification, logistics and legal obligations. A small pilot can reveal whether the market is viable.",
      "options": [
        {
          "label": "Commission a market-entry study",
          "detail": "Pay for market sizing, partner checks and compliance research.",
          "effects": {
            "cash": -48000,
            "business": {
              "exportReadiness": 6,
              "marketInsight": 6
            },
            "stats": {
              "smarts": 2
            }
          }
        },
        {
          "label": "Run a limited export pilot",
          "detail": "Test one product and one buyer before scaling.",
          "effects": {
            "cash": -85000,
            "business": {
              "exportReadiness": 4,
              "contractPipeline": 1
            },
            "stats": {
              "stress": 5
            }
          }
        },
        {
          "label": "Decline for now",
          "detail": "Preserve management focus and liquidity.",
          "effects": {
            "stats": {
              "stress": -1,
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "school-science-track",
      "category": "education",
      "minAge": 10,
      "maxAge": 15,
      "weight": 6,
      "cooldown": 28,
      "title": "A subject begins to come naturally",
      "description": "A teacher notices that you learn one subject unusually quickly. The opportunity can shape your later stream, but specialising too early can close other doors.",
      "options": [
        {
          "label": "Join the science enrichment group",
          "detail": "Extra laboratory and mathematics practice; workload increases.",
          "effects": {
            "school": {
              "marks": 3,
              "examPrep": 1
            },
            "skills": {
              "science": 2,
              "tech": 1
            },
            "stats": {
              "stress": 4,
              "smarts": 2
            }
          }
        },
        {
          "label": "Stay broad across subjects",
          "detail": "Protect balance and keep future options open.",
          "effects": {
            "school": {
              "marks": 1
            },
            "skills": {
              "arts": 1,
              "science": 1,
              "communication": 1
            },
            "stats": {
              "happiness": 2,
              "stress": -2
            }
          }
        },
        {
          "label": "Focus on sport or arts instead",
          "detail": "Develop a different strength and identity.",
          "effects": {
            "stats": {
              "fitness": 3,
              "creativity": 3,
              "happiness": 3
            },
            "school": {
              "marks": -1
            }
          }
        }
      ]
    },
    {
      "id": "classroom-peer-pressure",
      "category": "social",
      "minAge": 12,
      "maxAge": 17,
      "weight": 5,
      "cooldown": 20,
      "title": "Friends are pressuring you to skip class",
      "description": "A group of friends wants you to skip a school activity. The social reward is immediate, but attendance and trust can be affected.",
      "options": [
        {
          "label": "Go with the group",
          "detail": "Avoid conflict now, but miss learning time.",
          "effects": {
            "school": {
              "attendance": -2,
              "marks": -2
            },
            "relationships": {
              "friends": 4
            },
            "stats": {
              "discipline": -2,
              "stress": 1
            }
          }
        },
        {
          "label": "Decline and explain why",
          "detail": "Protect attendance; some friends may disagree.",
          "effects": {
            "school": {
              "attendance": 2
            },
            "relationships": {
              "friends": -1
            },
            "stats": {
              "discipline": 2,
              "confidence": 2
            }
          }
        },
        {
          "label": "Suggest a group activity after school",
          "detail": "Keep the friendship while setting a boundary.",
          "effects": {
            "school": {
              "attendance": 1
            },
            "relationships": {
              "friends": 3
            },
            "stats": {
              "communication": 2,
              "happiness": 2
            }
          }
        }
      ]
    },
    {
      "id": "board-exam-coaching-tradeoff",
      "category": "education",
      "minAge": 15,
      "maxAge": 18,
      "weight": 6,
      "cooldown": 24,
      "title": "A coaching institute offers an intensive board-exam course",
      "description": "The course may improve examination readiness, but long hours add stress and fees matter to the household.",
      "options": [
        {
          "label": "Take the full intensive course",
          "detail": "Higher preparation, high cost and workload.",
          "effects": {
            "cash": -18000,
            "school": {
              "marks": 5,
              "examPrep": 2
            },
            "stats": {
              "stress": 9,
              "energy": -8,
              "discipline": 2
            }
          }
        },
        {
          "label": "Choose weekend classes",
          "detail": "Moderate gains with less disruption.",
          "effects": {
            "cash": -6500,
            "school": {
              "marks": 2,
              "examPrep": 1
            },
            "stats": {
              "stress": 3,
              "energy": -2
            }
          }
        },
        {
          "label": "Use free resources and a study plan",
          "detail": "Preserve family cash; self-discipline becomes important.",
          "effects": {
            "school": {
              "marks": 1,
              "effort": 2
            },
            "stats": {
              "discipline": 3,
              "stress": 1
            }
          }
        }
      ]
    },
    {
      "id": "board-subject-retest",
      "category": "education",
      "minAge": 16,
      "maxAge": 18,
      "weight": 4,
      "cooldown": 36,
      "title": "One subject result is weaker than expected",
      "description": "A low subject mark may affect admission choices. You can request re-evaluation, sit a supplementary exam or adjust your plans.",
      "options": [
        {
          "label": "Pay for re-evaluation",
          "detail": "There may be a correction, but no guarantee.",
          "effects": {
            "cash": -2200,
            "school": {
              "marks": 2
            },
            "stats": {
              "stress": 2,
              "confidence": 1
            }
          }
        },
        {
          "label": "Prepare for a supplementary exam",
          "detail": "Spend time and delay the next step.",
          "effects": {
            "cash": -4500,
            "school": {
              "marks": 4,
              "effort": 2
            },
            "stats": {
              "stress": 5,
              "discipline": 2
            }
          }
        },
        {
          "label": "Choose a course that fits your result",
          "detail": "Avoid further cost and pursue a different route.",
          "effects": {
            "career": {
              "portfolio": 1
            },
            "stats": {
              "stress": -2,
              "confidence": 1
            }
          }
        }
      ]
    },
    {
      "id": "college-roommate-conflict",
      "category": "social",
      "minAge": 18,
      "maxAge": 25,
      "weight": 5,
      "cooldown": 32,
      "title": "A hostel roommate dispute is affecting your routine",
      "description": "Noise, shared responsibilities and incompatible schedules are disrupting sleep and study.",
      "options": [
        {
          "label": "Discuss a written room agreement",
          "detail": "Resolve expectations directly.",
          "effects": {
            "relationships": {
              "friends": 2
            },
            "stats": {
              "stress": -3,
              "confidence": 2,
              "energy": 2
            }
          }
        },
        {
          "label": "Request a room change",
          "detail": "Pay administrative costs and disrupt your routine.",
          "effects": {
            "cash": -3500,
            "stats": {
              "stress": 1,
              "energy": -2
            },
            "career": {
              "collegeEffort": 0
            }
          }
        },
        {
          "label": "Avoid the issue",
          "detail": "No immediate confrontation; sleep and focus may worsen.",
          "effects": {
            "stats": {
              "stress": 6,
              "energy": -5,
              "happiness": -3
            }
          }
        }
      ]
    },
    {
      "id": "college-internship-conflict",
      "category": "career",
      "minAge": 18,
      "maxAge": 26,
      "weight": 5,
      "cooldown": 24,
      "title": "An internship overlaps with semester examinations",
      "description": "The internship offers practical experience but conflicts with academic workload.",
      "options": [
        {
          "label": "Accept a full-time internship",
          "detail": "Earn a stipend and develop a portfolio; grades may suffer.",
          "effects": {
            "cash": 18000,
            "career": {
              "experience": 1,
              "portfolio": 3
            },
            "school": {
              "marks": -2
            },
            "stats": {
              "stress": 7,
              "energy": -6
            }
          }
        },
        {
          "label": "Negotiate part-time hours",
          "detail": "Balance study and work.",
          "effects": {
            "cash": 7000,
            "career": {
              "experience": 1,
              "portfolio": 2
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Decline and focus on grades",
          "detail": "Protect academic performance and seek another opportunity.",
          "effects": {
            "school": {
              "marks": 2
            },
            "stats": {
              "stress": -2,
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "college-fee-hike",
      "category": "education",
      "minAge": 18,
      "maxAge": 30,
      "weight": 4,
      "cooldown": 28,
      "title": "Your college increases programme fees",
      "description": "A revised fee schedule creates a financial gap. You can pursue support, borrow or change your plan.",
      "options": [
        {
          "label": "Apply for a merit scholarship",
          "detail": "Spend time applying; marks and discipline matter.",
          "effects": {
            "cash": -1500,
            "school": {
              "scholarship": 8
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Use an education loan",
          "detail": "Continue the programme but create a liability.",
          "effects": {
            "cash": 25000,
            "career": {
              "experience": 0
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Switch to a lower-cost programme",
          "detail": "Lower costs, but some credits may not transfer.",
          "effects": {
            "career": {
              "portfolio": -1
            },
            "stats": {
              "stress": 3,
              "happiness": -1
            }
          }
        }
      ]
    },
    {
      "id": "first-job-relocation-cost",
      "category": "career",
      "minAge": 18,
      "maxAge": 35,
      "weight": 5,
      "cooldown": 36,
      "title": "A job offer requires relocation",
      "description": "The role pays more, but moving costs, rent deposit and family distance matter.",
      "options": [
        {
          "label": "Accept and relocate",
          "detail": "Higher career exposure with immediate setup costs.",
          "effects": {
            "cash": -28000,
            "career": {
              "experience": 1,
              "performance": 2
            },
            "stats": {
              "stress": 4,
              "confidence": 2
            },
            "cityMove": true
          }
        },
        {
          "label": "Negotiate a joining allowance",
          "detail": "The employer may share the cost.",
          "effects": {
            "career": {
              "salaryBoost": 0.02,
              "performance": 1
            },
            "stats": {
              "confidence": 2,
              "stress": 2
            }
          }
        },
        {
          "label": "Decline and stay local",
          "detail": "Preserve current support networks.",
          "effects": {
            "relationships": {
              "parents": 2
            },
            "stats": {
              "stress": -2
            }
          }
        }
      ]
    },
    {
      "id": "professional-exam-failure",
      "category": "career",
      "minAge": 20,
      "maxAge": 45,
      "weight": 5,
      "cooldown": 32,
      "title": "A professional exam result is disappointing",
      "description": "A failed attempt can damage confidence, but detailed feedback offers a path forward.",
      "options": [
        {
          "label": "Retake after a structured study plan",
          "detail": "Use a later attempt and improve discipline.",
          "effects": {
            "career": {
              "interview": 2
            },
            "stats": {
              "stress": 4,
              "discipline": 3,
              "smarts": 2
            }
          }
        },
        {
          "label": "Find a mentor or study group",
          "detail": "Reduce isolation and identify knowledge gaps.",
          "effects": {
            "career": {
              "portfolio": 2
            },
            "relationships": {
              "network": 3
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Pivot to a related role",
          "detail": "Use transferable skills rather than repeating the same attempt.",
          "effects": {
            "career": {
              "portfolio": 2
            },
            "stats": {
              "confidence": 1,
              "stress": -2
            }
          }
        }
      ]
    },
    {
      "id": "job-offer-competing",
      "category": "career",
      "minAge": 21,
      "maxAge": 50,
      "weight": 4,
      "cooldown": 36,
      "title": "Two employers make different offers",
      "description": "One role pays more but has longer hours; the other offers mentoring and a clearer path.",
      "options": [
        {
          "label": "Choose the higher salary",
          "detail": "Increase income while risking burnout.",
          "effects": {
            "career": {
              "salaryBoost": 0.12,
              "performance": 1
            },
            "stats": {
              "stress": 7,
              "energy": -5
            }
          }
        },
        {
          "label": "Choose the stronger learning culture",
          "detail": "Build experience and future earning power.",
          "effects": {
            "career": {
              "experience": 2,
              "portfolio": 3,
              "performance": 3
            },
            "stats": {
              "stress": 2,
              "happiness": 2
            }
          }
        },
        {
          "label": "Negotiate a hybrid arrangement",
          "detail": "Try to combine flexibility and compensation.",
          "effects": {
            "career": {
              "salaryBoost": 0.05,
              "performance": 2
            },
            "stats": {
              "confidence": 2,
              "stress": 3
            }
          }
        }
      ]
    },
    {
      "id": "career-automation-displacement",
      "category": "career",
      "minAge": 22,
      "maxAge": 60,
      "weight": 4,
      "cooldown": 40,
      "title": "Automation changes tasks in your profession",
      "description": "Your role is being redesigned. Some routine work disappears while demand grows for people who can supervise systems and solve exceptions.",
      "options": [
        {
          "label": "Reskill in adjacent technologies",
          "detail": "Spend on learning and protect employability.",
          "effects": {
            "cash": -14000,
            "career": {
              "portfolio": 4,
              "experience": 1
            },
            "skills": {
              "tech": 4
            },
            "stats": {
              "stress": 4
            }
          }
        },
        {
          "label": "Move into client and people work",
          "detail": "Use judgement, communication and coordination.",
          "effects": {
            "career": {
              "portfolio": 2
            },
            "skills": {
              "communication": 4,
              "business": 2
            },
            "stats": {
              "confidence": 2
            }
          }
        },
        {
          "label": "Wait for the employer to retrain staff",
          "detail": "Preserve cash, but accept uncertainty.",
          "effects": {
            "career": {
              "performance": -1
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "career-parental-leave-choice",
      "category": "career",
      "minAge": 24,
      "maxAge": 50,
      "weight": 3,
      "cooldown": 52,
      "title": "A family responsibility changes your work availability",
      "description": "A close family member needs temporary support. The choices affect income, promotion and relationships.",
      "options": [
        {
          "label": "Take a temporary leave",
          "detail": "Protect family care; income and progression pause.",
          "effects": {
            "career": {
              "performance": -2
            },
            "relationships": {
              "parents": 5
            },
            "stats": {
              "stress": 1,
              "happiness": 1
            }
          }
        },
        {
          "label": "Arrange paid support",
          "detail": "Keep work continuity at a financial cost.",
          "effects": {
            "cash": -18000,
            "career": {
              "performance": 2
            },
            "relationships": {
              "parents": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Share care with relatives",
          "detail": "Coordinate a fair division of responsibility.",
          "effects": {
            "family": {
              "closeness": 3
            },
            "relationships": {
              "parents": 3
            },
            "career": {
              "performance": 1
            },
            "stats": {
              "stress": 1
            }
          }
        }
      ]
    },
    {
      "id": "business-customer-credit-delay",
      "category": "business",
      "minAge": 18,
      "maxAge": 80,
      "weight": 5,
      "cooldown": 24,
      "title": "A major customer delays payment",
      "description": "A large invoice is overdue. Your business may be profitable on paper but cash is tied up in receivables.",
      "options": [
        {
          "label": "Use invoice factoring",
          "detail": "Receive cash now after a fee.",
          "effects": {
            "cash": -5000,
            "business": {
              "supplierCredit": 1,
              "liquidityRisk": -2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Negotiate partial payment",
          "detail": "Reduce exposure and keep the relationship.",
          "effects": {
            "business": {
              "service": 2,
              "brand": 1
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Stop further deliveries",
          "detail": "Protect the balance sheet but risk losing the customer.",
          "effects": {
            "business": {
              "brand": -2,
              "capacityFactor": 0.95
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "business-supplier-exclusivity",
      "category": "business",
      "minAge": 18,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 32,
      "title": "A supplier offers an exclusive volume discount",
      "description": "The discount is attractive but comes with a minimum purchase commitment.",
      "options": [
        {
          "label": "Sign a long-term volume agreement",
          "detail": "Lower unit cost while increasing concentration risk.",
          "effects": {
            "cash": -28000,
            "business": {
              "supplyCost": -0.07,
              "supplierResilience": -2
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Negotiate a flexible minimum",
          "detail": "Smaller savings but less rigid purchasing.",
          "effects": {
            "cash": -9000,
            "business": {
              "supplyCost": -0.025,
              "supplierResilience": 2
            }
          }
        },
        {
          "label": "Keep multiple suppliers",
          "detail": "Pay more but reduce disruption risk.",
          "effects": {
            "business": {
              "supplierResilience": 4
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "business-working-capital-facility",
      "category": "business",
      "minAge": 18,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 40,
      "title": "A bank offers a revolving working-capital line",
      "description": "A credit line can bridge inventory and receivable timing, but interest and covenants apply.",
      "options": [
        {
          "label": "Accept a modest secured line",
          "detail": "Create a debt facility only for approved working capital.",
          "effects": {
            "business": {
              "creditLimit": 250000,
              "liquidityRisk": 2
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Use owner equity",
          "detail": "Avoid interest but tie up personal funds.",
          "effects": {
            "cash": -45000,
            "business": {
              "capitalInjection": 45000
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Reduce inventory and growth",
          "detail": "Protect liquidity and sacrifice some sales.",
          "effects": {
            "business": {
              "capacityFactor": 0.9,
              "liquidityRisk": -2
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "business-employee-union-negotiation",
      "category": "business",
      "minAge": 20,
      "maxAge": 80,
      "weight": 3,
      "cooldown": 44,
      "title": "Employees request a wage and safety agreement",
      "description": "The workforce wants better pay, predictable scheduling and improved safety equipment.",
      "options": [
        {
          "label": "Agree to a phased package",
          "detail": "Costs increase but retention and safety improve.",
          "effects": {
            "business": {
              "retention": 4,
              "service": 2,
              "compliance": 5
            },
            "stats": {
              "happiness": 2
            }
          }
        },
        {
          "label": "Negotiate productivity-linked gains",
          "detail": "Share measurable productivity improvements.",
          "effects": {
            "business": {
              "training": 3,
              "quality": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Reject the request",
          "detail": "Preserve cash while risking attrition and disruption.",
          "effects": {
            "business": {
              "retention": -4,
              "quality": -2,
              "brand": -2
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "business-product-recall",
      "category": "business",
      "minAge": 18,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 48,
      "title": "A product defect triggers a possible recall",
      "description": "A serious quality issue has been reported. A recall costs money but may prevent further harm and legal exposure.",
      "options": [
        {
          "label": "Recall affected batches immediately",
          "detail": "High immediate cost, lower long-term liability.",
          "effects": {
            "cash": -42000,
            "business": {
              "quality": 5,
              "compliance": 8,
              "brand": 1
            },
            "stats": {
              "stress": 4
            }
          }
        },
        {
          "label": "Pause sales and investigate",
          "detail": "Balance cost and uncertainty while the facts are established.",
          "effects": {
            "business": {
              "capacityFactor": 0.82,
              "compliance": 3
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Ignore the warning",
          "detail": "Keep selling now but suffer severe trust and compliance damage.",
          "effects": {
            "business": {
              "brand": -12,
              "compliance": -12,
              "quality": -5
            },
            "stats": {
              "stress": 8
            }
          }
        }
      ]
    },
    {
      "id": "business-competitor-acquisition",
      "category": "business",
      "minAge": 22,
      "maxAge": 80,
      "weight": 3,
      "cooldown": 60,
      "title": "A competitor approaches with an acquisition proposal",
      "description": "The offer includes cash and an earn-out, but due diligence may reveal hidden liabilities.",
      "options": [
        {
          "label": "Commission independent due diligence",
          "detail": "Pay for advisers and review quality of earnings.",
          "effects": {
            "cash": -30000,
            "business": {
              "marketInsight": 5,
              "governance": 3
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Negotiate an asset-only acquisition",
          "detail": "Avoid some legacy liabilities, but pay a higher price.",
          "effects": {
            "business": {
              "expansionLead": 2,
              "compliance": 2
            },
            "stats": {
              "confidence": 2
            }
          }
        },
        {
          "label": "Walk away",
          "detail": "Protect focus and liquidity.",
          "effects": {
            "stats": {
              "stress": -2,
              "discipline": 2
            }
          }
        }
      ]
    },
    {
      "id": "bank-credit-concentration",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 36,
      "title": "A few borrowers account for too much of your bank’s loan book",
      "description": "Large borrowers promise growth but a single default could weaken capital and liquidity.",
      "options": [
        {
          "label": "Diversify lending",
          "detail": "Accept slower growth and better risk spread.",
          "effects": {
            "bank": {
              "loanGrowth": -0.08,
              "compliance": 4,
              "trust": 2
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Require stronger collateral",
          "detail": "Maintain exposure with better loss protection.",
          "effects": {
            "bank": {
              "compliance": 2,
              "trust": 1
            },
            "stats": {
              "smarts": 1
            }
          }
        },
        {
          "label": "Continue rapid growth",
          "detail": "Increase short-term interest income while concentration risk rises.",
          "effects": {
            "bank": {
              "loanGrowth": 0.12,
              "liquidity": -0.02
            },
            "stats": {
              "stress": 4
            }
          }
        }
      ]
    },
    {
      "id": "bank-kyc-review",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 28,
      "title": "A compliance review finds gaps in customer due diligence",
      "description": "Some accounts have incomplete customer records. Remediation costs money but reduces legal and fraud exposure.",
      "options": [
        {
          "label": "Freeze and remediate affected accounts",
          "detail": "Pay staff and technology costs; strengthen controls.",
          "effects": {
            "bank": {
              "operatingCost": 45000,
              "compliance": 8,
              "trust": 3
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Prioritise high-risk accounts",
          "detail": "Remediate critical cases first, leaving a backlog.",
          "effects": {
            "bank": {
              "operatingCost": 18000,
              "compliance": 3,
              "trust": 1
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Delay the programme",
          "detail": "Preserve cash now but allow trust and compliance risk to rise.",
          "effects": {
            "bank": {
              "compliance": -8,
              "trust": -5
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "bank-deposit-rate-war",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 28,
      "title": "A competitor bank raises deposit rates",
      "description": "Customers may move their money. Matching the rate helps retention but increases funding cost.",
      "options": [
        {
          "label": "Match the full rate increase",
          "detail": "Defend deposits at a lower interest margin.",
          "effects": {
            "bank": {
              "depositRate": 0.004,
              "trust": 3
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Offer targeted relationship rates",
          "detail": "Keep priority customers without repricing the entire book.",
          "effects": {
            "bank": {
              "depositRate": 0.001,
              "service": 3,
              "trust": 1
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Hold rates and improve service",
          "detail": "Protect margin while risking deposit outflow.",
          "effects": {
            "bank": {
              "service": 4,
              "depositOutflow": 0.04,
              "trust": -1
            },
            "stats": {
              "stress": 3
            }
          }
        }
      ]
    },
    {
      "id": "bank-technology-outage",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 40,
      "title": "A payments outage disrupts your bank",
      "description": "Customers cannot complete some transactions. Incident response, reconciliation and communication are essential.",
      "options": [
        {
          "label": "Activate the disaster recovery plan",
          "detail": "Pay recovery costs and improve operational resilience.",
          "effects": {
            "bank": {
              "operatingCost": 65000,
              "service": 4,
              "compliance": 3,
              "trust": 2
            },
            "stats": {
              "stress": 4
            }
          }
        },
        {
          "label": "Use manual fallback and customer updates",
          "detail": "Reduce direct cost but accept slower operations.",
          "effects": {
            "bank": {
              "operatingCost": 18000,
              "service": 1,
              "trust": 0
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Delay communication",
          "detail": "Avoid immediate cost, but customer confidence falls.",
          "effects": {
            "bank": {
              "trust": -8,
              "service": -5
            },
            "stats": {
              "stress": 7
            }
          }
        }
      ]
    },
    {
      "id": "bank-npa-restructuring",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 40,
      "title": "A borrower requests restructuring",
      "description": "The borrower is stressed but may recover. A one-time recovery may be inferior to a viable restructuring plan.",
      "options": [
        {
          "label": "Restructure with milestones and collateral",
          "detail": "Accept delayed cash flows in exchange for a recovery plan.",
          "effects": {
            "bank": {
              "recovery": 0.08,
              "trust": 2,
              "compliance": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Enforce recovery immediately",
          "detail": "Improve discipline but may crystallise a loss.",
          "effects": {
            "bank": {
              "creditLoss": 0.05,
              "trust": 1
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Evergreen the exposure",
          "detail": "Delay recognition but allow asset quality to worsen.",
          "effects": {
            "bank": {
              "creditLoss": 0.12,
              "compliance": -5,
              "trust": -4
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "market-ipo-allocation",
      "category": "market",
      "minAge": 18,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 32,
      "title": "A new public issue opens for subscription",
      "description": "A fictional company is listing. Valuation is uncertain; you can assess the business, subscribe or stay liquid.",
      "options": [
        {
          "label": "Subscribe a modest amount",
          "detail": "Invest in a new issue; valuation may move after listing.",
          "effects": {
            "cash": -12000,
            "portfolio": {
              "buyMarket": 12000
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Wait for public-market trading",
          "detail": "Avoid blind allocation and observe price discovery.",
          "effects": {
            "career": {
              "marketInsight": 1
            },
            "stats": {
              "discipline": 1
            }
          }
        },
        {
          "label": "Avoid the issue",
          "detail": "Keep cash for other opportunities.",
          "effects": {
            "stats": {
              "stress": -1,
              "discipline": 1
            }
          }
        }
      ]
    },
    {
      "id": "market-earnings-surprise",
      "category": "market",
      "minAge": 18,
      "maxAge": 85,
      "weight": 5,
      "cooldown": 20,
      "title": "A major holding reports unexpected results",
      "description": "One of your holdings has a strong or weak earnings surprise. Decide whether to review the thesis or react emotionally.",
      "options": [
        {
          "label": "Reassess the investment thesis",
          "detail": "Use business fundamentals rather than the headline.",
          "effects": {
            "career": {
              "marketInsight": 2
            },
            "stats": {
              "discipline": 2,
              "stress": 1
            }
          }
        },
        {
          "label": "Trim an oversized position",
          "detail": "Reduce concentration and lock in some value.",
          "effects": {
            "portfolio": {
              "riskTrim": 0.15
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Double down immediately",
          "detail": "Increase exposure and the possibility of a large loss.",
          "effects": {
            "portfolio": {
              "buyMarket": 10000
            },
            "stats": {
              "stress": 3
            }
          }
        }
      ]
    },
    {
      "id": "macro-credit-tightening",
      "category": "economy",
      "minAge": 18,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 28,
      "title": "Credit conditions tighten across the economy",
      "description": "Lenders become more selective as funding costs rise. Businesses with high debt and households with variable-rate loans are exposed.",
      "options": [
        {
          "label": "Reduce leverage and preserve cash",
          "detail": "Growth slows but resilience improves.",
          "effects": {
            "market": {
              "sentiment": -2,
              "unemployment": 0.2
            },
            "stats": {
              "stress": -1,
              "discipline": 2
            }
          }
        },
        {
          "label": "Continue investing selectively",
          "detail": "Maintain productive capacity while screening returns.",
          "effects": {
            "market": {
              "sentiment": 1
            },
            "career": {
              "portfolio": 1
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Borrow aggressively before rates rise",
          "detail": "Short-term liquidity increases but debt-service risk grows.",
          "effects": {
            "cash": 35000,
            "market": {
              "repoRate": 0.3
            },
            "stats": {
              "stress": 5
            }
          }
        }
      ]
    },
    {
      "id": "inflation-household-budget",
      "category": "life",
      "minAge": 18,
      "maxAge": 85,
      "weight": 5,
      "cooldown": 24,
      "title": "Household inflation squeezes your budget",
      "description": "Food, transport, rent and school expenses have risen. Your household must decide where to adjust.",
      "options": [
        {
          "label": "Cut discretionary spending",
          "detail": "Protect savings at the cost of lifestyle.",
          "effects": {
            "stats": {
              "happiness": -2,
              "discipline": 2,
              "stress": 1
            }
          }
        },
        {
          "label": "Increase income through a side project",
          "detail": "Earn more but add workload.",
          "effects": {
            "career": {
              "portfolio": 1
            },
            "stats": {
              "stress": 4,
              "energy": -3
            }
          }
        },
        {
          "label": "Use emergency savings",
          "detail": "Protect current wellbeing, but lower your buffer.",
          "effects": {
            "cash": -12000,
            "stats": {
              "stress": -2
            }
          }
        }
      ]
    },
    {
      "id": "unexpected-tax-demand",
      "category": "finance",
      "minAge": 20,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 36,
      "title": "A tax notice asks for additional documentation",
      "description": "Records are incomplete for one transaction. A professional review can cost money but may prevent penalties.",
      "options": [
        {
          "label": "Hire a tax professional",
          "detail": "Pay for advice and improve documentation.",
          "effects": {
            "cash": -9500,
            "career": {
              "portfolio": 1
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Compile the records yourself",
          "detail": "Preserve cash but spend time and accept uncertainty.",
          "effects": {
            "stats": {
              "stress": 4,
              "smarts": 1,
              "discipline": 2
            }
          }
        },
        {
          "label": "Ignore the notice",
          "detail": "Avoid work now but risk penalties and escalation.",
          "effects": {
            "cash": -18000,
            "stats": {
              "stress": 7,
              "confidence": -2
            }
          }
        }
      ]
    },
    {
      "id": "retirement-family-care",
      "category": "life",
      "minAge": 45,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 48,
      "title": "You are balancing retirement savings and family care",
      "description": "A family member needs help while you are trying to protect long-term financial security.",
      "options": [
        {
          "label": "Maintain retirement contributions and share care",
          "detail": "Protect future savings with a negotiated care plan.",
          "effects": {
            "portfolio": {
              "retirementContribution": 15000
            },
            "family": {
              "closeness": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Pause contributions temporarily",
          "detail": "Prioritise immediate care; future compounding is lower.",
          "effects": {
            "family": {
              "closeness": 5
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Use a formal care service",
          "detail": "Protect time and consistency at a recurring financial cost.",
          "effects": {
            "cash": -22000,
            "family": {
              "closeness": 2
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "succession-family-governance",
      "category": "family",
      "minAge": 40,
      "maxAge": 85,
      "weight": 3,
      "cooldown": 60,
      "title": "Your family discusses succession and inheritance",
      "description": "Assets, ownership rights and responsibilities need clear documentation to avoid future disputes.",
      "options": [
        {
          "label": "Create a formal succession plan",
          "detail": "Pay advisers and clarify ownership and guardianship.",
          "effects": {
            "cash": -18000,
            "family": {
              "closeness": 3
            },
            "career": {
              "governance": 2
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Hold a family meeting and document intent",
          "detail": "Lower cost, but legal implementation remains pending.",
          "effects": {
            "family": {
              "closeness": 5
            },
            "relationships": {
              "parents": 2
            },
            "stats": {
              "confidence": 1
            }
          }
        },
        {
          "label": "Leave the matter unresolved",
          "detail": "Avoid difficult conversations but increase uncertainty.",
          "effects": {
            "family": {
              "closeness": -4
            },
            "stats": {
              "stress": 4
            }
          }
        }
      ]
    },
    {
      "id": "school-library-fund",
      "category": "education",
      "minAge": 8,
      "maxAge": 15,
      "weight": 4,
      "cooldown": 24,
      "title": "A school library fund is available",
      "description": "The school is raising money for books and digital access.",
      "options": [
        {
          "label": "Contribute and volunteer",
          "detail": "Build access and community involvement.",
          "effects": {
            "cash": -1200,
            "school": {
              "marks": 1
            },
            "stats": {
              "empathy": 2,
              "happiness": 2
            }
          }
        },
        {
          "label": "Donate used books",
          "detail": "Contribute in kind and preserve money.",
          "effects": {
            "skills": {
              "communication": 1
            },
            "stats": {
              "empathy": 2
            }
          }
        },
        {
          "label": "Focus on your own studies",
          "detail": "Protect time and avoid a financial contribution.",
          "effects": {
            "school": {
              "effort": 1
            },
            "stats": {
              "discipline": 1
            }
          }
        }
      ]
    },
    {
      "id": "school-team-selection",
      "category": "social",
      "minAge": 9,
      "maxAge": 17,
      "weight": 4,
      "cooldown": 24,
      "title": "You are invited to represent your school",
      "description": "A team selection offers recognition but adds practice commitments.",
      "options": [
        {
          "label": "Train consistently",
          "detail": "Improve fitness and teamwork.",
          "effects": {
            "stats": {
              "fitness": 4,
              "discipline": 3,
              "stress": 3
            }
          }
        },
        {
          "label": "Prioritise academics",
          "detail": "Protect study time.",
          "effects": {
            "school": {
              "marks": 2
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Join for experience",
          "detail": "Take part without overcommitting.",
          "effects": {
            "relationships": {
              "friends": 2
            },
            "stats": {
              "confidence": 2,
              "happiness": 2
            }
          }
        }
      ]
    },
    {
      "id": "first-laptop-decision",
      "category": "education",
      "minAge": 13,
      "maxAge": 20,
      "weight": 4,
      "cooldown": 24,
      "title": "Your studies would benefit from a laptop",
      "description": "A device could expand digital learning but adds household cost.",
      "options": [
        {
          "label": "Buy a reliable laptop",
          "detail": "Large purchase with long useful life.",
          "effects": {
            "cash": -42000,
            "career": {
              "portfolio": 2
            },
            "skills": {
              "tech": 3
            },
            "stats": {
              "smarts": 1
            }
          }
        },
        {
          "label": "Buy a refurbished device",
          "detail": "Lower cost and acceptable capability.",
          "effects": {
            "cash": -22000,
            "career": {
              "portfolio": 1
            },
            "skills": {
              "tech": 2
            }
          }
        },
        {
          "label": "Use the school computer lab",
          "detail": "Keep cash and accept limited access.",
          "effects": {
            "school": {
              "effort": 1
            },
            "stats": {
              "discipline": 1
            }
          }
        }
      ]
    },
    {
      "id": "college-club-election",
      "category": "social",
      "minAge": 18,
      "maxAge": 24,
      "weight": 4,
      "cooldown": 24,
      "title": "You are nominated for a student leadership role",
      "description": "Leadership could build relationships but compete with coursework.",
      "options": [
        {
          "label": "Accept the role",
          "detail": "Build organisational and communication ability.",
          "effects": {
            "career": {
              "portfolio": 2
            },
            "skills": {
              "communication": 3,
              "business": 2
            },
            "stats": {
              "stress": 4
            }
          }
        },
        {
          "label": "Support another candidate",
          "detail": "Contribute without full responsibility.",
          "effects": {
            "relationships": {
              "friends": 3
            },
            "stats": {
              "empathy": 2
            }
          }
        },
        {
          "label": "Decline to protect study time",
          "detail": "Prioritise grades and rest.",
          "effects": {
            "school": {
              "marks": 1
            },
            "stats": {
              "stress": -2
            }
          }
        }
      ]
    },
    {
      "id": "first-apartment-rent",
      "category": "life",
      "minAge": 21,
      "maxAge": 35,
      "weight": 4,
      "cooldown": 24,
      "title": "Your landlord proposes a rent increase",
      "description": "Housing costs rise after a lease renewal.",
      "options": [
        {
          "label": "Negotiate a longer lease",
          "detail": "Trade flexibility for a smaller increase.",
          "effects": {
            "cash": -4500,
            "stats": {
              "stress": -1,
              "confidence": 1
            }
          }
        },
        {
          "label": "Move to a shared apartment",
          "detail": "Lower rent but less privacy.",
          "effects": {
            "cash": -12000,
            "stats": {
              "happiness": -1,
              "stress": 2
            },
            "cityMove": true
          }
        },
        {
          "label": "Accept the new rent",
          "detail": "Avoid moving disruption and pay more.",
          "effects": {
            "cash": -9000,
            "stats": {
              "stress": 1
            }
          }
        }
      ]
    },
    {
      "id": "career-mentor-offer",
      "category": "career",
      "minAge": 20,
      "maxAge": 45,
      "weight": 4,
      "cooldown": 24,
      "title": "A senior professional offers mentorship",
      "description": "Regular mentorship requires time and honest feedback.",
      "options": [
        {
          "label": "Commit to monthly sessions",
          "detail": "Improve skills and career clarity.",
          "effects": {
            "career": {
              "portfolio": 2,
              "interview": 2
            },
            "relationships": {
              "network": 4
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Ask for occasional guidance",
          "detail": "Smaller benefits with flexible commitment.",
          "effects": {
            "career": {
              "interview": 1
            },
            "relationships": {
              "network": 2
            }
          }
        },
        {
          "label": "Decline",
          "detail": "Preserve time but miss the connection.",
          "effects": {
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "job-contract-vs-permanent",
      "category": "career",
      "minAge": 20,
      "maxAge": 55,
      "weight": 4,
      "cooldown": 24,
      "title": "You must choose between contract and permanent work",
      "description": "The contract offers higher pay but less protection.",
      "options": [
        {
          "label": "Choose higher-paying contract",
          "detail": "Higher income, more uncertainty.",
          "effects": {
            "career": {
              "salaryBoost": 0.16,
              "portfolio": 2
            },
            "stats": {
              "stress": 5
            }
          }
        },
        {
          "label": "Choose permanent employment",
          "detail": "Lower immediate pay and greater stability.",
          "effects": {
            "career": {
              "salaryBoost": 0.04,
              "performance": 2
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Negotiate a conversion clause",
          "detail": "Seek a review after a defined period.",
          "effects": {
            "career": {
              "salaryBoost": 0.08,
              "interview": 2
            },
            "stats": {
              "confidence": 2,
              "stress": 2
            }
          }
        }
      ]
    },
    {
      "id": "business-franchise-offer",
      "category": "business",
      "minAge": 22,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 24,
      "title": "A franchise brand offers you a licence",
      "description": "A franchise may bring brand recognition but imposes fees and operating rules.",
      "options": [
        {
          "label": "Buy the franchise rights",
          "detail": "Pay fees and gain brand/marketing support.",
          "effects": {
            "cash": -65000,
            "business": {
              "brand": 5,
              "service": 2,
              "compliance": 2
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Pilot one location independently",
          "detail": "Retain control, build your own brand.",
          "effects": {
            "cash": -18000,
            "business": {
              "brand": 2,
              "marketInsight": 2
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Decline",
          "detail": "Avoid contractual obligations.",
          "effects": {
            "stats": {
              "stress": -1,
              "discipline": 1
            }
          }
        }
      ]
    },
    {
      "id": "business-expansion-debt",
      "category": "business",
      "minAge": 24,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 24,
      "title": "A lender offers debt-financed expansion",
      "description": "The loan grows capacity but fixed repayments continue during weak demand.",
      "options": [
        {
          "label": "Borrow for a phased expansion",
          "detail": "Increase capacity and debt exposure.",
          "effects": {
            "business": {
              "capacityFactor": 1.12,
              "creditLimit": 180000
            },
            "stats": {
              "stress": 4
            }
          }
        },
        {
          "label": "Expand from retained earnings",
          "detail": "Slower growth and no new debt.",
          "effects": {
            "business": {
              "governance": 2,
              "liquidityRisk": -1
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Wait for stronger demand evidence",
          "detail": "Protect current returns.",
          "effects": {
            "business": {
              "marketInsight": 3
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "bank-stress-test",
      "category": "banking",
      "minAge": 25,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 24,
      "title": "A stress test shows a funding shortfall",
      "description": "A modelled deposit outflow and loan loss may push the bank below its internal buffer.",
      "options": [
        {
          "label": "Raise fresh equity",
          "detail": "Reinforce capital at a cost to the owner.",
          "effects": {
            "cash": -300000,
            "bank": {
              "capitalBuffer": 300000,
              "trust": 3
            },
            "stats": {
              "stress": 3
            }
          }
        },
        {
          "label": "Sell liquid assets and slow lending",
          "detail": "Preserve liquidity at the cost of growth.",
          "effects": {
            "bank": {
              "loanGrowth": -0.12,
              "liquidity": 0.03,
              "trust": 1
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Continue distributions",
          "detail": "Preserve owner cash but increase failure risk.",
          "effects": {
            "bank": {
              "liquidity": -0.04,
              "capitalAdequacyTarget": 0.16,
              "trust": -6
            },
            "stats": {
              "stress": 6
            }
          }
        }
      ]
    },
    {
      "id": "market-insider-rumour",
      "category": "market",
      "minAge": 18,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 24,
      "title": "A market rumour spreads through your network",
      "description": "An unverified message claims a company is about to announce a major contract.",
      "options": [
        {
          "label": "Wait for public information",
          "detail": "Avoid acting on unverified information.",
          "effects": {
            "career": {
              "marketInsight": 1
            },
            "stats": {
              "discipline": 2
            }
          }
        },
        {
          "label": "Review the company’s public filings",
          "detail": "Spend effort on verifiable evidence.",
          "effects": {
            "career": {
              "marketInsight": 3
            },
            "stats": {
              "smarts": 1
            }
          }
        },
        {
          "label": "Trade on the rumour",
          "detail": "Potentially profitable but high-risk and unethical.",
          "effects": {
            "market": {
              "sentiment": -1
            },
            "stats": {
              "stress": 3,
              "empathy": -2
            }
          }
        }
      ]
    },
    {
      "id": "market-margin-call",
      "category": "market",
      "minAge": 20,
      "maxAge": 85,
      "weight": 4,
      "cooldown": 24,
      "title": "Your leveraged investment position faces a margin call",
      "description": "Market volatility has reduced collateral value and the broker requires additional funds.",
      "options": [
        {
          "label": "Add collateral",
          "detail": "Preserve the position but use liquidity.",
          "effects": {
            "cash": -35000,
            "portfolio": {
              "riskTrim": 0.05
            },
            "stats": {
              "stress": 4
            }
          }
        },
        {
          "label": "Reduce exposure immediately",
          "detail": "Realise a loss but reduce risk.",
          "effects": {
            "portfolio": {
              "riskTrim": 0.35
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Ignore the margin call",
          "detail": "Forced liquidation and penalties may follow.",
          "effects": {
            "cash": -12000,
            "portfolio": {
              "riskTrim": 0.6
            },
            "stats": {
              "stress": 8
            }
          }
        }
      ]
    },
    {
      "id": "family-property-repair",
      "category": "family",
      "minAge": 20,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 24,
      "title": "A family property needs urgent repairs",
      "description": "Water leakage and electrical issues require attention.",
      "options": [
        {
          "label": "Hire licensed professionals",
          "detail": "Pay more for safer repairs.",
          "effects": {
            "cash": -28000,
            "family": {
              "closeness": 3
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Coordinate repairs with relatives",
          "detail": "Share costs and responsibilities.",
          "effects": {
            "cash": -14000,
            "family": {
              "closeness": 4
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Delay the repairs",
          "detail": "Save cash now but risk higher future damage.",
          "effects": {
            "family": {
              "closeness": -1
            },
            "stats": {
              "stress": 3
            }
          }
        }
      ]
    },
    {
      "id": "health-preventive-screening",
      "category": "health",
      "minAge": 18,
      "maxAge": 80,
      "weight": 4,
      "cooldown": 24,
      "title": "A preventive health screening is recommended",
      "description": "A routine screening may identify risks early but is not a guarantee of health.",
      "options": [
        {
          "label": "Book a comprehensive screening",
          "detail": "Pay for preventive care.",
          "effects": {
            "cash": -6500,
            "stats": {
              "health": 3,
              "stress": -2
            }
          }
        },
        {
          "label": "Choose basic tests",
          "detail": "Lower cost and partial information.",
          "effects": {
            "cash": -2200,
            "stats": {
              "health": 1
            }
          }
        },
        {
          "label": "Postpone the appointment",
          "detail": "Preserve cash but miss the screening.",
          "effects": {
            "stats": {
              "stress": 2
            }
          }
        }
      ]
    },
    {
      "id": "mental-health-burnout",
      "category": "health",
      "minAge": 16,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 24,
      "title": "You have been feeling persistently overwhelmed",
      "description": "Work, study and family duties are affecting sleep and motivation.",
      "options": [
        {
          "label": "Talk to a qualified professional",
          "detail": "Pay for support and create a care plan.",
          "effects": {
            "cash": -4500,
            "stats": {
              "stress": -8,
              "health": 2,
              "happiness": 2
            }
          }
        },
        {
          "label": "Reduce commitments and rest",
          "detail": "Protect recovery time.",
          "effects": {
            "stats": {
              "stress": -5,
              "energy": 12,
              "discipline": 1
            }
          }
        },
        {
          "label": "Ignore the warning signs",
          "detail": "Keep working but risk worsening exhaustion.",
          "effects": {
            "stats": {
              "stress": 8,
              "health": -3,
              "energy": -8
            }
          }
        }
      ]
    },
    {
      "id": "exam-preparation-choice",
      "category": "education",
      "minAge": 15,
      "maxAge": 23,
      "weight": 7,
      "cooldown": 16,
      "title": "A demanding entrance-exam season",
      "description": "Coaching, self-study and school work are competing for your time. There is no cost-free option.",
      "options": [
        {
          "label": "Structured coaching",
          "detail": "Family pays for guided preparation and mock tests.",
          "effects": {
            "family": {
              "funds": -9500
            },
            "school": {
              "examPrep": 1,
              "planning": 2
            },
            "stats": {
              "stress": 3,
              "discipline": 2
            },
            "career": {
              "interview": 1
            }
          }
        },
        {
          "label": "Self-study plan",
          "detail": "Use free material and a disciplined schedule.",
          "effects": {
            "stats": {
              "energy": -3,
              "discipline": 3,
              "smarts": 2
            },
            "school": {
              "planning": 3,
              "examPrep": 1
            }
          }
        },
        {
          "label": "Reduce the exam load",
          "detail": "Focus on school marks and wellbeing first.",
          "effects": {
            "stats": {
              "stress": -4,
              "happiness": 2,
              "energy": 2
            },
            "school": {
              "effort": 1
            }
          }
        }
      ]
    },
    {
      "id": "scholarship-interview",
      "category": "education",
      "minAge": 16,
      "maxAge": 25,
      "weight": 4,
      "cooldown": 24,
      "title": "A scholarship interview",
      "description": "A foundation offers a partial scholarship based on academic record and a short interview.",
      "options": [
        {
          "label": "Prepare seriously and attend",
          "detail": "Spend on travel and preparation; a strong performance may help later admissions.",
          "effects": {
            "cash": -1200,
            "stats": {
              "confidence": 2,
              "stress": 2
            },
            "school": {
              "scholarship": 12,
              "planning": 1
            },
            "career": {
              "interview": 2
            }
          }
        },
        {
          "label": "Attend without coaching",
          "detail": "Keep costs low and rely on your own preparation.",
          "effects": {
            "stats": {
              "confidence": 1,
              "stress": 1
            },
            "school": {
              "scholarship": 6
            }
          }
        },
        {
          "label": "Decline the interview",
          "detail": "Protect your schedule but lose this funding opportunity.",
          "effects": {
            "stats": {
              "stress": -2,
              "energy": 2
            }
          }
        }
      ]
    },
    {
      "id": "college-internship-offer",
      "category": "career",
      "minAge": 18,
      "maxAge": 29,
      "weight": 6,
      "cooldown": 18,
      "title": "A short internship offer",
      "description": "A small firm offers a paid internship related to your studies. The stipend is modest, but the experience and portfolio evidence can help.",
      "options": [
        {
          "label": "Accept the internship",
          "detail": "Use time and energy to gain relevant experience.",
          "effects": {
            "cash": 8500,
            "stats": {
              "energy": -7,
              "stress": 3
            },
            "career": {
              "experience": 1,
              "portfolio": 2,
              "performance": 2
            },
            "skills": {
              "business": 1
            }
          }
        },
        {
          "label": "Negotiate a project-based arrangement",
          "detail": "A smaller deliverable with more schedule control.",
          "effects": {
            "cash": 4500,
            "stats": {
              "stress": 1
            },
            "career": {
              "portfolio": 2,
              "interview": 1
            }
          }
        },
        {
          "label": "Focus on coursework",
          "detail": "Keep academic performance as the priority.",
          "effects": {
            "stats": {
              "energy": 2,
              "smarts": 1
            },
            "career": {
              "collegeEffort": 1
            },
            "school": {
              "planning": 1
            }
          }
        }
      ]
    },
    {
      "id": "campus-startup-competition",
      "category": "entrepreneurship",
      "minAge": 18,
      "maxAge": 30,
      "weight": 4,
      "cooldown": 24,
      "title": "Campus startup competition",
      "description": "A student team proposes a product idea. You can contribute, but the project may not become a viable company.",
      "options": [
        {
          "label": "Join as product lead",
          "detail": "Spend time validating customer needs and prototypes.",
          "effects": {
            "cash": -2500,
            "stats": {
              "stress": 3,
              "creativity": 3
            },
            "career": {
              "portfolio": 2,
              "governance": 1
            },
            "skills": {
              "business": 3,
              "tech": 1
            }
          }
        },
        {
          "label": "Join as finance lead",
          "detail": "Build a budget, price model and cash runway forecast.",
          "effects": {
            "cash": -1000,
            "career": {
              "portfolio": 2,
              "marketInsight": 2
            },
            "skills": {
              "finance": 4,
              "business": 1
            }
          }
        },
        {
          "label": "Decline and focus on exams",
          "detail": "Keep your academic plan on track.",
          "effects": {
            "stats": {
              "stress": -2,
              "discipline": 1
            },
            "school": {
              "planning": 2
            }
          }
        }
      ]
    },
    {
      "id": "first-job-contract-review",
      "category": "career",
      "minAge": 18,
      "maxAge": 60,
      "weight": 5,
      "cooldown": 20,
      "title": "Your first employment contract",
      "description": "The offer is attractive, but the role includes a variable incentive, probation period and a long commute.",
      "options": [
        {
          "label": "Accept the stable base salary",
          "detail": "Choose predictable income and a clear learning path.",
          "effects": {
            "career": {
              "performance": 2,
              "compliance": 2
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Negotiate a higher variable component",
          "detail": "More upside, but earnings depend on performance.",
          "effects": {
            "career": {
              "interview": 2,
              "promotionChance": 2
            },
            "stats": {
              "stress": 2,
              "confidence": 2
            }
          }
        },
        {
          "label": "Ask for a better work arrangement",
          "detail": "Protect energy and commute time, though the employer may refuse.",
          "effects": {
            "career": {
              "governance": 1,
              "compliance": 1
            },
            "stats": {
              "energy": 2,
              "stress": -2
            }
          }
        }
      ]
    },
    {
      "id": "workplace-ethics-dilemma",
      "category": "career",
      "minAge": 20,
      "maxAge": 60,
      "weight": 4,
      "cooldown": 28,
      "title": "A questionable instruction at work",
      "description": "A manager asks you to alter a reporting note to make a project look healthier. Your response may affect trust, performance and your standing.",
      "options": [
        {
          "label": "Refuse and document the facts",
          "detail": "Protect integrity while escalating through proper channels.",
          "effects": {
            "career": {
              "compliance": 4,
              "governance": 2,
              "performance": 1
            },
            "stats": {
              "stress": 3,
              "confidence": 2
            }
          }
        },
        {
          "label": "Seek clarification and a correction",
          "detail": "Give the manager a chance to fix the report without concealment.",
          "effects": {
            "career": {
              "compliance": 2,
              "governance": 2,
              "interview": 1
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Follow the instruction",
          "detail": "Short-term comfort with future compliance and reputation risk.",
          "effects": {
            "career": {
              "compliance": -4,
              "governance": -2,
              "performance": 1
            },
            "stats": {
              "stress": 2
            }
          }
        }
      ]
    },
    {
      "id": "salary-review-cycle",
      "category": "career",
      "minAge": 21,
      "maxAge": 60,
      "weight": 5,
      "cooldown": 20,
      "title": "Annual salary review",
      "description": "Your manager asks for evidence of impact. A strong case needs clear delivery metrics, not only a request for more pay.",
      "options": [
        {
          "label": "Present quantified achievements",
          "detail": "Use outcomes, scope and market benchmarks.",
          "effects": {
            "career": {
              "interview": 2,
              "performance": 3,
              "promotionChance": 3
            },
            "stats": {
              "stress": 2
            }
          }
        },
        {
          "label": "Ask for a learning and promotion plan",
          "detail": "Trade some immediate pay focus for a clearer progression route.",
          "effects": {
            "career": {
              "mentorship": 2,
              "governance": 1,
              "performance": 2
            },
            "stats": {
              "happiness": 2
            }
          }
        },
        {
          "label": "Avoid the conversation",
          "detail": "No immediate tension, but little negotiation practice.",
          "effects": {
            "stats": {
              "stress": -1
            },
            "career": {
              "promotionChance": -1
            }
          }
        }
      ]
    },
    {
      "id": "redundancy-warning",
      "category": "career",
      "minAge": 22,
      "maxAge": 60,
      "weight": 4,
      "cooldown": 30,
      "title": "Your sector announces layoffs",
      "description": "The employer is reviewing costs. You have time to prepare, but no guarantee that your role is safe.",
      "options": [
        {
          "label": "Build a financial buffer and update your portfolio",
          "detail": "Reduce spending and prepare for a job search.",
          "effects": {
            "career": {
              "portfolio": 2,
              "interview": 2,
              "marketInsight": 1
            },
            "stats": {
              "stress": 2,
              "discipline": 2
            }
          }
        },
        {
          "label": "Seek an internal transfer",
          "detail": "Ask for reskilling and a different role.",
          "effects": {
            "career": {
              "applications": 1,
              "mentorship": 1,
              "experience": 1
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Ignore the warning",
          "detail": "Keep current routines; risk being unprepared.",
          "effects": {
            "career": {
              "performance": -2
            },
            "stats": {
              "stress": 3
            }
          }
        }
      ]
    },
    {
      "id": "family-education-budget",
      "category": "family",
      "minAge": 0,
      "maxAge": 25,
      "weight": 5,
      "cooldown": 24,
      "title": "A family education-budget decision",
      "description": "A sibling or child may benefit from tutoring or a device. The household must balance present needs with its education fund.",
      "options": [
        {
          "label": "Fund the learning plan",
          "detail": "Use the education fund for books, tutoring or a learning device.",
          "effects": {
            "family": {
              "educationFund": -7500,
              "funds": -1500
            },
            "stats": {
              "empathy": 2,
              "happiness": 2
            }
          }
        },
        {
          "label": "Choose a lower-cost plan",
          "detail": "Use library resources and group study.",
          "effects": {
            "family": {
              "educationFund": -1800
            },
            "stats": {
              "empathy": 1,
              "discipline": 1
            }
          }
        },
        {
          "label": "Delay the expense",
          "detail": "Preserve cash but postpone the learning support.",
          "effects": {
            "family": {
              "support": -1
            },
            "stats": {
              "stress": 1
            }
          }
        }
      ]
    },
    {
      "id": "family-care-responsibility",
      "category": "family",
      "minAge": 18,
      "maxAge": 65,
      "weight": 4,
      "cooldown": 24,
      "title": "A parent needs additional support",
      "description": "A parent has recurring appointments and practical needs. You can contribute money, time or help coordinate care.",
      "options": [
        {
          "label": "Contribute to care costs",
          "detail": "Use personal funds to support appointments and transport.",
          "effects": {
            "cash": -12000,
            "relationships": {
              "parents": 5,
              "family": 2
            },
            "stats": {
              "empathy": 3,
              "stress": 2
            }
          }
        },
        {
          "label": "Coordinate the care schedule",
          "detail": "Spend time organising relatives and appointments.",
          "effects": {
            "relationships": {
              "parents": 4,
              "family": 2
            },
            "stats": {
              "energy": -3,
              "discipline": 2,
              "empathy": 2
            }
          }
        },
        {
          "label": "Ask relatives to share the load",
          "detail": "Distribute the responsibility, while accepting less control.",
          "effects": {
            "family": {
              "support": 2
            },
            "relationships": {
              "parents": 1
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "inflation-budget-shock",
      "category": "finance",
      "minAge": 18,
      "maxAge": 75,
      "weight": 5,
      "cooldown": 24,
      "title": "A household inflation shock",
      "description": "Food, transport and utilities rise faster than your income. You need to adjust the budget rather than assume that nominal income equals purchasing power.",
      "options": [
        {
          "label": "Reduce discretionary spending",
          "detail": "Protect savings and adjust lifestyle temporarily.",
          "effects": {
            "stats": {
              "discipline": 2,
              "stress": 1
            },
            "market": {
              "sentiment": -1
            }
          }
        },
        {
          "label": "Improve income through a side project",
          "detail": "Invest time in additional work; fatigue may rise.",
          "effects": {
            "stats": {
              "energy": -5,
              "stress": 2
            },
            "career": {
              "portfolio": 1,
              "experience": 1
            }
          }
        },
        {
          "label": "Use savings to maintain routine",
          "detail": "Preserve wellbeing, but lower your cash buffer.",
          "effects": {
            "cash": -6500,
            "stats": {
              "happiness": 1,
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "interest-rate-reset",
      "category": "finance",
      "minAge": 18,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 20,
      "title": "Interest rates reset",
      "description": "The central bank changes its policy stance. Borrowers and savers experience different effects as rates feed into funding costs.",
      "options": [
        {
          "label": "Prioritise high-cost debt repayment",
          "detail": "Reduce leverage and future interest burden.",
          "effects": {
            "career": {
              "compliance": 1
            },
            "stats": {
              "discipline": 2
            },
            "market": {
              "repoRate": 0.15
            }
          }
        },
        {
          "label": "Lock a portion into a fixed deposit",
          "detail": "Trade liquidity for a known simulated return.",
          "effects": {
            "cash": -3000,
            "portfolio": {
              "retirementContribution": 3000
            },
            "stats": {
              "stress": -1
            }
          }
        },
        {
          "label": "Keep liquidity for opportunities",
          "detail": "Retain cash while waiting for better information.",
          "effects": {
            "stats": {
              "confidence": 1
            },
            "market": {
              "sentiment": 1
            }
          }
        }
      ]
    },
    {
      "id": "supplier-disruption",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 5,
      "cooldown": 24,
      "title": "A key supplier misses deliveries",
      "description": "Input availability is disrupted. Your company can pay for an alternate source, reschedule production or use existing stock and risk lost sales.",
      "options": [
        {
          "label": "Pay for an alternate supplier",
          "detail": "Higher input cost, but production continuity improves.",
          "effects": {
            "cash": -12000,
            "business": {
              "supplierResilience": 3,
              "supplyCost": 0.08,
              "quality": 1
            }
          }
        },
        {
          "label": "Use buffer inventory",
          "detail": "Avoid an urgent purchase, but inventory and capacity may be constrained.",
          "effects": {
            "business": {
              "supplierResilience": 2,
              "retainedCash": 2
            },
            "stats": {
              "stress": 1
            }
          }
        },
        {
          "label": "Delay customer orders transparently",
          "detail": "Protect cash, but customer trust may decline.",
          "effects": {
            "business": {
              "service": -3,
              "contractPipeline": -1
            },
            "stats": {
              "stress": -1
            }
          }
        }
      ]
    },
    {
      "id": "product-quality-recall",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 28,
      "title": "A product-quality complaint escalates",
      "description": "A batch has a potential defect. A recall is expensive, but ignoring safety and quality can create a much larger loss.",
      "options": [
        {
          "label": "Recall and investigate",
          "detail": "Pay immediate costs and improve quality controls.",
          "effects": {
            "cash": -18000,
            "business": {
              "quality": 4,
              "compliance": 5,
              "governance": 2,
              "retention": 1
            }
          }
        },
        {
          "label": "Offer refunds and repair",
          "detail": "Contain the damage with a smaller response.",
          "effects": {
            "cash": -8500,
            "business": {
              "service": 3,
              "quality": 2,
              "compliance": 2
            }
          }
        },
        {
          "label": "Delay action",
          "detail": "Short-term cost avoidance with serious reputation and compliance exposure.",
          "effects": {
            "business": {
              "quality": -5,
              "service": -4,
              "compliance": -6,
              "liquidityRisk": 2
            }
          }
        }
      ]
    },
    {
      "id": "major-customer-contract",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 24,
      "title": "A large customer requests a long contract",
      "description": "A buyer offers a multi-quarter contract. It could stabilise demand, but requires delivery capacity and working capital.",
      "options": [
        {
          "label": "Accept after a capacity review",
          "detail": "Commit only if production and cash reserves are adequate.",
          "effects": {
            "business": {
              "contractPipeline": 12,
              "governance": 2,
              "marketInsight": 2
            },
            "career": {
              "governance": 1
            }
          }
        },
        {
          "label": "Negotiate milestone payments",
          "detail": "Reduce working-capital strain and delivery risk.",
          "effects": {
            "business": {
              "contractPipeline": 8,
              "liquidityRisk": -2,
              "supplierCredit": 1
            }
          }
        },
        {
          "label": "Decline the contract",
          "detail": "Avoid overcommitting capacity.",
          "effects": {
            "business": {
              "debtAversion": 2,
              "retainedCash": 2
            }
          }
        }
      ]
    },
    {
      "id": "business-acquisition-offer",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 36,
      "title": "An acquisition opportunity appears",
      "description": "A local competitor may be available for purchase. The price includes goodwill and assets; due diligence is essential.",
      "options": [
        {
          "label": "Commission due diligence",
          "detail": "Pay advisers and improve the quality of the decision.",
          "effects": {
            "cash": -15000,
            "business": {
              "acquisitionOption": 2,
              "governance": 3,
              "marketInsight": 2
            }
          }
        },
        {
          "label": "Prepare a conditional offer",
          "detail": "Create an option, not an automatic acquisition.",
          "effects": {
            "business": {
              "acquisitionOption": 1,
              "expansionLead": 2,
              "contractPipeline": 2
            }
          }
        },
        {
          "label": "Walk away",
          "detail": "Preserve liquidity and avoid overpaying.",
          "effects": {
            "business": {
              "debtAversion": 2,
              "retainedCash": 2
            }
          }
        }
      ]
    },
    {
      "id": "business-export-inquiry",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 32,
      "title": "An export enquiry arrives",
      "description": "An overseas distributor requests product specifications and compliance documentation. There is no guarantee of an order.",
      "options": [
        {
          "label": "Prepare certification and export study",
          "detail": "Spend on documentation and product readiness.",
          "effects": {
            "cash": -18000,
            "business": {
              "exportReadiness": 4,
              "compliance": 3,
              "marketInsight": 2
            }
          }
        },
        {
          "label": "Work through an experienced exporter",
          "detail": "Lower setup cost but share margin with a partner.",
          "effects": {
            "business": {
              "exportReadiness": 2,
              "contractPipeline": 3,
              "supplierResilience": 1
            }
          }
        },
        {
          "label": "Decline for now",
          "detail": "Focus on the domestic market.",
          "effects": {
            "business": {
              "retainedCash": 1,
              "debtAversion": 1
            }
          }
        }
      ]
    },
    {
      "id": "employee-retention-challenge",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 24,
      "title": "A key employee considers leaving",
      "description": "An experienced employee has received another offer. Retention has a cost, but replacing critical knowledge also disrupts operations.",
      "options": [
        {
          "label": "Offer training and a career path",
          "detail": "Invest in capability and internal progression.",
          "effects": {
            "cash": -9000,
            "business": {
              "training": 3,
              "retention": 3,
              "governance": 1
            }
          }
        },
        {
          "label": "Offer a measured pay adjustment",
          "detail": "Accept a recurring wage cost to retain experience.",
          "effects": {
            "cash": -6000,
            "business": {
              "retention": 2,
              "service": 1
            }
          }
        },
        {
          "label": "Let the employee leave",
          "detail": "Protect short-term cash, but lose organisational knowledge.",
          "effects": {
            "business": {
              "retention": -3,
              "service": -2,
              "quality": -1
            }
          }
        }
      ]
    },
    {
      "id": "bank-liquidity-rumour",
      "category": "banking",
      "minAge": 18,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 36,
      "title": "A liquidity rumour spreads about your bank",
      "description": "Customers are asking whether deposits are safe. Public communication and liquidity management matter; a bank cannot lend every rupee it receives.",
      "options": [
        {
          "label": "Hold extra liquidity and communicate",
          "detail": "Reduce lending growth and strengthen customer trust.",
          "effects": {
            "bank": {
              "liquidity": 0.025,
              "trust": 4,
              "loanGrowth": -0.08,
              "service": 2
            }
          }
        },
        {
          "label": "Raise short-term wholesale funding",
          "detail": "Pay funding costs to protect the vault.",
          "effects": {
            "bank": {
              "wholesaleFunding": 500000,
              "interestCost": 0.002,
              "trust": 1
            }
          }
        },
        {
          "label": "Continue aggressive lending",
          "detail": "Protect growth now, but leave less room for withdrawals.",
          "effects": {
            "bank": {
              "liquidity": -0.02,
              "loanGrowth": 0.08,
              "trust": -4
            }
          }
        }
      ]
    },
    {
      "id": "bank-credit-deterioration",
      "category": "banking",
      "minAge": 18,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 28,
      "title": "Loan repayments deteriorate",
      "description": "A group of borrowers faces cash-flow stress. Your credit team can restructure viable loans or recognise losses early.",
      "options": [
        {
          "label": "Restructure viable borrowers",
          "detail": "Reduce near-term defaults, but defer some interest income.",
          "effects": {
            "bank": {
              "recovery": 0.18,
              "trust": 2,
              "compliance": 2
            }
          }
        },
        {
          "label": "Strengthen collections and provisions",
          "detail": "Recognise losses earlier and improve controls.",
          "effects": {
            "bank": {
              "creditLoss": 0.06,
              "compliance": 4,
              "capitalAdequacyTarget": 0.14
            }
          }
        },
        {
          "label": "Relax repayment follow-up",
          "detail": "Save operating effort but allow risk to accumulate.",
          "effects": {
            "bank": {
              "trust": -3,
              "compliance": -4,
              "creditLoss": 0.12
            }
          }
        }
      ]
    },
    {
      "id": "bank-branch-opportunity",
      "category": "banking",
      "minAge": 18,
      "maxAge": 75,
      "weight": 3,
      "cooldown": 36,
      "title": "A branch location becomes available",
      "description": "A commercial location is available. Branch rent, staffing and deposit potential should be evaluated before committing.",
      "options": [
        {
          "label": "Run a detailed branch feasibility study",
          "detail": "Spend on research and retain the option.",
          "effects": {
            "cash": -12000,
            "bank": {
              "service": 2,
              "trust": 1,
              "loanGrowth": 0.02
            }
          }
        },
        {
          "label": "Open a small service desk",
          "detail": "Choose a lower-cost footprint and learn demand.",
          "effects": {
            "bank": {
              "operatingCost": 18000,
              "service": 2,
              "trust": 2
            }
          }
        },
        {
          "label": "Pass on the opportunity",
          "detail": "Protect capital and liquidity.",
          "effects": {
            "bank": {
              "liquidity": 0.01,
              "trust": 1
            }
          }
        }
      ]
    },
    {
      "id": "business-cyber-incident",
      "category": "business",
      "minAge": 18,
      "maxAge": 75,
      "weight": 4,
      "cooldown": 30,
      "title": "A cyber incident disrupts operations",
      "description": "A compromised account or device interrupts business systems. Quick containment and clean recovery records matter.",
      "options": [
        {
          "label": "Isolate systems and bring in experts",
          "detail": "Pay response costs and strengthen controls.",
          "effects": {
            "cash": -22000,
            "business": {
              "compliance": 4,
              "governance": 3,
              "service": 1,
              "innovation": 1
            }
          }
        },
        {
          "label": "Restore from backup and review access",
          "detail": "Lower cost, but some downtime remains.",
          "effects": {
            "cash": -8500,
            "business": {
              "governance": 2,
              "quality": 1,
              "service": -1
            }
          }
        },
        {
          "label": "Ignore the incident",
          "detail": "Avoid immediate expense but leave the weakness open.",
          "effects": {
            "business": {
              "compliance": -5,
              "service": -3,
              "liquidityRisk": 2
            }
          }
        }
      ]
    },
    {
      "id": "job-relocation-offer",
      "category": "career",
      "minAge": 21,
      "maxAge": 60,
      "weight": 4,
      "cooldown": 24,
      "title": "A job opportunity in another city",
      "description": "A role in another city offers higher pay but brings moving costs, rent and family trade-offs.",
      "options": [
        {
          "label": "Move for the opportunity",
          "detail": "Pay relocation costs and accept a new environment.",
          "effects": {
            "cash": -18000,
            "cityMove": true,
            "career": {
              "salaryBoost": 0.08,
              "experience": 1
            },
            "stats": {
              "stress": 2,
              "confidence": 2
            }
          }
        },
        {
          "label": "Negotiate hybrid or remote work",
          "detail": "Seek the role without a full relocation.",
          "effects": {
            "career": {
              "interview": 2,
              "governance": 1
            },
            "stats": {
              "stress": 1,
              "energy": 1
            }
          }
        },
        {
          "label": "Stay near family",
          "detail": "Preserve support networks and current routine.",
          "effects": {
            "relationships": {
              "parents": 2,
              "family": 2
            },
            "stats": {
              "happiness": 2
            }
          }
        }
      ]
    },
    {
      "id": "retirement-plan-choice",
      "category": "finance",
      "minAge": 30,
      "maxAge": 70,
      "weight": 3,
      "cooldown": 40,
      "title": "A retirement-planning review",
      "description": "Your future expenses, longevity and market risk deserve a plan. Contributions reduce current liquidity but build long-term assets.",
      "options": [
        {
          "label": "Start a small diversified contribution",
          "detail": "Invest only what your household can leave untouched.",
          "effects": {
            "portfolio": {
              "retirementContribution": 6500
            },
            "stats": {
              "discipline": 2,
              "stress": -1
            }
          }
        },
        {
          "label": "Pay off expensive borrowing first",
          "detail": "Lower the interest burden before investing more.",
          "effects": {
            "stats": {
              "discipline": 2,
              "confidence": 1
            },
            "career": {
              "marketInsight": 1
            }
          }
        },
        {
          "label": "Keep a larger emergency fund",
          "detail": "Prioritise immediate liquidity.",
          "effects": {
            "stats": {
              "stress": -2,
              "happiness": 1
            },
            "career": {
              "compliance": 1
            }
          }
        }
      ]
    }
  ],
  "metadata": {
    "version": "4.0",
    "createdForBuild": "0.7.0",
    "contentApproach": "Curated, playable simulation records; numbers are game-balancing estimates, not official admissions or salary advice.",
    "recordCounts": {
      "schoolTypes": 4,
      "streams": 7,
      "exams": 37,
      "programmes": 55,
      "institutions": 80,
      "careerTracks": 22,
      "jobs": 119,
      "events": 170
    }
  }
};
