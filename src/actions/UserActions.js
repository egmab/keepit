import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const fetchUser = (user) => {
  return {
    type: 'FETCH_USER',
    payload: user,
  }
}

const fetchUserInfos = (userInfos) => {
  return {
    type: 'FETCH_USER_INFOS',
    payload: userInfos,
  }
}

const userDisconnected = () => {
  return {
    type: 'NO_USER'
  }
}

export const fetchUserStuff = () => {
  console.log("hello1")
  return dispatch => {
    console.log("hello2")

    firebase.auth().onAuthStateChanged((user) => {
      console.log("hello3")

      if (user) {
        dispatch(fetchUser(user))
        console.log("hello4", user)

        const docRef = firebase.firestore().collection('userInfos').doc(user.uid);

        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch(fetchUserInfos(doc.data()));
            } else {
              docRef.set({
                name: user.displayName,
              })
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })
  }
}

// Connection with Google
export const loginGoogle = () => {
  console.log('hello google')
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(googleProvider);
};

// Deconnexion
export const logout = () => {
  return dispatch => {
    firebase.auth().signOut().then(dispatch(userDisconnected()));
  }
};

// export function removeItem(index) {
//   return { type: 'REMOVE_ITEM', payload : index }
// }