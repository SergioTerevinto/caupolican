import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"

import app from "./config.js"

const db = getFirestore(app)

export default db 