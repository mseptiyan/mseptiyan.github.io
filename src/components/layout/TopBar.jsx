import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 flex items-center justify-between">
      <Link to="/" className="group">
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none" className="text-primary">
          <path d="M20 4L8 12V28L20 36L32 28V12L20 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M14 16L20 12L26 16L20 28L14 16Z" fill="currentColor"/>
        </svg>
      </Link>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Globe className="w-4 h-4" />
          <span className="font-mono text-xs tracking-wider">EN</span>
        </button>
      </div>
    </header>
  );
}