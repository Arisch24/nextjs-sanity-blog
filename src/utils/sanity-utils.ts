import { createClient, groq } from "next-sanity";
import { projectId, dataset, apiVersion } from "../../sanity.config";

export async function getTools() {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
	});

	client.fetch(
		groq`*[_type == "tool"]{
		_id,
		_createdAt,
		_updatedAt,
		_type,
		_title,
		_description,
		"slug": slug.current,
		"image": image.asset->url,
		}`,
	);
}
