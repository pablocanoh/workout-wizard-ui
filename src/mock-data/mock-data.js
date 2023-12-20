export const mockAvailableExercises = {
    CHEST: [
        "Press de banca",
        "Press inclinado con mancuernas",
        "Aperturas con mancuernas",
        "Fondos en paralelas"
    ],
    TRICEPS: [
        "Extensión de tríceps en polea alta",
        "Fondos en banco",
        "Rompecráneos"
    ],
};

export const routineMock = {
    "id": "d390b7f9-8842-4f01-a59f-0f7889d75efa",
    "blocks": [
        {
            "id": "154cc392-0860-4019-8098-3ce86ce97023",
            "exercises": [
                {
                    "id": "5d3b983f-f139-4bbc-80be-14f8f13ef473",
                    "type": "TRICEPS",
                    "role": "MAIN",
                    "name": "Triceps Extension",
                    "description": "Triceps Extension Description",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "e2fc549a-3e54-48ad-96c7-1195cb2f5e0f",
                    "type": "TRICEPS",
                    "role": "COMPLEMENTARY",
                    "name": "Overhead Triceps Extension",
                    "description": "Targets the triceps, emphasizing the long head.",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "fafb500c-ac29-4bb3-818c-a21b7b057efa",
                    "type": "TRICEPS",
                    "role": "COMPLEMENTARY",
                    "name": "Triceps Dip",
                    "description": "Triceps Dip Description",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "e0df1f0a-bfdd-4c60-8876-1d315d1b4a55",
                    "type": "CHEST",
                    "role": "MAIN",
                    "name": "Chest Press",
                    "description": "Chest Press Description",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "2d535b3c-fed3-4757-9eaf-a0778e534d31",
                    "type": "CHEST",
                    "role": "COMPLEMENTARY",
                    "name": "Dumbbell Pullover",
                    "description": "Works upper chest muscles using a dumbbell.",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "6b0e62ec-4214-414b-ab25-748bc20b42a2",
                    "type": "CHEST",
                    "role": "COMPLEMENTARY",
                    "name": "Pull Over",
                    "description": "Pull Over Description",
                    "sets": 5,
                    "reps": 8
                }
            ]
        },
        {
            "id": "3acbbc24-283b-4c93-8de0-ce68a03d1452",
            "exercises": [
                {
                    "id": "10ae7126-af4a-4738-943c-433ecf784fb3",
                    "type": "BICEPS",
                    "role": "MAIN",
                    "name": "Bicep Curl",
                    "description": "Bicep Curl Description",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "516507aa-12d5-4621-b707-7e1ec9f6a900",
                    "type": "BICEPS",
                    "role": "COMPLEMENTARY",
                    "name": "Preacher Curl",
                    "description": "Preacher Curl Description",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "11a5db20-53dd-4218-b102-c2558342e735",
                    "type": "BICEPS",
                    "role": "COMPLEMENTARY",
                    "name": "Barbell Curl",
                    "description": "Classic bicep exercise for mass and strength.",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "dcca67e3-8690-4ba1-93c3-488747706e63",
                    "type": "BACK",
                    "role": "MAIN",
                    "name": "Lat Pulldown",
                    "description": "Lat Pulldown Description",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "8c466ae8-d3dc-4051-a9b7-4945cece898e",
                    "type": "BACK",
                    "role": "COMPLEMENTARY",
                    "name": "Pull Up",
                    "description": "Upper body exercise targeting back and biceps.",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "846dfc09-9f98-425d-a15e-b4a79d4c3a72",
                    "type": "BACK",
                    "role": "COMPLEMENTARY",
                    "name": "Seated Row",
                    "description": "Seated Row Description",
                    "sets": 5,
                    "reps": 8
                }
            ]
        },
        {
            "id": "3ab080d9-942a-44f3-b144-8b2f87b44ca1",
            "exercises": [
                {
                    "id": "47a2c35d-d684-4a26-af8b-4b6ba898a8a1",
                    "type": "LEGS",
                    "role": "MAIN",
                    "name": "Leg Press",
                    "description": "Leg Press Description",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "d58014a9-0bfb-4781-ac7a-ade70c61c973",
                    "type": "LEGS",
                    "role": "COMPLEMENTARY",
                    "name": "Hip Thrust",
                    "description": "Targets glutes and hamstrings for lower body strength.",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "1564c135-bb11-4722-b6d3-434b9d19f9b9",
                    "type": "LEGS",
                    "role": "COMPLEMENTARY",
                    "name": "Calf Raise",
                    "description": "Isolates the calf muscles for strength and definition.",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "3b01fbee-6cc4-4760-965c-76492b2b236f",
                    "type": "SHOULDERS",
                    "role": "MAIN",
                    "name": "Shoulder Press",
                    "description": "Shoulder Press Description",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "3f134ee2-1583-42a7-af5d-86bc5b34f68c",
                    "type": "SHOULDERS",
                    "role": "COMPLEMENTARY",
                    "name": "Front Raise",
                    "description": "Front Raise Description",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "8c2c4079-5531-4593-8c73-33a43a5f3c8a",
                    "type": "SHOULDERS",
                    "role": "COMPLEMENTARY",
                    "name": "Upright Row",
                    "description": "Targets shoulders and traps for upper body strength.",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "9da05668-2cd8-4075-aac3-03dedfc53f86",
                    "type": "CORE",
                    "role": "MAIN",
                    "name": "Sit Up",
                    "description": "Classic abdominal exercise for core strength.",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "37dbb6fb-05a9-43b3-83bd-760765e74252",
                    "type": "CORE",
                    "role": "COMPLEMENTARY",
                    "name": "Russian Twist",
                    "description": "Works the obliques for core rotation strength.",
                    "sets": 5,
                    "reps": 8
                },
                {
                    "id": "dae92e9f-444c-4fa4-86c5-92d42ccf79e0",
                    "type": "CORE",
                    "role": "COMPLEMENTARY",
                    "name": "Leg Raise",
                    "description": "Targets lower abdominals and hip flexors.",
                    "sets": 5,
                    "reps": 8
                }
            ]
        }
    ],
    "days": 3
}
