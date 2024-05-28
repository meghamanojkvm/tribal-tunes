import { Client, Databases, Account } from "appwrite";
import conf from "../conf/conf.js";
const client = new Client();
client
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
