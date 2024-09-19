import { defineType } from "sanity";

export default defineType({
	name: "tool",
	title: "Tools",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
			},
		},
		{
			name: "toolLogo",
			title: "Tool Logo",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					title: "Alternative text",
					type: "string",
				},
			],
		},
		{
			name: "toolDescription",
			title: "Tool Description",
			type: "text",
		},
		{
			name: "toolLink",
			title: "Tool Link",
			type: "url",
		},
	],
});
