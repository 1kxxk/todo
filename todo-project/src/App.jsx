import { BrowserRouter, Route, Routes } from "react-router"
import RootLayout from "./components/todo/layout/RootLayout"
import HomePage from "./pages/HomePage"
import TodoDetailPage from "./pages/TodoDetailPage"
import TodoProvider from "./components/provider/TodoProvider"

const App = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/:id' element={<TodoDetailPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </TodoProvider>
  )
}

export default App