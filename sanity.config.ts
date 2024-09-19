"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemaTypes from "./schemaTypes";

export const projectId = process.env.NEXT_SANITY_STUDIO_PROJECT_ID || "";
export const dataset = process.env.NEXT_SANITY_STUDIO_DATASET || "";
export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-09-18";
export const projectTitle = process.env.NEXT_PROJECT_TITLE || "";

export default defineConfig({
	name: "default",
	title: projectTitle,

	projectId: projectId,
	dataset: dataset,
	apiVersion: apiVersion,

	basePath: "/admin",

	plugins: [structureTool(), visionTool()],

	schema: {
		types: [...schemaTypes],
	},
});
