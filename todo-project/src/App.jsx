import RootLayout from "./components/todo/layout/RootLayout"
import TodoContainer from "./components/todo/TodoContainer"
import TodoDashbord from "./components/todo/TodoDashbord"

const App = () => {
  return (
    <RootLayout>
      <TodoDashbord/>
      <TodoContainer/>
    </RootLayout>
  )
}

export default App