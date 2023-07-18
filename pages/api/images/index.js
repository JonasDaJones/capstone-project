import process from "node:process";
import cloudinary from "cloudinary";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handler(request, response) {
  if (request.method === "GET") {
    try {
      // we use cloudinary search API to retrieve images
      const result = await cloudinary.v2.search
        // see documentation to adjust the query at https://cloudinary.com/documentation/search_api#examples
        .with_field("tags")
        .max_results(10)
        .execute();
      // finally we deliver the response with the result as JSON
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
}

export async function postHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  // initialize formidable
  const form = formidable({});
  // using formidables' parse method to get a simple access to the file data
  form.parse(req, async (error, fields, files) => {
    // return an error status if parsing fails
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    // deconstruct our file from files data, will return an array with one element
    const { file } = files;
    // deconstruct the needed values from our file object at index 0
    const { newFilename, filepath } = file[0];
    // call our cloudinary uploader with the required arguments
    const result = await cloudinary.v2.uploader.upload(filepath, {
      public_id: newFilename,
    });

    // return our just uploaded image result from cloudinary upload
    return res.status(201).json(result);
  });
}
