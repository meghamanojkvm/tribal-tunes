const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteKey: String(import.meta.env.VITE_APPWRITE_KEY),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
}

export default config