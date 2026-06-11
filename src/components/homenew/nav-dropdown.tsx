'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavDropdownProps {
  group: any;
}

export function NavDropdown({ group }: NavDropdownProps) {
  const pathname = usePathname();
  const GroupIcon = group.icon;
  const groupIsActive = pathname?.startsWith(group.basePath);
  const isActive = (path: string) => pathname === path;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          className={cn(
            "flex cursor-pointer items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 border",
            groupIsActive
              ? "bg-primary/10 text-primary border-primary/20 shadow-md shadow-primary/5"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/20 border-transparent",
          )}
          whileTap={{ scale: 0.95 }}
        >
          <GroupIcon className="h-4 w-4" />
          <span>{group.label}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-64 bg-card/95 backdrop-blur-2xl border-border/80 text-foreground shadow-2xl p-2">
        {group.items.map((item: any) => {
          const ItemIcon = item.icon;
          return (
            <DropdownMenuItem key={item.href} asChild className="focus:bg-primary/20 focus:text-primary cursor-pointer rounded-md p-3 transition-colors">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-4",
                  isActive(item.href) ? "text-primary font-bold" : "text-muted-foreground",
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-md flex items-center justify-center transition-colors",
                  isActive(item.href) ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                )}>
                  {ItemIcon && <ItemIcon className="h-4 w-4" />}
                </div>
                <span className="text-sm">{item.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
