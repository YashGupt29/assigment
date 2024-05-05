import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Navbar from "./components/Navbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CardLayout from "./components/_CardComponents/CardLayout";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Navbar />
      <CardLayout />
    </QueryClientProvider>
  );
}

export default App;
