import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null
        }

        //upload file on cloudinary

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        //file has been uploaded successfully

        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
            console.log(`Successfully uploaded and deleted local file: ${localFilePath}`);
        } else {
            console.warn(`Local file not found, could not delete: ${localFilePath}`);
        }
        // console.log("File uploaded on cloudinary ", response.url);
        return response

    } catch (error) {
        console.error("Error during upload or file deletion:", error);

        // Remove the local file if the upload failed
        if (fs.existsSync(localFilePath)) {
            try {
                fs.unlinkSync(localFilePath);
                console.log(`Local file deleted after failed upload: ${localFilePath}`);
            } catch (unlinkError) {
                console.error(`Failed to delete local file after upload error: ${localFilePath}`, unlinkError);
            }
        } else {
            console.warn(`Local file not found after upload error, could not delete: ${localFilePath}`);
        }

        return null;
    }
}

export { uploadOnCloudinary }