import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase"
import { setDoc, doc, addDoc, collection } from "firebase/firestore"
import { CreateDriverRequest } from "../models/register.driver";


export const registerUser = async (request: CreateDriverRequest) => {
  try {
    const createdUser = await createUserWithEmailAndPassword(auth, request.email, request.password);
    const userId = createdUser.user.uid;
    // TODO  : Implement BCRYPT for password hashing, d not leave password in clear.
    const userDocumnetRef = await setDoc(doc(db, "users", userId), request);
  } catch (error) {
    console.log(error);
  }
}

export const login = async (user: IAuthModel) => {
  try {
    const createdUser = await signInWithEmailAndPassword(auth, user.email, user.password);
    console.log(createdUser);
  } catch (error) {
    console.log(error);
  }
}

export const getAuthenticatedUser = () => {
  try {

  } catch (error) {

  }
}

export const getUser = (email: string) => {
  
}
export const logout = () => {

}