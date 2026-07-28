export const PROJECTS = [
  {
    name: "RivalRuns",
    tag: "MOTION-CONTROLLED MULTIPLAYER GAME",
    image: "images/rival_runs_demo.png",
    badge: "2ND PLACE",
    description:
      "A two-player endless runner where your body is the controller. Player A runs an obstacle course using body movement — stepping sideways to change lanes, jumping or ducking to avoid barriers, raising both hands to shield. Player B places obstacles in real time using hand gestures, trying to trip them up. The two machines talk over WebSocket while the whole thing renders in 3D. Built at Hack the Valley's Hack Days with Eeshan Agarwal and Lohitashwa Madhan — won 2nd place.",
    stack: ["Python", "MediaPipe", "OpenCV", "Ursina / Panda3D", "asyncio", "WebSocket"],
    links: [
      { label: "Devpost", url: "https://devpost.com/software/rivalruns" },
      { label: "GitHub", url: "https://github.com/eesh4n/rivalruns" },
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/kevin-hill-9291693b0_rivalruns-share-7487249670252044288-Vw4V/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGRnM_EBnibZUTd7clAn-rvObmR_ZVVI_5w" }
    ]
  },
  {
    name: "ML Emotion Detection",
    tag: "COMPUTER VISION / ENSEMBLE MODEL",
    image: "images/ml_emotions_demo.png",
    description:
      "A personal project training a model to detect emotions on a person's face using OpenCV to capture the camera feed. Learned how to prevent overfitting and actually train and deploy a model — hit 61% accuracy on the test set with a single model, then combined 5 models with varying strengths and weaknesses into an ensemble that pushed accuracy to 65%.",
    stack: ["Python", "OpenCV", "TensorFlow/Keras", "Ensemble Modeling"],
    links: [
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/kevin-hill-9291693b0_machinelearning-deeplearning-computervision-ugcPost-7479689370376036352-iLTg/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGRnM_EBnibZUTd7clAn-rvObmR_ZVVI_5w" },
      { label: "GitHub", url: "https://github.com/KevinHill14/emotion_detection" }
    ]
  },
  {
    name: "TensorFlow Object Detection",
    tag: "OBJECT DETECTION",
    image: "images/ai_scanner_demo.png",
    description:
      "A personal project to detect what objects are on-screen, with the eventual goal of putting the software onto a physical device. That part's still unbuilt, but the project taught API calls, TensorFlow, and object detection end to end — starting from struggling with bounding boxes and UI, through learning convolutional neural networks, transfer learning, and fine-tuning pre-trained models for specific detection tasks.",
    stack: ["Python", "TensorFlow", "Convolutional Neural Networks", "Transfer Learning"],
    links: [
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/kevin-hill-9291693b0_first-project-giving-my-computer-eyes-ai-ugcPost-7478600354658549760-oUS-/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGRnM_EBnibZUTd7clAn-rvObmR_ZVVI_5w" },
      { label: "GitHub", url: "https://github.com/KevinHill14/ai_camera_scanner" }
    ]
  },
  {
    name: "Credit Card Optimizer",
    tag: "WEB APP",
    image: "images/cardiq_demo.png",
    description:
      "Built with my friend Eeshan Agarwal to solve a real problem: people using credit cards that don't match their spending. Given a user's spending breakdown, the optimizer calculates the ideal card — weighing perks, insurance, added benefits, and points or cashback — and surfaces the top 3 cards that save the most money, with the math shown. Learned web design, working efficiently as a team, and the importance of organization.",
    stack: ["Web Design", "JavaScript", "Team Collaboration"],
    links: [
      { label: "Try It", url: "https://cardiq.fly.dev/" },
      { label: "GitHub", url: "https://github.com/eesh4n/cc_optimizer" }
    ]
  },
  {
    name: "2D Platformer — Dash",
    tag: "GAME DEVELOPMENT",
    image: "images/dash_demo.png",
    description:
      "My final project for grade 12 computer science: a 2D platformer built with Raylib. What was supposed to be closer to Mario shifted into something with elements of Geometry Dash that I'm genuinely proud of. The hardest part was moving platforms — solved by predicting where the player and platform would each be next frame. Learned game development, collision detection, and world design.",
    stack: ["C++", "Raylib", "Collision Detection"],
    links: [
      { label: "Play It", url: "https://floodrush14.itch.io/dash" },
      { label: "GitHub", url: "https://github.com/KevinHill14/dash-game" }
    ]
  }
];
