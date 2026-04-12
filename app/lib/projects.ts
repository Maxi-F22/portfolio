import { ReactNode } from "react";

export type ProjectEmbed = {
  title: string;
  description: ReactNode;
  stack: string[];
  imageSources: string[];
  iframeScale?: number;
  githubPagesUrl: string;
  repoUrl: string;
  type: string;
};

export const projects: ProjectEmbed[] = [
  {
    title: "CuWave",
    description: 
      `A just for fun project about a puzzle game where you control a cube. The cube also has abilities – three, to be precise. Opposite sides have the same ability. Try to reach the goal by using the abilities wisely and positioning the cube correctly. \nThe game was made in Godot and the cube was modeled in Blender.`,
    stack: ["Game Dev", "Puzzle Design", "Godot", "Blender"],
    imageSources: [],
    githubPagesUrl: "https://maxi-f22.github.io/CuWave-Web/CuWave.html",
    repoUrl: "https://github.com/Maxi-F22/CuWave-Web",
    type: "own"
  },
  {
    title: "Master Thesis",
    description: 
      `At the moment, I'm working on finishing my master's thesis. My topic is comparing Godot and Unreal Engine to see which is better for creating fast, dynamic VR environments for a variable amount of users. The basic idea of the app is to hook up a bunch of people using standalone VR headsets and a laptop as a server, and then connect them all in a local network. Everything in the app can be done using hand tracking, so you don't need any controllers, which is especially useful for colocated environments. \n\nFor the comparison, I'm working on two applications in Unreal and Godot, but since it's still in progress, I can't show you anything here just yet.`,
    stack: ["Unreal Engine", "Godot", "Multiplayer", "VR"],
    imageSources: [],
    githubPagesUrl: "",
    repoUrl: "",
    type: "VR"
  },
  {
    title: "Bachelor Thesis",
    description: 
      `For my bachelor's thesis, I created a musical Multi-User VR application for two clients. I learnt a lot about VR and multiplayer development in Unity during that time. The main topic I was looking into in my research was how to get haptic feedback from the controllers to make the experience more realistic and improve the perception of music for the clients.`,
    stack: ["Unity", "Multiplayer", "Empirical Research", "VR"],
    imageSources: ["bach-scene.png", "bach-balls.png", "bach-wall.png", "bach-hands.jpg"],
    githubPagesUrl: "",
    repoUrl: "https://github.com/Maxi-F22/ThesisWiSe23-24",
    type: "VR"
  },
  {
    title: "Unity Multi-User VR Template",
    description: 
      `As part of a research project for my Master's degree, my group and I developed a Unity Multi-User VR template. The template is designed to quickly set up a local, colocated Multi-User VR environment for up to 16 clients. The application runs on standalone VR headsets, the server on a laptop and all devices are connected via a router that sets up a local network without an internet connection. \n\nThe following images will give you an idea of what the template looks like:`,
    stack: ["Unity", "Multiplayer", "VR"],
    imageSources: ["vru-avatar.jpg", "vru-lobby_empty.png", "vru-playground.png", "vru-scenechanger.png", "vru-visualizer.png"],
    githubPagesUrl: "",
    repoUrl: "",
    type: "VR"
  },
  {
    title: "Comprehensive Guide to co-located Multi-User VR Applications",
    description: 
      `In the research project, we not only developed a Unity Multi-User VR template but also created a Comprehensive Guide on building networked VR experiences. The guide covers key topics like communication principles, system design, network setup, and implementing stable local multiplayer environments. It is aimed at helping others get started with Multi-User VR development in Unity without getting lost in the technical complexity. \n\nThe guide has been published and can be accessed via the following link:`,
    stack: [],
    imageSources: [],
    githubPagesUrl: "",
    repoUrl: "https://opus.hs-furtwangen.de/frontdoor/index/index/year/2025/docId/11950",
    type: "VR"
  },
  {
    title: "Waves of Freedom",
    description:
      `This game was created during a gamejam with the theme "Making Waves" as part of the final exam for the Game Design course in my Master's program. We were a group of 6 students and my job was working on core gameplay systems, including point-and-click controls, camera mechanics, puzzle interactions, animations and integrating the team’s code into a cohesive final build. Some of the assets were built in real life and scanned in 3D, while others were modeled in Blender. The game itself was created using Godot. \n\nMade by Maximilian Flack, Sven Schirmaier, Lucia Rothweiler, Han Nguyen, Noam Hartmann, Marcel Ritter.`,
    stack: ["Game Jam", "Game Dev", "Game Design", "Godot", "Blender"],
    imageSources: [],
    githubPagesUrl: "https://maxi-f22.github.io/GamejamSoSe25/src/WavesofFreedom.html",
    repoUrl: "https://github.com/Maxi-F22/GamejamSoSe25",
    type: "Game Dev"
  },
  {
    title: "Murderous West - Visual Novel",
    description: 
      `During my Bachelor’s degree, I took a course on visual novels to explore storytelling in games and get hands-on experience with this genre. The result was "Murderous West", a small narrative-driven game created as the final project. It was developed using the HFU’s in-house engine, FUDGE Story. The project gave me a better understanding of branching narratives and how to bring story and interaction together. \n\n(The resolution isn't quite right in the window below. Click the "Open Project" button to see the full experience!)`,
    stack: ["Game Dev", "Storytelling in Games", "FUDGE Story"],
    imageSources: [],
    iframeScale: 0.5,
    githubPagesUrl: "https://maxi-f22.github.io/VisualNovel/MurderousWest/Game.html",
    repoUrl: "https://github.com/Maxi-F22/VisualNovel",
    type: "Game Dev"
  },
  {
    title: "Super Blobio 64",
    description: 
      `As part of a course on prototyping games using a simplified TypeScript-based engine, I developed a basic 3D platformer. The game focuses on core mechanics like stomping enemies and collecting coins to unlock the path to the goal. All assets were created using the engine’s default primitive shapes, keeping the project intentionally simple. The main objective was to build a solid understanding of fundamental game engine workflows using the HFU’s in-house engine, FUDGE.`,
    stack: ["Game Dev", "Fundamentals of Game Engines", "FUDGE"],
    imageSources: [],
    iframeScale: 0.6,
    githubPagesUrl: "https://maxi-f22.github.io/PRIMA-SS22/Endabgabe/",
    repoUrl: "https://github.com/Maxi-F22/PRIMA-SS22",
    type: "Game Dev"
  },
  {
    title: "Protorail",
    description: 
      `This app is the final project for the Real-Time Computer Graphics course. It is a small interactive game built using the WebGL-based framework Glance by Clemens Sielaff. Protorail is played on a 6x6 grid where the goal is to connect a starting station to a destination by placing tracks using the arrow keys, with light puzzle elements in the gameplay. Once all tracks are placed, the train can be started and followed with a movable camera. \nThe project focuses on combining gameplay logic with real-time rendering. \n\nSadly, this project does not work in Chromium-based browsers on Windows.`,
    stack: ["WebGL", "Shader", "JavaScript", "Puzzle Design"],
    imageSources: [],
    iframeScale: 0.45,
    githubPagesUrl: "https://echtzeit-computergrafik-ss24.github.io/ECG_Maximilian_Flack/Prototype/",
    repoUrl: "https://github.com/Maxi-F22/ECG_SoSe24",
    type: "WebGL"
  },
  {
    title: "Gear Prototype",
    description: 
      `Alongside the main project in the Real-Time Computer Graphics course, I also created a smaller demo to explore the technical side of the Glance framework. This demo showcases interlocking gears placed on a cube, highlighting basic shader programming and WebGL functionality. The goal here was less about gameplay and more about demonstrating how 3D models can be rendered and interacted with directly in the browser. It serves as a compact example of the graphics programming concepts covered in the course.`,
    stack: ["WebGL", "Shader", "JavaScript"],
    imageSources: [],
    iframeScale: 0.45,
    githubPagesUrl: "https://echtzeit-computergrafik-ws23.github.io/ECG_Maximilian_Flack/Aufgabe_2Prototyp/",
    repoUrl: "https://github.com/Maxi-F22/ECG_WiSe23-24",
    type: "WebGL"
  },
  {
    title: "Ice Cream Shop",
    description: 
      `Created as part of the Fundamentals of Interactive Systems course, this project is a small interactive ice cream shop website. The goal was to get familiar with the basics of web development using HTML, CSS, and TypeScript. Along the way, I also learned how to set up a database and connect it to a Node.js backend using simple GET and SET requests. Overall, it was a hands-on introduction to building full-stack web applications.`,
    stack: ["Full-Stack Development", "Web Design", "HTML", "CSS", "TypeScript", "Node.js", "Database Connection"],
    imageSources: [],
    iframeScale: 0.6,
    githubPagesUrl: "https://maxi-f22.github.io/GIS_SoSe2020/Portfolio/shop.html",
    repoUrl: "https://github.com/Maxi-F22/GIS_SoSe2020",
    type: "Web Design"
  },
  {
    title: "Medieval City from Map Data",
    description: 
      `This project was about procedurally generating a medieval town using map data exported from OpenStreetMap. Buildings and streets are placed according to their real-world positions, while designated woodland areas are populated with various tree assets. The project was developed as a Blender plugin using Python, enabling seamless integration of map data into a 3D environment. Working in a team of two, I primarily handled the Python implementation, including translating OSM data into Blender coordinates and placing the models created by my teammate into the scene.\n\nMade by Maximilian Flack and Felix Iltgen.`,
    stack: ["Blender Add-on", "Python", "Map Data"],
    imageSources: ["dv-overview.png", "dv-night.png", "dv-comppare.png"],
    githubPagesUrl: "",
    repoUrl: "https://github.com/Maxi-F22/DatenverarbeitungSoSe22",
    type: "Python"
  },
  {
    title: "Meeting Companion",
    description:
      `This project was developed as the final assignment for the Interaction Design course and focuses on a meeting companion web application. It records meetings, transcribes them into text, and automatically structures the content into organized categories. Various AI models - integrated via the Hugging Face Inference API - handle tasks like transcription, summarization, grouping, and even icon generation. My role in the team was to build the backend, including setting up the Node.js server and connecting the application to the Hugging Face API. \n\nMade by Maximilian Flack, Sven Schirmaier, Noam Hartmann, Marcel Ritter.`,
    stack: ["Interaction Design", "AI Integration", "Hugging Face", "Node.js", "JavaScript"],
    imageSources: ["ai-transcirpt.png", "ai-results.png"],
    githubPagesUrl: "",
    repoUrl: "https://github.com/Maxi-F22/MeetingCompanion",
    type: "AI"
  },
];
