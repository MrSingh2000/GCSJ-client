// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import csvParser from "csv-parser";
import { Readable } from "stream";
import { registration } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const keys = {
      type: process.env.GOOGLE_TYPE,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: process.env.GOOGLE_AUTH_URI,
      token_uri: process.env.GOOGLE_TOKEN_URI,
      auth_provider_x509_cert_url:
        process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
      universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
    };

    const auth = new google.auth.GoogleAuth({
      credentials: keys,
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });

    const drive = google.drive({ version: "v3", auth });

    // const url = "https://drive.google.com/uc?export=view&id=1V2jGs4uuBYgQU-NII4-gS0d7RN6gWmXV"

    const fileId = "1V2jGs4uuBYgQU-NII4-gS0d7RN6gWmXV"; // Replace with the actual file ID from Google Drive
    const response = await drive.files.get(
      { fileId, alt: "media" },
      { responseType: "stream" }
    );

    // Send the CSV file as a response
    // res.setHeader('Content-Type', 'text/csv');

    /// Create a stream from the response data
    const stream = response.data;

    // Use a Readable stream to process the CSV data
    const readableStream = new Readable();
    readableStream._read = () => {};

    stream.on("data", (chunk) => {
      readableStream.push(chunk);
    });

    stream.on("end", () => {
      readableStream.push(null); // Signal the end of the stream
    });

    let data: registration[] = [];

    readableStream
      .pipe(csvParser())
      .on("data", (row) => {
        // Process each row and add it to the data array
        data.push(row);
      })
      .on("end", () => {
        // Send the parsed data as a JSON response
        res.status(200).json(data);
      });

    // response.data.pipe(res);
  } catch (error) {
    console.error("Error fetching Google Drive CSV file:", error);
    res
      .status(500)
      .json({ error: "Error fetching Google Drive CSV file: " + error });
  }
}
