"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { coverPage } from "./data";
import { Lock, Unlock } from 'lucide-react';
import Image from 'next/image';

const supabase = createClient(
  'your-supabase-url',
  'your-supabase-anon-key'
);

const BgCover = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [currentBg, setCurrentBg] = useState(coverPage[0]['image-src']);
  const [session, setSession] = useState(null);

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentBg.startsWith('/') ? currentBg : `/${currentBg}`})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <h1 className="text-4xl font-bold text-white">
                  NoteBook
                </h1>
                <button
                  onClick={() => setIsLocked(!isLocked)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  {isLocked ? 
                    <Lock className="text-white" size={24} /> : 
                    <Unlock className="text-white" size={24} />
                  }
                </button>
              </div>
            </div>

            <div className="absolute bottom-8 flex gap-2">
              {coverPage.map((cover) => (
                <button
                 title="btn"
                  key={cover.id}
                  onClick={() => setCurrentBg(cover['image-src'])}
                  className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/20 hover:border-white/60 transition-colors"
                >
                  <Image 
                    src={cover['image-src']}
                    alt={cover.category}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BgCover;