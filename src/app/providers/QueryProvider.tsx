// export default function QueryProvider({children}:{children:React.ReactNode}){return <>{children}</>}
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../api/queryClient";

type QueryProviderProps = {
  children: React.ReactNode;
};

function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default QueryProvider;