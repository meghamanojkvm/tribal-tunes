import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../appwrite";
import { ID, Query } from "appwrite";

export const TUNES_DATABASE_ID = "6650e8f400203f5cc92e"; // Replace with your database ID
export const TUNES_COLLECTION_ID = "6650e90c001e7c25248b"; // Replace with your collection ID

const TunesContext = createContext();

export function useTunes() {
  return useContext(TunesContext);
}

export function TunesProvider(props) {
  const [instruments, setInstruments] = useState([]);

  async function add(instrument) {
    const response = await databases.createDocument(
      TUNES_DATABASE_ID,
      TUNES_COLLECTION_ID,
      ID.unique(),
      instrument
    );
    setInstruments((instruments) => [response, ...instruments].slice(0, 10));
  }

  async function remove(id) {
    await databases.deleteDocument(TUNES_DATABASE_ID, TUNES_COLLECTION_ID, id);
    setInstruments((instruments) => instruments.filter((instrument) => instrument.$id !== id));
    await init(); // Refetch ideas to ensure we have 10 items
  }

  async function init() {
    const response = await databases.listDocuments(
      TUNES_DATABASE_ID,
      TUNES_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    setInstruments(response.documents);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <IdeasContext.Provider value={{ current: instruments, add, remove }}>
      {props.children}
    </IdeasContext.Provider>
  );
}
