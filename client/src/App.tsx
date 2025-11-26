import React, { useEffect, useState } from "react";
import { socket } from "./socket";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import Game from "./components/Game/Game";
import Cards from "./components/Cards/Cards";
import Lobby from "./components/Lobby/Lobby";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  isConnected: boolean;
}> = ({ children, isConnected }) => {
  return isConnected ? <>{children}</> : <Navigate to="/" replace />;
};

const AppContent: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleConnect(): void {
    if (socket.connected) {
      setIsConnected(true);
      socket.emit("playerConnect");
    } else {
      socket.connect();
    }
  }

  useEffect(() => {
    function handleConnectEvent(): void {
      setIsConnected(true);
      socket.emit("playerConnect");
    }

    function handleDisconnect(): void {
      setIsConnected(false);
      navigate("/");
    }

    function handleChangeGamePhase(newGamePhase: string): void {
      console.log("Новая игровая фаза", newGamePhase);
      navigate("/" + newGamePhase);
    }

    socket.on("connect", handleConnectEvent);
    socket.on("disconnect", handleDisconnect);
    socket.on("changeGamePhase", handleChangeGamePhase);

    if (socket.connected) {
      handleConnectEvent();
    }

    return () => {
      socket.off("connect", handleConnectEvent);
      socket.off("disconnect", handleDisconnect);
      socket.off("changeGamePhase", handleChangeGamePhase);
    };
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<StartPage handleConnect={handleConnect} />} />
      <Route
        path="/lobby"
        element={
          <ProtectedRoute isConnected={isConnected}>
            <Lobby />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cards"
        element={
          <ProtectedRoute isConnected={isConnected}>
            <Cards />
          </ProtectedRoute>
        }
      />
      <Route
        path="/game"
        element={
          <ProtectedRoute isConnected={isConnected}>
            <Game />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
