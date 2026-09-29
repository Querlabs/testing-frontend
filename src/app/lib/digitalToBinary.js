import {
    S3Client,
    GetObjectCommand,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export const getFileFromS3 = async (s3Key) => {
    try {
        if (!s3Key) {
            throw new Error("S3 key is required");
        }

        const command = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: s3Key,
        });

        const response = await s3Client.send(command);

        if (!response.Body) {
            throw new Error("File body not found in S3");
        }

        // Convert S3 stream to Buffer
        const bytes = await response.Body.transformToByteArray();

        return Buffer.from(bytes);

    } catch (error) {
        console.error("S3 File Fetch Error:", error);

        throw new Error(
            `Failed to fetch file from S3: ${error.message}`
        );
    }
};