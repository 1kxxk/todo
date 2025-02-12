import TodoProvider from "./components/provider/TodoProvider"
import RootLayout from "./components/todo/layout/RootLayout"
import TodoContainer from "./components/todo/TodoContainer"
import TodoDashbord from "./components/todo/TodoDashbord"

const App = () => {
  return (
    <TodoProvider>
    <RootLayout>
      <TodoDashbord/>
      <TodoContainer/>
    </RootLayout>
    </TodoProvider>
  )
}

export default App