import type { SocialPost } from "@/types/social-post";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Share2 as Facebook, Camera as Instagram, MessageSquare, MessageCircle as MessageIcon, Share2, ExternalLink, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialFeedProps {
  posts: SocialPost[];
}

const platformIcons = {
  facebook: Facebook,
  instagram: Instagram,
  whatsapp: MessageSquare,
};

const platformColors = {
  facebook: "bg-[#1877F2]",
  instagram: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  whatsapp: "bg-[#25D366]",
};

const PlatformIcon = ({ platform }: { platform: SocialPost['platform'] }) => {
  const Icon = platformIcons[platform];
  return <Icon className="w-5 h-5 text-white" />;
};

export function SocialFeed({ posts }: SocialFeedProps) {
  if (!posts || posts.length === 0) {
    return (
      <section className="py-20 px-4 bg-transparent">
        <div className="container mx-auto text-center">
          <p className="text-lg text-gray-400 font-sans">Mantenete atento a nuestras próximas publicaciones.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none text-center">Publicaciones Recientes</h2>
          <p className="text-gray-400 text-lg font-sans max-w-2xl mx-auto">
            Lo que está pasando ahora mismo en nuestras redes sociales oficiales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-card border-l-4 transition-all duration-300 flex flex-col shadow-lg hover:-translate-y-1.5",
                post.platform === 'facebook' ? "border-l-[#1877F2]" :
                post.platform === 'instagram' ? "border-l-[#DD2A7B]" :
                "border-l-[#25D366]"
              )}
            >
              <div className="flex flex-row items-center space-x-4 p-6 border-b border-white/5">
                {post.user.avatarUrl ? (
                  <div className="relative">
                    <Image
                      src={post.user.avatarUrl}
                      alt={post.user.name}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-primary/20"
                    />
                    <div className={cn("absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white border-2 border-card shadow-sm", platformColors[post.platform])}>
                      <PlatformIcon platform={post.platform} />
                    </div>
                  </div>
                ) : (
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md", platformColors[post.platform])}>
                    <PlatformIcon platform={post.platform} />
                  </div>
                )}
                <div>
                  <a href={post.user.profileUrl || post.postUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <h3 className="text-body-lg font-bold font-display text-white">{post.user.name}</h3>
                  </a>
                  <p className="text-xxs text-gray-400 font-sans uppercase tracking-widest">
                    {new Date(post.timestamp).toLocaleDateString('es-AR', { month: 'short', day: 'numeric' })} • {post.platform}
                  </p>
                </div>
              </div>

              <div className="flex-grow">
                {post.imageUrl && post.platform !== 'whatsapp' && (
                  <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden relative group">
                    <Image
                      src={post.imageUrl}
                      alt={`Post de ${post.user.name}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </a>
                )}
                
                <div className="p-6">
                  <p className="text-gray-400 leading-relaxed text-sm font-sans line-clamp-4">
                    {post.content}
                  </p>
                </div>

                {post.platform === 'whatsapp' && (
                   <div className="px-6 pb-6">
                    <Button asChild className={cn("w-full h-12 text-slate-900 uppercase font-display font-black text-label-md rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-md", platformColors[post.platform])}>
                      <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-5 w-5" /> Iniciar Chat Web
                      </a>
                    </Button>
                   </div>
                )}
              </div>

              {post.platform !== 'whatsapp' && (
                <div className="p-6 border-t border-white/5 flex items-center justify-between bg-white/5">
                  <div className="flex items-center space-x-4 text-gray-400 font-sans font-bold text-sm">
                    {post.likes !== undefined && (
                      <span className="flex items-center hover:text-primary transition-colors cursor-pointer"><ThumbsUp className="w-4 h-4 mr-1.5" /> {post.likes}</span>
                    )}
                    {post.comments !== undefined && (
                      <span className="flex items-center hover:text-primary transition-colors cursor-pointer"><MessageIcon className="w-4 h-4 mr-1.5" /> {post.comments}</span>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" asChild className="text-primary font-bold hover:bg-primary/10 rounded-xl">
                    <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
                      Ver Original <ExternalLink className="ml-1.5 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-blue-600 text-white uppercase font-display font-black text-label-md h-14 px-10 rounded-xl shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
            Seguir todas nuestras cuentas <span className="ml-2 font-sans">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
