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
      `At the moment, I'm working on finishing my master's thesis. My topic is comparing Godot and Unreal Engine to see which is better for creating fast, dynamic VR environments for a variable amount of users. So, the basic idea of the app is to hook up a bunch of people using standalone VR headsets and a laptop as a server, and then connect them all in a local network. Everything in the app can be done using hand tracking, so you don't need any controllers, which is especially useful for colocated environments. \n\nI'm working on this application in Unreal and Godot, but since it's still in progress, I can't show you anything here just yet.`,
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
    imageSources: ["/bach-scene.png", "/bach-balls.png", "/bach-wall.png", "/bach-hands.jpg"],
    githubPagesUrl: "",
    repoUrl: "https://github.com/Maxi-F22/ThesisWiSe23-24",
    type: "VR"
  },
  {
    title: "Unity Multi-User VR Template",
    description: 
      `As part of a research project for my Master's degree, my group and I developed a Unity Multi-User VR template. The template is designed to quickly set up a local, colocated Multi-User VR environment for up to 16 clients. The application runs on standalone VR headsets, the server on a laptop and all devices are connected via a router that sets up a local network without an internet connection. \n\nThe following images will give you an idea of what the template looks like:`,
    stack: ["Unity", "Multiplayer", "VR"],
    imageSources: ["/vru-avatar.jpg", "/vru-lobby_empty.png", "/vru-playground.png", "/vru-scenechanger.png", "/vru-visualizer.png"],
    githubPagesUrl: "",
    repoUrl: "",
    type: "VR"
  },
  {
    title: "Comprehensive Guide to co-located Multi-User VR Applications",
    description: 
      `As part of the research project, on top of creating the Unity Multi-User VR Template, we wrote a Comprehensive Guide to networked environments and Multi-User VR development in Unity, including communication principles, system design, network setup, and implementation of stable local multiplayer experiences. \n\nThe guide has been published and can be accessed via the following link:`,
    stack: [],
    imageSources: [],
    githubPagesUrl: "",
    repoUrl: "https://opus.hs-furtwangen.de/frontdoor/index/index/year/2025/docId/11950",
    type: "VR"
  },
  {
    title: "Waves of Freedom",
    description:
      `This game was created during a gamejam with the theme "Making Waves" as part of the final exam for the Game Design course in my Master's program. I worked on core gameplay systems, including point-and-click controls, camera mechanics, puzzle interactions, animations and integrating the team’s code into a cohesive final build. Some of the assets were built in real life and scanned in 3D, while others were modeled in Blender. The game itself was created using Godot. \n\nMade by Maximilian Flack, Sven Schirmaier, Lucia Rothweiler, Han Nguyen, Noam Hartmann, Marcel Ritter.`,
    stack: ["Game Jam", "Game Dev", "Game Design", "Godot", "Blender"],
    imageSources: [],
    githubPagesUrl: "https://maxi-f22.github.io/GamejamSoSe25/src/WavesofFreedom.html",
    repoUrl: "https://github.com/Maxi-F22/GamejamSoSe25",
    type: "Game Dev"
  },
  {
    title: "Murderous West - Visual Novel",
    description: 
      `During my Bachelor's degree, I took a course on visual novels to gain a deeper understanding of storytelling in games, as well as experience in this type of game development. This game, called "Murderous West", was made for the final project of the course. \nIt was made using the HFU's own game engine, FUDGE Story. \n\n(The resolution isn't quite right in the window below. Click the "Open Project" button to see the full experience!)`,
    stack: ["Game Dev", "Storytelling in Games", "FUDGE"],
    imageSources: [],
    iframeScale: 0.5,
    githubPagesUrl: "https://maxi-f22.github.io/VisualNovel/MurderousWest/Game.html",
    repoUrl: "https://github.com/Maxi-F22/VisualNovel",
    type: "Game Dev"
  },
  {
    title: "Super Blobio 64",
    description: 
      ``,
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
      `Only supported in non-chromium browsers.`,
    stack: ["WebGL", "Shader", "JavaScript"],
    imageSources: [],
    iframeScale: 0.45,
    githubPagesUrl: "https://echtzeit-computergrafik-ss24.github.io/ECG_Maximilian_Flack/Prototype/",
    repoUrl: "https://github.com/Maxi-F22/ECG_SoSe24",
    type: "WebGL"
  },
  {
    title: "Gear Prototype",
    description: 
      `Only a demo`,
    stack: ["WebGL", "Shader", "JavaScript"],
    imageSources: [],
    iframeScale: 0.45,
    githubPagesUrl: "https://echtzeit-computergrafik-ws23.github.io/ECG_Maximilian_Flack/Aufgabe_2Prototyp/",
    repoUrl: "https://github.com/Maxi-F22/ECG_WiSe23-24",
    type: "WebGL"
  },
  {
    title: "Der EisDealer",
    description: 
      ``,
    stack: ["Web Design", "HTML", "CSS", "TypeScript", "Database"],
    imageSources: [],
    iframeScale: 0.6,
    githubPagesUrl: "https://maxi-f22.github.io/GIS_SoSe2020/Portfolio/shop.html",
    repoUrl: "https://github.com/Maxi-F22/GIS_SoSe2020",
    type: "Web Design"
  },
  {
    title: "Medieval City from Map Data",
    description: 
      `This project generates a medieval town using map data exported from OpenStreetMap. Houses and streets are placed on the actual locations shown on the OSM map, and the areas marked as woodland are filled with various tree assets.\n\nMade by Maximilian Flack and Felix Iltgen.`,
    stack: ["Blender Add-on", "Python", "Map Data"],
    imageSources: ["dv-overview.png", "dv-night.png", "dv-comppare.png"],
    githubPagesUrl: "",
    repoUrl: "https://github.com/Maxi-F22/DatenverarbeitungSoSe22",
    type: "Python"
  },
  {
    title: "Meeting Companion",
    description:
      `This project was created as the final assignment of the course Interaction Design. It is about developing a meeting companion website that records meetings, transcribes them into text, and organizes the content into structured categories. The transcription, summarisation, grouping into items and icon creation are all done by different AIs using the Inference API from HuggingFace.  \n\nMade by Maximilian Flack, Sven Schirmaier, Noam Hartmann, Marcel Ritter.`,
    stack: ["Interaction Design", "AI Integration", "Hugging Face", "JavaScript"],
    imageSources: ["ai-transcirpt.png", "/ai-results.png"],
    githubPagesUrl: "",
    repoUrl: "https://github.com/Maxi-F22/MeetingCompanion",
    type: "AI"
  },
];
