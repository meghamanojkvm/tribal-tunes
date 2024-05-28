const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteKey: String(import.meta.env.VITE_APPWRITE_KEY),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteImageBucketId: String(import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID),
    appwriteAudioBucketId: String(import.meta.env.VITE_APPWRITE_AUDIO_BUCKET_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATEBASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
}

export default config