import { motion } from 'framer-motion';
import { Music, Activity } from 'lucide-react';

const ALBUM_COVER = 'https://media.base44.com/images/public/6a0ae0fbe68a76367d0f391e/2896020d9_generated_ebf6bde1.png';

const recentTracks = [
  { title: '隔著螢幕想念你', artist: 'Patrick Brasca', playing: true },
  { title: 'Daylight', artist: 'David Kushner', playing: false },
  { title: 'Die With A Smile', artist: 'Lady Gaga, Bruno Mars', playing: false },
  { title: 'APT.', artist: 'ROSÉ, Bruno Mars', playing: false },
  { title: 'Birds of a Feather', artist: 'Billie Eilish', playing: false },
];

export default function Telemetry() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Audio Telemetry</h1>
          <p className="mt-3 text-muted-foreground">
            What I'm currently listening to on Spotify.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-10 p-6 rounded-2xl border border-border bg-card"
        >
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-emerald-500 tracking-wider uppercase">Now Playing</span>
          </div>
          <div className="flex items-center gap-5">
            <img
              src={ALBUM_COVER}
              alt="Album cover"
              className="w-20 h-20 rounded-xl object-cover shadow-lg"
            />
            <div>
              <h2 className="text-xl font-display text-foreground">隔著螢幕想念你</h2>
              <p className="text-muted-foreground mt-1">Patrick Brasca</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 space-y-2">
          <p className="text-xs font-mono text-muted-foreground/60 tracking-wider uppercase mb-4">Recent Tracks</p>
          {recentTracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${
                track.playing ? 'bg-secondary border border-border' : 'hover:bg-secondary/50'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                {track.playing ? (
                  <Activity className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Music className="w-4 h-4 text-muted-foreground/40" />
                )}
              </div>
              <div className="min-w-0">
                <p className={`text-sm truncate ${track.playing ? 'text-foreground font-medium' : 'text-foreground/80'}`}>
                  {track.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}