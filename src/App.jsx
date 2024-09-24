import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

// export default App;
// import { useState } from "react";

// const data = [
//   { question: "question1", answer: "answer1", id: 0, status: "false" },
//   { question: "question2", answer: "answer2", id: 1, status: "false" },
//   { question: "question3", answer: "answer3", id: 2, status: "false" },
//   { question: "question4", answer: "answer4", id: 3, status: "false" },
// ];

// export default function App() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div
//       className="App"
//       style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
//     >
//       {data.map((item, index) => (
//         <AccordianItem
//           item={item}
//           index={index}
//           selected={selected}
//           key={crypto.randomUUID()}
//           setSelected={setSelected}
//         />
//       ))}
//     </div>
//   );
// }

// function AccordianItem({ item, index, selected, setSelected }) {
//   const isOpen = selected === index;
//   console.log(isOpen)
//   console.log(index, selected);
//   const handlePress = function () {
//     setSelected(() => (isOpen ? null : index));
//   };
//   return (
//     <div
//       style={{ border: "1px solid black", fontSize: "24px" }}
//       onClick={handlePress}
//     >
//       <p> {item.question}</p>
//       {isOpen ? <p>{item.answer}</p> : ""}
//     </div>
//   );
// }
