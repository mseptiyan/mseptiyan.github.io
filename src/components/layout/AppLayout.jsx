import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import BottomNav from './BottomNav';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="pb-24">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}