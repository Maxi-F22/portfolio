import { ReactNode } from "react";

export type ProjectEmbed = {
  title: string;
  description: ReactNode;
  stack: string[];
  githubPagesUrl: string;
  repoUrl: string;
  type: string;
};

export const projects: ProjectEmbed[] = [
  {
    title: "CuWave",
    description: "A just for fun project about a puzzle game where you control a cube. The cube also has abilities – three, to be precise. Opposite sides have the same ability. Try to reach the goal by using the abilities wisely and positioning the cube correctly. The game was made in Godot and the cube was modeled in Blender.",
    stack: ["Game Dev", "Godot", "Blender", "GitHub Pages"],
    githubPagesUrl: "https://maxi-f22.github.io/CuWave-Web/CuWave.html",
    repoUrl: "https://github.com/Maxi-F22/CuWave-Web",
    type: "own"
  },
  {
    title: "Waves of Freedom",
    description:
      "This game was created during a gamejam with the theme Making Waves as part of the final exam for the Game Design course in the Media Master's program at Furtwangen University. Some of the assets were built in real life and scanned in 3D, while others were modeled in Blender. The game itself was created using Godot. Made by Sven Schirmaier, Lucia Rothweiler, Han Nguyen, Noam Hartmann, Marcel Ritter and Maximilian Flack.",
    stack: ["Game Jam", "Game Dev", "Game Design", "Godot", "Blender"],
    githubPagesUrl: "https://maxi-f22.github.io/GamejamSoSe25/src/WavesofFreedom.html",
    repoUrl: "https://github.com/Maxi-F22/GamejamSoSe25",
    type: "Games"
  },
];
