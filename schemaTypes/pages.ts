import { defineType } from "sanity";

export default defineType({
	name: "page",
	title: "Pages",
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
				maxLength: 96,
			},
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [
				{
					type: "block",
				},
			],
		},
	],
});
