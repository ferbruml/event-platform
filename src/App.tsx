import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Router } from "./components/Router";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";
import { client } from "./lib/apollo"
import { Lab } from "./pages/Lab";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  
  //const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)
  /* SUBSTITUÍDO PELO HOOK
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(resp => {
      console.log(resp.data)
    })
  }, [])
  */

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

