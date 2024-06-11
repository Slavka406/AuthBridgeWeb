import "./App.css"

import firebase from "firebase/compat/app"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    window.addEventListener("message", receiveMessage)

    return () => {
      window.removeEventListener("message", receiveMessage)
    }
  }, [])

  // Set token from native
  const receiveMessage = async (event) => {
    if (event?.data?.isToken && event?.data?.value) {
      try {
        firebase.auth().signInWithCustomToken(event.data.value)
      } catch (error) {
        console.error(error)
      }
      // alert(JSON.stringify(event?.data))
    }
    if (event?.data?.isCheckAuth) {
      // alert(JSON.stringify(event?.data))
      const user = await firebase.auth().currentUser
      const data = { isCheckAuth: true, value: user }

      window.ReactNativeWebView.postMessage(JSON.stringify(data))
    }
    if (event?.data?.isSignOut) {
      await firebase.auth().signOut()
    }
  }

  const sendMessageToNative = () => {
    window.ReactNativeWebView.postMessage("Hi from webview!")
  }

  // const signInWithToken = async () => {
  //   const credentials = {
  //     email: "slavka1406@gmail.com",
  //     password: "12345678",
  //   }
  //   try {
  //     // console.log(
  //     //   "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vidmlldy1iNTE1OCIsImF1ZCI6IndlYnZpZXctYjUxNTgiLCJhdXRoX3RpbWUiOjE3MTIyNTkzNTEsInVzZXJfaWQiOiJCa3BvV29pcVY2ZmJXVUVwQ00wdktRS1hMOTEzIiwic3ViIjoiQmtwb1dvaXFWNmZiV1VFcENNMHZLUUtYTDkxMyIsImlhdCI6MTcxMjI1OTg1NCwiZXhwIjoxNzEyMjYzNDU0LCJlbWFpbCI6InNsYXZrYTE0MDZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNsYXZrYTE0MDZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gLq-GxJAvvsTlPRdFrvtBz7RqvCNC9fJbNuDPCooDTgypYTOpey0J8IYanh3spV4KszVbCNmmNiWq8gpnkfyw3yi28OEw_wUtOvzKEt-cLx05OP-pEmlMqiVX0CMPSFaktR6aNSMvDgH2JCcwM2kl2mPQNDITZROWqt_7AR8XKkgVMn0Pu7UzU4t3z8H85xCbE_PYYS8u17C2RHJtrnCV9w6wQWoav3O1Aau9Wtv0CFCZgUXPN0fdIJ9ASmwVwMJ-kFosFjCHHr7UChIZHIL85oPIorRjfiOoUyC6YFO023fG2hJVOZ_WCi8iMNp-N0dbHPPf9jpLpV08FSkeyCfkA"
  //     // )
  //     // await firebase
  //     //   .auth()
  //     //   .signInWithCustomToken(
  //     //     "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vidmlldy1iNTE1OCIsImF1ZCI6IndlYnZpZXctYjUxNTgiLCJhdXRoX3RpbWUiOjE3MTIyNTkzNTEsInVzZXJfaWQiOiJCa3BvV29pcVY2ZmJXVUVwQ00wdktRS1hMOTEzIiwic3ViIjoiQmtwb1dvaXFWNmZiV1VFcENNMHZLUUtYTDkxMyIsImlhdCI6MTcxMjI1OTg1NCwiZXhwIjoxNzEyMjYzNDU0LCJlbWFpbCI6InNsYXZrYTE0MDZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNsYXZrYTE0MDZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gLq-GxJAvvsTlPRdFrvtBz7RqvCNC9fJbNuDPCooDTgypYTOpey0J8IYanh3spV4KszVbCNmmNiWq8gpnkfyw3yi28OEw_wUtOvzKEt-cLx05OP-pEmlMqiVX0CMPSFaktR6aNSMvDgH2JCcwM2kl2mPQNDITZROWqt_7AR8XKkgVMn0Pu7UzU4t3z8H85xCbE_PYYS8u17C2RHJtrnCV9w6wQWoav3O1Aau9Wtv0CFCZgUXPN0fdIJ9ASmwVwMJ-kFosFjCHHr7UChIZHIL85oPIorRjfiOoUyC6YFO023fG2hJVOZ_WCi8iMNp-N0dbHPPf9jpLpV08FSkeyCfkA"
  //     //   )

  //     const user = await firebase
  //       .auth()
  //       .signInWithEmailAndPassword(credentials.email, credentials.password)
  //     console.log("user", user)
  //     checkAuth()
  //   } catch (error) {
  //     console.log("error", error)
  //   }
  // }

  const checkAuth = async () => {
    const user = await firebase.auth().currentUser
    alert(user?.email)
  }

  const signOut = async () => {
    try {
      await firebase.auth().signOut()
      alert("Sign out success")
    } catch (error) {
      alert("Sign out error")
    }
  }

  const fetchToken = async () => {
    // const user = auth().currentUser
    // const uid = user?.uid
    const fetchUrl = "https://helloworld-l6xwtopn4a-uc.a.run.app"
    try {
      const res = await fetch(fetchUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // origin: 'webviewRN',
        },
        // body: JSON.stringify(uid),
      })

      console.log("res", res)
    } catch (error) {
      console.log(error, error.message)
    }
  }

  return (
    <div className="App">
      {/* <input type="file"></input> */}
      <p style={{ marginTop: "200px" }}>Webview app</p>

      <div style={{ marginBottom: "20px" }}>
        {/* <button onClick={signInWithToken}>Sign in</button> */}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={checkAuth}>Check auth</button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={signOut}>Sign out</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        {/* <button onClick={fetchToken}>Fetch</button> */}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={sendMessageToNative}>Send message to native</button>
      </div>
    </div>
  )
}

export default App
