// Documentación: https://firebase.google.com/docs/firestore?hl=es-419
import { db } from './firebase'
import { collection, addDoc, getDocs, getDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'

/**
 *
 * @param {*} uid ruta en firestore donde quiero que se manden los datos.
 * @param {Object} data objeto en el que estan almacenados los datos del formulario: Ejemplo: {nombre: "",descripcion_breve: "",descripcion: "",fecha: Timestamp}
 * @return {Object} El Objeto insertado con varias propiedades interesantes entre ello el id
 */
export const addDocument = async (uid, data) => await addDoc(collection(db, uid), { ...data, createdAt: serverTimestamp() })

/**
 *
 * @param {string} uid ruta firestore de donde quiero bajar los datos. Puede ser un documento, una colección ...
 * @returns {array} de objetos donde estan almacenados los datos
 */
export const getDocuments = async (uid) => {
  const querySnapshot = await getDocs(collection(db, uid))
  const tmp = []
  querySnapshot.forEach((doc) => {
    tmp.push({
      idDoc: doc.id,
      ...doc.data() // DESTRUCTURING
    })
  })
  return tmp
}

/**
     * @param {String} collectionName Nombre de la colección
     * @param {String} reference Referencia del documento a recuperar
     * @returns {Object} Objeto con las columnas del documento o null si no lo encuentra
     */
export const getDocument = async (collectionName, reference) => {
  const docRef = doc(db, collectionName, reference)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return {
      idDoc: docSnap.id,
      ...docSnap.data()
    }
  } else { return null }
}

/**
 *
 * @param {string} collection nombre de la colección en la que se encuentra el archivo que se va a borrar
 * @param {string} uid código del documento que vamos a borrar
 */
export const deleteDocument = async (collection, uid) => {
  await deleteDoc(doc(db, collection, uid))
}

/**
 * Función que actualiza la información de un documento parcial o completo de firestore db
 *
 * @param {string} uid optiene la uid del documento
 * @param {string} collection
 * @param {Object} data
 */
export const updateDocument = async (uid, collection, data = {}) => await updateDoc(doc(db, collection, uid), data)
